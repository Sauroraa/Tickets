export const event = {
  name: 'SAURORAA',
  tagline: 'The Jump-Up Ritual',
  date: '2026-05-16T22:00:00',
  dateDisplay: '16 Mai 2026',
  horaires: '22h00 — 06h00',
  style: 'Jump-Up / Drum & Bass',
  lieu: {
    nom: 'Palais des Congrès de Liège',
    adresse: 'Esplanade de l\'Europe 2, 4020 Liège',
    maps: 'https://maps.google.com/?q=Palais+des+Congrès+de+Liège',
  },
  tarifs: [
    { nom: 'Early Bird', prix: '12€', status: 'Disponible', description: 'Places limitées' },
    { nom: 'Regular', prix: '18€', status: 'Bientôt', description: 'Tarif standard' },
    { nom: 'Last Wave', prix: '25€', status: 'Bientôt', description: 'Dernières places' },
    { nom: 'VIP', prix: '40€', status: 'Bientôt', description: 'Accès VIP + boisson offerte' },
  ],
  weezevent: {
    url: 'https://widget.weezevent.com/ticket/E1369359/?code=23980&locale=fr-FR&width_auto=1&color_primary=E10600',
    id: '1369359',
  },
}

export const lineup = {
  revealed: false,
  artists: [
    // { name: 'DJ Example', label: 'Label Records', style: 'Jump-Up', country: 'UK', image: '/assets/artist1.jpg' },
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
  { question: 'Quel est l\'âge minimum ?', answer: 'L\'événement est accessible à partir de 18 ans. Une pièce d\'identité pourra être demandée à l\'entrée.' },
  { question: 'Y a-t-il un vestiaire ?', answer: 'Oui, un vestiaire sera disponible sur place (payant, environ 2€).' },
  { question: 'Peut-on payer sur place ?', answer: 'Un bar sera disponible avec paiement en cash et par carte. Les tickets doivent être achetés en ligne à l\'avance.' },
  { question: 'Y a-t-il un parking à proximité ?', answer: 'Oui, le Palais des Congrès dispose d\'un parking à proximité. Nous recommandons cependant les transports en commun.' },
  { question: 'Comment venir en transports en commun ?', answer: 'Le Palais des Congrès est accessible en bus TEC. Arrêt "Palais des Congrès" sur plusieurs lignes.' },
  { question: 'Quelle est la politique de remboursement ?', answer: 'Les tickets ne sont ni échangeables ni remboursables, sauf en cas d\'annulation de l\'événement. Consultez les conditions sur Weezevent.' },
]

export const socials = {
  instagram: 'https://instagram.com/sauroraa',
  facebook: 'https://facebook.com/sauroraa',
  tiktok: 'https://tiktok.com/@sauroraa',
  email: 'contact@sauroraa.be',
}
