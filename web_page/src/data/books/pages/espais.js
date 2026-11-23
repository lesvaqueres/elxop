// Espais de El Xop — recreated pages. Source photos: books/Espais De El Xop (IMG_1158–IMG_1166)
const { t, from, html } = require('./_helpers.js');
const B = from('espais');

// each photo page: a photo and a handwritten caption running up the left margin
const photoPage = (id, name, box, capBox, cap, alt) => ({
  id,
  items: [
    { type: 'pic', name, box, shape: 'rect', refine: false, alt },
    { type: 'vlabel', font: 'courgette', box: capBox, size: 3.6, text: cap },
  ],
});

module.exports = {
  slug: 'espais-de-el-xop',
  orient: 'landscape',
  source: 'books/Espais De El Xop',
  pages: [
    {
      id: 'IMG_1158',
      items: [
        { type: 'title', font: 'courgette', box: [6, 12, 90, 30], size: 7.2, align: 'left', text: t('Espais de El Xop', 'Espacios de El Xop', 'The spaces of El Xop') },
        { type: 'pic', name: 'site-plan', box: [2, 37.5, 95, 91], shape: 'rect', refine: false,
          alt: t("Plànol dibuixat a mà de tots els espais de El Xop", 'Plano dibujado a mano de todos los espacios de El Xop', 'Hand-drawn plan of all the spaces of El Xop') },
      ],
    },
    photoPage('IMG_1159', 'sky-viewpoint', [14.2, 4.9, 93.5, 95.1], [3, 8, 12, 92],
      t('-mirador del cel-', '-mirador del cielo-', '-the sky viewpoint-'),
      t('El mirador del cel, amb el terra de mosaic', 'El mirador del cielo, con el suelo de mosaico', 'The sky viewpoint and its mosaic floor')),
    photoPage('IMG_1160', 'mother-earth-labyrinth', [19.4, 5.1, 99.8, 95.8], [8, 8, 17.5, 92],
      t('-laberint “mare terra”-', '-laberinto «madre tierra»-', '-“mother earth” labyrinth-'),
      t('El laberint de set cercles fet amb còdols, sota una estructura de ferro', 'El laberinto de siete círculos hecho con cantos rodados, bajo una estructura de hierro', 'The seven-circuit labyrinth laid in river stones, under an iron frame')),
    photoPage('IMG_1161', 'water-curtain', [9.7, 9.1, 99.8, 93.3], [1.5, 6, 9.2, 96],
      t("-Cortina d'aigua “arc de Sant Martí”-", '-Cortina de agua «arco iris»-', '-Water curtain “rainbow”-'),
      t("La cortina d'aigua entre els salzes, amb un arc de Sant Martí", 'La cortina de agua entre los sauces, con un arco iris', 'The water curtain among the willows, with a rainbow')),
    photoPage('IMG_1162', 'tools-museum', [20.4, 9.1, 96.7, 94.5], [9, 6, 18.5, 94],
      t('-Eines de les vaqueres-', '-Herramientas de Les Vaqueres-', '-Tools of Les Vaqueres-'),
      t("El museu d'eines antigues del camp", 'El museo de herramientas antiguas del campo', 'The museum of old farm tools')),
    photoPage('IMG_1163', 'herb-garden-gate', [11.5, 8.1, 96.7, 99.8], [2, 8, 10.6, 92],
      t("-Racó d'herbes-", '-Rincón de hierbas-', '-Racó d’herbes (herb corner)-'),
      t("La porta de ferro forjat del jardí d'herbes", 'La puerta de hierro forjado del jardín de hierbas', 'The wrought-iron gate into the herb garden')),
    photoPage('IMG_1164', 'path-of-life-labyrinth', [11.1, 5.4, 97.3, 94.4], [1.5, 6, 10.2, 94],
      t('-Laberint “el camí de la vida”-', '-Laberinto «el camino de la vida»-', '-Labyrinth “the path of life”-'),
      t('Els camins de còdols del laberint sota els plataners', 'Los caminos de cantos rodados del laberinto bajo los plátanos', 'The labyrinth’s stone paths beneath the plane trees')),
    photoPage('IMG_1165', 'scent-point', [17.5, 8.1, 93.9, 96.7], [5.5, 8, 16.6, 96],
      t("-Punt d'aromes-", '-Punto de aromas-', '-Scent point-'),
      t("La caseta del punt d'aromes, amb el seu pou", 'La caseta del punto de aromas, con su pozo', 'The little scent-point building with its well')),
    {
      id: 'IMG_1166',
      items: [
        { type: 'text', font: 'courgette', box: [5, 10, 45, 94], size: 2.32,
          text: html(
            { rawp: t(
              '<b class="fb-big">El xop</b> <i>(populus nigra)</i> és un arbre <b>indicador de l\'existència d\'aigua</b> i la seva altura ens l\'anuncia des de lluny.',
              '<b class="fb-big">El chopo</b> <i>(populus nigra)</i> es un árbol <b>que indica la existencia de agua</b>, y su altura nos la anuncia desde lejos.',
              '<b class="fb-big">The black poplar</b> <i>(populus nigra)</i> is a tree <b>that signals water nearby</b>, and its height announces it from far away.') },
            B.p('xop', 2),
            { rawp: t(
              'A més aquest xop no és un xop més, és un arbre monumental, és el <b>segon xop més gran de Catalunya</b> que té al seu voltant un ecosistema propi, amb una flora i una fauna concreta i diferent.',
              'Además, este chopo no es uno más: es un árbol monumental, el <b>segundo chopo más grande de Cataluña</b>, y tiene a su alrededor un ecosistema propio, con una flora y una fauna concretas y diferentes.',
              'And this is no ordinary poplar: it is a monumental tree, the <b>second-largest black poplar in Catalonia</b>, with its own ecosystem around it, a particular flora and fauna of its own.') }
          ) },
        { type: 'pic', name: 'black-poplar', box: [47.5, 2.4, 93.6, 98], shape: 'rect', refine: false,
          alt: t('El gran xop de El Xop', 'El gran chopo de El Xop', 'The great black poplar of El Xop') },
      ],
    },
  ],
};
