import { Reveal } from '@/components/reveal';

const STATS = [
  {
    value: '~30 min',
    label: 'Avg. Response Time',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600" aria-hidden="true">
        <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/>
      </svg>
    )
  },
  {
    value: '4.9 ★',
    label: 'Customer Rating',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-gold-500" aria-hidden="true">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
      </svg>
    )
  },
  {
    value: 'Hamilton + GTA',
    label: 'Service Coverage',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600" aria-hidden="true">
        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
      </svg>
    )
  },
  {
    value: 'Fully Insured',
    label: 'Licensed Technicians',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600" aria-hidden="true">
        <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/>
      </svg>
    )
  }
];

export function TrustStrip() {
  return (
    <Reveal as="div">
      <div className="surface-panel overflow-hidden">
        <div className="grid grid-cols-2 divide-x divide-y divide-slate-100 sm:grid-cols-4 sm:divide-y-0">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 px-4 py-5 text-center transition-colors hover:bg-slate-50"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-teal-50">
                {stat.icon}
              </div>
              <div>
                <p className="font-display text-lg font-bold text-ink-950 leading-tight">{stat.value}</p>
                <p className="mt-0.5 text-xs font-medium text-ink-600">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Reveal>
  );
}
