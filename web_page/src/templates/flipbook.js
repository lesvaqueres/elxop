// Flip-book reader: recreates each original page of a book (pictures + live, translatable
// text at their printed positions) and lets the visitor turn the pages.
// Data: src/data/books/pages/<file>.json (layout) + <file>.pics.json (picture boxes and sizes,
// written by scripts/book-images.py). Called by library.js for books that have page data.

const fs = require('fs');
const path = require('path');
const C = require('./layout.js');

const PAGES_DIR = path.resolve(__dirname, '..', 'data', 'books', 'pages');
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const t = (ca, es, en) => ({ ca, es, en });
const br = (s) => esc(s).replace(/\n/g, '<br>');

// English in the markup, Catalan + Spanish beside it (main.js swaps them)
function tx(tag, v, attrs = '', fmt = br) {
  return `<${tag}${attrs} data-ca="${esc(fmt(v.ca))}" data-es="${esc(fmt(v.es))}">${fmt(v.en)}</${tag}>`;
}
const raw = (s) => s; // body text is already HTML
const pct = (n) => `${+n.toFixed(3)}%`;

const UI = {
  page: t('Pàgina', 'Página', 'Page'),
  of: t('de', 'de', 'of'),
  prev: t('Pàgina anterior', 'Página anterior', 'Previous page'),
  next: t('Pàgina següent', 'Página siguiente', 'Next page'),
  zoom: t('Amplia la pàgina', 'Ampliar la página', 'Zoom in on the page'),
  contents: t('Pàgines', 'Páginas', 'Pages'),
  cover: t('Portada', 'Portada', 'Cover'),
  allBooks: t('Tots els llibres', 'Todos los libros', 'All books'),
  nextBook: t('Llibre següent', 'Libro siguiente', 'Next book'),
  allBooks: t('Tots els llibres', 'Todos los libros', 'All books'),
  hint: t('Passa les pàgines amb les fletxes, lliscant o tocant la vora de la pàgina.',
    'Pasa las páginas con las flechas, deslizando o tocando el borde de la página.',
    'Turn the pages with the arrows, by swiping, or by tapping the edge of the page.'),
  sourceNote: t(
    "Recreació digital del llibre fet a mà que es conserva a El Xop: les fotografies s'han retallat i netejat a partir de les pàgines originals, i el text s'ha tornat a compondre. L'original és en català; el castellà i l'anglès són traduccions.",
    'Recreación digital del libro hecho a mano que se conserva en El Xop: las fotografías se han recortado y limpiado a partir de las páginas originales, y el texto se ha vuelto a componer. El original está en catalán; el castellano y el inglés son traducciones.',
    "A digital recreation of the hand-made book kept at El Xop: the photographs were cut out and cleaned from the original pages and the text was set again. The original is in Catalan; the Spanish and English are translations."
  ),
};

function load(file) {
  const js = path.join(PAGES_DIR, file + '.js');
  const layout = fs.existsSync(js) ? require(js) : JSON.parse(fs.readFileSync(path.join(PAGES_DIR, file + '.json'), 'utf8'));
  const pics = JSON.parse(fs.readFileSync(path.join(PAGES_DIR, file + '.pics.json'), 'utf8'));
  return { layout, pics };
}

