import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SeoFaq } from '@/components/seo-faq';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { ProcessTimeline } from '@/components/process-timeline';
import { WhyDifferent } from '@/components/why-different';
import { Reveal } from '@/components/reveal';
import { SITE } from '@/lib/site';
import { getServiceById } from '@/lib/services';

export const metadata: Metadata = {
  title: 'Emergency Locksmith & Garage Door Service',
  description: 'Urgent lockouts and garage door emergencies with fast response and upfront pricing in Hamilton, ON and nearby areas.',
  alternates: {
    canonical: '/emergency'
  },
  openGraph: {
    title: 'Emergency Locksmith & Garage Door Service',
    description: 'Urgent lockouts and garage door emergencies with fast response and upfront pricing in Hamilton, ON and nearby areas.',
    url: '/emergency'
  },
  twitter: {
    title: 'Emergency Locksmith & Garage Door Service',
    description: 'Urgent lockouts and garage door emergencies with fast response and upfront pricing in Hamilton, ON and nearby areas.'
  }
};

const urgentServiceIds = [
  'garage-door-repair/garage-door-not-opening-or-stuck',
  'garage-door-repair/broken-garage-door-spring-repair',
  'residential-locksmith-services/home-and-apartment-lockouts',
  'automotive-locksmith-services/car-lockouts'
];

const faqs = [
  {
    q: 'How fast can you respond to an emergency?',
    a: 'We prioritize urgent requests and provide an ETA before dispatch.'
  },
  {
    q: 'Do you provide upfront pricing?',
    a: 'Yes, we confirm pricing before work begins so you can approve the service.'
  },
  {
    q: 'What areas do you serve?',
    a: 'We serve Hamilton, ON and surrounding areas with local technicians.'
  }
];

export default function EmergencyPage() {
  const urgentServices = urgentServiceIds
    .map((id) => getServiceById(id))
    .filter((item): item is NonNullable<ReturnType<typeof getServiceById>> => Boolean(item));

  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-6">
              <Reveal as="div" delay={0}>
                <Badge>Emergency Dispatch</Badge>
              </Reveal>
              <Reveal as="div" delay={60}>
                <h1 className="text-4xl font-semibold text-ink-950">Emergency locksmith & garage door service</h1>
              </Reveal>
              <Reveal as="div" delay={120}>
                <p className="text-lg text-ink-700">
                  Locked out or stuck door? Call now for fast dispatch and clear pricing across Hamilton, ON and nearby areas.
                </p>
              </Reveal>
              <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                <PhoneLink asButton eventName="emergency_cta_click">Call Now</PhoneLink>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
                >
                  Request Service
                </Link>
              </Reveal>
              <Reveal as="ul" delay={220} className="grid gap-2 text-sm text-ink-700">
                <li>• Fast response and ETA confirmation</li>
                <li>• Upfront pricing before work starts</li>
                <li>• Licensed where required and insured technicians</li>
              </Reveal>
            </div>
            <Card>
              <h2 className="text-lg font-semibold text-ink-950">Immediate help line</h2>
              <p className="mt-2 text-sm text-ink-700">Speak with a dispatcher now for urgent service.</p>
              <PhoneLink asButton className="mt-4 w-full" eventName="emergency_cta_click">
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
          <h2 className="text-2xl font-semibold text-ink-950">Top urgent services</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {urgentServices.map((service) => (
              <Card key={service.id} className="group">
                <h3 className="text-lg font-semibold text-ink-950">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
                <Link href={`/services/${service.category.slug}/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
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
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <ProcessTimeline />
            <WhyDifferent />
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <SeoFaq title="Emergency service FAQs" items={faqs} includeJsonLd />
        </Container>
      </Section>
    </>
  );
}
