import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { Badge } from '@/components/ui/badge';
import { RequestServiceTrigger } from '@/components/request-service-trigger';
import { PhoneLink } from '@/components/phone-link';
import { getAllResources } from '@/lib/resources';

export const metadata: Metadata = {
  title: 'Resources',
  description: 'Practical locksmith and garage door guides for Hamilton, ON and surrounding areas.',
  alternates: { canonical: '/resources' },
  openGraph: {
    title: 'Resources',
    description: 'Practical locksmith and garage door guides for Hamilton, ON and surrounding areas.',
    url: '/resources'
  },
  twitter: {
    title: 'Resources',
    description: 'Practical locksmith and garage door guides for Hamilton, ON and surrounding areas.'
  }
};

export default function ResourcesPage() {
  const resources = getAllResources();
  const tags = Array.from(new Set(resources.flatMap((item) => item.tags || [])));

  return (
    <>
      <Section className="pt-12">
        <Container>
          <div className="space-y-4">
            <Badge>Guides & Tips</Badge>
            <h1 className="text-4xl font-semibold text-ink-950">Resources</h1>
            <p className="max-w-2xl text-lg text-ink-700">
              Practical advice for lockouts, garage door issues, and smart upgrades. Written for homeowners and businesses in
              Hamilton, ON and surrounding areas.
            </p>
            <div className="flex flex-wrap gap-3">
              <PhoneLink asButton>Call Now</PhoneLink>
              <RequestServiceTrigger label="Request Service" />
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-700">
                {tag}
              </span>
            ))}
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {resources.map((item) => (
              <article key={item.slug} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h2 className="text-xl font-semibold text-ink-950">
                  <Link href={`/resources/${item.slug}`}>{item.title}</Link>
                </h2>
                <p className="mt-2 text-sm text-ink-700">{item.description}</p>
                <div className="mt-3 flex flex-wrap gap-3 text-xs text-ink-600">
                  <span>{item.readTime} min read</span>
                  <span>Last updated {item.lastUpdated}</span>
                </div>
                <Link href={`/resources/${item.slug}`} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  Read article
                </Link>
              </article>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
