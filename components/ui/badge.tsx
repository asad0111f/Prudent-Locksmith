import clsx from 'clsx';
import type { ReactNode } from 'react';

export function Badge({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span className={clsx('inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-ink-700', className)}>
      {children}
    </span>
  );
}
