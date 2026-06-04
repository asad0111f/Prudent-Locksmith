import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms and conditions for services provided by ${SITE.name} in ${SITE.serviceAreaPrimary} and surrounding areas.`,
  alternates: { canonical: '/terms' },
  openGraph: {
    title: 'Terms of Service',
    description: `Terms and conditions for ${SITE.name}.`,
    url: '/terms'
  }
};

const EFFECTIVE_DATE = 'June 4, 2025';

export default function TermsPage() {
  return (
    <Section className="pt-12 pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">Legal</p>
            <h1 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">Terms of Service</h1>
            <p className="mt-3 text-sm text-ink-600">
              Effective date: <strong>{EFFECTIVE_DATE}</strong> &nbsp;·&nbsp; Business: <strong>{SITE.name}</strong>
            </p>
            <p className="mt-2 text-sm text-ink-600">
              By calling, submitting a service request, or using this website, you agree to these terms. Please read them carefully.
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-ink-700">

            {/* 1 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">1. About Our Business</h2>
              <p>
                {SITE.name} is a locally operated locksmith and garage door service company based in{' '}
                {SITE.serviceAreaPrimary}, {SITE.country}. We provide residential, commercial, and automotive locksmith services, as well as garage door repair, installation, and maintenance.
              </p>
              <p className="mt-3">
                <strong>Licensing &amp; Insurance:</strong> {SITE.licenseNote} A copy of our insurance certificate is available upon request before service begins.
              </p>
              <p className="mt-3">
                Phone: <PhoneLink className="text-teal-700 underline">{SITE.phoneDisplay}</PhoneLink><br />
                Email: <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">2. Service Area</h2>
              <p>
                We provide services in the following communities in {SITE.province}, {SITE.country}:
              </p>
              <ul className="mt-3 grid grid-cols-2 gap-2 pl-5 list-disc sm:grid-cols-3">
                {SITE.serviceAreaCities.map((city) => (
                  <li key={city}>{city}</li>
                ))}
              </ul>
              <p className="mt-3">
                Service availability in specific neighbourhoods may vary. We will confirm coverage when you contact us. We do not claim to serve areas outside the communities listed above.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">3. Quotes, Pricing &amp; Payment</h2>
              <ul className="space-y-3 pl-5 list-disc">
                <li>
                  <strong>Upfront quotes:</strong> We provide a price estimate before beginning any work. You must verbally or in writing approve the quote before we proceed.
                </li>
                <li>
                  <strong>Binding upon approval:</strong> Once you approve a quote, the quoted price is the price you pay for the agreed scope of work. If additional issues are discovered that require additional work, we will provide a separate quote for your approval before proceeding.
                </li>
                <li>
                  <strong>Service call fee:</strong> A dispatch or service call fee may apply in some situations and will be disclosed upfront before your technician is dispatched.
                </li>
                <li>
                  <strong>Payment:</strong> Payment is due upon completion of service. We accept cash, and major debit/credit cards. We do not require payment before work is completed and approved by you.
                </li>
                <li>
                  <strong>No hidden fees:</strong> We do not add fees after the fact. The price agreed upon at dispatch is the price charged.
                </li>
              </ul>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">4. Appointments &amp; Cancellations</h2>
              <ul className="space-y-3 pl-5 list-disc">
                <li>
                  <strong>ETAs:</strong> We provide arrival time estimates. While we work to meet these, ETAs are not guaranteed and may vary due to traffic, prior job complexity, or emergencies.
                </li>
                <li>
                  <strong>Cancellations:</strong> You may cancel a service request at any time before the technician arrives at no charge, unless a service call fee was already disclosed and the technician has been dispatched.
                </li>
                <li>
                  <strong>No-shows:</strong> If a technician arrives and is unable to access the property or reach you, a service call fee may apply.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">5. Workmanship &amp; Warranty</h2>
              <ul className="space-y-3 pl-5 list-disc">
                <li>
                  Our technicians perform work to professional trade standards using quality parts and equipment.
                </li>
                <li>
                  <strong>Labour warranty:</strong> We stand behind our workmanship. If a defect in our work arises within <strong>30 days</strong> of service completion, we will return to assess and correct it at no additional charge, subject to the conditions below.
                </li>
                <li>
                  <strong>Parts warranty:</strong> Manufacturer warranties on parts (if any) are passed on to you. We will provide documentation of any applicable part warranties.
                </li>
                <li>
                  <strong>Warranty exclusions:</strong> Warranties do not cover damage caused by misuse, external factors, pre-existing conditions not disclosed at time of service, or normal wear and tear.
                </li>
              </ul>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">6. Authorization &amp; Property Access</h2>
              <p>
                By requesting service, you confirm that you are the owner of the property or vehicle, or that you have the legal authority to authorize locksmith or garage door work on it. We reserve the right to request proof of identity or ownership before performing any service. We will not perform services where authorization is in question.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">7. Limitation of Liability</h2>
              <p>
                To the fullest extent permitted by applicable law in {SITE.province}, {SITE.country}:
              </p>
              <ul className="mt-3 space-y-3 pl-5 list-disc">
                <li>Our total liability to you for any claim arising from our services shall not exceed the amount you paid us for the specific service giving rise to the claim.</li>
                <li>We are not liable for indirect, incidental, or consequential damages including lost income, security breaches caused by third parties, or pre-existing property defects.</li>
                <li>We are not responsible for damage caused by pre-existing structural issues, faulty parts supplied by the customer, or circumstances outside our control.</li>
              </ul>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">8. Website Use</h2>
              <p>
                This website is provided for informational purposes and to allow customers to request service. You agree not to use this site for any unlawful purpose or in any way that could damage, disable, or impair the site. All content on this site is the property of {SITE.name} and may not be reproduced without written permission.
              </p>
              <p className="mt-3">
                Our website may use cookies and third-party analytics tools. See our{' '}
                <Link href="/privacy" className="text-teal-700 underline">Privacy Policy</Link>{' '}
                for details.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">9. Governing Law &amp; Disputes</h2>
              <p>
                These Terms of Service are governed by the laws of the Province of {SITE.province} and the applicable laws of {SITE.country}. Any dispute arising from these terms or our services will first be addressed through direct communication. If unresolved, disputes shall be submitted to the appropriate courts in {SITE.province}.
              </p>
              <p className="mt-3">
                To raise a concern, contact us at{' '}
                <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a>{' '}
                or <PhoneLink className="text-teal-700 underline">{SITE.phoneDisplay}</PhoneLink>. We aim to resolve all concerns promptly and fairly.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">10. Changes to These Terms</h2>
              <p>
                We may update these Terms of Service from time to time. The effective date above reflects the most recent update. Continued use of our services after changes constitutes your acceptance of the updated terms. We recommend reviewing this page periodically.
              </p>
            </section>

            {/* Contact */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">11. Contact</h2>
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-1">
                <p className="font-semibold text-ink-950">{SITE.name}</p>
                <p>Service area: {SITE.serviceAreaPrimary} and surrounding {SITE.province} communities</p>
                <p>Hours: {SITE.hours}</p>
                <p>Phone: <PhoneLink className="text-teal-700">{SITE.phoneDisplay}</PhoneLink></p>
                <p>Email: <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a></p>
              </div>
            </section>

          </div>

          {/* Bottom nav */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 text-sm text-ink-600">
            <Link href="/privacy" className="font-semibold text-teal-700 hover:text-teal-600">Privacy Policy</Link>
            <span aria-hidden="true">·</span>
            <Link href="/contact" className="text-ink-600 hover:text-ink-950">Contact Us</Link>
            <span aria-hidden="true">·</span>
            <PhoneLink className="text-ink-600 hover:text-ink-950">{SITE.phoneDisplay}</PhoneLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
