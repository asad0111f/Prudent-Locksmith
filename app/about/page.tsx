import type { Metadata } from 'next';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: 'Meet the local locksmith and garage door team focused on safety, professionalism, and clear pricing.',
  alternates: {
    canonical: '/about'
  },
  openGraph: {
    title: 'About',
    description: 'Meet the local locksmith and garage door team focused on safety, professionalism, and clear pricing.',
    url: '/about'
  },
  twitter: {
    title: 'About',
    description: 'Meet the local locksmith and garage door team focused on safety, professionalism, and clear pricing.'
  }
};

export default function AboutPage() {
  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <h1 className="text-4xl font-semibold text-ink-950">Trust-first service for homes and businesses</h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-700">
              Prudent Locksmith and Garage Services is built for calm, dependable help. We show up with clear communication,
              professional tools, and respect for your property in Hamilton, ON and surrounding areas.
            </p>
          </Container>
        </div>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'Service promise',
                text: 'Upfront pricing, ETA updates, and no surprises. You approve work before we begin.'
              },
              {
                title: 'Safety & professionalism',
                text: 'Licensed where required, insured technicians, and careful on-site practices.'
              },
              {
                title: 'Local accountability',
                text: 'We stand behind the work and stay available for follow-up questions.'
              }
            ].map((item) => (
              <Card key={item.title}>
                <h2 className="text-lg font-semibold text-ink-950">{item.title}</h2>
                <p className="mt-2 text-sm text-ink-700">{item.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <h2 className="text-lg font-semibold text-ink-950">What customers can expect</h2>
              <ul className="mt-3 grid gap-2 text-sm text-ink-700">
                <li>• Fast response and confirmed arrival windows</li>
                <li>• Respectful technicians and clean work areas</li>
                <li>• Clear options for repair or replacement</li>
                <li>• Quality parts and workmanship focus</li>
              </ul>
            </Card>
            <Card>
              <h2 className="text-lg font-semibold text-ink-950">Service coverage</h2>
              <p className="mt-2 text-sm text-ink-700">
                We serve Hamilton, ON and nearby communities with locksmith, garage door repair, and opener support.
              </p>
              <PhoneLink asButton className="mt-4 w-full">Call {SITE.phoneDisplay}</PhoneLink>
            </Card>
          </div>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-dark-gradient text-white">
        <Container>
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h2 className="text-2xl font-semibold">Ready for help today?</h2>
              <p className="mt-2 text-sm text-slate-200">Call now for immediate assistance or schedule a visit.</p>
            </div>
            <PhoneLink asButton className="bg-white text-ink-950 hover:bg-slate-200">
              Call {SITE.phoneDisplay}
            </PhoneLink>
          </div>
        </Container>
      </Section>
    </>
  );
}
