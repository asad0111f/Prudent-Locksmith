import { SITE } from '@/lib/site';
import { servicesConfig } from '@/lib/services';
import { cities } from '@/lib/cities';
import { getLandingPages, validateLandingPages } from '@/content/landing-pages';

export default function sitemap() {
  validateLandingPages();
  const basePages = ['', '/services', '/about', '/contact', '/service-areas', '/emergency', '/privacy', '/terms'];
  const servicePages = servicesConfig.flatMap((category) =>
    category.services.map((service) => `/services/${category.slug}/${service.slug}`)
  );
  const cityPages = cities.map((city) => `/service-areas/${city.slug}`);
  const landingPages = getLandingPages()
    .filter((page) => page.enableIndexing)
    .map((page) => `/lp/${page.slug}`);

  return [...basePages, ...servicePages, ...cityPages, ...landingPages].map((path) => ({
    url: `${SITE.baseUrl}${path}`,
    lastModified: new Date()
  }));
}
