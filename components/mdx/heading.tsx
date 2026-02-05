import type { HTMLAttributes, ReactNode } from 'react';
import clsx from 'clsx';

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getText(children: ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getText).join(' ');
  if (children && typeof children === 'object' && 'props' in children) {
    const node = children as { props?: { children?: ReactNode } };
    return getText(node.props?.children);
  }
  return '';
}

export function H2({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const text = getText(children);
  const id = slugify(text);
  return (
    <h2
      id={props.id || id}
      className={clsx('text-2xl font-semibold text-ink-950 scroll-mt-28', className)}
      {...props}
    >
      {children}
    </h2>
  );
}

export function H3({ children, className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  const text = getText(children);
  const id = slugify(text);
  return (
    <h3
      id={props.id || id}
      className={clsx('text-xl font-semibold text-ink-950 scroll-mt-28', className)}
      {...props}
    >
      {children}
    </h3>
  );
}
