'use client';

import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

type RevealProps<T extends React.ElementType> = {
  as?: T;
  className?: string;
  delay?: number;
  once?: boolean;
  distance?: number;
  children: React.ReactNode;
};

export function Reveal<T extends React.ElementType = 'div'>({
  as,
  className,
  delay = 0,
  once = true,
  distance = 12,
  children
}: RevealProps<T>) {
  const Component = (as || 'div') as React.ElementType;
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Component
      ref={ref}
      className={clsx('reveal', className)}
      data-reveal={visible ? 'visible' : 'hidden'}
      style={{
        '--reveal-delay': `${delay}ms`,
        '--reveal-distance': `${distance}px`
      }}
    >
      {children}
    </Component>
  );
}
