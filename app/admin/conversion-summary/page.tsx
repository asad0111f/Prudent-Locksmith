import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { getConversionSummary } from '@/lib/conversion-context';

export const metadata: Metadata = {
  title: 'Conversion Summary',
  description: 'Internal conversion summary.',
  robots: {
    index: false,
    follow: false
  },
  alternates: {
    canonical: '/admin/conversion-summary'
  }
};

export default function ConversionSummaryPage() {
  if (process.env.ADMIN_ENABLED !== 'true') {
    return notFound();
  }

  const summary = getConversionSummary();

  return (
    <Section className="pt-12">
      <Container>
        <div className="space-y-6">
          <h1 className="text-3xl font-semibold text-ink-950">Conversion summary</h1>
          <p className="text-sm text-ink-700">Aggregate counts only.</p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Total</p>
              <p className="mt-2 text-3xl font-semibold text-ink-950">{summary.total}</p>
            </div>
            <SummaryBlock title="By page type" data={summary.byPageType} />
            <SummaryBlock title="By device" data={summary.byDevice} />
            <SummaryBlock title="By service" data={summary.byService} />
            <SummaryBlock title="By city" data={summary.byCity} />
          </div>
        </div>
      </Container>
    </Section>
  );
}

function SummaryBlock({ title, data }: { title: string; data: Record<string, number> }) {
  const entries = Object.entries(data).sort((a, b) => b[1] - a[1]).slice(0, 10);

  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <p className="text-sm font-semibold text-ink-950">{title}</p>
      <ul className="mt-3 space-y-2 text-sm text-ink-700">
        {entries.length === 0 ? <li>No data yet.</li> : null}
        {entries.map(([key, value]) => (
          <li key={key} className="flex items-center justify-between">
            <span>{key || 'Unknown'}</span>
            <span className="font-semibold text-ink-950">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
