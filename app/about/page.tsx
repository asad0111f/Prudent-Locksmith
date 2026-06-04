import type { Metadata } from 'next';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About Prudent Locksmith and Garage Services',
  description: `${SITE.name} — licensed, insured, and locally operated locksmith and garage door service in ${SITE.serviceAreaPrimary} and surrounding communities.`,
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About Prudent Locksmith and Garage Services',
    description: `Locally operated locksmith and garage door service in ${SITE.serviceAreaPrimary}.`,
    url: '/about'
  }
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <h1 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl lg:text-5xl">
              Trust-first service for homes and businesses
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-700">
              {SITE.name} is a locally operated locksmith and garage door company based in {SITE.serviceAreaPrimary}. We
              show up with clear communication, professional tools, and respect for your property across Hamilton and the GTA.
            </p>

            {/* License / Insurance trust badge */}
            <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-teal-200 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="text-teal-600 flex-shrink-0">
                <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
              </svg>
              Licensed &amp; Insured · {SITE.province}, {SITE.country}
            </div>
          </Container>
        </div>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* Core commitments */}
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Service promise',
                icon: '💬',
                text: 'Upfront pricing, ETA updates, and no surprises. You approve the quoted price before we begin any work.'
              },
              {
                title: 'Licensing & insurance',
                icon: '🛡️',
                text: `${SITE.licenseNote} We confirm coverage details before dispatch upon request.`
              },
              {
                title: 'Local accountability',
                icon: '📍',
                text: 'We are a locally operated business — not a national call centre. We stand behind our work and are reachable after the job.'
              }
            ].map((item) => (
              <Card key={item.title} variant="accent">
                <span className="text-2xl" aria-hidden="true">{item.icon}</span>
                <h2 className="mt-3 font-display text-lg font-bold text-ink-950">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* Service area */}
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <div>
              <h2 className="font-display text-2xl font-bold text-ink-950">Service area</h2>
              <p className="mt-3 text-sm text-ink-700">
                We serve residential, automotive, and commercial customers across the following communities in {SITE.province}:
              </p>
              <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-ink-700">
                {SITE.serviceAreaCities.map((city) => (
                  <li key={city} className="flex items-center gap-2">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600 flex-shrink-0" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    {city}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-xs text-ink-500">
                Service availability in specific neighbourhoods may vary. Contact us to confirm coverage for your location.
              </p>
              <Link href="/service-areas" className="mt-4 inline-flex font-semibold text-sm text-teal-700 hover:text-teal-600 transition-colors">
                View service area details →
              </Link>
            </div>

            <Card>
              <h2 className="font-display text-lg font-bold text-ink-950">Hours &amp; contact</h2>
              <div className="mt-3 space-y-3 text-sm text-ink-700">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-teal-500 animate-pulse flex-shrink-0" aria-hidden="true" />
                  <span className="font-medium text-teal-700">Emergency service: 24/7</span>
                </div>
                <p>{SITE.hours}</p>
                <div className="border-t border-slate-100 pt-3 space-y-1">
                  <p>Phone: <PhoneLink className="font-semibold text-ink-950">{SITE.phoneDisplay}</PhoneLink></p>
                  <p>Email: <a href={`mailto:${SITE.email}`} className="text-teal-700 underline hover:no-underline">{SITE.email}</a></p>
                </div>
              </div>
              <PhoneLink asButton className="mt-4 w-full">
                Call {SITE.phoneDisplay}
              </PhoneLink>
            </Card>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* What customers expect */}
      <Section>
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <h2 className="font-display text-lg font-bold text-ink-950">What customers can expect</h2>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {[
                  'Fast response with confirmed arrival windows',
                  'Clear quote before any work begins — no surprises',
                  'Respectful technicians and clean work areas',
                  'Clear options for repair or replacement',
                  'Quality parts with workmanship guarantee',
                  'Receipt and service documentation on request'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <div className="mt-0.5 flex h-4 w-4 flex-shrink-0 items-center justify-center rounded-full bg-teal-gradient">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
            <Card>
              <h2 className="font-display text-lg font-bold text-ink-950">Legal &amp; compliance</h2>
              <div className="mt-3 space-y-3 text-sm text-ink-700">
                <p>{SITE.licenseNote}</p>
                <p>
                  We operate in accordance with Ontario&apos;s consumer protection standards. We will not perform service without your explicit approval of the quoted price.
                </p>
                <p>
                  We verify customer identity and property authorization before performing locksmith services, in compliance with best-practice industry standards.
                </p>
              </div>
              <div className="mt-4 flex flex-wrap gap-3 text-xs">
                <Link href="/privacy" className="font-semibold text-teal-700 underline">Privacy Policy</Link>
                <Link href="/terms" className="font-semibold text-teal-700 underline">Terms of Service</Link>
              </div>
            </Card>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* Dark CTA */}
      <Section className="bg-dark-gradient text-white">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="font-display text-2xl font-bold">Ready for help today?</h2>
              <p className="mt-2 text-sm text-slate-300">Call now for immediate assistance or submit a service request online.</p>
            </div>
            <PhoneLink asButton>
              Call {SITE.phoneDisplay}
            </PhoneLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
