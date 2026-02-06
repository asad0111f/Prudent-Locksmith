'use client';

import { useEffect, useState } from 'react';
import { useRequestServiceModal } from '@/components/request-service-context';

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
      if (progress > 0.15) {
        setVisible(true);
      }
    }

    if (!prefersReduced) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    } else {
      setVisible(true);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="sm:hidden">
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-200/80 bg-header-gradient px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur">
        <button
          type="button"
          onClick={() => open()}
          className="inline-flex w-full items-center justify-center rounded-full border border-slate-300 bg-white/90 px-4 py-3 text-sm font-semibold text-ink-950 shadow-soft transition hover:border-slate-400 hover:bg-slate-50"
        >
          Request Service
        </button>
      </div>
    </div>
  );
}
