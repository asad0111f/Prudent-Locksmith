import { servicesConfig, getServiceUrl } from '@/lib/services';
import { cities } from '@/lib/cities';

export type InternalLink = {
  href: string;
  label: string;
};

function hashSeed(input: string) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickFrom<T>(items: T[], count: number, seed: number) {
  if (items.length === 0) return [];
  const picked: T[] = [];
  let index = seed % items.length;
  while (picked.length < count && picked.length < items.length) {
    picked.push(items[index]);
    index = (index + 3) % items.length;
  }
  return picked;
}

export function getInternalLinks({
  type,
  currentId,
  currentCity
}: {
  type: 'service' | 'city';
  currentId?: string;
  currentCity?: string;
}): InternalLink[] {
  const services = servicesConfig.flatMap((category) => category.services);
  const seed = hashSeed(currentId || currentCity || type);

  const serviceLinks = pickFrom(
    services.filter((service) => service.id !== currentId),
    2,
    seed
  ).map((service) => ({
    href: getServiceUrl(service.category.slug, service.slug),
    label: service.name
  }));

  const cityLinks = pickFrom(
    cities.filter((city) => city.slug !== currentCity),
    1,
    seed + 11
  ).map((city) => ({
    href: `/service-areas/${city.slug}`,
    label: `${city.name} service area`
  }));

  return [...serviceLinks, ...cityLinks];
}
