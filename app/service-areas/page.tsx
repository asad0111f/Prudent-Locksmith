import type { Metadata } from 'next';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { cities } from '@/lib/cities';
import { ServiceImage } from '@/components/site-image';
import { IMAGES } from '@/lib/images';

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
  const areaImages: Record<string, { src: string; alt: string }> = {
    hamilton: {
      src: IMAGES.areas.hamilton,
      alt: 'City neighborhood with residential and commercial streets.'
    },
    burlington: {
      src: IMAGES.areas.burlington,
      alt: 'Residential street with modern homes and driveways.'
    },
    oakville: {
      src: IMAGES.areas.oakville,
      alt: 'Row of storefronts with street-level entry doors.'
    },
    mississauga: {
      src: IMAGES.areas.mississauga,
      alt: 'Urban neighborhood streetscape.'
    },
    milton: {
      src: IMAGES.areas.milton,
      alt: 'Residential neighborhood street.'
    },
    brampton: {
      src: IMAGES.areas.brampton,
      alt: 'City street with local storefronts.'
    },
    'stoney-creek': {
      src: IMAGES.areas.stoneyCreek,
      alt: 'Neighborhood street with homes and driveways.'
    },
    ancaster: {
      src: IMAGES.areas.ancaster,
      alt: 'Residential area with mature trees and homes.'
    },
    dundas: {
      src: IMAGES.areas.dundas,
      alt: 'Downtown street with shops and storefronts.'
    },
    waterdown: {
      src: IMAGES.areas.waterdown,
      alt: 'Suburban street with homes.'
    }
  };

  return (
    <>
      <Section className="pt-12">
        <div className="relative">
          <div className="pointer-events-none absolute inset-0 -z-10 bg-hero-gradient" aria-hidden="true" />
          <Container>
            <div className="space-y-4">
              <Badge>Local Service Coverage</Badge>
              <h1 className="text-3xl font-semibold text-ink-950 sm:text-4xl lg:text-5xl">Service areas we cover</h1>
              <p className="max-w-2xl text-lg text-ink-700">
                We dispatch across Hamilton, ON and nearby cities with fast response and clear pricing. Choose your area to see
                local service details and top services.
              </p>
              <div className="flex flex-wrap gap-3">
                <PhoneLink asButton className="w-full sm:w-auto">Call Now</PhoneLink>
                <Button href="/contact" variant="secondary" className="w-full sm:w-auto">Request Service</Button>
              </div>
            </div>
          </Container>
        </div>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <TrustStrip />
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section>
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cities.map((city) => {
              const image = areaImages[city.slug] ?? areaImages.hamilton;
              return (
              <Card key={city.slug} className="group">
                <ServiceImage
                  src={image.src}
                  alt={image.alt}
                  sizes="(max-width: 1024px) 100vw, 320px"
                  className="overflow-hidden"
                  imageClassName="group-hover:scale-[1.03]"
                />
                <h2 className="text-lg font-semibold text-ink-950">{city.name}</h2>
                <p className="mt-2 text-sm text-ink-700">{city.description}</p>
                <Link href={`/service-areas/${city.slug}`} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
                  View {city.name} services
                </Link>
              </Card>
            );
            })}
          </div>
        </Container>
      </Section>
    </>
  );
}
