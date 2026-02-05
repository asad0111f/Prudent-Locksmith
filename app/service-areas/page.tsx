import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { cities } from '@/lib/cities';

export const metadata: Metadata = {
  title: 'Service Areas',
  description: 'Local locksmith and garage door service across Hamilton, ON and surrounding areas.',
  alternates: {
    canonical: '/service-areas'
  },
  openGraph: {
    title: 'Service Areas',
    description: 'Local locksmith and garage door service across Hamilton, ON and surrounding areas.',
    url: '/service-areas'
  },
  twitter: {
    title: 'Service Areas',
    description: 'Local locksmith and garage door service across Hamilton, ON and surrounding areas.'
  }
};

export default function ServiceAreasPage() {
  return (
    <>
      <Section className="pt-12">
        <Container>
          <div className="space-y-4">
            <Badge>Local Service Coverage</Badge>
            <h1 className="text-4xl font-semibold text-ink-950">Service areas we cover</h1>
            <p className="max-w-2xl text-lg text-ink-700">
              We dispatch across Hamilton, ON and nearby cities with fast response and clear pricing. Choose your area to see
              local service details and top services.
            </p>
            <div className="flex flex-wrap gap-3">
              <PhoneLink asButton>Call Now</PhoneLink>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-sm font-semibold text-ink-950 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2"
              >
                Request Service
              </Link>
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
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => (
              <Card key={city.slug} className="group">
                <h2 className="text-lg font-semibold text-ink-950">{city.name}</h2>
                <p className="mt-2 text-sm text-ink-700">{city.description}</p>
                <Link href={`/service-areas/${city.slug}`} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  View {city.name} services
                </Link>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
