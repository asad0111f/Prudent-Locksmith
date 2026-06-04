'use client';

import { useEffect, useState } from 'react';
import { useRequestServiceModal } from '@/components/request-service-context';
import { PhoneLink } from '@/components/phone-link';

export function StickyCtaBar() {
  const { open } = useRequestServiceModal();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) return;
      const progress = scrollTop / height;
      if (progress > 0.12) setVisible(true);
    }

    if (!prefersReduced) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    } else {
      setVisible(true);
    }

    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="sm:hidden">
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/70 bg-white/97 backdrop-blur pb-[calc(env(safe-area-inset-bottom)+8px)] pt-3 px-3 shadow-card">
        <div className="grid grid-cols-2 gap-2">
          {/* Call Now */}
          <PhoneLink asButton className="relative gap-2">
            <span className="pulse-dot pulse-dot-teal flex-shrink-0" style={{ width: 7, height: 7 }} aria-hidden="true" />
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
            </svg>
            Call Now
          </PhoneLink>

          {/* Request Service */}
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-3 text-sm font-semibold text-ink-950 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
            </svg>
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
}
