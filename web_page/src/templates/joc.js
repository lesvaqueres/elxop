// "Joc de l'Horta" page: the game board (download / print) and the rules, from the association's Game.docx.
// Print styles (board only, one sheet) are in main.css under "joc de l'horta"; the print button is in main.js.

const { t, tx, PAGES } = require('./layout.js');

const BOARD = 'assets/images/joc/joc-de-l-horta-board.jpg';
const DOWNLOAD = 'assets/downloads/joc-de-l-horta.png'; // the original, uncompressed picture
const ICON = (d) => `<svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="${d}"/></svg>`;
const ALT = t(
  "Tauler d'El joc de l'Horta: una espiral de 63 caselles amb fotografies i galls, i el gall Coc al centre",
  'Tablero de El juego de la Huerta: una espiral de 63 casillas con fotografías y gallos, y el gallo Coc en el centro',
  'Board of the Horta Game: a spiral of 63 squares with photographs and roosters, and Coc the rooster in the centre');

const INTRO = t(
  'Aquest joc de l’Horta és una adaptació del clàssic “joc de l’oca”. En aquest cas, en lloc de ser l’oca la protagonista, és un gall: el Coc.',
  'Este juego de la Huerta es una adaptación del clásico “juego de la oca”. En este caso, en lugar de ser la oca la protagonista, es un gallo: el Coc.',
  'This Horta game is an adaptation of the classic “Game of the Goose”. Here the main character is not a goose but a rooster: Coc.');

const RULES = [
  t('És un joc de taula per jugar-hi entre dues i quatre persones.',
    'Es un juego de mesa para jugar entre dos y cuatro personas.',
    'It is a board game for two to four players.'),
  t('Els jugadors, per torn, tiren un dau, i cadascun avança tantes caselles com punts. Quan un jugador arriba a la casella 63 amb els punts exactes (sense punts sobrants), es considera que ha completat el seu recorregut i ha guanyat. Si hi arriba amb punts sobrants, compta tantes caselles cap enrere des de la 63 com punts li han sobrat.',
    'Los jugadores, por turnos, tiran un dado, y cada uno avanza tantas casillas como puntos. Cuando un jugador llega a la casilla 63 con los puntos exactos (sin puntos sobrantes), se considera que ha completado su recorrido y ha ganado. Si llega con puntos sobrantes, cuenta tantas casillas hacia atrás desde la 63 como puntos le han sobrado.',
    'Players take turns to roll one die and move forward as many squares as the points rolled. A player who reaches square 63 with the exact number of points (none left over) has completed the route and wins. A player who arrives with points left over counts that many squares back from 63.'),
];

// [what happens, the saying]
const SPECIAL = [
  [t('Si caus al Coc, passes al següent Coc i tornes a tirar:', 'Si caes en el Coc, pasas al siguiente Coc y vuelves a tirar:', 'If you land on a Coc, move on to the next Coc and roll again:'),
   t('“de Coc a Coc i tiro un altre cop”', '“de Coc a Coc y tiro otra vez”', '“from Coc to Coc, and I roll once more”')],
  [t('Si caus a la casella 6, passes a la 12, i si caus a la casella 12, passes a la 6:', 'Si caes en la casilla 6, pasas a la 12, y si caes en la casilla 12, pasas a la 6:', 'If you land on square 6, go to 12; if you land on square 12, go to 6:'),
   t('“de canal a braçal hi vaig d’un salt”', '“de canal a brazal voy de un salto”', '“from canal to ditch I go in one leap”')],
  [t('Si caus a la casella 19, perds tres torns:', 'Si caes en la casilla 19, pierdes tres turnos:', 'If you land on square 19, you miss three turns:'),
   t('“el Xop, casa de natura, el teu camí atura”', '“el Xop, casa de natura, detiene tu camino”', '“el Xop, house of nature, halts you on your way”')],
  [t('Si caus a la casella 26, passes a la 53:', 'Si caes en la casilla 26, pasas a la 53:', 'If you land on square 26, go to 53:'),
   t('“amb bona pluja, puja”', '“con buena lluvia, sube”', '“with good rain, rise”')],
  [t('Si caus a la casella 31, t’hi quedes fins que un altre hi caigui:', 'Si caes en la casilla 31, te quedas hasta que otro caiga en ella:', 'If you land on square 31, you stay there until another player lands on it:'),
   t('“al pou profund, espera la llum”', '“en el pozo profundo, espera la luz”', '“in the deep well, wait for the light”')],
  [t('Si caus a la casella 52, perds tres torns:', 'Si caes en la casilla 52, pierdes tres turnos:', 'If you land on square 52, you miss three turns:'),
   t('“pels camins de l’horta hi faig una volta”', '“por los caminos de la huerta doy una vuelta”', '“along the paths of the Horta I take a stroll”')],
  [t('Si caus a la casella 53, passes a la 26:', 'Si caes en la casilla 53, pasas a la 26:', 'If you land on square 53, go to 26:'),
   t('“pedra, tot i ser petita, fa malbé la collita”', '“el granizo, aunque sea pequeño, echa a perder la cosecha”', '“hail, however small, spoils the harvest”')],
  [t('Si caus a la 57, tornes a començar:', 'Si caes en la 57, vuelves a empezar:', 'If you land on 57, you start again:'),
   t('“l’arbre sense vida et fa començar altre cop la partida”', '“el árbol sin vida te hace empezar otra vez la partida”', '“the lifeless tree makes you start the game again”')],
];

const body = () => `  <section class="page-head wrap">
    ${tx('h1', PAGES.joc.title)}
    ${tx('p', INTRO, ' class="lead"')}
  </section>
  <section class="joc wrap">
    <div class="joc-board">
      <img class="joc-img" src="${BOARD}" alt="${ALT.en}" data-ca-alt="${ALT.ca}" data-es-alt="${ALT.es}" width="1024" height="1024">
      <div class="joc-actions">
        <a class="joc-btn" href="${DOWNLOAD}" download>${ICON('M12 4v11M7 10.5l5 5 5-5M5 20h14')}${tx('span', t('Descarrega el tauler', 'Descargar el tablero', 'Download the board'))}</a>
        <button class="joc-btn joc-print" type="button" hidden>${ICON('M7 9V4h10v5M7 17H4V9h16v8h-3M7 14h10v6H7z')}${tx('span', t('Imprimeix el tauler', 'Imprimir el tablero', 'Print the board'))}</button>
      </div>
    </div>
    <div class="joc-rules">
      ${tx('h2', t('Com es juga', 'Cómo se juega', 'How to play'))}
      ${RULES.map((r) => tx('p', r)).join('\n      ')}
      ${tx('h2', t('Caselles especials', 'Casillas especiales', 'Special squares'))}
      ${tx('p', t('Hi ha caselles especials, que cal tenir en compte (remarcades en roig).', 'Hay casillas especiales que hay que tener en cuenta (marcadas en rojo).', 'There are special squares to watch out for (outlined in red).'))}
      <ul class="joc-special">
${SPECIAL.map(([r, s]) => `        <li>${tx('span', r)} ${tx('em', s)}</li>`).join('\n')}
      </ul>
    </div>
  </section>`;

module.exports = { body };
