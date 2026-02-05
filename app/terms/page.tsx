import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: 'Service terms for Prudent Locksmith and Garage Services.',
  alternates: {
    canonical: '/terms'
  },
  openGraph: {
    title: 'Terms of Service',
    description: 'Service terms for Prudent Locksmith and Garage Services.',
    url: '/terms'
  },
  twitter: {
    title: 'Terms of Service',
    description: 'Service terms for Prudent Locksmith and Garage Services.'
  }
};

export default function TermsPage() {
  return (
    <Section className="pt-12">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
        <Container>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">Terms of service</h1>
            <p className="text-sm text-ink-700">
              Service availability, pricing, and warranties vary by job and are confirmed before work begins. By booking service,
              you agree to the quoted scope and pricing approved at the time of dispatch.
            </p>
            <p className="text-sm text-ink-700">
              If you have questions about these terms, contact us and we will be glad to help.
            </p>
            <div className="flex flex-wrap gap-3">
              <PhoneLink asButton>Call {SITE.phoneDisplay}</PhoneLink>
              <Link href="/contact" className="text-sm font-semibold text-teal-700">Request service</Link>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
