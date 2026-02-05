import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { getInternalLinks } from '@/lib/internal-links';

type InternalLinksProps = {
  type: 'service' | 'city';
  currentId?: string;
  currentCity?: string;
};

export function InternalLinks({ type, currentId, currentCity }: InternalLinksProps) {
  const links = getInternalLinks({ type, currentId, currentCity });

  if (links.length === 0) return null;

  return (
    <Card>
      <h2 className="text-lg font-semibold text-ink-950">Explore more locally</h2>
      <ul className="mt-4 grid gap-2 text-sm text-ink-700">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="font-semibold text-teal-700">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
