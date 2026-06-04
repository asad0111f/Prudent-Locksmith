import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { RequestServiceTrigger } from '@/components/request-service-trigger';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { ReviewsSection } from '@/components/reviews';
import { TrustStrip } from '@/components/trust-strip';
import { PhoneLink } from '@/components/phone-link';
import { Reveal } from '@/components/reveal';
import { FeatureImage, HeroImage, ServiceImage } from '@/components/site-image';
import { SITE } from '@/lib/site';
import { IMAGES } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Prudent Locksmith and Garage Services — Hamilton & GTA',
  description:
    'Prudent Locksmith and Garage Services offers fast, professional locksmith and garage door help with clear pricing and reliable local technicians. Call now for urgent service.',
  alternates: { canonical: '/' }
};

const SERVICES = [
  {
    title: 'Garage Door Emergency',
    category: 'Emergency',
    text: 'Stuck doors, spring failures, and urgent safety issues resolved fast.',
    href: '/services/garage-door-repair/garage-door-not-opening-or-stuck',
    image: IMAGES.services.garageDoorRepair1,
    imageAlt: 'Technician inspecting a garage door with tools.'
  },
  {
    title: 'Garage Door Openers',
    category: 'Installation',
    text: 'New installs, upgrades, belt replacements, and full programming.',
    href: '/services/garage-door-opener-install-and-service/new-garage-door-opener-installation',
    image: IMAGES.services.garageOpener1,
    imageAlt: 'Garage door opener hardware mounted above a door.'
  },
  {
    title: 'Residential Locksmith',
    category: 'Residential',
    text: 'Lockouts, rekeying, cylinder and lock replacement for your home.',
    href: '/services/residential-locksmith-services/home-and-apartment-lockouts',
    image: IMAGES.services.residentialLock2,
    imageAlt: 'Locksmith working at a residential front door.'
  },
  {
    title: 'Automotive Locksmith',
    category: 'Automotive',
    text: 'Fast vehicle entry and mobile lockout assistance near you.',
    href: '/services/automotive-locksmith-services/car-lockouts',
    image: IMAGES.services.autoLockout1,
    imageAlt: 'Technician assisting with a car door lockout.'
  },
  {
    title: 'Commercial Locksmith',
    category: 'Commercial',
    text: 'Storefront repairs, mortise locks, and advanced troubleshooting.',
    href: '/services/commercial-storefront-lock-services/storefront-lock-repair',
    image: IMAGES.services.commercialLock1,
    imageAlt: 'Storefront door lock and handle close-up.'
  }
];

const HOW_IT_WORKS = [
  {
    step: '01',
    title: 'Call or Request Online',
    text: 'Share your issue and location — by phone or our quick online form.'
  },
  {
    step: '02',
    title: 'Get Your ETA & Quote',
    text: "We confirm your technician's arrival time and provide a clear upfront price."
  },
  {
    step: '03',
    title: 'Technician Arrives',
    text: 'A licensed local tech arrives on time, fully equipped to handle your job.'
  },
  {
    step: '04',
    title: 'Job Done, Peace of Mind',
    text: 'Review the work, approve the invoice, and feel secure again.'
  }
];

const WHY_PRUDENT = [
  'Licensed where required and fully insured technicians',
  'Clear, upfront pricing — no surprise fees after the job',
  'Same-day availability for all urgent requests',
  'Respectful, clean, and professional on every call',
  'Warranty-backed workmanship on select services',
  'Local coverage across Hamilton and surrounding GTA cities'
];

