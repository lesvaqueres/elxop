// Artist residency page (residencia.html).
// Text comes only from the association's document "Les Vaqueres salut natura" (CA), with ES / EN translations.
// The hero rebuilds the first picture of that document (the flyer): paper panel left, garden photo right,
// a torn-paper card with four icons, and the closing line. The rest are full-screen sections that the page
// scrolls through normally (CSS in main.css, "Residency page").
// "La casa i el seu entorn" follows option A of "temp files work dir/la-casa-layout-brief.html" (tabs by space).

const { t, tx } = require('./i18n.js');

const altT = (v) => ` alt="${v.en}" data-ca-alt="${v.ca}" data-es-alt="${v.es}"`;

// ---------- line icons (drawn for this page, stroke = currentColor) ----------
const svg = (body, cls = 'res-icon') => `<svg class="${cls}" viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">${body}</svg>`;
const ICON = {
  sprig: svg('<path d="M8 40C18 32 28 22 40 8"/><path d="M15 34c-4-1-7-4-7-8 4 0 7 3 7 8zM21 28c-4-2-6-5-5-9 4 1 6 5 5 9zM27 22c-3-3-4-6-2-10 3 2 4 6 2 10zM18 33c1-4 4-6 8-6-1 4-4 6-8 6zM24 27c1-4 4-6 8-6-1 4-4 6-8 6zM30 20c1-4 4-6 8-6-1 4-4 6-8 6z"/>', 'res-sprig'),
  palette: svg('<path d="M24 7C13 7 6 14 6 23c0 9 7 16 15 16 3 0 4-2 3-4-1-3 0-5 3-5h5c6 0 10-4 10-9C42 13 34 7 24 7z"/><circle cx="15" cy="21" r="2.5"/><circle cx="21" cy="14" r="2.5"/><circle cx="30" cy="14" r="2.5"/><circle cx="35" cy="21" r="2.5"/><path d="M33 33l9 9"/>'),
  book: svg('<path d="M24 13c-5-3-11-4-18-3v26c7-1 13 0 18 3 5-3 11-4 18-3V10c-7-1-13 0-18 3z"/><path d="M24 13v26"/><path d="M10 17c4 0 8 1 10 2M10 23c4 0 8 1 10 2M28 19c2-1 6-2 10-2M28 25c2-1 6-2 10-2"/>'),
  pen: svg('<path d="M34 6l8 8-20 20-10 2 2-10z"/><path d="M30 10l8 8"/><path d="M6 42c6-1 10-3 14-3 3 0 5 2 8 2"/>'),
  leaf: svg('<path d="M40 8C22 8 10 16 10 30c0 4 2 8 6 10 14 0 24-12 24-32z"/><path d="M8 42c8-10 16-18 26-26"/><path d="M20 30h8M24 24h7M18 36h6"/>'),
  house: svg('<path d="M8 22L24 9l16 13"/><path d="M12 19v20h24V19"/><path d="M24 36c0-7 3-11 8-12-1 6-4 10-8 12zM24 36c-4-2-6-6-5-10 4 1 5 5 5 10z"/>'),
  heart: svg('<path d="M24 40C12 32 7 25 7 18c0-6 4-10 9-10 4 0 7 3 8 6 1-3 4-6 8-6 5 0 9 4 9 10 0 7-5 14-17 22z"/><path d="M14 44c4-2 8-4 10-4"/>', 'res-heart'),
  arrive: svg('<path d="M10 24h26M28 16l8 8-8 8"/><path d="M40 10v28"/>'),
  leave: svg('<path d="M38 24H12M20 16l-8 8 8 8"/><path d="M42 10v28"/>'),
  people: svg('<circle cx="16" cy="16" r="5"/><circle cx="32" cy="16" r="5"/><path d="M6 38c0-7 4-12 10-12s10 5 10 12M22 38c0-7 4-12 10-12s10 5 10 12"/>'),
  person: svg('<circle cx="24" cy="15" r="6"/><path d="M12 40c0-8 5-14 12-14s12 6 12 14"/>'),
  key: svg('<circle cx="16" cy="24" r="7"/><path d="M23 24h19M36 24v6M41 24v4"/>'),
  table: svg('<path d="M6 18h36M10 18v20M38 18v20M14 18v-6h20v6"/><path d="M18 26h12"/>'),
};

// a small heading ornament: line, sprig, line (as in the flyer)
const ORNAMENT = `<div class="res-ornament" aria-hidden="true"><span></span>${ICON.sprig}<span></span></div>`;

// section shell: title centred, then the body. `tone` alternates the two greens of the ground colour.
function section(id, tone, title, body, sub = null) {
  return `  <section class="res-snap res-section res-tone-${tone}" id="${id}" aria-labelledby="${id}-title">
    <div class="wrap res-inner">
      <header class="res-head">
        ${tx('h2', title, ` class="res-title" id="${id}-title"`)}
        ${ORNAMENT}${sub ? '\n        ' + tx('p', sub, ' class="res-sub"') : ''}
      </header>
${body}
    </div>
  </section>`;
}

