// El Passeig dels Plataners — recreated pages.
// Source photos: books/Laberint Dels Símbols/IMG_1120 (cover) + books/EL PASSEIG DELS PLATANERS (IMG_1100–IMG_1109)
const { t, from, html } = require('./_helpers.js');
const B = from('passeig');

const terms = B.block('passeig', 6).terms;
const uses = B.block('choku-rei', 5).ul;
const yy = B.block('yin-yang', 2).ul;

module.exports = {
  slug: 'el-passeig-dels-plataners',
  orient: 'landscape',
  source: 'books/EL PASSEIG DELS PLATANERS',
  pages: [
    {
      id: 'IMG_1120',
      items: [
        { type: 'pic', name: 'cover-illustration', box: [3, 3, 97.5, 99], shape: 'rect', refine: false,
          alt: t("Portada il·lustrada a mà: «Passeig dels Plataners, Laberint dels Símbols», amb el plànol del laberint i la llegenda dels símbols (espais de reflexologia, creu, yin i yang, trisquel, choku-rei)",
            'Portada ilustrada a mano: «Passeig dels Plataners, Laberint dels Símbols», con el plano del laberinto y la leyenda de los símbolos (espacios de reflexología, cruz, yin y yang, trisquel, choku-rei)',
            'Hand-illustrated cover: “Passeig dels Plataners, Laberint dels Símbols” (the plane-tree walk, labyrinth of symbols), with the labyrinth plan and a key to its symbols: reflexology circles, cross, yin and yang, triskele, choku-rei') },
      ],
    },
    {
      id: 'IMG_1100',
      items: [
        { type: 'pic', name: 'walk-in-winter', box: [7.6, 5.2, 94, 96], shape: 'rect', refine: false, faded: true, decorative: true,
          inpaint: [{ box: [8, 6, 93.5, 95.5], mode: 'dark' }] },
        { type: 'title', font: 'mali-italic', box: [10, 8, 80, 16], size: 4.6, align: 'left',
          text: t('EL PASSEIG DELS PLATANERS', 'EL PASEO DE LOS PLÁTANOS', 'THE PLANE-TREE WALK') },
        { type: 'text', font: 'carlito', bold: true, small: true, box: [10, 19, 93, 95], size: 1.95,
          text: html(B.p('passeig', 0), B.p('passeig', 1), B.p('passeig', 2), B.p('passeig', 3), B.p('passeig', 5),
            { dl: terms }) },
      ],
    },
    {
      id: 'IMG_1101',
      items: [
        { type: 'title', font: 'courgette', box: [20, 3, 92, 16], size: 6.6, color: '#5b2a2c',
          text: t('Laberint de la vida', 'Laberinto de la vida', 'The labyrinth of life') },
        { type: 'title', font: 'courgette', box: [20, 22, 92, 31], size: 4.2, color: '#4c4a35',
          text: t('(Laberint dels símbols)', '(Laberinto de los símbolos)', '(The labyrinth of symbols)') },
        { type: 'pic', name: 'labyrinth-plan', box: [3.6, 32, 97, 67.6], shape: 'rect', refine: false,
          alt: t('Plànol pintat del laberint de la vida, amb les espirals i els símbols', 'Plano pintado del laberinto de la vida, con las espirales y los símbolos', 'Painted plan of the labyrinth of life, with its spirals and symbols') },
        { type: 'text', font: 'carlito', box: [7, 69, 95, 99], size: 2.0,
          text: html(B.p('laberint-de-la-vida', 1), B.p('laberint-de-la-vida', 2), B.p('laberint-de-la-vida', 3)) },
      ],
    },
    {
      id: 'IMG_1102',
      items: [
        { type: 'pic', name: 'building-marking-out', box: [6.8, 14.2, 35.3, 39.4], shape: 'rect', refine: false,
          alt: t('Marcant el traçat del laberint al terra', 'Marcando el trazado del laberinto en el suelo', 'Marking out the labyrinth on the ground') },
        { type: 'pic', name: 'building-dug-path', box: [35.7, 14.2, 63.6, 39.4], shape: 'rect', refine: false,
          alt: t('Dues persones dins del camí excavat, al capvespre', 'Dos personas dentro del camino excavado, al atardecer', 'Two people standing in the dug path at sunset') },
        { type: 'pic', name: 'building-finished', box: [64.1, 14.2, 92, 39.4], shape: 'rect', refine: false,
          alt: t('El laberint acabat, amb les vores de pedra', 'El laberinto terminado, con los bordes de piedra', 'The finished labyrinth with its stone edges') },
        { type: 'pic', name: 'design-sketch', box: [6, 40, 93, 86], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('El dibuix original a llapis del laberint', 'El dibujo original a lápiz del laberinto', 'The original pencil drawing of the labyrinth') },
      ],
    },
    {
      id: 'IMG_1103',
      items: [
        { type: 'title', font: 'garamond', box: [60, 15, 92, 23], size: 3.6, align: 'left', text: t('SIMBOLOGIA', 'SIMBOLOGÍA', 'SYMBOLS') },
        { type: 'pic', name: 'rock-carving', box: [7, 19.5, 41, 40], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('Dibuix d\'un gravat rupestre prehistòric amb cercles, espirals i creus', 'Dibujo de un grabado rupestre prehistórico con círculos, espirales y cruces', 'Drawing of a prehistoric rock carving with circles, spirals and crosses') },
        { type: 'text', font: 'garamond', box: [41.5, 34, 64, 41], size: 1.5,
          text: html(t('Gravat rupestre prehistòric', 'Grabado rupestre prehistórico', 'Prehistoric rock carving'), t('Portela da Laxe. Viascón. Pontevedra', 'Portela da Laxe. Viascón. Pontevedra', 'Portela da Laxe. Viascón. Pontevedra')) },
        { type: 'pic', name: 'symbols-sketch', box: [5, 40.5, 92, 87], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('El dibuix del laberint amb els símbols dibuixats als seus llocs', 'El dibujo del laberinto con los símbolos dibujados en su sitio', 'The labyrinth drawing with the symbols drawn in place') },
      ],
    },
    {
      id: 'IMG_1104',
      items: [
        { type: 'pic', name: 'saqqara-relief', box: [10, 11, 49, 40], shape: 'rect', refine: false,
          inpaint: [{ box: [38.5, 36, 50, 40.5], mode: 'dark' }],
          alt: t('Relleu egipci de Saqqara: dos metges fan massatge als peus i a les mans de dos pacients', 'Relieve egipcio de Saqqara: dos médicos dan masaje en los pies y las manos de dos pacientes', 'Egyptian relief from Saqqara: two physicians massaging the feet and hands of two patients') },
        { type: 'text', font: 'garamond', box: [33, 35.6, 50, 40.2], size: 1.45, color: '#111',
          text: html(t('SAKKARAH', 'SAKKARAH', 'SAQQARA'), t('La tomba del gran metge', 'La tumba del gran médico', 'Tomb of the great physician')) },
        { type: 'title', font: 'garamond', box: [52, 22, 90, 30], size: 3.4, align: 'left', text: t('RACÓ DE REFLEXOLOGIA', 'RINCÓN DE REFLEXOLOGÍA', 'REFLEXOLOGY CORNER') },
        { type: 'pic', name: 'reflexology-sketch', box: [9, 40.5, 88, 84], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('El dibuix del laberint amb els dos cercles de reflexologia acolorits', 'El dibujo del laberinto con los dos círculos de reflexología coloreados', 'The labyrinth drawing with the two reflexology circles coloured in') },
      ],
    },
    {
      id: 'IMG_1105',
      items: [
        { type: 'title', font: 'mali-italic', box: [30, 2.5, 75, 10], size: 3.6, text: t('ELS SÍMBOLS', 'LOS SÍMBOLOS', 'THE SYMBOLS') },
        { type: 'label', font: 'courgette', at: [10, 13.6], size: 2, underline: true, bold: true, text: t('Cho ku rei', 'Cho ku rei', 'Cho ku rei') },
        { type: 'text', font: 'carlito', box: [8.5, 18.5, 75, 62], size: 2.0,
          text: html(B.p('choku-rei', 0), B.p('choku-rei', 1), B.p('choku-rei', 2), B.p('choku-rei', 3)) },
        { type: 'pic', name: 'choku-rei-symbol', box: [76, 28, 89, 53], shape: 'rect', refine: false, blend: 'multiply',
          alt: t('El símbol Cho ku rei, amb l\'ordre dels traços', 'El símbolo Cho ku rei, con el orden de los trazos', 'The Cho ku rei symbol, with its stroke order') },
        { type: 'text', font: 'carlito', box: [8.5, 62, 93, 92], size: 2.0,
          text: html({ rawp: t('<u>USOS comuns del símbol</u>', '<u>USOS comunes del símbolo</u>', '<u>Common USES of the symbol</u>') },
            t("En actuar en el pla físic, el seu ús no s'estén només a les malalties que poguessin patir els pacients, sinó que s'amplia als traumatismes que hagin pogut patir.",
              'Al actuar en el plano físico, su uso no se limita a las enfermedades que pudieran sufrir los pacientes, sino que se amplía a los traumatismos que hayan podido sufrir.',
              'Because it works on the physical level, it is used not only for illnesses patients may have but also for injuries they may have suffered.'),
            { ul: uses.slice(0, 3) }) },
      ],
    },
    {
      id: 'IMG_1106',
      items: [
        { type: 'text', font: 'carlito', box: [10, 5, 94, 20.5], size: 2.0,
          text: html({ rawp: t("<u>El seu ús no es limita només a la dimensió física individual, sinó també a l'espai que envolta la persona</u>, i per això:",
              '<u>Su uso no se limita solo a la dimensión física individual, sino también al espacio que rodea a la persona</u>, y por eso:',
              '<u>Its use is not limited to the individual’s physical body but extends to the space around the person</u>, and so:') },
            { ul: [uses[3], uses[4]] }) },
        { type: 'pic', name: 'choku-rei-pebbles', box: [10.6, 21.5, 29.6, 48], shape: 'rect', refine: false,
          alt: t('El Cho ku rei fet amb còdols al laberint', 'El Cho ku rei hecho con cantos rodados en el laberinto', 'The Cho ku rei laid in pebbles in the labyrinth') },
        { type: 'text', font: 'carlito', box: [32, 21, 94, 49], size: 2.0, text: html({ ul: [uses[6], uses[7], uses[5]] }) },
        { type: 'text', font: 'carlito', box: [10, 49.5, 95, 80], size: 2.0,
          text: html({ ul: [uses[10], uses[8], uses[11], uses[9], uses[12]] }), },
        { type: 'text', font: 'carlito', box: [10, 80.5, 95, 98], size: 1.9,
          text: html({ verse: B.block('choku-rei', 6).quote }, { raw: (() => { const n = B.block('choku-rei', 7).note; return { ca: `<p class="fb-note">${n.ca}</p>`, es: `<p class="fb-note">${n.es}</p>`, en: `<p class="fb-note">${n.en}</p>` }; })() }) },
      ],
    },
    {
      id: 'IMG_1107',
      items: [
        { type: 'label', font: 'courgette', at: [9, 7.2], size: 2, underline: true, bold: true, text: t('Yin i Yang', 'Yin y Yang', 'Yin and Yang') },
        { type: 'text', font: 'carlito', box: [8.5, 13, 66, 49], size: 2.0, text: html(B.p('yin-yang', 0), B.p('yin-yang', 1)) },
        { type: 'pic', name: 'yin-yang-pebbles', box: [67, 13, 92.4, 42.4], shape: 'rect', refine: false,
          alt: t('El yin i el yang fets amb còdols blancs i negres', 'El yin y el yang hechos con cantos rodados blancos y negros', 'Yin and yang laid in white and black pebbles') },
        { type: 'text', font: 'carlito', box: [8.5, 49, 95, 98], size: 2.0, text: html({ ul: yy }) },
      ],
    },
    {
      id: 'IMG_1108',
      items: [
        { type: 'label', font: 'courgette', at: [9.5, 7.6], size: 2, underline: true, bold: true, text: t('Creu solar', 'Cruz solar', 'Solar cross') },
        { type: 'pic', name: 'solar-cross-pebbles', box: [9.6, 14, 30.6, 44.6], shape: 'rect', refine: false,
          alt: t('La creu solar feta de mosaic', 'La cruz solar hecha de mosaico', 'The solar cross in mosaic') },
        { type: 'text', font: 'carlito', box: [32, 13.5, 92, 53], size: 2.0, text: html(B.p('creu-solar', 0), B.p('creu-solar', 1), B.p('creu-solar', 2)) },
        { type: 'label', font: 'courgette', at: [9.5, 57.4], size: 2, underline: true, bold: true, text: t('El trisquel .-', 'El trisquel .-', 'The triskele .-') },
        { type: 'text', font: 'carlito', box: [9.5, 63.5, 68.5, 97], size: 2.0, text: html(B.p('trisquel', 0), B.p('trisquel', 1)) },
        { type: 'pic', name: 'triskele-pebbles', box: [70, 64.6, 90.6, 91], shape: 'rect', refine: false,
          alt: t('El trisquel fet de mosaic', 'El trisquel hecho de mosaico', 'The triskele in mosaic') },
      ],
    },
    {
      id: 'IMG_1109',
      items: [
        { type: 'text', font: 'carlito', box: [10, 1.5, 90, 22], size: 2.0, text: html(B.p('trisquel', 2), B.p('trisquel', 3)) },
        { type: 'title', font: 'mali-italic', box: [17, 26, 68, 35], size: 4.2, underline: true, text: t('REFLEXOLOGIA PODAL', 'REFLEXOLOGÍA PODAL', 'FOOT REFLEXOLOGY') },
        { type: 'text', font: 'carlito', box: [10, 39, 90, 55], size: 2.0, text: html(B.p('reflexologia', 0), B.p('reflexologia', 1)) },
        { type: 'pic', name: 'reflexology-star', box: [10.2, 56.8, 40.6, 84.4], shape: 'rect', refine: false,
          alt: t('El cercle de reflexologia en forma d\'estrella, fet de còdols', 'El círculo de reflexología en forma de estrella, hecho de cantos rodados', 'The star-shaped reflexology circle, laid in pebbles') },
        { type: 'pic', name: 'reflexology-flower', box: [48, 56.8, 81, 84.8], shape: 'rect', refine: false,
          alt: t('El cercle de reflexologia en forma de flor, fet de còdols', 'El círculo de reflexología en forma de flor, hecho de cantos rodados', 'The flower-shaped reflexology circle, laid in pebbles') },
      ],
    },
  ],
};
