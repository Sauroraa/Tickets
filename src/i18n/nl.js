export default {
  // Navbar
  nav: {
    ambiance: 'Sfeer',
    lineup: 'Line-Up',
    info: 'Info',
    billetterie: 'Tickets',
    faq: 'FAQ',
    cta: 'KOOP MIJN TICKET',
  },

  // Hero
  hero: {
    countdown: {
      jours: 'dagen',
      heures: 'uren',
      minutes: 'minuten',
      secondes: 'seconden',
    },
    cta: 'KOOP MIJN TICKET',
  },

  // Ambiance
  ambiance: {
    lines: [
      'Een 100% Jump-Up nacht.',
      'Agressieve basslines.',
      'Rauwe energie.',
      'Luik zal nooit meer hetzelfde zijn.',
    ],
    cta: 'Nu reserveren',
  },

  // Lineup
  lineup: {
    title: 'LINE-UP',
    comingSoon: 'LINE-UP BINNENKORT',
    comingSub: 'Blijf op de hoogte.',
    timetableReveal: 'Volledige timetable beschikbaar op 27 maart',
    tiers: {
      headliners: 'HEADLINERS',
      artists: 'ARTIESTEN',
      showcases: 'SHOWCASES',
      support: 'OPENING',
    },
  },

  // Info
  info: {
    title: 'PRAKTISCHE INFO',
    lieu: 'Locatie',
    mapsLink: 'Bekijk op Google Maps',
    horaires: 'Tijdschema',
    tarifs: 'Prijzen',
    enVente: 'Te koop',
    bientot: 'Binnenkort',
    places: 'plaatsen',
  },

  // Billetterie
  billetterie: {
    title: 'OFFICIËLE TICKETVERKOOP',
    reassurance: 'Veilige betaling via Weezevent. Tickets worden direct per e-mail verzonden.',
    widgetTitle: 'Online ticketverkoop',
    widgetText: 'Weezevent Ticketverkoop',
  },

  // FAQ
  faq: {
    title: 'FAQ',
    items: [
      { question: 'Wat is de minimumleeftijd?', answer: 'Het evenement is toegankelijk vanaf 16 jaar. Er kan om een identiteitsbewijs gevraagd worden bij de ingang.' },
      { question: 'Is er een garderobe?', answer: 'Ja, er zal een garderobe beschikbaar zijn ter plaatse (betalend, ongeveer €2).' },
      { question: 'Kan ik tickets kopen aan de deur?', answer: 'Ja, tickets zullen beschikbaar zijn aan de deur maar tegen een hogere prijs. We raden sterk aan om uw tickets vooraf online te kopen voor de beste prijzen.' },
      { question: 'Hoe werken de drankjes?', answer: 'Drankjes werken met een drankticketsysteem, ter plaatse te kopen met cash of kaart.' },
      { question: 'Is er parking in de buurt?', answer: 'Ja, het Palais des Congrès heeft parking in de buurt. We raden echter het openbaar vervoer aan.' },
      { question: 'Hoe kom je er met het openbaar vervoer?', answer: 'Het Palais des Congrès is bereikbaar met TEC-bus. Halte "Palais des Congrès" op meerdere lijnen.' },
      { question: 'Wat is het terugbetalingsbeleid?', answer: 'Tickets zijn niet inwisselbaar of terugbetaalbaar, behalve bij annulering van het evenement. Raadpleeg de voorwaarden op Weezevent.' },
    ],
  },

  // Footer
  footer: {
    legal: 'Juridische vermeldingen',
    weezevent: 'Ticketverkoop door Weezevent',
  },

  // Legal
  legal: {
    title: 'Juridische vermeldingen',
    close: 'Sluiten',
    editeur: 'Uitgever van de site',
    editeurNumero: 'Ondernemingsnummer',
    editeurEmail: 'E-mail',
    editeurSite: 'Website',
    hebergement: 'Hosting',
    hebergementText: 'De site wordt gehost op een virtuele privéserver (VPS). De inhoud wordt geleverd via Nginx met SSL-certificaat van Let\'s Encrypt.',
    propriete: 'Intellectueel eigendom',
    proprieteText: (name) => `Alle inhoud op deze site (teksten, afbeeldingen, logo's, grafische elementen) is het exclusieve eigendom van ${name}, tenzij anders vermeld. Elke reproductie, weergave of verspreiding, geheel of gedeeltelijk, van de inhoud van deze site zonder toestemming is verboden.`,
    billetterieTitle: 'Ticketverkoop',
    billetterieText: 'De ticketverkoop wordt beheerd door het platform Weezevent SAS. De toepasselijke algemene verkoopvoorwaarden zijn die van Weezevent, beschikbaar op',
    remboursement: 'Terugbetalingsbeleid',
    remboursementText: 'Tickets zijn niet inwisselbaar of terugbetaalbaar, behalve bij annulering van het evenement door de organisator. Bij annulering wordt de terugbetaling verwerkt via het Weezevent-platform.',
    rgpd: 'Bescherming persoonsgegevens',
    rgpdText1: (name) => `In overeenstemming met de Algemene Verordening Gegevensbescherming (AVG/GDPR), heeft u het recht op toegang, rectificatie en verwijdering van uw persoonlijke gegevens. Gegevens die bij de aankoop van tickets worden verzameld, worden verwerkt door Weezevent en ${name} uitsluitend voor de organisatie van het evenement.`,
    rgpdText2: 'Er worden geen tracking cookies gebruikt op deze site. Om uw rechten uit te oefenen, neem contact met ons op via',
    responsabilite: 'Aansprakelijkheid',
    responsabiliteText: (name) => `${name} streeft ernaar nauwkeurige en actuele informatie op deze site te verstrekken. We kunnen echter de nauwkeurigheid, volledigheid of actualiteit van de gepubliceerde informatie niet garanderen. ${name} wijst alle aansprakelijkheid af voor schade die voortvloeit uit het gebruik van deze site.`,
    droit: 'Toepasselijk recht',
    droitText: 'Deze site en zijn juridische vermeldingen worden beheerst door het Belgisch recht. Bij geschillen zijn uitsluitend de rechtbanken van Luik bevoegd.',
    contact: 'Contact',
  },

  // Event data translations
  event: {
    dateDisplay: '28 maart 2026',
    tarifs: [
      { nom: 'Golf 1 (Super Early)', status: 'Te koop', description: '50 plaatsen' },
      { nom: 'Golf 2 (Early)', status: 'Binnenkort', description: '50 plaatsen' },
      { nom: 'Golf 3 (Regular)', status: 'Binnenkort', description: '50 plaatsen' },
    ],
  },

  // Mobile CTA
  mobileCta: 'KOOP MIJN TICKET',
}
