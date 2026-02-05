import { createElement } from 'react';

function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

function getText(children: React.ReactNode): string {
  if (typeof children === 'string') return children;
  if (Array.isArray(children)) return children.map(getText).join(' ');
  if (children && typeof children === 'object' && 'props' in children) {
    // @ts-expect-error react node
    return getText(children.props?.children);
  }
  return '';
}

export function H2({ children }: { children: React.ReactNode }) {
  const text = getText(children);
  const id = slugify(text);
  return createElement('h2', { id, className: 'text-2xl font-semibold text-ink-950 scroll-mt-28' }, children);
}

export function H3({ children }: { children: React.ReactNode }) {
  const text = getText(children);
  const id = slugify(text);
  return createElement('h3', { id, className: 'text-xl font-semibold text-ink-950 scroll-mt-28' }, children);
}
