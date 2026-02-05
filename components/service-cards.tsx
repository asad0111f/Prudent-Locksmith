import type { ServiceCategory, ServiceItem } from '@/lib/services';
import Image from 'next/image';
import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { getServiceUrl } from '@/lib/services';

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <Card className="group motion-safe:animate-fade-up">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-slate-100">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 360px"
          className="object-cover transition duration-300 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-ink-950">{service.name}</h3>
        {service.urgent ? <Badge className="bg-rose-50 text-rose-700">Emergency</Badge> : null}
      </div>
      <p className="mt-2 text-sm text-ink-700">{service.shortDescription}</p>
      <Link href={getServiceUrl(service.category.slug, service.slug)} className="mt-4 inline-flex text-sm font-semibold text-teal-700">
        View details
      </Link>
    </Card>
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
        {category.services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}
