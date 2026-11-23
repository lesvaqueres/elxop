// Builds the whole El Xop site: the landing page, one page per menu item,
// and the book readers in /library.
// Run from web_page/:  npm run build   (or: node scripts/build.js)
// No dependencies.

const fs = require('fs');
const path = require('path');
const C = require('../src/templates/layout.js');
const { t, tx, aria, PAGES } = C;

const ROOT = path.resolve(__dirname, '..', 'public'); // built site goes here
const partial = (name) => fs.readFileSync(path.join(__dirname, '..', 'src', 'partials', name), 'utf8');
const lib = require('../src/templates/library.js'); // also writes public/library/*.html
const { enhance } = require('../src/templates/images.js'); // <picture> + srcset for photos

// keep the local design-tool script if it is present in the current index.html
let live = '';
try {
  const m = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8').match(/<!-- impeccable-live-start -->[\s\S]*?<!-- impeccable-live-end -->/);
  if (m) live = '\n' + m[0];
} catch (e) {}

// full-size photo viewer (opened by main.js when a photo is clicked) on these pages
const VIEWER_PAGES = ['fruits', 'herbes', 'museu', 'joc'];
const VIEWER_UI = {
  viewer: t('Visor de fotos', 'Visor de fotos', 'Photo viewer'),
  prev: t('Foto anterior', 'Foto anterior', 'Previous photo'),
  next: t('Foto següent', 'Foto siguiente', 'Next photo'),
  close: t('Tanca', 'Cerrar', 'Close'),
};
const VIEWER_ICON = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const viewer = () => `
<dialog class="res-lightbox photo-viewer"${aria(VIEWER_UI.viewer)}>
  <figure class="res-lightbox-fig">
    <img class="res-lightbox-img" alt="">
    <figcaption class="res-lightbox-cap"></figcaption>
  </figure>
  <button class="res-lightbox-btn res-lightbox-prev" type="button"${aria(VIEWER_UI.prev)}>${VIEWER_ICON('M15 5l-7 7 7 7')}</button>
  <button class="res-lightbox-btn res-lightbox-next" type="button"${aria(VIEWER_UI.next)}>${VIEWER_ICON('M9 5l7 7-7 7')}</button>
  <button class="res-lightbox-btn res-lightbox-close" type="button"${aria(VIEWER_UI.close)}>${VIEWER_ICON('M6 6l12 12M18 6L6 18')}</button>
</dialog>
`;

function page({ file, key, title, desc, body, bodyClass = '', extraHead = '' }) {
  const html = `${C.head(title, desc, '', extraHead)}
<body${bodyClass ? ` class="${bodyClass}"` : ''}>

${C.header('', key)}

<main id="top">
${body}
</main>
${VIEWER_PAGES.includes(key) ? viewer() : ''}
${C.footer('')}

<script src="assets/js/main.js"></script>${file === 'index.html' ? live : ''}
</body>
</html>
`;
  fs.writeFileSync(path.join(ROOT, file), enhance(html, ''));
  console.log('wrote ' + file);
}

// a page title block; `empty` pages have nothing else yet
// title + lead; optional `after` (more HTML under the lead) and `art` (an image beside it all)
const altT = (v) => ` alt="${v.en}" data-ca-alt="${v.ca}" data-es-alt="${v.es}"`;
const ariaT = (v) => ` aria-label="${v.en}" data-ca-aria="${v.ca}" data-es-aria="${v.es}"`;

// `variant` adds page-head-<variant> to the section, for pages that place the picture differently
function pageHead(key, lead, { after = '', art = '', variant = '' } = {}) {
  const p = PAGES[key];
  const text = `${tx('h1', p.title)}
    ${lead ? tx('p', lead, ' class="lead"') : ''}${after ? '\n' + after : ''}`;
  if (!art) return `  <section class="page-head wrap">
    ${text}
  </section>`;
  return `  <section class="page-head page-head-art${variant ? ' page-head-' + variant : ''} wrap">
    <div class="page-head-text">
    ${text}
    </div>
    ${art}
  </section>`;
}

