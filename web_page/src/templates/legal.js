// The three legal pages linked from the footer: legal notice (Avís legal, LSSI-CE),
// privacy policy (GDPR / LOPDGDD) and cookie policy (LSSI art. 22.2).
// The site sells nothing, has no forms, accounts, analytics or ads; that is what these texts describe.
// Owner details come from OWNER in footer.js; missing ones show a visible [to fill] mark.

const { t, tx } = require('./i18n.js');
const { CONTACT, OWNER, LEGAL } = require('./footer.js');

const UPDATED = t('Última actualització: 18 de novembre de 2026', 'Última actualización: 18 de noviembre de 2026', 'Last updated: 18 November 2026');

// owner value, or a highlighted gap to fill in later (one per language)
const MISSING = {
  legalName: t('nom legal de l’associació', 'nombre legal de la asociación', 'legal name of the association'),
  nif: t('NIF', 'NIF', 'tax ID (NIF)'),
  address: t('adreça postal', 'dirección postal', 'postal address'),
  registry: t('número de registre', 'número de registro', 'registry number'),
};
const own = (key) => {
  if (OWNER[key]) return t(OWNER[key], OWNER[key], OWNER[key]);
  const m = MISSING[key];
  const mark = (s) => `<span class="to-fill">[${s}]</span>`;
  return t(mark('falta: ' + m.ca), mark('falta: ' + m.es), mark('to fill: ' + m.en));
};
// join pieces of t() objects / plain strings into one t()
const j = (...parts) => {
  const pick = (l) => parts.map((p) => (typeof p === 'string' ? p : p[l])).join('');
  return t(pick('ca'), pick('es'), pick('en'));
};

const mail = `<a href="mailto:${OWNER.email}">${OWNER.email}</a>`;
const page = (rel, key) => `<a href="${rel}${LEGAL[key].href}">`;

function ownerList() {
  const row = (dt, dd) => `${tx('dt', dt)}${tx('dd', dd)}`;
  return `<dl>
      ${row(t('Titular', 'Titular', 'Owner'), own('legalName'))}
      ${row(t('NIF', 'NIF', 'Tax ID (NIF)'), own('nif'))}
      ${row(t('Domicili', 'Domicilio', 'Registered address'), own('address'))}
      ${row(t('Registre', 'Registro', 'Registry'), j(t('Registre d’Associacions de la Generalitat de Catalunya, núm. ', 'Registro de Asociaciones de la Generalitat de Catalunya, n.º ', 'Register of Associations of the Generalitat de Catalunya, no. '), own('registry')))}
      ${row(t('Correu', 'Correo', 'Email'), t(mail, mail, mail))}
      ${row(t('Telèfon', 'Teléfono', 'Phone'), t(CONTACT.phone, CONTACT.phone, CONTACT.phone))}
    </dl>`;
}

const h = (ca, es, en) => tx('h2', t(ca, es, en));
const p = (ca, es, en) => tx('p', t(ca, es, en));
const li = (ca, es, en) => tx('li', t(ca, es, en));

