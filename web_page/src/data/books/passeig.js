// El Passeig dels Plataners — source folders:
//   ../books/EL PASSEIG DELS PLATANERS (IMG_1100–IMG_1109)
//   ../books/Laberint Dels Símbols (IMG_1120–IMG_1123: cover + three pages repeated from this book)
const t = (ca, es, en) => ({ ca, es, en });

module.exports = {
  slug: 'el-passeig-dels-plataners',
  order: 3,
  color: 'var(--arbor)',
  cover: 'photos/passeig-plano.webp',
  title: t('El Passeig dels Plataners', 'El Paseo de los Plátanos', 'The Plane-Tree Walk'),
  kicker: t('El laberint de la vida i els seus símbols', 'El laberinto de la vida y sus símbolos', 'The labyrinth of life and its symbols'),
  summary: t(
    "Un passeig a l'ombra dels plataners que amaga el «laberint de la vida»: un camí de cruïlles amb símbols antics i cercles de reflexologia per caminar descalç.",
    "Un paseo a la sombra de los plátanos que esconde el «laberinto de la vida»: un camino de cruces con símbolos antiguos y círculos de reflexología para caminar descalzo.",
    "A walk in the shade of plane trees that hides “the labyrinth of life”: a path of crossroads with ancient symbols and reflexology circles to walk barefoot."
  ),
  source: { folder: 'EL PASSEIG DELS PLATANERS + Laberint Dels Símbols', pages: 14 },
  sections: [
    {
      id: 'passeig',
      title: t('El passeig', 'El paseo', 'The walk'),
      pages: ['img-1100'],
      blocks: [
        { p: t(
          "El passeig dels plataners és un passatge tranquil i relaxant entre arbres, concretament plataners, que acullen sota la seva ombra «el laberint de la vida». Hi podem passejar, jugar, meditar, pensar o simplement observar o fer el laberint.",
          "El paseo de los plátanos es un pasaje tranquilo y relajante entre árboles, concretamente plátanos de sombra, que acogen bajo su sombra «el laberinto de la vida». Podemos pasear, jugar, meditar, pensar o simplemente observar o recorrer el laberinto.",
          "The plane-tree walk is a quiet, restful passage between trees, plane trees to be exact, which shelter “the labyrinth of life” in their shade. You can stroll, play, meditate, think, or simply watch, or walk the labyrinth."
        ) },
        { p: t(
          "Els plataners són una de les espècies amb més potencial d'absorció de CO₂; a part, regulen la humitat i la temperatura, fan ombra i esmorteeixen el soroll.",
          "Los plátanos de sombra son una de las especies con más capacidad de absorber CO₂; además, regulan la humedad y la temperatura, dan sombra y amortiguan el ruido.",
          "Plane trees are among the species best at absorbing CO₂. They also regulate humidity and temperature, give shade and soften noise."
        ) },
        { p: t(
          "La seva escorça proporciona al tronc un aspecte clapejat de diverses tonalitats, del gris a la gamma d'ocres i marrons, que els dóna un aspecte singular, característic i màgic.",
          "Su corteza da al tronco un aspecto moteado de varias tonalidades, del gris a la gama de ocres y marrones, lo que les da un aspecto singular, característico y mágico.",
          "Their bark gives the trunk a dappled look in many shades, from grey through ochres and browns, which makes them singular, unmistakable and a little magical."
        ) },
        { p: t(
          "Presenta diversos aspectes en funció de l'estació. Durant la primavera i l'estiu, els plàtans estan engalanats amb un fullatge verd considerable, que dóna al passeig un aspecte de sostre verd que protegeix i acarona el laberint i les persones que hi passegen. A la tardor, amb la caiguda de les fulles, es forma al sòl una catifa de tonalitats ocres i marrons que amaga totalment el laberint. I a l'hivern queda al descobert el laberint i apareixen els niuets que a la primavera i l'estiu el pardal, el verdum, el gafarró, la cadernera… hi fan per acollir les seves cries.",
          "Cambia con las estaciones. En primavera y verano, los plátanos se visten de un follaje verde abundante que da al paseo un techo verde que protege y acaricia el laberinto y a quienes pasean por él. En otoño, al caer las hojas, se forma en el suelo una alfombra de ocres y marrones que esconde por completo el laberinto. Y en invierno el laberinto queda al descubierto y aparecen los nidos que en primavera y verano hacen el gorrión, el verderón, el verdecillo, el jilguero… para criar a sus pollos.",
          "It changes with the seasons. In spring and summer the planes are dressed in thick green leaves, giving the walk a green roof that shelters and strokes the labyrinth and the people walking it. In autumn the falling leaves lay a carpet of ochres and browns that hides the labyrinth completely. And in winter the labyrinth is uncovered again, along with the little nests that sparrows, greenfinches, serins and goldfinches built in spring and summer to raise their young."
        ) },
        { h: t('Al final del passeig', 'Al final del paseo', 'At the end of the walk') },
        { p: t(
          "Al final del passeig hi descobrim un espai acollidor i resguardat. Una gran morera dibuixa sota la seva ombra una placeta molt amagada, envoltada d'uns espais únics i molt originals: una tenda d'indis i el cau secret, a més d'un assecador solar. Són llocs quasi màgics que et permeten gaudir de sensacions totalment diferents de les que has viscut abans. Una nit d'estrelles hi afegeix un toc idíl·lic i immillorable.",
          "Al final del paseo descubrimos un espacio acogedor y resguardado. Una gran morera dibuja bajo su sombra una placita muy escondida, rodeada de espacios únicos y muy originales: un tipi y la guarida secreta, además de un secadero solar. Son lugares casi mágicos que te permiten disfrutar de sensaciones totalmente distintas de las vividas antes. Una noche de estrellas les añade un toque idílico e inmejorable.",
          "At the end of the walk you find a sheltered, welcoming spot. A great mulberry tree casts its shade over a well-hidden little square, surrounded by some unusual places: a tipi, the secret den, and a solar dryer. They are almost magical places that let you feel things quite unlike anything before. A starry night makes them perfect."
        ) },
        { terms: [
          [t("La tenda d'indis", 'El tipi', 'The tipi'), t(
            "Està amagada sota una cobertura de mareselva que li dóna una percepció única. Al seu interior hi podem meditar, fer petar la xerrada en petit grup, passar-hi una nit romàntica…",
            "Está escondido bajo una cubierta de madreselva que le da una percepción única. Dentro podemos meditar, charlar en grupo pequeño, pasar una noche romántica…",
            "It is hidden under a covering of honeysuckle that makes it feel like nowhere else. Inside you can meditate, chat in a small group, spend a romantic night…"
          )],
          [t('El cau secret', 'La guarida secreta', 'The secret den'), t(
            "Dissimulat sota una estructura de ferro en forma de cúpula, recoberta d'una heura enfiladissa i espessa, hi trobem aquest refugi ocult que, com si entressis a l'interior de la mare terra, t'acull i et protegeix alhora que et permet experimentar el misteri i la reflexió.",
            "Disimulado bajo una estructura de hierro en forma de cúpula, cubierta de una hiedra trepadora y espesa, encontramos este refugio oculto que, como si entraras en el interior de la madre tierra, te acoge y te protege a la vez que te permite experimentar el misterio y la reflexión.",
            "Tucked beneath an iron dome covered in thick climbing ivy is this hidden refuge. As if you were stepping inside mother earth, it takes you in and protects you, and lets you feel mystery and reflection."
          )],
        ] },
      ],
    },
    {
      id: 'laberint-de-la-vida',
      title: t('El laberint de la vida', 'El laberinto de la vida', 'The labyrinth of life'),
      pages: ['img-1120', 'img-1101'],
      blocks: [
        { fig: 'photos/passeig-plano.webp', cap: t("Plànol del «Laberint dels símbols»: espirals, símbols i espais de reflexologia.", "Plano del «Laberinto de los símbolos»: espirales, símbolos y espacios de reflexología.", "Plan of the “Labyrinth of symbols”: spirals, symbols and reflexology circles.") },
        { p: t(
          "El «Laberint de la vida» et proposa un camí que, com en la vida, et dóna la possibilitat de triar. S'inicia amb el símbol de Reiki anomenat Choku-rei. Tu ja comences el camí triant si tires cap a la dreta o cap a l'esquerra.",
          "El «Laberinto de la vida» te propone un camino que, como en la vida, te da la posibilidad de elegir. Empieza con el símbolo de Reiki llamado Choku-rei. Ya empiezas el camino eligiendo si vas hacia la derecha o hacia la izquierda.",
          "The “Labyrinth of life” offers you a path that, as in life, lets you choose. It begins with the Reiki symbol called Choku-rei, and from the first step you decide whether to turn right or left."
        ) },
        { p: t(
          "Tot seguint el camí et trobes bifurcacions que t'obliguen a escollir: o segueixes el camí recte o, si la teva curiositat et tempta, pots agafar a cada cruïlla el trencant que et conduirà cap a nous i diferents indrets, en els quals hi descobriràs tota una sèrie de símbols que et sorprendran i t'aportaran molta informació.",
          "Siguiendo el camino encuentras bifurcaciones que te obligan a escoger: o sigues recto o, si la curiosidad te tienta, puedes tomar en cada cruce el desvío que te llevará a lugares nuevos y diferentes, donde descubrirás una serie de símbolos que te sorprenderán y te aportarán mucha información.",
          "Along the way you meet forks that make you choose: carry straight on, or, if curiosity tempts you, take the turning at each crossroads towards new places, where you will find a series of symbols that will surprise you and tell you a great deal."
        ) },
        { p: t(
          "En el camí també hi trobaràs uns espais de reflexologia que t'inviten a descalçar-te per fer-te un massatge als peus, que n'estimularà les zones reflexes i permetrà que el teu camí sigui molt més plàcid.",
          "En el camino también encontrarás unos espacios de reflexología que te invitan a descalzarte para darte un masaje en los pies, que estimulará sus zonas reflejas y hará tu camino mucho más plácido.",
          "On the way you will also find reflexology circles that invite you to take off your shoes for a foot massage, stimulating the reflex points and making your walk much gentler."
        ) },
        { p: t(
          "Al plànol hi ha marcats: els espais de reflexologia (una flor i una estrella), la creu solar, el yin i el yang, el trisquel i el Choku-rei.",
          "En el plano están marcados: los espacios de reflexología (una flor y una estrella), la cruz solar, el yin y el yang, el trisquel y el Choku-rei.",
          "Marked on the plan: the reflexology circles (a flower and a star), the solar cross, yin and yang, the triskele and the Choku-rei."
        ) },
      ],
    },
    {
      id: 'construccio',
      title: t('Com es va fer', 'Cómo se hizo', 'How it was built'),
      pages: ['img-1102', 'img-1103', 'img-1104'],
      blocks: [
        { fig: 'photos/passeig-obres.webp', cap: t("Marcant el traçat, el laberint excavat al capvespre i el laberint acabat.", "Marcando el trazado, el laberinto excavado al atardecer y el laberinto terminado.", "Marking out the plan, the dug labyrinth at sunset, and the finished labyrinth.") },
        { p: t(
          "Aquestes pàgines mostren la construcció del laberint: el dibuix original a llapis, el terreny marcat amb el traçat, el camí excavat i el laberint acabat amb les vores de pedra.",
          "Estas páginas muestran la construcción del laberinto: el dibujo original a lápiz, el terreno marcado con el trazado, el camino excavado y el laberinto terminado con los bordes de piedra.",
          "These pages show the labyrinth being built: the original pencil drawing, the ground marked out, the path dug, and the finished labyrinth edged in stone."
        ) },
        { p: t(
          "Dues imatges acompanyen el disseny com a inspiració: un gravat rupestre prehistòric de Portela da Laxe (Viascón, Pontevedra), per a la simbologia, i un relleu egipci de Saqqara, «la tomba del gran metge», per al racó de reflexologia.",
          "Dos imágenes acompañan el diseño como inspiración: un grabado rupestre prehistórico de Portela da Laxe (Viascón, Pontevedra), para la simbología, y un relieve egipcio de Saqqara, «la tumba del gran médico», para el rincón de reflexología.",
          "Two images sit beside the design as inspiration: a prehistoric rock carving from Portela da Laxe (Viascón, Pontevedra) for the symbols, and an Egyptian relief from Saqqara, “the tomb of the great physician”, for the reflexology corner."
        ) },
      ],
    },
    {
      id: 'choku-rei',
      title: t('Els símbols: Choku-rei', 'Los símbolos: Choku-rei', 'The symbols: Choku-rei'),
      pages: ['img-1105', 'img-1106'],
      blocks: [
        { p: t(
          "Dirigeix l'energia al cos físic. Es coneix de diferents maneres, com «el poder és aquí». És símbol de poder i fa d'interruptor perquè obre el pas al flux de l'energia: «posa tot el poder de l'univers aquí».",
          "Dirige la energía al cuerpo físico. Se conoce de distintas maneras, como «el poder está aquí». Es símbolo de poder y hace de interruptor porque abre paso al flujo de la energía: «pon todo el poder del universo aquí».",
          "It directs energy to the physical body. It goes by several names, such as “the power is here”. It is a symbol of power and acts as a switch that opens the flow of energy: “put all the power of the universe here”."
        ) },
        { p: t(
          "És curiós, però serveix tant per amplificar l'energia com per disminuir-la. S'utilitza en sentit horari per amplificar l'energia (en casos de pèrdues d'equilibri, per exemple) o en sentit antihorari per reduir-la, com en els casos de Parkinson o de tics nerviosos, o en el cas d'un tumor o alteració que desitgem disminuir.",
          "Curiosamente, sirve tanto para amplificar la energía como para disminuirla. Se usa en sentido horario para amplificarla (en casos de pérdida de equilibrio, por ejemplo) o en sentido antihorario para reducirla, como en casos de Parkinson o de tics nerviosos, o en el de un tumor o alteración que deseemos disminuir.",
          "Curiously, it can both amplify energy and reduce it. Drawn clockwise it amplifies (for loss of balance, for example); drawn anticlockwise it reduces, as with Parkinson's or nervous tics, or a growth or disorder one wishes to lessen."
        ) },
        { p: t(
          "Aquest símbol es dibuixa amb el dit del cor o amb el palmell de la mà, però amb un sol traç. També es pot visualitzar mentalment.",
          "Este símbolo se dibuja con el dedo corazón o con la palma de la mano, pero de un solo trazo. También se puede visualizar mentalmente.",
          "It is drawn with the middle finger or the palm of the hand, in a single stroke. It can also be visualised in the mind."
        ) },
        { p: t(
          "El seu ús és simple: es traça una vegada i es recita el mantra tres vegades. El mantra es pot dir en molt baixa veu o mentalment. El farem servir sempre que necessitem abreujar el tractament, netejar un lloc o intensificar el treball sobre un òrgan, traçant-lo diverses vegades i recitant el mantra sobre el punt afectat.",
          "Su uso es sencillo: se traza una vez y se recita el mantra tres veces. El mantra puede decirse en voz muy baja o mentalmente. Lo usaremos siempre que necesitemos abreviar el tratamiento, limpiar un lugar o intensificar el trabajo sobre un órgano, trazándolo varias veces y recitando el mantra sobre el punto afectado.",
          "Using it is simple: draw it once and recite the mantra three times, very softly or in your head. It is used to shorten a treatment, cleanse a place, or focus work on an organ, by drawing it several times and reciting the mantra over the affected spot."
        ) },
        { h: t('Usos comuns del símbol', 'Usos comunes del símbolo', 'Common uses of the symbol') },
        { ul: [
          t("Alleujar dolors per traumatismes.", "Aliviar dolores por traumatismos.", "Easing pain from injuries."),
          t("Ampliar la capacitat de concentració, de «connectar-se a la terra».", "Ampliar la capacidad de concentración, de «conectarse a la tierra».", "Improving concentration, “grounding” yourself."),
          t("Millorar el poder de les nostres habilitats de curació.", "Mejorar el poder de nuestras habilidades de sanación.", "Strengthening one's healing abilities."),
          t("Traçar un espai al voltant de qui rep el tractament per frenar-hi les energies negatives.", "Trazar un espacio alrededor de quien recibe el tratamiento para frenar las energías negativas.", "Drawing a space around the person receiving treatment to keep negative energies away."),
          t("Netejar una habitació d'energies negatives, dibuixant o visualitzant el símbol a les portes, cantonades, sostre i terra; l'energia es mou en cercles i tendeix a concentrar-se a les cantonades.", "Limpiar una habitación de energías negativas, dibujando o visualizando el símbolo en puertas, esquinas, techo y suelo; la energía se mueve en círculos y tiende a concentrarse en las esquinas.", "Clearing a room of negative energy by drawing or visualising the symbol on doors, corners, ceiling and floor; energy moves in circles and gathers in corners."),
          t("Per netejar un lloc, es traça des del punt d'entrada mirant cap a l'interior; un cop dins, es traça sobre cada paret, el sostre i el terra per protegir i segellar.", "Para limpiar un lugar, se traza desde el punto de entrada mirando hacia el interior; una vez dentro, se traza sobre cada pared, el techo y el suelo para proteger y sellar.", "To cleanse a place, draw it at the entrance facing inwards; once inside, draw it on each wall, the ceiling and the floor to protect and seal."),
          t("Sobre els aliments i l'aigua, que, si estan desenergitzats, passen a ser saludables i curatius.", "Sobre los alimentos y el agua, que, si están desenergizados, pasan a ser saludables y curativos.", "Over food and water, which, if drained of energy, become wholesome and healing."),
          t("Sobre els medicaments, per potenciar-ne els efectes positius i minimitzar possibles efectes secundaris.", "Sobre los medicamentos, para potenciar sus efectos positivos y minimizar posibles efectos secundarios.", "Over medicines, to boost their good effects and lessen possible side effects."),
          t("En malestars que provenen de sentiments de ràbia, odi o tristesa que saturen.", "En malestares que provienen de sentimientos de rabia, odio o tristeza que saturan.", "For ailments that come from overwhelming anger, hatred or sadness."),
          t("Es recomana en tots els tractaments, i especialment els primers dies, per fer una neteja profunda. En resum, actua primordialment sobre el cos físic.", "Se recomienda en todos los tratamientos, y especialmente los primeros días, para hacer una limpieza profunda. En resumen, actúa sobre todo en el cuerpo físico.", "It is recommended in every treatment, especially in the first days, for a deep cleanse. In short, it works mainly on the physical body."),
          t("Per a l'autoprotecció i la protecció de la família, la casa, el vehicle, les portes i les finestres.", "Para la autoprotección y la protección de la familia, la casa, el vehículo, puertas y ventanas.", "For protecting yourself, your family, your home, your car, doors and windows."),
          t("Quan es té un pensament negatiu, s'ha de traçar immediatament.", "Cuando se tiene un pensamiento negativo, hay que trazarlo inmediatamente.", "Whenever a negative thought comes, draw it at once."),
          t("Per a la manifestació de l'abundància: es visualitza amb claredat el que es demana, procurant no violentar el lliure albir de ningú.", "Para la manifestación de la abundancia: se visualiza con claridad lo que se pide, procurando no violentar el libre albedrío de nadie.", "For bringing abundance: picture clearly what you are asking for, without forcing anyone's free will."),
        ] },
        { quote: t(
          "Demano això o el seu equivalent o alguna cosa millor, d'acord amb el lliure albir i sempre que no perjudiqui ningú i tot sigui pel bé.",
          "Pido esto o su equivalente o algo mejor, de acuerdo con el libre albedrío y siempre que no perjudique a nadie y todo sea para bien.",
          "I ask for this, or its equivalent, or something better, in keeping with free will, so long as it harms no one and all is for the good."
        ) },
        { note: t(
          "Aquest text recull la tradició del Reiki tal com apareix al llibre; no és consell mèdic.",
          "Este texto recoge la tradición del Reiki tal como aparece en el libro; no es consejo médico.",
          "This text records the Reiki tradition as it appears in the book; it is not medical advice."
        ) },
      ],
    },
    {
      id: 'yin-yang',
      title: t('Yin i yang', 'Yin y yang', 'Yin and yang'),
      pages: ['img-1107'],
      blocks: [
        { p: t(
          "Prové de la filosofia xinesa, tot i que es troba en gran part de la filosofia oriental. És un principi cosmològic que explica la dualitat de tot allò que existeix a l'univers. Cada cosa té el seu oposat, tot i que aquest no és absolut sinó relatiu, ja que res no és completament yin o completament yang.",
          "Proviene de la filosofía china, aunque se encuentra en gran parte de la filosofía oriental. Es un principio cosmológico que explica la dualidad de todo lo que existe en el universo. Cada cosa tiene su opuesto, aunque no absoluto sino relativo, ya que nada es completamente yin o completamente yang.",
          "It comes from Chinese philosophy, though it runs through much of Eastern thought. It is a cosmological principle that explains the duality of everything in the universe. Everything has its opposite, but not absolutely, only relatively, since nothing is entirely yin or entirely yang."
        ) },
        { p: t(
          "La complementarietat i l'equilibri s'aconsegueixen introduint part de l'un dins de l'altre, amb una línia central sinuosa de separació que vol significar l'alternança de forces. Tot el símbol està envoltat i tancat per un cercle que simbolitza el Tot. D'aquesta manera s'aconsegueix una total harmonia.",
          "La complementariedad y el equilibrio se consiguen introduciendo parte de uno dentro del otro, con una línea central sinuosa que significa la alternancia de fuerzas. Todo el símbolo está rodeado y cerrado por un círculo que simboliza el Todo. Así se logra una armonía total.",
          "Balance comes from placing a part of each inside the other, with a winding line between them that stands for the alternation of forces. A circle surrounds and closes the whole symbol, standing for the All. That is how complete harmony is reached."
        ) },
        { ul: [
          t("En el yin hi ha yang i en el yang hi ha yin: sempre hi ha l'un en l'altre.", "En el yin hay yang y en el yang hay yin: siempre está uno en el otro.", "There is yang in yin and yin in yang: each is always within the other."),
          t("Formen un equilibri dinàmic: quan l'un augmenta, l'altre disminueix. L'aigua líquida es transforma en vapor i s'eleva, però l'excés de vapor als núvols acaba provocant la pluja.", "Forman un equilibrio dinámico: cuando uno aumenta, el otro disminuye. El agua líquida se transforma en vapor y sube, pero el exceso de vapor en las nubes acaba provocando la lluvia.", "They form a dynamic balance: as one grows, the other shrinks. Water turns to vapour and rises, but too much vapour in the clouds ends up as rain."),
          t("Són interdependents: no poden existir l'un sense l'altre. El dia no pot existir sense la nit.", "Son interdependientes: no pueden existir uno sin el otro. El día no puede existir sin la noche.", "They depend on each other: neither can exist alone. There is no day without night."),
          t("Allò calent (yang) pot ser bullent o tebi; allò fred (yin) pot ser fresc o glaçat.", "Lo caliente (yang) puede ser hirviente o tibio; lo frío (yin) puede ser fresco o helado.", "What is hot (yang) can be boiling or lukewarm; what is cold (yin) can be cool or frozen."),
          t("Es transformen en els seus contraris: la nit es fa dia, l'escalfor es refreda, un naixement comporta una mort.", "Se transforman en sus contrarios: la noche se hace día, el calor se enfría, un nacimiento conlleva una muerte.", "They turn into their opposites: night becomes day, warmth cools, a birth brings a death."),
          t("S'oposen, però relativament: l'hivern s'oposa a l'estiu, encara que un dia d'estiu pugui ser fred.", "Se oponen, pero relativamente: el invierno se opone al verano, aunque un día de verano pueda ser frío.", "They oppose each other, but relatively: winter opposes summer, though a summer day can be cold."),
        ] },
      ],
    },
    {
      id: 'creu-solar',
      title: t('Creu solar', 'Cruz solar', 'Solar cross'),
      pages: ['img-1108'],
      blocks: [
        { p: t(
          "Probablement sigui el símbol religiós més antic del món, ja que apareix en religions asiàtiques, americanes, índies i europees, també les paganes. La combinació de la creu i el cercle és la representació més simple concebible de la unió de polaritats oposades.",
          "Probablemente sea el símbolo religioso más antiguo del mundo, ya que aparece en religiones asiáticas, americanas, indias y europeas, también las paganas. La combinación de la cruz y el círculo es la representación más simple concebible de la unión de polaridades opuestas.",
          "It may well be the oldest religious symbol in the world, found in Asian, American, Indian and European religions, pagan ones included. A cross within a circle is the simplest possible picture of opposite poles joined together."
        ) },
        { p: t(
          "Representa el sol, i cadascuna de les seves quatre parts correspon a una estació de l'any, els dos equinoccis i els dos solsticis, formant la Roda de l'Any; també els quatre elements (aire, foc, aigua i terra), les quatre direccions cardinals, els quatre vents…",
          "Representa el sol, y cada una de sus cuatro partes corresponde a una estación del año, los dos equinoccios y los dos solsticios, formando la Rueda del Año; también los cuatro elementos (aire, fuego, agua y tierra), las cuatro direcciones cardinales, los cuatro vientos…",
          "It stands for the sun, and each of its four parts is a season, the two equinoxes and two solstices that make up the Wheel of the Year; also the four elements (air, fire, water, earth), the four directions, the four winds…"
        ) },
        { p: t(
          "També parla de la contraposició dels oposats: terra-cel, vida-mort, amunt-avall, dreta-esquerra, actiu-passiu, femení (horitzontal) i masculí (vertical).",
          "También habla de la contraposición de opuestos: tierra-cielo, vida-muerte, arriba-abajo, derecha-izquierda, activo-pasivo, femenino (horizontal) y masculino (vertical).",
          "It also speaks of opposites set against each other: earth and sky, life and death, up and down, right and left, active and passive, feminine (horizontal) and masculine (vertical)."
        ) },
      ],
    },
    {
      id: 'trisquel',
      title: t('El trisquel', 'El trisquel', 'The triskele'),
      pages: ['img-1108', 'img-1109'],
      blocks: [
        { p: t(
          "El seu nom procedeix del celta bretó i significa «tres ales»: són tres hèlices que giren al voltant d'un eix. El tres és el nombre més sagrat per a la cultura celta, i representa la perfecció i l'equilibri.",
          "Su nombre procede del celta bretón y significa «tres alas»: son tres hélices que giran alrededor de un eje. El tres es el número más sagrado para la cultura celta, y representa la perfección y el equilibrio.",
          "Its name comes from Breton Celtic and means “three wings”: three spirals turning around a centre. Three is the most sacred number in Celtic culture, standing for perfection and balance."
        ) },
        { p: t(
          "És un símbol solar que indica els tres elements (aire, terra i aigua), les tres dimensions (alt, llarg i ample), els tres components de l'ésser (cos, esperit i ànima) o les tres èpoques de la vida (infant, jove i vell).",
          "Es un símbolo solar que indica los tres elementos (aire, tierra y agua), las tres dimensiones (alto, largo y ancho), los tres componentes del ser (cuerpo, espíritu y alma) o las tres épocas de la vida (niño, joven y viejo).",
          "It is a solar symbol for the three elements (air, earth and water), the three dimensions (height, length and width), the three parts of a being (body, spirit and soul), or the three ages of life (child, youth and old age)."
        ) },
        { p: t(
          "Era el símbol suprem dels druides, els únics que podien portar-lo; per a ells representava l'aprenentatge, el passat, el present i el futur. També representa l'equilibri entre cos, ment i esperit, el principi i la fi, l'evolució i el creixement. S'utilitzava per curar ferides i alleujar febres, i com a talismà, associat a la fertilitat, la renovació i la força vital.",
          "Era el símbolo supremo de los druidas, los únicos que podían llevarlo; para ellos representaba el aprendizaje, el pasado, el presente y el futuro. También representa el equilibrio entre cuerpo, mente y espíritu, el principio y el fin, la evolución y el crecimiento. Se usaba para curar heridas y aliviar fiebres, y como talismán, asociado a la fertilidad, la renovación y la fuerza vital.",
          "It was the druids' highest symbol, and only they could wear it; to them it meant learning, past, present and future. It also stands for the balance of body, mind and spirit, beginning and end, evolution and growth. It was used to heal wounds and ease fevers, and worn as a talisman of fertility, renewal and life force."
        ) },
        { p: t(
          "A Astúries, des de l'època medieval, els trisquels es tallaven o es pintaven a la fusta de les parets dels hórreos per protegir la collita que s'hi guardava.",
          "En Asturias, desde la época medieval, los trisqueles se tallaban o pintaban en la madera de las paredes de los hórreos para proteger la cosecha guardada.",
          "In Asturias, since medieval times, triskeles were carved or painted on the wooden walls of hórreos, the raised granaries, to protect the harvest stored inside."
        ) },
      ],
    },
    {
      id: 'reflexologia',
      title: t('Reflexologia podal', 'Reflexología podal', 'Foot reflexology'),
      pages: ['img-1109'],
      blocks: [
        { p: t(
          "Dos cercles de reflexologia podal, una estrella i una flor, ens conviden a descalçar-nos per regalar-nos un massatge per relaxar els peus.",
          "Dos círculos de reflexología podal, una estrella y una flor, nos invitan a descalzarnos para regalarnos un masaje que relaje los pies.",
          "Two foot-reflexology circles, a star and a flower, invite you to take your shoes off and treat your feet to a relaxing massage."
        ) },
        { p: t(
          "Un cartell ens ajudarà a observar les parts del cos més mancades d'energia, que els nostres peus delaten en evidenciar els punts més sensibles.",
          "Un cartel nos ayudará a observar las partes del cuerpo más faltas de energía, que nuestros pies delatan al mostrar los puntos más sensibles.",
          "A sign helps you notice which parts of the body are lowest in energy, which your feet give away through their most sensitive spots."
        ) },
      ],
    },
  ],
};
