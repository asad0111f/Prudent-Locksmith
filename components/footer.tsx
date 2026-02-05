import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/site';
import { PhoneLink } from '@/components/phone-link';

export function Footer() {
  return (
    <footer className="footer-gradient border-t border-slate-900/20 text-slate-100">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-4">
          <div>
            <p className="text-lg font-semibold text-white">Prudent</p>
            <p className="mt-3 text-sm text-slate-200">
              Premium locksmith and garage door service with fast response and upfront pricing.
            </p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Quick links</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-200">
              <li><Link href="/" className="transition hover:text-white">Home</Link></li>
              <li><Link href="/services" className="transition hover:text-white">Services</Link></li>
              <li><Link href="/service-areas" className="transition hover:text-white">Service Areas</Link></li>
              <li><Link href="/about" className="transition hover:text-white">About</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
              <li><Link href="/privacy" className="transition hover:text-white">Privacy</Link></li>
              <li><Link href="/terms" className="transition hover:text-white">Terms</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Service area</p>
            <p className="mt-3 text-sm text-slate-200">Serving local neighborhoods and nearby commercial districts.</p>
            <p className="mt-3 text-sm text-slate-200">Hours: 24/7 emergency availability.</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-white">Call anytime</p>
            <PhoneLink className="mt-3 inline-flex text-sm text-white">
              {SITE.phoneDisplay}
            </PhoneLink>
            <p className="mt-3 text-xs text-slate-300">Trusted by homeowners, property managers, and local businesses.</p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
