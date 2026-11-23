// El Camí de Sant Jaume — recreated pages. Source photos: books/Laberint Dels Símbols (IMG_1139–IMG_1153)
const { t, from, html } = require('./_helpers.js');
const B = from('cami');

const sud = B.block('sud', 1).terms;           // Mitjana, Molí de Cervià, Lleida, Rufea, Butsènit
const oca = B.block('oca-simbol', 3).ul;
const LANGS = ['ca', 'es', 'en'];
const map = (v, f) => Object.fromEntries(LANGS.map((L) => [L, f(v[L], L)]));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
// "<b>term</b> text" as one paragraph
const lead = (k, v) => ({ rawp: Object.fromEntries(LANGS.map((L) => [L, `<b>${esc(k[L])}</b> ${esc(v[L])}`])) });
// split a long paragraph in two at a phrase (one marker per language), for text that runs round a picture
const cut = (v, marks) => [map(v, (s, L) => s.slice(0, s.indexOf(marks[L])).trim()), map(v, (s, L) => s.slice(s.indexOf(marks[L])))];
const heading = (box, text, size = 2.6) => ({ type: 'title', font: 'carlito', bold: true, box, size, align: 'left', text });
const body = (box, text, size = 1.95) => ({ type: 'text', font: 'carlito', box, size, text });

const [mill1, mill2] = cut(sud[1][1], { ca: 'El molí tenia dos edificis', es: 'El molino tenía dos edificios', en: 'The mill had two buildings' });
const intro = B.p('joc-oca', 0);
const introBody = map(intro, (s) => s.slice(s.indexOf('»') + 1).trim());