// ================= hero (the flyer) =================
const hero = `  <section class="res-snap res-hero" aria-labelledby="res-hero-title">
    <div class="res-hero-grid">
      <div class="res-hero-title">
        <h1 id="res-hero-title" class="res-h1">
          <span class="res-name">Les Vaqueres ${ICON.sprig}</span>
          ${tx('span', t("Residència d'artistes", 'Residencia de artistas', 'Artist residency'), ' class="res-kind"')}
        </h1>
        ${tx('p', t(
          "Un refugi a l’Horta de Lleida<br>per escoltar, crear i ser.",
          'Un refugio en la Huerta de Lleida<br>para escuchar, crear y ser.',
          'A refuge in the Horta de Lleida<br>to listen, create and be.'
        ), ' class="res-script"')}
        ${ORNAMENT}
      </div>

      <div class="res-hero-body">
        ${tx('p', t(
          'Vivim en un món que va massa de pressa. I, a vegades, l’únic que necessitem és <strong>temps i silenci</strong>.',
          'Vivimos en un mundo que va demasiado deprisa. Y, a veces, lo único que necesitamos es <strong>tiempo y silencio</strong>.',
          'We live in a world that moves too fast. And sometimes all we need is <strong>time and silence</strong>.'
        ))}
        ${tx('p', t(
          'Des de l’Associació d’Amics de la Natura, obrim les portes de <strong>Les Vaqueres</strong>, un espai pensat per a la concentració, la creativitat i el benestar, en plena natura.',
          'Desde la Asociación de Amigos de la Naturaleza, abrimos las puertas de <strong>Les Vaqueres</strong>, un espacio pensado para la concentración, la creatividad y el bienestar, en plena naturaleza.',
          'At the Amics de la Natura association, we are opening the doors of <strong>Les Vaqueres</strong>, a place made for concentration, creativity and wellbeing, in the middle of nature.'
        ))}
        <div class="res-house">
          <span class="res-house-icon">${ICON.house}</span>
          ${tx('p', t(
            'Cinc apartaments independents i acollidors (un d’ells totalment accessible) enmig del paisatge tranquil de l’Horta de Lleida, on la llum de ponent i el ritme de la terra marquen el compàs.',
            'Cinco apartamentos independientes y acogedores (uno de ellos totalmente accesible) en medio del paisaje tranquilo de la Huerta de Lleida, donde la luz del atardecer y el ritmo de la tierra marcan el compás.',
            'Five welcoming, self-contained apartments (one of them fully accessible) in the quiet landscape of the Horta de Lleida, where the evening light and the rhythm of the land set the pace.'
          ))}
        </div>
      </div>

      <div class="res-hero-photo-wrap">
        <img class="res-hero-photo" src="assets/images/residencia/garden-swan-peacock.jpg" width="560" height="462" fetchpriority="high" decoding="async"${altT(t(
          'Prat sota els arbres de Les Vaqueres, amb un cigne, un paó sobre una tanca de fusta i taules llargues a l’ombra',
          'Prado bajo los árboles de Les Vaqueres, con un cisne, un pavo real sobre una valla de madera y mesas largas a la sombra',
          'Lawn under the trees at Les Vaqueres, with a swan, a peacock on a wooden rail and long tables in the shade'
        ))}>
      </div>

      <ul class="res-paper res-hero-card">
        <li>${ICON.palette}${tx('span', t('Ets artista i busques inspiració.', 'Eres artista y buscas inspiración.', 'You are an artist looking for inspiration.'))}</li>
        <li>${ICON.book}${tx('span', t('Prepares unes oposicions.', 'Preparas unas oposiciones.', 'You are studying for an exam.'))}</li>
        <li>${ICON.pen}${tx('span', t('Escrius les primeres pàgines d’una història.', 'Escribes las primeras páginas de una historia.', 'You are writing the first pages of a story.'))}</li>
        <li>${ICON.leaf}${tx('span', t('O, simplement, necessites uns dies de calma i desconnexió.', 'O, simplemente, necesitas unos días de calma y desconexión.', 'Or you simply need a few days of calm and switching off.'))}</li>
      </ul>

      <div class="res-hero-foot">
        ${tx('p', t('Aquest és el teu lloc.', 'Este es tu lugar.', 'This is your place.'), ' class="res-script res-script-foot"')}
        ${tx('p', t(
          'Un espai de repòs.<br>Un respir per a la teva ment.<br>Un lloc on la natura t’acompanya.',
          'Un espacio de reposo.<br>Un respiro para tu mente.<br>Un lugar donde la naturaleza te acompaña.',
          'A place to rest.<br>A breather for your mind.<br>A place where nature keeps you company.'
        ), ' class="res-lines"')}
        ${ICON.heart}
      </div>
    </div>
  </section>`;

// ================= 1. general conditions =================
const shareForms = [
  t('una exposició', 'una exposición', 'an exhibition'),
  t('una escena', 'una escena', 'a scene'),
  t('una lectura', 'una lectura', 'a reading'),
  t('unes fotografies', 'unas fotografías', 'some photographs'),
  t('una conversa', 'una conversación', 'a conversation'),
  t('una mostra del procés', 'una muestra del proceso', 'a glimpse of the process'),
  t('un taller', 'un taller', 'a workshop'),
  t('una activitat amb artistes locals', 'una actividad con artistas locales', 'an activity with local artists'),
];
const conditions = section('condicions', 'a', t("Condicions generals d'estada", 'Condiciones generales de estancia', 'General conditions of stay'), `
      <ol class="res-steps">
        <li class="res-card">
          <span class="res-step-icon">${ICON.arrive}</span>
          ${tx('h3', t("Abans d'arribar", 'Antes de llegar', 'Before arriving'))}
          ${tx('p', t('Cal que els artistes:', 'Los artistas deben:', 'Artists are asked to:'), ' class="res-card-lead"')}
          <ul class="res-checks">
            ${tx('li', t('Presentin un petit resum del projecte.', 'Presentar un pequeño resumen del proyecto.', 'Send a short summary of the project.'))}
            ${tx('li', t('Diguin quant de temps necessiten quedar-se.', 'Decir cuánto tiempo necesitan quedarse.', 'Say how long they need to stay.'))}
          </ul>
        </li>
        <li class="res-card">
          <span class="res-step-icon">${ICON.leave}</span>
          ${tx('h3', t('Abans de marxar', 'Antes de marcharse', 'Before leaving'))}
          ${tx('p', t('Els artistes cal que exposin una mostra del resultat final.', 'Los artistas deben exponer una muestra del resultado final.', 'Artists show a sample of the final result.'))}
          ${tx('p', t('No cal que els artistes arribin amb una obra acabada.', 'No hace falta que los artistas lleguen con una obra acabada.', 'Artists do not need to arrive with a finished work.'), ' class="res-note"')}
        </li>
      </ol>
      <div class="res-share">
        ${tx('p', t('Els residents comparteixen amb persones de l’entorn:', 'Los residentes comparten con personas del entorno:', 'Residents share with people from the area:'), ' class="res-share-lead"')}
        <ul class="res-chips">
          ${shareForms.map((v) => tx('li', v)).join('\n          ')}
        </ul>
      </div>
      ${tx('p', t(
        'La finalitat és connectar la residència amb l’Horta i amb el territori.',
        'La finalidad es conectar la residencia con la Huerta y con el territorio.',
        'The aim is to connect the residency with the Horta and the land around it.'
      ), ' class="res-quote"')}`);

