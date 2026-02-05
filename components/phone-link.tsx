'use client';

import type { AnchorHTMLAttributes, ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { SITE } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { getPageSource, trackEvent, type AnalyticsEventName, type PageSource } from '@/lib/analytics';

type PhoneLinkProps = {
  children?: ReactNode;
  className?: string;
  asButton?: boolean;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
  eventName?: AnalyticsEventName;
  serviceName?: string;
  city?: string;
  source?: PageSource;
  slug?: string;
  variantKey?: 'control' | 'alt';
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

// Call tracking layering:
// - Keep this single component as the phone-number renderer.
// - To enable dynamic call tracking later, swap SITE.phoneHref/SITE.phoneDisplay here.
// - No vendor lock-in; avoid adding external scripts by default.
export function PhoneLink({
  children,
  className,
  asButton = false,
  variant = 'primary',
  size = 'md',
  eventName,
  serviceName,
  city,
  source,
  slug,
  variantKey = 'control',
  ...props
}: PhoneLinkProps) {
  const pathname = usePathname();
  const pageSource = source ?? getPageSource(pathname);
  const content = children ?? SITE.phoneDisplay;

  function handleClick() {
    const payload = {
      path: pathname || '',
      source: pageSource,
      service: serviceName,
      city,
      slug
    };

    trackEvent('call_click', payload);
    if (eventName && eventName !== 'call_click') {
      trackEvent(eventName, payload);
    }
  }

  // A/B testing hook: swap CTA labels/styles based on variantKey when running experiments.
  const resolvedClassName = clsx(className, variantKey === 'alt' ? '' : '');

  if (asButton) {
    return (
      <Button
        href={SITE.phoneHref}
        variant={variant}
        size={size}
        className={resolvedClassName}
        onClick={handleClick}
        {...props}
      >
        {content}
      </Button>
    );
  }

  return (
    <a href={SITE.phoneHref} className={resolvedClassName} onClick={handleClick} {...props}>
      {content}
    </a>
  );
}
