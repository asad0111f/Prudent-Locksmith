'use client';

import { ContactForm } from '@/components/contact-form';

export function ShortRequestForm({ onSuccess }: { onSuccess?: () => void }) {
  return (
    <ContactForm compact submitLabel="Send Request" onSuccess={onSuccess} />
  );
}