module.exports = {
  slug: 'el-cami-de-sant-jaume',
  orient: 'landscape',
  source: 'books/Laberint Dels Símbols',
  pages: [
    {
      id: 'IMG_1139',
      items: [
        { type: 'pic', name: 'pilgrim-top', box: [4, 7, 12.4, 24], shape: 'rect', refine: false, blend: 'multiply', decorative: true },
        { type: 'title', font: 'mali-italic', box: [13, 7.5, 64, 15], size: 3.9, align: 'left', underline: true,
          text: t('EL CAMÍ DE SANT JAUME', 'EL CAMINO DE SANTIAGO', 'THE WAY OF ST JAMES') },
        { type: 'title', font: 'carlito', bold: true, box: [16, 18, 62, 22.5], size: 1.8, align: 'left',
          text: t("des de l'Ermita de Grenyana a l'Ermita de Butsènit", 'desde la Ermita de Grenyana a la Ermita de Butsènit', 'from the Grenyana hermitage to the Butsènit hermitage') },
        { type: 'pic', name: 'route-map', box: [2.2, 23.6, 72, 99.6], shape: 'rect', refine: false, alt: B.p('cami', 0) },
        { type: 'text', font: 'courgette', box: [72.5, 30, 95, 70], size: 2.55, text: html(B.block('cami', 1).quote) },
        { type: 'label', font: 'courgette', at: [81, 71.2], size: 1.4, text: t('Màrius Torres', 'Màrius Torres', 'Màrius Torres') },
        { type: 'pic', name: 'pilgrim-bottom', box: [76, 76.5, 90.5, 99.6], shape: 'rect', refine: false, blend: 'multiply', decorative: true },
      ],
    },
    {
      id: 'IMG_1140',
      items: [
        { type: 'title', font: 'courgette', box: [13, 17, 75, 23.5], size: 3.4, align: 'left',
          text: t('Els fanalets de Sant Jaume a Lleida', 'Los farolillos de Santiago en Lleida', "St James's lanterns in Lleida") },
        body([3.5, 25.5, 50.5, 51], html(B.p('fanalets', 0), B.p('fanalets', 1))),
        { type: 'text', font: 'carlito', bold: true, box: [10, 51.5, 46, 69], size: 1.9, text: html({ verse: B.block('fanalets', 2).verse }) },
        { type: 'pic', name: 'lantern-children', box: [10.6, 68.8, 37, 94], shape: 'rect', refine: false,
          alt: t('Nens i nenes amb fanalets a la processó de Sant Jaume', 'Niños y niñas con farolillos en la procesión de Santiago', 'Children with lanterns at the St James procession') },
        { type: 'pic', name: 'lanterns-song-score', box: [51.5, 24, 91.6, 94.6], shape: 'rect', refine: false, blend: 'multiply',
          alt: B.block('fanalets', 3).note },
      ],
    },
    {
      id: 'IMG_1141',
      items: [
        { type: 'title', font: 'courgette', box: [8, 8, 60, 14.5], size: 3.4, align: 'left', text: B.title('recorregut') },
        { type: 'label', font: 'carlito', bold: true, underline: true, at: [3.6, 17.2], size: 1.9, text: t('-Descripció.-', '-Descripción.-', '-Description.-') },
        body([3.5, 21, 94, 55], html(B.p('recorregut', 0), B.p('recorregut', 1), { ul: B.block('recorregut', 2).ul })),
        { type: 'pic', name: 'goigs-grenyana', box: [5, 55.6, 23, 91.4], shape: 'rect', refine: false,
          alt: t('Goigs de Nostra Senyora de Grenyana', 'Gozos de Nuestra Señora de Grenyana', 'Goigs (hymn sheet) of Our Lady of Grenyana') },
        { type: 'text', font: 'carlito', box: [27, 61, 50, 85], size: 1.8,
          text: html({ h: t('els de Grenyana', 'los de Grenyana', 'Grenyana’s') }, { verse: B.block('recorregut', 3).verse }) },
        { type: 'text', font: 'carlito', box: [50, 61, 73, 85], size: 1.8,
          text: html({ h: t('els de Butsènit', 'los de Butsènit', 'Butsènit’s') }, { verse: B.block('recorregut', 4).verse }) },
        { type: 'pic', name: 'goigs-butsenit', box: [73, 53.6, 91.4, 90.4], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('Goigs a llaor de la Mare de Déu de Butsènit', 'Gozos en alabanza de la Virgen de Butsènit', 'Goigs in praise of Our Lady of Butsènit') },
      ],
    },
    {
      id: 'IMG_1142',
      items: [
        { type: 'label', font: 'carlito', bold: true, underline: true, at: [3.6, 8.4], size: 1.9, text: t('-Itinerari.-', '-Itinerario.-', '-Route.-') },
        body([3.5, 12, 96, 24.5], html(B.p('nord', 0))),
        body([3.5, 25, 70, 56], html({ rawp: map(B.block('nord', 1).h, (s) => `<b><i>1.- ${esc(s)}</i></b>`) }, B.p('nord', 2), B.p('nord', 3))),
        { type: 'pic', name: 'font-pixada', box: [70.6, 22.6, 91.4, 43.4], shape: 'rect', refine: false,
          alt: t('La Font Pixada, entre les herbes', 'La Font Pixada, entre las hierbas', 'The Font Pixada spring among the grass') },
        { type: 'pic', name: 'grenyana-hermitage', box: [2.2, 57.6, 29.6, 85.4], shape: 'rect', refine: false,
          alt: t("L'ermita de Grenyana", 'La ermita de Grenyana', 'The Grenyana hermitage') },
        { type: 'pic', name: 'grenyana-mass', box: [29.8, 57.6, 61.8, 85.4], shape: 'rect', refine: false,
          alt: t("Missa a l'interior de l'ermita de Grenyana", 'Misa en el interior de la ermita de Grenyana', 'Mass inside the Grenyana hermitage') },
        { type: 'pic', name: 'grenyana-cave', box: [62, 57.6, 91.4, 85.4], shape: 'rect', refine: false,
          alt: t('La cova de la Mare de Déu, amb flors', 'La cueva de la Virgen, con flores', 'The Virgin’s cave, with flowers') },
      ],
    },
    {
      id: 'IMG_1143',
      items: [
        body([3.5, 7.5, 75, 11.5], html({ rawp: map(B.block('sud', 0).h, (s) => `<b><i>2.- ${esc(s)}</i></b>`) })),
        body([3.5, 12.5, 74.5, 32], html(lead(sud[0][0], sud[0][1]))),
        { type: 'pic', name: 'la-mitjana-aerial', box: [75.4, 11, 94, 30], shape: 'rect', refine: false,
          alt: t('Vista aèria del riu Segre i el parc de la Mitjana', 'Vista aérea del río Segre y el parque de La Mitjana', 'Aerial view of the river Segre and La Mitjana park') },
        { type: 'pic', name: 'fontanet-channel', box: [75.4, 31.4, 94, 50.4], shape: 'rect', refine: false,
          alt: t('La sèquia de Fontanet', 'La acequia de Fontanet', 'The Fontanet irrigation channel') },
        body([3.5, 32.5, 74.5, 46], html(lead(sud[1][0], mill1))),
        { type: 'pic', name: 'cervia-mill-waterfall', box: [3.6, 46.2, 25, 70], shape: 'rect', refine: false,
          alt: t('El salt d\'aigua al costat del Molí de Cervià', 'El salto de agua junto al Molí de Cervià', 'The waterfall beside the Cervià mill') },
        body([25.6, 46.5, 92, 71], html(mill2)),
        { type: 'pic', name: 'cervia-mill-reliefs', box: [3, 71.6, 90.6, 98.6], shape: 'rect', refine: false,
          alt: t('Relleus del Molí de Cervià: una finestra, un escut, una figura i una petxina esculpida', 'Relieves del Molí de Cervià: una ventana, un escudo, una figura y una concha esculpida', 'Reliefs at the Cervià mill: a window, a coat of arms, a figure and a carved scallop shell') },
      ],
    },
    {
      id: 'IMG_1144',
      items: [
        body([8, 8.5, 46, 36], html(lead(sud[2][0], sud[2][1]))),
        { type: 'pic', name: 'seu-vella', box: [47.2, 8.4, 90, 38.4], shape: 'rect', refine: false,
          alt: t('Vista aèria de la Seu Vella de Lleida', 'Vista aérea de la Seu Vella de Lleida', 'Aerial view of Lleida’s old cathedral, the Seu Vella') },
        { type: 'pic', name: 'rufea-wetlands', box: [8.4, 43.2, 26.3, 61], shape: 'rect', refine: false,
          alt: t('Un ciclista davant del cartell dels Aiguamolls de Rufea', 'Un ciclista delante del cartel de las Aiguamolls de Rufea', 'A cyclist at the Rufea wetlands sign') },
        body([27.5, 39.5, 92, 55], html(lead(sud[3][0], sud[3][1]))),
        body([27.5, 57, 70.5, 76], html(lead(sud[4][0], sud[4][1]))),
        { type: 'pic', name: 'butsenit-plaque', box: [71.3, 56.6, 90.2, 76.4], shape: 'rect', refine: false,
          alt: t("Placa de l'ermita «Mare de Déu de Butsènit»: origen segle XII, edifici segle XV, reedificació segle XVIII", 'Placa de la ermita «Mare de Déu de Butsènit»: origen siglo XII, edificio siglo XV, reedificación siglo XVIII', 'Plaque of the “Mare de Déu de Butsènit” hermitage: origin 12th century, building 15th century, rebuilt 18th century') },
      ],
    },
    {
      id: 'IMG_1145',
      items: [
        { type: 'pic', name: 'horta-board', box: [4, 7.6, 71.4, 94.4], shape: 'rect', refine: false,
          alt: t("El tauler del Joc de l'Horta, amb fotografies de l'horta de Lleida i el gall de El Xop al centre", 'El tablero del Juego de la Huerta, con fotografías de la huerta de Lleida y el gallo de El Xop en el centro', 'The Horta game board, with photos of the Lleida farmland and El Xop’s rooster in the middle') },
        { type: 'text', font: 'carlito', box: [72.4, 14, 93, 87], size: 1.6,
          text: html({ ol: B.block('joc-horta', 2).rules.map(([k, v]) => map(v, (s, L) => `${typeof k === 'string' ? k : k[L]}: ${s}`)) }) },
      ],
    },
    {
      id: 'IMG_1146',
      items: [
        { type: 'title', font: 'arimo-bold', box: [5, 24, 33, 47], size: 5, align: 'right',
          text: t('“Joc de\nl’Oca”', '“Juego de\nla Oca”', '“Game of\nthe Goose”') },
        { type: 'text', font: 'mali-italic', box: [6.5, 55, 33, 71], size: 1.9,
          text: html(map(intro, (s) => s.slice(s.indexOf('«') + 1, s.indexOf('»')).replace(/\.$/, '').replace(/^/, '–') + ' –')) },
        { type: 'pic', name: 'goose-game-board', box: [33.5, 14.6, 96.4, 81.4], shape: 'rect', refine: false,
          alt: t("Un antic tauler del joc de l'oca, amb el títol «Joc de l'Oca – Camí de Sant Jaume» i estrelles", 'Un antiguo tablero del juego de la oca, con el título «Joc de l\'Oca – Camí de Sant Jaume» y estrellas', 'An old Game of the Goose board, titled “Joc de l’Oca – Camí de Sant Jaume”, with stars') },
      ],
    },
    {
      id: 'IMG_1147',
      items: [
        body([7, 30, 92, 57], html(introBody, B.p('joc-oca', 1), B.p('joc-oca', 2))),
        { type: 'pic', name: 'goose-foot-mark', box: [7.6, 57.4, 27.6, 77.4], shape: 'rect', refine: false,
          alt: t("Pedra amb la marca de la pota d'oca gravada pels picapedrers", 'Piedra con la marca de la pata de oca grabada por los canteros', 'A stone with the goose-foot mason’s mark') },
        body([28, 57.5, 92, 80], html(B.p('joc-oca', 3))),
      ],
    },
    {
      id: 'IMG_1148',
      items: [
        heading([7, 21.4, 40, 26.4], B.title('origen')),
        body([7, 27.5, 57.6, 56], html({ ul: B.block('origen', 0).ul.slice(0, 2) })),
        { type: 'pic', name: 'phaistos-disc', box: [58.4, 28.4, 90.4, 54], shape: 'rect', refine: false,
          alt: t('Les dues cares del disc de Festos (16 cm de diàmetre)', 'Las dos caras del disco de Festo (16 cm de diámetro)', 'Both faces of the Phaistos disc (16 cm across)') },
        body([7, 56.5, 95, 82], html({ ul: B.block('origen', 0).ul.slice(2) })),
      ],
    },
    {
      id: 'IMG_1149',
      items: [
        heading([7, 21, 50, 26.4], B.title('oca-simbol')),
        body([7, 27.5, 92, 80], html(B.p('oca-simbol', 0), B.p('oca-simbol', 1), B.p('oca-simbol', 2), ...oca.slice(0, 5))),
      ],
    },
    {
      id: 'IMG_1150',
      items: [
        body([7, 18.5, 95, 35], html(...oca.slice(5))),
        { type: 'pic', name: 'goose-sketchbook', box: [10.2, 37.6, 86.6, 79], shape: 'rect', refine: false, blend: 'multiply',
          alt: t("Pàgina de quadern escrita a mà en castellà, amb una oca pintada a l'aquarel·la", 'Página de cuaderno escrita a mano en castellano, con una oca pintada a la acuarela', 'A handwritten sketchbook page in Spanish, with a watercolour goose') },
        { type: 'text', font: 'carlito', box: [10, 80.5, 90, 98], size: 1.6,
          text: html({ raw: map(B.block('oca-simbol', 4).quote, (s) => `<p class="fb-note">“${esc(s)}”</p>`) }) },
      ],
    },
    {
      id: 'IMG_1151',
      items: [
        heading([7, 27, 50, 32], B.title('tauler')),
        body([7, 33, 59.5, 72], html(B.p('tauler', 0), B.p('tauler', 1))),
        { type: 'pic', name: 'goose-board-collage', box: [60.6, 36, 90.6, 74.6], shape: 'rect', refine: false,
          alt: t("Collage de taulers del joc de l'oca antics, amb oques i el títol «El tablero de la oca»", 'Collage de tableros antiguos del juego de la oca, con ocas y el título «El tablero de la oca»', 'Collage of old Game of the Goose boards, with geese and the title “El tablero de la oca”') },
        body([7, 76, 95, 85], html(B.p('tauler', 2))),
      ],
    },
    {
      id: 'IMG_1152',
      items: [
        heading([7, 21, 80, 26], B.title('processo')),
        { type: 'pic', name: 'procession-saint', box: [7.6, 31.4, 26.2, 70], shape: 'rect', refine: false,
          alt: t('La processó de Sant Jaume a Lleida, amb la imatge del sant i els nens amb fanalets', 'La procesión de Santiago en Lleida, con la imagen del santo y los niños con farolillos', 'The St James procession in Lleida, with the saint’s statue and children with lanterns') },
        body([27, 27, 93, 51], html(B.p('processo', 0), B.p('fanalets', 0))),
        body([27, 51.5, 74, 71.5], html(B.p('processo', 1))),
        { type: 'pic', name: 'procession-lanterns', box: [74.4, 53, 92.4, 72], shape: 'rect', refine: false,
          alt: t('Fanalets de nit: un sol, una lluna i un ànec', 'Farolillos de noche: un sol, una luna y un pato', 'Lanterns at night: a sun, a moon and a duck') },
        { type: 'text', font: 'carlito', bold: true, center: true, boxed: true, box: [6.5, 72.4, 86.2, 82.6], size: 1.9, text: html(B.block('processo', 2).quote) },
      ],
    },
    {
      id: 'IMG_1153',
      items: [
        { type: 'pic', name: 'scallop-shell', box: [10, 5, 99.6, 99.6], shape: 'rect', refine: false,
          alt: t('Una petxina de pelegrí esculpida a la pedra', 'Una concha de peregrino esculpida en la piedra', 'A pilgrim’s scallop shell carved in stone') },
      ],
    },
  ],
};
