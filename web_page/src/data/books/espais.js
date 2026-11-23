// Espais de El Xop — source folder: ../books/Espais De El Xop (IMG_1158–IMG_1166)
const t = (ca, es, en) => ({ ca, es, en });

module.exports = {
  slug: 'espais-de-el-xop',
  order: 1,
  color: 'var(--olive)',
  cover: 'photos/espais-mapa.webp',
  title: t('Espais de El Xop', 'Espacios de El Xop', 'The spaces of El Xop'),
  kicker: t('Àlbum de fotografies', 'Álbum de fotografías', 'Photo album'),
  summary: t(
    "Un plànol dibuixat a mà de tota la finca i un recorregut fotogràfic pels seus racons, fins arribar al gran xop que li dóna nom.",
    "Un plano dibujado a mano de toda la finca y un recorrido fotográfico por sus rincones, hasta llegar al gran chopo que le da nombre.",
    "A hand-drawn plan of the whole estate and a photographic walk through its corners, ending at the great black poplar that gives it its name."
  ),
  source: { folder: 'Espais De El Xop', pages: 9 },
  sections: [
    {
      id: 'plano',
      title: t('El plànol', 'El plano', 'The plan'),
      pages: ['img-1158'],
      blocks: [
        { fig: 'photos/espais-mapa.webp', cap: t("Plànol dibuixat a mà dels espais de El Xop.", "Plano dibujado a mano de los espacios de El Xop.", "Hand-drawn plan of the spaces of El Xop.") },
        { p: t(
          "La portada de l'àlbum és un plànol acolorit de tota la finca, entre el Camí de les Vaqueres i el Camí de Grenyana, a 3 km de Lleida i a 5 km d'Alcoletge. Hi apareixen aquests espais:",
          "La portada del álbum es un plano coloreado de toda la finca, entre el Camí de les Vaqueres y el Camí de Grenyana, a 3 km de Lleida y a 5 km de Alcoletge. Aparecen estos espacios:",
          "The album's cover is a coloured plan of the whole estate, between the Camí de les Vaqueres and the Camí de Grenyana roads, 3 km from Lleida and 5 km from Alcoletge. These spaces are marked on it:"
        ) },
        { ul: [
          t("Mirador «Mosaic del cel»", "Mirador «Mosaico del cielo»", "Viewpoint “Mosaic of the sky”"),
          t("Museu «Eines de les Vaqueres»", "Museo «Herramientas de Les Vaqueres»", "Museum “Tools of Les Vaqueres”"),
          t("Laberint «Mare Terra»", "Laberinto «Madre Tierra»", "“Mother Earth” labyrinth"),
          t("Passeig dels plataners", "Paseo de los plátanos", "Plane-tree walk"),
          t("Jardí «Racó d'herbes»", "Jardín «Racó d'herbes» (rincón de hierbas)", "“Racó d'herbes” herb garden"),
          t("Punt d'aromes", "Punto de aromas", "Scent point"),
          t("Hort dels sentits i hort tradicional", "Huerto de los sentidos y huerto tradicional", "Garden of the senses and traditional vegetable garden"),
          t("Aula de natura", "Aula de naturaleza", "Nature classroom"),
          t("El xop", "El chopo", "The black poplar"),
          t("Galliner, porxo i camp de trèvol", "Gallinero, porche y campo de trébol", "Hen house, porch and clover field"),
          t("Camp de caragols, camp de les pruneres i passeig dels noguers", "Campo de caracoles, campo de los ciruelos y paseo de los nogales", "Snail field, plum orchard and walnut walk"),
          t("Parc infantil, la Torre, la casa i l'aparcament", "Parque infantil, la Torre, la casa y el aparcamiento", "Playground, the Torre, the house and the car park"),
        ] },
      ],
    },
    {
      id: 'mirador',
      title: t('Mirador del cel', 'Mirador del cielo', 'Sky viewpoint'),
      pages: ['img-1159'],
      blocks: [
        { fig: 'photos/espais-mirador.webp', cap: t("El mirador del cel, amb el seu terra de mosaic.", "El mirador del cielo, con su suelo de mosaico.", "The sky viewpoint and its mosaic floor.") },
        { more: 'el-mirador-del-cel', label: t("Llegeix el llibre del mirador", "Lee el libro del mirador", "Read the viewpoint book") },
      ],
    },
    {
      id: 'mare-terra',
      title: t('Laberint «Mare Terra»', 'Laberinto «Madre Tierra»', '“Mother Earth” labyrinth'),
      pages: ['img-1160'],
      blocks: [
        { fig: 'photos/espais-mare-terra.webp', cap: t("El laberint de set cercles, fet amb còdols.", "El laberinto de siete círculos, hecho con cantos rodados.", "The seven-circuit labyrinth, laid out in river stones.") },
        { more: 'la-mare-terra', label: t("Llegeix el llibre dels laberints", "Lee el libro de los laberintos", "Read the labyrinth book") },
      ],
    },
    {
      id: 'cortina',
      title: t("Cortina d'aigua «Arc de Sant Martí»", "Cortina de agua «Arco iris»", "Water curtain “Rainbow”"),
      pages: ['img-1161'],
      blocks: [
        { fig: 'photos/espais-cortina.webp', cap: t("La cortina d'aigua entre els salzes.", "La cortina de agua entre los sauces.", "The water curtain among the willows.") },
      ],
    },
    {
      id: 'eines',
      title: t('Eines de les Vaqueres', 'Herramientas de Les Vaqueres', 'Tools of Les Vaqueres'),
      pages: ['img-1162'],
      blocks: [
        { fig: 'photos/espais-eines.webp', cap: t("El museu d'eines antigues del camp.", "El museo de herramientas antiguas del campo.", "The museum of old farm tools.") },
      ],
    },
    {
      id: 'raco',
      title: t("Racó d'herbes", "Racó d'herbes", "Racó d'herbes"),
      pages: ['img-1163'],
      blocks: [
        { fig: 'photos/espais-raco.webp', cap: t("La porta de ferro forjat del jardí d'herbes.", "La puerta de hierro forjado del jardín de hierbas.", "The wrought-iron gate into the herb garden.") },
      ],
    },
    {
      id: 'cami-vida',
      title: t("Laberint «El camí de la vida»", "Laberinto «El camino de la vida»", "Labyrinth “The path of life”"),
      pages: ['img-1164'],
      blocks: [
        { fig: 'photos/espais-cami-vida.webp', cap: t("Els camins de còdols sota els plataners.", "Los caminos de cantos rodados bajo los plátanos.", "Stone-edged paths beneath the plane trees.") },
        { more: 'el-passeig-dels-plataners', label: t("Llegeix el llibre del passeig", "Lee el libro del paseo", "Read the plane-tree walk book") },
      ],
    },
    {
      id: 'aromes',
      title: t("Punt d'aromes", "Punto de aromas", "Scent point"),
      pages: ['img-1165'],
      blocks: [
        { fig: 'photos/espais-aromes.webp', cap: t("El punt d'aromes.", "El punto de aromas.", "The scent point.") },
      ],
    },
    {
      id: 'xop',
      title: t('El xop', 'El chopo', 'The black poplar'),
      pages: ['img-1166'],
      blocks: [
        { fig: 'photos/espais-xop.webp', cap: t("El xop, un arbre monumental.", "El chopo, un árbol monumental.", "The black poplar, a monumental tree."), tall: true },
        { p: t(
          "El xop (<i>Populus nigra</i>) és un arbre indicador de l'existència d'aigua i la seva altura ens l'anuncia des de lluny.",
          "El chopo negro (<i>Populus nigra</i>) es un árbol que indica la existencia de agua, y su altura nos la anuncia desde lejos.",
          "The black poplar (<i>Populus nigra</i>) is a tree that signals water nearby, and its height announces it from far away."
        ) },
        { p: t(
          "El nostre xop està situat a la vora d'un braçal, en un indret on conflueixen les finques de quatre propietaris; aquest fet propicia que sigui un lloc de trobada entre aquests propietaris a l'hora de regar. Per altra banda, els braçals i les sèquies són la base de l'existència de l'Horta, aquesta Horta on nosaltres ens trobem i que tant reivindiquem.",
          "Nuestro chopo está a la orilla de una acequia secundaria, en un punto donde confluyen las fincas de cuatro propietarios; por eso es un lugar de encuentro entre ellos a la hora de regar. Además, las acequias son la base de la existencia de la Huerta, esta Huerta en la que nos encontramos y que tanto reivindicamos.",
          "Our poplar stands beside an irrigation channel, at the point where four owners' fields meet, which makes it a meeting place for them when it is time to water. Channels and ditches are, after all, what the Horta exists on: the irrigated farmland where we are, and which we stand up for."
        ) },
        { p: t(
          "A més, aquest xop no és un xop més: és un arbre monumental, el segon xop més gran de Catalunya, que té al seu voltant un ecosistema propi, amb una flora i una fauna concretes i diferents.",
          "Además, este chopo no es uno más: es un árbol monumental, el segundo chopo más grande de Cataluña, y tiene a su alrededor un ecosistema propio, con una flora y una fauna concretas y diferentes.",
          "And this is no ordinary poplar: it is a monumental tree, the second-largest black poplar in Catalonia, with its own ecosystem around it, a particular flora and fauna of its own."
        ) },
      ],
    },
  ],
};
