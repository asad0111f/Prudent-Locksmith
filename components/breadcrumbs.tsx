import Link from 'next/link';

export type BreadcrumbItem = { label: string; href: string };

export function Breadcrumbs({ items, baseUrl }: { items: BreadcrumbItem[]; baseUrl?: string }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      item: item.href.startsWith('http') ? item.href : `${baseUrl || ''}${item.href}`
    }))
  };

  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs text-ink-600">
        <ol className="flex flex-wrap items-center gap-2">
          {items.map((item, index) => (
            <li key={item.href} className="flex items-center gap-2">
              <Link href={item.href} className="hover:text-ink-900">
                {item.label}
              </Link>
              {index < items.length - 1 ? <span aria-hidden>/</span> : null}
            </li>
          ))}
        </ol>
      </nav>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