// home, section 1 (map): welcome title and text
const welcomeTitle = `${tx('span', t(
        'L’Associació Amics de la Natura -el Xop- us dóna la benvinguda a la Residència d’artistes Les Vaqueres.',
        'La Asociación Amigos de la Naturaleza -el Xop- os da la bienvenida a la Residencia de artistas Les Vaqueres.',
        'The Amics de la Natura association -el Xop- welcomes you to Les Vaqueres artist residency.'
      ), ' class="welcome-title-main"')}
      ${tx('span', t(
        'Un refugi a l’Horta per escoltar, crear i ser.',
        'Un refugio en la Huerta para escuchar, crear y ser.',
        'A refuge in the Horta to listen, create and be.'
      ))}`;
const welcomeText = `${tx('p', t(
          'Vivim en un món que va massa de pressa. A vegades, l’únic que necessitem per acabar aquell llibre, preparar un gran projecte, estudiar sense interrupcions o simplement retrobar-nos amb nosaltres mateixos és temps i silenci.',
          'Vivimos en un mundo que va demasiado deprisa. A veces, lo único que necesitamos para terminar ese libro, preparar un gran proyecto, estudiar sin interrupciones o simplemente reencontrarnos con nosotros mismos es tiempo y silencio.',
          'We live in a world that moves too fast. Sometimes all we need to finish that book, prepare a big project, study without interruptions or simply find ourselves again is time and silence.'
        ))}
        ${tx('p', t(
          'Des de l’Associació d’Amics de la Natura, obrim les portes d’un espai pensat per a la concentració i el benestar en plena natura. Cinc apartaments independents acollidors (un d’ells totalment accessible) enmig del paisatge tranquil de l’Horta de Lleida, on la llum de ponent i el ritme de la terra marquen el compàs.',
          'Desde la Asociación de Amigos de la Naturaleza, abrimos las puertas de un espacio pensado para la concentración y el bienestar en plena naturaleza. Cinco apartamentos independientes y acogedores (uno de ellos totalmente accesible) en medio del paisaje tranquilo de la Huerta de Lleida, donde la luz del poniente y el ritmo de la tierra marcan el compás.',
          'The Amics de la Natura association opens the doors of a place made for focus and wellbeing in the middle of nature. Five cosy, self-contained apartments (one of them fully accessible) in the quiet landscape of the Horta de Lleida, where the western light and the rhythm of the land keep time.'
        ))}
        ${tx('p', t(
          'Tant se val si ets artista buscant inspiració, si prepares oposicions, si escrius les primeres pàgines d’una història o si només necessites uns dies de calma i desconnexió. Aquest és el teu lloc.',
          'Da igual si eres artista en busca de inspiración, si preparas oposiciones, si escribes las primeras páginas de una historia o si solo necesitas unos días de calma y desconexión. Este es tu lugar.',
          'Whether you are an artist looking for inspiration, studying for exams, writing the first pages of a story or simply need a few days of calm and disconnection, this is your place.'
        ))}
        ${tx('p', t(
          'Un espai de repòs. Un respir per a la teva ment. Un espai on la natura t’acompanya.',
          'Un espacio de reposo. Un respiro para tu mente. Un espacio donde la naturaleza te acompaña.',
          'A place to rest. A breather for your mind. A place where nature keeps you company.'
        ))}`;

// home, section 2 (garden): title on the photo, two text panels, two tree cards
const gardenTitle = `${tx('span', t(
        'Benvinguts al nostre refugi de reflexió i creació.',
        'Bienvenidos a nuestro refugio de reflexión y creación.',
        'Welcome to our refuge for reflection and creation.'
      ), ' class="welcome-title-main"')}
      <span class="welcome-title-trio">${tx('span', t('Els xiprers donen la benvinguda.', 'Los cipreses dan la bienvenida.', 'The cypresses welcome you.'))} ${tx('span', t('El Xop mira.', 'El Xop mira.', 'The Poplar watches.'))} ${tx('span', t('La Figuera acull.', 'La Higuera acoge.', 'The Fig Tree shelters.'))}</span>`;

