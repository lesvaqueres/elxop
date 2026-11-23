// El Mirador del Cel — source folder: ../books/EL MIRADOR DEL CEL (IMG_1110–IMG_1119)
const t = (ca, es, en) => ({ ca, es, en });

module.exports = {
  slug: 'el-mirador-del-cel',
  order: 2,
  color: 'var(--sky)',
  cover: 'photos/mirador-cover.webp',
  title: t('El Mirador del Cel', 'El Mirador del Cielo', 'The Sky Viewpoint'),
  kicker: t('Astronomia als peus', 'Astronomía a los pies', 'Astronomy underfoot'),
  summary: t(
    "Un terra de mosaic per llegir el cel: constel·lacions, la sortida del sol als solsticis, l'arc de Sant Martí, la Via Làctia, els vents i les fases de la lluna.",
    "Un suelo de mosaico para leer el cielo: constelaciones, la salida del sol en los solsticios, el arco iris, la Vía Láctea, los vientos y las fases de la luna.",
    "A mosaic floor for reading the sky: constellations, sunrise at the solstices, the rainbow, the Milky Way, the winds and the phases of the moon."
  ),
  source: { folder: 'EL MIRADOR DEL CEL', pages: 10 },
  sections: [
    {
      id: 'mirador',
      title: t('El mirador', 'El mirador', 'The viewpoint'),
      pages: ['img-1110'],
      blocks: [
        { fig: 'photos/mirador-cover.webp', cap: t("El mirador: un terra de mosaic amb cercles de colors i punts d'estrelles.", "El mirador: un suelo de mosaico con círculos de colores y puntos de estrellas.", "The viewpoint: a mosaic floor of coloured circles and star points.") },
        { p: t(
          "El mirador és una terrassa amb el terra fet de mosaic. Cada dibuix del terra explica alguna cosa del cel que tenim al damunt. Aquest llibre recorre els dibuixos un per un.",
          "El mirador es una terraza con el suelo de mosaico. Cada dibujo del suelo explica algo del cielo que tenemos encima. Este libro recorre los dibujos uno a uno.",
          "The viewpoint is a terrace with a mosaic floor. Each picture set into the floor explains something about the sky above it. This book walks through them one by one."
        ) },
      ],
    },
    {
      id: 'constellacions',
      title: t("Constel·lacions de tot l'any", 'Constelaciones de todo el año', 'Constellations all year round'),
      pages: ['img-1111'],
      blocks: [
        { p: t(
          "Al mosaic hi ha les constel·lacions que es veuen tot l'any des d'aquí, les que giren al voltant del pol nord del cel i no es ponen mai:",
          "En el mosaico están las constelaciones que se ven todo el año desde aquí, las que giran alrededor del polo norte celeste y nunca se ponen:",
          "The mosaic shows the constellations visible from here all year round, the ones that circle the north celestial pole and never set:"
        ) },
        { ul: [
          t('Cefeu', 'Cefeo', 'Cepheus'),
          t('Cassiopea', 'Casiopea', 'Cassiopeia'),
          t('El Drac', 'El Dragón', 'Draco, the Dragon'),
          t('Óssa Menor', 'Osa Menor', 'Ursa Minor, the Little Bear'),
          t('Óssa Major', 'Osa Mayor', 'Ursa Major, the Great Bear'),
        ] },
        { p: t(
          "Una fletxa assenyala l'estrella Polar, a la punta de l'Óssa Menor: indica el nord.",
          "Una flecha señala la estrella Polar, en la punta de la Osa Menor: indica el norte.",
          "An arrow points to the Pole Star at the tip of the Little Bear: it shows you where north is."
        ) },
      ],
    },
    {
      id: 'punt-de-mira',
      title: t('Punt de mira', 'Punto de mira', 'Sighting point'),
      pages: ['img-1112'],
      blocks: [
        { fig: 'photos/mirador-punt.webp', cap: t("Hélène mira la sortida del sol.", "Hélène mira la salida del sol.", "Hélène watches the sun rise.") },
        { p: t(
          "Des del punt de mira, uns tubs fixos a la barana assenyalen tres direccions de l'horitzó: per on surt el sol el dia del solstici d'estiu, el dia de l'equinocci i el dia del solstici d'hivern. Si hi mires el dia just, veuràs el sol al fons del tub.",
          "Desde el punto de mira, unos tubos fijos en la barandilla señalan tres direcciones del horizonte: por dónde sale el sol el día del solsticio de verano, el del equinoccio y el del solsticio de invierno. Si miras el día exacto, verás el sol al fondo del tubo.",
          "From the sighting point, tubes fixed to the railing aim at three places on the horizon: where the sun rises on the summer solstice, on the equinox and on the winter solstice. Look through on the right day and the sun sits at the end of the tube."
        ) },
        { terms: [
          [t("Solstici d'estiu", 'Solsticio de verano', 'Summer solstice'), t("el sol surt més al nord-est", "el sol sale más al nordeste", "the sun rises furthest north-east")],
          [t('Equinocci', 'Equinoccio', 'Equinox'), t("el sol surt just per l'est", "el sol sale justo por el este", "the sun rises due east")],
          [t("Solstici d'hivern", 'Solsticio de invierno', 'Winter solstice'), t("el sol surt més al sud-est", "el sol sale más al sudeste", "the sun rises furthest south-east")],
        ] },
        { note: t(
          "Les tres direccions surten a les fotografies del llibre; l'explicació és un resum del que mostren.",
          "Las tres direcciones aparecen en las fotografías del libro; la explicación es un resumen de lo que muestran.",
          "The three directions are labelled in the book's photographs; the explanation above summarises what they show."
        ) },
      ],
    },
    {
      id: 'arc',
      title: t("L'arc de Sant Martí", 'El arco iris', 'The rainbow'),
      pages: ['img-1113'],
      blocks: [
        { p: t(
          "L'arc de Sant Martí és la reflexió de la llum del sol sobre gotes d'aigua. El sol ha de ser a l'esquena i la pluja al davant.",
          "El arco iris es la reflexión de la luz del sol sobre gotas de agua. El sol debe estar a la espalda y la lluvia delante.",
          "A rainbow is sunlight reflected by drops of water. The sun has to be behind you and the rain in front."
        ) },
        { p: t(
          "Al mosaic hi ha un cercle de colors on et pots posar dret: tu pots marcar l'hora.",
          "En el mosaico hay un círculo de colores donde te puedes poner de pie: tú puedes marcar la hora.",
          "There is a coloured circle in the mosaic you can stand in: you can tell the time."
        ) },
        { p: t(
          "El llibre també mostra arcs de colors que es veuen des de l'avió o des de la muntanya, quan l'ombra cau sobre els núvols: allà l'arc es tanca i es fa un cercle sencer.",
          "El libro también muestra arcos de colores que se ven desde el avión o desde la montaña, cuando la sombra cae sobre las nubes: allí el arco se cierra y forma un círculo entero.",
          "The book also shows rings of colour seen from a plane or a mountain top, when your shadow falls on the clouds: there the arc closes into a full circle."
        ) },
      ],
    },
    {
      id: 'cortina',
      title: t("Cortina d'aigua", 'Cortina de agua', 'The water curtain'),
      pages: ['img-1114'],
      blocks: [
        { fig: 'photos/mirador-cortina.webp', cap: t("La cortina d'aigua amb l'arc de Sant Martí.", "La cortina de agua con el arco iris.", "The water curtain with its rainbow.") },
        { p: t(
          "La cortina d'aigua està situada a la zona de les tirolines, al final de la baixada.",
          "La cortina de agua está en la zona de las tirolinas, al final de la bajada.",
          "The water curtain is in the zip-line area, at the bottom of the slope."
        ) },
        { p: t(
          "Aquesta cortina d'aigua complementa el mirador i et demostra que l'arc de Sant Martí no és un arc sinó un cercle. Tu mateix ho pots comprovar.",
          "Esta cortina de agua complementa el mirador y te demuestra que el arco iris no es un arco sino un círculo. Tú mismo lo puedes comprobar.",
          "It completes the viewpoint and proves that a rainbow is not an arc but a circle. You can check it for yourself."
        ) },
        { p: t(
          "Sempre s'ha de triar un dia assolellat.",
          "Siempre hay que escoger un día soleado.",
          "Always choose a sunny day."
        ) },
        { ul: [
          t("Si et poses davant de la cortina d'aigua al matí, tindràs davant teu un arc de Sant Martí.", "Si te pones delante de la cortina de agua por la mañana, tendrás un arco iris delante.", "Stand in front of the water curtain in the morning and you will have a rainbow in front of you."),
          t("Si durant la tarda baixes per les tirolines, davant teu hi tindràs un arc de Sant Martí.", "Si por la tarde bajas por las tirolinas, tendrás un arco iris delante.", "Come down the zip line in the afternoon and there will be a rainbow ahead of you."),
          t("Però si et poses sota la cortina d'aigua al migdia, quan el sol està damunt teu, tindràs un arc de Sant Martí que, en forma de cercle, es dibuixarà als teus peus i es mourà i ballarà amb tu, i només amb tu.", "Pero si te pones bajo la cortina de agua a mediodía, cuando el sol está encima de ti, tendrás un arco iris que, en forma de círculo, se dibujará a tus pies y se moverá y bailará contigo, y solo contigo.", "But stand under the curtain at midday, with the sun right above you, and the rainbow becomes a circle drawn at your feet that moves and dances with you, and only with you."),
        ] },
        { p: t(
          "És molt interessant de veure que cada persona té el seu.",
          "Es muy interesante ver que cada persona tiene el suyo.",
          "It is fascinating to see that every person has their own."
        ) },
      ],
    },
    {
      id: 'via-lactia',
      title: t('La Via Làctia', 'La Vía Láctea', 'The Milky Way'),
      pages: ['img-1115'],
      blocks: [
        { p: t(
          "Un mosaic en espiral representa la nostra galàxia. El llibre ens situa pas a pas, de més a prop a més lluny:",
          "Un mosaico en espiral representa nuestra galaxia. El libro nos sitúa paso a paso, de más cerca a más lejos:",
          "A spiral mosaic shows our galaxy. The book places us step by step, from near to far:"
        ) },
        { ul: [
          t('La Terra', 'La Tierra', 'The Earth'),
          t('El nostre sistema solar', 'Nuestro sistema solar', 'Our solar system'),
          t("El braç d'Orió, on es troba el sistema solar", "El brazo de Orión, donde está el sistema solar", "The Orion Arm, where the solar system sits"),
          t('La Via Làctia, la nostra galàxia', 'La Vía Láctea, nuestra galaxia', 'The Milky Way, our galaxy'),
          t('Milers de galàxies', 'Miles de galaxias', 'Thousands of galaxies'),
          t("L'Univers", 'El Universo', 'The Universe'),
        ] },
      ],
    },
    {
      id: 'rosa-dels-vents',
      title: t('La rosa dels vents', 'La rosa de los vientos', 'The compass rose'),
      pages: ['img-1116'],
      blocks: [
        { p: t(
          "Una estrella de vuit puntes al terra dóna nom als vuit vents tradicionals:",
          "Una estrella de ocho puntas en el suelo da nombre a los ocho vientos tradicionales:",
          "An eight-pointed star in the floor names the eight traditional winds:"
        ) },
        { terms: [
          [t('Tramuntana', 'Tramontana', 'Tramuntana'), t('nord', 'norte', 'north')],
          [t('Gregal', 'Gregal', 'Gregal'), t('nord-est', 'nordeste', 'north-east')],
          [t('Llevant', 'Levante', 'Llevant'), t('est', 'este', 'east')],
          [t('Xaloc', 'Siroco', 'Xaloc'), t('sud-est', 'sudeste', 'south-east')],
          [t('Migjorn', 'Mediodía', 'Migjorn'), t('sud', 'sur', 'south')],
          [t('Garbí', 'Lebeche', 'Garbí'), t('sud-oest', 'sudoeste', 'south-west')],
          [t('Ponent', 'Poniente', 'Ponent'), t('oest', 'oeste', 'west')],
          [t('Mestral', 'Mistral', 'Mestral'), t('nord-oest', 'noroeste', 'north-west')],
        ] },
      ],
    },
    {
      id: 'vent',
      title: t('Els moviments del vent', 'Los movimientos del viento', 'How the wind moves'),
      pages: ['img-1117'],
      blocks: [
        { p: t(
          "Una espiral de pedres recorda que el vent gira. El llibre ho il·lustra amb quatre exemples:",
          "Una espiral de piedras recuerda que el viento gira. El libro lo ilustra con cuatro ejemplos:",
          "A spiral of stones reminds us that wind turns. The book illustrates it with four examples:"
        ) },
        { ul: [
          t('Cicló i anticicló', 'Ciclón y anticiclón', 'Cyclone and anticyclone'),
          t('Cap de fibló (remolí d\'aigua)', 'Tromba marina', 'Waterspout'),
          t('Huracà', 'Huracán', 'Hurricane'),
          t('Migracions dels moixons, que pugen en espiral aprofitant l\'aire calent', 'Migraciones de los pájaros, que suben en espiral aprovechando el aire caliente', 'Bird migrations, rising in spirals on warm air'),
        ] },
      ],
    },
    {
      id: 'lluna',
      title: t('Fases de la lluna', 'Fases de la luna', 'Phases of the moon'),
      pages: ['img-1118', 'img-1119'],
      blocks: [
        { p: t(
          "Una filera de llunes de mosaic va de la Terra al Sol i mostra com canvia la part il·luminada de la lluna.",
          "Una fila de lunas de mosaico va de la Tierra al Sol y muestra cómo cambia la parte iluminada de la luna.",
          "A row of mosaic moons runs from the Earth to the Sun, showing how the lit part of the moon changes."
        ) },
        { verse: t(
          "Quart creixent, corns a l'orient.\nQuart minvant, corns endavant.",
          "Cuarto creciente, cuernos a oriente.\nCuarto menguante, cuernos hacia delante.",
          "Waxing quarter, horns to the east.\nWaning quarter, horns ahead."
        ), cite: t('Dita popular', 'Dicho popular', 'Catalan saying') },
        { terms: [
          [t('Quart creixent', 'Cuarto creciente', 'First quarter'), t('La lluna creix quan la veiem a la tarda.', 'La luna crece cuando la vemos por la tarde.', 'The moon is growing when we see it in the afternoon.')],
          [t('Quart minvant', 'Cuarto menguante', 'Last quarter'), t('La lluna minva quan la veiem al matí.', 'La luna mengua cuando la vemos por la mañana.', 'The moon is shrinking when we see it in the morning.')],
          [t('Lluna plena', 'Luna llena', 'Full moon'), t("Surt per l'est. Quan fa el ple, surt abans que el sol es pongui.", 'Sale por el este. Cuando es llena, sale antes de que se ponga el sol.', 'It rises in the east. When it is full, it rises before the sun has set.')],
        ] },
      ],
    },
  ],
};
