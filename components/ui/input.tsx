import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export function Input({ label, className, id, ...props }: InputProps) {
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label className="grid gap-2 text-sm font-medium text-ink-950" htmlFor={inputId}>
      {label}
      <input
        id={inputId}
        className={clsx(
          'w-full rounded-xl border border-slate-200 px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-teal-600',
          className
        )}
        {...props}
      />
    </label>
  );
}
