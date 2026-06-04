import type { Metadata } from 'next';
import Link from 'next/link';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';
import { PhoneLink } from '@/components/phone-link';
import { SITE } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${SITE.name}. Understand how we collect, use, and protect your personal information.`,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: 'Privacy Policy',
    description: `Privacy policy for ${SITE.name}.`,
    url: '/privacy'
  }
};

const EFFECTIVE_DATE = 'June 4, 2025';

export default function PrivacyPage() {
  return (
    <Section className="pt-12 pb-16">
      <Container>
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <div className="mb-10 border-b border-slate-200 pb-6">
            <p className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-2">Legal</p>
            <h1 className="font-display text-3xl font-bold text-ink-950 sm:text-4xl">Privacy Policy</h1>
            <p className="mt-3 text-sm text-ink-600">
              Effective date: <strong>{EFFECTIVE_DATE}</strong> &nbsp;·&nbsp; Business: <strong>{SITE.name}</strong> &nbsp;·&nbsp; Service area: <strong>{SITE.serviceAreaPrimary} and surrounding cities</strong>
            </p>
          </div>

          <div className="space-y-10 text-sm leading-relaxed text-ink-700">

            {/* 1 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">1. Who We Are</h2>
              <p>
                {SITE.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is a local locksmith and garage door service operating in{' '}
                {SITE.serviceAreaPrimary} and surrounding communities, including{' '}
                {SITE.serviceAreaCities.slice(1).join(', ')}. We operate this website at{' '}
                <a href={SITE.baseUrl} className="text-teal-700 underline hover:no-underline">{SITE.baseUrl}</a>.
              </p>
              <p className="mt-3">
                Phone: <PhoneLink className="text-teal-700 underline hover:no-underline">{SITE.phoneDisplay}</PhoneLink>
                <br />
                Email: <a href={`mailto:${SITE.email}`} className="text-teal-700 underline hover:no-underline">{SITE.email}</a>
              </p>
            </section>

            {/* 2 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">2. Information We Collect</h2>
              <p>We collect information you provide directly to us when you:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>Call our dispatch line or send us a text message</li>
                <li>Submit a service request or contact form on this website</li>
                <li>Communicate with us via email</li>
              </ul>
              <p className="mt-3">This information may include:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li><strong>Contact information:</strong> your name, phone number, and email address</li>
                <li><strong>Service location:</strong> the address or intersection where service is needed</li>
                <li><strong>Service details:</strong> descriptions of the issue, property type, and any special instructions</li>
                <li><strong>Device and usage data:</strong> IP address, browser type, pages visited, and referring URL — collected automatically via cookies and analytics tools (see Section 5)</li>
              </ul>
              <p className="mt-3">
                We do <strong>not</strong> collect payment card information directly — any payments processed use third-party secure payment methods.
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">3. How We Use Your Information</h2>
              <p>We use the information collected to:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>Dispatch a technician and provide the service you requested</li>
                <li>Confirm your appointment, provide ETAs, and follow up after service</li>
                <li>Respond to questions or concerns you raise</li>
                <li>Improve our website and service offerings using aggregated, anonymized analytics</li>
                <li>Comply with legal obligations under applicable Ontario and Canadian law</li>
                <li>Measure the effectiveness of our advertising (see Section 5)</li>
              </ul>
              <p className="mt-3">
                We will never use your personal information for any purpose unrelated to delivering or improving our locksmith and garage door services without your explicit consent.
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">4. How We Share Your Information</h2>
              <p>We do <strong>not sell</strong> your personal information. We may share it only in the following circumstances:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>
                  <strong>Technicians and dispatchers:</strong> We share your name, phone number, and service address with the technician assigned to your job so they can reach you and arrive at the correct location.
                </li>
                <li>
                  <strong>Email service provider (Resend):</strong> When you submit a contact form, your details are transmitted via Resend (resend.com) to deliver your request to our inbox. Resend processes this data in accordance with their own privacy policy.
                </li>
                <li>
                  <strong>Legal compliance:</strong> We may disclose information if required by law, court order, or government authority in {SITE.province}, {SITE.country}.
                </li>
              </ul>
            </section>

            {/* 5 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">5. Cookies, Analytics & Advertising</h2>
              <p>Our website uses the following third-party tools that may place cookies or collect usage data:</p>

              <div className="mt-4 space-y-4">
                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-ink-950">Google Ads (Google LLC)</p>
                  <p className="mt-1 text-xs text-ink-600">Tag ID: AW-18090932025</p>
                  <p className="mt-2">
                    We use Google Ads conversion tracking to measure when visitors to our website take actions like calling our phone number or submitting a service request after clicking one of our ads. Google may set a cookie on your device for this purpose. Google&apos;s data practices are governed by{' '}
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">Google&apos;s Privacy Policy</a>.
                  </p>
                </div>

                <div className="rounded-xl border border-slate-200 p-4">
                  <p className="font-semibold text-ink-950">Google Tag Manager (Google LLC)</p>
                  <p className="mt-2">
                    When analytics are enabled, we use Google Tag Manager to manage tracking scripts. Tag Manager itself does not collect personal data but may load other tags governed by their respective privacy policies.
                  </p>
                </div>
              </div>

              <p className="mt-4">
                <strong>Cookie opt-out:</strong> You can opt out of interest-based advertising by Google at{' '}
                <a href="https://adssettings.google.com" target="_blank" rel="noopener noreferrer" className="text-teal-700 underline">adssettings.google.com</a>. You can also manage cookies in your browser settings. Note that disabling cookies may affect site functionality.
              </p>
              <p className="mt-3">
                We do not use cookies for any purpose other than those described above. We do not use tracking cookies to build advertising profiles without your knowledge.
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">6. Data Retention</h2>
              <p>
                We retain your contact and service information for as long as necessary to deliver the service, follow up on open requests, and meet our legal obligations — typically no longer than <strong>24 months</strong> from your last interaction with us. Anonymized, aggregated analytics data may be retained indefinitely.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">7. Your Rights</h2>
              <p>As a resident of {SITE.province}, {SITE.country}, you have the right to:</p>
              <ul className="mt-3 space-y-2 pl-5 list-disc">
                <li>Request access to the personal information we hold about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information (subject to legal retention obligations)</li>
                <li>Withdraw consent to marketing communications at any time</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, contact us at{' '}
                <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a>{' '}
                or call <PhoneLink className="text-teal-700 underline">{SITE.phoneDisplay}</PhoneLink>. We will respond within 30 days.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">8. Data Security</h2>
              <p>
                We take reasonable administrative and technical precautions to protect your personal information against unauthorized access, loss, or misuse. Our website is served over HTTPS. Contact form submissions are transmitted via encrypted channels. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">9. Children&apos;s Privacy</h2>
              <p>
                Our services are intended for adults (18+). We do not knowingly collect personal information from individuals under the age of 18. If you believe a minor has submitted information to us, please contact us immediately at{' '}
                <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a> and we will delete it.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. When we do, we will update the effective date above. We encourage you to review this page periodically. Continued use of our website after changes constitutes acceptance of the updated policy.
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="mb-3 font-display text-xl font-bold text-ink-950">11. Contact Us</h2>
              <p>For any privacy-related questions or requests:</p>
              <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-5 space-y-1">
                <p className="font-semibold text-ink-950">{SITE.name}</p>
                <p>Service area: {SITE.serviceAreaPrimary} and surrounding {SITE.province} communities</p>
                <p>Phone: <PhoneLink className="text-teal-700">{SITE.phoneDisplay}</PhoneLink></p>
                <p>Email: <a href={`mailto:${SITE.email}`} className="text-teal-700 underline">{SITE.email}</a></p>
              </div>
            </section>

          </div>

          {/* Bottom nav */}
          <div className="mt-12 flex flex-wrap items-center gap-4 border-t border-slate-200 pt-6 text-sm text-ink-600">
            <Link href="/terms" className="font-semibold text-teal-700 hover:text-teal-600">Terms of Service</Link>
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
