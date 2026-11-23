// Live development server: npm run dev  (or: node scripts/dev.js [port])
// - builds once, then serves public/ like serve.js
// - any change in src/ re-runs the build
// - any change in public/ (built pages, CSS, JS, images) reloads open browser tabs
// Works no matter which editor saves the file (VS Code, Claude, Finder…). No dependencies.
// The reload snippet is injected into responses only; nothing is written to public/.

const http = require('http'), fs = require('fs'), path = require('path'), { spawn } = require('child_process');
const base = path.resolve(__dirname, '..');
const root = path.join(base, 'public'), src = path.join(base, 'src');
const port = Number(process.env.PORT || process.argv[2] || 4322);
const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.webp': 'image/webp', '.avif': 'image/avif', '.jpg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.woff2': 'font/woff2' };

const RELOAD = `<script>(()=>{const es=new EventSource('/__reload');es.onmessage=()=>location.reload();})();</script>`;
const clients = new Set();

// ---- build (child process so edited templates are re-read every time) ----
let building = false, again = false;
function build() {
  if (building) { again = true; return; }
  building = true;
  const t = Date.now();
  const p = spawn(process.execPath, [path.join(__dirname, 'build.js')], { cwd: base, stdio: ['ignore', 'ignore', 'inherit'] });
  p.on('exit', (code) => {
    building = false;
    console.log(code === 0 ? `✓ rebuilt in ${Date.now() - t} ms` : `✗ build failed (exit ${code}), fix the error and save again`);
    if (again) { again = false; build(); }
  });
}

// ---- watchers ----
const debounce = (fn, ms) => { let id; return (...a) => { clearTimeout(id); id = setTimeout(() => fn(...a), ms); }; };
const ignore = (f) => !f || /(^|[\/\\])\.|~$|\.swp$/.test(f);

fs.watch(src, { recursive: true }, debounce((_, f) => { if (!ignore(f)) { console.log('changed src/' + f); build(); } }, 100));
fs.watch(root, { recursive: true }, debounce((_, f) => {
  if (ignore(f)) return;
  for (const res of clients) res.write('data: reload\n\n');
}, 150));

// ---- server ----
http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p === '/__reload') {
    res.writeHead(200, { 'Content-Type': 'text/event-stream', 'Cache-Control': 'no-cache', Connection: 'keep-alive' });
    res.write(': connected\n\n');
    clients.add(res);
    req.on('close', () => clients.delete(res));
    return;
  }
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(root, p);
  if (!f.startsWith(root)) { res.writeHead(403); return res.end(); }
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(404); return res.end('Not found'); }
    const ext = path.extname(f);
    res.writeHead(200, { 'Content-Type': types[ext] || 'application/octet-stream', 'Cache-Control': 'no-store' });
    if (ext === '.html') {
      const html = data.toString('utf8');
      return res.end(html.includes('</body>') ? html.replace('</body>', RELOAD + '\n</body>') : html + RELOAD);
    }
    res.end(data);
  });
}).listen(port, () => {
  console.log(`Dev server on http://localhost:${port} (watching src/ and public/)`);
  build();
});
