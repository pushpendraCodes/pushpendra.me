import { projects } from '../src/lib/projects';
import { SITE_URL } from '../src/lib/seo';

export default function sitemap() {
  const lastModified = new Date();

  const staticRoutes = [
    { url: `${SITE_URL}/`, priority: 1, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/services`, priority: 0.95, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/work`, priority: 0.9, changeFrequency: 'weekly' },
    { url: `${SITE_URL}/about`, priority: 0.8, changeFrequency: 'monthly' },
    { url: `${SITE_URL}/contact`, priority: 0.85, changeFrequency: 'monthly' },
  ].map((route) => ({ ...route, lastModified }));

  const workRoutes = projects.map((project) => ({
    url: `${SITE_URL}/work/${project.slug}`,
    lastModified,
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticRoutes, ...workRoutes];
}
