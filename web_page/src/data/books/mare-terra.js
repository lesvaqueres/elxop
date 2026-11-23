// La Mare Terra — labyrinth of seven circles
// Source folder: ../books/Laberint Dels Símbols (IMG_1124–IMG_1138)
const t = (ca, es, en) => ({ ca, es, en });

module.exports = {
  slug: 'la-mare-terra',
  order: 4,
  color: 'var(--ochre)',
  cover: 'photos/mare-terra-cover.webp',
  title: t('La Mare Terra', 'La Madre Tierra', 'Mother Earth'),
  kicker: t('El laberint de set cercles', 'El laberinto de siete círculos', 'The seven-circuit labyrinth'),
  summary: t(
    "Què és un laberint, com se'n dibuixa un de set cercles, per a què servien i on n'hi ha arreu del món: de Galícia a Nazca, de Creta a Arizona.",
    "Qué es un laberinto, cómo se dibuja uno de siete círculos, para qué servían y dónde los hay en todo el mundo: de Galicia a Nazca, de Creta a Arizona.",
    "What a labyrinth is, how to draw a seven-circuit one, what they were for, and where they are found around the world: from Galicia to Nazca, Crete to Arizona."
  ),
  source: { folder: 'Laberint Dels Símbols', pages: 13 },
  sections: [
    {
      id: 'mare-terra',
      title: t('Laberint de set cercles', 'Laberinto de siete círculos', 'A labyrinth of seven circuits'),
      pages: ['img-1124'],
      blocks: [
        { fig: 'photos/mare-terra-cover.webp', cap: t("El laberint «Mare Terra» a El Xop.", "El laberinto «Madre Tierra» en El Xop.", "The “Mother Earth” labyrinth at El Xop.") },
        { quote: t(
          "Els laberints ofereixen l'oportunitat de caminar en meditació cap a aquell lloc dins nostre on la raó es fon amb la intuïció i l'esperit torna a néixer.",
          "Los laberintos ofrecen la oportunidad de caminar en meditación hacia ese lugar dentro de nosotros donde la razón se funde con la intuición y el espíritu renace.",
          "Labyrinths offer the opportunity to walk in meditation to that place within us where the rational merges with the intuitive and the spiritual is reborn."
        ), cite: t('Inscripció en una pedra, reproduïda al llibre', 'Inscripción en una piedra, reproducida en el libro', 'Inscription on a stone, pictured in the book') },
      ],
    },
    {
      id: 'simbol-antic',
      title: t('Un dels símbols més antics', 'Uno de los símbolos más antiguos', 'One of the oldest symbols'),
      pages: ['img-1125'],
      blocks: [
        { p: t(
          "El laberint és un dels símbols més antics de la humanitat. Els trobem gravats en la pedra, en argila, pintats en ceràmica, en joies, en monedes etrusques, en gerros japonesos, en tombes sicilianes, a totes les parts del món i des de la més remota antiguitat. Els més antics trobats serien de fa 4.000 anys.",
          "El laberinto es uno de los símbolos más antiguos de la humanidad. Los encontramos grabados en piedra, en arcilla, pintados en cerámica, en joyas, en monedas etruscas, en jarrones japoneses, en tumbas sicilianas, en todas partes del mundo y desde la más remota antigüedad. Los más antiguos hallados serían de hace 4.000 años.",
          "The labyrinth is one of humanity's oldest symbols. We find them carved in stone and clay, painted on pottery, on jewellery, Etruscan coins, Japanese vases and Sicilian tombs, all over the world and from the remotest past. The oldest found are thought to be 4,000 years old."
        ) },
        { p: t(
          "El més antic, el més recurrent i el que trobem a totes les parts del món és el laberint de 7 cercles, que estableix una relació entre la mare terra i la força del nostre interior. Té una geometria perfecta i natural: formes que trobem en el nostre cos (el cervell, els intestins, la coroneta, el tou dels dits, el caragol de l'orella…) i en tota la natura, en les plantes i en tots els seus elements (aigua, aire…).",
          "El más antiguo, el más recurrente y el que encontramos en todas partes es el laberinto de 7 círculos, que establece una relación entre la madre tierra y la fuerza de nuestro interior. Tiene una geometría perfecta y natural: formas que encontramos en nuestro cuerpo (el cerebro, los intestinos, la coronilla, la yema de los dedos, el caracol del oído…) y en toda la naturaleza, en las plantas y en todos sus elementos (agua, aire…).",
          "The oldest, the most common and the one found everywhere is the seven-circuit labyrinth, which links mother earth with the strength inside us. Its geometry is perfect and natural: shapes we find in our own bodies (the brain, the intestines, the crown of the head, fingertips, the cochlea of the ear…) and throughout nature, in plants and in every element (water, air…)."
        ) },
        { p: t(
          "En aquests laberints trobem l'alternança d'anar cap a un costat i cap a l'altre, com els meandres de la natura, que fan que es moderi la velocitat i s'oxigeni l'aigua.",
          "En estos laberintos encontramos la alternancia de ir hacia un lado y hacia el otro, como los meandros de la naturaleza, que moderan la velocidad y oxigenan el agua.",
          "These labyrinths swing from one side to the other, like the meanders of a river, which slow the water down and fill it with oxygen."
        ) },
        { p: t(
          "S'ha relacionat aquest laberint de 7 cercles amb els 7 xacres del nostre cos i, curiosament, en entrar-hi es fa una seqüència de voltes que correspon en progressió exacta a l'ordre d'obertura dels xacres en una meditació equilibrada i completa: 3-2-1-4-7-6-5. Aquest és l'ordre en la meditació oriental per arribar a la il·luminació.",
          "Este laberinto de 7 círculos se ha relacionado con los 7 chakras de nuestro cuerpo y, curiosamente, al entrar se hace una secuencia de vueltas que corresponde exactamente al orden de apertura de los chakras en una meditación equilibrada y completa: 3-2-1-4-7-6-5. Es el orden de la meditación oriental para llegar a la iluminación.",
          "The seven-circuit labyrinth has been linked to the body's seven chakras and, curiously, walking in takes you round the circuits in exactly the order the chakras open in a full, balanced meditation: 3-2-1-4-7-6-5. This is the order Eastern meditation follows towards enlightenment."
        ) },
        { terms: [
          ['1', t('Arrel (bàsic)', 'Raíz (básico)', 'Root')],
          ['2', t('Sacre o umbilical', 'Sacro o umbilical', 'Sacral')],
          ['3', t('Plexe solar', 'Plexo solar', 'Solar plexus')],
          ['4', t('Cor (cardíac)', 'Corazón (cardíaco)', 'Heart')],
          ['5', t('Gola (laringi)', 'Garganta (laríngeo)', 'Throat')],
          ['6', t('Front (frontal)', 'Frente (frontal)', 'Brow')],
          ['7', t('Corona (coronari)', 'Corona (coronario)', 'Crown')],
        ] },
      ],
    },
    {
      id: 'com-fer',
      title: t('Com fer un laberint de set cercles', 'Cómo hacer un laberinto de siete círculos', 'How to draw a seven-circuit labyrinth'),
      pages: ['img-1126'],
      blocks: [
        { p: t(
          "Es parteix d'una creu, quatre angles i quatre punts. D'aquesta manera es combina el quadrat, que simbolitza la terra, amb el cercle, que simbolitza el cel, i així es fonen en un sol signe que simbolitza la totalitat de l'univers.",
          "Se parte de una cruz, cuatro ángulos y cuatro puntos. Así se combina el cuadrado, que simboliza la tierra, con el círculo, que simboliza el cielo, y se funden en un solo signo que simboliza la totalidad del universo.",
          "You start from a cross, four angles and four dots. In this way the square, which stands for the earth, joins the circle, which stands for the sky, and they merge into one sign for the whole universe."
        ) },
        { steps: [
          t("Dibuixa una creu i, a cada angle, una escaire petita; afegeix un punt dins de cada escaire.", "Dibuja una cruz y, en cada ángulo, una escuadra pequeña; añade un punto dentro de cada escuadra.", "Draw a cross, a small right angle in each corner, and a dot inside each angle."),
          t("Uneix amb un arc la punta superior de la creu amb l'extrem del costat.", "Une con un arco la punta superior de la cruz con el extremo del lado.", "Join the top of the cross to the next end with an arc."),
          t("Continua unint cada extrem lliure amb el següent, de dins cap a fora, sempre en el mateix sentit.", "Sigue uniendo cada extremo libre con el siguiente, de dentro hacia fuera, siempre en el mismo sentido.", "Keep joining each free end to the next, working outwards, always in the same direction."),
          t("En unir l'últim parell, el laberint de set cercles queda tancat.", "Al unir el último par, el laberinto de siete círculos queda cerrado.", "When the last pair is joined, the seven-circuit labyrinth is complete."),
        ] },
        { note: t(
          "Els passos són una descripció del diagrama groc de la pàgina original.",
          "Los pasos describen el diagrama amarillo de la página original.",
          "These steps describe the yellow diagram on the original page."
        ) },
        { h: t("Varietats d'un mateix laberint", 'Variedades de un mismo laberinto', 'Variations of one labyrinth') },
        { p: t(
          "Després d'entrar en un laberint i encerclar diverses vegades el centre, en surts per la mateixa entrada. Poc després de fer diverses voltes, subjectivament, el temps s'atura. És difícil distreure's: el camí és estret i s'ha de mirar permanentment a terra. La ruta gira en sentit horari i en sentit contrari a les agulles del rellotge.",
          "Después de entrar en un laberinto y rodear varias veces el centro, sales por la misma entrada. Tras unas cuantas vueltas, subjetivamente, el tiempo se detiene. Es difícil distraerse: el camino es estrecho y hay que mirar todo el rato al suelo. La ruta gira en sentido horario y en sentido antihorario.",
          "You enter a labyrinth, circle the centre several times, and leave by the same entrance. After a few turns, time seems to stop. It is hard to be distracted: the path is narrow and you have to keep looking at the ground. The route turns both clockwise and anticlockwise."
        ) },
      ],
    },
    {
      id: 'cinc-centims',
      title: t('Cinc cèntims sobre laberints', 'Cuatro cosas sobre laberintos', 'A few words on labyrinths'),
      pages: ['img-1128'],
      blocks: [
        { ul: [
          t("Aquest laberint és un camí únic que arriba a un punt central per tornar al punt d'inici. És el que trobem sempre en el disseny dels primers laberints i té com a finalitat resoldre conflictes. Un altre tipus de laberint és el que té camins «falsos» i té com a finalitat confondre.", "Este laberinto es un camino único que llega a un punto central para volver al de inicio. Es el que encontramos siempre en el diseño de los primeros laberintos y su finalidad es resolver conflictos. Otro tipo de laberinto es el que tiene caminos «falsos» y su finalidad es confundir.", "This kind of labyrinth is a single path that reaches the centre and returns to the start. It is the design of all the earliest labyrinths, and its purpose is to resolve conflict. The other kind, with “false” paths, is a maze, made to confuse."),
          t("Aquests laberints recorden vagament imatges del cervell humà. És possible que, seguint el model del cervell, es pensés que completar el circuit altera o millora la funció cerebral o porta a la il·luminació.", "Estos laberintos recuerdan vagamente imágenes del cerebro humano. Es posible que, siguiendo el modelo del cerebro, se pensara que completar el circuito altera o mejora la función cerebral o lleva a la iluminación.", "These labyrinths look a little like the human brain. Perhaps, following that model, people believed that completing the circuit changed or improved the mind, or led to enlightenment."),
          t("Aquesta forma s'ha perpetuat en moltes cultures humanes, a la majoria de continents.", "Esta forma se ha perpetuado en muchas culturas humanas, en la mayoría de continentes.", "The shape has lasted in many human cultures on most continents."),
          t("Estan tallats en pedra, ceràmica, tauletes de fang, mosaics, manuscrits, patrons de pedra, gespa o voreres d'alguna catedral. Els primers dissenys coneguts tenen una antiguitat de 3.000 anys.", "Están tallados en piedra, cerámica, tablillas de barro, mosaicos, manuscritos, patrones de piedra, césped o suelos de alguna catedral. Los primeros diseños conocidos tienen 3.000 años de antigüedad.", "They are cut into stone, pottery, clay tablets, mosaics, manuscripts, stone patterns, turf, or cathedral floors. The earliest known designs are 3,000 years old."),
        ] },
        { p: t(
          "És possible suposar que tant l'estat psicològic com el físic de les persones antigues era el propòsit principal dels rituals als laberints. Aquestes preparacions rituals eren necessàries per augmentar el nivell d'activitat física i la concentració, qualitats necessàries per a la cacera d'animals marins, la pesca i els viatges de llarg recorregut pel fred i perillós mar Blanc. Cal destacar que l'acompanyament musical, les danses rituals i, sovint, l'acció psicotròpica eren elements obligatoris de molts rituals, i van enfortir repetidament l'efecte aconseguit.",
          "Cabe suponer que tanto el estado psicológico como el físico de los antiguos era el propósito principal de los rituales en los laberintos. Estas preparaciones rituales eran necesarias para aumentar la actividad física y la concentración, cualidades necesarias para cazar animales marinos, pescar y hacer largos viajes por el frío y peligroso mar Blanco. Hay que destacar que la música, las danzas rituales y, a menudo, la acción psicotrópica eran elementos obligatorios de muchos rituales, y reforzaban una y otra vez el efecto conseguido.",
          "We can suppose that the main purpose of labyrinth rituals was the mental and physical state of the people taking part. These rituals built up physical energy and concentration, which were needed for hunting sea animals, fishing and long journeys across the cold, dangerous White Sea. Music, ritual dance and often mind-altering substances were required parts of many rituals, and strengthened the effect each time."
        ) },
      ],
    },
    {
      id: 'finalitat',
      title: t('Finalitat dels laberints', 'Finalidad de los laberintos', 'What labyrinths were for'),
      pages: ['img-1129'],
      blocks: [
        { ul: [
          t("Els escandinaus els utilitzaven per protegir els pescadors.", "Los escandinavos los usaban para proteger a los pescadores.", "Scandinavians used them to protect fishermen."),
          t("Els víkings en feien abans de sortir a la mar, com a protecció.", "Los vikingos los hacían antes de salir al mar, como protección.", "Vikings made them before putting out to sea, for protection."),
          t("Per als indis hopi, el laberint representa el matrimoni entre el Pare Sol i la Mare Terra; sobre els quatre costats de la terra hi trobem les òrbites circulars del sol.", "Para los indios hopi, el laberinto representa el matrimonio entre el Padre Sol y la Madre Tierra; sobre los cuatro lados de la tierra encontramos las órbitas circulares del sol.", "For the Hopi, the labyrinth is the marriage of Father Sun and Mother Earth: the sun's circular paths laid over the four sides of the earth."),
          t("Hi ha danses laberíntiques, on els joves giraven en espiral cap al centre i després se n'allunyaven. Van ser populars fins al segle XIX i encara es ballen a Europa. Descendeixen d'un antic ball de l'illa grega de Naxos, on Teseu i els seus amics van celebrar la victòria.", "Hay danzas laberínticas, en las que los jóvenes giraban en espiral hacia el centro y luego se alejaban. Fueron populares hasta el siglo XIX y aún se bailan en Europa. Descienden de un antiguo baile de la isla griega de Naxos, donde Teseo y sus amigos celebraron la victoria.", "There are labyrinth dances, in which young people spiralled in to the centre and back out again. They were popular until the 19th century and are still danced in Europe. They descend from an ancient dance on the Greek island of Naxos, where Theseus and his friends celebrated their victory."),
          t("Molts laberints dibuixats a terra eren una mena de trampa que atrapava els mals esperits.", "Muchos laberintos dibujados en el suelo eran una especie de trampa que atrapaba a los malos espíritus.", "Many labyrinths drawn on the ground were traps for evil spirits."),
          t("En algunes cases, el laberint es dibuixava a la porta d'entrada com a sistema de protecció.", "En algunas casas, el laberinto se dibujaba en la puerta de entrada como protección.", "In some houses a labyrinth was drawn on the front door for protection."),
        ] },
        { note: t(
          "Al llibre: laberint pintat al temple de Kurukshetra, on els Pandava van resar abans de la batalla.",
          "En el libro: laberinto pintado en el templo de Kurukshetra, donde los Pandava rezaron antes de la batalla.",
          "Pictured in the book: a labyrinth painted in the temple at Kurukshetra, where the Pandavas prayed before battle."
        ) },
      ],
    },
    {
      id: 'zones',
      title: t('On hi ha laberints', 'Dónde hay laberintos', 'Where labyrinths are found'),
      pages: ['img-1130'],
      blocks: [
        { p: t(
          "El mapa del llibre marca laberints a Europa, a la Mediterrània, a l'Orient Mitjà, a l'Índia, a la Xina i al sud-est asiàtic, i a Amèrica, al sud-oest dels Estats Units i als Andes.",
          "El mapa del libro marca laberintos en Europa, el Mediterráneo, Oriente Medio, la India, China y el sudeste asiático, y en América, en el sudoeste de Estados Unidos y en los Andes.",
          "The book's map marks labyrinths across Europe, the Mediterranean, the Middle East, India, China and South-East Asia, and in the Americas, in the south-western United States and the Andes."
        ) },
        { quote: t(
          "Podem constatar que els laberints del continent americà tenen unes dates molt més actuals. Per què?",
          "Podemos constatar que los laberintos del continente americano tienen fechas mucho más recientes. ¿Por qué?",
          "We can see that the labyrinths of the Americas are much more recent. Why?"
        ) },
      ],
    },
    {
      id: 'galicia-nazca',
      title: t('Uns exemples: Galícia i Nazca', 'Unos ejemplos: Galicia y Nazca', 'Some examples: Galicia and Nazca'),
      pages: ['img-1132'],
      blocks: [
        { p: t(
          "A Galícia, en l'actualitat la massa forestal, sobretot d'eucaliptus, cobreix els laberints i impedeix que molts petroglifs es puguin veure. Els últims incendis n'han posat molts al descobert. Tenen les cronologies més antigues, amb una antiguitat de 4.000 anys. En podem destacar alguns per la seva curiositat:",
          "En Galicia, hoy la masa forestal, sobre todo de eucaliptos, cubre los laberintos e impide ver muchos petroglifos. Los últimos incendios han dejado muchos al descubierto. Tienen las cronologías más antiguas, de unos 4.000 años. Podemos destacar algunos por su curiosidad:",
          "In Galicia, forest, mostly eucalyptus, now covers the labyrinths and hides many of the petroglyphs. Recent fires have uncovered many of them. They are among the oldest anywhere, about 4,000 years old. A few stand out:"
        ) },
        { terms: [
          [t('Laxe Escrita, Carnota', 'Laxe Escrita, Carnota', 'Laxe Escrita, Carnota'), t(
            "Estació rupestre on, com a curiositat, també hi ha vaixells gravats. Des de Laxe Escrita el sol es pon tot l'any al mar, menys el quart de l'any centrat en el solstici d'estiu.",
            "Estación rupestre donde, como curiosidad, también hay barcos grabados. Desde Laxe Escrita el sol se pone todo el año en el mar, menos el cuarto del año centrado en el solsticio de verano.",
            "A rock-art site which, unusually, also has carved boats. From Laxe Escrita the sun sets into the sea all year except for the quarter of the year around the summer solstice."
          )],
          [t('Laberint de Nazca (Ica, Perú)', 'Laberinto de Nazca (Ica, Perú)', 'Nazca labyrinth (Ica, Peru)'), t(
            "De fa 1.500 o 2.000 anys. Fa més de 4 quilòmetres i no se sap si es va fer per veure's des de l'aire o per recórrer-lo a peu (es trigaria una hora). Té una forma irregular i se'n desconeix la funció, però es pensa que tindria una finalitat mística o religiosa.",
            "De hace 1.500 o 2.000 años. Mide más de 4 kilómetros y no se sabe si se hizo para verse desde el aire o para recorrerlo a pie (se tardaría una hora). Tiene forma irregular y se desconoce su función, aunque se cree que tendría una finalidad mística o religiosa.",
            "1,500 to 2,000 years old. It is over 4 km long, and nobody knows whether it was meant to be seen from the air or walked (it would take an hour). Its shape is irregular and its purpose unknown, though it is thought to have been mystical or religious."
          )],
        ] },
      ],
    },
    {
      id: 'calendaris',
      title: t('Laberints que són calendaris', 'Laberintos que son calendarios', 'Labyrinths that are calendars'),
      pages: ['img-1133', 'img-1134'],
      blocks: [
        { terms: [
          [t('Petroglifs del Monte Tetón (Galícia)', 'Petroglifos del Monte Tetón (Galicia)', 'Monte Tetón petroglyphs (Galicia)'), t(
            "Combinacions circulars de 18 cercles concèntrics; segons el llibre, el més gran de tota Europa (350 m de diàmetre). Tenia una funció astronòmica de calendari i de càlcul. Uns 4.000 anys.",
            "Combinaciones circulares de 18 círculos concéntricos; según el libro, el mayor de toda Europa (350 m de diámetro). Tenía una función astronómica de calendario y de cálculo. Unos 4.000 años.",
            "Circular designs of 18 concentric rings; according to the book, the largest in Europe (350 m across). It served as an astronomical calendar and for reckoning. About 4,000 years old."
          )],
          [t('La Daga del Sol (Nou Mèxic)', 'La Daga del Sol (Nuevo México)', 'The Sun Dagger (New Mexico)'), t(
            "Petroglifs de Fajada, al Chaco Canyon (EUA). Un rellotge de sol que marcava les estacions. Cap a l'any 1000 dC.",
            "Petroglifos de Fajada, en el Cañón del Chaco (EE. UU.). Un reloj de sol que marcaba las estaciones. Hacia el año 1000 d. C.",
            "Petroglyphs on Fajada Butte, Chaco Canyon (USA). A sun clock that marked the seasons. Around AD 1000."
          )],
          [t('Laberint de Mogor (Galícia)', 'Laberinto de Mogor (Galicia)', 'Mogor labyrinth (Galicia)'), t(
            "Cap al 3000 aC, en ple neolític. Té l'entrada tancada i desviada en direcció oest. Es considera un calendari que indica els equinoccis i els solsticis.",
            "Hacia el 3000 a. C., en pleno neolítico. Tiene la entrada cerrada y desviada hacia el oeste. Se considera un calendario que indica los equinoccios y los solsticios.",
            "Around 3000 BC, in the Neolithic. Its entrance is closed and turned towards the west. It is thought to be a calendar marking the equinoxes and solstices."
          )],
        ] },
        { p: t(
          "L'entrada del laberint de Mogor s'orienta a l'oest: a l'equinocci, el sol entra al fons de la imatge. Quatre formes circulars tenen els seus centres en línia recta, i aquesta línia la determina l'ombra que projecta un pal clavat al centre de la que està més a l'oest.",
          "La entrada del laberinto de Mogor mira al oeste: en el equinoccio, el sol entra al fondo de la imagen. Cuatro formas circulares tienen sus centros en línea recta, y esa línea la marca la sombra que proyecta un palo clavado en el centro de la más occidental.",
          "The Mogor labyrinth's entrance faces west: at the equinox the sun enters at the far end of the picture. Four circular carvings have their centres in a straight line, and that line is traced by the shadow of a stick set in the centre of the westernmost one."
        ) },
      ],
    },
    {
      id: 'arizona-russia',
      title: t('Arizona i Rússia', 'Arizona y Rusia', 'Arizona and Russia'),
      pages: ['img-1135'],
      blocks: [
        { h: t("L'home en el laberint", 'El hombre en el laberinto', 'The Man in the Maze') },
        { p: t(
          "Creat pels indis papago (tohono o'odham) de la vall central d'Arizona. Les decisions encertades porten l'home a l'harmonia amb el cosmos, sense que l'importin les dificultats ni les distàncies del camí recorregut.",
          "Creado por los indios pápago (tohono o'odham) del valle central de Arizona. Las decisiones acertadas llevan al hombre a la armonía con el cosmos, sin importarle las dificultades ni las distancias del camino recorrido.",
          "Made by the Papago (Tohono O'odham) people of central Arizona. Wise choices lead a person into harmony with the cosmos, whatever the hardships or distances on the way."
        ) },
        { p: t(
          "L'home és a l'entrada del laberint en començar la vida; hi entrarà i el recorrerà, girant, perdent-se, serpentejant pel llarg camí de la vida. Finalment arribarà al centre, a la mort, on el saludarà I'itoi, el creador, el déu Sol, el Germà Gran, i s'hi unirà en harmonia amb l'univers.",
          "El hombre está a la entrada del laberinto al comenzar la vida; entrará y lo recorrerá, girando, perdiéndose, serpenteando por el largo camino de la vida. Finalmente llegará al centro, a la muerte, donde lo saludará I'itoi, el creador, el dios Sol, el Hermano Mayor, y se unirá a él en armonía con el universo.",
          "A person stands at the entrance at the start of life, then walks in, turning, getting lost, winding along life's long path. At last they reach the centre, death, where I'itoi greets them, the creator, the Sun god, the Elder Brother, and they join him in harmony with the universe."
        ) },
        { h: t('Babilon de Kandalakxa (Rússia)', 'Babilón de Kandalaksha (Rusia)', 'The “Babylons” of Kandalaksha (Russia)') },
        { p: t(
          "De 3.000 a 5.000 anys. «Babilon» era el nom amb què es coneixien antigament els nombrosos laberints del nord de Rússia. Es creu que s'hi celebraven sacrificis i que eren punts d'energia que permetien entrar en una altra dimensió. No se'n sap la funció original, però se sap que a principis d'aquest mil·lenni els lapons hi celebraven rituals xamànics.",
          "De 3.000 a 5.000 años. «Babilón» era el nombre con que se conocían antiguamente los numerosos laberintos del norte de Rusia. Se cree que allí se celebraban sacrificios y que eran puntos de energía que permitían entrar en otra dimensión. Se desconoce su función original, pero se sabe que a principios de este milenio los lapones celebraban en ellos rituales chamánicos.",
          "3,000 to 5,000 years old. “Babylon” was the old name for the many stone labyrinths of northern Russia. Sacrifices are believed to have been held there, and they were thought to be energy points leading to another dimension. Their original purpose is unknown, but the Sámi are known to have held shamanic rituals in them at the start of this millennium."
        ) },
      ],
    },
    {
      id: 'galeria',
      title: t('Laberints del món', 'Laberintos del mundo', 'Labyrinths of the world'),
      pages: ['img-1136', 'img-1137', 'img-1138'],
      blocks: [
        { p: t(
          "Tres pàgines de fotografies recullen laberints de tot el món:",
          "Tres páginas de fotografías recogen laberintos de todo el mundo:",
          "Three pages of photographs gather labyrinths from around the world:"
        ) },
        { ul: [
          t('Goa, Índia (2500 aC)', 'Goa, India (2500 a. C.)', 'Goa, India (2500 BC)'),
          t('Pintura mural al temple de Mädavala, Sri Lanka. Mitologia budista.', 'Pintura mural en el templo de Mädavala, Sri Lanka. Mitología budista.', 'Wall painting in the Mädavala temple, Sri Lanka. Buddhist mythology.'),
          t('Gerra etrusca de Tragliatella, Itàlia (650 aC)', 'Jarra etrusca de Tragliatella, Italia (650 a. C.)', 'Etruscan jug from Tragliatella, Italy (650 BC)'),
          t("Tauleta d'argila de les runes del palau de Pilos, al Peloponès (3200 aC, segons el llibre)", 'Tablilla de arcilla de las ruinas del palacio de Pilos, en el Peloponeso (3200 a. C., según el libro)', 'Clay tablet from the ruins of the palace at Pylos, Peloponnese (3200 BC, according to the book)'),
          t('Temple egipci de Kom Ombo', 'Templo egipcio de Kom Ombo', 'Egyptian temple of Kom Ombo'),
          t("Gravat a les parets de la «Tomba del Labirinto», Sardenya (entre 3400 i 2500 aC)", 'Grabado en las paredes de la «Tomba del Labirinto», Cerdeña (entre 3400 y 2500 a. C.)', 'Carving on the walls of the “Tomba del Labirinto”, Sardinia (3400–2500 BC)'),
          t('Monedes de Cnossos, Creta (430 a 67 aC)', 'Monedas de Cnosos, Creta (430 a 67 a. C.)', 'Coins of Knossos, Crete (430–67 BC)'),
          t('Gravat en un dolmen, Padugula (Índia)', 'Grabado en un dolmen, Padugula (India)', 'Carving on a dolmen, Padugula (India)'),
          t('Gravat rupestre a Val Camonica (Itàlia)', 'Grabado rupestre en Val Camonica (Italia)', 'Rock carving in Val Camonica (Italy)'),
          t("Miniatura d'una bíblia armènia de 1634, que representa la ciutat de Jericó", 'Miniatura de una biblia armenia de 1634, que representa la ciudad de Jericó', 'Miniature from an Armenian Bible of 1634, showing the city of Jericho'),
          t('Narmada, Índia', 'Narmada, India', 'Narmada, India'),
          t('Inscripció rupestre a Rocky Valley, al nord de Tintagel (Regne Unit)', 'Inscripción rupestre en Rocky Valley, al norte de Tintagel (Reino Unido)', 'Rock carving at Rocky Valley, north of Tintagel (UK)'),
          t("Petroglif hopi prop d'Oraibi, Arizona: símbol de la «Mare Terra» (1200 dC)", 'Petroglifo hopi cerca de Oraibi, Arizona: símbolo de la «Madre Tierra» (1200 d. C.)', 'Hopi petroglyph near Oraibi, Arizona: the “Mother Earth” symbol (AD 1200)'),
          t('Laberint de Makholmen (Suècia)', 'Laberinto de Makholmen (Suecia)', 'Makholmen labyrinth (Sweden)'),
          t('Pintat en un pilar vermell a Pompeia, abans del 79 dC. La inscripció diu: LABYRINTHUS HIC HABITAT MINOTAURUS.', 'Pintado en un pilar rojo de Pompeya, antes del 79 d. C. La inscripción dice: LABYRINTHUS HIC HABITAT MINOTAURUS.', 'Painted on a red pillar in Pompeii, before AD 79. It reads: LABYRINTHUS HIC HABITAT MINOTAURUS, “the labyrinth, here lives the Minotaur”.'),
          t('Hern St. Hubert, Bèlgica', 'Hern St. Hubert, Bélgica', 'Hern St. Hubert, Belgium'),
          t('Gravat en pedra amb símbols rúnics a Lye (Suècia)', 'Grabado en piedra con símbolos rúnicos en Lye (Suecia)', 'Stone carving with runes at Lye (Sweden)'),
          t('Laberints de pedres de Zaiatski, Rússia', 'Laberintos de piedras de Zayatski, Rusia', 'Stone labyrinths of Zayatsky Island, Russia'),
        ] },
      ],
    },
  ],
};
