import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { SITE } from '@/lib/site';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { StickyCtaBar } from '@/components/sticky-cta';
import { RequestServiceProvider } from '@/components/request-service-context';
import { RequestServiceModal } from '@/components/request-service-modal';
import { DesktopAssistCard } from '@/components/desktop-assist-card';

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], display: 'swap' });

export const viewport: Viewport = {
  themeColor: '#0B1116',
  width: 'device-width',
  initialScale: 1
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.baseUrl),
  title: {
    default: SITE.name,
    template: `%s | ${SITE.name}`
  },
  description: SITE.description,
  alternates: {
    canonical: '/'
  },
  openGraph: {
    type: 'website',
    siteName: SITE.name,
    title: SITE.name,
    description: SITE.description,
    url: SITE.baseUrl
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE.name,
    description: SITE.description
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const analyticsEnabled = process.env.ENABLE_ANALYTICS === 'true';
  const gtmId = process.env.GTM_CONTAINER_ID || process.env.NEXT_PUBLIC_GTM_ID;
  const organizationJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE.name,
    url: SITE.baseUrl,
    telephone: SITE.phoneDisplay,
    areaServed: 'Hamilton, ON and surrounding areas'
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        {analyticsEnabled && gtmId ? (
          <>
            <Script id="gtm-init" strategy="afterInteractive">
              {`
                (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                })(window,document,'script','dataLayer','${gtmId}');
              `}
            </Script>
            {/* Google Ads conversion snippets can be inserted via GTM when ready. */}
          </>
        ) : null}
        <RequestServiceProvider>
          <Header />
          <main className="min-h-screen pb-24 sm:pb-0">{children}</main>
          <Footer />
          <StickyCtaBar />
          <DesktopAssistCard />
          <RequestServiceModal />
        </RequestServiceProvider>
        {analyticsEnabled && gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${gtmId}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            />
          </noscript>
        ) : null}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }} />
      </body>
    </html>
  );
}
