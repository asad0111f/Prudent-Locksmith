import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ContactForm } from '@/components/contact-form';
import { PhoneLink } from '@/components/phone-link';
import { TrustStrip } from '@/components/trust-strip';
import { SeoFaq } from '@/components/seo-faq';
import { LandingPageClient } from '@/components/landing-page-client';
import { ProcessTimeline } from '@/components/process-timeline';
import { WhyDifferent } from '@/components/why-different';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site';
import { getServiceById, getServiceUrl, servicesConfig } from '@/lib/services';
import { cities } from '@/lib/cities';
import { getLandingPageBySlug, getLandingPages, validateLandingPages } from '@/content/landing-pages';
import { logEvent } from '@/lib/logging';

export async function generateStaticParams() {
  validateLandingPages();
  return getLandingPages().map((page) => ({ slug: page.slug }));
}

function getCanonicalForLanding(primaryService: string, city?: string) {
  if (city) {
    const match = cities.find((item) => item.name.toLowerCase() === city.toLowerCase());
    if (match) {
      return `/service-areas/${match.slug}`;
    }
  }
  const service = getServiceById(primaryService);
  if (service) {
    return getServiceUrl(service.category.slug, service.slug);
  }
  return '/services';
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const landing = getLandingPageBySlug(params.slug);
  if (!landing) {
    return {};
  }

  const title = landing.headline;
  const description = landing.subheadline;
  const canonical = landing.enableIndexing ? `/lp/${landing.slug}` : getCanonicalForLanding(landing.primaryService, landing.city);
  const robots = landing.enableIndexing
    ? { index: true, follow: true }
    : { index: false, follow: false };

  return {
    title,
    description,
    robots,
    alternates: {
      canonical
    },
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

export default function LandingPage({ params }: { params: { slug: string } }) {
  const landing = getLandingPageBySlug(params.slug);
  if (!landing) {
    return notFound();
  }

  const primaryService = getServiceById(landing.primaryService);
  if (!primaryService) {
    return notFound();
  }

  const relatedFromIds = primaryService.related
    .map((id) => getServiceById(id))
    .filter((item): item is NonNullable<ReturnType<typeof getServiceById>> => Boolean(item))
    .slice(0, 3);
  const relatedFromCategory =
    servicesConfig
      .find((category) => category.slug === primaryService.category.slug)
      ?.services.filter((service) => service.id !== primaryService.id)
      .slice(0, 3) || [];
  const relatedServices = relatedFromIds.length > 0 ? relatedFromIds : relatedFromCategory;

  const heroImage = landing.heroImage || primaryService.image;
  const heroAlt = primaryService.imageAlt || `${landing.headline} service`;

  logEvent('info', 'landing_page_render', {
    slug: landing.slug,
    service: primaryService.name,
    city: landing.city || ''
  });

  return (
    <>
      <LandingPageClient slug={landing.slug} serviceName={primaryService.name} city={landing.city} />
      <Section className="pt-10">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              {landing.urgencyBadge ? (
                <Reveal as="div">
                  <Badge>{landing.urgencyBadge}</Badge>
                </Reveal>
              ) : null}
              <Reveal as="div" delay={60}>
                <h1 className="text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">{landing.headline}</h1>
              </Reveal>
              <Reveal as="div" delay={120}>
                <p className="text-lg text-ink-700">{landing.subheadline}</p>
              </Reveal>
              <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                <PhoneLink asButton source="landing" serviceName={primaryService.name} city={landing.city} slug={landing.slug} className="w-full sm:w-auto">
                  Call Now
                </PhoneLink>
                <Button href="#request" variant="secondary" className="w-full sm:w-auto">Request Service</Button>
              </Reveal>
              <Reveal as="ul" delay={220} className="grid gap-2 text-sm text-ink-700">
                {landing.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </Reveal>
            </div>
            <section id="request">
              <Card className="p-6">
              <p className="text-sm font-semibold text-ink-950">Request service</p>
              <p className="mt-2 text-xs text-ink-700">Share a few details and we will confirm availability.</p>
              <div className="mt-4">
                <ContactForm
                  compact
                  submitLabel="Send Request"
                  serviceName={primaryService.name}
                  city={landing.city}
                  landingSlug={landing.slug}
                />
              </div>
              </Card>
            </section>
          </div>
          <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="relative aspect-[16/9] overflow-hidden rounded-3xl bg-slate-100 shadow-soft">
              <Image src={heroImage} alt={heroAlt} fill priority sizes="(max-width: 1024px) 100vw, 720px" className="object-cover" />
            </div>
            {landing.testimonial ? (
              <Card>
                <p className="text-sm font-semibold text-ink-950">Customer feedback</p>
                <p className="mt-3 text-sm text-ink-700">“{landing.testimonial.quote}”</p>
                <p className="mt-3 text-xs font-semibold text-ink-500">{landing.testimonial.name}</p>
              </Card>
            ) : null}
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
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold text-ink-950">What we help with</h2>
              <ul className="grid gap-2 text-sm text-ink-700">
                {landing.benefits.map((benefit) => (
                  <li key={benefit}>• {benefit}</li>
                ))}
              </ul>
              <div>
                <h2 className="text-2xl font-semibold text-ink-950">How it works</h2>
                <ol className="mt-3 grid gap-2 text-sm text-ink-700">
                  <li>1. Call or submit a quick request with your issue.</li>
                  <li>2. We confirm pricing and dispatch an ETA.</li>
                  <li>3. A technician completes the service safely.</li>
                  <li>4. Review the work and pay once you are satisfied.</li>
                </ol>
              </div>
            </div>
            <Card>
              <h3 className="text-lg font-semibold text-ink-950">Service coverage</h3>
              <p className="mt-2 text-sm text-ink-700">
                Serving Hamilton, ON and surrounding areas with local dispatch.
              </p>
              <Link href="/service-areas" className="mt-3 inline-flex text-sm font-semibold text-teal-700">
                View service areas
              </Link>
            </Card>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ProcessTimeline compact />
            <WhyDifferent />
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950">Related services</h2>
            <Link href="/services" className="text-sm font-semibold text-teal-700">View all services</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
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
      <Section>
        <Container>
          <SeoFaq title="Frequently asked questions" items={landing.faqs} includeJsonLd={Boolean(landing.enableIndexing)} />
        </Container>
      </Section>

      <Section className="bg-dark-gradient text-white">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Need help right now?</h2>
              <p className="mt-2 text-sm text-slate-200">Call for immediate dispatch or request a callback.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PhoneLink
                asButton
                className="bg-white text-ink-950 hover:bg-slate-200"
                source="landing"
                serviceName={primaryService.name}
                city={landing.city}
                slug={landing.slug}
              >
                Call Now
              </PhoneLink>
              <Link
                href="#request"
                className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/60 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                Request Service
              </Link>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
