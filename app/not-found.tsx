import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export default function NotFound() {
  return (
    <Section className="pt-12">
      <div className="relative">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
        <Container>
          <div className="space-y-4">
            <h1 className="text-4xl font-semibold text-ink-950">Page not found</h1>
            <p className="text-sm text-ink-700">
              The page you’re looking for doesn’t exist. Use the links below to get back on track or call for immediate help.
            </p>
            <div className="flex flex-wrap gap-3">
              <PhoneLink asButton>Call {SITE.phoneDisplay}</PhoneLink>
              <Link href="/services" className="text-sm font-semibold text-teal-700">View services</Link>
              <Link href="/service-areas" className="text-sm font-semibold text-teal-700">Service areas</Link>
            </div>
          </div>
        </Container>
      </div>
    </Section>
  );
}
