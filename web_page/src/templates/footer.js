// The contact footer that closes every page of the site (id="contacte").
// One source for all of it: edit the contact details, the Instagram card or the map here,
// run `npm run build`, and every page (main pages and library/ books) gets the change.
// Use it in a page shell with:  footer(rel)  where rel is '' for public/*.html and '../' for public/library/*.html.

const { t, esc, tx, aria } = require('./i18n.js');

const CONTACT = {
  name: 'El Xop · Les Vaqueres',
  address: 'Horta de Lleida, El Xop',
  phone: '+34 695 551 385',
  email: 'elxop@yahoo.es',
  instagram: 'https://www.instagram.com/elxop.lesvaqueres/',
  mapLink: 'https://maps.app.goo.gl/4DhkwMRz6rGsScwV6',
  mapEmbed: 'https://maps.google.com/maps?q=El%20Xop%2C%20Lleida%4041.6363231%2C0.658931&z=16&output=embed',
};

// Owner details for the legal notice and privacy policy (Spanish law: LSSI art. 10, GDPR art. 13).
// null = not given yet: the legal pages show a visible [to fill] mark in its place.
const OWNER = {
  legalName: null,     // e.g. "Associació Amics de la Natura El Xop"
  nif: null,           // NIF of the association (G-…)
  address: null,       // registered postal address
  registry: null,      // number in the Registre d'Associacions de la Generalitat de Catalunya
  email: CONTACT.email, // where privacy requests go
};

// footer-only pages (not in the menu)
const LEGAL = {
  avis:      { href: 'avis-legal.html',          title: t('Avís legal', 'Aviso legal', 'Legal notice') },
  privacitat:{ href: 'politica-privacitat.html', title: t('Política de privacitat', 'Política de privacidad', 'Privacy policy') },
  cookies:   { href: 'politica-cookies.html',    title: t('Política de galetes', 'Política de cookies', 'Cookie policy') },
};

const TITLE = t('Contacte', 'Contacto', 'Contacts');

const UI = {
  backTop: t('Torna a dalt', 'Volver arriba', 'Back to top'),
  map: t('Mapa de situació de El Xop', 'Mapa de situación de El Xop', 'Map showing where El Xop is'),
  openMap: t('Obre a Google Maps', 'Abrir en Google Maps', 'Open in Google Maps'),
  igFollow: t('Segueix-nos', 'Síguenos', 'Follow'),
  igMore: t('Veure més a Instagram →', 'Ver más en Instagram →', 'See more on Instagram →'),
  igLabel: t('El Xop a Instagram', 'El Xop en Instagram', 'El Xop on Instagram'),
  rights: t('Tots els drets reservats.', 'Todos los derechos reservados.', 'All rights reserved.'),
  legal: t('Informació legal', 'Información legal', 'Legal information'),
  mapNote: t(
    'El mapa és de Google. En mostrar-lo, Google rep la teva adreça IP i pot desar galetes.',
    'El mapa es de Google. Al mostrarlo, Google recibe tu dirección IP y puede guardar cookies.',
    'The map is provided by Google. Showing it sends your IP address to Google, which may set cookies.'
  ),
  mapShow: t('Mostra el mapa', 'Mostrar el mapa', 'Show map'),
};

const svg = (d) => `<svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${d}</svg>`;
const ICON = {
  pin: svg('<path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>'),
  phone: svg('<path d="M5 3.5h3.2l1.6 4.2-2.1 1.4a11 11 0 0 0 5.2 5.2l1.4-2.1 4.2 1.6V17a2 2 0 0 1-2.2 2A15.5 15.5 0 0 1 3 5.7 2 2 0 0 1 5 3.5z"/>'),
  mail: svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3.5 6 8.5 7 8.5-7"/>'),
};

