import { Reveal } from '@/components/reveal';

const REVIEWS = [
  {
    name: 'Amanda C.',
    initials: 'AC',
    rating: 5,
    quote: 'Fast arrival, clear pricing, and the lockout was solved without damage. Exactly what we needed in a stressful moment.'
  },
  {
    name: 'Marcus R.',
    initials: 'MR',
    rating: 5,
    quote: 'Garage door fixed the same day with a clean explanation of the issue and options. No hidden fees, just honest work.'
  },
  {
    name: 'Sarah T.',
    initials: 'ST',
    rating: 5,
    quote: 'Professional, respectful, and efficient. The technician walked me through every step. I felt informed the entire time.'
  },
  {
    name: 'James L.',
    initials: 'JL',
    rating: 5,
    quote: 'Called at 11pm for a lockout and they were there in under 30 minutes. Incredible response time and very fair pricing.'
  }
];

export function ReviewsSection({ title = 'Local customers trust Prudent' }: { title?: string }) {
  return (
    <div className="space-y-8">
      {/* Header row */}
      <Reveal as="div" className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl">{title}</h2>
          <div className="mt-2 flex items-center gap-2">
            <span className="star-gold text-lg leading-none">★★★★★</span>
            <span className="text-sm font-semibold text-ink-950">4.9</span>
            <span className="text-sm text-ink-600">·</span>
            <span className="text-sm text-ink-600">Trusted by 100+ Hamilton families</span>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full bg-amber-50 border border-amber-100 px-3 py-1.5">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="text-gold-500" aria-hidden="true">
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
          </svg>
          <span className="text-xs font-semibold text-amber-800">Verified customer reviews</span>
        </div>
      </Reveal>

      {/* Review cards */}
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {REVIEWS.map((review, i) => (
          <Reveal key={review.name} as="div" delay={i * 60}>
            <div className="surface-panel flex h-full flex-col p-5 transition-all duration-300 hover:shadow-card-hover hover:-translate-y-0.5">
              {/* Stars */}
              <div className="star-gold text-sm">{'★'.repeat(review.rating)}</div>

              {/* Quote */}
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">
                &ldquo;{review.quote}&rdquo;
              </p>

              {/* Reviewer */}
              <div className="mt-4 flex items-center gap-3 border-t border-slate-100 pt-4">
                <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-teal-gradient text-xs font-bold text-white">
                  {review.initials}
                </div>
                <div>
                  <p className="text-xs font-semibold text-ink-950">{review.name}</p>
                  <p className="text-[10px] font-medium text-teal-600 uppercase tracking-wide">Verified customer</p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
