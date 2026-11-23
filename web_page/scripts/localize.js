// Extra languages: one static copy of the site per language in public/<lang>/.
// Catalan, Spanish and English stay in the main pages (switched in the browser by main.js);
// every other language is made here from the built English pages + src/i18n/<lang>.json.
//
//   node scripts/localize.js           (run by build.js at the end) writes public/<lang>/…
//   node scripts/localize.js --missing writes src/i18n/missing/<lang>.json: English strings
//                                      that have no translation yet (to translate, then merge)
//   node scripts/localize.js --merge   merges every src/i18n/missing/<lang>.json that has
//                                      translations filled in back into src/i18n/<lang>.json
//
// Dictionaries map the English text, exactly as it is in the page (inner HTML for text,
// plain text for alt / aria-label / titles; runs of spaces count as one), to the translation.
// Text with no translation stays in English and is listed by the build, so nothing breaks
// when a sentence is edited: it just shows in English until it is translated again.
// Never edit public/<lang>/ by hand: it is deleted and rewritten on every build.

const fs = require('fs');
const path = require('path');

const PUBLIC = path.resolve(__dirname, '..', 'public');
const I18N = path.resolve(__dirname, '..', 'src', 'i18n');

// folder = URL folder and hreflang; html = <html lang>
const EXTRA = [
  { code: 'de', html: 'de' },
  { code: 'fr', html: 'fr' },
  { code: 'it', html: 'it' },
  { code: 'pl', html: 'pl' },
  { code: 'cs', html: 'cs' },
  { code: 'uk', html: 'uk' },
  { code: 'ru', html: 'ru' },
  { code: 'ja', html: 'ja' },
  { code: 'zh', html: 'zh-Hans' },
];

const norm = (s) => String(s).replace(/\s+/g, ' ').trim();
const decode = (s) => s.replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&');
const escAttr = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const VOID = new Set(['area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta', 'source', 'track', 'wbr']);

// ---------- a small HTML tag scanner (quoted attributes may hold < and >) ----------
function tokens(html) {
  const out = [];
  let i = 0;
  while ((i = html.indexOf('<', i)) !== -1) {
    if (html.startsWith('<!--', i)) { const e = html.indexOf('-->', i); i = e < 0 ? html.length : e + 3; continue; }
    const close = html[i + 1] === '/';
    const m = /^[a-zA-Z][\w-]*/.exec(html.slice(i + (close ? 2 : 1), i + 40));
    if (!m) { i++; continue; }
    const name = m[0].toLowerCase();
    let j = i + (close ? 2 : 1) + m[0].length, q = null;
    for (; j < html.length; j++) {
      const c = html[j];
      if (q) { if (c === q) q = null; } else if (c === '"' || c === "'") q = c; else if (c === '>') break;
    }
    out.push({ name, close, start: i, end: j + 1, text: html.slice(i, j + 1) });
    i = j + 1;
    if (!close && (name === 'script' || name === 'style')) {
      const e = html.toLowerCase().indexOf('</' + name, i);
      i = e < 0 ? html.length : e;
    }
  }
  return out;
}
const attr = (tag, name) => { const m = new RegExp(`\\s${name}="([^"]*)"`).exec(tag); return m ? m[1] : null; };
const setAttr = (tag, name, value) => tag.replace(new RegExp(`(\\s${name}=")[^"]*(")`), (_, a, b) => a + escAttr(value) + b);
const dropAttrs = (tag) => tag.replace(/\s+data-(?:ca|es)(?:-[a-z-]+)?="[^"]*"/g, '');

