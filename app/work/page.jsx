import WorkPage from '../../src/views/WorkPage';

export const metadata = {
  title: 'Work & Case Studies — Websites, Apps & ERP from Rewa',
  description:
    'Selected websites, mobile apps, ERP systems and software built by One9 Tech from Rewa, Madhya Pradesh — live products for real businesses.',
  alternates: { canonical: '/work' },
  openGraph: {
    title: 'One9 Tech Work Portfolio',
    description:
      'Case studies of websites, apps and software shipped by One9 Tech in Rewa.',
  },
};

export default function WorkRoute() {
  return <WorkPage />;
}
