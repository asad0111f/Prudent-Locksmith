import clsx from 'clsx';
import type { ReactNode } from 'react';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'rounded-2xl border border-slate-100 bg-white p-6 shadow-soft transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg',
        className
      )}
    >
      {children}
    </div>
  );
}
