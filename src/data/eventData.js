export const event = {
  name: 'SAURORAA',
  tagline: 'Stronger & Better',
  date: '2026-03-28T20:00:00',
  dateDisplay: '28 Mars 2026',
  horaires: '20h00 — 06h00',
  style: 'Jump-Up / Drum & Bass',
  ageMin: '16+',
  lieu: {
    nom: 'Palais des Congrès de Liège',
    adresse: 'Esplanade de l\'Europe 2, 4020 Liège',
    maps: 'https://maps.google.com/?q=Palais+des+Congrès+de+Liège',
  },
  tarifs: [
    { nom: 'Vague 1 (Super Early)', prix: '15,00\u20AC', status: 'En vente', description: '50 places' },
    { nom: 'Vague 2 (Early)', prix: '20,00\u20AC', status: 'Bientôt', description: '50 places' },
    { nom: 'Vague 3 (Regular)', prix: '25,00\u20AC', status: 'Bientôt', description: '50 places' },
  ],
  weezevent: {
    url: 'https://widget.weezevent.com/ticket/E1369359/?code=23980&locale=fr-FR&width_auto=1&color_primary=E10600',
    id: '1369359',
  },
}

export const lineup = {
  revealed: true,
  // Times hidden until this date — auto-reveal on March 27
  timesRevealDate: '2026-03-27T00:00:00',
  mcs: ['MC Mitch', 'MC Drivah', 'MC Dinoo', 'MC Deks'],
  artists: [
    // Opening / Support
    { time: '20h00 - 20h45', name: 'SCK B2B Gygzer B2B Foxtrot', tag: null,              tier: 'support' },
    { time: '20h45 - 21h30', name: 'Erbmos',                       tag: 'SOLO SET',        tier: 'support' },
    { time: '21h30 - 22h15', name: 'Chamber B2B Big Jay G',         tag: null,              tier: 'support' },
    // Showcases
    { time: '22h15 - 23h00', name: 'Dyna / Skiff / Popsatx',       tag: 'EQUINOXX',        tier: 'showcase' },
    { time: '23h00 - 23h45', name: 'Trouxa / Hyptic / Arte',        tag: 'UNDERGROUND WAVES', tier: 'showcase' },
    { time: '23h45 - 00h30', name: 'Kuranko / Yazmin C / Shredz',   tag: 'MONO AUDIO',      tier: 'showcase' },
    { time: '00h30 - 01h15', name: 'Sero B2B Sedativ B2B Matox B2B Zequals', tag: 'SAURORAA', tier: 'showcase' },
    // Main acts
    { time: '01h15 - 02h00', name: 'Fanatics',                      tag: null,              tier: 'main' },
    { time: '02h00 - 03h00', name: 'NXW \u2022 Juliux \u2022 Jack-E', tag: 'BDAY SET \u2022 1H', tier: 'main' },
    { time: '03h00 - 03h45', name: 'Python',                        tag: 'OLD SCHOOL SET',  tier: 'main' },
    { time: '03h45 - 04h30', name: 'Skamm B2B Lixed',               tag: null,              tier: 'main' },
    // Headliners
    { time: '04h30 - 05h15', name: "Smokin' Pandas",                tag: 'OLD SCHOOL SET',  tier: 'headliner' },
    { time: '05h15 - 06h00', name: 'The Prototypes',                tag: 'OLD SCHOOL SET',  tier: 'headliner' },
  ],
}

export const ambiance = {
  lines: [
    'Une nuit 100% Jump-Up.',
    'Des basslines agressives.',
    'Une énergie brute.',
    'Liège ne sera plus jamais la même.',
  ],
}

export const faq = [
  { question: 'Quel est l\'âge minimum ?', answer: 'L\'événement est accessible à partir de 16 ans. Une pièce d\'identité pourra être demandée à l\'entrée.' },
  { question: 'Y a-t-il un vestiaire ?', answer: 'Oui, un vestiaire sera disponible sur place (payant, environ 2\u20AC).' },
  { question: 'Peut-on acheter des tickets sur place ?', answer: 'Oui, des tickets seront disponibles à l\'entrée mais à un tarif plus élevé. Nous vous recommandons fortement d\'acheter vos billets en ligne à l\'avance pour bénéficier des meilleurs prix.' },
  { question: 'Comment fonctionnent les boissons ?', answer: 'Les boissons fonctionnent avec un système de tickets boissons, achetables sur place en cash ou par carte bancaire.' },
  { question: 'Y a-t-il un parking à proximité ?', answer: 'Oui, le Palais des Congrès dispose d\'un parking à proximité. Nous recommandons cependant les transports en commun.' },
  { question: 'Comment venir en transports en commun ?', answer: 'Le Palais des Congrès est accessible en bus TEC. Arrêt "Palais des Congrès" sur plusieurs lignes.' },
  { question: 'Quelle est la politique de remboursement ?', answer: 'Les tickets ne sont ni échangeables ni remboursables, sauf en cas d\'annulation de l\'événement. Consultez les conditions sur Weezevent.' },
]

export const socials = {
  instagram: 'https://www.instagram.com/sauroraa.be/',
  facebook: 'https://www.facebook.com/profile.php?id=61559887667238',
  email: 'contact@sauroraa.be',
}

export const legal = {
  entreprise: 'SAURORAA',
  numero: '1031.598.463',
  email: 'contact@sauroraa.be',
  site: 'https://tickets.sauroraa.be',
}
