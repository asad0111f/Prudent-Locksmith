import clsx from 'clsx';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = {
  href?: string;
  variant?: 'primary' | 'secondary' | 'urgent' | 'ghost-dark';
  size?: 'md' | 'sm' | 'lg';
  className?: string;
};

type AnchorButtonProps = ButtonBaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type NativeButtonProps = ButtonBaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button({ href, variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const base =
    'relative inline-flex min-h-[44px] items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-safe:active:scale-[0.98] overflow-hidden';

  const sizes = {
    lg: 'px-8 py-4 text-base',
    md: 'px-6 py-3 text-sm',
    sm: 'px-4 py-2 text-xs'
  };

  const variants = {
    primary:
      'bg-teal-gradient text-white shadow-glow-sm hover:shadow-glow-teal motion-safe:hover:-translate-y-0.5 btn-shimmer',
    secondary:
      'border border-slate-200 bg-white text-ink-950 shadow-card hover:border-teal-600/30 hover:shadow-card-hover hover:bg-teal-50 motion-safe:hover:-translate-y-0.5',
    urgent:
      'bg-gradient-to-r from-red-600 to-red-500 text-white shadow-md hover:from-red-700 hover:to-red-600 motion-safe:hover:-translate-y-0.5 btn-shimmer',
    'ghost-dark':
      'border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:border-white/30 motion-safe:hover:-translate-y-0.5'
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    if (href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('sms:')) {
      return <a href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
    }
    return <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
