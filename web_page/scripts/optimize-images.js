// Makes light, web-ready copies of the site photos: npm run images
// For every photo in public/assets/images/<folder>/ it writes, next to the original:
//   <name>.avif      same picture as AVIF (much smaller), at most 1600 px wide
//   <name>-sm.avif   a ~720 px wide AVIF for phones and small slots
//   <name>-sm.<ext>  the same small size in the original format, for old browsers
//   <name>-lg.jpg    only for originals wider than 1600 px: a 1600 px fallback
// and records what exists in src/data/image-variants.json, which the build reads to
// write <picture> + srcset for each <img>. Only redoes files whose original changed.
// Uses macOS `sips` (built in). No npm dependencies.

const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const PUBLIC = path.resolve(__dirname, '..', 'public');
const IMAGES = path.join(PUBLIC, 'assets', 'images');
const OUT = path.resolve(__dirname, '..', 'src', 'data', 'image-variants.json');
const FOLDERS = ['hero', 'welcome', 'plants', 'nuts', 'museum', 'herbes', 'instagram', 'residencia', 'joc'];

const MAX_W = 1600;   // biggest width we ever send
const SM_W = 720;     // small variant width
const MIN_BYTES = 20000; // tiny files are already cheap; leave them alone
const Q_AVIF = 55, Q_AVIF_SM = 50, Q_JPG = 74;

const isGenerated = (f) => /-(sm|lg)\.[a-z]+$/.test(f) || f.endsWith('.avif');
const fresh = (out, src) => fs.existsSync(out) && fs.statSync(out).mtimeMs >= fs.statSync(src).mtimeMs;

function sips(args) { execFileSync('sips', args, { stdio: 'ignore' }); }
function size(file) {
  const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', '-g', 'hasAlpha', file], { encoding: 'utf8' });
  return { w: Number(out.match(/pixelWidth: (\d+)/)[1]), h: Number(out.match(/pixelHeight: (\d+)/)[1]), alpha: /hasAlpha: yes/.test(out) };
}
// write `src` as `format` to `out`, resized to `width` if smaller than the original
function make(src, out, format, quality, width, srcW) {
  if (fresh(out, src)) return;
  const args = ['-s', 'format', format];
  if (quality) args.push('-s', 'formatOptions', String(quality));
  if (width < srcW) args.push('--resampleWidth', String(width));
  sips([...args, src, '--out', out]);
}

const manifest = {};
let made = 0;
for (const folder of FOLDERS) {
  const dir = path.join(IMAGES, folder);
  if (!fs.existsSync(dir)) continue;
  for (const file of fs.readdirSync(dir).sort()) {
    const ext = path.extname(file).toLowerCase();
    if (!['.jpg', '.jpeg', '.png', '.webp'].includes(ext) || isGenerated(file)) continue;
    const src = path.join(dir, file);
    const base = file.slice(0, -ext.length);
    const url = (f) => `assets/images/${folder}/${f}`;
    const { w, h, alpha } = size(src);
    const entry = { w, h };
    manifest[url(file)] = entry;
    if (fs.statSync(src).size < MIN_BYTES) continue;
    // cut-out pictures (with a see-through background) keep their original file only:
    // the AVIF that sips writes for them can come out blank in Chrome (the fig tree card did),
    // so remove any AVIF made for them earlier and serve the original.
    if (alpha) {
      for (const f of [base + '.avif', base + '-sm.avif']) {
        const p = path.join(dir, f);
        if (fs.existsSync(p)) fs.unlinkSync(p);
      }
      continue;
    }

    const before = made;
    const step = (out, ...a) => { const had = fresh(out, src); make(src, out, ...a); if (!had) made++; };
    const fullW = Math.min(w, MAX_W);

    step(path.join(dir, base + '.avif'), 'avif', Q_AVIF, fullW, w);
    entry.avif = [[url(base + '.avif'), fullW]];
    entry.fallback = [[url(file), w]];

    if (w > MAX_W && ext !== '.webp') { // sips cannot write webp, so webp keeps its original as fallback
      step(path.join(dir, base + '-lg.jpg'), 'jpeg', Q_JPG, MAX_W, w);
      entry.fallback = [[url(base + '-lg.jpg'), MAX_W]];
    }
    if (w > SM_W * 1.25) {
      step(path.join(dir, base + '-sm.avif'), 'avif', Q_AVIF_SM, SM_W, w);
      entry.avif.unshift([url(base + '-sm.avif'), SM_W]);
      if (ext !== '.webp') {
        const smExt = ext === '.png' ? '.png' : '.jpg';
        step(path.join(dir, base + '-sm' + smExt), ext === '.png' ? 'png' : 'jpeg', ext === '.png' ? 0 : Q_JPG, SM_W, w);
        entry.fallback.unshift([url(base + '-sm' + smExt), SM_W]);
      }
    }
    if (made > before) console.log('optimized ' + url(file));
  }
}

fs.writeFileSync(OUT, JSON.stringify(manifest, null, 1) + '\n');
console.log(`${made} file(s) written, ${Object.keys(manifest).length} images in image-variants.json`);
