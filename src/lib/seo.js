export const SITE_URL = 'https://one9tech.online';

export const SEO = {
  title:
    'Website, App & Software Development in Rewa | One9 Tech',
  description:
    'One9 Tech in Rewa, Madhya Pradesh — custom websites, mobile apps, and software for local businesses. Founded by Pushpendra Patel. Serving Rewa, Satna, Sidhi and nearby.',
  keywords:
    'website development Rewa, app developer near me, software company Rewa, mobile app development Madhya Pradesh, web developer Rewa, digital marketing Rewa, SEO services Rewa, One9 Tech',
  image: `${SITE_URL}/logo.png`,
  locale: 'en_IN',
};

export const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfessionalService',
      '@id': `${SITE_URL}/#business`,
      name: 'One9 Tech',
      alternateName: 'Pushpendra Patel — One9 Tech',
      url: SITE_URL,
      image: SEO.image,
      logo: `${SITE_URL}/logo.png`,
      description: SEO.description,
      telephone: '+91-8516064332',
      email: 'one9tech.bussiness@gmail.com',
      founder: {
        '@type': 'Person',
        name: 'Pushpendra Patel',
        jobTitle: 'Full Stack Developer',
        url: SITE_URL,
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
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 24.5362,
        longitude: 81.3037,
      },
      areaServed: [
        { '@type': 'City', name: 'Rewa' },
        { '@type': 'City', name: 'Satna' },
        { '@type': 'City', name: 'Sidhi' },
        { '@type': 'State', name: 'Madhya Pradesh' },
        { '@type': 'Country', name: 'India' },
      ],
      priceRange: '₹₹',
      openingHours: 'Mo-Sa 10:00-19:00',
      sameAs: [
        'https://github.com/pushpendraCodes',
        'https://www.linkedin.com/in/1pushpendrapatel/',
        'https://www.instagram.com/one9.tech',
      ],
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Digital product services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Website Development in Rewa',
              description:
                'Custom websites, web apps, and SaaS platforms for businesses in Rewa and Madhya Pradesh.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Mobile App Development in Rewa',
              description:
                'iOS, Android, and React Native apps for local businesses and startups.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Custom Software Development',
              description:
                'Business software, automation, ERP/CRM, and billing systems.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Digital Marketing in Rewa',
              description:
                'Google Ads, Meta Ads, social media management, and conversion tracking for local businesses.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'SEO Services in Rewa',
              description:
                'Technical SEO, on-page optimization, and local SEO with Google Business Profile.',
            },
          },
        ],
      },
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: SITE_URL,
      name: 'One9 Tech',
      publisher: { '@id': `${SITE_URL}/#business` },
      inLanguage: 'en-IN',
    },
  ],
};
