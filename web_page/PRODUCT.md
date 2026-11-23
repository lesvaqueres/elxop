# Product

<!-- impeccable:product-schema 1 -->

Describes the El Xop · Les Vaqueres website as it is now (updated 2026-11-19). Replaces the earlier
root-level PRODUCT.md (2026-11-12), which described a one-page draft and is no longer followed.

## Platform

web

## Stack

Static multilingual site built by a small Node script with no dependencies: `src/` → `npm run build` →
`public/` (deploy that folder as-is). Photos get AVIF and small copies from `npm run images`.
Structure and conventions: see `README.md`.

## Users

People curious about El Xop and Les Vaqueres: possible residents for the artist residency, visitors
interested in the garden or the museum, and people from the area. They arrive on phones and laptops,
often unhurried, browsing rather than completing a task. Some use older computers or weak connections.

## Product Purpose

A calm online visit to El Xop · Les Vaqueres, run by the Associació Amics de la Natura -el Xop- in the
Horta de Lleida: the artist residency (five self-contained apartments, one fully accessible), the garden
(autumn fruits, the Racó d'herbes), the family museum "Eines de les Vaqueres", and the archive (five
hand-made books, read in full). There is no booking, sales, sign-up or form; visitors who want more
get in touch by phone, email or Instagram.

## Positioning

A real, specific place with named spaces, trees, plants, objects and people, not a generic retreat or
wellness brand. The poplar (el Xop), the fig tree and the cypresses are its symbols.

## Site map

- Home: hero (logos + illustrated map of the Horta), welcome text beside the illustrated plan, garden
  scene (poplar and fig tree).
- Artist residency (plain menu link; it replaced the "Our Projects" dropdown on 2026-11-19). The empty
  Les Vaqueres page (`les-vaqueres.html`) is still built but no longer in the menu.
  - Artist residency: flyer hero, then conditions of stay, during the stay, ways to stay, creation labs,
    workshops, the house and its surroundings, economic model. Text only from the association's document
    "Les Vaqueres salut natura" (2026-11-19). "La casa i el seu entorn" uses option A of
    `temp files work dir/la-casa-layout-brief.html` (tabs by space). Apartments 1–4 and the shared
    rooms use the owner's phone photos (`temp files work dir/apartaments/`, converted to 1600 px JPEG);
    the surroundings, outdoor spaces and aula still use the small photos from the document. Apartment 5
    has no photos yet, and which apartment is the fully accessible one is not stated: do not mark one.
    Outdoor spaces are grouped by place (Hort dels Sentits, Punt d'aromes, Mirador del cel, Reflexologia,
    Jardí terapèutic; photos from `temp files work dir/outdoors/`) with a line linking to the Bibliography
    (new tab). "La cambra fosca" (the darkroom van) has its own tab: the document's two sentences about it, then its
    2 photos.
    Note: the Mirador del cel picture is an AI-generated image (Gemini file name), not a photograph.
    The document says "No lloguem apartaments": never present the spaces as rentals (no prices, booking,
    ratings).
- Surroundings (dropdown, no page): Autumn fruits, Herb corner (Racó d'herbes).
- Museum.
- Archive (dropdown, no page): Bibliography (book cards → 5 flip-books), Joc de l'Horta (game board to download or print, and the rules, from the association's `Game.docx`), El Xop in the past (external link to the old blog, https://elxoplleida.blogspot.com/, opens in a new tab with an external-link sign).
- Contacts: the footer of the current page.
- Footer only: Legal notice, Privacy policy, Cookie policy.

## Operating Context

- Three languages, all first-class: Catalan, Spanish, English. On opening, the site uses the browser's
  first supported language, otherwise Catalan; a language picked from the menu is remembered.
- Spain / Catalonia: LSSI-CE (legal notice), GDPR + LOPDGDD (privacy). The site sets no cookies; the
  Google map loads only when the visitor presses "Show map", fonts are self-hosted, so no cookie banner.

## Capabilities and Constraints

- No forms, accounts, analytics, ads or tracking. Keep it that way unless the user asks.
- Contact details on site (footer): phone +34 695 551 385, elxop@yahoo.es, Instagram @elxop.lesvaqueres,
  location "Horta de Lleida, El Xop". Do not invent others (opening hours, prices, etc.).
- The legal notice and privacy policy show no owner block (legal name, NIF, address, registry number,
  data controller): removed at the user's request (2026-11-20). `OWNER` in `src/templates/footer.js`
  and `ownerList()` in `src/templates/legal.js` remain if it is ever added back.
- The privacy policy states emailed messages are kept "at most one year": not yet confirmed by the user.
- Media: only web-ready copies inside `web_page/`; originals stay outside and are never linked.
  Third-party images carry author + licence credits next to them.
- Must load well on old computers and slow connections, and look good on capable devices.

## Brand Commitments

- Names: El Xop · Les Vaqueres; Associació Amics de la Natura -el Xop-.
- Desired feel (user's words): simple, tranquil, inviting, calm, down to earth.
- Familiar website structure (header nav, hero, sections, footer) over experimental concepts.

## Evidence on Hand

- Own photos (originals in the project root `img/`, `img-webp/`), the five hand-made books (scans and
  photos), museum photos, the illustrated maps and logos.
- Wikimedia Commons photos for the nut trees, the whole fig tree and the medlar (credited on the page).
- The Virtual Museum of Traditional Farming Technology (Universitat de Lleida) banner, used with permission.
- No testimonials, reviews, prices or opening hours. Do not fabricate them.

## Product Principles

1. The place leads; the interface stays out of the way.
2. Name real places, plants, objects and people; never generic filler.
3. Unhurried pace: room to breathe, few things competing.
4. Every language is a first-class reading.
5. Light and private by default: no third-party requests until the visitor asks for them.
