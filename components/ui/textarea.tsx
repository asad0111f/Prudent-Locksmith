import clsx from 'clsx';
import type { TextareaHTMLAttributes } from 'react';

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
};

export function Textarea({ label, className, id, ...props }: TextareaProps) {
  const textareaId = id || `textarea-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <label className="grid gap-2 text-sm font-medium text-ink-950" htmlFor={textareaId}>
      {label}
      <textarea
        id={textareaId}
        className={clsx(
          'w-full rounded-xl border border-slate-200/90 bg-white/95 px-4 py-3 text-sm text-ink-900 shadow-sm outline-none transition focus:border-teal-600 focus:ring-2 focus:ring-teal-200/60',
          className
        )}
        {...props}
      />
    </label>
  );
}
