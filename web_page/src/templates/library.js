// Builds the digital books (flip-books) and the book cards.
// Book details and the transcribed text in three languages: src/data/books/<file>.js
// (the flip-book pages take their text from there via pages/_helpers.js from()).
// Page layouts: src/data/books/pages/ (rendered by flipbook.js).
// Called by scripts/build.js (npm run build). No dependencies.
// Output: public/library/<slug>.html for each book, plus cards() for bibliografia.html.

const fs = require('fs');
const path = require('path');

const DATA = path.resolve(__dirname, '..', 'data');
const LIB = path.resolve(__dirname, '..', '..', 'public', 'library'); // output folder
const dims = require(path.join(DATA, 'image-dimensions.json'));

const flipbook = require('./flipbook.js');
const books = ['espais', 'mirador', 'passeig', 'mare-terra', 'cami']
  .map((f) => Object.assign({ file: f }, require(path.join(DATA, 'books', f + '.js'))))
  .sort((a, b) => a.order - b.order);

// ---------- helpers ----------
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isT = (v) => v && typeof v === 'object' && 'en' in v;

// English in the markup, Catalan and Spanish beside it (read by garden.js)
function tx(tag, v, attrs = '', fmt = (s) => s) {
  if (!isT(v)) return `<${tag}${attrs}>${fmt(v)}</${tag}>`;
  return `<${tag}${attrs} data-ca="${esc(fmt(v.ca))}" data-es="${esc(fmt(v.es))}">${fmt(v.en)}</${tag}>`;
}
const t = (ca, es, en) => ({ ca, es, en });
const size = (p) => { const d = dims[p]; return d ? ` width="${d[0]}" height="${d[1]}"` : ''; };

const UI = {
  pages: (n) => t(`Llibre digital · ${n} pàgines`, `Libro digital · ${n} páginas`, `Digital book · ${n} pages`),
};

// ---------- book cards for index.html ----------
function cards() {
  return books.map((b) => `
      <a class="book-card" href="library/${b.slug}.html" style="--book: ${b.color}">
        <img src="assets/images/library/${b.cover}"${size(b.cover)} loading="lazy" decoding="async" alt="">
        ${tx('span', b.kicker, ' class="kicker"')}
        ${tx('span', b.title, ' class="book-card-title"')}
        ${tx('span', b.summary, ' class="book-card-text"')}
        ${tx('span', UI.pages(flipbook.count(b.file)), ' class="book-card-meta"')}
      </a>`).join('');
}

books.forEach((b, i) => {
  // every book is a flip-book recreated from its original pages (src/data/books/pages/<file>.*)
  if (!flipbook.has(b.file)) throw new Error('No page data for book "' + b.file + '" in src/data/books/pages/');
  const html = flipbook.render(b, books[(i + 1) % books.length], b.file);
  fs.writeFileSync(path.join(LIB, b.slug + '.html'), html);
  console.log('wrote library/' + b.slug + '.html');
});

module.exports = { books, cards };
