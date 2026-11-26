import '../src/index.css';
import SiteShell from '../src/components/SiteShell';
import { SEO, SITE_URL, localBusinessJsonLd } from '../src/lib/seo';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO.title,
    template: '%s | One9 Tech Rewa',
  },
  description: SEO.description,
  keywords: SEO.keywords.split(', '),
  authors: [{ name: 'Pushpendra Patel', url: SITE_URL }],
  creator: 'Pushpendra Patel',
  publisher: 'One9 Tech',
  category: 'technology',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: SEO.locale,
    url: SITE_URL,
    siteName: 'One9 Tech',
    title: SEO.title,
    description: SEO.description,
    images: [
      {
        url: SEO.image,
        width: 1200,
        height: 630,
        alt: 'One9 Tech — Website, App & Software Development in Rewa, Madhya Pradesh',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SEO.title,
    description: SEO.description,
    images: [SEO.image],
  },
  other: {
    'geo.region': 'IN-MP',
    'geo.placename': 'Rewa, Madhya Pradesh',
    'geo.position': '24.5362;81.3037',
    ICBM: '24.5362, 81.3037',
  },
  icons: {
    icon: [
      { url: '/favicon-32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN">
      <body style={{ background: '#080808' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