const gardenPanel1 = `${tx('p', t(
          'Com en les velles vies medievals, la benvinguda a <strong>Les Vaqueres</strong> la marquen els xiprers. Tres de junts a l’arribada i un quart una mica més enllà, igual d’alt, que reforcen el símbol ancestral de benvinguda i d’hospitalitat: la promesa d’un sostre de pau, un plat a taula i un recer segur per al viatge.',
          'Como en las viejas vías medievales, la bienvenida a <strong>Les Vaqueres</strong> la marcan los cipreses. Tres juntos a la llegada y un cuarto un poco más allá, igual de alto, que refuerzan el símbolo ancestral de bienvenida y de hospitalidad: la promesa de un techo de paz, un plato en la mesa y un refugio seguro para el viaje.',
          'As on the old medieval roads, the cypresses mark the welcome to <strong>Les Vaqueres</strong>. Three together on arrival and a fourth a little further on, just as tall, reinforcing the ancient symbol of welcome and hospitality: the promise of a peaceful roof, a plate at the table and a safe shelter for the journey.'
        ))}
        ${tx('p', t(
          'Amunt s’alça el nostre <strong>Xop Savi</strong>: no pas el més alt, sinó el més gran i vell de Catalunya, mesurat al seu tronc a metro trenta-cinc del terra, com va constatar el propi Martí Boada. És el patriarca de l’Horta, el guaita silenciós i savi que custodia la pau d’aquest espai.',
          'Arriba se alza nuestro <strong>Chopo Sabio</strong>: no el más alto, sino el más grande y viejo de Cataluña, medido en su tronco a metro treinta y cinco del suelo, como constató el propio Martí Boada. Es el patriarca de la Huerta, el vigía silencioso y sabio que custodia la paz de este espacio.',
          'Further up rises our <strong>Wise Poplar</strong>: not the tallest, but the largest and oldest in Catalonia, measured at its trunk one metre thirty-five above the ground, as Martí Boada himself confirmed. It is the patriarch of the Horta, the silent, wise lookout that guards the peace of this place.'
        ))}`;

// one tree card: bold lead, short line, picture, closing line
function gardenCard({ lead, line, foot, img }) {
  return `<article class="garden-card">
            <p class="garden-card-head">${tx('strong', lead)} ${tx('span', line)}</p>
            <img src="${img.src}" width="${img.w}" height="${img.h}" alt="" loading="lazy" decoding="async">
            ${tx('p', foot, ' class="garden-card-foot"')}
          </article>`;
}

const gardenPanel2 = `${tx('p', t(
          'A redós de la casa, ens espera la <strong>figuera centenària</strong>. Si el xop protegeix amb la seva grandària i memòria, la figuera acull des de la proximitat: amb el seu banc llarg i la porta oberta a la cuina compartida, ofereix l’ombra íntima on les converses flueixen i el temps es deté.',
          'Al abrigo de la casa nos espera la <strong>higuera centenaria</strong>. Si el chopo protege con su grandeza y su memoria, la higuera acoge desde la cercanía: con su banco largo y la puerta abierta a la cocina compartida, ofrece la sombra íntima donde las conversaciones fluyen y el tiempo se detiene.',
          'In the shelter of the house, the <strong>hundred-year-old fig tree</strong> awaits us. If the poplar protects with its size and memory, the fig tree welcomes from up close: with its long bench and the door open to the shared kitchen, it offers the intimate shade where conversations flow and time stands still.'
        ))}
        ${tx('p', t(
          'El xop i la figuera són dues actituds que es complementen davant del món.',
          'El chopo y la higuera son dos actitudes que se complementan ante el mundo.',
          'The poplar and the fig tree are two attitudes towards the world that complement each other.'
        ), ' class="garden-accent"')}
        <div class="garden-cards">
          ${gardenCard({
            lead: t('El xop és vertical,', 'El chopo es vertical,', 'The poplar is vertical:'),
            line: t('s’alça, vigila, connecta amb el cel.', 'se alza, vigila, conecta con el cielo.', 'it rises, keeps watch, connects with the sky.'),
            foot: t('Indicador d’aigua, de vida.', 'Indicador de agua, de vida.', 'A sign of water, of life.'),
            img: { src: 'assets/images/welcome/cypress.png', w: 110, h: 420 },
          })}
          ${gardenCard({
            lead: t('La figuera és horitzontal,', 'La higuera es horizontal,', 'The fig tree is horizontal:'),
            line: t('obre els braços, fa ombra, convida a seure.', 'abre los brazos, da sombra, invita a sentarse.', 'it opens its arms, gives shade, invites you to sit.'),
            foot: t('Símbol de fertilitat, abundància i saviesa.', 'Símbolo de fertilidad, abundancia y sabiduría.', 'A symbol of fertility, abundance and wisdom.'),
            img: { src: 'assets/images/welcome/fig-tree-round.webp', w: 1197, h: 887 },
          })}
        </div>
        ${tx('p', t(
          'Hi ha continuïtat.<br>Es complementen. És gairebé un relat.',
          'Hay continuidad.<br>Se complementan. Es casi un relato.',
          'There is continuity.<br>They complement each other. It is almost a story.'
        ), ' class="garden-accent garden-close"')}`;

