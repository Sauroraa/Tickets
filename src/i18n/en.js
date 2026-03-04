export default {
  // Navbar
  nav: {
    ambiance: 'Vibe',
    lineup: 'Line-Up',
    info: 'Info',
    billetterie: 'Tickets',
    faq: 'FAQ',
    cta: 'GET MY TICKET',
  },

  // Hero
  hero: {
    countdown: {
      jours: 'days',
      heures: 'hours',
      minutes: 'minutes',
      secondes: 'seconds',
    },
    cta: 'GET MY TICKET',
  },

  // Ambiance
  ambiance: {
    lines: [
      'A 100% Jump-Up night.',
      'Aggressive basslines.',
      'Raw energy.',
      'Liège will never be the same.',
    ],
    cta: 'Book now',
  },

  // Lineup
  lineup: {
    title: 'LINE-UP',
    comingSoon: 'LINE-UP DROP SOON',
    comingSub: 'Stay locked.',
    timetableReveal: 'Full timetable available on March 27',
    tiers: {
      headliners: 'HEADLINERS',
      artists: 'ARTISTS',
      showcases: 'SHOWCASES',
      support: 'OPENING',
    },
  },

  // Info
  info: {
    title: 'PRACTICAL INFO',
    lieu: 'Venue',
    mapsLink: 'View on Google Maps',
    horaires: 'Schedule',
    tarifs: 'Prices',
    enVente: 'On sale',
    bientot: 'Coming soon',
    places: 'tickets',
  },

  // Billetterie
  billetterie: {
    title: 'OFFICIAL TICKETING',
    reassurance: 'Secure payment via Weezevent. Tickets sent instantly by email.',
    widgetTitle: 'Online ticketing',
    widgetText: 'Weezevent Ticketing',
  },

  // FAQ
  faq: {
    title: 'FAQ',
    items: [
      { question: 'What is the minimum age?', answer: 'The event is accessible from 16 years old. ID may be requested at the entrance.' },
      { question: 'Is there a cloakroom?', answer: 'Yes, a cloakroom will be available on site (paid, approximately €2).' },
      { question: 'Can I buy tickets at the door?', answer: 'Yes, tickets will be available at the door but at a higher price. We strongly recommend purchasing your tickets online in advance to get the best prices.' },
      { question: 'How do drinks work?', answer: 'Drinks work with a drink ticket system, purchasable on site with cash or card.' },
      { question: 'Is there parking nearby?', answer: 'Yes, the Palais des Congrès has parking nearby. However, we recommend public transport.' },
      { question: 'How to get there by public transport?', answer: 'The Palais des Congrès is accessible by TEC bus. Stop "Palais des Congrès" on several lines.' },
      { question: 'What is the refund policy?', answer: 'Tickets are neither exchangeable nor refundable, except in case of event cancellation. Check the conditions on Weezevent.' },
    ],
  },

  // Footer
  footer: {
    legal: 'Legal notice',
    weezevent: 'Ticketing by Weezevent',
  },

  // Legal
  legal: {
    title: 'Legal Notice',
    close: 'Close',
    editeur: 'Site publisher',
    editeurNumero: 'Business number',
    editeurEmail: 'Email',
    editeurSite: 'Website',
    hebergement: 'Hosting',
    hebergementText: 'The site is hosted on a virtual private server (VPS). Content is served via Nginx with SSL certificate from Let\'s Encrypt.',
    propriete: 'Intellectual property',
    proprieteText: (name) => `All content on this site (texts, images, logos, graphics) is the exclusive property of ${name}, unless otherwise stated. Any reproduction, representation or distribution, in whole or in part, of the content of this site without authorization is prohibited.`,
    billetterieTitle: 'Ticketing',
    billetterieText: 'Ticket sales are managed by the Weezevent SAS platform. The applicable general terms and conditions of sale are those of Weezevent, available at',
    remboursement: 'Refund policy',
    remboursementText: 'Tickets are neither exchangeable nor refundable, except in case of event cancellation by the organizer. In case of cancellation, refunds will be processed via the Weezevent platform.',
    rgpd: 'Personal data protection',
    rgpdText1: (name) => `In accordance with the General Data Protection Regulation (GDPR), you have the right to access, rectify and delete your personal data. Data collected during ticket purchases is processed by Weezevent and ${name} solely for the purpose of organizing the event.`,
    rgpdText2: 'No tracking cookies are used on this site. To exercise your rights, contact us at',
    responsabilite: 'Liability',
    responsabiliteText: (name) => `${name} endeavors to provide accurate and up-to-date information on this site. However, we cannot guarantee the accuracy, completeness or timeliness of the information published. ${name} disclaims all liability for any damage resulting from the use of this site.`,
    droit: 'Applicable law',
    droitText: 'This site and its legal notices are governed by Belgian law. In case of dispute, the courts of Liège shall have sole jurisdiction.',
    contact: 'Contact',
  },

  // Event data translations
  event: {
    dateDisplay: 'March 28, 2026',
    tarifs: [
      { nom: 'Wave 1 (Super Early)', status: 'On sale', description: '50 tickets' },
      { nom: 'Wave 2 (Early)', status: 'Coming soon', description: '50 tickets' },
      { nom: 'Wave 3 (Regular)', status: 'Coming soon', description: '50 tickets' },
    ],
  },

  // Mobile CTA
  mobileCta: 'GET MY TICKET',
}
