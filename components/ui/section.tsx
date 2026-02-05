import clsx from 'clsx';
import type { ReactNode } from 'react';

export function Section({ children, className }: { children: ReactNode; className?: string }) {
  return <section className={clsx('py-10 sm:py-14 lg:py-16', className)}>{children}</section>;
}
