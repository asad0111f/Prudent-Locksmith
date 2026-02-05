import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'SEO QA',
  description: 'Internal SEO QA checklist page.',
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: '/seo'
  }
};

export default function SeoPage() {
  const analyticsEnabled = process.env.ENABLE_ANALYTICS === 'true';
  const errorReportingEnabled = Boolean(process.env.ERROR_REPORTING_DSN);

  return (
    <Section className="pt-12">
      <Container>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-ink-950">SEO QA</h1>
          <p className="text-sm text-ink-700">Internal checks for launch readiness.</p>
          <div className="grid gap-2 text-sm text-ink-700">
            <p>Site URL: <span className="font-semibold">{SITE.baseUrl}</span></p>
            <p>Analytics enabled: <span className="font-semibold">{analyticsEnabled ? 'Yes' : 'No'}</span></p>
            <p>Error reporting enabled: <span className="font-semibold">{errorReportingEnabled ? 'Yes' : 'No'}</span></p>
          </div>
          <div className="space-y-2 text-sm">
            <Link href="/sitemap.xml" className="font-semibold text-teal-700">Sitemap</Link>
            <Link href="/robots.txt" className="font-semibold text-teal-700">Robots</Link>
            <Link href="/" className="font-semibold text-teal-700">Home</Link>
            <Link href="/services" className="font-semibold text-teal-700">Services</Link>
            <Link href="/service-areas" className="font-semibold text-teal-700">Service Areas</Link>
            <Link href="/emergency" className="font-semibold text-teal-700">Emergency</Link>
          </div>
          <div className="pt-2 text-xs text-ink-600">
            Structured data test targets:
            <div className="mt-2 flex flex-wrap gap-3">
              <Link href="/" className="font-semibold text-teal-700">Home (LocalBusiness)</Link>
              <Link href="/services/garage-door-repair/garage-door-not-opening-or-stuck" className="font-semibold text-teal-700">
                Service page
              </Link>
              <Link href="/service-areas/hamilton" className="font-semibold text-teal-700">
                City page
              </Link>
            </div>
          </div>
          <div className="text-xs text-ink-500">
            Use structured data testing tools on key pages and verify JSON-LD output.
          </div>
        </div>
      </Container>
    </Section>
  );
}
