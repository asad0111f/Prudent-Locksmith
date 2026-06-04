import clsx from 'clsx';
import type { ReactNode } from 'react';

type BadgeVariant = 'default' | 'urgent' | 'gold' | 'teal' | 'dark';

export function Badge({
  children,
  className,
  variant = 'default'
}: {
  children: ReactNode;
  className?: string;
  variant?: BadgeVariant;
}) {
  const variants: Record<BadgeVariant, string> = {
    default: 'bg-slate-100 text-ink-700 border border-slate-200',
    urgent: 'bg-red-50 text-red-700 border border-red-200',
    gold: 'bg-amber-50 text-amber-700 border border-amber-200',
    teal: 'bg-teal-50 text-teal-700 border border-teal-200',
    dark: 'bg-white/10 text-white border border-white/20 backdrop-blur-sm'
  };

  return (
    <span
      className={clsx(
        'inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
