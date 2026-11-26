export const SITE_URL = 'https://one9tech.online';

export const SEO = {
  title:
    'Website, App, ERP & Digital Marketing Company in Rewa MP | One9 Tech',
  description:
    'One9 Tech is a website, mobile app, ERP, software and digital marketing company in Rewa, Madhya Pradesh. Founded by Pushpendra Patel — serving Rewa, Satna, Sidhi and businesses across India.',
  keywords: [
    'website development Rewa',
    'web developer Rewa',
    'app developer Rewa',
    'mobile app development Rewa',
    'software company Rewa',
    'ERP software Rewa',
    'custom software development Madhya Pradesh',
    'digital marketing Rewa',
    'SEO services Rewa',
    'website designer Rewa MP',
    'app development company Madhya Pradesh',
    'software developer near me Rewa',
    'One9 Tech',
    'Pushpendra Patel',
  ].join(', '),
  image: `${SITE_URL}/logo.png`,
  locale: 'en_IN',
};

export const SERVICE_AREAS = [
  'Rewa',
  'Satna',
  'Sidhi',
  'Maihar',
  'Shahdol',
  'Madhya Pradesh',
];

const serviceOffers = [
  {
    name: 'Website Development in Rewa',
    description:
      'Custom business websites, web apps, admin panels, and SaaS platforms for companies in Rewa and Madhya Pradesh.',
  },
  {
    name: 'Mobile App Development in Rewa',
    description:
      'Android and iOS apps with React Native and Flutter — from MVP to Play Store launch for local businesses and startups.',
  },
  {
    name: 'ERP & Custom Software in Rewa',
    description:
      'ERP, CRM, billing, inventory, and workflow software built around how your business in Rewa actually runs.',
  },
  {
    name: 'Digital Marketing in Rewa',
    description:
      'Google Ads, Meta Ads, social media management, and conversion tracking for brands that want leads in Rewa and beyond.',
  },
  {
    name: 'SEO Services in Rewa',
    description:
      'Technical SEO, on-page optimization, local SEO, and Google Business Profile support so customers find you first.',
  },
];

export const faqItems = [
  {
    question: 'Who is the best website developer in Rewa, Madhya Pradesh?',
    answer:
      'One9 Tech, founded by Pushpendra Patel in Rewa, builds custom websites, web apps, and SaaS products for local businesses — with direct engineer communication from discovery to launch.',
  },
  {
    question: 'Do you build mobile apps in Rewa?',
    answer:
      'Yes. One9 Tech develops Android and cross-platform mobile apps for clients in Rewa and across Madhya Pradesh, including Play Store publishing and backend systems.',
  },
  {
    question: 'Can you build ERP or custom software for my business in Rewa?',
    answer:
      'Yes. We design and build ERP, CRM, billing, inventory, and custom business software tailored to how your company operates — not generic templates.',
  },
  {
    question: 'Do you offer digital marketing and SEO in Rewa?',
    answer:
      'Yes. Along with product engineering, One9 Tech provides digital marketing, Google and Meta ads, and SEO so your website and app reach the right customers in Rewa and nearby cities.',
  },
  {
    question: 'Which areas does One9 Tech serve?',
    answer:
      'We are based in Rewa, Madhya Pradesh and work with clients in Rewa, Satna, Sidhi, Maihar, Shahdol, across MP, and remotely worldwide.',
  },
];

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['ProfessionalService', 'LocalBusiness', 'Organization'],
      '@id': `${SITE_URL}/#business`,
      name: 'One9 Tech',
      legalName: 'One9 Tech',
      alternateName: [
        'One9 Tech Rewa',
        'Pushpendra Patel — One9 Tech',
        'Website & App Development Company in Rewa',
      ],
      url: SITE_URL,
      image: SEO.image,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/logo.png`,
      },
      description: SEO.description,
      telephone: '+91-8516064332',
      email: 'contact@one9tech.online',
      foundingDate: '2022',
      founder: {
        '@type': 'Person',
        '@id': `${SITE_URL}/#founder`,
        name: 'Pushpendra Patel',
        jobTitle: 'Full Stack Developer & Founder',
        url: SITE_URL,
        homeLocation: {
          '@type': 'Place',
          name: 'Rewa, Madhya Pradesh, India',
        },
        sameAs: [
          'https://github.com/pushpendraCodes',
          'https://www.linkedin.com/in/1pushpendrapatel/',
          'https://www.instagram.com/one9.tech',
        ],
      },
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Rewa',
        addressRegion: 'Madhya Pradesh',
        postalCode: '486001',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.5362,
        longitude: 81.3037,
      },
      areaServed: SERVICE_AREAS.map((name) =>
        name === 'Madhya Pradesh' || name === 'India'
          ? { '@type': name === 'India' ? 'Country' : 'State', name }
          : { '@type': 'City', name }
      ).concat([{ '@type': 'Country', name: 'India' }]),
      priceRange: '₹₹',
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
          opens: '10:00',
          closes: '19:00',
        },
      ],
      knowsAbout: [
        'Website Development',
        'Mobile App Development',
        'ERP Software',
        'Custom Software Development',
        'Digital Marketing',
        'SEO',
        'SaaS Product Development',
      ],
      sameAs: [
        'https://github.com/pushpendraCodes',
        'https://www.linkedin.com/in/1pushpendrapatel/',
        'https://www.instagram.com/one9.tech',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Website, App, ERP & Marketing Services in Rewa',
        itemListElement: serviceOffers.map((service, i) => ({
          '@type': 'Offer',
          position: i + 1,
          itemOffered: {
            '@type': 'Service',
            name: service.name,
            description: service.description,
            provider: { '@id': `${SITE_URL}/#business` },
            areaServed: { '@type': 'City', name: 'Rewa' },
          },
        })),
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'One9 Tech',
      description: SEO.description,
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-IN',
      potentialAction: {
        '@type': 'SearchAction',
        target: `${SITE_URL}/work?q={search_term_string}`,
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': `${SITE_URL}/#faq`,
      mainEntity: faqItems.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    },
  ],
};

export const breadcrumbJsonLd = (items) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: item.name,
    item: item.url.startsWith('http') ? item.url : `${SITE_URL}${item.url}`,
  })),
});