page({
  file: 'index.html',
  key: null,
  bodyClass: 'home',
  title: 'El Xop · Les Vaqueres',
  desc: "El Xop, Les Vaqueres: residència d'artistes, l'entorn, museu i arxiu a l'Horta de Lleida.",
  body: `  <h1 class="visually-hidden">El Xop · Les Vaqueres</h1>
  <section class="hero hero-home wrap">
    <div class="hero-grid">
      <img class="hero-logo hero-logo-vaqueres" src="assets/images/hero/les-vaqueres-logo.png" width="469" height="469" alt="Les Vaqueres">
      <img class="hero-logo hero-logo-xop" src="assets/images/hero/el-xop-logo.png" width="553" height="425" alt="El Xop · Associació Amics de la Natura">
      <img class="hero-map" src="assets/images/hero/horta-de-lleida-map.jpg" width="958" height="603" alt="Horta de Lleida" fetchpriority="high" decoding="async">
    </div>
    <a class="scroll-cue" href="#more">
      ${tx('span', t("Desplaça't per saber-ne més", 'Desplázate para saber más', 'Scroll to learn more'))}
      <svg aria-hidden="true" viewBox="0 0 16 16" width="36" height="36"><path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg>
    </a>
  </section>

  <section class="welcome" id="more" aria-labelledby="welcome-title">
    <h2 class="welcome-title wrap" id="welcome-title">
      ${welcomeTitle}
    </h2>
    <div class="welcome-map wrap">
      <img src="assets/images/welcome/les-vaqueres-map.webp" width="505" height="710" alt="Illustrated map of Les Vaqueres, with the cypresses, the poplar and the fig tree" loading="lazy" decoding="async"${aria(t(
        'Plànol il·lustrat de Les Vaqueres, amb els xiprers, el xop i la figuera',
        'Plano ilustrado de Les Vaqueres, con los cipreses, el chopo y la higuera',
        'Illustrated map of Les Vaqueres, with the cypresses, the poplar and the fig tree'
      ))}>
      <div class="welcome-text">
        ${welcomeText}
      </div>
    </div>
  </section>

  <section class="welcome welcome-garden" aria-labelledby="garden-title">
    <div class="garden-scene">
      <img class="garden-bg" src="assets/images/welcome/garden-bench.webp" width="1672" height="941" alt="" loading="lazy" decoding="async">
      <div class="wrap">
        <h2 class="welcome-title garden-title" id="garden-title">
          ${gardenTitle}
        </h2>
        <div class="garden-grid">
          <div class="garden-panel">
            ${gardenPanel1}
          </div>
          <div class="garden-panel">
            ${gardenPanel2}
          </div>
        </div>
      </div>
    </div>
  </section>
`,
});

page({
  file: PAGES.residencia.href, key: 'residencia',
  title: "Residència d'artistes · Les Vaqueres · El Xop",
  desc: "Les Vaqueres, residència d'artistes a l'Horta de Lleida: cinc apartaments, residències individuals i compartides, laboratoris de creació i tallers.",
  // the hero rebuilds the flyer: its title faces load early so the first screen does not reflow
  extraHead: `
<link rel="preload" href="assets/fonts/oswald-600-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="assets/fonts/caveat-500-latin.woff2" as="font" type="font/woff2" crossorigin>`,
  body: require('../src/templates/residencia.js').body, bodyClass: 'page-residencia',
});

