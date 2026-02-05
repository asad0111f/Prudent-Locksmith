import { ContactForm } from '@/components/contact-form';

export function BookServiceForm({ serviceName }: { serviceName?: string }) {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-ink-950">Book service</h3>
      <p className="mt-2 text-sm text-ink-700">Share a few details and we will confirm availability.</p>
      <div className="mt-4">
        <ContactForm compact submitLabel="Send Request" serviceName={serviceName} />
      </div>
    </div>
  );
}
