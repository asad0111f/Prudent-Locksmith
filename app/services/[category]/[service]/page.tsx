import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { RequestServiceTrigger } from '@/components/request-service-trigger';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { RequestServiceForm } from '@/components/request-service-form';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { SeoFaq } from '@/components/seo-faq';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { ProcessTimeline } from '@/components/process-timeline';
import { WhyDifferent } from '@/components/why-different';
import { InternalLinks } from '@/components/internal-links';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site';
import { getServiceByParams, getServicePaths, getServiceUrl, servicesConfig, validateServiceSpecificity } from '@/lib/services';

export async function generateStaticParams() {
  validateServiceSpecificity();
  return getServicePaths();
}

export function generateMetadata({ params }: { params: { category: string; service: string } }): Metadata {
  const service = getServiceByParams(params.category, params.service);
  if (!service) {
    return {};
  }

  const title = `${service.name} | ${SITE.name}`;
  const description = `${service.name} in your local area. Fast, professional help with clear pricing across Hamilton and the GTA.`;
  const canonical = getServiceUrl(service.category.slug, service.slug);

  return {
    title: service.name,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: `${SITE.baseUrl}${canonical}`
    },
    twitter: {
      title,
      description
    }
  };
}

export default function ServicePage({ params }: { params: { category: string; service: string } }) {
  const service = getServiceByParams(params.category, params.service);
  if (!service) {
    return notFound();
  }

  const categoryAnchor = `/services#${service.category.slug}`;
  const relatedServices = service.related
    .map((id) => servicesConfig.flatMap((cat) => cat.services).find((item) => item.id === id))
    .filter((item): item is (typeof servicesConfig)[number]['services'][number] => Boolean(item));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service.name,
    description: service.description,
    dateModified: service.lastUpdated,
    areaServed: 'Local service area',
    provider: {
      '@type': 'LocalBusiness',
      name: SITE.name,
      telephone: SITE.phoneDisplay,
      url: SITE.baseUrl
    }
  };

  return (
    <>
      <Section className="pt-8">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-accent-radial" aria-hidden="true" />
          <Container>
          <Breadcrumbs
            baseUrl={SITE.baseUrl}
            items={[
              { label: 'Home', href: '/' },
              { label: 'Services', href: '/services' },
              { label: service.category.name, href: `/services#${service.category.slug}` },
              { label: service.name, href: getServiceUrl(service.category.slug, service.slug) }
            ]}
          />
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6">
              {service.urgent ? (
                <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                  Emergency Service
                </span>
              ) : null}
              <Reveal as="div" delay={60}>
                <h1 className="text-4xl font-semibold text-ink-950 md:text-5xl">{service.name}</h1>
              </Reveal>
              <Reveal as="div" delay={120}>
                <p className="text-lg text-ink-700">
                  {service.description} We dispatch experienced technicians across local neighborhoods with clear pricing and fast response.
                </p>
              </Reveal>
              <Reveal as="div" delay={150} className="flex flex-wrap gap-4 text-xs text-ink-500">
                <span>Last updated {service.lastUpdated}</span>
                <span>Last reviewed {service.lastReviewed}</span>
              </Reveal>
              <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                <PhoneLink asButton eventName="service_cta_click" serviceName={service.name}>
                  Call Now
                </PhoneLink>
                <RequestServiceTrigger serviceName={service.name} label="Request Service" variant="secondary" />
                {service.urgent ? (
                  <span className="inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700">
                    Urgent response prioritized
                  </span>
                ) : null}
              </Reveal>
              <Reveal as="ul" delay={220} className="grid gap-2 text-sm text-ink-700">
                <li>• Same-day availability for most requests</li>
                <li>• Licensed, insured, and background-checked technicians</li>
                <li>• Transparent, upfront pricing before work begins</li>
                <li>• Local support across Hamilton and the GTA</li>
              </Reveal>
              <Reveal as="div" delay={260}>
                <Link href={categoryAnchor} className="inline-flex text-sm font-semibold text-teal-700">
                  Back to {service.category.name}
                </Link>
              </Reveal>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-slate-100 shadow-soft">
              <Image
                src={service.image}
                alt={service.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover"
              />
            </div>
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
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10">
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-ink-950">Common problems we solve</h2>
                <ul className="grid gap-2 text-sm text-ink-700">
                  {service.commonProblems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-semibold text-ink-950">Our process</h2>
                <ol className="grid gap-2 text-sm text-ink-700">
                  {service.process.map((step, index) => (
                    <li key={step}>{index + 1}. {step}</li>
                  ))}
                </ol>
              </div>
              <ProcessTimeline />
              <SeoFaq items={service.faqs} includeJsonLd />
            </div>
            <div className="space-y-6">
              <Card>
                <h2 className="text-lg font-semibold text-ink-950">Why choose Prudent</h2>
                <ul className="mt-4 grid gap-2 text-sm text-ink-700">
                  <li>• Licensed where required and insured technicians</li>
                  <li>• Same-day service available</li>
                  <li>• Upfront, honest pricing</li>
                  <li>• Warranty-backed workmanship</li>
                  <li>• Local service area coverage</li>
                </ul>
              </Card>
              <WhyDifferent />
              <RequestServiceForm serviceName={service.name} />
            </div>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950">Related services</h2>
            <Link href="/services" className="text-sm font-semibold text-teal-700">View all services</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((item) => (
              <Card key={item.id} className="group">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 360px"
                    className="object-cover transition duration-300 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-ink-950">{item.shortLabel}</h3>
                <p className="mt-2 text-sm text-ink-700">{item.shortDescription}</p>
                <Link href={getServiceUrl(item.category.slug, item.slug)} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  View details
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="surface-panel p-6">
            <h2 className="text-xl font-semibold text-ink-950">Serving Hamilton & nearby</h2>
            <p className="mt-2 text-sm text-ink-700">
              We provide {service.name.toLowerCase()} across Hamilton, ON and surrounding areas.
            </p>
            <div className="mt-4 flex flex-wrap gap-3 text-sm font-semibold text-teal-700">
              <Link href="/service-areas">View all service areas</Link>
              <Link href="/service-areas/hamilton">Hamilton</Link>
              <Link href="/service-areas/burlington">Burlington</Link>
              <Link href="/service-areas/oakville">Oakville</Link>
              <Link href="/service-areas/mississauga">Mississauga</Link>
            </div>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <InternalLinks type="service" currentId={service.id} />
        </Container>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
