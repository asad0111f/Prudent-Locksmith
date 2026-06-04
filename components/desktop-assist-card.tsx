'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRequestServiceModal } from '@/components/request-service-context';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export function DesktopAssistCard() {
  const [visible, setVisible] = useState(false);
  const { open } = useRequestServiceModal();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const progress = scrollTop / height;
      if (progress > 0.25) setVisible(true);
    }

    if (!prefersReduced) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="hidden sm:block fixed bottom-6 right-6 z-40 w-[340px] motion-safe:animate-fade-slide">
      <div className="surface-panel overflow-hidden border-l-2 border-l-teal-600">
        {/* Header strip */}
        <div className="flex items-center gap-2 border-b border-slate-100 bg-gradient-to-r from-teal-50 to-white px-5 py-3">
          <span className="pulse-dot pulse-dot-teal flex-shrink-0" aria-hidden="true" />
          <p className="text-xs font-bold uppercase tracking-wider text-teal-700">Available Now</p>
          <span className="ml-auto text-xs text-ink-600">24/7 dispatch</span>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-sm font-semibold text-ink-950">Need urgent help?</p>
          <p className="mt-1 text-xs text-ink-600">Call our live dispatch line for immediate service.</p>

          {/* Phone number */}
          <PhoneLink className="mt-3 inline-flex items-center gap-1.5 text-xl font-bold font-display text-ink-950 hover:text-teal-700 transition-colors">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600 flex-shrink-0" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            {SITE.phoneDisplay}
          </PhoneLink>

          <p className="mt-1 flex items-center gap-1 text-[10px] font-medium text-ink-500">
            <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
            Average response: ~30 minutes
          </p>

          {/* Actions */}
          <div className="mt-4 grid gap-2">
            <PhoneLink asButton size="sm">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
              Call Now — Immediate Service
            </PhoneLink>
            <Button type="button" size="sm" variant="secondary" onClick={() => open()}>
              Request Service Online
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
