'use client';

import clsx from 'clsx';
import { useEffect, useRef } from 'react';
import { useContactForm } from '@/components/use-contact-form';
import { Button } from '@/components/ui/button';
import { PhoneLink } from '@/components/phone-link';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

export type ContactFormProps = {
  serviceName?: string;
  city?: string;
  showServiceNeeded?: boolean;
  showCity?: boolean;
  compact?: boolean;
  submitLabel?: string;
  onSuccess?: () => void;
  autoFocusFirst?: boolean;
  variantKey?: 'control' | 'alt';
  landingSlug?: string;
};

export function ContactForm({
  serviceName,
  city,
  showServiceNeeded = false,
  showCity = false,
  compact = false,
  submitLabel = 'Send Request',
  onSuccess,
  autoFocusFirst = false,
  variantKey = 'control',
  landingSlug
}: ContactFormProps) {
  const storageKey = 'prudent_contact_form';
  const formRef = useRef<HTMLFormElement | null>(null);
  const { status, message, handleSubmit, meta, clearStored } = useContactForm({
    onSuccess: () => {
      clearStored(storageKey);
      onSuccess?.();
    }
  });

  useEffect(() => {
    const form = formRef.current;
    if (!form) return;
    try {
      const raw = sessionStorage.getItem(storageKey);
      if (!raw) return;
      const data = JSON.parse(raw) as Record<string, string>;
      Object.entries(data).forEach(([key, value]) => {
        const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | null;
        if (field && value) {
          field.value = value;
        }
      });
    } catch {
      // Ignore storage errors
    }
  }, []);

  const resolvedSubmitLabel = submitLabel || (variantKey === 'alt' ? 'Get Help Now' : 'Send Request');

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      onInput={() => {
        const form = formRef.current;
        if (!form) return;
        const values: Record<string, string> = {};
        ['name', 'phone', 'email', 'serviceNeeded', 'city', 'message'].forEach((key) => {
          const field = form.elements.namedItem(key) as HTMLInputElement | HTMLTextAreaElement | null;
          if (field && field.value) {
            values[key] = field.value;
          }
        });
        try {
          sessionStorage.setItem(storageKey, JSON.stringify(values));
        } catch {
          // Ignore storage errors
        }
      }}
      className="space-y-4"
    >
      <div className={clsx('grid gap-4', compact ? '' : 'md:grid-cols-2')}>
        <Input
          label="Full name"
          name="name"
          autoComplete="name"
          required
          autoFocus={autoFocusFirst}
          data-autofocus={autoFocusFirst ? 'true' : undefined}
        />
        <Input label="Phone" name="phone" type="tel" autoComplete="tel" required />
      </div>
      <Input label="Email" name="email" type="email" autoComplete="email" required />
      {showServiceNeeded ? (
        <Input label="Service needed" name="serviceNeeded" autoComplete="off" />
      ) : (
        <input type="hidden" name="serviceNeeded" value={serviceName || 'General'} />
      )}
      {showCity ? (
        <Input label="City" name="city" autoComplete="address-level2" />
      ) : (
        <input type="hidden" name="city" value={city || ''} />
      )}
      <Textarea label="Message" name="message" rows={compact ? 4 : 5} required />
      <input type="hidden" name="pageUrl" value={meta.pageUrl} />
      <input type="hidden" name="utm_source" value={meta.utm.source} />
      <input type="hidden" name="utm_medium" value={meta.utm.medium} />
      <input type="hidden" name="utm_campaign" value={meta.utm.campaign} />
      <input type="hidden" name="utm_term" value={meta.utm.term} />
      <input type="hidden" name="utm_content" value={meta.utm.content} />
      <input type="hidden" name="gclid" value={meta.utm.gclid} />
      <input type="hidden" name="wbraid" value={meta.utm.wbraid} />
      <input type="hidden" name="gbraid" value={meta.utm.gbraid} />
      <input type="hidden" name="ts" value={meta.timestamp} />
      <input type="hidden" name="landingSlug" value={landingSlug || ''} />
      <input type="text" name="company" className="hidden" tabIndex={-1} autoComplete="off" />
      <div className="space-y-3">
        <Button type="submit" disabled={status === 'loading'} className={compact ? 'w-full' : undefined}>
          {status === 'loading' ? 'Sending…' : resolvedSubmitLabel}
        </Button>
        <p className="text-xs text-ink-500">No spam. We only use this to respond.</p>
        {status === 'success' ? (
          <div
            className="rounded-xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800"
            role="status"
            aria-live="polite"
          >
            <p>We’ll respond ASAP. If this is urgent, call now.</p>
            <PhoneLink
              asButton
              size="sm"
              className="mt-3 bg-emerald-600 text-white hover:bg-emerald-700"
            >
              Call Now
            </PhoneLink>
          </div>
        ) : null}
        {status === 'error' ? (
          <p className="text-xs text-rose-700" role="status" aria-live="polite">
            {message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