function avis(rel) {
  return `
    ${tx('p', UPDATED, ' class="legal-date"')}
    ${h('Finalitat del lloc', 'Finalidad del sitio', 'Purpose of the site')}
    ${p('Aquest lloc web és informatiu: presenta l’associació, la residència d’artistes, el jardí, el museu i l’arxiu de El Xop · Les Vaqueres. No s’hi ven cap producte ni servei i no cal registrar-se per fer-lo servir.',
        'Este sitio web es informativo: presenta la asociación, la residencia de artistas, el jardín, el museo y el archivo de El Xop · Les Vaqueres. No se vende ningún producto ni servicio y no es necesario registrarse para usarlo.',
        'This website is for information only: it presents the association, the artist residency, the garden, the museum and the archive of El Xop · Les Vaqueres. Nothing is sold here and you do not need to register to use it.')}

    ${h('Condicions d’ús', 'Condiciones de uso', 'Terms of use')}
    ${p('En navegar pel lloc acceptes fer-ne un ús respectuós i d’acord amb la llei. No pots copiar-ne els continguts per a usos comercials ni fer res que en pugui danyar el funcionament.',
        'Al navegar por el sitio aceptas hacer un uso respetuoso y conforme a la ley. No puedes copiar sus contenidos para usos comerciales ni hacer nada que pueda dañar su funcionamiento.',
        'By browsing the site you agree to use it respectfully and lawfully. You may not copy its content for commercial use or do anything that could harm how it works.')}

    ${h('Propietat intel·lectual', 'Propiedad intelectual', 'Intellectual property')}
    ${p('Els textos, les fotografies, les il·lustracions, els llibres digitalitzats i el disseny d’aquest lloc pertanyen a l’associació o als seus autors. Pots citar-los o compartir-ne enllaços per a usos personals i educatius indicant-ne la font. Per a qualsevol altre ús, escriu-nos.',
        'Los textos, las fotografías, las ilustraciones, los libros digitalizados y el diseño de este sitio pertenecen a la asociación o a sus autores. Puedes citarlos o compartir enlaces para usos personales y educativos indicando la fuente. Para cualquier otro uso, escríbenos.',
        'The texts, photographs, illustrations, digitised books and design of this site belong to the association or to their authors. You may quote them or share links for personal and educational use, citing the source. For any other use, please write to us.')}
    ${p('Algunes imatges són d’altres autors i s’hi indica l’autor i la llicència al costat (per exemple, fotografies de Wikimedia Commons amb llicència Creative Commons, o el bàner del Museu Virtual de Tecnologia Agrària Tradicional, reproduït amb permís).',
        'Algunas imágenes son de otros autores y se indica al lado el autor y la licencia (por ejemplo, fotografías de Wikimedia Commons con licencia Creative Commons, o el banner del Museo Virtual de Tecnología Agraria Tradicional, reproducido con permiso).',
        'Some images are by other authors; the author and licence are shown next to them (for example, Wikimedia Commons photographs under Creative Commons licences, or the banner of the Virtual Museum of Traditional Farming Technology, used with permission).')}

    ${h('Enllaços a altres llocs', 'Enlaces a otros sitios', 'Links to other sites')}
    ${p('El lloc enllaça amb Instagram, Google Maps i altres webs. No som responsables dels seus continguts ni de les seves polítiques de privacitat.',
        'El sitio enlaza con Instagram, Google Maps y otras webs. No somos responsables de sus contenidos ni de sus políticas de privacidad.',
        'The site links to Instagram, Google Maps and other websites. We are not responsible for their content or their privacy policies.')}

    ${h('Responsabilitat', 'Responsabilidad', 'Liability')}
    ${p('Procurem que la informació sigui correcta i estigui al dia, però pot contenir errors o canviar sense avís. L’associació no es fa responsable dels danys que en pugui causar l’ús.',
        'Procuramos que la información sea correcta y esté al día, pero puede contener errores o cambiar sin aviso. La asociación no se hace responsable de los daños que pueda causar su uso.',
        'We try to keep the information correct and up to date, but it may contain errors or change without notice. The association is not liable for any harm caused by its use.')}

    ${h('Dades personals i galetes', 'Datos personales y cookies', 'Personal data and cookies')}
    ${tx('p', t(
      `Com tractem les dades s’explica a la ${page(rel, 'privacitat')}Política de privacitat</a> i l’ús de galetes a la ${page(rel, 'cookies')}Política de galetes</a>.`,
      `Cómo tratamos los datos se explica en la ${page(rel, 'privacitat')}Política de privacidad</a> y el uso de cookies en la ${page(rel, 'cookies')}Política de cookies</a>.`,
      `How we handle data is explained in the ${page(rel, 'privacitat')}Privacy policy</a>, and the use of cookies in the ${page(rel, 'cookies')}Cookie policy</a>.`))}

    ${h('Llei aplicable', 'Ley aplicable', 'Applicable law')}
    ${p('Aquest avís es regeix per la llei espanyola. Per a qualsevol conflicte, i si la llei no en disposa una altra cosa, són competents els jutjats i tribunals de Lleida.',
        'Este aviso se rige por la ley española. Para cualquier conflicto, y salvo que la ley disponga otra cosa, son competentes los juzgados y tribunales de Lleida.',
        'This notice is governed by Spanish law. Unless the law provides otherwise, any dispute will be heard by the courts of Lleida.')}`;
}

