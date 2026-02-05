import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { RequestServiceTrigger } from '@/components/request-service-trigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ReviewsSection } from '@/components/reviews';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Locksmith & Garage Door Service in Your Area',
  description: 'Fast locksmith and garage door help with clear pricing and reliable local technicians. Call now for urgent service.',
  alternates: {
    canonical: '/'
  }
};

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneDisplay,
    url: SITE.baseUrl,
    areaServed: 'Hamilton, ON and surrounding areas',
    openingHours: 'Mo-Su 00:00-23:59'
  };

  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Reveal as="div" delay={0}>
                <Badge>Emergency & Same-Day Dispatch</Badge>
              </Reveal>
              <Reveal as="div" delay={60}>
                <h1 className="text-4xl font-semibold leading-tight text-ink-950 md:text-5xl">
                  Fast locksmith & garage door help when you need it most
                </h1>
              </Reveal>
              <Reveal as="div" delay={120}>
                <p className="text-lg text-ink-700">
                  Locked out, stuck door, or damaged lock? Prudent Locksmith and Garage Services delivers calm, professional help
                  with upfront pricing and local technicians across Hamilton and the GTA.
                </p>
              </Reveal>
              <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                <PhoneLink asButton>Call Now</PhoneLink>
                <RequestServiceTrigger label="Request Service" variant="secondary" />
              </Reveal>
              <Reveal as="ul" delay={220} className="grid gap-2 text-sm text-ink-700">
                <li>• Fast response for urgent issues</li>
                <li>• Clear quotes before work starts</li>
                <li>• Residential, automotive, and commercial support</li>
              </Reveal>
            </div>
            <Card className="p-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Image src="/logo-mark.svg" alt="Prudent" width={48} height={48} />
                  <div>
                    <p className="text-sm font-semibold text-ink-950">Local dispatch, reliable techs</p>
                    <p className="text-xs text-ink-700">Hamilton, ON and nearby areas</p>
                  </div>
                </div>
                <div className="space-y-3 text-sm text-ink-700">
                  <p>Need immediate help? Call our live dispatch line.</p>
                  <PhoneLink className="text-base font-semibold text-ink-950">{SITE.phoneDisplay}</PhoneLink>
                </div>
                <PhoneLink asButton className="w-full">Call for Immediate Service</PhoneLink>
              </div>
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
          <Reveal as="div" className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950">Services built for urgent and planned needs</h2>
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-teal-700">
              <Link href="/services">View all services</Link>
              <Link href="/emergency">Emergency service</Link>
              <Link href="/service-areas">Service areas</Link>
            </div>
          </Reveal>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: 'Garage Door Emergency',
                text: 'Stuck doors, spring failures, and urgent safety issues.',
                href: '/services/garage-door-repair/garage-door-not-opening-or-stuck'
              },
              {
                title: 'Garage Door Openers',
                text: 'New installs, upgrades, belt replacements, and programming.',
                href: '/services/garage-door-opener-install-and-service/new-garage-door-opener-installation'
              },
              {
                title: 'Residential Locksmith',
                text: 'Lockouts, rekeying, cylinder and lock replacement.',
                href: '/services/residential-locksmith-services/home-and-apartment-lockouts'
              },
              {
                title: 'Automotive Locksmith',
                text: 'Fast vehicle entry and mobile lockout help.',
                href: '/services/automotive-locksmith-services/car-lockouts'
              },
              {
                title: 'Commercial Locksmith',
                text: 'Storefront repairs, mortise locks, and troubleshooting.',
                href: '/services/commercial-storefront-lock-services/storefront-lock-repair'
              }
            ].map((item) => (
              <Reveal key={item.title} as="div">
                <Card className="group">
                  <h3 className="text-lg font-semibold text-ink-950">{item.title}</h3>
                  <p className="mt-2 text-sm text-ink-700">{item.text}</p>
                  <Link href={item.href} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                    View details
                  </Link>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-ink-950">How it works</h2>
              <ol className="mt-4 grid gap-3 text-sm text-ink-700">
                <li>1. Call or request service with your issue and location.</li>
                <li>2. We confirm ETA and provide an upfront quote.</li>
                <li>3. A technician arrives and completes the fix.</li>
                <li>4. Review the work, pay, and get peace of mind.</li>
              </ol>
            </div>
            <Card>
              <h3 className="text-lg font-semibold text-ink-950">Need help now?</h3>
              <p className="mt-2 text-sm text-ink-700">Speak with dispatch for immediate assistance or schedule a visit.</p>
              <PhoneLink asButton className="mt-4 w-full">Call {SITE.phoneDisplay}</PhoneLink>
            </Card>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-ink-950">Why choose Prudent</h2>
              <ul className="mt-4 grid gap-2 text-sm text-ink-700">
                <li>• Licensed where required and insured technicians</li>
                <li>• Clear, upfront pricing before work begins</li>
                <li>• Same-day availability for urgent requests</li>
                <li>• Respectful, clean, and professional service</li>
                <li>• Warranty-backed workmanship options</li>
                <li>• Local coverage across Hamilton and nearby cities</li>
              </ul>
            </div>
            <div className="space-y-4">
              <Card>
                <h3 className="text-lg font-semibold text-ink-950">Emergency dispatch priority</h3>
                <p className="mt-2 text-sm text-ink-700">Stuck door or lockout? We prioritize urgent calls and confirm your ETA quickly.</p>
                <PhoneLink asButton className="mt-4 w-full">Call Now</PhoneLink>
              </Card>
              <Card>
                <h3 className="text-lg font-semibold text-ink-950">Prefer to schedule?</h3>
                <p className="mt-2 text-sm text-ink-700">Request service online and we will confirm timing and pricing.</p>
                <Button href="/contact" variant="secondary" className="mt-4 w-full">
                  Request Service
                </Button>
              </Card>
            </div>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <ReviewsSection />
        </Container>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
