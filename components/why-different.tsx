export function WhyDifferent() {
  return (
    <div className="rounded-2xl border border-slate-100 bg-white p-6 shadow-soft">
      <h2 className="text-lg font-semibold text-ink-950">Why we’re different</h2>
      <div className="mt-4 grid gap-3 text-sm text-ink-700">
        <div className="grid grid-cols-[1.2fr_1fr] gap-4">
          <p className="font-semibold text-ink-950">Response time</p>
          <p>ETA confirmed before dispatch</p>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-4">
          <p className="font-semibold text-ink-950">Transparency</p>
          <p>Upfront pricing and clear options</p>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-4">
          <p className="font-semibold text-ink-950">Pricing clarity</p>
          <p>No surprise fees, approval before work</p>
        </div>
        <div className="grid grid-cols-[1.2fr_1fr] gap-4">
          <p className="font-semibold text-ink-950">Specialization</p>
          <p>Focused local locksmith and garage door expertise</p>
        </div>
      </div>
    </div>
  );
}