function privacitat(rel) {
  return `
    ${tx('p', UPDATED, ' class="legal-date"')}
    ${p('Aquest lloc no té formularis, comptes d’usuari, estadístiques de visites ni publicitat. Gairebé no tractem dades personals; aquí t’expliquem les poques situacions en què passa.',
        'Este sitio no tiene formularios, cuentas de usuario, estadísticas de visitas ni publicidad. Apenas tratamos datos personales; aquí te explicamos las pocas situaciones en que ocurre.',
        'This site has no forms, user accounts, visitor statistics or advertising. We handle almost no personal data; here are the few situations where it happens.')}

    ${h('Si ens escrius o ens truques', 'Si nos escribes o nos llamas', 'If you email or call us')}
    ${p('Si ens contactes per correu electrònic o per telèfon, fem servir el teu nom, el teu contacte i el que ens expliquis només per respondre’t. La base legal és el teu consentiment i el nostre interès legítim a atendre la consulta. Guardem el missatge el temps necessari per resoldre-la i, com a màxim, un any. No ho cedim a ningú.',
        'Si nos contactas por correo electrónico o por teléfono, usamos tu nombre, tu contacto y lo que nos cuentes solo para responderte. La base legal es tu consentimiento y nuestro interés legítimo en atender la consulta. Guardamos el mensaje el tiempo necesario para resolverla y, como máximo, un año. No lo cedemos a nadie.',
        'If you contact us by email or phone, we use your name, your contact details and what you tell us only to reply to you. The legal basis is your consent and our legitimate interest in answering your query. We keep the message as long as needed to deal with it, and at most one year. We do not share it with anyone.')}

    ${h('Quan visites el lloc', 'Cuando visitas el sitio', 'When you visit the site')}
    ${p('El servidor que allotja el lloc pot registrar dades tècniques de cada visita (adreça IP, navegador, pàgina i hora) per motius de seguretat. Aquests registres es guarden poc temps i no s’utilitzen per identificar-te.',
        'El servidor que aloja el sitio puede registrar datos técnicos de cada visita (dirección IP, navegador, página y hora) por motivos de seguridad. Estos registros se guardan poco tiempo y no se usan para identificarte.',
        'The server hosting the site may log technical data about each visit (IP address, browser, page and time) for security. These logs are kept briefly and are not used to identify you.')}
    ${p('Les fonts tipogràfiques i totes les imatges se serveixen des del mateix lloc: en carregar les pàgines no es contacta cap altre servei.',
        'Las fuentes tipográficas y todas las imágenes se sirven desde el propio sitio: al cargar las páginas no se contacta ningún otro servicio.',
        'Fonts and all images are served from this site itself: loading the pages does not contact any other service.')}

    ${h('Serveis de tercers', 'Servicios de terceros', 'Third-party services')}
    <ul>
      ${li('<strong>Google Maps.</strong> El mapa del peu de pàgina només es carrega si prems «Mostra el mapa». Llavors Google (Google Ireland Ltd.) rep la teva adreça IP i pot desar galetes, segons la seva <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacitat</a>. Si no el carregues, Google no rep res.',
           '<strong>Google Maps.</strong> El mapa del pie de página solo se carga si pulsas «Mostrar el mapa». Entonces Google (Google Ireland Ltd.) recibe tu dirección IP y puede guardar cookies, según su <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">política de privacidad</a>. Si no lo cargas, Google no recibe nada.',
           '<strong>Google Maps.</strong> The map in the footer loads only if you press “Show map”. Google (Google Ireland Ltd.) then receives your IP address and may set cookies, under its <a href="https://policies.google.com/privacy" target="_blank" rel="noopener">privacy policy</a>. If you do not load it, Google receives nothing.')}
      ${li('<strong>Instagram.</strong> La targeta d’Instagram és només un enllaç amb imatges desades en aquest lloc. Instagram (Meta) no rep cap dada fins que hi fas clic i obres el seu web.',
           '<strong>Instagram.</strong> La tarjeta de Instagram es solo un enlace con imágenes guardadas en este sitio. Instagram (Meta) no recibe ningún dato hasta que haces clic y abres su web.',
           '<strong>Instagram.</strong> The Instagram card is only a link with images stored on this site. Instagram (Meta) receives no data until you click it and open their website.')}
    </ul>

    ${h('Els teus drets', 'Tus derechos', 'Your rights')}
    ${tx('p', t(
      `Pots demanar l’accés, la rectificació, la supressió, la limitació o la portabilitat de les teves dades, o oposar-te al seu tractament, escrivint a ${mail}. Si creus que no les hem tractat bé, pots reclamar a l’Agència Espanyola de Protecció de Dades (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).`,
      `Puedes solicitar el acceso, la rectificación, la supresión, la limitación o la portabilidad de tus datos, u oponerte a su tratamiento, escribiendo a ${mail}. Si crees que no los hemos tratado bien, puedes reclamar ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).`,
      `You can ask to access, correct, delete, restrict or port your data, or object to its use, by writing to ${mail}. If you think we have not handled it properly, you can complain to the Spanish Data Protection Agency (<a href="https://www.aepd.es" target="_blank" rel="noopener">www.aepd.es</a>).`))}`;
}

