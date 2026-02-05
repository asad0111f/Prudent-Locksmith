import { Card } from '@/components/ui/card';

const REVIEWS = [
  {
    name: 'A.C.',
    rating: 5,
    quote: 'Fast arrival, clear pricing, and the lockout was solved without damage. Exactly what we needed.'
  },
  {
    name: 'M.R.',
    rating: 5,
    quote: 'Garage door fixed the same day with a clean explanation of the issue and options.'
  },
  {
    name: 'S.T.',
    rating: 5,
    quote: 'Professional, respectful, and efficient. I felt informed the entire time.'
  }
];

export function ReviewsSection({ title = 'Local customers trust Prudent' }: { title?: string }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-ink-950">{title}</h2>
        <p className="text-xs text-ink-600">Review highlights</p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {REVIEWS.map((review) => (
          <Card key={review.name} className="h-full">
            <div className="flex items-center justify-between text-sm text-ink-700">
              <span className="font-semibold text-ink-950">{review.name}</span>
              <span aria-label={`${review.rating} star rating`}>
                {'★'.repeat(review.rating)}
              </span>
            </div>
            <p className="mt-3 text-sm text-ink-700">“{review.quote}”</p>
          </Card>
        ))}
      </div>
    </div>
  );
}