function contactList(cls = 'contact-list') {
  return `<ul class="${cls}">
        <li><strong>${CONTACT.name}</strong></li>
        <li><a class="ci" href="${CONTACT.mapLink}" target="_blank" rel="noopener">${ICON.pin}<span>${CONTACT.address}</span></a></li>
        <li><a class="ci" href="tel:${CONTACT.phone.replace(/\s/g, '')}">${ICON.phone}<span>${CONTACT.phone}</span></a></li>
        <li><a class="ci" href="mailto:${CONTACT.email}">${ICON.mail}<span>${CONTACT.email}</span></a></li>
      </ul>`;
}

const IG_ICON = '<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20"><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="17.3" cy="6.7" r="1.1" fill="currentColor"/></svg>';

// Instagram plate: avatar + three latest pictures, the whole card links to the profile.
function instagramCard(rel) {
  const img = `${rel}assets/images/instagram/`;
  const posts = [1, 2, 3].map((n) => `<span class="ig-post"><img src="${img}post-${n}.jpg" alt="" loading="lazy" decoding="async"></span>`).join('');
  return `<a class="ig-device" href="${CONTACT.instagram}" target="_blank" rel="noopener"${aria(UI.igLabel)}>
        <span class="ig-screen">
          <span class="ig-bar"><span>elxop.lesvaqueres</span>${IG_ICON}</span>
          <span class="ig-profile">
            <img class="ig-avatar" src="${img}avatar.jpg" width="150" height="150" alt="" loading="lazy" decoding="async">
            <span class="ig-names"><span class="ig-name">El Xop · Les Vaqueres</span><span class="ig-user">@elxop.lesvaqueres</span></span>
          </span>
          ${tx('span', UI.igFollow, ' class="ig-follow"')}
          <span class="ig-grid">${posts}</span>
          ${tx('span', UI.igMore, ' class="ig-more"')}
        </span>
      </a>`;
}

// The Google map loads only when the visitor asks for it (no Google request or cookies before),
// so the site needs no cookie banner. main.js swaps the placeholder for the iframe.
function mapFrame(cls = 'map', rel = '') {
  return `<div class="${cls}">
        <div class="map-gate" data-map-src="${esc(CONTACT.mapEmbed)}" data-map-title="${esc(UI.map.en)}" data-ca-map-title="${esc(UI.map.ca)}" data-es-map-title="${esc(UI.map.es)}">
          ${tx('p', UI.mapNote, ' class="map-note"')}
          ${tx('button', UI.mapShow, ' type="button" class="map-show"')}
          ${tx('a', LEGAL.cookies.title, ` class="map-policy" href="${rel}${LEGAL.cookies.href}"`)}
        </div>
        ${tx('a', UI.openMap, ` class="map-link" href="${CONTACT.mapLink}" target="_blank" rel="noopener"`)}
      </div>`;
}

function footer(rel) {
  return `<footer class="site-footer" id="contacte">
  <div class="wrap footer-grid">
    <div class="footer-contact">
      ${tx('h2', TITLE, ' class="footer-title"')}
      ${contactList()}
    </div>
    <div class="footer-ig">${instagramCard(rel)}</div>
    ${mapFrame('map footer-map', rel)}
  </div>
  <div class="wrap footer-base">
    <span>© ${new Date().getFullYear()} El Xop · Les Vaqueres. ${tx('span', UI.rights)}</span>
    <nav class="footer-legal"${aria(UI.legal)}>
      ${Object.values(LEGAL).map((p) => tx('a', p.title, ` href="${rel}${p.href}"`)).join('\n      ')}
    </nav>
    ${tx('a', UI.backTop, ' href="#top"')}
  </div>
</footer>

<a class="to-top" href="#top"${aria(UI.backTop)}><svg aria-hidden="true" viewBox="0 0 16 16" width="18" height="18"><path d="M8 13V3M3.5 7.5 8 3l4.5 4.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg></a>`;
}

module.exports = { CONTACT, OWNER, LEGAL, TITLE, footer, contactList, mapFrame, instagramCard };
