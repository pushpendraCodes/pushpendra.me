import ContactPage from '../../src/views/ContactPage';

export const metadata = {
  title: 'Contact Website & App Developer in Rewa | One9 Tech',
  description:
    'Contact One9 Tech in Rewa, Madhya Pradesh for website development, mobile apps, ERP, software and digital marketing. Call +91 8516064332 or email contact@one9tech.online.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact One9 Tech Rewa',
    description:
      'Start a website, app, ERP or marketing project with a developer based in Rewa, MP.',
  },
};

export default function ContactRoute() {
  return <ContactPage />;
}
