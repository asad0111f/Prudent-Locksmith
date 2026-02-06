'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import { Container } from '@/components/ui/container';
import { PhoneLink } from '@/components/phone-link';
import { getEmergencyServices, servicesConfig } from '@/lib/services';
import { IMAGES } from '@/lib/images';

export function Header() {
  const pathname = usePathname();
  const servicesActive = pathname?.startsWith('/services') ?? false;
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path) ?? false;
  };

  return (
    <header className="sticky top-0 z-[90] border-b border-slate-200/70 bg-header-gradient backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="inline-flex items-center gap-2">
            <Image src={IMAGES.brand.logoMark} alt="Prudent" width={36} height={36} />
            <span className="text-xl font-semibold text-ink-950">Prudent</span>
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
            <Link
              href="/"
              className={clsx(
                'inline-flex min-h-[44px] items-center rounded-full px-3 py-1 transition hover:text-ink-950',
                isActive('/') && 'bg-slate-100/70 text-ink-950'
              )}
            >
              Home
            </Link>
            <Link
              href="/emergency"
              className={clsx(
                'inline-flex min-h-[44px] items-center rounded-full px-3 py-1 transition hover:text-ink-950',
                isActive('/emergency') && 'bg-slate-100/70 text-ink-950'
              )}
            >
              Emergency
            </Link>
            <ServicesMenu active={servicesActive} />
            <Link
              href="/service-areas"
              className={clsx(
                'inline-flex min-h-[44px] items-center rounded-full px-3 py-1 transition hover:text-ink-950',
                isActive('/service-areas') && 'bg-slate-100/70 text-ink-950'
              )}
            >
              Service Areas
            </Link>
            <Link
              href="/about"
              className={clsx(
                'inline-flex min-h-[44px] items-center rounded-full px-3 py-1 transition hover:text-ink-950',
                isActive('/about') && 'bg-slate-100/70 text-ink-950'
              )}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={clsx(
                'inline-flex min-h-[44px] items-center rounded-full px-3 py-1 transition hover:text-ink-950',
                isActive('/contact') && 'bg-slate-100/70 text-ink-950'
              )}
            >
              Contact
            </Link>
          </nav>
          <div className="hidden md:block">
            <PhoneLink asButton>Call Now</PhoneLink>
          </div>
          <div className="flex items-center gap-3 md:hidden">
            <PhoneLink asButton size="sm">Call</PhoneLink>
            <MobileMenu />
          </div>
        </div>
      </Container>
    </header>
  );
}

