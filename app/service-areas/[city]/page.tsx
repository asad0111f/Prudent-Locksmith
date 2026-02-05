import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { RequestServiceForm } from '@/components/request-service-form';
import { SeoFaq } from '@/components/seo-faq';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { InternalLinks } from '@/components/internal-links';
import { cities } from '@/lib/cities';
import { SITE } from '@/lib/site';
import { getServiceById, getServiceUrl } from '@/lib/services';

export async function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export function generateMetadata({ params }: { params: { city: string } }): Metadata {
  const city = cities.find((item) => item.slug === params.city);
  if (!city) {
    return {};
  }

  const title = `Locksmith & Garage Door Service in ${city.name}`;
  const description = `${city.description} Call for fast dispatch and clear pricing.`;

  return {
    title,
    description,
    alternates: {
      canonical: `/service-areas/${city.slug}`
    },
    openGraph: {
      title,
      description,
      url: `${SITE.baseUrl}/service-areas/${city.slug}`
    },
    twitter: {
      title,
      description
    }
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = cities.find((item) => item.slug === params.city);
  if (!city) {
    return notFound();
  }

  const services = city.topServices
    .map((id) => getServiceById(id))
    .filter((service): service is NonNullable<ReturnType<typeof getServiceById>> => Boolean(service));

  return (
    <>
      <Section className="pt-8">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <Breadcrumbs
              baseUrl={SITE.baseUrl}
              items={[
                { label: 'Home', href: '/' },
                { label: 'Service Areas', href: '/service-areas' },
                { label: city.name, href: `/service-areas/${city.slug}` }
              ]}
            />
            <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="space-y-6 motion-safe:animate-fade-up">
                <Badge>Local Service Area</Badge>
                <h1 className="text-4xl font-semibold text-ink-950">{city.name} locksmith & garage door service</h1>
                <p className="text-lg text-ink-700">{city.description}</p>
                <div className="flex flex-wrap gap-3">
                  <PhoneLink asButton city={city.name}>Call Now</PhoneLink>
                  <Button href="/contact" variant="secondary">Request Service</Button>
                </div>
                <ul className="grid gap-2 text-sm text-ink-700">
                  <li>• Fast dispatch and ETA confirmation</li>
                  <li>• Upfront pricing before work begins</li>
                  <li>• Residential, automotive, and commercial support</li>
                </ul>
              </div>
              <Card>
                <h2 className="text-lg font-semibold text-ink-950">Need help today?</h2>
                <p className="mt-2 text-sm text-ink-700">Call for immediate availability in {city.name}.</p>
                <PhoneLink asButton className="mt-4 w-full" city={city.name}>
                  Call {SITE.phoneDisplay}
                </PhoneLink>
              </Card>
            </div>
          </Container>
        </div>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <TrustStrip />
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950">Top services in {city.name}</h2>
            <Link href="/services" className="text-sm font-semibold text-teal-700">View all services</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <Card key={service.id} className="group">
                <h3 className="text-lg font-semibold text-ink-950">{service.shortLabel}</h3>
                <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
                <Link href={getServiceUrl(service.category.slug, service.slug)} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  View details
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <SeoFaq title={`FAQs for ${city.name}`} items={city.faqs} includeJsonLd />
            <RequestServiceForm serviceName={`${city.name} service request`} city={city.name} />
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <InternalLinks type="city" currentCity={city.slug} />
        </Container>
      </Section>

    </>
  );
}
