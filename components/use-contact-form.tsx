'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { getPageSource, trackEvent } from '@/lib/analytics';

type Status = 'idle' | 'success' | 'error' | 'loading';

type UseContactFormOptions = {
  onSuccess?: () => void;
};

export function useContactForm({ onSuccess }: UseContactFormOptions = {}) {
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const pathname = usePathname();
  const timestampRef = useRef(Date.now().toString());
  const [pageUrl, setPageUrl] = useState('');
  const [storedAttribution, setStoredAttribution] = useState<Record<string, string>>({});
  const attributionKey = 'prudent_attribution';
  const [queryString, setQueryString] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setPageUrl(window.location.href);
      setQueryString(window.location.search || '');
    }
  }, [pathname]);

  useEffect(() => {
    timestampRef.current = Date.now().toString();
  }, [pathname]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
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
    const incoming: Record<string, string> = {};
    const params = new URLSearchParams(queryString);
    keys.forEach((key) => {
      const value = params.get(key) || '';
      if (value) {
        incoming[key] = value;
      }
    });
    if (Object.keys(incoming).length > 0) {
      try {
        sessionStorage.setItem(attributionKey, JSON.stringify(incoming));
        setStoredAttribution(incoming);
        return;
      } catch {
        // ignore storage errors
      }
    }
    try {
      const raw = sessionStorage.getItem(attributionKey);
      if (raw) {
        const parsed = JSON.parse(raw) as Record<string, string>;
        setStoredAttribution(parsed || {});
      }
    } catch {
      setStoredAttribution({});
    }
  }, [queryString]);

  const utm = useMemo(() => {
    const params = new URLSearchParams(queryString);
    const get = (key: string) => params.get(key) || storedAttribution[key] || '';
    return {
      source: get('utm_source'),
      medium: get('utm_medium'),
      campaign: get('utm_campaign'),
      term: get('utm_term'),
      content: get('utm_content'),
      gclid: get('gclid'),
      wbraid: get('wbraid'),
      gbraid: get('gbraid')
    };
  }, [queryString, storedAttribution]);

  function clearStored(storageKey: string) {
    try {
      sessionStorage.removeItem(storageKey);
    } catch {
      // Ignore storage errors
    }
  }

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    const form = event.currentTarget;
    const formData = new FormData(form);
    const serviceNeeded = String(formData.get('serviceNeeded') || '');
    const city = String(formData.get('city') || '');
    const landingSlug = String(formData.get('landingSlug') || '');
    const source = getPageSource(pathname);
    const path = pathname || '';

    trackEvent('form_submit', {
      path,
      source,
      service: serviceNeeded || undefined,
      city: city || undefined,
      slug: landingSlug || undefined
    });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setStatus('error');
        setMessage(data?.error || 'Please try again or call for immediate service.');
        return;
      }

      form.reset();
      setStatus('success');
      setMessage('Request received. We will contact you shortly.');
      onSuccess?.();
      trackEvent('form_success', {
        path,
        source,
        service: serviceNeeded || undefined,
        city: city || undefined,
        slug: landingSlug || undefined
      });
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please call for immediate help.');
    }
  }

  return {
    status,
    message,
    handleSubmit,
    clearStored,
    meta: {
      timestamp: timestampRef.current,
      pageUrl,
      utm
    }
  };
}
