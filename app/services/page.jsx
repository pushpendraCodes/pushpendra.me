import ServicesPage from '../../src/views/ServicesPage';

export const metadata = {
  title: 'Website, App, ERP & Digital Marketing Services in Rewa MP',
  description:
    'Hire One9 Tech in Rewa for website development, mobile apps, ERP software, custom software, digital marketing and SEO. Serving Rewa, Satna, Sidhi and Madhya Pradesh.',
  alternates: { canonical: '/services' },
  keywords: [
    'website development services Rewa',
    'app development Rewa',
    'ERP software Rewa',
    'digital marketing company Rewa',
    'SEO services Madhya Pradesh',
  ],
  openGraph: {
    title: 'Services in Rewa | One9 Tech',
    description:
      'Website, app, ERP, software and digital marketing services from Rewa, Madhya Pradesh.',
  },
};

export default function ServicesRoute() {
  return <ServicesPage />;
}
