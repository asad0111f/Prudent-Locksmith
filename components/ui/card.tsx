import clsx from 'clsx';
import type { ReactNode } from 'react';

type CardVariant = 'default' | 'dark' | 'accent';

export function Card({
  children,
  className,
  variant = 'default'
}: {
  children: ReactNode;
  className?: string;
  variant?: CardVariant;
}) {
  const variants: Record<CardVariant, string> = {
    default:
      'surface-panel card-gradient-hover p-6 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card-hover hover:border-slate-200',
    dark:
      'surface-dark card-gradient-hover p-6 transition-all duration-300 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-glow-teal',
    accent:
      'surface-panel card-gradient-hover p-6 transition-all duration-300 border-l-2 border-l-teal-600 motion-safe:hover:-translate-y-1 motion-safe:hover:shadow-card-hover motion-safe:hover:border-l-teal-500'
  };

  return (
    <div className={clsx(variants[variant], className)}>
      {children}
    </div>
  );
}
