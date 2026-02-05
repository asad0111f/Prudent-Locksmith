import clsx from 'clsx';
import type { ReactNode } from 'react';

export function Card({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={clsx(
        'surface-panel card-gradient-hover p-6 transition duration-300 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-lg hover:border-slate-200 focus-within:border-slate-200',
        className
      )}
    >
      {children}
    </div>
  );
}