export default function HomePage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    telephone: SITE.phoneDisplay,
    url: SITE.baseUrl,
    areaServed: 'Hamilton, ON and surrounding areas',
    openingHours: 'Mo-Su 00:00-23:59'
  };

  return (
    <>
      {/* ─── HERO ─── */}
      <section className="relative overflow-hidden bg-hero-dark pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24">
        {/* Decorative grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />

        <Container>
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            {/* ── Left col ── */}
            <div className="space-y-7">
              {/* Urgency badge */}
              <Reveal as="div" delay={0}>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/15 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-white">
                  <span className="pulse-dot flex-shrink-0" aria-hidden="true" />
                  <span>Emergency Service Available Now</span>
                </div>
              </Reveal>

              {/* Headline */}
              <Reveal as="div" delay={60}>
                <h1 className="font-display text-4xl font-extrabold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
                  Prudent Locksmith &amp;{' '}
                  <span className="relative inline-block">
                    <span className="relative z-10 text-teal-400 text-teal-glow">Garage Services</span>
                  </span>{' '}
                  &mdash; your trusted local experts
                </h1>
              </Reveal>

              {/* Sub-copy */}
              <Reveal as="div" delay={120}>
                <p className="text-lg leading-relaxed text-slate-300 max-w-lg">
                  Locked out, stuck door, or damaged lock? Prudent Locksmith and Garage Services delivers calm, professional
                  help with upfront pricing and local technicians across Hamilton and the GTA.
                </p>
              </Reveal>

              {/* CTAs */}
              <Reveal as="div" delay={180} className="flex flex-wrap gap-3">
                <PhoneLink asButton size="lg" className="w-full sm:w-auto">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call Now — {SITE.phoneDisplay}
                </PhoneLink>
                <RequestServiceTrigger label="Request Service" variant="ghost-dark" className="w-full sm:w-auto" size="lg" />
              </Reveal>

              {/* Mini trust row */}
              <Reveal as="ul" delay={240} className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
                {[
                  '✓  30-min response',
                  '✓  Upfront pricing',
                  '✓  No call-out fee',
                  '✓  Insured techs'
                ].map((item) => (
                  <li key={item} className="font-medium">{item}</li>
                ))}
              </Reveal>
            </div>

            {/* ── Right col ── */}
            <div className="space-y-5">
              {/* Hero image */}
              <Reveal as="div" delay={80}>
                <div className="relative">
                  <HeroImage
                    src={IMAGES.hero.home}
                    alt="Technician inspecting a residential garage door."
                    priority
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="ring-1 ring-white/10"
                  />
                  {/* Floating stat card */}
                  <div className="absolute -bottom-4 -left-4 animate-float">
                    <div className="surface-panel flex items-center gap-3 px-4 py-3 shadow-glow-teal border-teal-200/60">
                      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-teal-gradient">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                      </div>
                      <div>
                        <p className="font-display text-lg font-bold text-ink-950 leading-tight">500+</p>
                        <p className="text-xs font-medium text-ink-600">Satisfied customers</p>
                      </div>
                    </div>
                  </div>
                  {/* Rating badge */}
                  <div className="absolute -top-3 -right-3 animate-float" style={{ animationDelay: '2s' }}>
                    <div className="surface-panel flex items-center gap-1.5 px-3 py-2 shadow-glow-gold border-amber-200/60">
                      <span className="star-gold text-base">★★★★★</span>
                      <span className="font-display text-sm font-bold text-ink-950">4.9</span>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Quick call card */}
              <Reveal as="div" delay={160}>
                <Card className="bg-cta-dark !border-white/10">
                  <div className="flex items-center gap-3">
                    <Image src={IMAGES.brand.logoMark} alt="Prudent" width={40} height={40} className="rounded-lg" />
                    <div>
                      <p className="text-sm font-bold text-white">Local dispatch, reliable techs</p>
                      <p className="text-xs text-slate-400">Hamilton, ON and nearby areas</p>
                    </div>
                  </div>
                  <div className="mt-4 space-y-2 text-sm text-slate-300">
                    <p>Need immediate help? Call our live dispatch line.</p>
                    <PhoneLink className="inline-flex text-lg font-bold font-display text-white hover:text-teal-400 transition-colors">
                      {SITE.phoneDisplay}
                    </PhoneLink>
                  </div>
                  <PhoneLink asButton className="mt-4 w-full">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                    </svg>
                    Call for Immediate Service
                  </PhoneLink>
                </Card>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* ─── TRUST STRIP ─── */}
      <Section className="py-8 sm:py-10">
        <Container>
          <TrustStrip />
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* ─── SERVICES ─── */}
      <Section>
        <Container>
          <Reveal as="div" className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <Badge variant="teal" className="mb-3">Our Services</Badge>
              <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl lg:text-4xl">
                Built for urgent and planned needs
              </h2>
            </div>
            <div className="flex flex-wrap gap-4 text-sm font-semibold">
              <Link href="/services" className="text-teal-700 hover:text-teal-600 transition-colors">View all services →</Link>
              <Link href="/emergency" className="text-red-600 hover:text-red-700 transition-colors">Emergency service →</Link>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((item, i) => (
              <Reveal key={item.title} as="div" delay={i * 50}>
                <Link href={item.href} className="group block h-full">
                  <div className="surface-panel overflow-hidden h-full transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-card-hover group-hover:border-teal-200/50">
                    <div className="relative overflow-hidden">
                      <ServiceImage
                        src={item.image}
                        alt={item.imageAlt}
                        imageClassName="group-hover:scale-[1.04] transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <Badge variant="teal" className="text-[10px] shadow-sm">{item.category}</Badge>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display text-base font-bold text-ink-950 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                      <p className="mt-1.5 text-sm text-ink-600 leading-relaxed">{item.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-teal-700">
                        View details
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" className="transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true">
                          <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* ─── EMERGENCY CTA BANNER ─── */}
      <div className="relative overflow-hidden bg-hero-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '48px 48px'
          }}
        />
        <Container>
          <div className="relative flex flex-col items-center gap-6 py-14 text-center sm:flex-row sm:justify-between sm:text-left">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="pulse-dot flex-shrink-0" aria-hidden="true" />
                <span className="text-xs font-bold uppercase tracking-wider text-red-400">24/7 Emergency Dispatch</span>
              </div>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                Locked out or stuck door right now?
              </h2>
              <p className="mt-2 text-slate-300">
                We prioritize urgent calls — get a tech dispatched to you fast.
              </p>
            </div>
            <div className="flex flex-col items-center gap-3 sm:items-end flex-shrink-0">
              <PhoneLink asButton size="lg">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                Call {SITE.phoneDisplay}
              </PhoneLink>
              <p className="text-xs text-slate-500">Average response time: ~30 minutes</p>
            </div>
          </div>
        </Container>
      </div>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* ─── HOW IT WORKS ─── */}
      <Section className="bg-surface-muted">
        <Container>
          <Reveal as="div" className="mb-10">
            <Badge variant="teal" className="mb-3">Simple Process</Badge>
            <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl lg:text-4xl">
              How it works
            </h2>
            <p className="mt-2 text-ink-600">From your first call to job complete — four easy steps.</p>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {HOW_IT_WORKS.map((step, i) => (
              <Reveal key={step.step} as="div" delay={i * 60}>
                <div className="surface-panel h-full p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
                  <p className="step-number text-5xl font-extrabold">{step.step}</p>
                  <h3 className="mt-3 font-display text-base font-bold text-ink-950">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bottom CTA */}
          <Reveal as="div" delay={240} className="mt-8">
            <div className="surface-panel p-6 sm:p-8 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-xl font-bold text-ink-950">Ready to get started?</h3>
                <p className="mt-1 text-sm text-ink-600">
                  Speak with dispatch for immediate assistance, or schedule a visit.
                </p>
              </div>
              <div className="flex flex-wrap gap-3 flex-shrink-0">
                <PhoneLink asButton size="sm">
                  Call {SITE.phoneDisplay}
                </PhoneLink>
                <Button href="/contact" variant="secondary" size="sm">
                  Schedule Service
                </Button>
              </div>
            </div>
          </Reveal>
        </Container>
      </Section>

      <div className="h-px w-full bg-section-divider" aria-hidden="true" />

      {/* ─── WHY PRUDENT ─── */}
      <Section>
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            {/* Left */}
            <div>
              <Reveal as="div">
                <Badge variant="teal" className="mb-3">Why Choose Us</Badge>
                <h2 className="font-display text-2xl font-bold text-ink-950 sm:text-3xl lg:text-4xl">
                  Why choose Prudent
                </h2>
                <p className="mt-3 text-ink-600">
                  We built our service around what people actually need when they&apos;re stressed: fast help, honest pricing,
                  and a technician they can trust.
                </p>
              </Reveal>

              <ul className="mt-6 space-y-3">
                {WHY_PRUDENT.map((point, i) => (
                  <Reveal key={point} as="li" delay={i * 50}>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-teal-gradient">
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                        </svg>
                      </div>
                      <span className="text-sm text-ink-700 leading-relaxed">{point}</span>
                    </div>
                  </Reveal>
                ))}
              </ul>

              {/* Star summary */}
              <Reveal as="div" delay={350} className="mt-8 flex items-center gap-3 rounded-xl border border-amber-100 bg-amber-50 px-4 py-3">
                <span className="star-gold text-xl">★★★★★</span>
                <div>
                  <p className="text-sm font-bold text-ink-950">4.9 / 5 average rating</p>
                  <p className="text-xs text-ink-600">From 100+ verified customers</p>
                </div>
              </Reveal>
            </div>

            {/* Right */}
            <div className="space-y-5">
              <Reveal as="div" delay={80}>
                <FeatureImage
                  src={IMAGES.sections.trustTechVan}
                  alt="Service technician beside a branded van with equipment."
                  sizes="(max-width: 1024px) 100vw, 520px"
                />
              </Reveal>

              <Reveal as="div" delay={140} className="grid gap-4 sm:grid-cols-2">
                {/* Emergency dispatch card */}
                <div className="bg-cta-dark rounded-2xl border border-white/10 p-5">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="pulse-dot flex-shrink-0" aria-hidden="true" />
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">Emergency</span>
                  </div>
                  <h3 className="font-display text-base font-bold text-white">Dispatch priority</h3>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    Stuck door or lockout? We prioritize urgent calls and confirm your ETA quickly.
                  </p>
                  <PhoneLink asButton size="sm" className="mt-4 w-full">
                    Call Now
                  </PhoneLink>
                </div>

                {/* Schedule card */}
                <div className="surface-panel p-5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-50 mb-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-teal-600" aria-hidden="true">
                      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-base font-bold text-ink-950">Prefer to schedule?</h3>
                  <p className="mt-1.5 text-xs text-ink-600 leading-relaxed">
                    Request service online and we&apos;ll confirm timing and pricing.
                  </p>
                  <Button href="/contact" variant="secondary" size="sm" className="mt-4 w-full">
                    Request Service
                  </Button>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* ─── REVIEWS ─── */}
      <div className="h-px w-full bg-section-divider" aria-hidden="true" />
      <Section className="bg-surface-muted">
        <Container>
          <ReviewsSection />
        </Container>
      </Section>

      {/* ─── FINAL CTA ─── */}
      <div className="relative overflow-hidden bg-hero-dark">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px'
          }}
        />
        <Container>
          <div className="relative py-16 text-center sm:py-20">
            <Reveal as="div">
              <Badge variant="dark" className="mb-4">Get Started Today</Badge>
              <h2 className="font-display text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
                Ready when you need us
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
                Fast, honest, local. Prudent is your go-to for locksmith and garage door services across Hamilton and the GTA.
              </p>
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
                <PhoneLink asButton size="lg">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                  Call {SITE.phoneDisplay}
                </PhoneLink>
                <Button href="/contact" variant="ghost-dark" size="lg">
                  Request Service Online
                </Button>
              </div>
              <p className="mt-5 text-sm text-slate-500">No commitment required · Upfront pricing always</p>
            </Reveal>
          </div>
        </Container>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
