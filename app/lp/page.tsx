import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getLandingPages, validateLandingPages } from '@/content/landing-pages';

export const metadata: Metadata = {
  title: 'Landing Pages',
  description: 'Internal landing page list.',
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: '/lp'
  }
};

export default function LandingPageHub() {
  validateLandingPages();
  const pages = getLandingPages();

  return (
    <Section className="pt-12">
      <Container>
        <div className="space-y-4">
          <h1 className="text-3xl font-semibold text-ink-950">Landing Pages</h1>
          <p className="text-sm text-ink-700">Internal list for testing and QA.</p>
          <ul className="grid gap-2 text-sm text-ink-700">
            {pages.map((page) => (
              <li key={page.slug}>
                <Link href={`/lp/${page.slug}`} className="font-semibold text-teal-700">
                  {page.headline}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </Section>
  );
}
