export default {
  // Navbar
  nav: {
    ambiance: 'Ambiance',
    lineup: 'Line-Up',
    info: 'Infos',
    billetterie: 'Billetterie',
    faq: 'FAQ',
    cta: 'PRENDRE MON TICKET',
  },

  // Hero
  hero: {
    countdown: {
      jours: 'jours',
      heures: 'heures',
      minutes: 'minutes',
      secondes: 'secondes',
    },
    cta: 'PRENDRE MON TICKET',
  },

  // Ambiance
  ambiance: {
    lines: [
      'Une nuit 100% Jump-Up.',
      'Des basslines agressives.',
      'Une énergie brute.',
      'Liège ne sera plus jamais la même.',
    ],
    cta: 'Réserver maintenant',
  },

  // Lineup
  lineup: {
    title: 'LINE-UP',
    comingSoon: 'LINE-UP DROP SOON',
    comingSub: 'Stay locked.',
    timetableReveal: 'Timetable complète disponible le 27 Mars',
    tiers: {
      headliners: 'HEADLINERS',
      artists: 'ARTISTES',
      showcases: 'SHOWCASES',
      support: 'SUPPORT',
    },
  },

  // Info
  info: {
    title: 'INFOS PRATIQUES',
    lieu: 'Lieu',
    mapsLink: 'Voir sur Google Maps',
    horaires: 'Horaires',
    tarifs: 'Tarifs',
    enVente: 'En vente',
    bientot: 'Bientôt',
    places: 'places',
  },

  // Billetterie
  billetterie: {
    title: 'BILLETTERIE OFFICIELLE',
    reassurance: 'Paiement sécurisé via Weezevent. Tickets envoyés instantanément par email.',
    widgetTitle: 'Billetterie en ligne',
    widgetText: 'Billetterie Weezevent',
  },

  // FAQ
  faq: {
    title: 'FAQ',
    items: [
      { question: 'Quel est l\'âge minimum ?', answer: 'L\'événement est accessible à partir de 16 ans. Une pièce d\'identité pourra être demandée à l\'entrée.' },
      { question: 'Y a-t-il un vestiaire ?', answer: 'Oui, un vestiaire sera disponible sur place (payant, environ 2€).' },
      { question: 'Peut-on acheter des tickets sur place ?', answer: 'Oui, des tickets seront disponibles à l\'entrée mais à un tarif plus élevé. Nous vous recommandons fortement d\'acheter vos billets en ligne à l\'avance pour bénéficier des meilleurs prix.' },
      { question: 'Comment fonctionnent les boissons ?', answer: 'Les boissons fonctionnent avec un système de tickets boissons, achetables sur place en cash ou par carte bancaire.' },
      { question: 'Y a-t-il un parking à proximité ?', answer: 'Oui, le Palais des Congrès dispose d\'un parking à proximité. Nous recommandons cependant les transports en commun.' },
      { question: 'Comment venir en transports en commun ?', answer: 'Le Palais des Congrès est accessible en bus TEC. Arrêt "Palais des Congrès" sur plusieurs lignes.' },
      { question: 'Quelle est la politique de remboursement ?', answer: 'Les tickets ne sont ni échangeables ni remboursables, sauf en cas d\'annulation de l\'événement. Consultez les conditions sur Weezevent.' },
    ],
  },

  // Footer
  footer: {
    legal: 'Mentions légales',
    weezevent: 'Billetterie par Weezevent',
  },

  // Legal
  legal: {
    title: 'Mentions légales',
    close: 'Fermer',
    editeur: 'Éditeur du site',
    editeurNumero: 'Numéro d\'entreprise',
    editeurEmail: 'Email',
    editeurSite: 'Site',
    hebergement: 'Hébergement',
    hebergementText: 'Le site est hébergé sur un serveur privé virtuel (VPS). Le contenu est servi via Nginx avec certificat SSL Let\'s Encrypt.',
    propriete: 'Propriété intellectuelle',
    proprieteText: (name) => `L'ensemble du contenu de ce site (textes, images, logos, graphismes) est la propriété exclusive de ${name}, sauf mention contraire. Toute reproduction, représentation ou diffusion, en tout ou partie, du contenu de ce site sans autorisation est interdite.`,
    billetterieTitle: 'Billetterie',
    billetterieText: 'La vente de billets est gérée par la plateforme Weezevent SAS. Les conditions générales de vente applicables sont celles de Weezevent, consultables sur',
    remboursement: 'Politique de remboursement',
    remboursementText: 'Les billets ne sont ni échangeables ni remboursables, sauf en cas d\'annulation de l\'événement par l\'organisateur. En cas d\'annulation, le remboursement sera effectué via la plateforme Weezevent.',
    rgpd: 'Protection des données personnelles',
    rgpdText1: (name) => `Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification et de suppression de vos données personnelles. Les données collectées lors de l'achat de billets sont traitées par Weezevent et ${name} uniquement dans le cadre de l'organisation de l'événement.`,
    rgpdText2: 'Aucun cookie de tracking n\'est utilisé sur ce site. Pour exercer vos droits, contactez-nous à',
    responsabilite: 'Responsabilité',
    responsabiliteText: (name) => `${name} s'efforce de fournir des informations exactes et à jour sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la complétude ou l'actualité des informations diffusées. ${name} décline toute responsabilité pour tout dommage résultant de l'utilisation de ce site.`,
    droit: 'Droit applicable',
    droitText: 'Le présent site et ses mentions légales sont régis par le droit belge. En cas de litige, les tribunaux de Liège seront seuls compétents.',
    contact: 'Contact',
  },

  // Event data translations
  event: {
    dateDisplay: '28 Mars 2026',
    tarifs: [
      { nom: 'Vague 1 (Super Early)', status: 'En vente', description: '50 places' },
      { nom: 'Vague 2 (Early)', status: 'Bientôt', description: '50 places' },
      { nom: 'Vague 3 (Regular)', status: 'Bientôt', description: '50 places' },
    ],
  },

  // Mobile CTA
  mobileCta: 'PRENDRE MON TICKET',
}
