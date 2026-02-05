import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/site';
import { PhoneLink } from '@/components/phone-link';

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-ink-950">Prudent</p>
            <p className="mt-3 text-sm text-ink-700">
              Premium locksmith and garage door service with fast response and upfront pricing.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-950">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/service-areas">Service Areas</Link></li>
              <li><Link href="/resources">Resources</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy</Link></li>
              <li><Link href="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-950">Service area</p>
            <p className="mt-3 text-sm text-ink-700">Serving local neighborhoods and nearby commercial districts.</p>
            <p className="mt-3 text-sm text-ink-700">Hours: 24/7 emergency availability.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-ink-950">Call anytime</p>
            <PhoneLink className="mt-3 inline-flex text-sm text-ink-700">
              {SITE.phoneDisplay}
            </PhoneLink>
            <p className="mt-3 text-xs text-ink-500">Trusted by homeowners, property managers, and local businesses.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
