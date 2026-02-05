import type { Metadata } from 'next';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from '@/components/breadcrumbs';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { TrustStrip } from '@/components/trust-strip';
import { InlineCta, EmergencyCallout } from '@/components/mdx/cta-block';
import { BookServiceForm } from '@/components/mdx/book-service-form';
import { H2, H3 } from '@/components/mdx/heading';
import { InternalLinks } from '@/components/internal-links';
import { getAllResourceSlugs, getResourceBySlug } from '@/lib/resources';
import { SITE } from '@/lib/site';
import { getServiceById } from '@/lib/services';

export async function generateStaticParams() {
  return getAllResourceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const resource = getResourceBySlug(params.slug);
  if (!resource) return {};

  const canonical = `/resources/${resource.slug}`;

  return {
    title: resource.title,
    description: resource.description,
    alternates: { canonical },
    robots: resource.noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: resource.title,
      description: resource.description,
      url: `${SITE.baseUrl}${canonical}`,
      images: [{ url: `${SITE.baseUrl}/og/resources-default.svg` }]
    },
    twitter: {
      title: resource.title,
      description: resource.description
    }
  };
}

export default function ResourceArticlePage({ params }: { params: { slug: string } }) {
  const resource = getResourceBySlug(params.slug);
  if (!resource) return notFound();

  const relatedServices = resource.relatedServices
    .map((id) => getServiceById(id))
    .filter((item): item is NonNullable<ReturnType<typeof getServiceById>> => Boolean(item));

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: resource.title,
    description: resource.description,
    datePublished: resource.date,
    dateModified: resource.lastUpdated,
    author: {
      '@type': 'Organization',
      name: SITE.name
    },
    publisher: {
      '@type': 'Organization',
      name: SITE.name
    },
    mainEntityOfPage: `${SITE.baseUrl}/resources/${resource.slug}`
  };

  return (
    <>
      <Section className="pt-8">
        <Container>
          <Breadcrumbs
            baseUrl={SITE.baseUrl}
            items={[
              { label: 'Home', href: '/' },
              { label: 'Resources', href: '/resources' },
              { label: resource.title, href: `/resources/${resource.slug}` }
            ]}
          />
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">Resource</p>
              <h1 className="text-4xl font-semibold text-ink-950">{resource.title}</h1>
              <p className="text-lg text-ink-700">{resource.description}</p>
              <div className="flex flex-wrap gap-3 text-xs text-ink-600">
                <span>{resource.readTime} min read</span>
                <span>Last updated {resource.lastUpdated}</span>
                <span>Last reviewed {resource.lastReviewed}</span>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-sm font-semibold text-ink-950">Table of contents</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {resource.headings.map((heading) => (
                  <li key={heading.id} className={heading.level === 3 ? 'ml-4' : undefined}>
                    <a href={`#${heading.id}`} className="hover:text-ink-950">
                      {heading.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <TrustStrip />
        </Container>
      </Section>

      <Section>
        <Container>
          <div className="space-y-6">
            <MDXRemote
              source={resource.content}
              components={{
                h2: H2,
                h3: H3,
                InlineCta,
                EmergencyCallout,
                BookServiceForm
              }}
            />
          </div>
        </Container>
      </Section>

      <Section className="bg-slate-50">
        <Container>
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold text-ink-950">Related services</h2>
            <Link href="/services" className="text-sm font-semibold text-teal-700">View all services</Link>
          </div>
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {relatedServices.map((service) => (
              <div key={service.id} className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
                <h3 className="text-lg font-semibold text-ink-950">{service.name}</h3>
                <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
                <Link href={`/services/${service.category.slug}/${service.slug}`} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  View details
                </Link>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      <Section>
        <Container>
          <InternalLinks type="resource" currentResource={resource.slug} />
        </Container>
      </Section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }} />
    </>
  );
}