function ServicesMenu({ active }: { active: boolean }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(72);
  const wrapperRef = useRef<HTMLDivElement | null>(null);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  const topServices = getEmergencyServices().slice(0, 4);

  useEffect(() => {
    const header = document.querySelector('header');
    if (header) {
      setHeaderHeight(header.getBoundingClientRect().height);
    }
    function onResize() {
      if (!header) return;
      setHeaderHeight(header.getBoundingClientRect().height);
    }
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('keydown', onKeyDown);
    }
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [open]);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (!wrapperRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  function openMenu() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
      closeTimeout.current = null;
    }
    setOpen(true);
  }

  function scheduleClose() {
    if (closeTimeout.current) {
      clearTimeout(closeTimeout.current);
    }
    closeTimeout.current = setTimeout(() => setOpen(false), 120);
  }

  function onBlur() {
    requestAnimationFrame(() => {
      const activeEl = document.activeElement;
      if (activeEl && wrapperRef.current?.contains(activeEl)) return;
      scheduleClose();
    });
  }

  return (
    <div
      ref={wrapperRef}
      className="relative"
      onMouseEnter={openMenu}
      onMouseLeave={scheduleClose}
      onFocus={openMenu}
      onBlur={onBlur}
    >
      <button
        type="button"
        aria-expanded={open}
        aria-controls="services-mega-menu"
        onClick={() => setOpen((prev) => !prev)}
        className={clsx(
          'inline-flex min-h-[44px] items-center gap-1 rounded-full px-3 py-1 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-600 focus-visible:ring-offset-2',
          active ? 'bg-teal-50 text-teal-700' : 'text-ink-700 hover:text-ink-950'
        )}
      >
        Services
        <span className="text-xs">▾</span>
      </button>
      <div
        id="services-mega-menu"
        role="menu"
        onScroll={openMenu}
        className={clsx(
          'fixed left-0 right-0 z-40 mt-3 overflow-y-auto opacity-0 pointer-events-none transition duration-200 motion-safe:translate-y-1',
          open && 'opacity-100 pointer-events-auto motion-safe:translate-y-0'
        )}
        style={{
          top: headerHeight + 8,
          maxHeight: `calc(100vh - ${headerHeight}px - 16px)`
        }}
      >
        <div className="mega-menu-gradient mx-auto w-full max-w-6xl rounded-2xl border border-slate-200 p-6 shadow-soft">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_0.9fr]">
            {servicesConfig.map((category) => (
              <div key={category.slug} className="border-l border-slate-100 pl-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{category.label}</p>
                <p className="mt-2 text-sm font-semibold text-ink-950">{category.name}</p>
                <div className="mt-3 h-px w-10 bg-slate-200/80" aria-hidden="true" />
                <ul className="mt-4 space-y-3 text-sm text-ink-700">
                  {category.services.map((service) => {
                    const href = `/services/${category.slug}/${service.slug}`;
                    const isActive = pathname === href;
                    return (
                      <li key={service.id}>
                        <Link
                          href={href}
                          className={clsx(
                            'relative block truncate rounded-lg px-3 py-2 transition hover:bg-slate-50 hover:text-ink-950',
                            isActive && 'bg-teal-50 text-teal-700 font-semibold'
                          )}
                        >
                          {isActive ? (
                            <span className="absolute left-0 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-teal-600" aria-hidden="true" />
                          ) : null}
                          {service.shortLabel}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
            <div className="mega-top-gradient order-first rounded-2xl border border-rose-100 p-4 lg:order-last">
              <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Top Services</p>
              <p className="mt-2 text-sm font-semibold text-ink-950">Emergency priority</p>
              <ul className="mt-4 space-y-3 text-sm text-ink-700">
                {topServices.map((service) => {
                  const href = `/services/${service.category.slug}/${service.slug}`;
                  const isActive = pathname === href;
                  return (
                    <li key={service.id}>
                      <Link
                        href={href}
                        className={clsx(
                          'relative block truncate rounded-lg px-3 py-2 transition hover:bg-white/80 hover:text-ink-950',
                          isActive && 'bg-white text-rose-700 font-semibold'
                        )}
                      >
                        {isActive ? (
                          <span className="absolute left-0 top-1/2 h-4 w-1 -translate-y-1/2 rounded-full bg-rose-500" aria-hidden="true" />
                        ) : null}
                        {service.shortLabel}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <Link href="/services" className="mt-3 inline-flex text-sm font-semibold text-teal-700">
                View all services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  const pathname = usePathname();
  const isActive = (path: string) => {
    if (path === '/') return pathname === '/';
    return pathname?.startsWith(path) ?? false;
  };
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('keydown', onKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [open]);

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      const target = event.target as Node;
      if (!panelRef.current?.contains(target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', onClickOutside);
    }
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-slate-200 px-3 text-sm font-semibold text-ink-950"
      >
        Menu
      </button>
      {mounted && open
        ? createPortal(
          <div className="fixed inset-0 z-[200] md:hidden">
            <div className="absolute inset-0 bg-black/40" aria-hidden="true" />
            <div
              ref={panelRef}
              id="mobile-menu-drawer"
              role="dialog"
              aria-modal="true"
              className="absolute right-0 top-0 z-[210] h-full w-[85vw] max-w-sm overflow-y-auto bg-white px-5 pb-10 pt-6 shadow-soft"
            >
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-ink-950">Menu</p>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="min-h-[44px] text-sm font-semibold text-ink-700"
                >
                  Close
                </button>
              </div>
              <nav className="mt-4 flex flex-col gap-3 text-sm font-medium">
                <Link
                  href="/"
                  className={clsx('rounded-md px-3 py-2 text-ink-700 hover:text-ink-950', isActive('/') && 'bg-slate-100 text-ink-950')}
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/emergency"
                  className={clsx('rounded-md px-3 py-2 text-ink-700 hover:text-ink-950', isActive('/emergency') && 'bg-slate-100 text-ink-950')}
                  onClick={() => setOpen(false)}
                >
                  Emergency
                </Link>
                <div className="rounded-xl border border-slate-200/70 p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-ink-500">Top services</p>
                  <ul className="mt-3 space-y-2">
                    {getEmergencyServices().slice(0, 4).map((service) => (
                      <li key={service.id}>
                        <Link
                          href={`/services/${service.category.slug}/${service.slug}`}
                          className="block rounded-md px-2 py-2 text-ink-700 hover:text-ink-950"
                          onClick={() => setOpen(false)}
                        >
                          {service.shortLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <details className="rounded-xl border border-slate-200/70 p-3">
                  <summary className="cursor-pointer list-none text-sm font-semibold text-ink-950">Services</summary>
                  <div className="mt-3 grid gap-4">
                    {servicesConfig.map((category) => (
                      <details key={category.slug}>
                        <summary className="cursor-pointer list-none text-xs font-semibold uppercase tracking-wide text-ink-500">
                          {category.label}
                        </summary>
                        <ul className="mt-2 space-y-2 text-sm text-ink-700">
                          {category.services.map((service) => (
                            <li key={service.id}>
                              <Link
                                href={`/services/${category.slug}/${service.slug}`}
                                className="block rounded-md px-2 py-2 transition hover:text-ink-950"
                                onClick={() => setOpen(false)}
                              >
                                {service.shortLabel}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </details>
                    ))}
                  </div>
                </details>
                <Link
                  href="/service-areas"
                  className={clsx('rounded-md px-3 py-2 text-ink-700 hover:text-ink-950', isActive('/service-areas') && 'bg-slate-100 text-ink-950')}
                  onClick={() => setOpen(false)}
                >
                  Service Areas
                </Link>
                <Link
                  href="/about"
                  className={clsx('rounded-md px-3 py-2 text-ink-700 hover:text-ink-950', isActive('/about') && 'bg-slate-100 text-ink-950')}
                  onClick={() => setOpen(false)}
                >
                  About
                </Link>
                <Link
                  href="/contact"
                  className={clsx('rounded-md px-3 py-2 text-ink-700 hover:text-ink-950', isActive('/contact') && 'bg-slate-100 text-ink-950')}
                  onClick={() => setOpen(false)}
                >
                  Contact
                </Link>
              </nav>
            </div>
          </div>,
          document.body
        )
        : null}
    </>
  );
}