page({
  file: PAGES.vaqueres.href, key: 'vaqueres',
  title: 'Les Vaqueres · El Xop', desc: 'Les Vaqueres, El Xop.',
  body: pageHead('vaqueres'), bodyClass: 'is-empty',
});


page({
  file: PAGES.fruits.href, key: 'fruits',
  title: 'Fruits de la tardor · El Xop', desc: "Els fruits de la tardor a El Xop: els seus racons, arbres i herbes.",
  body: pageHead('fruits', t(
    "Un jardí tranquil per passejar, seure i mirar. Herbes, arbres fruiters, aigua i racons on aturar-se una estona.",
    "Un jardín tranquilo para pasear, sentarse y mirar. Hierbas, árboles frutales, agua y rincones donde detenerse un rato.",
    "A quiet garden to walk in, sit in and look around. Herbs, fruit trees, water, and corners to stop in for a while."
  ), {
    after: partial('fruits-de-la-tardor-nav.html'),
    // the ginkgo shedding its leaves, as a short muted loop (the user's GIF, re-encoded as video:
    // AV1 for browsers that can, H.264 for the rest). Top level with the title (head-art-top).
    // main.js starts it; reduced motion / data saving keep the poster still, with a play button to start it.
    variant: 'beside-nav',
    art: `<video class="head-art head-art-top head-video" width="238" height="426" muted loop playsinline preload="none"
      poster="assets/video/autumn-leaves-falling-poster.jpg"${ariaT(t(
      "Fulles grogues de ginkgo que cauen d'un arbre contra el cel blau",
      "Hojas amarillas de ginkgo que caen de un árbol contra el cielo azul",
      "Yellow ginkgo leaves falling from a tree against a blue sky"
    ))}>
      <source src="assets/video/autumn-leaves-falling-av1.mp4" type='video/mp4; codecs="av01.0.00M.08"'>
      <source src="assets/video/autumn-leaves-falling.mp4" type="video/mp4">
    </video>
    <button type="button" class="head-video-toggle" aria-pressed="false" hidden${ariaT(t(
      "Atura l'animació", "Detener la animación", "Pause the animation"
    ))}><svg aria-hidden="true" viewBox="0 0 24 24" width="18" height="18"><path class="i-pause" d="M7 5h3.5v14H7zM13.5 5H17v14h-3.5z"/><path class="i-play" d="M8 5.5v13L18.5 12z"/></svg></button>`,
  }) + '\n\n' + partial('fruits-de-la-tardor.html'),
});

// article page laid out like the Museu (contents list + sections)
page({
  file: PAGES.herbes.href, key: 'herbes',
  title: 'Racó d’herbes · El Xop', desc: "El Racó d'herbes de El Xop: un passeig pel jardí en quatre racons, les arcades aromàtiques i altres llocs on aturar-se.",
  body: pageHead('herbes', t(
    "Un passeig cap endins: quatre racons, unes arcades aromàtiques i molts llocs on aturar-se, respirar i estar present.",
    "Un paseo hacia dentro: cuatro rincones, unos arcos aromáticos y muchos lugares donde detenerse, respirar y estar presente.",
    "A walk inwards: four corners, scented archways and many places to stop, breathe and be present."
  ), {
    after: partial('raco-dherbes-nav.html'),
    // illustrated map of El Xop's grounds; beside the contents list, top level with the title (head-art-top)
    // (the garden sign photo is in the first section, "Un passeig cap endins")
    variant: 'beside-nav',
    art: `<img class="head-art head-art-top" src="assets/images/herbes/el-xop-garden-map.jpg" width="860" height="1013" decoding="async"${altT(t(
      "Plànol il·lustrat de El Xop: el Racó d'herbes, el Passeig dels Plataners, l'Hort dels Sentits, el Passeig de roses i el Camp de pruneres",
      "Plano ilustrado de El Xop: el Racó d'herbes, el Passeig dels Plataners, el Hort dels Sentits, el Passeig de roses y el Camp de pruneres",
      "Illustrated map of El Xop: the Racó d'herbes, the plane-tree walk, the garden of the senses, the rose walk and the plum orchard"
    ))}>`,
  }) + '\n\n' + partial('raco-dherbes.html'),
});