// ================= 2. during the stay =================
const commons = [
  t('una cuina', 'una cocina', 'a kitchen'),
  t('un menjador-sala d’estar', 'un comedor-sala de estar', 'a dining and living room'),
  t('la zona de neteja', 'la zona de limpieza', 'the laundry area'),
  t('els espais exteriors', 'los espacios exteriores', 'the outdoor spaces'),
];
const during = section('durant', 'b', t("Durant l'estada: possibilitats", 'Durante la estancia: posibilidades', 'During the stay: possibilities'), `
      ${tx('p', t(
        'La vida quotidiana forma part de la residència. Una casa compartida ofereix tenir un espai propi sense deixar d’estar en relació amb els altres.',
        'La vida cotidiana forma parte de la residencia. Una casa compartida ofrece tener un espacio propio sin dejar de estar en relación con los demás.',
        'Everyday life is part of the residency. A shared house lets you have a space of your own while staying in touch with the others.'
      ), ' class="res-lead"')}
      <div class="res-split">
        <div class="res-card res-card-own">
          <span class="res-step-icon">${ICON.key}</span>
          ${tx('h3', t('Cada artista disposa del seu espai privat', 'Cada artista dispone de su espacio privado', 'Each artist has their own private space'))}
        </div>
        <div class="res-card res-card-shared">
          <span class="res-step-icon">${ICON.people}</span>
          ${tx('h3', t('… i comparteix amb la resta els espais comuns', '… y comparte con el resto los espacios comunes', '… and shares the common spaces with the others'))}
          <ul class="res-chips">
            ${commons.map((v) => tx('li', v)).join('\n            ')}
          </ul>
        </div>
        <figure class="res-aula">
          <img src="assets/images/residencia/aula.jpg" width="574" height="430" loading="lazy" decoding="async"${altT(t(
            'L’aula: una sala llarga i clara amb taules i bancs de fusta',
            'El aula: una sala larga y clara con mesas y bancos de madera',
            'The aula: a long, bright room with wooden tables and benches'
          ))}>
          <figcaption>
            <span class="res-big">${tx('span', t('L’aula', 'El aula', 'The aula'))} <small>${tx('span', t('d’uns 70 m²', 'de unos 70 m²', 'about 70 m²'))}</small></span>
            ${tx('span', t('destinada a espai de treball i sala d’exposicions', 'destinada a espacio de trabajo y sala de exposiciones', 'a work space and exhibition room'))}
          </figcaption>
        </figure>
      </div>
      <div class="res-pair">
        ${tx('p', t(
          'Cada artista pot dedicar-se al seu propi projecte, però també pot decidir compartir part del seu procés amb la resta de residents.',
          'Cada artista puede dedicarse a su propio proyecto, pero también puede decidir compartir parte de su proceso con el resto de residentes.',
          'Each artist can focus on their own project, but can also choose to share part of their process with the other residents.'
        ))}
        ${tx('p', t(
          'Per això, els artistes residents que ho vulguin poden proposar activitats, trobades o tallers relacionats amb la seva pràctica, o obrir-se també a artistes i persones de l’entorn.',
          'Por eso, los artistas residentes que lo deseen pueden proponer actividades, encuentros o talleres relacionados con su práctica, o abrirse también a artistas y personas del entorno.',
          'So resident artists who wish to can propose activities, gatherings or workshops related to their practice, or open them to artists and people from the area too.'
        ))}
      </div>`);

// ================= 3. ways to stay =================
const ways = section('possibilitats', 'a', t("Possibilitats d'estada i tallers", 'Posibilidades de estancia y talleres', 'Ways to stay, and workshops'), `
      <div class="res-ways">
        <article class="res-card res-way">
          <span class="res-step-icon">${ICON.person}</span>
          ${tx('h3', t('Residències individuals', 'Residencias individuales', 'Individual residencies'))}
          ${tx('blockquote', t('«Vinc a desenvolupar el meu projecte»', '«Vengo a desarrollar mi proyecto»', '“I come to develop my project”'), ' class="res-voice"')}
          ${tx('p', t(
            'Estades individuals en els <strong>5 apartaments</strong>.<br>Es poden reservar directament.',
            'Estancias individuales en los <strong>5 apartamentos</strong>.<br>Se pueden reservar directamente.',
            'Individual stays in the <strong>5 apartments</strong>.<br>They can be booked directly.'
          ))}
        </article>
        <article class="res-card res-way">
          <span class="res-step-icon">${ICON.people}</span>
          ${tx('h3', t('Residències compartides', 'Residencias compartidas', 'Shared residencies'))}
          ${tx('blockquote', t(
            '«Vinc a desenvolupar el meu projecte dins d’un grup de creadors amb un tema, una disciplina o un repte compartit»',
            '«Vengo a desarrollar mi proyecto dentro de un grupo de creadores con un tema, una disciplina o un reto compartido»',
            '“I come to develop my project within a group of makers who share a theme, a discipline or a challenge”'
          ), ' class="res-voice"')}
          ${tx('p', t(
            'Un espai compartit per crear: formen un petit ecosistema creatiu durant una setmana.',
            'Un espacio compartido para crear: forman un pequeño ecosistema creativo durante una semana.',
            'A shared space to create in: together they form a small creative ecosystem for a week.'
          ))}
          <ul class="res-stats">
            <li><b>5</b>${tx('span', t('apartaments', 'apartamentos', 'apartments'))}</li>
            <li><b>5</b>${tx('span', t('artistes', 'artistas', 'artists'))}</li>
            <li><b>1</b>${tx('span', t('setmana', 'semana', 'week'))}</li>
          </ul>
        </article>
      </div>`);

