import { SITE } from '@/lib/site';
import { servicesConfig } from '@/lib/services';
import { getAllResources } from '@/lib/resources';
import { cities } from '@/lib/cities';
import { getLandingPages, validateLandingPages } from '@/content/landing-pages';

export default function sitemap() {
  validateLandingPages();
  const basePages = ['', '/services', '/about', '/contact', '/service-areas', '/emergency', '/privacy', '/terms', '/resources'];
  const servicePages = servicesConfig.flatMap((category) =>
    category.services.map((service) => `/services/${category.slug}/${service.slug}`)
  );
  const cityPages = cities.map((city) => `/service-areas/${city.slug}`);
  const resourcePages = getAllResources().filter((item) => !item.noindex).map((item) => `/resources/${item.slug}`);
  const landingPages = getLandingPages()
    .filter((page) => page.enableIndexing)
    .map((page) => `/lp/${page.slug}`);

  return [...basePages, ...servicePages, ...cityPages, ...resourcePages, ...landingPages].map((path) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified: new Date()
  }));
}