function item(it, pics, slug, eager, k = 1.414) {
  const box = (b) => `left:${pct(b[0])};top:${pct(b[1])};width:${pct(b[2] - b[0])};height:${pct(b[3] - b[1])}`;
  if (it.type === 'pic') {
    const p = pics[it.name];
    if (!p) throw new Error('no extracted picture for ' + it.name + ' (run scripts/book-images.py)');
    const src = `../assets/images/library/${slug}/${it.name}`;
    const cls = ['fb-pic', p.alpha ? 'is-cutout' : '', it.blend === 'multiply' ? 'is-drawing' : '', it.faded ? 'is-faded' : ''].filter(Boolean).join(' ');
    if (it.decorative) it = Object.assign({}, it, { alt: { ca: '', es: '', en: '' } });
    return `<img class="${cls}" style="${box(p.box)}" src="${src}.webp" srcset="${src}-sm.webp ${p.sm[0]}w, ${src}.webp ${p.size[0]}w" sizes="(max-width: 700px) 92vw, 640px" width="${p.size[0]}" height="${p.size[1]}"${eager ? '' : ' loading="lazy"'} decoding="async" alt="${esc(it.alt.en)}" data-ca-alt="${esc(it.alt.ca)}" data-es-alt="${esc(it.alt.es)}">`;
  }
  if (it.type === 'title') {
    const b = it.box;
    return tx('h2', it.text, ` class="fb-title fb-${it.font}${cls(it)}" data-fit style="${box(b)};--fs:${it.size};text-align:${it.align || 'center'};justify-content:${{ left: 'flex-start', right: 'flex-end' }[it.align] || 'center'}${it.color ? `;color:${it.color}` : ''}"`);
  }
  if (it.type === 'label') {
    const [x, y] = it.at;
    const max = it.max || (100 - x - 1);
    return tx('p', it.text, ` class="fb-label fb-${it.font}${it.onPic ? ' on-pic' : ''}${cls(it)}" data-fit style="left:${pct(x)};top:${pct(y)};max-width:${pct(max)};--fs:${it.size}${it.color ? `;color:${it.color}` : ''}"`);
  }
  if (it.type === 'paper') return `<div class="fb-paper" style="${box(it.box)}"></div>`;
  if (it.type === 'vlabel') {  // caption running up the margin, read from bottom to top
    // a normal line of text, turned a quarter to the left around the centre of its box
    const [x0, y0, x1, y1] = it.box;
    const w = (y1 - y0) * k, h = (x1 - x0) / k;  // swap sides: page height and width differ by k
    return tx('p', it.text, ` class="fb-vlabel fb-${it.font}" data-fit style="left:${pct((x0 + x1) / 2)};top:${pct((y0 + y1) / 2)};width:${pct(w)};height:${pct(h)};--fs:${it.size}"`);
  }
  if (it.type === 'text') {
    return tx('div', it.text, ` class="fb-text fb-${it.font}${cls(it)}" data-fit-block style="${box(it.box)};--fs:${it.size}"`, raw);
  }
  if (it.type === 'line') {
    const [[ax, ay], [bx, by]] = it.pts;
    // drawn in a 100-wide box with the page's proportions so angles match
    const head = it.arrow ? `<polygon points="${arrowHead(ax, ay * k, bx, by * k, it.w * 3.2)}" fill="${it.color}"/>` : '';
    return `<svg class="fb-line" viewBox="0 0 100 ${+(100 * k).toFixed(1)}" preserveAspectRatio="none" aria-hidden="true"><line x1="${ax}" y1="${+(ay * k).toFixed(2)}" x2="${bx}" y2="${+(by * k).toFixed(2)}" stroke="${it.color}" stroke-width="${it.w}" stroke-linecap="round"/>${head}</svg>`;
  }
  throw new Error('unknown item type ' + it.type);
}

// optional style flags on text items
const cls = (it) => (it.underline ? ' fb-ul' : '') + (it.bold ? ' fb-bold' : '') + (it.small ? ' fb-small' : '') + (it.center ? ' fb-center' : '') + (it.boxed ? ' fb-boxed' : '');

function arrowHead(ax, ay, bx, by, s) {
  const a = Math.atan2(by - ay, bx - ax);
  const p = (ang) => `${+(bx - s * Math.cos(ang)).toFixed(2)},${+(by - s * Math.sin(ang)).toFixed(2)}`;
  return `${bx},${by} ${p(a - 0.45)} ${p(a + 0.45)}`;
}