// ================= 4. creation labs =================
const tags = (list) => `<ul class="res-chips res-chips-sm">${list.map((v) => tx('li', v)).join('')}</ul>`;
const labs = section('laboratoris', 'b', t('Residències compartides: els laboratoris de creació', 'Residencias compartidas: los laboratorios de creación', 'Shared residencies: the creation labs'), `
      <ol class="res-labs">
        <li class="res-card res-lab">
          <span class="res-num">1</span>
          ${tx('h3', t('Una setmana, diferents disciplines: «intercanvi de sabers»', 'Una semana, diferentes disciplinas: «intercambio de saberes»', 'One week, different disciplines: “sharing know-how”'))}
          ${tx('p', t('5 artistes · diferents disciplines · un mateix espai · un mateix temps', '5 artistas · diferentes disciplinas · un mismo espacio · un mismo tiempo', '5 artists · different disciplines · one place · one time'), ' class="res-tagline"')}
          <div class="res-example">
            ${tx('p', t('Per exemple: <strong>Setmana de creació · cos, espai i imatge</strong>. Podrien coincidir:', 'Por ejemplo: <strong>Semana de creación · cuerpo, espacio e imagen</strong>. Podrían coincidir:', 'For example: <strong>Creation week · body, space and image</strong>. Those taking part might be:'))}
            ${tags([t('una actriu', 'una actriz', 'an actor'), t('una fotògrafa', 'una fotógrafa', 'a photographer'), t('una escenògrafa', 'una escenógrafa', 'a set designer'), t('un músic', 'un músico', 'a musician'), t('una il·lustradora', 'una ilustradora', 'an illustrator')])}
          </div>
          ${tx('p', t(
            'Cadascú desenvolupa el seu propi projecte, però comparteixen la vida quotidiana i els espais comuns. No hi ha un tema imposat: la riquesa està precisament en la diversitat.',
            'Cada uno desarrolla su propio proyecto, pero comparten la vida cotidiana y los espacios comunes. No hay un tema impuesto: la riqueza está precisamente en la diversidad.',
            'Each develops their own project, but they share daily life and the common spaces. There is no set theme: the richness lies precisely in the diversity.'
          ))}
        </li>
        <li class="res-card res-lab">
          <span class="res-num">2</span>
          ${tx('h3', t('Una setmana, una mateixa disciplina', 'Una semana, una misma disciplina', 'One week, one discipline'))}
          ${tx('p', t('Diverses especialitats al voltant d’un eix comú: 5 residents, cadascun amb una especialitat d’un mateix tema.', 'Diversas especialidades alrededor de un eje común: 5 residentes, cada uno con una especialidad de un mismo tema.', 'Several specialities around a common thread: 5 residents, each with a speciality within the same theme.'), ' class="res-tagline"')}
          <div class="res-example">
            ${tx('p', t('Exemple: <strong>Setmana de teatre · «de la idea a l’escena»</strong>', 'Ejemplo: <strong>Semana de teatro · «de la idea a la escena»</strong>', 'Example: <strong>Theatre week · “from idea to stage”</strong>'))}
            ${tags([t('interpretació', 'interpretación', 'acting'), t('direcció', 'dirección', 'directing'), t('posada en escena', 'puesta en escena', 'staging'), t('vestuari', 'vestuario', 'costume'), t('maquillatge i caracterització', 'maquillaje y caracterización', 'make-up and character design'), t('escenografia', 'escenografía', 'set design'), t('il·luminació', 'iluminación', 'lighting')])}
          </div>
        </li>
        <li class="res-card res-lab">
          <span class="res-num">3</span>
          ${tx('h3', t('I hi ha una tercera possibilitat especialment interessant', 'Y hay una tercera posibilidad especialmente interesante', 'And there is a third, especially interesting option'))}
          ${tx('p', t('Que una persona resident sigui la impulsora i coordinadora de la setmana.', 'Que una persona residente sea la impulsora y coordinadora de la semana.', 'One resident leads and coordinates the week.'), ' class="res-tagline"')}
          <div class="res-example">
            ${tx('p', t('Per exemple, una directora teatral podria proposar:', 'Por ejemplo, una directora teatral podría proponer:', 'For example, a theatre director might propose:'))}
            ${tx('blockquote', t('«Vull fer una setmana de recerca sobre la construcció d’un personatge»', '«Quiero hacer una semana de investigación sobre la construcción de un personaje»', '“I want to spend a week researching how a character is built”'), ' class="res-voice"')}
            ${tx('p', t('Ella podria convidar o proposar diferents perfils:', 'Ella podría invitar o proponer diferentes perfiles:', 'She could invite or suggest different profiles:'))}
            ${tags([t('actriu', 'actriz', 'actor'), t('dramaturga', 'dramaturga', 'playwright'), t('figurinista', 'figurinista', 'costume designer'), t('maquilladora', 'maquilladora', 'make-up artist'), t('escenògrafa', 'escenógrafa', 'set designer')])}
          </div>
        </li>
      </ol>
      <dl class="res-motor">
        <div>${tx('dt', t('Opció 1', 'Opción 1', 'Option 1'))}<dd><span aria-hidden="true">→</span> ${tx('span', t('la diversitat dels artistes és el motor.', 'la diversidad de los artistas es el motor.', 'the diversity of the artists is what drives it.'))}</dd></div>
        <div>${tx('dt', t('Opció 2 i 3', 'Opción 2 y 3', 'Options 2 and 3'))}<dd><span aria-hidden="true">→</span> ${tx('span', t('un tema o disciplina comuna n’és el motor.', 'un tema o disciplina común es el motor.', 'a shared theme or discipline drives it.'))}</dd></div>
      </dl>`);

// ================= 5. workshops =================
const workshops = section('tallers', 'a', t('Estructura de tallers', 'Estructura de talleres', 'How workshops work'), `
      <div class="res-workshops">
        <article class="res-card res-ws">
          <span class="res-num">1</span>
          ${tx('h3', t('Tallers i experiències sense allotjament', 'Talleres y experiencias sin alojamiento', 'Workshops and experiences without accommodation'))}
          ${tx('p', t('Exemple: un cap de setmana de fotografia.', 'Ejemplo: un fin de semana de fotografía.', 'Example: a photography weekend.'), ' class="res-tagline"')}
          <ol class="res-days">
            <li>${tx('b', t('Divendres', 'Viernes', 'Friday'))}${tx('span', t('arribada', 'llegada', 'arrival'))}</li>
            <li>${tx('b', t('Dissabte', 'Sábado', 'Saturday'))}${tx('span', t('taller intensiu', 'taller intensivo', 'intensive workshop'))}</li>
            <li>${tx('b', t('Diumenge', 'Domingo', 'Sunday'))}${tx('span', t('taller i tancament', 'taller y cierre', 'workshop and closing'))}</li>
          </ol>
        </article>
        <article class="res-card res-ws">
          <span class="res-num">2</span>
          ${tx('h3', t('Taller + allotjament', 'Taller + alojamiento', 'Workshop + accommodation'))}
          ${tx('p', t('Exemple: una setmana d’escriptura al camp. Hi poden venir de 6 a 10 participants, més l’artista o escriptor.', 'Ejemplo: una semana de escritura en el campo. Pueden venir de 6 a 10 participantes, más el artista o escritor.', 'Example: a writing week in the countryside. From 6 to 10 participants can come, plus the artist or writer.'), ' class="res-tagline"')}
          <ul class="res-stats res-stats-col">
            <li><b>8</b>${tx('span', t('participants al taller', 'participantes en el taller', 'workshop participants'))}</li>
            <li><b>5/6</b>${tx('span', t('persones allotjades', 'personas alojadas', 'people staying'))}</li>
            <li><b>2</b>${tx('span', t('participants externs que només venen al taller', 'participantes externos que solo vienen al taller', 'outside participants who come only for the workshop'))}</li>
          </ul>
        </article>
        <article class="res-card res-ws">
          <span class="res-num">3</span>
          ${tx('h3', t('Si l’activitat té inscripcions, s’estableix un repartiment', 'Si la actividad tiene inscripciones, se establece un reparto', 'If the activity has registration fees, a share-out is agreed'))}
          <figure class="res-ws-fig">
            <img src="assets/images/residencia/outdoor-table.jpg" width="451" height="297" loading="lazy" decoding="async"${altT(t(
              'Taula llarga de fusta i cadires verdes sota una figuera, al pati',
              'Mesa larga de madera y sillas verdes bajo una higuera, en el patio',
              'Long wooden table and green chairs under a fig tree in the courtyard'
            ))}>
          </figure>
        </article>
      </div>
      ${tx('p', t('Els tallers són proposats i conduïts pels mateixos artistes.', 'Los talleres son propuestos y conducidos por los propios artistas.', 'Workshops are proposed and led by the artists themselves.'), ' class="res-quote"')}`);

