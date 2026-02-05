export type LandingPageType = 'service' | 'city' | 'emergency' | 'promo';

export type LandingPageEntry = {
  slug: string;
  pageType: LandingPageType;
  headline: string;
  subheadline: string;
  primaryService: string;
  city?: string;
  benefits: string[];
  faqs: { q: string; a: string }[];
  testimonial?: { name: string; quote: string };
  heroImage?: string;
  urgencyBadge?: string;
  enableIndexing?: boolean;
};

export const landingPages: LandingPageEntry[] = [
  {
    slug: 'garage-door-not-opening-hamilton',
    pageType: 'service',
    headline: 'Garage door not opening in Hamilton?',
    subheadline: 'Fast troubleshooting and repair with upfront pricing and same-day availability for stuck or unresponsive doors.',
    primaryService: 'garage-door-repair/garage-door-not-opening-or-stuck',
    city: 'Hamilton',
    benefits: [
      'Same-day service for most stuck door calls',
      'Safety inspection included with every repair',
      'Clear, upfront pricing before work begins',
      'Local technicians across Hamilton & nearby'
    ],
    faqs: [
      { q: 'Why won’t my garage door open?', a: 'Common causes include broken springs, snapped cables, sensor issues, or a failed opener.' },
      { q: 'Is it safe to force the door open?', a: 'No. Forcing it can cause injury or damage. Call for a professional inspection.' },
      { q: 'Do you offer same-day repair?', a: 'Yes, we prioritize urgent stuck-door requests when scheduling allows.' }
    ],
    testimonial: { name: 'R.M.', quote: 'They arrived fast, explained the issue clearly, and had the door working again quickly.' },
    urgencyBadge: 'Urgent dispatch available',
    enableIndexing: false
  },
  {
    slug: 'broken-garage-door-spring-repair-hamilton',
    pageType: 'service',
    headline: 'Broken garage door spring repair in Hamilton',
    subheadline: 'We replace broken springs safely and restore smooth, balanced door operation with clear pricing.',
    primaryService: 'garage-door-repair/broken-garage-door-spring-repair',
    city: 'Hamilton',
    benefits: [
      'Safe spring replacement by trained techs',
      'Door balance and safety check included',
      'Fast scheduling and accurate ETA',
      'Warranty-backed workmanship options'
    ],
    faqs: [
      { q: 'What does a broken spring sound like?', a: 'It often sounds like a loud bang or snap from the garage.' },
      { q: 'Can I use the opener with a broken spring?', a: 'No. It can damage the opener and is unsafe.' },
      { q: 'How long does replacement take?', a: 'Most spring replacements are completed the same visit.' }
    ],
    testimonial: { name: 'S.K.', quote: 'The tech explained everything and replaced the spring quickly.' },
    urgencyBadge: 'Emergency spring repair',
    enableIndexing: false
  },
  {
    slug: 'garage-door-cable-repair-hamilton',
    pageType: 'service',
    headline: 'Garage door cable repair in Hamilton',
    subheadline: 'Snapped or frayed cables can cause the door to jam or tilt. We repair or replace cables safely.',
    primaryService: 'garage-door-repair/garage-door-cable-repair-or-replacement',
    city: 'Hamilton',
    benefits: [
      'Safe cable replacement and adjustment',
      'Track inspection to prevent repeat issues',
      'Upfront pricing before work begins',
      'Local dispatch across Hamilton'
    ],
    faqs: [
      { q: 'What causes garage door cables to snap?', a: 'Wear, rust, or an unbalanced door can strain cables over time.' },
      { q: 'Is a snapped cable dangerous?', a: 'Yes. Avoid using the door and request service to prevent injury.' },
      { q: 'Do you realign the door after cable repair?', a: 'Yes, we check alignment and safe operation.' }
    ],
    testimonial: { name: 'J.T.', quote: 'Quick repair and the door runs smoothly again.' },
    enableIndexing: false
  },
  {
    slug: 'garage-door-opener-installation-hamilton',
    pageType: 'service',
    headline: 'Garage door opener installation in Hamilton',
    subheadline: 'Upgrade to a reliable opener with smooth, quiet operation and professional setup.',
    primaryService: 'garage-door-opener-install-and-service/new-garage-door-opener-installation',
    city: 'Hamilton',
    benefits: [
      'New opener selection guidance',
      'Professional installation and programming',
      'Safety sensor testing included',
      'Clean, tidy installation'
    ],
    faqs: [
      { q: 'Which opener type is best?', a: 'It depends on door weight, usage, and noise preferences. We help you choose.' },
      { q: 'Do you program remotes and wall controls?', a: 'Yes, full programming is included.' },
      { q: 'Can you replace an old opener?', a: 'Yes, we remove and replace existing units.' }
    ],
    testimonial: { name: 'A.P.', quote: 'The new opener is quiet and the install was fast.' },
    enableIndexing: false
  },
  {
    slug: 'wifi-garage-door-opener-upgrade-hamilton',
    pageType: 'service',
    headline: 'Wi‑Fi garage door opener upgrade in Hamilton',
    subheadline: 'Add smart control and alerts with a modern Wi‑Fi opener upgrade installed by a local pro.',
    primaryService: 'garage-door-opener-install-and-service/wi-fi-app-enabled-opener-upgrades',
    city: 'Hamilton',
    benefits: [
      'Smartphone control and alerts',
      'Professional setup and app pairing',
      'Secure, reliable connectivity',
      'Upfront pricing and clear options'
    ],
    faqs: [
      { q: 'Do I need to replace the entire opener?', a: 'Some systems support add‑ons, but many upgrades include a new opener.' },
      { q: 'Will the app work with my phone?', a: 'We confirm compatibility before installation.' },
      { q: 'Is Wi‑Fi setup included?', a: 'Yes, we connect and test the system on-site.' }
    ],
    testimonial: { name: 'L.D.', quote: 'App setup was easy and the tech made sure it worked.' },
    enableIndexing: false
  },
  {
    slug: 'home-lockout-service-hamilton',
    pageType: 'service',
    headline: 'Home lockout service in Hamilton',
    subheadline: 'Locked out of your house or apartment? We provide fast, damage-minimizing entry and clear pricing.',
    primaryService: 'residential-locksmith-services/home-and-apartment-lockouts',
    city: 'Hamilton',
    benefits: [
      'Fast dispatch for residential lockouts',
      'Damage-minimizing entry methods',
      'Upfront pricing before work begins',
      'Local technicians across Hamilton'
    ],
    faqs: [
      { q: 'How quickly can you arrive?', a: 'We confirm an ETA and prioritize urgent lockouts.' },
      { q: 'Will the lock be damaged?', a: 'We use non-destructive techniques whenever possible.' },
      { q: 'Can you replace the lock if needed?', a: 'Yes, we carry common replacement options.' }
    ],
    testimonial: { name: 'M.N.', quote: 'Fast response and no damage to the door.' },
    urgencyBadge: 'Locked out? Call now',
    enableIndexing: false
  },
  {
    slug: 'rekeying-after-moving-hamilton',
    pageType: 'service',
    headline: 'Rekeying after moving in Hamilton',
    subheadline: 'Improve security by rekeying your locks so old keys no longer work. Fast, affordable, and convenient.',
    primaryService: 'residential-locksmith-services/rekeying-services',
    city: 'Hamilton',
    benefits: [
      'Same-day rekeying available',
      'Keep existing hardware when possible',
      'Clear pricing before work starts',
      'Local service across Hamilton'
    ],
    faqs: [
      { q: 'Is rekeying cheaper than replacement?', a: 'Often yes, especially when hardware is in good shape.' },
      { q: 'How long does rekeying take?', a: 'Most homes are completed in a single visit.' },
      { q: 'Can I get one key for all doors?', a: 'Yes, we can key locks alike when compatible.' }
    ],
    testimonial: { name: 'K.S.', quote: 'Quick and affordable, and now all doors use one key.' },
    enableIndexing: false
  },
  {
    slug: 'car-lockout-service-hamilton',
    pageType: 'service',
    headline: 'Car lockout service in Hamilton',
    subheadline: 'Locked out of your car? We provide fast, damage-minimizing vehicle entry with clear pricing.',
    primaryService: 'automotive-locksmith-services/car-lockouts',
    city: 'Hamilton',
    benefits: [
      'Mobile service to your location',
      'Non-destructive entry methods',
      'Fast response and ETA confirmation',
      'Upfront pricing before work begins'
    ],
    faqs: [
      { q: 'Can you unlock newer vehicles?', a: 'Yes, we handle most makes and models.' },
      { q: 'Do you need proof of ownership?', a: 'We may ask for ID and ownership for security.' },
      { q: 'How fast can you arrive?', a: 'We prioritize urgent lockouts and confirm ETA.' }
    ],
    testimonial: { name: 'P.R.', quote: 'Arrived quickly and unlocked the car without damage.' },
    urgencyBadge: 'Locked out now?',
    enableIndexing: false
  },
  {
    slug: 'storefront-lock-repair-hamilton',
    pageType: 'service',
    headline: 'Storefront lock repair in Hamilton',
    subheadline: 'Get your doors secure and operational with fast storefront lock troubleshooting and repair.',
    primaryService: 'commercial-storefront-lock-services/storefront-lock-repair',
    city: 'Hamilton',
    benefits: [
      'Commercial door expertise',
      'Fast dispatch for business needs',
      'Upfront pricing and clear options',
      'Secure, code-compliant repairs'
    ],
    faqs: [
      { q: 'Can you fix stuck storefront doors?', a: 'Yes, we troubleshoot hardware and alignment issues.' },
      { q: 'Do you service commercial locks?', a: 'Yes, including mortise and storefront systems.' },
      { q: 'Can you rekey the storefront after repair?', a: 'Yes, rekeying is available on request.' }
    ],
    testimonial: { name: 'C.B.', quote: 'Our storefront door was fixed the same day.' },
    enableIndexing: false
  },
  {
    slug: 'mortise-lock-service-hamilton',
    pageType: 'service',
    headline: 'Mortise lock service in Hamilton',
    subheadline: 'Specialized mortise lock repair and maintenance for storefronts, offices, and older doors.',
    primaryService: 'commercial-storefront-lock-services/mortise-lock-service',
    city: 'Hamilton',
    benefits: [
      'Experienced mortise lock technicians',
      'Repair or replacement options',
      'Clear, upfront pricing',
      'Local commercial support'
    ],
    faqs: [
      { q: 'What is a mortise lock?', a: 'It is a lock body installed inside the door, common in commercial doors.' },
      { q: 'Can you replace just the cylinder?', a: 'Yes, cylinder replacement is available for many systems.' },
      { q: 'Do you service older doors?', a: 'Yes, we work with legacy mortise hardware.' }
    ],
    testimonial: { name: 'D.W.', quote: 'They repaired our mortise lock quickly and professionally.' },
    enableIndexing: false
  }
  ,
  {
    slug: 'garage-door-off-track-hamilton',
    pageType: 'service',
    headline: 'Garage door off-track repair in Hamilton',
    subheadline: 'We realign off-track doors safely and restore smooth operation with upfront pricing.',
    primaryService: 'garage-door-repair/track-repair-or-realignment',
    city: 'Hamilton',
    benefits: [
      'Safe track realignment and hardware check',
      'Fast dispatch for stuck or tilted doors',
      'Upfront pricing before work begins'
    ],
    faqs: [
      { q: 'Can I move an off-track door myself?', a: 'It is unsafe. Off-track doors can fall or bind suddenly.' },
      { q: 'What causes a door to go off-track?', a: 'Impact, worn rollers, or cable issues can force the door out of alignment.' },
      { q: 'Do you inspect cables and rollers?', a: 'Yes, we inspect components to prevent repeat issues.' }
    ],
    testimonial: { name: 'E.H.', quote: 'They realigned the door and explained how to avoid future issues.' },
    urgencyBadge: 'Urgent off-track service',
    enableIndexing: false
  },
  {
    slug: 'door-alignment-safety-inspection-hamilton',
    pageType: 'service',
    headline: 'Door alignment & safety inspection in Hamilton',
    subheadline: 'We inspect and align garage doors for smooth, safe operation and early issue detection.',
    primaryService: 'garage-door-repair/door-alignment-and-safety-inspection',
    city: 'Hamilton',
    benefits: [
      'Full alignment and balance check',
      'Safety sensor and auto-reverse test',
      'Preventive recommendations included'
    ],
    faqs: [
      { q: 'When should I schedule an inspection?', a: 'If the door is noisy, uneven, or hasn’t been checked in over a year.' },
      { q: 'Do you adjust springs and tracks?', a: 'Yes, adjustments are made when needed for safe operation.' },
      { q: 'Is this suitable for older doors?', a: 'Yes, inspections help extend the life of older systems.' }
    ],
    testimonial: { name: 'B.L.', quote: 'The inspection caught a worn roller before it became a bigger issue.' },
    enableIndexing: false
  },
  {
    slug: 'remote-wall-control-programming-hamilton',
    pageType: 'service',
    headline: 'Remote & wall control programming in Hamilton',
    subheadline: 'We program remotes and wall controls for reliable garage door access and security.',
    primaryService: 'garage-door-opener-install-and-service/remote-and-wall-control-programming',
    city: 'Hamilton',
    benefits: [
      'Fast programming and system pairing',
      'Security code resets when needed',
      'Compatibility checks included'
    ],
    faqs: [
      { q: 'Can you program multiple remotes?', a: 'Yes, we can pair multiple remotes to your opener.' },
      { q: 'Do you clear old remotes for security?', a: 'Yes, we can reset codes and remove old devices.' },
      { q: 'What if the wall control isn’t working?', a: 'We test wiring and replace controls if needed.' }
    ],
    testimonial: { name: 'V.P.', quote: 'All remotes were programmed quickly and work perfectly.' },
    enableIndexing: false
  },
  {
    slug: 'lock-repair-replacement-hamilton',
    pageType: 'service',
    headline: 'Lock repair & replacement in Hamilton',
    subheadline: 'Restore security with professional lock repair or replacement and clear pricing.',
    primaryService: 'residential-locksmith-services/lock-repair-and-replacement',
    city: 'Hamilton',
    benefits: [
      'Repair or replace options explained',
      'Quality hardware recommendations',
      'Upfront pricing before work begins'
    ],
    faqs: [
      { q: 'Should I repair or replace my lock?', a: 'We assess condition and recommend the most cost-effective option.' },
      { q: 'Do you carry common lock types?', a: 'Yes, we stock popular residential lock options.' },
      { q: 'Can you match existing keys?', a: 'We can rekey new hardware to match when compatible.' }
    ],
    testimonial: { name: 'R.S.', quote: 'Clear options and fast replacement.' },
    enableIndexing: false
  },
  {
    slug: 'lock-cylinder-replacement-hamilton',
    pageType: 'service',
    headline: 'Lock cylinder replacement in Hamilton',
    subheadline: 'Replace worn or compromised cylinders quickly while keeping your existing hardware.',
    primaryService: 'residential-locksmith-services/lock-cylinder-replacement',
    city: 'Hamilton',
    benefits: [
      'Cylinder replacement for better security',
      'Keys cut and tested on-site',
      'Fast local availability'
    ],
    faqs: [
      { q: 'Is cylinder replacement cheaper than full lock replacement?', a: 'Often yes, especially if the hardware is in good shape.' },
      { q: 'Can you key it to match my other locks?', a: 'Yes, when compatible we can key cylinders alike.' },
      { q: 'How long does the service take?', a: 'Most cylinder swaps are completed in one visit.' }
    ],
    testimonial: { name: 'N.T.', quote: 'Quick cylinder swap and the keys work great.' },
    enableIndexing: false
  },
  {
    slug: 'mobile-vehicle-entry-hamilton',
    pageType: 'service',
    headline: 'Mobile vehicle entry service in Hamilton',
    subheadline: 'Locked out of your vehicle? We provide fast, damage-minimizing entry at your location.',
    primaryService: 'automotive-locksmith-services/mobile-vehicle-entry-service',
    city: 'Hamilton',
    benefits: [
      'Mobile service to your location',
      'Non-destructive entry methods',
      'Fast response and ETA confirmation'
    ],
    faqs: [
      { q: 'Can you unlock newer vehicles?', a: 'Yes, we handle most makes and models.' },
      { q: 'Do you need proof of ownership?', a: 'We may ask for ID and ownership for security.' },
      { q: 'How fast can you arrive?', a: 'We prioritize urgent lockouts and confirm ETA.' }
    ],
    testimonial: { name: 'J.M.', quote: 'Fast, professional, and no damage to the vehicle.' },
    urgencyBadge: 'Locked out now?',
    enableIndexing: false
  }
];

const requiredFields = ['slug', 'headline', 'subheadline', 'primaryService'] as const;

export function validateLandingPages() {
  const seenSlugs = new Set<string>();
  landingPages.forEach((page) => {
    requiredFields.forEach((field) => {
      if (!page[field]) {
        throw new Error(`[Landing Pages] Missing required field "${field}" for slug "${page.slug}".`);
      }
    });

    if (seenSlugs.has(page.slug)) {
      throw new Error(`[Landing Pages] Duplicate slug "${page.slug}".`);
    }
    seenSlugs.add(page.slug);

    if (page.enableIndexing) {
      if (!page.headline || !page.subheadline) {
        throw new Error(`[Landing Pages] Indexed landing page "${page.slug}" needs unique title and description.`);
      }
      if (!page.faqs || page.faqs.length < 3) {
        throw new Error(`[Landing Pages] Indexed landing page "${page.slug}" must include at least 3 FAQs.`);
      }
    }
    if (page.benefits.length < 3) {
      throw new Error(`[Landing Pages] "${page.slug}" must include at least 3 benefit bullets.`);
    }
  });
}

export function getLandingPageBySlug(slug: string) {
  return landingPages.find((page) => page.slug === slug);
}

export function getLandingPages() {
  return landingPages;
}
