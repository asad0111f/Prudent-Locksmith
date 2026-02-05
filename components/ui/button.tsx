import clsx from 'clsx';
import Link from 'next/link';
import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';

type ButtonBaseProps = {
  href?: string;
  variant?: 'primary' | 'secondary';
  size?: 'md' | 'sm';
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
    'inline-flex items-center justify-center rounded-full font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2 motion-safe:hover:-translate-y-0.5 motion-safe:hover:shadow-md active:translate-y-0 active:shadow-sm';
  const sizes = {
    md: 'px-6 py-3 text-sm',
    sm: 'px-4 py-2 text-xs'
  };
  const variants = {
    primary: 'bg-teal-600 text-white hover:bg-teal-700',
    secondary: 'border border-slate-300 text-ink-950 hover:border-slate-400 hover:bg-slate-50'
  };

  const classes = clsx(base, sizes[size], variants[variant], className);

  if (href) {
    return <Link href={href} className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)} />;
  }

  return <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)} />;
}
