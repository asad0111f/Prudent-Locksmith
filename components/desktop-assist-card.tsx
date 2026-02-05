'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { useRequestServiceModal } from '@/components/request-service-context';
import { PhoneLink } from '@/components/phone-link';

export function DesktopAssistCard() {
  const [visible, setVisible] = useState(false);
  const { open } = useRequestServiceModal();

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function onScroll() {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      if (height <= 0) {
        return;
      }
      const progress = scrollTop / height;
      if (progress > 0.3) {
        setVisible(true);
      }
    }

    if (!prefersReduced) {
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="surface-panel fixed bottom-3 left-3 right-3 z-40 w-auto p-4 backdrop-blur motion-safe:animate-fade-slide sm:bottom-6 sm:left-auto sm:right-6 sm:w-[360px]">
      <p className="text-sm font-semibold text-ink-950">Need help now?</p>
      <p className="mt-2 text-xs text-ink-700">Call for urgent service or request a quick dispatch.</p>
      <div className="mt-3 grid gap-2">
        <PhoneLink asButton size="sm">Call Now</PhoneLink>
        <Button type="button" size="sm" variant="secondary" onClick={() => open()}>
          Request Service
        </Button>
      </div>
    </div>
  );
}
