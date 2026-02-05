import clsx from 'clsx';

const steps = ['Dispatch', 'Arrival', 'Diagnosis', 'Fix', 'Test', 'Warranty'];

export function ProcessTimeline({ compact = false }: { compact?: boolean }) {
  return (
    <div className={clsx('rounded-2xl border border-slate-100 bg-white p-6 shadow-soft', compact && 'p-4')}>
      <p className="text-sm font-semibold text-ink-950">Our proven process</p>
      <ol className="mt-4 grid gap-3 text-sm text-ink-700 md:grid-cols-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-teal-50 text-xs font-semibold text-teal-700">
              {index + 1}
            </span>
            <span>{step}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
