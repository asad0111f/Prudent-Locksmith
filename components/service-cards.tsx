import type { ServiceCategory, ServiceItem } from '@/lib/services';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Reveal } from '@/components/reveal';
import { getServiceUrl } from '@/lib/services';
import { ServiceImage } from '@/components/site-image';

export function ServiceCard({ service, index = 0 }: { service: ServiceItem; index?: number }) {
  return (
    <Reveal as="div" delay={index * 60}>
      <Card className="group">
        <ServiceImage
          src={service.image}
          alt={service.imageAlt}
          className="overflow-hidden"
          imageClassName="group-hover:scale-[1.03]"
        />
        <div className="mt-4 flex items-center justify-between">
          <h3 className="text-lg font-semibold text-ink-950">{service.shortLabel}</h3>
          {service.urgent ? <Badge className="bg-rose-50 text-rose-700">Emergency</Badge> : null}
        </div>
        <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
        <Link href={getServiceUrl(service.category.slug, service.slug)} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
          View details
        </Link>
      </Card>
    </Reveal>
  );
}

export function CategorySection({ category }: { category: ServiceCategory }) {
  return (
    <section id={category.slug} className="scroll-mt-24">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-teal-700">{category.label}</p>
          <h2 className="mt-2 text-2xl font-semibold text-ink-950">{category.name}</h2>
        </div>
        <Link href="#top" className="text-sm font-semibold text-ink-700">Back to top</Link>
      </div>
      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {category.services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </section>
  );
}