// ================= 6. the house and its surroundings (layout option A: tabs by space) =================
// One gallery per group of spaces from the document. Each gallery is a sideways strip that snaps photo by
// photo (swipe on phones); thumbnails and arrows move it. Without JavaScript all groups show one under another.
// Apartments: photos carry their apartment number; the panel then gets a row of "Apartament N" buttons and a badge
// on each photo. Apartment 5 has no photos yet: add them with number 5 and its button appears.
const R = 'assets/images/residencia/';
const { PAGES } = require('./layout.js');
// outdoor places (folder names, spelled as the site names them elsewhere)
const PLACE = {
  sentits: t('Hort dels Sentits', 'Hort dels Sentits', 'Garden of the Senses'),
  aromes: t('Punt d’aromes', 'Punto de aromas', 'Scent point'),
  mirador: t('Mirador del cel', 'Mirador del cielo', 'Sky viewpoint'),
  reflexo: t('Reflexologia', 'Reflexología', 'Reflexology'),
  terapeutic: t('Jardí terapèutic', 'Jardín terapéutico', 'Therapeutic garden'),
};
// "opens in a new tab" sign after a link
const NEWTAB = '<svg class="res-newtab" viewBox="0 0 16 16" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M9 3h4v4M13 3L7 9M11 9.5V13H3V5h3.5"/></svg>';
const CASA = [
  { id: 'apartaments', tab: t('Els apartaments', 'Los apartamentos', 'The apartments'),
    title: t('Espais interiors personals: els apartaments', 'Espacios interiores personales: los apartamentos', 'Private indoor spaces: the apartments'),
    // 5th value: apartment number (photos from "temp files work dir/apartaments/1–4")
    photos: [
      ['apartment-1-long-room.jpg', 1600, 1200, t('Sala llarga amb un balancí, una pissarra i, al fons, una taula rodona', 'Sala larga con una mecedora, una pizarra y, al fondo, una mesa redonda', 'Long room with a rocking chair, a blackboard and a round table at the far end'), 1],
      ['apartment-1-round-table.jpg', 1600, 1200, t('Taula rodona amb cadires de fusta al costat de la finestra', 'Mesa redonda con sillas de madera junto a la ventana', 'Round table with wooden chairs by the window'), 1],
      ['apartment-1-mosaic-corner.jpg', 1200, 1600, t('Racó amb sofà i una paret de mosaic amb flors', 'Rincón con sofá y una pared de mosaico con flores', 'Corner with a sofa and a mosaic wall of flowers'), 1],
      ['apartment-1-bedroom.jpg', 1200, 1600, t('Dormitori amb llit, calaixera i penjador de fusta', 'Dormitorio con cama, cómoda y perchero de madera', 'Bedroom with a bed, a chest of drawers and a wooden coat stand'), 1],
      ['apartment-2-living-room.jpg', 1600, 1200, t('Sala d’estar amb taula blanca, sofà i una petita cuina', 'Sala de estar con mesa blanca, sofá y una pequeña cocina', 'Living room with a white table, a sofa and a small kitchen'), 2],
      ['apartment-2-window-table.jpg', 1600, 1200, t('Taula blanca al costat d’una porta oberta al jardí', 'Mesa blanca junto a una puerta abierta al jardín', 'White table beside a door open to the garden'), 2],
      ['apartment-2-bedroom.jpg', 1600, 1200, t('Dormitori amb llit de ferro i cobrellit verd', 'Dormitorio con cama de hierro y colcha verde', 'Bedroom with an iron bed and a green bedspread'), 2],
      ['apartment-3-room.jpg', 1600, 1200, t('Estança amb llit, sofà, taula i cadires de boga', 'Estancia con cama, sofá, mesa y sillas de enea', 'Room with a bed, a sofa, a table and rush chairs'), 3],
      ['apartment-3-kitchenette.jpg', 1600, 1200, t('Petita cuina amb taula de marbre i una butaca', 'Pequeña cocina con mesa de mármol y un sillón', 'Small kitchen with a marble table and an armchair'), 3],
      ['apartment-3-bathroom.jpg', 1600, 1200, t('Bany amb dutxa', 'Baño con ducha', 'Bathroom with a shower'), 3],
      ['apartment-4-room.jpg', 1600, 1200, t('Estança amb llit de fusta, sofà i taula verda', 'Estancia con cama de madera, sofá y mesa verde', 'Room with a wooden bed, a sofa and a green table'), 4],
      ['apartment-4-dining-corner.jpg', 1600, 1200, t('Racó amb taula verda, cadires de fusta i un moble antic', 'Rincón con mesa verde, sillas de madera y un mueble antiguo', 'Corner with a green table, wooden chairs and an old sideboard'), 4],
      ['apartment-4-bathroom.jpg', 1600, 1200, t('Bany amb dutxa', 'Baño con ducha', 'Bathroom with a shower'), 4],
    ] },
  { id: 'comuns', tab: t('Espais comuns', 'Espacios comunes', 'Shared spaces'),
    title: t('Espais interiors comuns: menjador, cuina, zona de neteja', 'Espacios interiores comunes: comedor, cocina, zona de limpieza', 'Shared indoor spaces: dining room, kitchen, laundry area'),
    photos: [
      ['common-dining-room.jpg', 1600, 1200, t('Menjador amb una taula llarga i una porta de vitralls', 'Comedor con una mesa larga y una puerta de vidrieras', 'Dining room with a long table and a stained-glass door')],
      ['common-dining-table-football.jpg', 1600, 1200, t('Sala comuna amb taula llarga de fusta, l’escala i un futbolí vermell', 'Sala común con mesa larga de madera, la escalera y un futbolín rojo', 'Common room with a long wooden table, the staircase and a red table-football game')],
      ['common-kitchen.jpg', 1180, 884, t('Cuina amb una taula de marbre i fogons grans', 'Cocina con una mesa de mármol y fogones grandes', 'Kitchen with a marble table and a large range')],
      ['common-staircase-piano.jpg', 1600, 1200, t('Entrada amb escala, un piano i una llibreria', 'Entrada con escalera, un piano y una librería', 'Hall with a staircase, a piano and a bookcase')],
      ['common-hallway.jpg', 1200, 1600, t('Passadís que porta a les estances', 'Pasillo que lleva a las estancias', 'Hallway leading to the rooms')],
    ] },
  { id: 'voltants', tab: t('Els voltants', 'Los alrededores', 'Around the house'),
    title: t('Els voltants', 'Los alrededores', 'Around the house'),
    photos: [
      ['outdoor-table.jpg', 451, 297, t('Taula llarga de fusta i cadires verdes sota una figuera, al pati', 'Mesa larga de madera y sillas verdes bajo una higuera, en el patio', 'Long wooden table and green chairs under a fig tree in the courtyard')],
      ['casa-porch.jpg', 642, 479, t('Porxo amb un balancí, un gerro de pedra i tamborets', 'Porche con una mecedora, un jarrón de piedra y taburetes', 'Porch with a rocking chair, a stone urn and stools')],
      ['casa-mosaic-fountain.jpg', 695, 931, t('Font de pedra davant d’una paret de mosaic blau i groc', 'Fuente de piedra ante una pared de mosaico azul y amarillo', 'Stone fountain in front of a blue and yellow mosaic wall')],
    ] },
  { id: 'exteriors', tab: t('Espais exteriors', 'Espacios exteriores', 'Outdoor spaces'),
    title: t('Espais exteriors', 'Espacios exteriores', 'Outdoor spaces'),
    // 5th value: the place each photo belongs to (folders in "temp files work dir/outdoors")
    photos: [
      ['senses-garden-beds.jpg', 1200, 1600, t('Bancals de verdures i flors a l’Hort dels Sentits', 'Bancales de verduras y flores en el Hort dels Sentits', 'Vegetable and flower beds in the Garden of the Senses'), PLACE.sentits],
      ['senses-garden-arbour-walk.jpg', 1200, 1600, t('Camí sota una pèrgola d’arbres i enfiladisses', 'Camino bajo una pérgola de árboles y enredaderas', 'Path under an arbour of trees and climbers'), PLACE.sentits],
      ['senses-garden-pond.jpg', 1600, 1200, t('Bassa d’aigua amb un safareig i arbustos', 'Balsa de agua con un lavadero y arbustos', 'Water pond with an old washing trough and shrubs'), PLACE.sentits],
      ['rose-arbor.jpg', 535, 401, t('Arcades de roses blanques i vermelles sobre un camí del jardí', 'Arcos de rosas blancas y rojas sobre un camino del jardín', 'Arches of white and red roses over a garden path'), PLACE.sentits],
      ['casa-butterfly-planter.jpg', 341, 456, t('Jardinera de fusta amb papallones sota una pèrgola', 'Jardinera de madera con mariposas bajo una pérgola', 'Wooden planter decorated with butterflies under a pergola'), PLACE.sentits],
      ['scent-point-hut.jpg', 1580, 1180, t('Caseta de teulada piramidal envoltada d’arbres', 'Caseta con tejado piramidal rodeada de árboles', 'Small hut with a pyramid roof among the trees'), PLACE.aromes],
      ['sky-viewpoint-mosaic.jpg', 840, 1120, t('Terra de mosaic amb espirals i una rosa dels vents al mirador', 'Suelo de mosaico con espirales y una rosa de los vientos en el mirador', 'Mosaic floor with spirals and a compass rose on the viewpoint'), PLACE.mirador],
      ['reflexology-labyrinth.jpg', 1580, 1172, t('Laberint de pedres a la gespa entre arbres', 'Laberinto de piedras en el césped entre árboles', 'Stone labyrinth on the grass among trees'), PLACE.reflexo],
      ['reflexology-sign.jpg', 1600, 1200, t('Cartell de reflexoteràpia amb els punts dels peus', 'Cartel de reflexoterapia con los puntos de los pies', 'Reflexology sign showing the points of the feet'), PLACE.reflexo],
      ['therapeutic-garden-green-hut.jpg', 1200, 1600, t('Cabana coberta d’heura', 'Cabaña cubierta de hiedra', 'Hut covered in ivy'), PLACE.terapeutic],
      ['therapeutic-garden-green-hut-2.jpg', 1200, 1600, t('La cabana d’heura entre els arbres', 'La cabaña de hiedra entre los árboles', 'The ivy hut among the trees'), PLACE.terapeutic],
      ['therapeutic-garden-hut-inside.jpg', 1200, 1600, t('Interior d’una cabana de canyes amb penjolls', 'Interior de una cabaña de cañas con colgantes', 'Inside a cane hut with hanging ornaments'), PLACE.terapeutic],
      ['therapeutic-garden-mirror.jpg', 1200, 1600, t('Cadira i mirall rodó enmig de la vegetació', 'Silla y espejo redondo en medio de la vegetación', 'Chair and round mirror among the plants'), PLACE.terapeutic],
      ['therapeutic-garden-blue-table.jpg', 1200, 1600, t('Taula i cadires blaves sota els arbres', 'Mesa y sillas azules bajo los árboles', 'Blue table and chairs under the trees'), PLACE.terapeutic],
      ['casa-herb-corner-gate.jpg', 423, 564, t('Porta de ferro del Racó d’herbes a la posta de sol', 'Puerta de hierro del Racó d’herbes a la puesta de sol', 'Iron gate of the Racó d’herbes at sunset'), PLACE.terapeutic],
    ] },
  { id: 'cambra', tab: t('La cambra fosca', 'La cámara oscura', 'The camera obscura'),
    title: t('La cambra fosca', 'La cámara oscura', 'The camera obscura'),
    // text from the end of the document "Les Vaqueres salut natura"
    text: [
      t('La cambra fosca és un instrument òptic que projecta una imatge invertida de l’exterior dins d’un espai tancat, mentre que el revelatge fotogràfic és el procés químic que fa visible i fixa aquesta imatge.',
        'La cámara oscura es un instrumento óptico que proyecta una imagen invertida del exterior dentro de un espacio cerrado, mientras que el revelado fotográfico es el proceso químico que hace visible y fija esa imagen.',
        'A camera obscura is an optical device that projects an upside-down image of the outside into a closed space, while photographic developing is the chemical process that makes that image visible and fixes it.'),
      t('La nostra cambra fosca es troba dins d’una furgoneta, que està preparada també per a revelar les fotos.',
        'Nuestra cámara oscura está dentro de una furgoneta, que también está preparada para revelar las fotos.',
        'Our camera obscura is inside a van, which is also set up for developing photos.'),
    ],
    photos: [
      ['darkroom-van.jpg', 806, 431, t('Furgoneta groga amb «Cambra fosca» escrit al costat, enmig del bosc', 'Furgoneta amarilla con «Cambra fosca» escrito en el lateral, en medio del bosque', 'Yellow van with “Cambra fosca” written on its side, among the trees')],
      ['darkroom-van-inside.jpg', 680, 362, t('Interior de la furgoneta, amb la imatge de l’exterior projectada, i la furgoneta per fora', 'Interior de la furgoneta, con la imagen del exterior proyectada, y la furgoneta por fuera', 'Inside the van, with the outside view projected, and the van from outside')],
    ] },
  { id: 'aula', tab: t('L’aula', 'El aula', 'The aula'),
    title: t('Espais de treball i exposició (aula de 70 metres)', 'Espacios de trabajo y exposición (aula de 70 metros)', 'Work and exhibition spaces (the 70 m² aula)'),
    photos: [
      ['aula.jpg', 574, 430, t('L’aula: una sala llarga i clara amb taules i bancs de fusta', 'El aula: una sala larga y clara con mesas y bancos de madera', 'The aula: a long, bright room with wooden tables and benches')],
      ['casa-aula-inside.jpg', 609, 457, t('Interior de l’aula amb taula de quadres, un moble de fusta i finestres', 'Interior del aula con mesa de cuadros, un mueble de madera y ventanas', 'Inside the aula: a checked tablecloth, a wooden cabinet and windows')],
      ['casa-aula-murals.jpg', 487, 342, t('L’edifici de l’aula, amb arbres pintats a la façana i xops al darrere', 'El edificio del aula, con árboles pintados en la fachada y chopos detrás', 'The aula building, with trees painted on its wall and poplars behind')],
      ['casa-aula-pine.jpg', 376, 501, t('Un pi al prat davant de l’aula', 'Un pino en el prado delante del aula', 'A pine on the lawn in front of the aula')],
    ] },
];
const UIc = {
  prev: t('Foto anterior', 'Foto anterior', 'Previous photo'),
  next: t('Foto següent', 'Foto siguiente', 'Next photo'),
  photo: (i, n) => t(`Foto ${i} de ${n}`, `Foto ${i} de ${n}`, `Photo ${i} of ${n}`),
  spaces: t('Espais de la casa', 'Espacios de la casa', 'Spaces of the house'),
  apt: (n) => t(`Apartament ${n}`, `Apartamento ${n}`, `Apartment ${n}`),
  apts: t('Apartaments', 'Apartamentos', 'Apartments'),
  places: t('Llocs', 'Lugares', 'Places'),
  open: t('Obre la foto a pantalla completa', 'Abrir la foto a pantalla completa', 'Open the photo full screen'),
  close: t('Tanca', 'Cerrar', 'Close'),
  viewer: t('Visor de fotos', 'Visor de fotos', 'Photo viewer'),
};
const ariaT = (v) => ` aria-label="${v.en}" data-ca-aria="${v.ca}" data-es-aria="${v.es}"`;
const ARROW = (d) => `<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;

// 5th photo value = its group: an apartment number ("Apartament N") or a place label t(...)
const groupLabel = (g) => (typeof g === 'number' ? UIc.apt(g) : g);
const groupKey = (g) => (typeof g === 'number' ? g : g && g.en);
const groupStarts = (photos) => photos.reduce((acc, p, k) => (p[4] && (!k || groupKey(photos[k - 1][4]) !== groupKey(p[4])) ? acc.concat([[p[4], k]]) : acc), []);
const casaPanel = (g, i) => {
  const starts = groupStarts(g.photos);
  const sub = starts.length ? `
          <div class="res-casa-sub"${ariaT(typeof starts[0][0] === 'number' ? UIc.apts : UIc.places)} role="group">
            ${starts.map(([n, k], j) => tx('button', groupLabel(n), ` type="button" data-go="${k}"${j ? '' : ' aria-current="true"'}`)).join('\n            ')}
          </div>` : '';
  return `        <div class="res-casa-panel" id="casa-${g.id}" role="tabpanel" aria-labelledby="casa-tab-${g.id}"${i ? ' data-hidden' : ''}>
          ${tx('h3', g.title, ' class="res-casa-title"')}${g.note ? '\n          ' + tx('p', g.note, ' class="res-casa-note"') : ''}${g.text ? '\n          <div class="res-casa-text">' + g.text.map((v) => tx('p', v)).join('') + '</div>' : ''}${sub}
          <div class="res-casa-stage">
            <ul class="res-casa-strip">
              ${g.photos.map(([f, w, h, alt, n]) => `<li><button class="res-casa-open" type="button"><img class="res-casa-photo" src="${R}${f}" width="${w}" height="${h}" loading="lazy" decoding="async"${altT(alt)}></button>${n ? tx('span', groupLabel(n), ' class="res-casa-badge"') : ''}</li>`).join('\n              ')}
            </ul>
            <button class="res-casa-arrow res-casa-prev" type="button"${ariaT(UIc.prev)}>${ARROW('M15 5l-7 7 7 7')}</button>
            <button class="res-casa-arrow res-casa-next" type="button"${ariaT(UIc.next)}>${ARROW('M9 5l7 7-7 7')}</button>
          </div>
          <ul class="res-casa-thumbs">
            ${g.photos.map(([f, w, h, , n], k) => `<li${n && k && groupKey(g.photos[k - 1][4]) !== groupKey(n) ? ' class="res-casa-thumb-break"' : ''}><button type="button"${k ? '' : ' aria-current="true"'}${ariaT(UIc.photo(k + 1, g.photos.length))}><img src="${R}${f}" width="${w}" height="${h}" alt="" loading="lazy" decoding="async"></button></li>`).join('\n            ')}
          </ul>
        </div>`;
};

// shown under the section title, so it is always visible whichever tab is open; opens in a new tab
const BIB_NOTE = t(
      `Trobareu més fotos i llocs a la pàgina <a href="${PAGES.bibliografia.href}" target="_blank" rel="noopener">Bibliografia${NEWTAB}<span class="visually-hidden"> (s’obre en una pestanya nova)</span></a>.`,
      `Encontraréis más fotos y lugares en la página <a href="${PAGES.bibliografia.href}" target="_blank" rel="noopener">Bibliografía${NEWTAB}<span class="visually-hidden"> (se abre en una pestaña nueva)</span></a>.`,
      `You can find more photos and places on the <a href="${PAGES.bibliografia.href}" target="_blank" rel="noopener">Bibliography${NEWTAB}<span class="visually-hidden"> (opens in a new tab)</span></a> page.`
    );

const casa = section('casa', 'b', t('La casa i el seu entorn', 'La casa y su entorno', 'The house and its surroundings'), `
      <div class="res-casa">
        <div class="res-casa-tabs" role="tablist"${ariaT(UIc.spaces)}>
          ${CASA.map((g, i) => tx('button', g.tab, ` type="button" role="tab" id="casa-tab-${g.id}" aria-controls="casa-${g.id}" aria-selected="${i ? 'false' : 'true'}"${i ? ' tabindex="-1"' : ''}`)).join('\n          ')}
        </div>
