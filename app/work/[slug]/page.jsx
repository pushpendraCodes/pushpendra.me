import { notFound } from 'next/navigation';
import CaseStudy from '../../../src/views/CaseStudy';
import { getProject, projects } from '../../../src/lib/projects';
import { breadcrumbJsonLd, SITE_URL } from '../../../src/lib/seo';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Case Study' };
  const title = `${project.title} — Case Study`;
  const description = `${project.description} Built by One9 Tech, a website and software studio in Rewa, Madhya Pradesh.`;
  return {
    title,
    description,
    alternates: { canonical: `/work/${project.slug}` },
    openGraph: {
      title: `${project.title} | One9 Tech Rewa`,
      description,
      images: project.image ? [{ url: project.image }] : undefined,
    },
  };
}

export default async function CaseStudyRoute({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const crumbs = breadcrumbJsonLd([
    { name: 'Home', url: '/' },
    { name: 'Work', url: '/work' },
    { name: project.title, url: `/work/${project.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(crumbs) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            description: project.description,
            url: `${SITE_URL}/work/${project.slug}`,
            creator: {
              '@type': 'Organization',
              name: 'One9 Tech',
              url: SITE_URL,
            },
            about: project.category,
          }),
        }}
      />
      <CaseStudy slug={slug} />
    </>
  );
}