function cookies(rel) {
  return `
    ${tx('p', UPDATED, ' class="legal-date"')}
    ${p('Les galetes (cookies) són petits fitxers que un web desa al teu navegador. Aquest lloc no en fa servir cap: ni d’estadístiques, ni de publicitat, ni de xarxes socials. Per això no et demanem cap consentiment en entrar.',
        'Las cookies son pequeños archivos que una web guarda en tu navegador. Este sitio no usa ninguna: ni de estadísticas, ni de publicidad, ni de redes sociales. Por eso no te pedimos ningún consentimiento al entrar.',
        'Cookies are small files a website stores in your browser. This site uses none: no statistics, advertising or social-media cookies. That is why we do not ask for your consent when you arrive.')}

    ${h('L’idioma que tries', 'El idioma que eliges', 'The language you choose')}
    ${p('Si tries un idioma al menú, el navegador el recorda (amb l’emmagatzematge local, «localStorage», no amb una galeta) perquè les altres pàgines s’obrin en aquest idioma. Només es desa si el tries tu, no surt mai del teu dispositiu i és necessari per al servei que demanes, de manera que no requereix consentiment.',
        'Si eliges un idioma en el menú, el navegador lo recuerda (con el almacenamiento local, «localStorage», no con una cookie) para que las demás páginas se abran en ese idioma. Solo se guarda si lo eliges tú, nunca sale de tu dispositivo y es necesario para el servicio que pides, por lo que no requiere consentimiento.',
        'If you choose a language from the menu, your browser remembers it (using local storage, “localStorage”, not a cookie) so the other pages open in that language. It is saved only if you choose it, never leaves your device and is needed for the service you asked for, so it does not require consent.')}

    ${h('Google Maps', 'Google Maps', 'Google Maps')}
    ${p('El mapa del peu de pàgina no es carrega fins que prems «Mostra el mapa». Si ho fas, Google pot desar les seves pròpies galetes al teu navegador. Prémer el botó és la teva decisió: si no el prems, no se’n desa cap.',
        'El mapa del pie de página no se carga hasta que pulsas «Mostrar el mapa». Si lo haces, Google puede guardar sus propias cookies en tu navegador. Pulsar el botón es tu decisión: si no lo pulsas, no se guarda ninguna.',
        'The footer map does not load until you press “Show map”. If you do, Google may store its own cookies in your browser. Pressing the button is your choice: if you do not press it, none are stored.')}
    ${tx('p', t(
      'Més informació: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">com fa servir Google les galetes</a>.',
      'Más información: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">cómo usa Google las cookies</a>.',
      'More information: <a href="https://policies.google.com/technologies/cookies" target="_blank" rel="noopener">how Google uses cookies</a>.'))}

    ${h('Com esborrar-les', 'Cómo borrarlas', 'How to delete them')}
    ${p('Pots esborrar les galetes i les dades desades dels llocs web des de la configuració de privacitat del teu navegador en qualsevol moment.',
        'Puedes borrar las cookies y los datos guardados de los sitios web desde la configuración de privacidad de tu navegador en cualquier momento.',
        'You can delete cookies and stored site data at any time from your browser’s privacy settings.')}
    ${tx('p', t(
      `Més detalls sobre les dades a la ${page(rel, 'privacitat')}Política de privacitat</a>.`,
      `Más detalles sobre los datos en la ${page(rel, 'privacitat')}Política de privacidad</a>.`,
      `More about data in the ${page(rel, 'privacitat')}Privacy policy</a>.`))}`;
}

module.exports = { avis, privacitat, cookies };