// a short name for each page, for the page list (its title, or the cover)
function pageName(pg, i) {
  const title = pg.items.find((it) => it.type === 'title');
  if (i === 0) return UI.cover;
  if (title) {
    const f = (s) => s.replace(/\n/g, ' ').toLowerCase().replace(/(^|[\s'’(])(\p{L})/gu, (m, a, b) => a + b.toUpperCase());
    return t(f(title.text.ca), f(title.text.es), f(title.text.en));
  }
  const pic = pg.items.find((it) => it.type === 'pic');
  return pic ? pic.alt : t(`${i + 1}`, `${i + 1}`, `${i + 1}`);
}

function render(book, next, file) {
  const { layout, pics } = load(file);
  const slug = layout.slug;
  const n = layout.pages.length;
  const land = layout.orient === 'landscape';

  const sheets = layout.pages.map((pg, i) => `
      <section class="fb-page" data-i="${i}" id="p${i + 1}" aria-roledescription="page"${i ? ' hidden' : ''}>
        <div class="fb-sheet">
          ${pg.items.map((it) => item(it, pics, slug, i < 2, land ? 0.707 : 1.414)).join('\n          ')}
          <span class="fb-folio" aria-hidden="true">${i ? i + 1 : ''}</span>
        </div>
      </section>`).join('');

  const list = layout.pages.map((pg, i) =>
    `<li><a href="#p${i + 1}" data-go="${i}"><span class="fb-n">${i + 1}</span>${tx('span', pageName(pg, i))}</a></li>`).join('');

  return `${C.head(`${book.title.ca} · El Xop`, book.summary.en, '../', '\n<link rel="stylesheet" href="../assets/css/flipbook.css">')}
<body class="reader flipbook-page" style="--book: ${book.color}">

${C.header('../', 'bibliografia')}

<main id="top">
  <section class="fb-head wrap">
    <a class="back-to-books" href="../${C.PAGES.bibliografia.href}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>${tx('span', UI.allBooks)}</a>
    ${tx('p', book.kicker, ' class="kicker"')}
    ${tx('h1', book.title)}
  </section>

  <section class="fb wrap" aria-label="${esc(book.title.en)}" data-ca-aria="${esc(book.title.ca)}" data-es-aria="${esc(book.title.es)}">
    <div class="fb-stage${land ? ' is-landscape' : ''}">
      <div class="fb-book" data-pages="${n}">${sheets}
      </div>
    </div>

    <div class="fb-bar">
      <button type="button" class="fb-btn fb-prev" aria-label="${esc(UI.prev.en)}" data-ca-aria="${esc(UI.prev.ca)}" data-es-aria="${esc(UI.prev.es)}" disabled><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <p class="fb-count" aria-live="polite"><span class="fb-word" data-ca="${UI.page.ca}" data-es="${UI.page.es}">${UI.page.en}</span> <span class="fb-at">1</span> <span data-ca="${UI.of.ca}" data-es="${UI.of.es}">${UI.of.en}</span> ${n}</p>
      <button type="button" class="fb-btn fb-next" aria-label="${esc(UI.next.en)}" data-ca-aria="${esc(UI.next.ca)}" data-es-aria="${esc(UI.next.es)}"><svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></button>
      <button type="button" class="fb-btn fb-zoom" aria-pressed="false" aria-label="${esc(UI.zoom.en)}" data-ca-aria="${esc(UI.zoom.ca)}" data-es-aria="${esc(UI.zoom.es)}"><svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M15.5 15.5 21 21M10.5 7.5v6M7.5 10.5h6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg></button>
    </div>
    ${tx('p', UI.hint, ' class="fb-hint"')}

    <details class="fb-list">
      ${tx('summary', UI.contents)}
      <ol>${list}</ol>
    </details>

    <footer class="book-end">
      ${tx('p', UI.sourceNote, ' class="note"')}
      <div class="book-end-links">
      <a class="next-book" href="${next.slug}.html">
        ${tx('span', UI.nextBook, ' class="next-label"')}
        ${tx('span', next.title, ' class="next-title"')}
      </a>
      <a class="back-to-books" href="../${C.PAGES.bibliografia.href}"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M15 5l-7 7 7 7" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>${tx('span', UI.allBooks)}</a>
      </div>
    </footer>
  </section>
</main>

${C.footer('../')}

<script src="../assets/js/main.js"></script>
<script src="../assets/js/flipbook.js"></script>
</body>
</html>
`;
}

const has = (file) => (fs.existsSync(path.join(PAGES_DIR, file + '.json')) || fs.existsSync(path.join(PAGES_DIR, file + '.js'))) && fs.existsSync(path.join(PAGES_DIR, file + '.pics.json'));

const count = (file) => load(file).layout.pages.length;

module.exports = { render, has, count };