// the old Jardí terapèutic address now forwards to Fruits de la tardor
fs.writeFileSync(path.join(ROOT, 'jardi-terapeutic.html'), `<!doctype html>
<html lang="ca">
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Fruits de la tardor · El Xop</title>
<meta http-equiv="refresh" content="0; url=${PAGES.fruits.href}">
<link rel="canonical" href="${PAGES.fruits.href}">
<a href="${PAGES.fruits.href}">Fruits de la tardor</a>
`);
console.log('wrote jardi-terapeutic.html (redirect)');

page({
  file: PAGES.museu.href, key: 'museu',
  title: 'Museu · El Xop', desc: "El museu de les Vaqueres: eines, fotografies i records d'una família de l'Horta de Lleida.",
  body: pageHead('museu', t(
    "Eines, fotografies i records d'una família de l'Horta: la vida a les Vaqueres, de l'autosuficiència a l'agricultura per vendre.",
    "Herramientas, fotografías y recuerdos de una familia de la Huerta: la vida en Les Vaqueres, de la autosuficiencia a la agricultura para vender.",
    "Tools, photographs and keepsakes from a family of the Horta: life at Les Vaqueres, from self-sufficiency to farming for the market."
  ), {
    after: partial('museu-nav.html'),
    // three framed photos from the museum, straightened, stacked beside the contents list (not sticky)
    variant: 'beside-nav',
    art: `<div class="head-art-stack">
      <img class="head-stack-img" src="assets/images/museum/framed-family-photo.jpg" width="1400" height="997" decoding="async"${altT(t(
        "Fotografia antiga emmarcada: dos homes amb un cavall davant de la casa",
        "Fotografía antigua enmarcada: dos hombres con un caballo delante de la casa",
        "Old framed photograph: two men with a horse in front of the farmhouse"
      ))}>
      <img class="head-stack-img" src="assets/images/museum/framed-family-photo-2.jpg" width="1400" height="1052" loading="lazy" decoding="async"${altT(t(
        "Fotografia antiga emmarcada: un grup de dones i infants al costat d'uns sacs",
        "Fotografía antigua enmarcada: un grupo de mujeres y niños junto a unos sacos",
        "Old framed photograph: a group of women and children beside some sacks"
      ))}>
      <img class="head-stack-img" src="assets/images/museum/framed-family-photo-3.jpg" width="1400" height="899" loading="lazy" decoding="async"${altT(t(
        "Fotografia antiga emmarcada: una dona i un home al costat d'un foc de branques, fora de la casa",
        "Fotografía antigua enmarcada: una mujer y un hombre junto a un fuego de ramas, fuera de la casa",
        "Old framed photograph: a woman and a man beside a fire of branches outside the house"
      ))}>
    </div>`,
  }) + '\n\n' + partial('museu.html'),
});


page({
  file: PAGES.bibliografia.href, key: 'bibliografia',
  title: 'Bibliografia · El Xop', desc: 'Els llibres fets a mà de El Xop, transcrits sencers.',
  body: `${pageHead('bibliografia', t(
    "A El Xop hi ha uns llibres fets a mà que expliquen els seus racons: el cel del mirador, els símbols del laberint, la història dels laberints i el Camí de Sant Jaume. Aquí els pots llegir sencers.",
    "En El Xop hay unos libros hechos a mano que explican sus rincones: el cielo del mirador, los símbolos del laberinto, la historia de los laberintos y el Camino de Santiago. Aquí puedes leerlos enteros.",
    "At El Xop there are hand-made books that explain its corners: the sky from the viewpoint, the symbols in the labyrinth, the story of labyrinths, and the Way of St James. You can read them here in full."
  ))}
  <section class="books wrap">
    <div class="book-grid">${lib.cards()}
    </div>
  </section>`,
});


