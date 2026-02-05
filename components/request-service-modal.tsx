'use client';

import { useEffect, useRef } from 'react';
import { ContactForm } from '@/components/contact-form';
import { useRequestServiceModal } from '@/components/request-service-context';

export function RequestServiceModal() {
  const { isOpen, serviceName, close } = useRequestServiceModal();
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastActiveRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        close();
        return;
      }

      if (event.key === 'Tab' && dialogRef.current) {
        const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, textarea, select, [tabindex]:not([tabindex=\"-1\"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    }

    if (isOpen) {
      lastActiveRef.current = document.activeElement as HTMLElement;
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
      requestAnimationFrame(() => {
        const autoFocusField = dialogRef.current?.querySelector<HTMLElement>('[data-autofocus=\"true\"]');
        if (autoFocusField) {
          autoFocusField.focus();
          return;
        }
        const focusable = dialogRef.current?.querySelector<HTMLElement>(
          'input, textarea, select, button, [href], [tabindex]:not([tabindex=\"-1\"])'
        );
        focusable?.focus();
      });
    } else {
      document.body.style.overflow = '';
      lastActiveRef.current?.focus();
    }

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, close]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[60] bg-black/40 p-4" role="dialog" aria-modal="true">
      <div ref={dialogRef} className="mx-auto w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-soft">
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
          <p className="text-sm font-semibold text-ink-950">Request Service</p>
          <button
            type="button"
            onClick={close}
            className="text-sm font-semibold text-ink-700"
            aria-label="Close"
          >
            Close
          </button>
        </div>
        <div className="px-5 py-4">
          <ContactForm
            compact
            submitLabel="Send Request"
            serviceName={serviceName}
            autoFocusFirst
            onSuccess={close}
          />
        </div>
      </div>
    </div>
  );
}
