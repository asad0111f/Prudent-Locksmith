import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy practices for Prudent Locksmith and Garage Services.',
  alternates: {
    canonical: '/privacy'
  },
  openGraph: {
    title: 'Privacy Policy',
    description: 'Privacy practices for Prudent Locksmith and Garage Services.',
    url: '/privacy'
  },
  twitter: {
    title: 'Privacy Policy',
    description: 'Privacy practices for Prudent Locksmith and Garage Services.'
  }
};

export default function PrivacyPage() {
  return (
    <Section className="pt-12">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
        <Container>
          <div className="space-y-4">
            <h1 className="text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">Privacy policy</h1>
            <p className="text-sm text-ink-700">
              We collect contact details you provide to respond to service requests. We do not sell your information and only share
              it with technicians or partners necessary to deliver service.
            </p>
            <p className="text-sm text-ink-700">
              If you have questions about this policy, contact us and we will respond promptly.
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
