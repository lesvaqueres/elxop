# El Xop · Les Vaqueres — website

Static multilingual site in 12 languages. No dependencies: Node only.

```bash
npm run build         # regenerate every page into public/ (and every language folder)
npm run serve         # preview public/ on http://localhost:4322
npm run images        # after adding/replacing photos: make AVIF + small copies (macOS sips)
npm run i18n:missing  # list texts with no translation yet → src/i18n/missing/<lang>.json
npm run i18n:merge    # after filling those files in: copy them into src/i18n/<lang>.json
```

## Publishing (GitHub Pages)

Official site: **https://lesvaqueres.github.io/elxop/** (repository `lesvaqueres/elxop`), updated only when publishing.
Preview: https://babilunga.github.io/elxop-lesvaqueres/ (working repository `babilunga/elxop-lesvaqueres`).
The preview is hidden from search engines: every build whose `SITE_URL` is not `OFFICIAL_URL` (`src/templates/layout.js`)
gets `noindex`. If the official address changes, update `OFFICIAL_URL` too.

- Every push to `main` that touches `web_page/` runs `.github/workflows/pages.yml` (repo root): it runs
  `npm run build` on GitHub, removes the local-only design-tool script (`impeccable-live`), and publishes `public/`.
  Progress and errors: the repository's **Actions** tab. Nothing to upload by hand.
- The full public address is `SITE_URL`: the workflow sets it from the repository it runs in; the default for local
  builds is in `src/templates/layout.js`. It is used only where a
  full URL is required: canonical and `hreflang` links, `sitemap.xml`, `robots.txt`, link previews (`og:` tags)
  and the `<base>` of `404.html`. If the site moves to a custom domain, change both the workflow and that default.
- Every page links CSS/JS as `assets/css/main.css?v=<hash>`: the build adds a short hash of each file's contents
  (end of `scripts/build.js`), so visitors get a changed file at once instead of an old cached copy.
- Generated with every build: `404.html` (page-not-found, shown by GitHub for any unknown address),
  `sitemap.xml` and `robots.txt`. Favicons are in `assets/images/icons/`, the link-preview picture in
  `assets/images/social/el-xop-share.jpg` (1200×630).

## Languages

- **Catalan, Spanish, English** are written in the sources as `t(ca, es, en)` (or `data-ca` / `data-es`
  in partials) and switch in place on the main pages (`public/assets/js/main.js`).
- **German, French, Italian, Polish, Czech, Ukrainian, Russian, Japanese, Chinese** are copies of the
  site in `public/<code>/` (`de fr it pl cs uk ru ja zh`), made at the end of every build by
  `scripts/localize.js` from `src/i18n/<code>.json`: a dictionary from the English text to the
  translation. Never edit `public/<code>/` by hand; it is rewritten on every build.
- Changing or adding an English sentence leaves that sentence in English in the other nine
  languages until it is translated: the build prints how many are missing per language.
  Run `npm run i18n:missing`, translate the empty values, then `npm run i18n:merge` and build.
- The language menu (`LANGS` in `src/templates/layout.js`) lists all twelve. Picking a folder
  language opens the same page in `public/<code>/`; the visitor's choice is remembered
  (localStorage, see the cookie policy). Pages carry `hreflang` links between all versions.
- Translations are machine-quality (written by Claude, Nov 2026); the legal pages in particular
  should be checked by a native speaker. Catalan is the original.

## Folder structure

```
web_page/
├── README.md               this file: structure + conventions
├── package.json            npm scripts (build, serve, start)
├── .editorconfig           shared formatting rules
│
├── scripts/                Node tooling, never deployed
│   ├── build.js            builds all pages into public/
│   └── serve.js            local static preview server
│
├── src/                    sources the build reads (edit these)
│   ├── templates/          page shells and generators (JS template literals)
│   │   ├── layout.js       <head>, header, site map (PAGES); re-exports the footer
│   │   ├── footer.js       contact footer on every page: details, Instagram card, map
│   │   ├── i18n.js         t() / tx() translation helpers
│   │   └── library.js      builds every book as a flip-book + the book cards
│   │   ├── flipbook.js     flip-book pages (one A4 page at a time)
│   │   ├── residencia.js   artist residency page (flyer hero + gliding sections)
│   │   ├── joc.js          Joc de l'Horta page (board to download/print + rules)
│   │   ├── legal.js        footer-only legal pages (avís legal, privacitat, galetes); owner details live in footer.js OWNER
│   ├── partials/           hand-written HTML fragments injected into pages
│   │   ├── fruits-de-la-tardor.html  (+ -nav.html; also museu, raco-dherbes)
│   └── data/               content as data
│       ├── books/          one file per book (espais.js, mirador.js, …)
│       │   └── pages/      recreated page layouts: <book>.json (by hand) + <book>.pics.json (generated)
│       └── image-dimensions.json   width/height for library images
│
└── public/                 the deployable site: upload this folder as-is
    ├── index.html          + one .html per menu item (generated)
    ├── library/            one .html per book (generated)
    └── assets/             static files served directly (edit these in place)
        ├── fonts/          self-hosted woff2 (Hanken Grotesk, Young Serif; Oswald, Barlow Semi Condensed, Caveat for the residency page); never load fonts from Google
        ├── css/            main.css (site), library.css (books/cards), flipbook.css (recreated books)
        ├── js/             main.js (site behaviour, language), flipbook.js (page turning in the digital books)
        ├── video/          short muted loops for the page heads: <name>-av1.mp4 + <name>.mp4 (H.264) + <name>-poster.jpg
        ├── downloads/      files offered for download (Joc de l'Horta board)
        └── images/
            ├── plants/     garden photos
            ├── instagram/  Instagram feed images
            └── library/
                ├── photos/ book photos and covers
                ├── pages/  scanned original pages (*-sm.webp = thumbnails)
                └── <book-slug>/  pictures cut from a recreated book (<name>.webp + <name>-sm.webp)
```

