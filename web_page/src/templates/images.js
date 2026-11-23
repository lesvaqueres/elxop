// Turns plain <img src="assets/images/..."> tags in built pages into light, responsive images:
// - adds width/height when missing (no layout jumps while photos load)
// - wraps the image in <picture> with an AVIF <source> and srcset/sizes, so each device
//   downloads the smallest file that still looks sharp on its screen.
// Variants come from scripts/optimize-images.js (npm run images) via image-variants.json.

const fs = require('fs');
const path = require('path');

const FILE = path.join(__dirname, '..', 'data', 'image-variants.json');
let VARIANTS = {};
try { VARIANTS = JSON.parse(fs.readFileSync(FILE, 'utf8')); } catch (e) { /* no variants yet: plain <img> stays */ }

// how wide each kind of image is drawn, for `sizes` (first match wins: class, then path)
const SIZES = [
  [/\bhero-map\b/, '(max-width: 760px) 100vw, 820px'],
  [/\bhero-logo\b/, '(max-width: 760px) 140px, 200px'],
  [/\bzoom-wide\b/, '(max-width: 760px) 62vw, 460px'],
  [/\bzoom-close\b/, '(max-width: 760px) 40vw, 300px'],
  [/\bgarden-bg\b/, '100vw'],
  [/nut-bowl/, '(max-width: 760px) 100vw, 460px'],
  [/images\/nuts\//, '(max-width: 760px) 33vw, 440px'], // the three trees sit in a row on phones
  [/images\/museum\//, '(max-width: 760px) 100vw, 680px'],
  [/\bherb-thumb\b/, '(max-width: 760px) 50vw, 400px'],
  [/images\/herbes\//, '(max-width: 760px) 100vw, 680px'],
  [/images\/instagram\//, '120px'],
  [/\bres-hero-photo\b/, '(max-width: 860px) 100vw, 60vw'],
  [/\bres-casa-photo\b/, '(max-width: 760px) 100vw, 1080px'],
  [/images\/residencia\//, '(max-width: 760px) 100vw, 480px'],
  [/\bjoc-img\b/, '1024px'], // always the full-size board, so it prints sharp
  [/images\/welcome\//, '(max-width: 1099px) 460px, 500px'],
];
const DEFAULT_SIZES = '(max-width: 760px) 100vw, 50vw';

const attr = (tag, name) => { const m = tag.match(new RegExp(`\\s${name}="([^"]*)"`)); return m ? m[1] : null; };
const srcset = (list, rel) => list.map(([u, w]) => `${rel}${u} ${w}w`).join(', ');

function enhance(html, rel = '') {
  return html.replace(/(<picture>\s*)?<img\b[^>]*>/g, (tag, inPicture) => {
    if (inPicture) return tag;
    const src = attr(tag, 'src');
    if (!src || !src.startsWith(rel + 'assets/images/')) return tag;
    const v = VARIANTS[src.slice(rel.length)];
    if (!v) return tag;

    let img = tag;
    if (!attr(img, 'width')) img = img.replace(/^<img/, `<img width="${v.w}" height="${v.h}"`);
    if (!v.avif) return img;

    const key = (attr(img, 'class') || '') + ' ' + src;
    const sizes = (SIZES.find(([re]) => re.test(key)) || [, DEFAULT_SIZES])[1];
    if (v.fallback.length > 1) img = img.replace(/^<img/, `<img srcset="${srcset(v.fallback, rel)}" sizes="${sizes}"`);
    return `<picture><source type="image/avif" srcset="${srcset(v.avif, rel)}" sizes="${sizes}">${img}</picture>`;
  });
}

module.exports = { enhance };
