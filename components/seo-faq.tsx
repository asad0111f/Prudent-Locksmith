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
              <summary className="cursor-pointer list-none text-sm font-semibold text-ink-950 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 group-open:text-ink-950">
                {faq.q}
              </summary>
              <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-300 ease-out group-open:grid-rows-[1fr]">
                <div className="overflow-hidden">
                  <p className="mt-3 text-sm text-ink-700 transition-opacity duration-300 group-open:opacity-100 opacity-0">
                    {faq.a}
                  </p>
                </div>
              </div>
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
