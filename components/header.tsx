import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { PhoneLink } from '@/components/phone-link';
import { getEmergencyServices, servicesConfig } from '@/lib/services';

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <Container>
        <div className="flex items-center justify-between py-4">
          <Link href="/" className="text-xl font-semibold text-ink-950">
            Prudent
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-ink-700 md:flex">
            <Link href="/" className="transition hover:text-ink-950">Home</Link>
            <Link href="/emergency" className="transition hover:text-ink-950">Emergency</Link>
            <Link href="/resources" className="transition hover:text-ink-950">Resources</Link>
            <ServicesMenu />
            <Link href="/service-areas" className="transition hover:text-ink-950">Service Areas</Link>
            <Link href="/about" className="transition hover:text-ink-950">About</Link>
            <Link href="/contact" className="transition hover:text-ink-950">Contact</Link>
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

function ServicesMenu() {
  const topServices = getEmergencyServices().slice(0, 4);
  return (
    <div className="group relative">
      <Link href="/services" className="inline-flex items-center gap-1 transition hover:text-ink-950">
        Services
        <span className="text-xs">▾</span>
      </Link>
      <div className="pointer-events-none absolute left-0 top-full mt-3 w-[640px] rounded-2xl border border-slate-200 bg-white p-6 opacity-0 shadow-soft transition group-hover:pointer-events-auto group-hover:opacity-100 group-focus-within:pointer-events-auto group-focus-within:opacity-100">
        <div className="grid gap-6 lg:grid-cols-[1fr_1fr_0.9fr]">
          {servicesConfig.map((category) => (
            <div key={category.slug}>
              <p className="text-xs font-semibold uppercase tracking-wide text-teal-700">{category.label}</p>
              <p className="mt-2 text-sm font-semibold text-ink-950">{category.name}</p>
              <ul className="mt-3 space-y-2 text-sm text-ink-700">
                {category.services.map((service) => (
                  <li key={service.id}>
                    <Link href={`/services/${category.slug}/${service.slug}`} className="transition hover:text-ink-950">
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-rose-600">Top Services</p>
            <p className="mt-2 text-sm font-semibold text-ink-950">Emergency priority</p>
            <ul className="mt-3 space-y-2 text-sm text-ink-700">
              {topServices.map((service) => (
                <li key={service.id}>
                  <Link href={`/services/${service.category.slug}/${service.slug}`} className="transition hover:text-ink-950">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
            <Link href="/services" className="mt-3 inline-flex text-sm font-semibold text-teal-700">
              View all services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function MobileMenu() {
  return (
    <details className="relative">
      <summary className="cursor-pointer list-none rounded-md border border-slate-200 px-3 py-2 text-sm font-semibold text-ink-950">
        Menu
      </summary>
      <div className="absolute right-0 mt-2 w-72 rounded-lg border border-slate-200 bg-white p-4 shadow-soft">
        <nav className="flex flex-col gap-3 text-sm font-medium">
          <Link href="/" className="text-ink-700 hover:text-ink-950">Home</Link>
          <Link href="/emergency" className="text-ink-700 hover:text-ink-950">Emergency</Link>
          <Link href="/resources" className="text-ink-700 hover:text-ink-950">Resources</Link>
          <details>
            <summary className="cursor-pointer list-none text-ink-700">Services</summary>
            <div className="mt-3 grid gap-3">
              {servicesConfig.map((category) => (
                <details key={category.slug}>
                  <summary className="cursor-pointer list-none font-semibold text-ink-950">{category.label}</summary>
                  <ul className="mt-2 space-y-2 text-sm text-ink-700">
                    {category.services.map((service) => (
                      <li key={service.id}>
                        <Link href={`/services/${category.slug}/${service.slug}`} className="transition hover:text-ink-950">
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
            </div>
          </details>
          <Link href="/service-areas" className="text-ink-700 hover:text-ink-950">Service Areas</Link>
          <Link href="/about" className="text-ink-700 hover:text-ink-950">About</Link>
          <Link href="/contact" className="text-ink-700 hover:text-ink-950">Contact</Link>
        </nav>
      </div>
    </details>
  );
}
