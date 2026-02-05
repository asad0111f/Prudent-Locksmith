import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { logEvent } from '@/lib/logging';
import { getErrorReporter } from '@/lib/error-reporting';
import { recordConversion } from '@/lib/conversion-context';

const EMAIL_TO_DEFAULT = 'Info.prudentlocksmith@gmail.com';
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 8;
const MIN_SUBMIT_TIME_MS = 3000;

// Best-effort in-memory rate limit; resets between serverless invocations.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();

function getClientIp(request: Request) {
  const forwarded = request.headers.get('x-forwarded-for');
  if (forwarded) {
    return forwarded.split(',')[0].trim();
  }
  return request.headers.get('x-real-ip') || 'unknown';
}

function anonymizeIp(ip: string) {
  if (ip.includes(':')) {
    const parts = ip.split(':');
    return `${parts.slice(0, 2).join(':')}:`;
  }
  const parts = ip.split('.');
  if (parts.length === 4) {
    parts[3] = '0';
    return parts.join('.');
  }
  return 'unknown';
}

function getRateLimitState(ip: string) {
  const now = Date.now();
  const existing = rateLimitMap.get(ip);
  if (!existing || now > existing.resetAt) {
    const fresh = { count: 0, resetAt: now + RATE_LIMIT_WINDOW_MS };
    rateLimitMap.set(ip, fresh);
    return fresh;
  }
  return existing;
}

function normalizePhone(phone: string) {
  const digitsOnly = phone.replace(/[^0-9]/g, '');
  const normalized = digitsOnly ? `+${digitsOnly}` : '';
  return { normalized, digitsOnly };
}

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function getDeviceType(userAgent: string) {
  const ua = userAgent.toLowerCase();
  if (ua.includes('mobile') || ua.includes('android') || ua.includes('iphone')) {
    return 'mobile';
  }
  if (ua.includes('ipad') || ua.includes('tablet')) {
    return 'tablet';
  }
  return 'desktop';
}

function getPageTypeFromUrl(url: string) {
  if (!url) return 'unknown';
  try {
    const parsed = new URL(url);
    const path = parsed.pathname;
    if (path === '/') return 'home';
    if (path === '/services') return 'services';
    if (path.startsWith('/services/')) return 'service';
    if (path === '/service-areas') return 'service_areas';
    if (path.startsWith('/service-areas/')) return 'city';
    if (path === '/resources') return 'resources';
    if (path.startsWith('/resources/')) return 'resource';
    if (path === '/emergency') return 'emergency';
    if (path.startsWith('/lp/')) return 'landing';
    if (path === '/contact') return 'contact';
    return 'other';
  } catch {
    return 'unknown';
  }
}

function safeString(value: FormDataEntryValue | null) {
  return typeof value === 'string' ? value.trim() : '';
}

function parseBody(data: Record<string, FormDataEntryValue | null>) {
  return {
    name: safeString(data.name),
    phone: safeString(data.phone),
    email: safeString(data.email),
    serviceNeeded: safeString(data.serviceNeeded || data.service),
    city: safeString(data.city),
    message: safeString(data.message),
    pageUrl: safeString(data.pageUrl),
    utm: {
      source: safeString(data.utm_source),
      medium: safeString(data.utm_medium),
      campaign: safeString(data.utm_campaign),
      term: safeString(data.utm_term),
      content: safeString(data.utm_content),
      gclid: safeString(data.gclid),
      wbraid: safeString(data.wbraid),
      gbraid: safeString(data.gbraid)
    },
    landingSlug: safeString(data.landingSlug),
    ts: safeString(data.ts),
    honeypot: safeString(data.company)
  };
}

