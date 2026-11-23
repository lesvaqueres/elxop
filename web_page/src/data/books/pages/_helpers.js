// Helpers for recreated-page layouts written as JS (<book>.js in this folder).
// A layout exports { slug, orient, pages: [{ id, items: [...] }] } — the same shape as mirador.json.
// Positions are % of the page (x of its width, y of its height); text sizes are % of the page width.

const t = (ca, es, en) => ({ ca, es, en });

// text taken from a book's transcription (src/data/books/<book>.js), so the three languages stay in one place
function from(bookFile) {
  const book = require('../' + bookFile + '.js');
  const sec = (id) => {
    const s = book.sections.find((x) => x.id === id);
    if (!s) throw new Error(`${bookFile}: no section ${id}`);
    return s;
  };
  return {
    title: (id) => sec(id).title,
    block: (id, i) => sec(id).blocks[i],
    p: (id, i) => sec(id).blocks[i].p,
  };
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const LANGS = ['ca', 'es', 'en'];

// join pieces into one HTML text per language. A piece is:
//   t{ca,es,en}               -> <p>
//   { raw: t{...} }           -> already HTML (may contain <b>, <i>)
//   { h: t{...} }             -> heading line
//   { ul: [t...] } / { ol }   -> list
//   { dl: [[t, t]...] }       -> term + description pairs
function html(...pieces) {
  const out = {};
  for (const L of LANGS) {
    out[L] = pieces.map((p) => {
      if (p.raw) return p.raw[L];
      if (p.rawp) return `<p>${p.rawp[L]}</p>`;
      if (p.h) return `<p class="fb-h">${esc(p.h[L])}</p>`;
      if (p.ul) return `<ul>${p.ul.map((i) => `<li>${esc(i[L])}</li>`).join('')}</ul>`;
      if (p.ol) return `<ol>${p.ol.map((i) => `<li>${esc(i[L])}</li>`).join('')}</ol>`;
      if (p.dl) return p.dl.map(([k, v]) => `<p><b>${esc(typeof k === 'string' ? k : k[L])}</b> ${esc(v[L])}</p>`).join('');
      if (p.verse) return `<p class="fb-verse">${esc(p.verse[L]).replace(/\n/g, '<br>')}</p>`;
      if (p.ca !== undefined) return `<p>${esc(p[L])}</p>`;
      throw new Error('unknown piece ' + JSON.stringify(p).slice(0, 60));
    }).join('');
  }
  return out;
}

module.exports = { t, from, html };