${CASA.map(casaPanel).join('\n')}
        <dialog class="res-lightbox"${ariaT(UIc.viewer)}>
          <figure class="res-lightbox-fig">
            <img class="res-lightbox-img" alt="">
            <figcaption class="res-lightbox-cap"></figcaption>
          </figure>
          <button class="res-lightbox-btn res-lightbox-prev" type="button"${ariaT(UIc.prev)}>${ARROW('M15 5l-7 7 7 7')}</button>
          <button class="res-lightbox-btn res-lightbox-next" type="button"${ariaT(UIc.next)}>${ARROW('M9 5l7 7-7 7')}</button>
          <button class="res-lightbox-btn res-lightbox-close" type="button"${ariaT(UIc.close)}>${ARROW('M6 6l12 12M18 6L6 18')}</button>
        </dialog>
      </div>`, BIB_NOTE);

// ================= 7. economic model =================
// kept plain on purpose (owner's request): one reading column, no cards, icons, chips or photo
const economy = section('model', 'a', t("Model econòmic d'estada i tallers", 'Modelo económico de estancia y talleres', 'How stays and workshops are funded'), `
      <div class="res-economy">
        ${tx('p', t(
          'L’associació impulsa un model cultural i de creació. És un projecte cultural amb estada. <strong>No lloguem apartaments. Oferim un lloc per viure, crear i compartir durant un temps.</strong>',
          'La asociación impulsa un modelo cultural y de creación. Es un proyecto cultural con estancia. <strong>No alquilamos apartamentos. Ofrecemos un lugar para vivir, crear y compartir durante un tiempo.</strong>',
          'The association promotes a cultural, creative model. It is a cultural project with a stay. <strong>We do not rent out apartments. We offer a place to live, create and share for a while.</strong>'
        ))}
        ${tx('p', t(
          'A partir del projecte «Residències d’artistes», les persones hi poden accedir a través de les diferents opcions i fan una aportació per participar en el programa i contribuir al sosteniment de l’espai.',
          'A partir del proyecto «Residencias de artistas», las personas pueden acceder a través de las diferentes opciones y hacen una aportación para participar en el programa y contribuir al sostenimiento del espacio.',
          'Through the “Artist residencies” project, people can join through the different options and make a contribution to take part in the programme and help sustain the place.'
        ))}
        ${tx('p', t(
          'Quant a les tarifes cal tenir present una cosa important: que una associació sense ànim de lucre no vol dir que no hagi de ser econòmicament sostenible. Al contrari. S’ha de generar prou marge per a manteniment, reparacions, neteja, assegurances, subministraments, gestió, comunicació, renovació d’equipaments, etc.',
          'En cuanto a las tarifas hay que tener presente algo importante: que una asociación sin ánimo de lucro no significa que no tenga que ser económicamente sostenible. Al contrario. Hay que generar suficiente margen para mantenimiento, reparaciones, limpieza, seguros, suministros, gestión, comunicación, renovación de equipamientos, etc.',
          'On fees, one thing matters: being a non-profit association does not mean it need not be financially sustainable. Quite the opposite. It must bring in enough for maintenance, repairs, cleaning, insurance, utilities, management, communication, renewing equipment, etc.'
        ))}
        ${tx('p', t(
          'El benefici no es reparteix entre propietaris, sinó que es reinverteix en el projecte.',
          'El beneficio no se reparte entre propietarios, sino que se reinvierte en el proyecto.',
          'Any surplus is not shared among owners: it is reinvested in the project.'
        ))}
      </div>`, t('Concepte i identitat del projecte', 'Concepto e identidad del proyecto', 'The idea and identity of the project'));

// rough paper edge for the hero card (.res-paper::before uses filter: url(#res-torn))
const TORN = `<svg width="0" height="0" style="position:absolute" aria-hidden="true" focusable="false"><filter id="res-torn" x="-2%" y="-4%" width="104%" height="108%"><feTurbulence type="fractalNoise" baseFrequency="0.045" numOctaves="3" seed="7"/><feDisplacementMap in="SourceGraphic" scale="7"/></filter></svg>`;

// page navigation: one slim bar that sticks under the site header, short names of the sections
const NAV = [
  ['condicions', t('Condicions', 'Condiciones', 'Conditions')],
  ['durant', t('Durant l’estada', 'Durante la estancia', 'During the stay')],
  ['possibilitats', t('Possibilitats', 'Posibilidades', 'Ways to stay')],
  ['laboratoris', t('Laboratoris', 'Laboratorios', 'Creation labs')],
  ['tallers', t('Tallers', 'Talleres', 'Workshops')],
  ['casa', t('L’entorn', 'El entorno', 'The surroundings')],
  ['model', t('Model econòmic', 'Modelo económico', 'Funding')],
];
const pageNav = `  <nav class="res-nav"${ariaT(t('En aquesta pàgina', 'En esta página', 'On this page'))}>
    <div class="wrap res-nav-inner">
      ${tx('span', t('En aquesta pàgina:', 'En esta página:', 'On this page:'), ' class="res-nav-label" aria-hidden="true"')}
      <ul>
        ${NAV.map(([id, label]) => `<li>${tx('a', label, ` href="#${id}"`)}</li>`).join('\n        ')}
      </ul>
    </div>
  </nav>`;

const body = `<div class="res-page">
${TORN}
${hero}

${pageNav}

${conditions}

${during}

${ways}

${labs}

${workshops}

${casa}

${economy}
</div>`;

module.exports = { body };