Raw originals (HEIC photos, book scans, video, reference material) stay outside
`web_page/` in the project root (`img/`, `img-webp/`, `books/`, `video/`,
`_material-font/`). Only optimized, web-ready copies go into `public/assets/images/`.

## Rules to follow

1. **Never hand-edit generated HTML** in `public/*.html` or `public/library/*.html`.
   Change `src/` and run `npm run build`. (CSS, JS and images in `public/assets/` *are* edited directly.)
2. **Where things go**
   - new page → add it to `PAGES` in `src/templates/layout.js`, then a `page({...})` call in `scripts/build.js`
   - large static HTML for a page → `src/partials/<page-name>.html`
   - new book → `src/data/books/<slug>.js` (title, cover, colour, summary and the transcribed text in three languages)
     plus its page layout in `src/data/books/pages/`, and add it to the list in `src/templates/library.js`
   - stylesheet → `public/assets/css/`, script → `public/assets/js/`, image → `public/assets/images/<section>/`
3. **Naming**
   - all files and folders: lowercase `kebab-case`, no spaces or accents (`fruits-de-la-tardor.html`, `dog-rose-close.jpg`)
   - page partial has the same name as the page it belongs to
   - images: describe the subject, `<subject>-<variant>.<ext>` (`chayote-close.jpg`); thumbnails end in `-sm`
   - prefer `.webp` for photos; always set `width`/`height` (record them in `image-dimensions.json` for library images)
   - put only the original photo in `public/assets/images/<section>/`, then run `npm run images` and `npm run build`:
     it writes `<name>.avif`, `<name>-sm.avif`, `<name>-sm.jpg` beside it (never edit those by hand) and
     `src/data/image-variants.json`; the build then wraps each `<img>` in `<picture>` with `srcset`/`sizes`
     (rules in `src/templates/images.js`) and fills in missing `width`/`height`
   - animations: never ship a GIF. Convert it to video (see `public/assets/video/`): keep every frame at
     full quality (`ffmpeg -crf 16`, no denoise, so small details like falling leaves survive), crop away
     export edge lines, add a poster JPG, then use `<video class="head-video" muted loop playsinline preload="none" poster>`
     with an AV1 `<source>` first and H.264 second. Follow it with a `<button class="head-video-toggle" hidden>` (see `build.js`, Fruits de la tardor): main.js plays the video only when the device allows motion, and the button lets visitors pause it or start it. The local server (`npm run serve`) answers Range requests so Safari can play it.
   - JS identifiers `camelCase`, CSS classes `kebab-case`
   - full-size photo viewer: every photo (200 px wide or more) in the main content of the pages listed in
     `VIEWER_PAGES` (`scripts/build.js`: Fruits de la tardor, Racó d'herbes, Museu, Joc de l'Horta) opens full screen when clicked,
     with previous/next and close. To add it to another page, add that page's key to `VIEWER_PAGES`.
     Every book page has an "All books" link back to the Bibliography (`flipbook.js`).
4. **Paths** in generated HTML are relative: `''` from `public/`, `'../'` from `public/library/`
   (the `rel` argument in `layout.js`). Never use absolute `/…` or `file://` paths.

## Recreating a book as a flip-book

Every book is a flip-book. `src/data/books/<book>.js` holds its details (title, cover, colour, summary)
and its transcribed text in three languages, which the page layouts reuse via `from()` in
`src/data/books/pages/_helpers.js`; the layouts and picture boxes are in `src/data/books/pages/`.
`library.js` stops the build if a book has no page layout (the old text reader is gone). The picture work needs Python 3 + OpenCV once:
`python3 -m venv .venv && .venv/bin/pip install opencv-python-headless numpy` (`.venv` is not deployed).

1. Upright JPEGs from the HEIC photos in `../books/<folder>/`:
   `swiftc -O scripts/heic-to-jpg.swift -o /tmp/heic-to-jpg`, then `/tmp/heic-to-jpg <photo>.HEIC <id>.jpg 5000`.
2. Flatten each page to A4 (finds the paper, corrects perspective):
   `.venv/bin/python scripts/book-rectify.py <id>.jpg flat/<id>.jpg` (add manual corners when a photo
   reaches the page edge; record them as `"corners"` in the book's page file).
3. Write `src/data/books/pages/<book>.json` (or `<book>.js`, which can reuse the book's transcription
   through `_helpers.js`; Espais, Passeig, Mare Terra and Camí are written this way): for each page, its pictures (rough box, shape, labels to
   paint out) and texts (font, position, size, CA/ES/EN). Positions are % of the page; sizes % of its width.
4. `.venv/bin/python scripts/book-images.py <book> flat/` (add `BOOK_ONLY=IMG_1234,...` to redo only some pages) cuts, straightens and cleans every picture into
   `public/assets/images/library/<slug>/` and writes `<book>.pics.json`.
5. `npm run build`. These images skip `npm run images` (they are already WebP at two sizes).

Manual page corners used so far (1050 px wide preview, tl tr br bl), for photos where the paper is
hidden behind artwork: Mirador IMG_1110 `72,6,978,4,972,1302,58,1306`, IMG_1114 `52,8,1004,14,1002,1366,44,1366`;
Espais IMG_1164 `52,36,1018,42,1028,742,44,736`; Passeig IMG_1100 `38,22,1030,26,1030,742,34,742`;
Laberint folder IMG_1120 `40,25,1030,35,1040,736,30,730`, IMG_1128 `25,22,1002,22,1018,722,18,730`,
IMG_1145 `55,35,1030,35,1040,748,50,745`.
