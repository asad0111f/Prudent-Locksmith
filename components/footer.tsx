import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/site';
import { PhoneLink } from '@/components/phone-link';
import { IMAGES } from '@/lib/images';

const TOP_SERVICES = [
  { label: 'Garage Door Emergency', href: '/services/garage-door-repair/garage-door-not-opening-or-stuck' },
  { label: 'Garage Door Openers', href: '/services/garage-door-opener-install-and-service/new-garage-door-opener-installation' },
  { label: 'Home Lockouts', href: '/services/residential-locksmith-services/home-and-apartment-lockouts' },
  { label: 'Car Lockouts', href: '/services/automotive-locksmith-services/car-lockouts' },
  { label: 'Commercial Locks', href: '/services/commercial-storefront-lock-services/storefront-lock-repair' }
];

const SERVICE_AREAS = [
  'Hamilton', 'Burlington', 'Oakville', 'Mississauga',
  'Stoney Creek', 'Ancaster', 'Dundas', 'Waterdown'
];

const QUICK_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'All Services', href: '/services' },
  { label: 'Service Areas', href: '/service-areas' },
  { label: 'Emergency Service', href: '/emergency' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' }
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden footer-gradient border-t border-white/5 text-slate-200">
      {/* Texture */}
      <Image
        src={IMAGES.footer.texture}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-[0.08]"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black/30" aria-hidden="true" />

      {/* Main footer grid */}
      <Container>
        <div className="relative grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand col */}
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <Image src={IMAGES.brand.logoMark} alt="Prudent" width={32} height={32} className="opacity-90 group-hover:opacity-100 transition-opacity" />
              <div>
                <span className="block text-base font-bold text-white leading-tight font-display">Prudent</span>
                <span className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider">Locksmith &amp; Garage</span>
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">
              Premium locksmith and garage door service with fast response and upfront pricing across Hamilton and the GTA.
            </p>

            {/* Rating badge */}
            <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-amber-500/25 bg-amber-500/10 px-3 py-1.5">
              <span className="text-sm text-amber-400">★★★★★</span>
              <span className="text-xs font-semibold text-amber-300">4.9 on Google</span>
            </div>

            {/* Hours */}
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-400">
              <div className="h-1.5 w-1.5 rounded-full bg-teal-500 animate-pulse flex-shrink-0" aria-hidden="true" />
              <span>24/7 emergency availability</span>
            </div>
          </div>

          {/* Services col */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">Top Services</p>
            <ul className="space-y-2">
              {TOP_SERVICES.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-1.5 text-sm text-slate-300 hover:text-white transition-colors group"
                  >
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600 flex-shrink-0 group-hover:text-teal-400 transition-colors" aria-hidden="true">
                      <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/services" className="mt-1 inline-flex text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors">
                  View all services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service areas col */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">Service Areas</p>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-2">
              {SERVICE_AREAS.map((area) => (
                <li key={area}>
                  <Link
                    href="/service-areas"
                    className="flex items-center gap-1 text-sm text-slate-300 hover:text-white transition-colors"
                  >
                    <svg width="8" height="8" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600 flex-shrink-0" aria-hidden="true">
                      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    </svg>
                    {area}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/service-areas" className="mt-3 inline-flex text-xs font-semibold text-teal-400 hover:text-teal-300 transition-colors">
              View all areas →
            </Link>
          </div>

          {/* Contact col */}
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-teal-400 mb-4">Call Anytime</p>

            <PhoneLink className="inline-flex items-center gap-2 text-2xl font-bold font-display text-white hover:text-teal-400 transition-colors">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-teal-500 flex-shrink-0" aria-hidden="true">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              {SITE.phoneDisplay}
            </PhoneLink>

            <p className="mt-2 text-xs text-slate-400">Live dispatch — call any time, day or night.</p>

            <div className="mt-5 space-y-2">
              {QUICK_LINKS.slice(0, 5).map((link) => (
                <div key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="relative border-t border-white/10 py-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-4 text-xs text-slate-500">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">Terms of Service</Link>
            <span className="text-slate-600">Trusted by homeowners, property managers &amp; businesses.</span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
