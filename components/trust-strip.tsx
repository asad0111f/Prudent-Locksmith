import { Badge } from '@/components/ui/badge';

const TRUST_ITEMS = [
  { label: 'Same-day service', icon: '⚡' },
  { label: 'Upfront pricing', icon: '💬' },
  { label: 'Local technicians', icon: '📍' },
  { label: 'Insured work', icon: '🛡️' }
];

export function TrustStrip() {
  return (
    <div className="surface-panel px-6 py-4">
      <div className="flex flex-wrap items-center gap-4">
        {TRUST_ITEMS.map((item) => (
          <div key={item.label} className="flex items-center gap-2 text-sm font-semibold text-ink-900">
            <span aria-hidden className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </div>
        ))}
        <Badge className="ml-auto text-[10px]">Details may vary by service</Badge>
      </div>
    </div>
  );
}