// ---------- joc de l'horta: game board (download / print) and rules ----------
page({
  file: PAGES.joc.href, key: 'joc', bodyClass: 'joc-page',
  title: "Joc de l'Horta · El Xop", desc: "Tauler per imprimir i regles del Joc de l'Horta, una adaptació del joc de l'oca.",
  extraHead: '\n<style>@page { margin: 10mm; }</style>',
  body: require('../src/templates/joc.js').body(),
});

// ---------- legal pages: linked from the footer only, not from the menu ----------
const legal = require('../src/templates/legal.js');
const { LEGAL } = C;
const legalPages = [
  ['avis', "Avís legal · El Xop", "Avís legal del lloc web de El Xop · Les Vaqueres."],
  ['privacitat', "Política de privacitat · El Xop", "Com tracta les dades personals el lloc web de El Xop · Les Vaqueres."],
  ['cookies', "Política de galetes · El Xop", "El lloc web de El Xop · Les Vaqueres no fa servir galetes pròpies."],
];
for (const [key, title, desc] of legalPages) {
  page({
    file: LEGAL[key].href, key: null, title, desc,
    body: `  <section class="page-head wrap">
    ${tx('h1', LEGAL[key].title)}
  </section>
  <article class="legal wrap">${legal[key]('')}
  </article>`,
  });
}

// ---------- 404: shown by GitHub Pages for any address that does not exist ----------
// It can be served from any folder depth, so a <base> points every relative link at the site root.
page({
  file: '404.html', key: null,
  title: 'Pàgina no trobada · El Xop', desc: "Aquesta pàgina no existeix al lloc web de El Xop · Les Vaqueres.",
  body: `  <section class="page-head wrap">
    ${tx('h1', t('Pàgina no trobada', 'Página no encontrada', 'Page not found'))}
    ${tx('p', t(
      "Aquesta adreça no existeix o ha canviat. Torna a la <a href=\"index.html\">pàgina d'inici</a>.",
      "Esta dirección no existe o ha cambiado. Vuelve a la <a href=\"index.html\">página de inicio</a>.",
      "This address doesn't exist or has moved. Go back to the <a href=\"index.html\">home page</a>."
    ), ' class="lead"')}
  </section>`,
});
{
  const p404 = path.join(ROOT, '404.html');
  const base = new URL(C.SITE_URL).pathname;
  fs.writeFileSync(p404, fs.readFileSync(p404, 'utf8')
    .replace('<meta charset="utf-8">', `<meta charset="utf-8">\n<base href="${base}">\n<meta name="robots" content="noindex">`));
}

// ---------- other languages: public/<lang>/ copies of every page, from src/i18n/<lang>.json ----------
require('./localize.js').build();

// ---------- cache busting: every page asks for assets/css|js/<file>?v=<content hash> ----------
// GitHub Pages lets browsers keep CSS/JS for 10 minutes or more; a new hash whenever a file changes
// makes every visitor load the new version at once (unchanged files stay cached).
{
  const crypto = require('crypto');
  const hashes = {};
  for (const dir of ['css', 'js']) {
    for (const f of fs.readdirSync(path.join(ROOT, 'assets', dir))) {
      if (!/\.(css|js)$/.test(f)) continue;
      hashes[`${dir}/${f}`] = crypto.createHash('sha1').update(fs.readFileSync(path.join(ROOT, 'assets', dir, f))).digest('hex').slice(0, 8);
    }
  }
  const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? (e.name === 'assets' ? [] : walk(path.join(d, e.name))) : e.name.endsWith('.html') ? [path.join(d, e.name)] : []);
  let n = 0;
  for (const file of walk(ROOT)) {
    const html = fs.readFileSync(file, 'utf8');
    const out = html.replace(/(assets\/((?:css|js)\/[\w.-]+\.(?:css|js)))(?:\?v=[0-9a-f]+)?(?=")/g,
      (m, url, key) => (hashes[key] ? `${url}?v=${hashes[key]}` : m));
    if (out !== html) { fs.writeFileSync(file, out); n++; }
  }
  console.log(`versioned CSS/JS links in ${n} pages`);
}
