import { ContactForm } from '@/components/contact-form';
import { Card } from '@/components/ui/card';

export function RequestServiceForm({ serviceName, city }: { serviceName?: string; city?: string }) {
  return (
    <Card>
      <h2 className="text-lg font-semibold text-ink-950">Request service</h2>
      <p className="mt-2 text-sm text-ink-700">Share details and we will confirm availability.</p>
      <div className="mt-4">
        <ContactForm serviceName={serviceName} city={city} compact submitLabel="Send Request" />
      </div>
    </Card>
  );
}
