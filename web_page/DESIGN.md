---
name: El Xop · Les Vaqueres
description: A calm, grounded garden-and-heritage website on pale sage ground, with real photographs, a soft serif for names and a plain grotesk for reading.
colors:
  ground: "#e3e5da"
  hero: "#eef0e6"
  surface: "#fbfbf5"
  ink: "#262c21"
  ink-soft: "#4b5443"
  line: "#c9cdbd"
  arbor: "#4d5e3c"
  sage: "#a7b49a"
  olive: "#8a9a5b"
  teal: "#3a6460"
  ochre: "#c9a45c"
  earth: "#75583c"
  clay: "#c4866a"
  sky: "#9cb8d0"
typography:
  display:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(3rem, 8vw, 5.75rem)"
    fontWeight: 400
    lineHeight: 1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(2rem, 3.6vw, 2.75rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  welcome-title:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.375rem, 2.2vw, 1.75rem)"
    fontWeight: 700
    lineHeight: 1.35
  sub-heading:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "clamp(1.375rem, 2vw, 1.625rem)"
    fontWeight: 400
    lineHeight: 1.2
  wordmark:
    fontFamily: "Young Serif, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1
  lead:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "clamp(1.1875rem, 1.8vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.65
  body:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.65
  small:
    fontFamily: "Hanken Grotesk, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.5
spacing:
  gutter: "clamp(16px, 4vw, 40px)"
  wrap: "1120px"
  header-height: "84px"
---

# Design System: El Xop · Les Vaqueres

Describes the site as built (updated 2026-11-19). It replaces the earlier root-level DESIGN.md
(2026-11-12), written for a one-page draft with colour rectangles instead of photos; that file is no
longer followed. Source of truth for exact values: `public/assets/css/main.css` and `library.css`.

## Overview

A familiar website played straight: sticky header with dropdown menus, a full-screen home hero,
content sections, and the same contact footer on every page. Real photographs carry the pages. The world
is quiet and earthy: pale sage ground, a soft green-black ink, hairlines in a darker sage, and one deep
green (arbor) for icons, small accents and the few filled controls.

**Key characteristics**
- Pale sage ground; ink for names and active states, soft ink for reading text; 1px hairlines divide.
- Young Serif for names, titles and headings; Hanken Grotesk for reading and controls.
- Photos are the colour. The eight place colours remain as tokens (placeholders, e.g. empty book cards).
- Calm motion only, and none with reduced motion.

## Colors

- **ground** `#e3e5da`: page background and sticky header (94%, with blur; plain on low-end devices).
- **hero** `#eef0e6`: the home hero only, edge to edge, so it reads apart from the next section.
- **surface** `#fbfbf5`: cards, panels, dropdowns, the map placeholder; light text on dark/photo areas.
- **ink** `#262c21`: titles, names, active nav items, focus outline, skip link.
- **ink-soft** `#4b5443`: body text, lead, nav at rest, footer, captions and credits.
- **line** `#c9cdbd`: hairlines (header, section titles, lists, footer).
- **arbor** `#4d5e3c`: icons, the header "Benvinguts!", garden accent lines, filled controls
  (back-to-top, Instagram "Follow", "Show map"), text selection.
- **sage, olive, teal, ochre, earth, clay, sky**: place colours for photo stand-ins only.
- `#fbe7a1` (`.to-fill`): highlight for missing owner details; unused since the owner block was removed.

All text meets WCAG AA contrast (checked 2026-11-18), including the garden text on its dark fade.

## Typography

Fonts are self-hosted woff2 in `public/assets/fonts/` (latin + latin-ext); never load them from Google.
The two main faces are preloaded.

- **Display**: page titles (h1). Young Serif 400.
- **Headline**: section titles, with a hairline above.
- **Welcome title**: home section titles, centred, Young Serif bold; the second line in a calligraphic
  stack ("Lucida Calligraphy", "Apple Chancery", serif), smaller.