// every English string of one page: [{ kind: 'html' | 'text', en }]
function strings(html) {
  const list = [];
  const toks = tokens(html);
  const titleOpen = toks.find((t) => t.name === 'title' && !t.close);
  if (titleOpen) { const tc = toks.find((t) => t.name === 'title' && t.close && t.start > titleOpen.start); list.push({ kind: 'text', en: decode(html.slice(titleOpen.end, tc.start)) }); }
  for (const t of toks) {
    if (t.close) continue;
    if (t.name === 'meta' && attr(t.text, 'name') === 'description') list.push({ kind: 'text', en: decode(attr(t.text, 'content')) });
    if (/\sdata-(?:ca|es)-alt="/.test(t.text)) list.push({ kind: 'text', en: decode(attr(t.text, 'alt') || '') });
    if (/\sdata-(?:ca|es)-aria="/.test(t.text)) list.push({ kind: 'text', en: decode(attr(t.text, 'aria-label') || '') });
    if (/\sdata-(?:ca|es)-map-title="/.test(t.text)) list.push({ kind: 'text', en: decode(attr(t.text, 'data-map-title') || '') });
    if (/\sdata-(?:ca|es)="/.test(t.text) && !VOID.has(t.name)) list.push({ kind: 'html', en: html.slice(t.end, matchClose(toks, t).start) });
  }
  return list.map((s) => ({ ...s, en: norm(s.en) })).filter((s) => s.en);
}

function matchClose(toks, open) {
  let depth = 0;
  for (let k = toks.indexOf(open) + 1; k < toks.length; k++) {
    const t = toks[k];
    if (t.name !== open.name || VOID.has(t.name)) continue;
    if (!t.close) depth++;
    else if (depth-- === 0) return t;
  }
  throw new Error('no closing </' + open.name + '> for ' + open.text.slice(0, 80));
}

// ---------- one page in one language ----------
function translatePage(html, lang, dict, missing, depth) {
  const tr = (en) => {
    const k = norm(en);
    if (!k) return en;
    if (dict[k] != null && dict[k] !== '') return dict[k];
    missing.add(k);
    return null;
  };
  const toks = tokens(html);
  let out = '', at = 0, skipTo = -1;
  for (const t of toks) {
    if (t.start < skipTo) continue;
    if (t.close) continue;
    let tag = t.text;
    const before = tag;
    if (t.name === 'html') tag = tag.replace(/\slang="[^"]*"/, ` lang="${lang.html}" data-page-lang="${lang.code}"`);
    if (t.name === 'meta' && /^og:(title|description)$/.test(attr(tag, 'property') || '')) { const v = tr(decode(attr(tag, 'content'))); if (v) tag = setAttr(tag, 'content', v); }
    if (t.name === 'meta' && attr(tag, 'name') === 'description') { const v = tr(decode(attr(tag, 'content'))); if (v) tag = setAttr(tag, 'content', v); }
    if (/\sdata-(?:ca|es)-alt="/.test(tag)) { const v = tr(decode(attr(tag, 'alt') || '')); if (v) tag = setAttr(tag, 'alt', v); }
    if (/\sdata-(?:ca|es)-aria="/.test(tag)) { const v = tr(decode(attr(tag, 'aria-label') || '')); if (v) tag = setAttr(tag, 'aria-label', v); }
    if (/\sdata-(?:ca|es)-map-title="/.test(tag)) { const v = tr(decode(attr(tag, 'data-map-title') || '')); if (v) tag = setAttr(tag, 'data-map-title', v); }
    // language menu: this page's language is the one ticked
    if (/\sdata-lang-set="/.test(tag)) tag = tag.replace(/aria-pressed="[^"]*"/, `aria-pressed="${attr(tag, 'data-lang-set') === lang.code}"`);
    const isText = /\sdata-(?:ca|es)="/.test(tag) && !VOID.has(t.name);
    tag = dropAttrs(tag);
    if (tag !== before) { out += html.slice(at, t.start) + tag; at = t.end; }

    if (t.name === 'title' || isText) {
      const close = t.name === 'title' ? toks.find((c) => c.close && c.name === 'title' && c.start > t.start) : matchClose(toks, t);
      const inner = html.slice(t.end, close.start);
      const v = tr(t.name === 'title' ? decode(inner) : inner);
      if (v != null) {
        const lead = /^\s*/.exec(inner)[0], trail = /\s*$/.exec(inner)[0];
        out += html.slice(at, t.end) + lead + (t.name === 'title' ? escAttr(v) : v) + trail;
        at = close.start;
        skipTo = close.start;
      }
    }
    // the language button in the header shows this page's flag and code
    if (/class="lang-current"/.test(t.text)) {
      const close = matchClose(toks, t);
      const btn = new RegExp(`<button[^>]*data-lang-set="${lang.code}"[^>]*>([\\s\\S]*?)<span>`).exec(html);
      const flag = btn ? btn[1].trim() : '';
      const code = (new RegExp(`data-lang-set="${lang.code}" data-code="([^"]+)"`).exec(html) || [])[1] || lang.code.toUpperCase();
      out += html.slice(at, t.end) + flag + `<span class="lang-code">${code}</span>`;
      at = close.start;
      skipTo = close.start;
    }
  }
  out += html.slice(at);
  // assets live one folder up from public/<lang>/
  return out.replace(/((?:src|href|srcset|poster|content|data-map-src)="|url\(|,\s*|\s)((?:\.\.\/)*)assets\//g, (m, a, up) => `${a}../${up}assets/`);
}

// <link rel="alternate" hreflang> on every page (main pages and their copies) so search engines pair them,
// plus the page's own canonical address. Search engines need full URLs here (SITE_URL in layout.js).
const { SITE_URL } = require('../src/templates/layout.js');
const urlOf = (file, code) => SITE_URL + (code ? code + '/' : '') + file.replace(/(^|\/)index\.html$/, '$1');
function alternates(file, code) {
  const rows = [`<link rel="canonical" href="${urlOf(file, code)}">`,
    `<meta property="og:url" content="${urlOf(file, code)}">`,
    `<link rel="alternate" hreflang="x-default" href="${urlOf(file)}">`]
    .concat(EXTRA.map((l) => `<link rel="alternate" hreflang="${l.html}" href="${urlOf(file, l.code)}">`));
  return rows.join('\n');
}
const withAlternates = (html, file, code) => html
  .replace(/\n?<!-- hreflang -->[\s\S]*?<!-- \/hreflang -->/, '')
  .replace('</head>', `<!-- hreflang -->\n${alternates(file, code)}\n<!-- /hreflang -->\n</head>`);

// sitemap.xml + robots.txt for search engines: every page in every language
function writeSitemap(files) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = files.flatMap((f) => [null, ...EXTRA.map((l) => l.code)].map((c) => `  <url><loc>${urlOf(f, c)}</loc><lastmod>${today}</lastmod></url>`));
  fs.writeFileSync(path.join(PUBLIC, 'sitemap.xml'), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`);
  fs.writeFileSync(path.join(PUBLIC, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}sitemap.xml\n`);
}

// ---------- files ----------
function pages() {
  const list = [];
  for (const f of fs.readdirSync(PUBLIC)) if (f.endsWith('.html')) list.push(f);
  const lib = path.join(PUBLIC, 'library');
  if (fs.existsSync(lib)) for (const f of fs.readdirSync(lib)) if (f.endsWith('.html')) list.push('library/' + f);
  return list.filter((f) => { if (f === '404.html') return false; const h = fs.readFileSync(path.join(PUBLIC, f), 'utf8'); return /<html[^>]*lang=/.test(h) && !/http-equiv="refresh"/.test(h); }); // skips bare redirect pages
}
const readDict = (code) => { try { return JSON.parse(fs.readFileSync(path.join(I18N, code + '.json'), 'utf8')); } catch (e) { return {}; } };
const sortObj = (o) => Object.fromEntries(Object.keys(o).sort().map((k) => [k, o[k]]));

function build() {
  const files = pages();
  const report = [];
  for (const lang of EXTRA) {
    const dict = readDict(lang.code);
    const dir = path.join(PUBLIC, lang.code);
    fs.rmSync(dir, { recursive: true, force: true });
    const missing = new Set();
    for (const f of files) {
      const depth = f.split('/').length; // public/<lang>/x.html → 1 folder deeper than public/x.html
      const html = fs.readFileSync(path.join(PUBLIC, f), 'utf8');
      const out = withAlternates(translatePage(html, lang, dict, missing, depth), f, lang.code);
      fs.mkdirSync(path.dirname(path.join(dir, f)), { recursive: true });
      fs.writeFileSync(path.join(dir, f), out);
    }
    report.push(`${lang.code} ${missing.size ? missing.size + ' untranslated' : 'complete'}`);
  }
  // the main pages get the same hreflang list
  for (const f of files) {
    const p = path.join(PUBLIC, f);
    fs.writeFileSync(p, withAlternates(fs.readFileSync(p, 'utf8'), f));
  }
  writeSitemap(files);
  console.log(`wrote ${EXTRA.length} languages × ${files.length} pages: ${report.join(', ')}` + (report.some((r) => /untranslated/.test(r)) ? '  (npm run i18n:missing lists them)' : ''));
}

function writeMissing() {
  const all = new Map();
  for (const f of pages()) for (const s of strings(fs.readFileSync(path.join(PUBLIC, f), 'utf8'))) if (!all.has(s.en)) all.set(s.en, s.kind);
  const dir = path.join(I18N, 'missing');
  fs.mkdirSync(dir, { recursive: true });
  for (const lang of EXTRA) {
    const dict = readDict(lang.code);
    const miss = {};
    for (const en of all.keys()) if (!dict[en]) miss[en] = '';
    const p = path.join(dir, lang.code + '.json');
    if (Object.keys(miss).length) fs.writeFileSync(p, JSON.stringify(miss, null, 2) + '\n');
    else fs.rmSync(p, { force: true });
    // translations whose English no longer appears anywhere
    const stale = Object.keys(dict).filter((k) => !all.has(k)).length;
    console.log(`${lang.code}: ${Object.keys(miss).length} missing of ${all.size}${stale ? `, ${stale} unused (old English)` : ''}`);
  }
}

function merge() {
  const dir = path.join(I18N, 'missing');
  for (const lang of EXTRA) {
    const p = path.join(dir, lang.code + '.json');
    if (!fs.existsSync(p)) continue;
    const add = JSON.parse(fs.readFileSync(p, 'utf8'));
    const dict = readDict(lang.code);
    let n = 0;
    for (const [en, v] of Object.entries(add)) if (v) { dict[norm(en)] = v; n++; }
    fs.writeFileSync(path.join(I18N, lang.code + '.json'), JSON.stringify(sortObj(dict), null, 2) + '\n');
    console.log(`${lang.code}: merged ${n}`);
  }
}

module.exports = { EXTRA, strings, build };
if (require.main === module) {
  if (process.argv.includes('--missing')) writeMissing();
  else if (process.argv.includes('--merge')) merge();
  else build();
}
