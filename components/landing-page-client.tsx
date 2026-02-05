'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { trackEvent } from '@/lib/analytics';

type LandingPageClientProps = {
  slug: string;
  serviceName?: string;
  city?: string;
};

export function LandingPageClient({ slug, serviceName, city }: LandingPageClientProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const keys = [
      'utm_source',
      'utm_medium',
      'utm_campaign',
      'utm_term',
      'utm_content',
      'gclid',
      'wbraid',
      'gbraid'
    ];
    const attribution: Record<string, string> = {};
    keys.forEach((key) => {
      const value = searchParams?.get(key) || '';
      if (value) {
        attribution[key] = value;
      }
    });
    if (Object.keys(attribution).length > 0) {
      try {
        sessionStorage.setItem('prudent_attribution', JSON.stringify(attribution));
      } catch {
        // ignore storage errors
      }
    }

    trackEvent('page_view_lp', {
      path: pathname || '',
      source: 'landing',
      service: serviceName,
      city,
      slug
    });
  }, [pathname, searchParams, slug, serviceName, city]);

  return null;
}