- **Sub-heading**: sub-sections in museum and garden pages.
- **Residency page faces** (that page only, rebuilt from the association's flyer): Oswald 600 for
  "LES VAQUERES", Barlow Semi Condensed 400 for "RESIDÈNCIA D'ARTISTES" and big numbers' labels, Caveat 500
  for the handwritten lines and short quotes. Self-hosted like the others; Oswald and Caveat preloaded there.
- **Book faces** (flip-book pages in `public/library/` only, matched to the lettering of the original
  hand-made books and set in `assets/css/flipbook.css`): Kaushan Script for the slanted brush titles (with
  a soft drop shadow, as printed) and the bold labels; Courgette for the thin script labels and captions;
  Delius for the El Mirador del Cel cover title (stands in for Tempus Sans); Mali for the rounder titles
  and labels (stands in for Kristen); Arimo for body text (metric-compatible with the Arial used in the
  books); Carlito for body text set in Calibri (metric-compatible); Mali bold/italic for the Kristen-style
  titles; Courgette also for the Espais captions and the script headings; EB Garamond Italic for the
  serif titles and captions in El Passeig dels Plataners. Self-hosted like the others. Do not use them anywhere else on the site.
- **Wordmark**: "El Xop" in the header, with "Les Vaqueres" beneath in light grotesk.
- **Lead / Body / Small**: Hanken Grotesk; nav labels at 500; small for footer, credits, captions.

## Layout

- One centred column: max 1120px plus the gutter, for header, sections and footer.
- Home: hero fills the first screen (logos left, illustrated map right; map on top on phones); welcome
  text beside the illustrated plan (below it under 1100px); garden scene with a full-width photo,
  title on a dark fade and two light panels.
- Article pages (Museum, Herb corner, Autumn fruits): title + lead + contents list, with a picture
  beside the list. **Rule:** if the picture is taller than the list it stays as is; if shorter it is
  sticky beside the list while it scrolls (CSS sticky in `.page-head-beside-nav`). Stacked under 860px.
  Exception: the Museum shows three framed family photos in a column (`.head-art-stack`), starting
  level with the top of the h1 title, each nudged slightly sideways; the group is never sticky and
  scrolls with the page.
  Herb corner (garden map) and Autumn fruits (falling-leaves video) also start the picture level with
  the top of the h1 (`.head-art-top`, spans title, lead and list; a flexible 4th grid row absorbs
  extra height so the text keeps its spacing). The sticky rule above still applies.
  On Autumn fruits the video is cropped (object-fit) to run exactly from the top of the title to the
  end of the contents list, keeping the sky with the falling leaves in view; not sticky.
- Moving pictures: a short muted loop (`<video class="head-video">`, AV1 + H.264 MP4, poster JPG,
  `preload="none"`) instead of a GIF. `main.js` loads and plays it only without reduced motion or
  data saving, and pauses it out of view; everyone else sees the poster still.
- Museum rooms: sticky room title, text and photo side by side, alternating sides.
- Artist residency: a hero that rebuilds the association's flyer (paper panel with grain, title block,
  text, house icon; garden photo on the right fading into the paper; a torn-paper card with four icons
  overlapping the photo's foot; closing line "Aquest és el teu lloc."). **Rule:** photo and card stay in
  the right column and never cover the text on the left, at any width (owner's request, 2026-11-19). Phones: title, photo, text, card
  2×2, closing line. Then full-screen sections (min-height = screen minus header) alternating ground /
  hero greens, title centred with a sprig ornament, content as cards, chips, numbered steps and big numbers.
  "La casa i el seu entorn": pill tabs (one per group of spaces; the selected one filled arbor), then a
  sideways photo strip that snaps photo by photo (swipe; round arrows; thumbnails, the current one framed
  in arbor). Photos are shown whole (contain) on a sage-grey stage. Without JavaScript every group shows.
  Groups with sub-places (apartments, the outdoor places) add a row of text buttons ("Apartament N",
  "Hort dels Sentits"…) (current one underlined in arbor) and a
  small pill badge on each photo; on phones that row and the thumbnails are single rows that scroll sideways.
  The stage is tall (up to 64vh / 720px; 4:5 on phones). Clicking a photo opens a full-screen viewer
  (`<dialog>`, dark green-black, round translucent buttons): arrows, arrow keys or a swipe go through that
  space's photos, caption = apartment + "n / total", Esc or a click outside closes it and the gallery
  stays on the photo you closed on.
  Under the hero a slim sticky page navigation (46px, surface, hairline below) sits under the site header:
  "En aquesta pàgina:" then short section links; the section being read is underlined in arbor; on phones
  the links scroll sideways. Anchor jumps land below it (`scroll-padding-top` = header + nav).
  Each section is at least one screen tall; the page scrolls normally (snapping was tried and removed at
  the owner's request). "Model econòmic" is deliberately plain: one centred reading column, no cards,
  icons, chips or photo. Flyer colours live on `.res-page` only (paper #f1ede2,
  card #f8f5ec, forest #2e4a2b).
- Book pages: sticky table of contents, chapters, scans column, full-screen viewer.
- Breakpoints: 960px (burger menu), 860px, 760px, 480px.

## Components

- **Header**: wordmark; "Benvinguts!" (types itself once on the home page); menu; language dropdown.
  Dropdowns (Surroundings, Archive) are labels with no page: they open on hover (or
  keyboard focus); a click does nothing, except a tap on touch screens without hover. On phones the
  burger menu lists every group and its pages.
- **Language dropdown**: pill button with flag and code; Catalan flag is an inline SVG.
- **Section title**: headline with a hairline above.
- **Contents list (page nav)**: arbor line icons, serif labels, hairlines between rows.
- **Plant zoom**: wide photo with a framed close-up overlapping it and guide lines.
- **Garden panels / cards**: surface, slightly see-through, rounded (18px / 12px), soft feathered edge.
- **Footer** (`#contacte`, every page): contact list with arbor icons, Instagram card (a link styled
  as a phone, rounded 40px with shadow; images stored locally), map placeholder, then a base row:
  copyright, legal links, back to top.
- **Map placeholder**: surface box with a note, a "Show map" button and a cookie-policy link; Google
  Maps loads only after the click.
- **Back to top**: round arbor button, 72px, arrow 27px, appears after the first screen.
- **Skip link**: "Skip to content", hidden until focused by keyboard.
- **Legal pages**: plain article, max 44em, date line then sections; no owner block.
- **Joc de l'Horta** (`src/templates/joc.js`): board on the left (sticky; photo viewer on click) with two arbor
  buttons (download the original PNG, print), rules on the right with special squares divided by hairlines; one
  column under 860px, board first. Printing the page gives the board alone, on one sheet.
- **Flip-book** (`src/templates/flipbook.js`, `assets/css/flipbook.css`, `assets/js/flipbook.js`): a book
  whose pages have been recreated (`src/data/books/pages/<book>.json`) is shown one A4 page at a time on
  book paper (`--paper: #f7f4ec`, very slightly warm off-white), with a thin page stack on the right.
  Every picture and text is placed in % of the page and sized in `cqw`, so the page scales as one
  piece; text is live and follows the language switch (a long translation shrinks to fit its box).
  Turn by buttons, arrow keys, swipe, or a tap on either half of the page; the page turns over its left
  (spiral-binding) edge with a single `rotateY` transform, 0.7s. Only the current page and its
  neighbours are drawn. A zoom button doubles the page inside a pan frame for small screens. Below:
  page list, source note, next book. Labels printed over photos get a faint light halo.
  All five books are flip-books (2026-11-19). El Mirador del Cel is portrait A4; the other four are
  landscape sheets (`orient: 'landscape'`, page 1.414:1, up to 980px wide; phone zoom goes to 3×).
  Captions running up a margin are set as normal text turned a quarter left (`vlabel`). Printed text
  is set live in the book faces; text that is part of a photograph (signs, plaques, maps, old documents)
  stays in the photograph, with its meaning given in the alt text.

## Images and loading

- Only web-ready copies inside `web_page/`; originals are never linked.
- `npm run images` makes `<name>.avif`, `<name>-sm.avif`, `<name>-sm.jpg` (and `-lg.jpg` for very wide
  originals); the build wraps each `<img>` in `<picture>` with `srcset`/`sizes` (`src/templates/images.js`)
  and fills in width/height. `picture { display: contents }` keeps layout rules on the `<img>`.
- Images lazy-load except the hero; the hero map has high fetch priority.
- Third-party photos show author and licence beside them.

## Motion

- Photos fade in the first time they scroll into view. Not on flip-book pages (it would replay on every page turn).
- Flip-book page turn: one rotateY over the left edge; reduced motion swaps it for a short fade.
- "Benvinguts!" typewriter on the home page only.
- Scroll cue nudge in the hero; gentle hover lifts (Instagram card, zoom close-ups).
- All of it is off with `prefers-reduced-motion`; fades and header blur are off on low-end devices or
  Save-Data (`html.lite`).

## Accessibility

- Skip link, visible focus outline, keyboard-reachable dropdowns, labelled icon buttons.
- Every meaningful image has alt text in all three languages; decorative ones have `alt=""`.
- Language changes update `lang`, text, alt text and aria labels together.

## Do / Don't

- **Do** keep the familiar structure and the calm pace; let photos carry colour.
- **Do** keep text to ink and soft ink, with arbor only for icons, small accents and filled controls.
- **Do** add new article pictures with the `beside-nav` page head so they follow the sticky rule.
- **Don't** load anything from third parties before the visitor asks (fonts, maps, embeds).
- **Don't** add shadows, gradients or rounded corners beyond the components listed above.
- **Don't** invent places, contact details, reviews or prices.
