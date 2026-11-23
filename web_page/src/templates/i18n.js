// Translation helpers shared by every template.
// Text is written once as t(ca, es, en); tx() renders the English and keeps the others in data-ca / data-es
// so public/assets/js/main.js can switch language in the browser.

const t = (ca, es, en) => ({ ca, es, en });
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const isT = (v) => v && typeof v === 'object' && 'en' in v;
function tx(tag, v, attrs = '') {
  if (!isT(v)) return `<${tag}${attrs}>${v}</${tag}>`;
  return `<${tag}${attrs} data-ca="${esc(v.ca)}" data-es="${esc(v.es)}">${v.en}</${tag}>`;
}
const aria = (v) => ` aria-label="${esc(v.en)}" data-ca-aria="${esc(v.ca)}" data-es-aria="${esc(v.es)}"`;

module.exports = { t, esc, isT, tx, aria };
