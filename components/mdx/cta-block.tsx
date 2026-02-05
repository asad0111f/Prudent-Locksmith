import Link from 'next/link';
import { PhoneLink } from '@/components/phone-link';
import { RequestServiceTrigger } from '@/components/request-service-trigger';

export function InlineCta({ serviceName }: { serviceName?: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-ink-950">Need service now?</h3>
      <p className="mt-2 text-sm text-ink-700">Call for immediate help or request a fast dispatch.</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <PhoneLink asButton>Call Now</PhoneLink>
        <RequestServiceTrigger serviceName={serviceName} label="Request Service" variant="secondary" />
      </div>
    </div>
  );
}

export function EmergencyCallout() {
  return (
    <div className="rounded-2xl border border-rose-100 bg-rose-50 p-6">
      <p className="text-sm font-semibold text-rose-700">Emergency?</p>
      <p className="mt-2 text-sm text-rose-700">If you’re locked out or have a stuck door, go to emergency dispatch.</p>
      <Link href="/emergency" className="mt-3 inline-flex text-sm font-semibold text-rose-700">
        Go to emergency service
      </Link>
    </div>
  );
}
