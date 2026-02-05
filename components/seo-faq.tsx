import { Card } from '@/components/ui/card';

export type SeoFaqItem = { q: string; a: string };

export function SeoFaq({
  title = 'FAQs',
  items,
  includeJsonLd = false
}: {
  title?: string;
  items: SeoFaqItem[];
  includeJsonLd?: boolean;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a
      }
    }))
  };

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-semibold text-ink-950">{title}</h2>
      <div className="grid gap-3">
        {items.map((faq) => (
          <Card key={faq.q} className="p-0">
            <details className="group p-6">
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-950">
                {faq.q}
              </summary>
              <p className="mt-3 text-sm text-ink-700">{faq.a}</p>
            </details>
          </Card>
        ))}
      </div>
      {includeJsonLd ? (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      ) : null}
    </div>
  );
}
