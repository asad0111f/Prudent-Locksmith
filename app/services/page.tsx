import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { CategorySection, ServiceCard } from '@/components/service-cards';
import { ReviewsSection } from '@/components/reviews';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site';
import { getEmergencyServices, getServiceById, servicesConfig } from '@/lib/services';
import { RequestServiceTrigger } from '@/components/request-service-trigger';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Locksmith, garage door repair, and emergency services delivered by local experts in Hamilton and the GTA.',
  alternates: {
    canonical: '/services'
  },
  openGraph: {
    title: 'Services',
    description: 'Locksmith, garage door repair, and emergency services delivered by local experts in Hamilton and the GTA.',
    url: '/services'
  },
  twitter: {
    title: 'Services',
    description: 'Locksmith, garage door repair, and emergency services delivered by local experts in Hamilton and the GTA.'
  }
};

export default function ServicesPage() {
  const emergencyServices = getEmergencyServices();
  const relatedReadingIds = [
    'garage-door-repair/garage-door-not-opening-or-stuck',
    'garage-door-repair/broken-garage-door-spring-repair',
    'residential-locksmith-services/home-and-apartment-lockouts',
    'residential-locksmith-services/rekeying-services',
    'automotive-locksmith-services/car-lockouts',
    'commercial-storefront-lock-services/storefront-lock-repair',
    'garage-door-opener-install-and-service/new-garage-door-opener-installation',
    'commercial-storefront-lock-services/mortise-lock-service'
  ];
  const relatedReading = relatedReadingIds
    .map((id) => getServiceById(id))
    .filter((item): item is NonNullable<ReturnType<typeof getServiceById>> => Boolean(item));

  return (
    <>
      <section id="top">
        <Section className="pt-12">
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10 bg-accent-radial" aria-hidden="true" />
            <Container>
              <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                <div className="space-y-6">
                <Reveal as="div" delay={0}>
                  <Badge>Popular & Emergency Services</Badge>
                </Reveal>
                <Reveal as="div" delay={60}>
                  <h1 className="text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">Complete locksmith and garage door care</h1>
                </Reveal>
                <Reveal as="div" delay={120}>
                  <p className="text-lg text-ink-700">
                    From urgent lockouts to planned repairs and upgrades, Prudent delivers clear pricing and fast response across local neighborhoods.
                  </p>
                </Reveal>
                <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                  <PhoneLink asButton className="w-full sm:w-auto">Call Now</PhoneLink>
                  <Button href="/contact" variant="secondary" className="w-full sm:w-auto">Request Service</Button>
                </Reveal>
              </div>
                <Card className="space-y-4">
                  <h2 className="text-xl font-semibold text-ink-950">Emergency dispatch</h2>
                  <p className="text-sm text-ink-700">Need help fast? We prioritize urgent requests and confirm ETAs before dispatch.</p>
                  <PhoneLink asButton className="w-full">Call {SITE.phoneDisplay}</PhoneLink>
                </Card>
              </div>
            </Container>
          </div>
        </Section>
      </section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <TrustStrip />
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <Reveal as="div" className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950 sm:text-3xl">Popular & emergency services</h2>
            <Link href="#categories" className="text-sm font-semibold text-teal-700">View all categories</Link>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {emergencyServices.map((service) => (
              <Reveal key={service.id} as="div">
                <Card className="group">
                  <h3 className="text-lg font-semibold text-ink-950">{service.shortLabel}</h3>
                  <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
                  <div className="mt-4 flex flex-wrap items-center gap-3">
                    <Link href={`/services/${service.category.slug}/${service.slug}`} className="text-sm font-semibold text-teal-700">
                      View details
                    </Link>
                    <RequestServiceTrigger serviceName={service.name} label="Request" size="sm" />
                  </div>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <section id="categories">
        <div className="h-px w-full bg-section-divider" aria-hidden="true" />
        <Section className="bg-surface-muted">
          <Container>
            <div className="space-y-12">
              {servicesConfig.map((category) => (
                <CategorySection key={category.slug} category={category} />
              ))}
            </div>
          </Container>
        </Section>
      </section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <Reveal as="h2" className="text-2xl font-semibold text-ink-950 sm:text-3xl">Related reading</Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {relatedReading.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <ReviewsSection title="Service experiences from local customers" />
        </Container>
      </Section>
    </>
  );
}
