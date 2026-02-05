export type AnalyticsEventName =
  | 'call_click'
  | 'form_submit'
  | 'form_success'
  | 'emergency_cta_click'
  | 'service_cta_click'
  | 'page_view_lp';

export type PageSource =
  | 'home'
  | 'services'
  | 'service'
  | 'service_areas'
  | 'city'
  | 'resources'
  | 'resource'
  | 'emergency'
  | 'landing'
  | 'contact'
  | 'about'
  | 'privacy'
  | 'terms'
  | 'other';

export type AnalyticsPayload = {
  name: AnalyticsEventName;
  path: string;
  source: PageSource;
  service?: string;
  city?: string;
  slug?: string;
};

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function isAnalyticsEnabled() {
  if (typeof window === 'undefined') {
    return false;
  }
  return process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === 'true';
}

export function getPageSource(pathname: string | null): PageSource {
  if (!pathname) return 'other';
  if (pathname === '/') return 'home';
  if (pathname === '/services') return 'services';
  if (pathname.startsWith('/services/')) return 'service';
  if (pathname === '/service-areas') return 'service_areas';
  if (pathname.startsWith('/service-areas/')) return 'city';
  if (pathname === '/resources') return 'resources';
  if (pathname.startsWith('/resources/')) return 'resource';
  if (pathname === '/emergency') return 'emergency';
  if (pathname.startsWith('/lp')) return 'landing';
  if (pathname === '/contact') return 'contact';
  if (pathname === '/about') return 'about';
  if (pathname === '/privacy') return 'privacy';
  if (pathname === '/terms') return 'terms';
  return 'other';
}

export function trackEvent(name: AnalyticsEventName, payload: Omit<AnalyticsPayload, 'name'>) {
  if (!isAnalyticsEnabled()) return;
  if (typeof window === 'undefined') return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: name,
    ...payload
  });

  // Google Ads conversion hook: map events like "form_success" to conversion snippets here.
}
