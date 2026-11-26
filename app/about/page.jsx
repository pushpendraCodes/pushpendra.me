import AboutPage from '../../src/views/AboutPage';

export const metadata = {
  title: 'About One9 Tech — Software Studio in Rewa, Madhya Pradesh',
  description:
    'One9 Tech is founded by Pushpendra Patel in Rewa, MP. A digital product studio for websites, apps, ERP, software and marketing — direct with the engineer.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About One9 Tech Rewa',
    description:
      'Meet Pushpendra Patel and the Rewa-based studio behind One9 Tech websites, apps and software.',
  },
};

export default function AboutRoute() {
  return <AboutPage />;
}
