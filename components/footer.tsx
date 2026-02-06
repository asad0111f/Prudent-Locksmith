import Image from 'next/image';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { SITE } from '@/lib/site';
import { PhoneLink } from '@/components/phone-link';
import { IMAGES } from '@/lib/images';

export function Footer() {
  return (
    <footer className="relative overflow-hidden footer-gradient border-t border-slate-900/20 text-slate-100">
      <Image
        src={IMAGES.footer.texture}
        alt=""
        fill
        sizes="100vw"
        className="object-cover opacity-20"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/30 to-slate-950/70" aria-hidden="true" />
      <Container>
        <div className="relative grid gap-8 py-12 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold text-white">Prudent</p>
            <p className="mt-3 text-sm text-slate-200">
              Premium locksmith and garage door service with fast response and upfront pricing.
            </p>
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
