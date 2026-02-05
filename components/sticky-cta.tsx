'use client';

import { useRequestServiceModal } from '@/components/request-service-context';
import { PhoneLink } from '@/components/phone-link';

export function StickyCtaBar() {
  const { open } = useRequestServiceModal();

  return (
    <div className="sm:hidden">
      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-slate-200/80 bg-header-gradient px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-3 backdrop-blur">
        <div className="grid grid-cols-2 gap-3">
          <PhoneLink
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-b from-teal-500 via-teal-600 to-teal-700 px-4 py-3 text-sm font-semibold text-white shadow-soft transition hover:from-teal-500 hover:via-teal-600 hover:to-teal-800"
            eventName="call_click"
          >
            Call Now
          </PhoneLink>
          <button
            type="button"
            onClick={() => open()}
            className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/90 px-4 py-3 text-sm font-semibold text-ink-950 shadow-soft transition hover:border-slate-400 hover:bg-slate-50"
          >
            Request Service
          </button>
        </div>
      </div>
    </div>
  );
}