export async function POST(request: Request) {
  const ip = getClientIp(request);
  const ipMasked = anonymizeIp(ip);
  const rateState = getRateLimitState(ip);

  if (rateState.count >= RATE_LIMIT_MAX) {
    logEvent('warn', 'contact_rate_limit', { ip: ipMasked });
    return NextResponse.json({ ok: false, error: 'Too many requests. Please try again shortly.' }, { status: 429 });
  }

  const contentType = request.headers.get('content-type') || '';
  let rawData: Record<string, FormDataEntryValue | null> = {};

  if (contentType.includes('application/json')) {
    const json = await request.json().catch(() => ({}));
    Object.keys(json || {}).forEach((key) => {
      rawData[key] = String(json[key] ?? '');
    });
  } else {
    const form = await request.formData();
    form.forEach((value, key) => {
      rawData[key] = value;
    });
  }

  const data = parseBody(rawData);

  if (data.honeypot) {
    logEvent('warn', 'contact_honeypot', { ip: ipMasked });
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const submittedAt = Number(data.ts || '0');
  if (!submittedAt || Date.now() - submittedAt < MIN_SUBMIT_TIME_MS) {
    logEvent('warn', 'contact_min_time', { ip: ipMasked });
    return NextResponse.json({ ok: false, error: 'Please wait a moment and try again.' }, { status: 400 });
  }

  const missingFields = ['name', 'phone', 'email', 'message'].filter((field) => !data[field as keyof typeof data]);
  if (missingFields.length > 0) {
    logEvent('warn', 'contact_validation_missing', { ip: ipMasked, missing: missingFields.join(',') });
    return NextResponse.json({ ok: false, error: 'Please complete all required fields.' }, { status: 400 });
  }

  if (!isValidEmail(data.email)) {
    logEvent('warn', 'contact_validation_email', { ip: ipMasked });
    return NextResponse.json({ ok: false, error: 'Please provide a valid email address.' }, { status: 400 });
  }

  const { normalized: normalizedPhone, digitsOnly } = normalizePhone(data.phone);
  if (digitsOnly.length < 7) {
    logEvent('warn', 'contact_validation_phone', { ip: ipMasked });
    return NextResponse.json({ ok: false, error: 'Please provide a valid phone number.' }, { status: 400 });
  }

  rateState.count += 1;
  rateLimitMap.set(ip, rateState);

  const apiKey = process.env.EMAIL_PROVIDER_API_KEY || '';
  const emailFrom = process.env.EMAIL_FROM || '';
  const emailTo = process.env.EMAIL_TO || EMAIL_TO_DEFAULT;

  if (!apiKey || !emailFrom) {
    logEvent('error', 'contact_email_config', { hasKey: Boolean(apiKey), hasFrom: Boolean(emailFrom) });
    return NextResponse.json({ ok: false, error: 'Email not configured.' }, { status: 500 });
  }

  const subject = `New Service Request — ${data.serviceNeeded || 'General'} — ${data.city || 'Hamilton area'}`;
  const timestamp = new Date().toISOString();

  const textBody = [
    `New service request received`,
    ``,
    `Name: ${data.name}`,
    `Phone: ${normalizedPhone}`,
    `Email: ${data.email}`,
    `Service Needed: ${data.serviceNeeded || 'General'}`,
    `City: ${data.city || 'Hamilton area'}`,
    `Message: ${data.message}`,
    `Page URL: ${data.pageUrl || 'N/A'}`,
    `UTM Source: ${data.utm.source || 'N/A'}`,
    `UTM Medium: ${data.utm.medium || 'N/A'}`,
    `UTM Campaign: ${data.utm.campaign || 'N/A'}`,
    `UTM Term: ${data.utm.term || 'N/A'}`,
    `UTM Content: ${data.utm.content || 'N/A'}`,
    `GCLID: ${data.utm.gclid || 'N/A'}`,
    `WBRAID: ${data.utm.wbraid || 'N/A'}`,
    `GBRAID: ${data.utm.gbraid || 'N/A'}`,
    `Landing Slug: ${data.landingSlug || 'N/A'}`,
    `Timestamp: ${timestamp}`
  ].join('\n');

  const htmlBody = `
    <div style="font-family: Arial, sans-serif; line-height:1.5; color:#111827;">
      <h2 style="margin:0 0 12px;">New service request received</h2>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Phone:</strong> ${normalizedPhone}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Service Needed:</strong> ${data.serviceNeeded || 'General'}</p>
      <p><strong>City:</strong> ${data.city || 'Hamilton area'}</p>
      <p><strong>Message:</strong><br/>${data.message.replace(/\n/g, '<br/>')}</p>
      <p><strong>Page URL:</strong> ${data.pageUrl || 'N/A'}</p>
      <p><strong>UTM Source:</strong> ${data.utm.source || 'N/A'}</p>
      <p><strong>UTM Medium:</strong> ${data.utm.medium || 'N/A'}</p>
      <p><strong>UTM Campaign:</strong> ${data.utm.campaign || 'N/A'}</p>
      <p><strong>UTM Term:</strong> ${data.utm.term || 'N/A'}</p>
      <p><strong>UTM Content:</strong> ${data.utm.content || 'N/A'}</p>
      <p><strong>GCLID:</strong> ${data.utm.gclid || 'N/A'}</p>
      <p><strong>WBRAID:</strong> ${data.utm.wbraid || 'N/A'}</p>
      <p><strong>GBRAID:</strong> ${data.utm.gbraid || 'N/A'}</p>
      <p><strong>Landing Slug:</strong> ${data.landingSlug || 'N/A'}</p>
      <p><strong>Timestamp:</strong> ${timestamp}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: emailFrom,
      to: emailTo,
      subject,
      text: textBody,
      html: htmlBody,
      reply_to: isValidEmail(data.email) ? data.email : undefined
    });
  } catch (error) {
    logEvent('error', 'contact_email_provider', { ip: ipMasked, error: (error as Error).message });
    getErrorReporter()?.capture(error as Error, { route: 'contact' });
    return NextResponse.json({ ok: false, error: 'Unable to send email right now.' }, { status: 502 });
  }

  logEvent('info', 'contact_success', {
    service: data.serviceNeeded || 'General',
    city: data.city || 'Hamilton area',
    landingSlug: data.landingSlug || ''
  });

  const device = getDeviceType(request.headers.get('user-agent') || '');
  const pageType = getPageTypeFromUrl(data.pageUrl);
  recordConversion({
    pageType,
    service: data.serviceNeeded || 'General',
    city: data.city || '',
    device
  });
  logEvent('info', 'conversion_context', { pageType, service: data.serviceNeeded, city: data.city, device });

  return NextResponse.json({ ok: true });
}
