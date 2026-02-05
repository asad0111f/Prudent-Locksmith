export type City = {
  name: string;
  slug: string;
  description: string;
  topServices: string[];
  faqs: { q: string; a: string }[];
};

export const cities: City[] = [
  {
    name: 'Hamilton',
    slug: 'hamilton',
    description: 'Fast locksmith and garage door service across Hamilton, ON with clear pricing and dependable dispatch.',
    topServices: [
      'garage-door-repair/garage-door-not-opening-or-stuck',
      'garage-door-repair/broken-garage-door-spring-repair',
      'residential-locksmith-services/home-and-apartment-lockouts',
      'automotive-locksmith-services/car-lockouts'
    ],
    faqs: [
      { q: 'How fast can you arrive in Hamilton?', a: 'We prioritize urgent calls and provide an ETA before dispatch.' },
      { q: 'Do you handle both locks and garage doors?', a: 'Yes, we support locksmith services and garage door repairs.' },
      { q: 'Do you offer same-day service?', a: 'Same-day availability is common for most service calls.' }
    ]
  },
  {
    name: 'Burlington',
    slug: 'burlington',
    description: 'Local locksmith and garage door support for Burlington homes and businesses with fast response.',
    topServices: [
      'residential-locksmith-services/lock-repair-and-replacement',
      'residential-locksmith-services/rekeying-services',
      'garage-door-opener-install-and-service/new-garage-door-opener-installation',
      'garage-door-repair/track-repair-or-realignment'
    ],
    faqs: [
      { q: 'Do you serve Burlington on weekends?', a: 'Yes, we provide service 7 days a week with emergency availability.' },
      { q: 'Can you rekey multiple locks in one visit?', a: 'Yes, we can rekey multiple doors in the same appointment.' },
      { q: 'Do you install new garage door openers?', a: 'Yes, we install and program new openers.' }
    ]
  },
  {
    name: 'Oakville',
    slug: 'oakville',
    description: 'Professional locksmith and garage door care for Oakville with clear quotes and fast dispatch.',
    topServices: [
      'garage-door-opener-install-and-service/wi-fi-app-enabled-opener-upgrades',
      'garage-door-opener-install-and-service/belt-drive-garage-door-openers',
      'residential-locksmith-services/lock-cylinder-replacement',
      'commercial-storefront-lock-services/storefront-lock-repair'
    ],
    faqs: [
      { q: 'Can you upgrade my opener to a smart model?', a: 'Yes, we offer Wi-Fi and app-enabled opener upgrades.' },
      { q: 'Do you work on commercial storefront locks?', a: 'Yes, we support storefront lock repairs and service.' },
      { q: 'Will I receive pricing before work starts?', a: 'Yes, we provide upfront pricing before repairs.' }
    ]
  },
  {
    name: 'Mississauga',
    slug: 'mississauga',
    description: 'Fast-response locksmith and garage door service in Mississauga with local technicians.',
    topServices: [
      'automotive-locksmith-services/mobile-vehicle-entry-service',
      'automotive-locksmith-services/car-lockouts',
      'garage-door-repair/garage-door-cable-repair-or-replacement',
      'commercial-storefront-lock-services/mortise-lock-service'
    ],
    faqs: [
      { q: 'Do you provide mobile car lockout service?', a: 'Yes, we dispatch mobile locksmiths for vehicle entry.' },
      { q: 'Can you repair garage door cables?', a: 'Yes, we replace frayed or damaged cables safely.' },
      { q: 'Do you offer commercial lock service?', a: 'Yes, we service storefront and mortise locks.' }
    ]
  },
  {
    name: 'Milton',
    slug: 'milton',
    description: 'Locksmith and garage door solutions for Milton residents with fast scheduling and clear pricing.',
    topServices: [
      'residential-locksmith-services/home-and-apartment-lockouts',
      'residential-locksmith-services/rekeying-services',
      'garage-door-repair/door-alignment-and-safety-inspection',
      'garage-door-opener-install-and-service/remote-and-wall-control-programming'
    ],
    faqs: [
      { q: 'Can you help with a home lockout in Milton?', a: 'Yes, we prioritize residential lockout calls.' },
      { q: 'Do you provide garage door safety inspections?', a: 'Yes, we inspect alignment, balance, and safety sensors.' },
      { q: 'Can you program new remotes?', a: 'Yes, we program remotes, keypads, and wall controls.' }
    ]
  },
  {
    name: 'Brampton',
    slug: 'brampton',
    description: 'Local locksmith and garage door support across Brampton with fast response times.',
    topServices: [
      'garage-door-repair/garage-door-not-opening-or-stuck',
      'garage-door-repair/broken-garage-door-spring-repair',
      'residential-locksmith-services/lock-repair-and-replacement',
      'commercial-storefront-lock-services/commercial-door-lock-troubleshooting'
    ],
    faqs: [
      { q: 'Do you offer emergency garage door repair?', a: 'Yes, urgent garage door issues receive priority dispatch.' },
      { q: 'Can you troubleshoot commercial door locks?', a: 'Yes, we diagnose and repair commercial lock issues.' },
      { q: 'Do you provide same-day service?', a: 'Same-day availability is common for most calls.' }
    ]
  },
  {
    name: 'Stoney Creek',
    slug: 'stoney-creek',
    description: 'Dependable locksmith and garage door service for Stoney Creek homes and businesses.',
    topServices: [
      'residential-locksmith-services/lock-cylinder-replacement',
      'residential-locksmith-services/rekeying-services',
      'garage-door-repair/track-repair-or-realignment',
      'automotive-locksmith-services/car-lockouts'
    ],
    faqs: [
      { q: 'Can you replace lock cylinders?', a: 'Yes, we replace worn cylinders and can rekey them.' },
      { q: 'Do you fix garage door tracks?', a: 'Yes, we align and repair track issues.' },
      { q: 'Is car lockout service available?', a: 'Yes, we provide fast vehicle entry service.' }
    ]
  },
  {
    name: 'Ancaster',
    slug: 'ancaster',
    description: 'Local locksmith and garage door repair in Ancaster with transparent pricing.',
    topServices: [
      'garage-door-opener-install-and-service/new-garage-door-opener-installation',
      'garage-door-opener-install-and-service/opener-belt-replacement',
      'residential-locksmith-services/home-and-apartment-lockouts',
      'commercial-storefront-lock-services/storefront-lock-repair'
    ],
    faqs: [
      { q: 'Do you install new garage door openers?', a: 'Yes, we install and program new systems.' },
      { q: 'Can you replace opener belts?', a: 'Yes, we replace worn belts and test performance.' },
      { q: 'Do you handle emergency lockouts?', a: 'Yes, lockout requests receive priority.' }
    ]
  },
  {
    name: 'Dundas',
    slug: 'dundas',
    description: 'Trusted locksmith and garage door services across Dundas with reliable dispatch.',
    topServices: [
      'residential-locksmith-services/rekeying-services',
      'residential-locksmith-services/lock-repair-and-replacement',
      'garage-door-repair/garage-door-cable-repair-or-replacement',
      'garage-door-opener-install-and-service/wi-fi-app-enabled-opener-upgrades'
    ],
    faqs: [
      { q: 'Can you rekey locks after a move?', a: 'Yes, we rekey locks to secure your property.' },
      { q: 'Do you provide smart opener upgrades?', a: 'Yes, we install Wi-Fi and app-enabled upgrades.' },
      { q: 'Do you repair garage door cables?', a: 'Yes, cable repair and replacement is available.' }
    ]
  },
  {
    name: 'Waterdown',
    slug: 'waterdown',
    description: 'Fast locksmith and garage door support in Waterdown with clear pricing.',
    topServices: [
      'garage-door-repair/door-alignment-and-safety-inspection',
      'garage-door-repair/track-repair-or-realignment',
      'residential-locksmith-services/lock-cylinder-replacement',
      'automotive-locksmith-services/mobile-vehicle-entry-service'
    ],
    faqs: [
      { q: 'Do you inspect garage door safety systems?', a: 'Yes, we test sensors and door balance during inspections.' },
      { q: 'Can you align a noisy garage door?', a: 'Yes, we realign tracks and adjust hardware.' },
      { q: 'Is mobile locksmith service available?', a: 'Yes, we dispatch mobile technicians for vehicle entry.' }
    ]
  }
];
