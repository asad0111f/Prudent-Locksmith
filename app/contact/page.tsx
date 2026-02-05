import type { Metadata } from 'next';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ContactForm } from '@/components/contact-form';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Call now for immediate locksmith or garage door service, or submit a request for fast scheduling.',
  alternates: {
    canonical: '/contact'
  },
  openGraph: {
    title: 'Contact',
    description: 'Call now for immediate locksmith or garage door service, or submit a request for fast scheduling.',
    url: '/contact'
  },
  twitter: {
    title: 'Contact',
    description: 'Call now for immediate locksmith or garage door service, or submit a request for fast scheduling.'
  }
};

export default function ContactPage() {
  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <h1 className="text-4xl font-semibold text-ink-950">Call for immediate service</h1>
            <p className="mt-4 max-w-2xl text-lg text-ink-700">
              For urgent issues, call now to confirm availability and ETA. If you prefer, send a request and we will respond quickly.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <PhoneLink asButton>Call {SITE.phoneDisplay}</PhoneLink>
              <Badge>Fast response in your area</Badge>
            </div>
          </Container>
        </div>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
            <Card className="p-8">
              <ContactForm showServiceNeeded showCity submitLabel="Send Request" />
              <p className="mt-4 text-xs text-ink-700">
                By submitting, you consent to be contacted about your service request.
              </p>
            </Card>
            <div className="space-y-4">
              <Card>
                <h2 className="text-lg font-semibold text-ink-950">Dispatch line</h2>
                <p className="mt-2 text-sm text-ink-700">Speak with a live dispatcher for immediate assistance.</p>
                <PhoneLink asButton className="mt-4 w-full">Call {SITE.phoneDisplay}</PhoneLink>
              </Card>
              <Card>
                <h2 className="text-lg font-semibold text-ink-950">What to include for faster dispatch</h2>
                <ul className="mt-3 grid gap-2 text-sm text-ink-700">
                  <li>• Service type (lockout, rekey, opener, repair)</li>
                  <li>• Address or nearest intersection</li>
                  <li>• What is happening and any safety concerns</li>
                  <li>• Photos if safe to share</li>
                </ul>
              </Card>
              <Card>
                <h2 className="text-lg font-semibold text-ink-950">Service area</h2>
                <p className="mt-2 text-sm text-ink-700">Serving Hamilton, ON and surrounding areas.</p>
                <p className="mt-2 text-sm text-ink-700">Hours: 7 days a week, 24/7 emergency availability.</p>
              </Card>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
