// El Camí de Sant Jaume, el Joc de l'Horta i el Joc de l'Oca
// Source folder: ../books/Laberint Dels Símbols (IMG_1139–IMG_1153)
const t = (ca, es, en) => ({ ca, es, en });

module.exports = {
  slug: 'el-cami-de-sant-jaume',
  order: 5,
  color: 'var(--clay)',
  cover: 'photos/horta-joc.webp',
  title: t('El Camí de Sant Jaume', 'El Camino de Santiago', 'The Way of St James'),
  kicker: t("De Grenyana a Butsènit, i el Joc de l'Oca", "De Grenyana a Butsènit, y el Juego de la Oca", "From Grenyana to Butsènit, and the Game of the Goose"),
  summary: t(
    "El Xop és en ple Camí de Sant Jaume. Un itinerari a peu entre dues ermites, la llegenda dels fanalets de Lleida, el Joc de l'Horta i el misteri del Joc de l'Oca.",
    "El Xop está en pleno Camino de Santiago. Un itinerario a pie entre dos ermitas, la leyenda de los farolillos de Lleida, el Juego de la Huerta y el misterio del Juego de la Oca.",
    "El Xop lies right on the Way of St James. A walk between two hermitages, the legend of Lleida's lanterns, the Horta board game and the mystery of the Game of the Goose."
  ),
  source: { folder: 'Laberint Dels Símbols', pages: 15 },
  sections: [
    {
      id: 'cami',
      title: t('De Grenyana a Butsènit', 'De Grenyana a Butsènit', 'From Grenyana to Butsènit'),
      pages: ['img-1139'],
      blocks: [
        { p: t(
          "El tram del Camí de Sant Jaume que proposa el llibre va de l'Ermita de Grenyana, al nord de Lleida, a l'Ermita de Butsènit, al sud. El mapa hi marca la Font Pixada, El Xop, el Parc Municipal de la Mitjana, la ciutat de Lleida, el Molí de Cervià i els Aiguamolls de Rufea.",
          "El tramo del Camino de Santiago que propone el libro va de la Ermita de Grenyana, al norte de Lleida, a la Ermita de Butsènit, al sur. El mapa marca la Font Pixada, El Xop, el Parque Municipal de La Mitjana, la ciudad de Lleida, el Molí de Cervià y las Aiguamolls de Rufea.",
          "The stretch of the Way of St James in this book runs from the Grenyana hermitage, north of Lleida, to the Butsènit hermitage, south of it. The map marks the Font Pixada spring, El Xop, La Mitjana park, the city of Lleida, the Cervià mill and the Rufea wetlands."
        ) },
        { quote: t(
          "Camina, caminaràs, som al cor de la planura, no hi ha d'a prop cap altura ni fondal que ens trenqui el pas.",
          "Camina, caminarás, estamos en el corazón de la llanura, no hay cerca ninguna altura ni hondonada que nos corte el paso.",
          "Walk, you will walk, we are at the heart of the plain; no height or hollow nearby will break our stride."
        ), cite: t('Màrius Torres', 'Màrius Torres', 'Màrius Torres') },
      ],
    },
    {
      id: 'fanalets',
      title: t('Els fanalets de Sant Jaume a Lleida', 'Los farolillos de Santiago en Lleida', "St James's lanterns in Lleida"),
      pages: ['img-1140'],
      blocks: [
        { p: t(
          "Segons la llegenda, l'apòstol Sant Jaume anava peregrinant i, en arribar a Lleida, va trepitjar una bardissa i se li va clavar una punxa al peu que li impedia caminar. Amb la foscor no se la podia treure i els àngels, en sentir-ne les queixes, van baixar del cel amb fanalets de llum per il·luminar-lo. Així va poder continuar el seu pelegrinatge.",
          "Según la leyenda, el apóstol Santiago iba peregrinando y, al llegar a Lleida, pisó una zarza y se le clavó una espina en el pie que le impedía caminar. A oscuras no se la podía sacar y los ángeles, al oír sus quejas, bajaron del cielo con farolillos para iluminarlo. Así pudo seguir su peregrinación.",
          "Legend has it that St James the Apostle, on pilgrimage, reached Lleida and stepped on a bramble; a thorn stuck in his foot and he could not walk. In the dark he could not pull it out, and the angels, hearing his complaints, came down from heaven with little lanterns to give him light. So he could carry on."
        ) },
        { p: t(
          "Des de llavors, cada vigília de Sant Jaume (el 24 de juliol a la nit) es fa una processó on tots els nens i nenes, acompanyant la imatge del sant, porten fanalets i canten aquesta cançó, adaptació d'una versió antiga:",
          "Desde entonces, cada víspera de Santiago (el 24 de julio por la noche) se hace una procesión en la que niños y niñas, acompañando la imagen del santo, llevan farolillos y cantan esta canción, adaptación de una versión antigua:",
          "Ever since, on the eve of St James (the night of 24 July), there is a procession in which children walk with the saint's statue carrying lanterns and singing this song, adapted from an older one:"
        ) },
        { verse: t(
          "Sant Jaume ve de Galícia,\nSant Jaume ve d'Aragó,\na les nenes xocolata\ni als nens un bon cop de bastó.",
          "Santiago viene de Galicia,\nSantiago viene de Aragón,\na las niñas chocolate\ny a los niños un buen bastonazo.",
          "St James comes from Galicia,\nSt James comes from Aragon,\nchocolate for the girls\nand a good whack of the stick for the boys."
        ), cite: t('Cançó popular (en català a l\'original)', 'Canción popular (en catalán en el original)', 'Folk song (in Catalan in the original)') },
        { note: t(
          "La pàgina original inclou la partitura de «Els fanalets de Sant Jaume».",
          "La página original incluye la partitura de «Els fanalets de Sant Jaume».",
          "The original page includes the sheet music for “Els fanalets de Sant Jaume”."
        ) },
      ],
    },
    {
      id: 'recorregut',
      title: t('Cinc cèntims del recorregut', 'Apuntes del recorrido', 'About the route'),
      pages: ['img-1141'],
      blocks: [
        { p: t(
          "El tram que et proposem va de l'Ermita de Grenyana a l'Ermita de Butsènit, seguint el riu Segre. Quan arribes a Lleida, el camí està senyalitzat i passa per la Capella del Peu del Romeu, al Carrer Major, on hi ha la imatge de Sant Jaume traient-se la punxa del peu. Si no vols passar pel mig de la ciutat, pots seguir per la canalització del riu o pel carrer de la vora.",
          "El tramo que te proponemos va de la Ermita de Grenyana a la de Butsènit, siguiendo el río Segre. Al llegar a Lleida, el camino está señalizado y pasa por la Capella del Peu del Romeu, en la calle Mayor, donde está la imagen de Santiago sacándose la espina del pie. Si no quieres cruzar el centro de la ciudad, puedes seguir por la canalización del río o por la calle de la orilla.",
          "The route runs from the Grenyana hermitage to the Butsènit hermitage, following the river Segre. In Lleida the way is signposted and passes the Capella del Peu del Romeu on Carrer Major, with its statue of St James pulling the thorn from his foot. If you'd rather not cross the city centre, follow the river channel or the riverside street."
        ) },
        { p: t(
          "El Xop està situat en ple Camí de Sant Jaume. Ho demostra el fet que som en un trajecte delimitat per dues ermites amb una Mare de Déu cadascuna: la de Grenyana (al nord de Lleida, riu amunt) i la de Butsènit (al sud). Totes dues tenen força similituds:",
          "El Xop está en pleno Camino de Santiago. Lo demuestra que estamos en un trayecto delimitado por dos ermitas con una Virgen cada una: la de Grenyana (al norte de Lleida, río arriba) y la de Butsènit (al sur). Ambas tienen bastantes similitudes:",
          "El Xop lies right on the Way of St James. The proof is that we are on a stretch bounded by two hermitages, each with its own Virgin: Grenyana (north of Lleida, upriver) and Butsènit (to the south). The two have a lot in common:"
        ) },
        { ul: [
          t("Totes dues són verges trobades, amb una història semblant i datades a l'època medieval.", "Las dos son vírgenes halladas, con una historia parecida y datadas en la época medieval.", "Both are “found” Virgins, with similar stories, dating from medieval times."),
          t("Totes dues celebren aplecs, amb missa, ofrena floral i festa per als veïns, en honor a la Verge.", "Las dos celebran romerías, con misa, ofrenda floral y fiesta para los vecinos, en honor a la Virgen.", "Both hold an aplec, a gathering with mass, flower offering and a party for neighbours, in the Virgin's honour."),
          t("Totes dues estan lligades a l'aigua; per això a cada ermita hi ha una font.", "Las dos están ligadas al agua; por eso en cada ermita hay una fuente.", "Both are linked to water, which is why each hermitage has a spring."),
          t("A totes dues se'ls atribueixen miracles relacionats amb l'aigua, com recullen els goigs.", "A las dos se les atribuyen milagros relacionados con el agua, como recogen los gozos.", "Both are credited with miracles involving water, as their goigs (hymns of praise) record."),
        ] },
        { verse: t(
          "En temps d'esterilitat\nen fóreu advocada,\ni en el temps de gran secada\naigua prompte ens haveu dat.",
          "En tiempo de esterilidad\nfuisteis nuestra abogada,\ny en tiempo de gran sequía\npronto agua nos habéis dado.",
          "In times of barrenness\nyou were our advocate,\nand in the time of great drought\nyou quickly gave us water."
        ), cite: t('Goigs de la Mare de Déu de Grenyana', 'Gozos de la Virgen de Grenyana', 'Goigs of Our Lady of Grenyana') },
        { verse: t(
          "Curant mal cecs infinits,\nals de vista danyada,\npuix sou Reina singular\nde Butsènit nomenada.",
          "Curando a infinitos ciegos,\na los de vista dañada,\npues sois Reina singular\nde Butsènit llamada.",
          "Healing countless blind,\nthose whose sight was harmed,\nfor you are the singular Queen\nnamed for Butsènit."
        ), cite: t('Goigs de la Mare de Déu de Butsènit', 'Gozos de la Virgen de Butsènit', 'Goigs of Our Lady of Butsènit') },
      ],
    },
    {
      id: 'nord',
      title: t('Cap al nord: a l\'Ermita de Grenyana', 'Hacia el norte: a la Ermita de Grenyana', 'Northwards: to the Grenyana hermitage'),
      pages: ['img-1142'],
      blocks: [
        { p: t(
          "Si fem aquest tram del Camí, des de Grenyana fins a Butsènit, descobrirem vestigis del passat: ermites, molins, canals, sèquies, hortes… mostres de la concentració d'activitats productives que ha provocat la presència de l'aigua. També comprovarem que espais naturals fluvials com la Mitjana, els aiguamolls de Rufea, els patamolls de Butsènit o la Mitjana de les Vaqueres, aparentment separats, estan físicament connectats pel riu. El riu Segre actua com a corredor ecològic, territorial i cultural.",
          "Si hacemos este tramo del Camino, de Grenyana a Butsènit, descubriremos vestigios del pasado: ermitas, molinos, canales, acequias, huertas… muestras de la concentración de actividades productivas que ha provocado el agua. También comprobaremos que espacios naturales fluviales como La Mitjana, las Aiguamolls de Rufea, los humedales de Butsènit o la Mitjana de Les Vaqueres, aparentemente separados, están conectados físicamente por el río. El Segre actúa como corredor ecológico, territorial y cultural.",
          "Walking this stretch from Grenyana to Butsènit, you find traces of the past: hermitages, mills, canals, irrigation ditches, vegetable gardens… signs of how much work gathered around the water. You also see that river spaces like La Mitjana, the Rufea wetlands, the Butsènit marshes and the Mitjana de les Vaqueres, which look separate, are physically joined by the river. The Segre is a corridor for nature, for the land and for culture."
        ) },
        { h: t("Des de El Xop a l'Ermita de Grenyana (1 km)", 'De El Xop a la Ermita de Grenyana (1 km)', 'From El Xop to the Grenyana hermitage (1 km)') },
        { p: t(
          "Pel camí trobarem una font, «la Font Pixada», on podeu fer una primera aturada i beure un glop d'aigua. Abans l'aigua passava per sobre del camí i a les mules, quan trepitjaven aquesta aigua, els venien ganes de pixar: d'aquí ve el seu nom. En aquesta font també hi ha incrustada una guia de ferro que assenyala l'altura fins on va arribar l'aigua del riu en la riuada de 1982.",
          "Por el camino encontraremos una fuente, «la Font Pixada», donde podéis hacer una primera parada y beber un trago de agua. Antes el agua pasaba por encima del camino y a las mulas, al pisarla, les entraban ganas de orinar: de ahí su nombre (pixar es orinar en catalán). En la fuente también hay incrustada una guía de hierro que señala la altura a la que llegó el agua del río en la riada de 1982.",
          "On the way you pass a spring, the “Font Pixada”, a good first stop for a drink. Water used to run across the path, and when the mules stepped in it they felt the need to pee (pixar in Catalan): hence the name. An iron marker set into the spring shows how high the river rose in the 1982 flood."
        ) },
        { p: t(
          "A l'ermita fan missa cada diumenge a les 11; és llavors quan es pot visitar l'església, i altres dies es pot demanar la clau. Es pot fer un descans en un espai molt agradable a la part baixa del camí, on hi ha la cova de la Mare de Déu i la font associada a la Verge (l'aigua es pot beure).",
          "En la ermita hay misa cada domingo a las 11; es entonces cuando se puede visitar la iglesia, y otros días se puede pedir la llave. Se puede descansar en un rincón muy agradable en la parte baja del camino, donde están la cueva de la Virgen y la fuente asociada a ella (el agua es potable).",
          "There is mass at the hermitage every Sunday at 11, which is when you can see inside the church; on other days you can ask for the key. Below the path is a lovely spot to rest, with the Virgin's cave and her spring (the water is drinkable)."
        ) },
        { note: t(
          "Horaris segons el llibre; convé comprovar-los abans d'anar-hi.",
          "Horarios según el libro; conviene comprobarlos antes de ir.",
          "Times as given in the book; check before you go."
        ) },
      ],
    },
    {
      id: 'sud',
      title: t('Cap al sud: a l\'Ermita de Butsènit', 'Hacia el sur: a la Ermita de Butsènit', 'Southwards: to the Butsènit hermitage'),
      pages: ['img-1143', 'img-1144'],
      blocks: [
        { h: t("Des de El Xop a l'Ermita de Butsènit, passant per Lleida (15 km)", 'De El Xop a la Ermita de Butsènit, pasando por Lleida (15 km)', 'From El Xop to the Butsènit hermitage, through Lleida (15 km)') },
        { terms: [
          [t('Parc de la Mitjana', 'Parque de La Mitjana', 'La Mitjana park'), t(
            "Lleida és a 3 km i s'hi pot arribar caminant pel mig del Parc Municipal de la Mitjana. El parc, a les portes de la ciutat, té més de 90 hectàrees de bosc de ribera, prats humits i zones d'aigua, amb itineraris senyalitzats i equipaments per observar i gaudir de la natura, accessibles per a totes les persones en gran part dels seus espais. El nom ve de les mitjanes del riu, illes fluvials que es formen quan el riu es divideix en braços en el curs baix dels rius madurs, on l'aigua flueix més lentament i s'acumulen sediments; sovint les colonitza la vegetació de ribera.",
            "Lleida está a 3 km y se puede llegar a pie cruzando el Parque Municipal de La Mitjana. El parque, a las puertas de la ciudad, tiene más de 90 hectáreas de bosque de ribera, prados húmedos y zonas de agua, con itinerarios señalizados y equipamientos para observar y disfrutar de la naturaleza, accesibles para todas las personas en gran parte de sus espacios. El nombre viene de las «mitjanes» del río, islas fluviales que se forman cuando el río se divide en brazos en el curso bajo de los ríos maduros, donde el agua fluye más despacio y se acumulan sedimentos; a menudo las coloniza la vegetación de ribera.",
            "Lleida is 3 km away, and you can walk there through La Mitjana municipal park. On the city's doorstep, it has more than 90 hectares of riverside woodland, wet meadows and water, with signposted trails and places to watch and enjoy nature, most of them accessible to everyone. The name comes from the river's mitjanes, islands that form where a mature river splits into channels in its lower course, slows down and drops sediment; riverside plants soon take them over."
          )],
          [t('Molí de Cervià i Sèquia de Fontanet', 'Molí de Cervià y Acequia de Fontanet', 'Cervià mill and the Fontanet channel'), t(
            "Al Camí de Grenyana, a l'altura dels pous de Sant Miquel, hi ha el Molí de Cervià, al costat de la Sèquia de Fontanet. Les sèquies són d'origen musulmà; la de Fontanet regava, i encara rega, l'horta del marge esquerre del Segre. Va ser una infraestructura bàsica per al desenvolupament de les terres de Lleida, i alhora va acompanyar un procés de repoblament. El molí tenia dos edificis: el molí de dalt, amb diverses funcions, i el molí de baix, fariner. També van funcionar com a molí draper (per adobar la llana), per fabricar vernissos per a terrissa i, finalment, per generar electricitat. Es van llogar i passar de mà en mà fins a la guerra dels Segadors (mitjan segle XVII); després es va restaurar el molí fariner. Avui està en molt mal estat, però l'entorn és molt bonic, amb un salt d'aigua impressionant que feia moure el molí. A l'exterior hi ha relleus molt valuosos, i a l'interior una petxina esculpida a la base d'una columna.",
            "En el Camí de Grenyana, a la altura de los pozos de Sant Miquel, está el Molí de Cervià, junto a la Acequia de Fontanet. Las acequias son de origen musulmán; la de Fontanet regaba, y aún riega, la huerta de la margen izquierda del Segre. Fue una infraestructura básica para el desarrollo de las tierras de Lleida y acompañó un proceso de repoblación. El molino tenía dos edificios: el de arriba, con varias funciones, y el de abajo, harinero. También funcionaron como batán (para tratar la lana), para fabricar barnices de alfarería y, finalmente, para generar electricidad. Se arrendaron y pasaron de mano en mano hasta la guerra de los Segadores (mediados del siglo XVII); después se restauró el molino harinero. Hoy está en muy mal estado, pero el entorno es muy bonito, con un salto de agua impresionante que movía el molino. Fuera hay relieves muy valiosos, y dentro una concha esculpida en la base de una columna.",
            "On the Camí de Grenyana, by the wells of Sant Miquel, stands the Cervià mill beside the Fontanet channel. The irrigation channels date from Muslim times; Fontanet watered, and still waters, the farmland on the Segre's left bank. It was essential to the growth of the Lleida area, and came with the resettling of these lands. The mill had two buildings: the upper mill, with several uses, and the lower one, a flour mill. They also served as a fulling mill (for treating wool), for making pottery glazes and, lastly, for generating electricity. They were leased and passed from hand to hand until the Reapers' War (mid-17th century), after which the flour mill was restored. Today it is in very poor condition, but the setting is beautiful, with the striking waterfall that once turned the wheel. Outside are valuable carved reliefs, and inside a scallop shell carved at the foot of a column."
          )],
          [t('Lleida', 'Lleida', 'Lleida'), t(
            "Una ciutat a la vora del Segre amb un important patrimoni cultural, una de les més antigues de Catalunya, a mig camí entre el mar i la muntanya. Hi trobareu construccions monumentals de les diferents cultures que hi han passat: des de restes romanes fins a edificis molt actuals com el Palau de la Diputació i diverses cases modernistes. L'antiga catedral, la Seu Vella, és el monument més emblemàtic de la ciutat.",
            "Una ciudad a orillas del Segre con un importante patrimonio cultural, una de las más antiguas de Cataluña, a medio camino entre el mar y la montaña. Encontraréis construcciones monumentales de las distintas culturas que han pasado por ella: desde restos romanos hasta edificios muy actuales como el Palau de la Diputació y varias casas modernistas. La antigua catedral, la Seu Vella, es el monumento más emblemático de la ciudad.",
            "A city on the Segre with a rich cultural heritage, one of the oldest in Catalonia, halfway between the sea and the mountains. Its monuments reflect the cultures that passed through: from Roman remains to recent buildings like the Palau de la Diputació and several Modernista houses. The old cathedral, the Seu Vella, is its best-loved landmark."
          )],
          [t('Aiguamolls de Rufea', 'Aiguamolls de Rufea', 'Rufea wetlands'), t(
            "Una zona humida d'interès ecològic i social, prop de l'ermita de Butsènit. Es va formar per una intensa activitat d'extracció d'àrids fins als anys 1980: els pous i forats excavats es van convertir en llacunes, perquè el nivell freàtic és molt superficial, i el bosc de ribera va poblar ràpidament l'espai.",
            "Un humedal de interés ecológico y social, cerca de la ermita de Butsènit. Se formó por una intensa extracción de áridos hasta los años 1980: los pozos y agujeros excavados se convirtieron en lagunas, porque el nivel freático es muy superficial, y el bosque de ribera pobló rápidamente el espacio.",
            "Wetlands of ecological and social value near the Butsènit hermitage. They formed after heavy gravel extraction up to the 1980s: the pits filled with water, since the water table is very shallow, and riverside woodland quickly moved in."
          )],
          [t('Ermita de Butsènit', 'Ermita de Butsènit', 'Butsènit hermitage'), t(
            "L'ermita de la partida de Butsènit té l'origen al segle XII; l'edifici actual és del segle XV, reedificat després de la guerra dels Segadors (la placa de l'ermita indica el segle XVIII). Fa poc ha recuperat les campanes del segle XII. La Verge, guaridora de la vista, cura posant una pedreta (llàgrima de Santa Llúcia) dins de l'ull.",
            "La ermita de la partida de Butsènit tiene su origen en el siglo XII; el edificio actual es del siglo XV, reedificado tras la guerra de los Segadores (la placa de la ermita indica el siglo XVIII). Hace poco ha recuperado las campanas del siglo XII. La Virgen, sanadora de la vista, cura poniendo una piedrecita (lágrima de Santa Lucía) dentro del ojo.",
            "The Butsènit hermitage dates back to the 12th century; the present building is 15th-century, rebuilt after the Reapers' War (the plaque on the hermitage says the 18th century). It recently got its 12th-century bells back. The Virgin, healer of sight, cures by placing a tiny stone (a “tear of St Lucy”) in the eye."
          )],
        ] },
      ],
    },
    {
      id: 'joc-horta',
      title: t("El Joc de l'Horta", 'El Juego de la Huerta', 'The Horta game'),
      pages: ['img-1145'],
      blocks: [
        { fig: 'photos/horta-joc.webp', cap: t("El tauler del Joc de l'Horta, amb fotografies de l'horta i el gall de El Xop.", "El tablero del Juego de la Huerta, con fotografías de la huerta y el gallo de El Xop.", "The Horta game board, with photos of the farmland and El Xop's rooster.") },
        { p: t(
          "El Xop ha fet la seva pròpia versió del joc de l'oca, de 63 caselles, amb fotografies de l'horta de Lleida. Les oques hi són «cocs», gallines blanques. Aquestes són les regles:",
          "El Xop ha hecho su propia versión del juego de la oca, de 63 casillas, con fotografías de la huerta de Lleida. Las ocas son «cocs», gallinas blancas. Estas son las reglas:",
          "El Xop made its own version of the Game of the Goose: 63 squares with photos of the Lleida farmland, where the geese are “cocs”, white hens. These are the rules:"
        ) },
        { rules: [
          [t('Coc', 'Coc', 'Hen'), t("«De coc a coc i tiro un altre cop.» Passes al coc següent i tornes a tirar.", "«De coc a coc i tiro un altre cop» (de gallina en gallina y tiro otra vez). Pasas a la siguiente y vuelves a tirar.", "“De coc a coc i tiro un altre cop” (hen to hen, and roll again). Move to the next hen and roll again.")],
          ['6 · 12', t("«De canal a braçal hi vaig d'un salt.» Passes del 6 al 12 o del 12 al 6.", "«De canal a braçal hi vaig d'un salt» (de canal a acequia voy de un salto). Pasas del 6 al 12 o del 12 al 6.", "“De canal a braçal hi vaig d'un salt” (canal to channel in one jump). Move from 6 to 12, or 12 to 6.")],
          ['19', t("«El Xop, casa de natura, el teu camí atura.» Perds 3 torns.", "«El Xop, casa de natura, el teu camí atura» (El Xop, casa de naturaleza, detiene tu camino). Pierdes 3 turnos.", "“El Xop, casa de natura, el teu camí atura” (El Xop, house of nature, stops your way). Miss 3 turns.")],
          ['26', t("«Amb bona pluja, puja.» Vas a la casella 53.", "«Amb bona pluja, puja» (con buena lluvia, sube). Vas a la casilla 53.", "“Amb bona pluja, puja” (with good rain, go up). Go to square 53.")],
          ['31', t("«Al pou profund, espera la llum.» Et quedes aquí fins que hi caigui un altre jugador.", "«Al pou profund, espera la llum» (en el pozo profundo, espera la luz). Te quedas hasta que caiga otro jugador.", "“Al pou profund, espera la llum” (in the deep well, wait for the light). Stay until another player lands here.")],
          ['52', t("«Pels camins de l'Horta hi faig una volta.» Perds 3 torns.", "«Pels camins de l'Horta hi faig una volta» (por los caminos de la Huerta doy una vuelta). Pierdes 3 turnos.", "“Pels camins de l'Horta hi faig una volta” (I take a stroll along the Horta lanes). Miss 3 turns.")],
          ['53', t("«Pedra, tot i ser petita, va malmetre la collita.» Tornes a la casella 26.", "«Pedra, tot i ser petita, va malmetre la collita» (el granizo, aunque pequeño, estropeó la cosecha). Vuelves a la casilla 26.", "“Pedra, tot i ser petita, va malmetre la collita” (hail, small as it is, ruined the harvest). Go back to square 26.")],
          ['57', t("«L'arbre sense vida et fa començar altre cop la partida.» Tornes a començar.", "«L'arbre sense vida et fa començar altre cop la partida» (el árbol sin vida te hace empezar de nuevo). Vuelves a empezar.", "“L'arbre sense vida et fa començar altre cop la partida” (the lifeless tree sends you back to the start). Start again.")],
        ] },
      ],
    },
    {
      id: 'joc-oca',
      title: t("El Joc de l'Oca", 'El Juego de la Oca', 'The Game of the Goose'),
      pages: ['img-1146', 'img-1147'],
      blocks: [
        { p: t(
          "«Una guia d'anada i tornada del Camí de Sant Jaume.» Aquest conegut i entretingut joc de taula vincula el Camí de Sant Jaume al Camí de les Oques o de les Estrelles.",
          "«Una guía de ida y vuelta del Camino de Santiago.» Este conocido y entretenido juego de mesa vincula el Camino de Santiago con el Camino de las Ocas o de las Estrellas.",
          "“A there-and-back guide to the Way of St James.” This well-known, much-loved board game ties the Way of St James to the Way of the Geese, or the Way of the Stars."
        ) },
        { p: t(
          "En els taulers més antics hi podem trobar, a l'inici del joc, un joglar, un gnom, un mag, un astròleg o un personatge que llança els daus o que condueix una petita bandada d'oques. Aquest personatge representa el Mestre Iniciador, disposat a guiar-nos pel camí.",
          "En los tableros más antiguos encontramos, al inicio del juego, un juglar, un gnomo, un mago, un astrólogo o un personaje que lanza los dados o que conduce una pequeña bandada de ocas. Este personaje representa al Maestro Iniciador, dispuesto a guiarnos por el camino.",
          "On the oldest boards, at the start of the game, there is a minstrel, a gnome, a magician, an astrologer, or a figure throwing dice or herding a small flock of geese. This figure is the Master Initiator, ready to guide us along the way."
        ) },
        { p: t(
          "El joc de l'oca era un joc per als no iniciats i una guia del Camí per als iniciats: una guia no escrita de la ruta jacobea relacionada amb l'Orde del Temple. Els templers eren monjos i soldats i compartien missatges ocults amb el gremi dels Companys Constructors, que construïen les catedrals i hi plasmaven els símbols. Així se solucionaven els problemes d'idioma, de guia i de senyals que anunciaven els llocs.",
          "El juego de la oca era un juego para los no iniciados y una guía del Camino para los iniciados: una guía no escrita de la ruta jacobea relacionada con la Orden del Temple. Los templarios eran monjes y soldados y compartían mensajes ocultos con el gremio de los Compañeros Constructores, que levantaban las catedrales y plasmaban en ellas los símbolos. Así se resolvían los problemas de idioma, de guía y de señales que anunciaban los lugares.",
          "For the uninitiated it was a game; for the initiated, a guide to the Way: an unwritten guide to the pilgrim route tied to the Knights Templar. The Templars were monks and soldiers who shared hidden messages with the guild of Companion Builders, the men who raised the cathedrals and carved the symbols into them. That solved the problems of language, of guidance and of signs to mark the places."
        ) },
        { p: t(
          "El tauler, en realitat, no existia: es dibuixava sobre qualsevol superfície, una pissarra o el terra. Les marques de les esglésies eren els senyals dels llocs assenyalats al tauler. Com que els templers tenien prohibit jugar amb daus, per a ells el Joc de l'Oca no era un joc sinó un mapa encriptat del Camí de Sant Jaume, que memoritzaven per no oblidar-lo. El joc seria el camí, i les oques, els llocs segurs on es podien refugiar els guerrers de l'orde, on cert saber era protegit. Altres caselles, com el pou, el laberint o els daus, serien llocs no segurs per a l'orde.",
          "El tablero, en realidad, no existía: se dibujaba sobre cualquier superficie, una pizarra o el suelo. Las marcas de las iglesias eran las señales de los lugares indicados en el tablero. Como los templarios tenían prohibido jugar a los dados, para ellos el Juego de la Oca no era un juego sino un mapa cifrado del Camino de Santiago, que memorizaban para no olvidarlo. El juego sería el camino, y las ocas, los lugares seguros donde podían refugiarse los guerreros de la orden, donde cierto saber estaba protegido. Otras casillas, como el pozo, el laberinto o los dados, serían lugares no seguros para la orden.",
          "There was no real board: it was drawn on any surface, a slate or the ground. Marks carved on churches were the signs for the places on the board. Since Templars were forbidden to play dice, for them the Game of the Goose was not a game but a coded map of the Way, memorised so as not to forget it. The game was the road, and the geese were safe places where the order's knights could shelter, where “certain knowledge” was kept safe. Other squares, like the well, the labyrinth or the dice, were places that were not safe for the order."
        ) },
      ],
    },
    {
      id: 'origen',
      title: t("Origen del Joc de l'Oca", 'Origen del Juego de la Oca', 'Where the Game of the Goose came from'),
      pages: ['img-1148'],
      blocks: [
        { ul: [
          t("El Joc de l'Oca seria una projecció invertida del Disc de Festos: un disc d'argila d'uns 16 cm de diàmetre amb espirals a les dues cares, dividides en 30 i 31 caselles, trobat el 1908 al palau de Festos, a Creta, i datat entre el 1700 i el 1580 aC.", "El Juego de la Oca sería una proyección invertida del Disco de Festo: un disco de arcilla de unos 16 cm de diámetro con espirales en ambas caras, divididas en 30 y 31 casillas, hallado en 1908 en el palacio de Festo, en Creta, y datado entre 1700 y 1580 a. C.", "The Game of the Goose may be an inverted projection of the Phaistos Disc: a clay disc about 16 cm across with spirals on both faces divided into 30 and 31 cells, found in 1908 at the palace of Phaistos in Crete and dated to 1700–1580 BC."),
          t("Altres hipòtesis n'atribueixen l'origen als templers que, en les estones de lleure a Jerusalem, feien servir petxines de nàutil. Aquestes petxines tenen 63 espais, el mateix nombre de caselles que el joc.", "Otras hipótesis atribuyen su origen a los templarios que, en sus ratos de ocio en Jerusalén, usaban conchas de nautilo. Estas conchas tienen 63 espacios, el mismo número de casillas que el juego.", "Other theories credit the Templars, who in idle hours in Jerusalem used nautilus shells. These shells have 63 chambers, the same number as the squares in the game."),
          t("Algunes teories diuen que la Via Jacobea passa entre dues línies paral·leles, 42° 30′ i 42° 50′, que segueixen rengleres d'estels de la Via Làctia. Era un camí mil·lenari, un camí iniciàtic que conduïa a la Mar dels Morts: el Camí de les Estrelles. Una civilització amb coneixements molt elevats d'astronomia i geografia va construir dòlmens i petroglifs i va deixar signes misteriosos, reproduïts més tard a les esglésies pels picapedrers i escrivans del Camí. La Via Làctia s'estén per tota Europa, com el Camí de Sant Jaume, i per això, sortint de qualsevol lloc i mirant el cel, vas en direcció a Compostel·la.", "Algunas teorías dicen que la Vía Jacobea pasa entre dos líneas paralelas, 42° 30′ y 42° 50′, que siguen hileras de estrellas de la Vía Láctea. Era un camino milenario, iniciático, que llevaba al Mar de los Muertos: el Camino de las Estrellas. Una civilización con conocimientos muy elevados de astronomía y geografía construyó dólmenes y petroglifos y dejó signos misteriosos, reproducidos más tarde en las iglesias por los canteros y escribanos del Camino. La Vía Láctea se extiende por toda Europa, como el Camino de Santiago, y por eso, saliendo de cualquier lugar y mirando al cielo, vas hacia Compostela.", "Some theories say the pilgrim route runs between two parallels, 42° 30′ and 42° 50′, that follow lines of stars in the Milky Way. It was an ancient path of initiation leading to the Sea of the Dead: the Way of the Stars. A civilisation with deep knowledge of astronomy and geography built dolmens and petroglyphs and left mysterious signs, later copied onto churches by the Way's stonemasons and scribes. The Milky Way stretches across Europe, like the Way of St James, so wherever you start, if you follow the sky you are heading for Compostela."),
          t("La invenció del joc és anterior al segle XI, però va viure la seva gran eclosió durant el regnat de Felip II, quan Madrid era el centre de l'imperi «on mai no es ponia el sol». Va arribar a desbancar altres jocs com els escacs o els daus a les corts europees.", "La invención del juego es anterior al siglo XI, pero vivió su gran eclosión durante el reinado de Felipe II, cuando Madrid era el centro del imperio «donde nunca se ponía el sol». Llegó a desbancar a otros juegos como el ajedrez o los dados en las cortes europeas.", "The game was invented before the 11th century, but it truly flourished under Philip II, when Madrid was the centre of the empire “on which the sun never set”. It came to outshine chess and dice at the courts of Europe."),
        ] },
      ],
    },
    {
      id: 'oca-simbol',
      title: t("Per què l'oca com a símbol?", '¿Por qué la oca como símbolo?', 'Why the goose?'),
      pages: ['img-1149', 'img-1150'],
      blocks: [
        { p: t(
          "Les oques salvatges tenen recorreguts migratoris estacionals, estables i definits, els anomenats camins de les oques. Aquests recorreguts coincideixen amb el Camí de Sant Jaume o Camí de les Estrelles.",
          "Las ocas salvajes tienen rutas migratorias estacionales, estables y definidas, los llamados caminos de las ocas. Estas rutas coinciden con el Camino de Santiago o Camino de las Estrellas.",
          "Wild geese follow fixed seasonal migration routes, the so-called ways of the geese. These routes match the Way of St James, the Way of the Stars."
        ) },
        { p: t(
          "Les oques van ser considerades el paradigma de la Saviesa Sagrada: guies sagrades enviades per aconsellar els humans. L'oca és un animal mític, missatger del cel, que en el Camí dels Estels seria un símbol iniciàtic associat a la divinitat i a la protecció; així ho creien romans, egipcis i celtes.",
          "Las ocas fueron consideradas el paradigma de la Sabiduría Sagrada: guías sagradas enviadas para aconsejar a los humanos. La oca es un animal mítico, mensajero del cielo, que en el Camino de las Estrellas sería un símbolo iniciático asociado a la divinidad y a la protección; así lo creían romanos, egipcios y celtas.",
          "Geese were seen as the model of Sacred Wisdom: holy guides sent to advise people. The goose is a mythical creature, a messenger from the sky, and on the Way of the Stars it became a sign of initiation tied to the divine and to protection; Romans, Egyptians and Celts all believed so."
        ) },
        { p: t(
          "L'oca sol ser blanca (símbol de puresa). Camina per terra, neda i vola, i és un ocell migratori (busca el sol): representa alhora la terra, l'aigua i l'aire, els tres elements.",
          "La oca suele ser blanca (símbolo de pureza). Camina por tierra, nada y vuela, y es un ave migratoria (busca el sol): representa a la vez la tierra, el agua y el aire, los tres elementos.",
          "Geese are usually white (a sign of purity). They walk, swim and fly, and they migrate towards the sun: so they stand for earth, water and air at once, the three elements."
        ) },
        { ul: [
          t("Antigament les oques eren les guardianes de les cases i avisaven de la presència d'intrusos amb el seu clacar escandalós.", "Antiguamente las ocas eran las guardianas de las casas y avisaban de los intrusos con su graznido escandaloso.", "Geese once guarded houses, raising the alarm at intruders with their racket."),
          t("Apareixen sovint en els escrits folklòrics i els contes de moltes tradicions d'Orient i d'Occident.", "Aparecen a menudo en los escritos folclóricos y cuentos de muchas tradiciones de Oriente y Occidente.", "They turn up again and again in the folklore and tales of East and West."),
          t("A Rússia hi havia una tradició de xamans que es convertien en oques vigilades per una àvia que representava la Senyora de l'Univers.", "En Rusia había una tradición de chamanes que se convertían en ocas vigiladas por una abuela que representaba a la Señora del Universo.", "In Russia there was a tradition of shamans who turned into geese, watched over by a grandmother who stood for the Lady of the Universe."),
          t("Una tribu beduïna marcava el ramat amb una pota d'ànec per protegir-lo dels rèptils del desert.", "Una tribu beduina marcaba el rebaño con una pata de pato para protegerlo de los reptiles del desierto.", "A Bedouin tribe marked its flock with a duck's foot to protect it from desert reptiles."),
          t("A la catedral de Barcelona sempre hi ha oques, les oques de Santa Eulàlia, que voltegen pel claustre i diuen que avisen quan algun lladre vol profanar el temple. (El llibre en compta 11; la tradició en diu 13.)", "En la catedral de Barcelona siempre hay ocas, las ocas de Santa Eulalia, que pasean por el claustro y dicen que avisan cuando algún ladrón quiere profanar el templo. (El libro cuenta 11; la tradición dice 13.)", "Barcelona Cathedral always keeps geese, the geese of St Eulalia, who wander the cloister and are said to sound the alarm if a thief tries to desecrate the church. (The book counts 11; tradition says 13.)"),
          t("En moltes pedres d'esglésies els picapedrers medievals van gravar tres ratlles, una vertical i dues inclinades, que representen esquemàticament la pota de l'oca. Al Crucifix de l'església de Puente la Reina, la imatge s'aguanta damunt d'una pota d'oca.", "En muchas piedras de iglesias los canteros medievales grabaron tres rayas, una vertical y dos inclinadas, que representan esquemáticamente la pata de la oca. En el Crucifijo de la iglesia de Puente la Reina, la imagen se sostiene sobre una pata de oca.", "On many church stones, medieval masons carved three lines, one upright and two slanting: a simple goose's foot. On the Crucifix of the church at Puente la Reina, the figure rests on a goose's foot."),
          t("Al llarg del Camí hi ha molts topònims amb el nom d'oca: el riu Oca, els Montes de Oca, la Vall d'Oca, Nanclares de la Oca, Villafranca Montes de Oca o el poble d'El Ganso.", "A lo largo del Camino hay muchos topónimos con el nombre de oca: el río Oca, los Montes de Oca, el Valle de Oca, Nanclares de la Oca, Villafranca Montes de Oca o el pueblo de El Ganso.", "Along the Way there are many place names with the goose in them: the river Oca, the Montes de Oca, the Oca valley, Nanclares de la Oca, Villafranca Montes de Oca, and the village of El Ganso (“the goose”)."),
        ] },
        { quote: t(
          "El Camí de Santiago, com a camí iniciàtic per a viatgers a la recerca de la Saviesa i el perfeccionament interior. Les vies són plenes de marques simbòliques de llegendes i mites anteriors, expressades a vegades de forma secreta, que només poden reconèixer els qui són capaços d'interpretar-les. D'entre els senyals, destaca sobre els altres emblemes l'oca.",
          "El Camino de Santiago como camino iniciático para viajeros en busca de la Sabiduría y el perfeccionamiento interior. Las vías están llenas de marcas simbólicas de leyendas y mitos anteriores, expresados a veces de forma secreta, que únicamente pueden ser reconocidos por quienes son capaces de interpretarlos. De entre las señales, destaca sobre los demás emblemas la oca.",
          "The Way of St James as a path of initiation for travellers seeking Wisdom and inner perfection. The routes are full of symbolic marks from older legends and myths, sometimes expressed in secret, that only those able to read them can recognise. Among these signs, one stands above the rest: the goose."
        ), cite: t('Text manuscrit en castellà, reproduït al llibre', 'Texto manuscrito en castellano, reproducido en el libro', 'Handwritten Spanish text pictured in the book') },
      ],
    },
    {
      id: 'tauler',
      title: t("El tauler del Joc de l'Oca", 'El tablero del Juego de la Oca', 'The Game of the Goose board'),
      pages: ['img-1151'],
      blocks: [
        { p: t(
          "El tauler és un mapa encriptat del Camí de Sant Jaume d'anada i tornada. El viatge d'anada són les 32 primeres caselles, que representen les 32 etapes del Camí. Els símbols eren populars i fàcils de reproduir, cosa que permetia superar els problemes d'idioma.",
          "El tablero es un mapa cifrado del Camino de Santiago de ida y vuelta. El viaje de ida son las 32 primeras casillas, que representan las 32 etapas del Camino. Los símbolos eran populares y fáciles de reproducir, lo que permitía salvar los problemas de idioma.",
          "The board is a coded map of the Way of St James, there and back. The outward journey is the first 32 squares, the 32 stages of the Way. The symbols were familiar and easy to copy, which got round the problem of language."
        ) },
        { p: t(
          "La numerologia és molt important en el Joc de l'Oca, sobretot el número 9. El tauler té 64 caselles i no 63, com es diu: 63 = 6 + 3 = 9; la 63 és la Porta del Jardí de l'Oca, i el jardí pròpiament dit no porta número, encara que li correspon el 64, perquè, com a centre místic que és, no es numera mai. 6 + 4 = 10, 1 + 0 = 1: és la Unitat, l'Únic, l'Invisible.",
          "La numerología es muy importante en el Juego de la Oca, sobre todo el número 9. El tablero tiene 64 casillas y no 63, como se dice: 63 = 6 + 3 = 9; la 63 es la Puerta del Jardín de la Oca, y el jardín propiamente dicho no lleva número, aunque le corresponde el 64, porque, como centro místico, nunca se numera. 6 + 4 = 10, 1 + 0 = 1: es la Unidad, el Único, el Invisible.",
          "Numbers matter in the Game of the Goose, especially 9. The board has 64 squares, not 63 as people say: 63 = 6 + 3 = 9; square 63 is the Gate of the Goose Garden, and the garden itself carries no number, though it would be 64, because as the mystical centre it is never numbered. 6 + 4 = 10, 1 + 0 = 1: Unity, the One, the Invisible."
        ) },
        { p: t(
          "7 multiplicat per 9 fa 63, i cada casella amb el número 9 i els seus múltiples té la imatge d'una oca.",
          "7 por 9 son 63, y cada casilla con el número 9 y sus múltiplos lleva la imagen de una oca.",
          "7 times 9 is 63, and every square numbered 9 or a multiple of 9 shows a goose."
        ) },
      ],
    },
    {
      id: 'processo',
      title: t('El Joc de l\'Oca i la processó dels fanalets', 'El Juego de la Oca y la procesión de los farolillos', 'The Game of the Goose and the lantern procession'),
      pages: ['img-1152', 'img-1153'],
      blocks: [
        { p: t(
          "A Lleida, cada 24 de juliol, vigília de Sant Jaume, se celebra la processó de Sant Jaume, que té el fonament en una antiga llegenda transmesa oralment de generació en generació, de pares a fills, evocadora del naixement del cristianisme a les terres de ponent.",
          "En Lleida, cada 24 de julio, víspera de Santiago, se celebra la procesión de Santiago, basada en una antigua leyenda transmitida oralmente de generación en generación, de padres a hijos, que evoca el nacimiento del cristianismo en las tierras de poniente.",
          "In Lleida, every 24 July, the eve of St James, the St James procession is held. It rests on an old legend handed down by word of mouth from parents to children, recalling the birth of Christianity in these western lands."
        ) },
        { p: t(
          "El més curiós d'aquesta processó, encara avui, és la temàtica dels fanalets. Sense que la gent es plantegi per què, hi sobresurten la lluna i el sol, que els relacionarien amb la ruta del camí dels estels, i també hi trobem el fanalet de l'ànec, que el relacionaria amb el símbol de l'oca. És interessant, perquè no som al Camí Francès, on es troben els símbols de l'oca.",
          "Lo más curioso de esta procesión, todavía hoy, es la temática de los farolillos. Sin que la gente se pregunte por qué, destacan la luna y el sol, que los relacionarían con la ruta del camino de las estrellas, y también encontramos el farolillo del pato, que lo relacionaría con el símbolo de la oca. Es interesante, porque no estamos en el Camino Francés, donde se encuentran los símbolos de la oca.",
          "The most curious thing about the procession, even today, is the lanterns. Without anyone asking why, the moon and the sun stand out, linking them to the way of the stars; and there is a duck lantern, which links it to the goose. It is intriguing, because Lleida is not on the French Way, where the goose symbols are found."
        ) },
        { quote: t(
          "Aquesta tradició ens vindria a confirmar la teoria que el Camí de Sant Jaume, el Camí de les Estrelles i el Camí de les Oques són el mateix camí.",
          "Esta tradición vendría a confirmar la teoría de que el Camino de Santiago, el Camino de las Estrellas y el Camino de las Ocas son el mismo camino.",
          "This tradition would seem to confirm the theory that the Way of St James, the Way of the Stars and the Way of the Geese are one and the same road."
        ) },
      ],
    },
  ],
};
