// La Mare Terra — recreated pages. Source photos: books/Laberint Dels Símbols (IMG_1124–IMG_1138)
const { t, from, html } = require('./_helpers.js');
const B = from('mare-terra');

const gal = B.block('galeria', 1).ul;           // 18 captions, in page order
const cal = B.block('calendaris', 0).terms;      // Tetón, Daga del Sol, Mogor
const gn = B.block('galicia-nazca', 1).terms;    // Laxe Escrita, Nazca
const chakras = B.block('simbol-antic', 4).terms;

// a gallery picture with its caption centred underneath
const fig = (name, box, capBox, cap, extra = {}) => [
  Object.assign({ type: 'pic', name, box, shape: 'rect', refine: false, alt: cap }, extra),
  { type: 'text', font: 'carlito', center: true, box: capBox, size: 1.75, text: html(cap) },
];
const heading = (box, text, size = 2.7) => ({ type: 'title', font: 'carlito-bi', box, size, align: 'left', text });

module.exports = {
  slug: 'la-mare-terra',
  orient: 'landscape',
  source: 'books/Laberint Dels Símbols',
  pages: [
    {
      id: 'IMG_1124',
      items: [
        { type: 'title', font: 'mali', box: [8, 2.5, 80, 16], size: 6.4, align: 'left',
          text: t('“La Mare Terra”', '“La Madre Tierra”', '“Mother Earth”') },
        { type: 'pic', name: 'mother-earth-cover', box: [5, 22.6, 99.8, 99.8], shape: 'rect', refine: false,
          alt: t("El laberint «Mare Terra» de El Xop, amb una pedra gravada amb un laberint i una rajola amb una deessa", 'El laberinto «Madre Tierra» de El Xop, con una piedra grabada con un laberinto y una baldosa con una diosa', 'El Xop’s “Mother Earth” labyrinth, with a stone carved with a labyrinth and a tile showing a goddess') },
        { type: 'paper', box: [4.4, 75.6, 32.8, 100] },
        { type: 'title', font: 'arimo-bold', box: [4.5, 80, 33, 98], size: 3.5, align: 'left',
          text: t('laberint de\nset cercles', 'laberinto de\nsiete círculos', 'seven-circuit\nlabyrinth') },
      ],
    },
    {
      id: 'IMG_1125',
      items: [
        { type: 'text', font: 'carlito', box: [5, 13, 95, 37], size: 1.9, text: html(B.p('simbol-antic', 0), B.p('simbol-antic', 1)) },
        { type: 'pic', name: 'cretan-coin', box: [6.8, 39, 35, 80], shape: 'rect', refine: false,
          inpaint: [{ box: [29, 70.3, 37.5, 74], mode: 'dark' }],
          alt: t('Moneda de Creta amb un laberint de set cercles; les fletxes assenyalen els meandres', 'Moneda de Creta con un laberinto de siete círculos; las flechas señalan los meandros', 'Cretan coin with a seven-circuit labyrinth; arrows point to its meanders') },
        { type: 'label', font: 'carlito-bi', at: [29.5, 70.7], size: 1.4, text: t('meandres', 'meandros', 'meanders') },
        { type: 'pic', name: 'chakra-figure', box: [48, 40, 70.6, 75.5], shape: 'rect', refine: false, blend: 'multiply',
          inpaint: [{ box: [70.6, 40, 72, 75], mode: 'dark' }],
          alt: t('Dibuix d\'una dona meditant amb els set xacres marcats', 'Dibujo de una mujer meditando con los siete chakras marcados', 'Drawing of a woman meditating with the seven chakras marked') },
        { type: 'text', font: 'arimo-bold', box: [70.8, 41.6, 97, 63.5], size: 1.6,
          text: html({ raw: (() => { const o = {}; for (const L of ['ca', 'es', 'en']) o[L] = chakras.map(([n, v]) => `<p>${{ ca: 'xacra', es: 'chakra', en: 'chakra' }[L]} ${n} = ${v[L]}</p>`).join(''); return o; })() }) },
        { type: 'text', font: 'carlito', box: [5, 82, 96, 99], size: 1.9, text: html(B.p('simbol-antic', 2), B.p('simbol-antic', 3)) },
      ],
    },
    {
      id: 'IMG_1126',
      items: [
        { type: 'pic', name: 'drawing-steps', box: [12.5, 7.5, 29, 54], shape: 'rect', refine: false,
          alt: t('Dibuixar un laberint pas a pas, i laberints gravats a la pedra', 'Dibujar un laberinto paso a paso, y laberintos grabados en la piedra', 'Drawing a labyrinth step by step, and labyrinths carved in stone') },
        heading([29.5, 11, 72, 16.5], t('Com fer un laberint de set cercles', 'Cómo hacer un laberinto de siete círculos', 'How to draw a seven-circuit labyrinth')),
        { type: 'text', font: 'carlito', box: [29, 18, 77, 36], size: 2.0, text: html(B.p('com-fer', 0)) },
        { type: 'pic', name: 'seed-pattern', box: [77.5, 8, 97, 36.6], shape: 'rect', refine: false,
          alt: t('Plafó groc: com es construeix el laberint a partir de la creu, els angles i els punts', 'Panel amarillo: cómo se construye el laberinto a partir de la cruz, los ángulos y los puntos', 'Yellow panel: building the labyrinth from the cross, angles and dots') },
        heading([51, 45, 90, 50.5], B.block('com-fer', 3).h),
        { type: 'pic', name: 'labyrinth-variants', box: [48, 54, 95, 87.5], shape: 'rect', refine: false, blend: 'multiply', degray: true,
          alt: t('Vuit varietats del mateix laberint, rodones i quadrades', 'Ocho variedades del mismo laberinto, redondas y cuadradas', 'Eight versions of the same labyrinth, round and square') },
        { type: 'text', font: 'carlito', box: [12.5, 61.5, 47, 98], size: 2.0, text: html(B.p('com-fer', 4)) },
      ],
    },
    {
      id: 'IMG_1128',
      items: [
        heading([7, 16, 50, 21.5], B.title('cinc-centims')),
        { type: 'text', font: 'carlito', box: [6.5, 23, 95, 35], size: 2.0, text: html({ ul: B.block('cinc-centims', 0).ul.slice(0, 1) }) },
        { type: 'text', font: 'carlito', box: [6.5, 35.5, 79, 58], size: 2.0, text: html({ ul: B.block('cinc-centims', 0).ul.slice(1, 3) }) },
        { type: 'pic', name: 'labyrinth-head', box: [80, 34.5, 94, 53.5], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('Cap d\'home de perfil amb un laberint dibuixat al cervell', 'Cabeza de hombre de perfil con un laberinto dibujado en el cerebro', 'A man’s head in profile with a labyrinth drawn as his brain') },
        { type: 'text', font: 'carlito', box: [6.5, 58.5, 96, 97], size: 2.0, text: html({ ul: B.block('cinc-centims', 0).ul.slice(3) }, B.p('cinc-centims', 1)) },
      ],
    },
    {
      id: 'IMG_1129',
      items: [
        heading([23, 17, 60, 23], B.title('finalitat')),
        { type: 'text', font: 'carlito', box: [12.5, 25, 69, 74], size: 2.2, text: html({ ul: B.block('finalitat', 0).ul.slice(0, 4) }) },
        { type: 'pic', name: 'kurukshetra-labyrinth', box: [71, 23.2, 93.5, 52], shape: 'rect', refine: false,
          alt: t('Laberint pintat al terra del temple de Kurukshetra', 'Laberinto pintado en el suelo del templo de Kurukshetra', 'Labyrinth painted on the floor of the temple at Kurukshetra') },
        { type: 'text', font: 'carlito-bi', center: true, box: [69, 52.5, 95.5, 66], size: 1.55,
          text: html(B.block('finalitat', 1).note) },
        { type: 'text', font: 'carlito', box: [12.5, 74, 96, 99], size: 2.2, text: html({ ul: B.block('finalitat', 0).ul.slice(4) }) },
      ],
    },
    {
      id: 'IMG_1130',
      items: [
        heading([6, 13.5, 50, 19.5], t('Zones on hi trobem laberints', 'Zonas donde encontramos laberintos', 'Where labyrinths are found')),
        { type: 'text', font: 'carlito', box: [6, 21, 95, 31], size: 2.1, text: html(B.block('zones', 1).quote) },
        { type: 'pic', name: 'world-map', box: [10, 36, 79.4, 93.6], shape: 'rect', refine: false,
          alt: B.p('zones', 0) },
      ],
    },
    {
      id: 'IMG_1132',
      items: [
        heading([6, 6.5, 32, 11.8], t('Uns exemples', 'Unos ejemplos', 'Some examples')),
        { type: 'pic', name: 'laxe-escrita-map', box: [5.6, 13.6, 41.4, 53.4], shape: 'rect', refine: false,
          alt: t('Plànol dels petroglifs de Laxe Escrita, amb llegendes en gallec', 'Plano de los petroglifos de Laxe Escrita, con leyendas en gallego', 'Map of the Laxe Escrita petroglyphs, labelled in Galician') },
        { type: 'text', font: 'carlito', box: [42.5, 14, 96, 58], size: 2.0, text: html(B.p('galicia-nazca', 0), { dl: [gn[0]] }) },
        { type: 'text', font: 'carlito', box: [6, 66, 64, 94], size: 2.0, text: html({ dl: [gn[1]] }) },
        { type: 'pic', name: 'nazca-labyrinth', box: [65.2, 54.2, 95, 97.5], shape: 'rect', refine: false,
          alt: t('El laberint de Nazca: dibuix i fotografies aèries', 'El laberinto de Nazca: dibujo y fotografías aéreas', 'The Nazca labyrinth: drawing and aerial photographs') },
      ],
    },
    {
      id: 'IMG_1133',
      items: [
        { type: 'pic', name: 'teton-drawing', box: [8.8, 7, 35.3, 38], shape: 'rect', refine: false,
          alt: t('Dibuix dels petroglifs del Monte Tetón', 'Dibujo de los petroglifos del Monte Tetón', 'Drawing of the Monte Tetón petroglyphs') },
        { type: 'pic', name: 'teton-rock', box: [35.4, 7, 58, 32], shape: 'rect', refine: false,
          alt: t('Els cercles concèntrics gravats a la roca del Monte Tetón', 'Los círculos concéntricos grabados en la roca del Monte Tetón', 'The concentric rings carved in the rock at Monte Tetón') },
        { type: 'text', font: 'carlito', box: [58.5, 7.5, 94, 35], size: 2.05, text: html({ dl: [cal[0]] }) },
        { type: 'text', font: 'carlito', box: [8, 43.5, 62, 53], size: 2.05, text: html({ dl: [cal[1]] }) },
        { type: 'pic', name: 'mogor-carving', box: [62.8, 36.2, 93.2, 71], shape: 'rect', refine: false,
          alt: t('El laberint de Mogor gravat a la pedra', 'El laberinto de Mogor grabado en la piedra', 'The Mogor labyrinth carved in stone') },
        { type: 'pic', name: 'sun-dagger', box: [8.8, 57, 61.2, 96.5], shape: 'rect', refine: false,
          alt: t('La roca de Fajada Butte i dibuixos de la daga de llum que marca solsticis i equinoccis', 'La roca de Fajada Butte y dibujos de la daga de luz que marca solsticios y equinoccios', 'Fajada Butte and drawings of the dagger of light that marks the solstices and equinoxes') },
        { type: 'text', font: 'carlito', box: [62, 71.5, 96.5, 96], size: 2.05, text: html({ dl: [cal[2]] }) },
      ],
    },
    {
      id: 'IMG_1134',
      items: [
        { type: 'text', font: 'carlito', box: [6.5, 12, 97, 23], size: 2.1, text: html({ dl: [cal[2]] }) },
        { type: 'pic', name: 'mogor-azimuths', box: [7, 28.6, 46, 73], shape: 'rect', refine: false,
          alt: t('El laberint de Mogor amb les línies cap a la posta de sol (254° a 283°) i un mapa de situació', 'El laberinto de Mogor con las líneas hacia la puesta de sol (254° a 283°) y un mapa de situación', 'The Mogor labyrinth with lines towards the sunset (254° to 283°) and a location map') },
        { type: 'pic', name: 'mogor-shadow', box: [52.8, 29, 94.6, 73.2], shape: 'rect', refine: false,
          alt: t('Un pal clavat al centre d\'un gravat projecta la seva ombra sobre la roca', 'Un palo clavado en el centro de un grabado proyecta su sombra sobre la roca', 'A stick set in the centre of a carving casts its shadow across the rock') },
        { type: 'text', font: 'carlito', box: [5.5, 78, 95, 94], size: 2.1, text: html(B.p('calendaris', 1)) },
      ],
    },
    {
      id: 'IMG_1135',
      items: [
        { type: 'pic', name: 'man-in-the-maze', box: [3, 12, 34, 55.5], shape: 'free',
          alt: t('Fragment de ceràmica amb «l\'home en el laberint» dels indis papago', 'Fragmento de cerámica con «el hombre en el laberinto» de los indios pápago', 'Pottery sherd with the Papago “man in the maze”') },
        { type: 'text', font: 'carlito', box: [33, 13, 97, 48], size: 2.1,
          text: html({ rawp: (() => { const h = B.block('arizona-russia', 0).h, p = B.p('arizona-russia', 1); return { ca: `<b>${h.ca}</b>. ${p.ca}`, es: `<b>${h.es}</b>. ${p.es}`, en: `<b>${h.en}</b>. ${p.en}` }; })() }, B.p('arizona-russia', 2)) },
        { type: 'pic', name: 'babylon-kandalaksha', box: [27.6, 53.6, 63, 92], shape: 'rect', refine: false,
          alt: t('Un laberint de pedres entre l\'herba, al nord de Rússia', 'Un laberinto de piedras entre la hierba, en el norte de Rusia', 'A stone labyrinth in the grass in northern Russia') },
        { type: 'text', font: 'carlito', box: [64, 54, 98, 98], size: 2.0,
          text: html({ rawp: (() => { const h = B.block('arizona-russia', 3).h, p = B.p('arizona-russia', 4); return { ca: `<b>${h.ca}</b>. ${p.ca}`, es: `<b>${h.es}</b>. ${p.es}`, en: `<b>${h.en}</b>. ${p.en}` }; })() }) },
      ],
    },
    {
      id: 'IMG_1136',
      items: [
        ...fig('goa', [6.2, 12.5, 25.8, 42.3], [3, 43, 29, 48], gal[0]),
        ...fig('madavala-temple', [32.2, 12.7, 58.1, 36.3], [30, 37, 61, 44], gal[1]),
        ...fig('etruscan-jug', [62.6, 12.6, 88.4, 42], [59, 42.5, 92, 48], gal[2]),
        ...fig('pylos-tablet', [1.6, 54.6, 26, 78.7], [1, 80, 30, 89], gal[3]),
        ...fig('kom-ombo', [31.7, 50, 54.6, 77], [30, 77.4, 57, 82], gal[4]),
        ...fig('sardinia-tomb', [60, 54.6, 90.6, 79.3], [58, 80, 93, 89], gal[5]),
      ],
    },
    {
      id: 'IMG_1137',
      items: [
        ...fig('knossos-coins', [2, 11, 28, 40.5], [1, 41.5, 30, 47], gal[6]),
        ...fig('padugula-dolmen', [36.5, 12, 49.5, 39.5], [31, 41.5, 55, 47], gal[7]),
        ...fig('valcamonica', [57, 10.2, 94.4, 39.5], [56, 41.5, 96, 45], gal[8]),
        ...fig('armenian-bible', [2.5, 53.5, 27.5, 79], [1, 81.5, 31, 89], gal[9], { blend: 'multiply' }),
        ...fig('narmada', [33.4, 49.3, 51.2, 86.5], [30, 87.4, 55, 91], gal[10]),
        ...fig('rocky-valley', [56, 53.3, 94.2, 81], [54, 82, 97, 86.5], gal[11]),
      ],
    },
    {
      id: 'IMG_1138',
      items: [
        ...fig('hopi-petroglyph', [2.5, 9.5, 25, 37.5], [1, 39.5, 28, 47], gal[12]),
        ...fig('makholmen', [30.8, 9.8, 56.5, 37.5], [30, 39.5, 57, 43.5], gal[13]),
        ...fig('pompeii-graffito', [60.8, 8.6, 96, 37.6], [58, 39.5, 98, 47], gal[14]),
        ...fig('hern-st-hubert', [0.4, 56.4, 30, 82.8], [0, 84, 32, 88], gal[15]),
        ...fig('lye-runestone', [33.8, 51.8, 57.5, 82.5], [30, 84, 62, 88], gal[16]),
        ...fig('zayatsky-labyrinths', [61.8, 54.8, 96.6, 83], [60, 84, 98, 88], gal[17]),
      ],
    },
  ],
};
