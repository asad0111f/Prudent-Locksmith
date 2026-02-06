import { IMAGES } from '@/lib/images';

export type ServiceFaq = { q: string; a: string };

export type ServiceItem = {
  id: string;
  name: string;
  shortLabel: string;
  slug: string;
  shortDescription: string;
  description: string;
  urgent: boolean;
  image: string;
  imageAlt: string;
  supportImage: string;
  supportImageAlt: string;
  related: string[];
  commonProblems: string[];
  process: string[];
  faqs: ServiceFaq[];
  lastUpdated: string;
  lastReviewed: string;
  category: {
    name: string;
    slug: string;
  };
};

export type ServiceCategory = {
  name: string;
  label: string;
  slug: string;
  services: ServiceItem[];
};

const defaultServiceMeta = {
  lastUpdated: '2026-02-01',
  lastReviewed: '2026-02-01'
};

const baseCategories = [
  {
    name: 'Garage Door Repair & Emergency',
    label: 'Garage Door Repair',
    slug: 'garage-door-repair',
    services: [
      {
        name: 'Garage door not opening or stuck',
        shortLabel: 'Garage door stuck',
        slug: 'garage-door-not-opening-or-stuck',
        shortDescription: 'Rapid diagnostics when your garage door is stuck closed or halfway.',
        description: 'We restore safe operation quickly when your garage door refuses to open or gets stuck mid-cycle.',
        urgent: true,
        image: IMAGES.services.garageDoorRepair1,
        imageAlt: 'Technician inspecting a garage door that is stuck closed.',
        supportImage: IMAGES.services.garageDoorRepair2,
        supportImageAlt: 'Close-up of garage door springs and hardware being inspected.',
        related: [
          'garage-door-repair/broken-garage-door-spring-repair',
          'garage-door-repair/track-repair-or-realignment',
          'garage-door-opener-install-and-service/opener-belt-replacement'
        ],
        commonProblems: [
          'Door stuck half open or fully closed',
          'Grinding or clicking noises from the track',
          'Door reverses after touching the ground',
          'Opener runs but the door does not move'
        ],
        process: [
          'Confirm symptoms and safety concerns over the phone',
          'Inspect the track, rollers, and opener connection',
          'Provide an upfront repair plan and quote',
          'Restore alignment, tension, and safe operation'
        ],
        faqs: [
          {
            q: 'Why is my garage door stuck closed?',
            a: 'Common causes include broken springs, misaligned tracks, or opener issues. We diagnose quickly on site.'
          },
          {
            q: 'Is it safe to manually lift the door?',
            a: 'Only if springs are intact. We recommend calling for guidance before attempting.'
          },
          {
            q: 'How fast can you respond?',
            a: 'Emergency requests receive priority scheduling with quick ETA confirmation.'
          }
        ]
      },
      {
        name: 'Broken garage door spring repair',
        shortLabel: 'Spring repair',
        slug: 'broken-garage-door-spring-repair',
        shortDescription: 'Safe spring replacement with correct tension and balance.',
        description: 'Replace snapped or worn springs to restore smooth, safe garage door operation.',
        urgent: true,
        image: IMAGES.services.garageDoorRepair2,
        imageAlt: 'Technician replacing a broken garage door spring safely.',
        supportImage: IMAGES.services.garageDoorRepair3,
        supportImageAlt: 'Garage door track and roller system during repair.',
        related: [
          'garage-door-repair/garage-door-not-opening-or-stuck',
          'garage-door-repair/door-alignment-and-safety-inspection',
          'garage-door-opener-install-and-service/opener-belt-replacement'
        ],
        commonProblems: [
          'Loud bang followed by a door that will not lift',
          'Door feels extremely heavy',
          'Visible gaps in the spring coil'
        ],
        process: [
          'Inspect spring type and door weight',
          'Secure the door and remove damaged springs',
          'Install matched replacements and set tension',
          'Test balance and complete safety checks'
        ],
        faqs: [
          {
            q: 'Can I use the opener with a broken spring?',
            a: 'No. Operating the door can damage the opener and create safety risks.'
          },
          {
            q: 'Do you replace both springs?',
            a: 'When paired springs are installed, we recommend replacing both for balanced performance.'
          },
          {
            q: 'How long do new springs last?',
            a: 'With regular use, quality springs typically last several years depending on cycles.'
          }
        ]
      },
      {
        name: 'Garage door cable repair or replacement',
        shortLabel: 'Cable repair',
        slug: 'garage-door-cable-repair-or-replacement',
        shortDescription: 'Repair frayed cables to prevent door imbalance and failure.',
        description: 'Restore safe lifting power with cable repair or replacement when wear is visible.',
        urgent: false,
        image: IMAGES.services.garageDoorRepair3,
        imageAlt: 'Close-up of a garage door cable being replaced.',
        supportImage: IMAGES.services.garageDoorRepair1,
        supportImageAlt: 'Technician working on a garage door mechanism.',
        related: [
          'garage-door-repair/track-repair-or-realignment',
          'garage-door-repair/door-alignment-and-safety-inspection',
          'garage-door-opener-install-and-service/opener-belt-replacement'
        ],
        commonProblems: ['Frayed or loose cables', 'Door hanging unevenly', 'Cable off the drum'],
        process: [
          'Inspect cable wear and drum alignment',
          'Secure door position',
          'Replace cables and adjust tension',
          'Test smooth travel and safety systems'
        ],
        faqs: [
          { q: 'What causes cables to wear out?', a: 'Age, rust, misalignment, and high usage can cause cables to fray.' },
          { q: 'Do cables need to be replaced in pairs?', a: 'Yes, we replace both to keep tension balanced.' },
          { q: 'Is cable damage dangerous?', a: 'Yes. A failed cable can cause the door to drop suddenly.' }
        ]
      },
      {
        name: 'Track repair or realignment',
        shortLabel: 'Track alignment',
        slug: 'track-repair-or-realignment',
        shortDescription: 'Get doors running straight with precision track alignment.',
        description: 'Repair bent tracks and realign hardware so your door runs smoothly and quietly.',
        urgent: false,
        image: IMAGES.services.garageDoorRepair3,
        imageAlt: 'Technician aligning a garage door track for smooth movement.',
        supportImage: IMAGES.services.garageDoorRepair1,
        supportImageAlt: 'Technician adjusting garage door hardware.',
        related: [
          'garage-door-repair/garage-door-not-opening-or-stuck',
          'garage-door-repair/garage-door-cable-repair-or-replacement',
          'garage-door-repair/door-alignment-and-safety-inspection'
        ],
        commonProblems: ['Door jerks or rubs against the track', 'Visible dents or bends', 'Rollers popping out of the track'],
        process: [
          'Inspect tracks, rollers, and brackets',
          'Correct bends or replace damaged sections',
          'Align tracks to factory spec',
          'Test door balance and travel'
        ],
        faqs: [
          { q: 'Can you repair a bent track?', a: 'Yes. Minor bends are corrected, while severe damage requires replacement.' },
          { q: 'Do you lubricate the tracks?', a: 'We lubricate recommended components and advise on maintenance.' },
          { q: 'Will realignment stop the noise?', a: 'Proper alignment often reduces noise and prevents further wear.' }
        ]
      },
      {
        name: 'Door alignment and safety inspection',
        shortLabel: 'Safety inspection',
        slug: 'door-alignment-and-safety-inspection',
        shortDescription: 'Full safety check with balance and alignment adjustments.',
        description: 'Ensure your garage door is balanced, aligned, and safe for daily use.',
        urgent: false,
        image: IMAGES.services.garageDoorRepair2,
        imageAlt: 'Technician performing a garage door balance and safety inspection.',
        supportImage: IMAGES.services.garageDoorRepair3,
        supportImageAlt: 'Garage door track and safety rollers during inspection.',
        related: [
          'garage-door-repair/track-repair-or-realignment',
          'garage-door-repair/garage-door-cable-repair-or-replacement',
          'garage-door-opener-install-and-service/remote-and-wall-control-programming'
        ],
        commonProblems: ['Door shakes or vibrates while moving', 'Uneven gaps around the door', 'Safety sensors not responding'],
        process: [
          'Inspect door balance and hardware',
          'Adjust track alignment and rollers',
          'Test safety sensors and auto-reverse',
          'Provide a maintenance summary'
        ],
        faqs: [
          { q: 'How often should I have an inspection?', a: 'Annual inspections are recommended for safety and longevity.' },
          { q: 'Do you check safety sensors?', a: 'Yes, we test and align sensors during inspections.' },
          { q: 'Will you report needed repairs?', a: 'We document issues and provide options before any work begins.' }
        ]
      }
    ]
  },
  {
    name: 'Garage Door Opener Install & Service',
    label: 'Garage Door Openers',
    slug: 'garage-door-opener-install-and-service',
    services: [
      {
        name: 'New garage door opener installation',
        shortLabel: 'Opener install',
        slug: 'new-garage-door-opener-installation',
        shortDescription: 'Professional opener installation with setup and testing.',
        description: 'Install a new garage door opener with safe mounting, programming, and full safety checks.',
        urgent: false,
        image: IMAGES.services.garageOpener1,
        imageAlt: 'Garage door opener being installed on the ceiling.',
        supportImage: IMAGES.services.garageOpener2,
        supportImageAlt: 'Hand holding a garage door remote for programming.',
        related: [
          'garage-door-opener-install-and-service/wi-fi-app-enabled-opener-upgrades',
          'garage-door-opener-install-and-service/belt-drive-garage-door-openers',
          'garage-door-repair/door-alignment-and-safety-inspection'
        ],
        commonProblems: ['Old opener fails intermittently', 'Need quieter or smarter operation', 'Outdated safety features'],
        process: [
          'Recommend the right opener for your door',
          'Install and secure the system',
          'Program remotes and safety sensors',
          'Test performance and explain usage'
        ],
        faqs: [
          { q: 'Which opener type is best?', a: 'We match the opener to door weight, usage, and desired features.' },
          { q: 'Do you remove the old opener?', a: 'Yes, we remove and dispose of old hardware safely.' },
          { q: 'Is programming included?', a: 'Yes, remote and keypad programming are included.' }
        ]
      },
      {
        name: 'Wi-Fi / app-enabled opener upgrades',
        shortLabel: 'Smart opener upgrade',
        slug: 'wi-fi-app-enabled-opener-upgrades',
        shortDescription: 'Upgrade to smart control with secure mobile access.',
        description: 'Add smart features for remote access, alerts, and controlled entry to your garage.',
        urgent: false,
        image: IMAGES.services.garageOpener2,
        imageAlt: 'Smartphone controlling a garage door opener app.',
        supportImage: IMAGES.services.garageOpener1,
        supportImageAlt: 'Garage door opener hardware mounted above a door.',
        related: [
          'garage-door-opener-install-and-service/new-garage-door-opener-installation',
          'garage-door-opener-install-and-service/remote-and-wall-control-programming',
          'garage-door-repair/door-alignment-and-safety-inspection'
        ],
        commonProblems: ['Need remote control access', 'Opener lacks modern security features', 'Multiple users need access'],
        process: [
          'Review existing opener compatibility',
          'Install smart module or new opener',
          'Configure app access and alerts',
          'Test remote opening and security settings'
        ],
        faqs: [
          { q: 'Can you upgrade my existing opener?', a: 'Often yes. We confirm compatibility and recommend the best option.' },
          { q: 'Is my data secure?', a: 'We configure secure access and provide best practices for account security.' },
          { q: 'Do you help set up the app?', a: 'Yes, we walk you through setup and permissions.' }
        ]
      },
      {
        name: 'Belt-drive garage door openers',
        shortLabel: 'Belt-drive opener',
        slug: 'belt-drive-garage-door-openers',
        shortDescription: 'Quiet, smooth belt-drive opener installation and service.',
        description: 'Install or service belt-drive openers for quieter, smoother garage access.',
        urgent: false,
        image: IMAGES.services.garageOpener1,
        imageAlt: 'Belt-drive garage door opener system mounted above a door.',
        supportImage: IMAGES.services.garageOpener2,
        supportImageAlt: 'Garage door remote and control panel close-up.',
        related: [
          'garage-door-opener-install-and-service/new-garage-door-opener-installation',
          'garage-door-opener-install-and-service/opener-belt-replacement',
          'garage-door-repair/garage-door-not-opening-or-stuck'
        ],
        commonProblems: ['Noisy chain-drive systems', 'Need smoother start and stop', 'Older opener lacks soft start'],
        process: [
          'Assess door weight and usage',
          'Install belt-drive opener',
          'Program remotes and safety sensors',
          'Confirm smooth, quiet operation'
        ],
        faqs: [
          { q: 'Are belt-drive openers quieter?', a: 'Yes, they are known for low-noise operation and smooth travel.' },
          { q: 'Do belt-drive openers require maintenance?', a: 'Minimal maintenance is required, and we provide care tips.' },
          { q: 'Can you service my existing belt-drive system?', a: 'Yes, we repair and adjust existing belt-drive openers.' }
        ]
      },
      {
        name: 'Opener belt replacement',
        shortLabel: 'Belt replacement',
        slug: 'opener-belt-replacement',
        shortDescription: 'Replace worn belts to restore smooth opener performance.',
        description: 'Fix slipping or broken belts to keep your opener running quietly and reliably.',
        urgent: false,
        image: IMAGES.services.garageOpener1,
        imageAlt: 'Technician replacing a garage door opener belt.',
        supportImage: IMAGES.services.garageOpener2,
        supportImageAlt: 'Remote control used for testing opener function.',
        related: [
          'garage-door-opener-install-and-service/belt-drive-garage-door-openers',
          'garage-door-opener-install-and-service/remote-and-wall-control-programming',
          'garage-door-repair/garage-door-not-opening-or-stuck'
        ],
        commonProblems: ['Opener motor runs but door does not move', 'Belt is frayed or broken', 'Sudden jerking motion'],
        process: [
          'Inspect belt wear and pulley alignment',
          'Replace belt with manufacturer spec part',
          'Adjust tension and track alignment',
          'Test full open and close cycles'
        ],
        faqs: [
          { q: 'How do I know the belt is failing?', a: 'Look for fraying, slipping, or sudden jerks during operation.' },
          { q: 'Can a worn belt damage the opener?', a: 'Yes, it can cause extra strain on the motor and gears.' },
          { q: 'Do you carry replacement belts?', a: 'Yes, we stock common belts and can source specific models.' }
        ]
      },
      {
        name: 'Remote and wall control programming',
        shortLabel: 'Remote programming',
        slug: 'remote-and-wall-control-programming',
        shortDescription: 'Program remotes, keypads, and wall controls quickly.',
        description: 'Set up new remotes and wall controls for secure, reliable garage access.',
        urgent: false,
        image: IMAGES.services.garageOpener2,
        imageAlt: 'Hand holding a garage door remote being programmed.',
        supportImage: IMAGES.services.garageOpener1,
        supportImageAlt: 'Garage door opener motor housing mounted on the ceiling.',
        related: [
          'garage-door-opener-install-and-service/wi-fi-app-enabled-opener-upgrades',
          'garage-door-opener-install-and-service/new-garage-door-opener-installation',
          'garage-door-repair/door-alignment-and-safety-inspection'
        ],
        commonProblems: ['Remote stopped responding', 'Keypad code needs reset', 'New wall control not synced'],
        process: [
          'Confirm opener model and compatibility',
          'Program remotes and keypads',
          'Test range and secure access settings',
          'Provide usage instructions'
        ],
        faqs: [
          { q: 'Can you program multiple remotes?', a: 'Yes, we can program multiple remotes and keypads at once.' },
          { q: 'Do you reset lost remotes?', a: 'Yes, we can clear old codes and set new secure access.' },
          { q: 'Is programming included with installation?', a: 'Yes, we include full programming with opener installs.' }
        ]
      }
    ]
  },
  {
    name: 'Residential Locksmith Services',
    label: 'Residential Locksmith',
    slug: 'residential-locksmith-services',
    services: [
      {
        name: 'Home and apartment lockouts',
        shortLabel: 'Lockouts',
        slug: 'home-and-apartment-lockouts',
        shortDescription: 'Quick, damage-minimized entry for residential lockouts.',
        description: 'Regain access quickly with safe entry methods and respectful service.',
        urgent: true,
        image: IMAGES.services.residentialLock2,
        imageAlt: 'Locksmith assisting a homeowner with a front door lockout.',
        supportImage: IMAGES.services.residentialLock1,
        supportImageAlt: 'Close-up of a residential deadbolt and door hardware.',
        related: [
          'residential-locksmith-services/lock-repair-and-replacement',
          'residential-locksmith-services/rekeying-services',
          'automotive-locksmith-services/car-lockouts'
        ],
        commonProblems: ['Keys locked inside the home', 'Broken key in the lock', 'Door will not open even with a key'],
        process: [
          'Confirm location and urgency',
          'Arrive and verify identification',
          'Use non-destructive entry when possible',
          'Restore access and recommend security options'
        ],
        faqs: [
          { q: 'How fast can you arrive?', a: 'We prioritize lockouts and provide an ETA before dispatch.' },
          { q: 'Will you damage the door?', a: 'We use non-destructive methods whenever possible.' },
          { q: 'Do you need proof of residence?', a: 'Yes, we verify authorization to protect your security.' }
        ]
      },
      {
        name: 'Lock repair and replacement',
        shortLabel: 'Lock repair',
        slug: 'lock-repair-and-replacement',
        shortDescription: 'Fix worn locks or replace them with stronger hardware.',
        description: 'Repair or replace residential locks to improve security and smooth operation.',
        urgent: false,
        image: IMAGES.services.residentialLock1,
        imageAlt: 'Locksmith installing a new deadbolt on a front door.',
        supportImage: IMAGES.services.residentialLock3,
        supportImageAlt: 'Keys and lock cylinder prepared for installation.',
        related: [
          'residential-locksmith-services/lock-cylinder-replacement',
          'residential-locksmith-services/rekeying-services',
          'commercial-storefront-lock-services/commercial-door-lock-troubleshooting'
        ],
        commonProblems: ['Key sticks or turns poorly', 'Latch not aligning with strike plate', 'Worn or broken deadbolt'],
        process: [
          'Inspect existing lock hardware',
          'Recommend repair or replacement options',
          'Install or repair with secure alignment',
          'Test operation and provide care tips'
        ],
        faqs: [
          { q: 'Should I repair or replace my lock?', a: 'We assess wear and recommend the most cost-effective option.' },
          { q: 'Do you install smart locks?', a: 'We can install compatible smart locks on request.' },
          { q: 'Will new locks match my keys?', a: 'We can rekey new locks to match existing keys when possible.' }
        ]
      },
      {
        name: 'Lock cylinder replacement',
        shortLabel: 'Cylinder replacement',
        slug: 'lock-cylinder-replacement',
        shortDescription: 'Replace worn cylinders for smoother, safer access.',
        description: 'Install new lock cylinders to improve reliability and security without replacing the full lock.',
        urgent: false,
        image: IMAGES.services.residentialLock3,
        imageAlt: 'Close-up of a lock cylinder being replaced.',
        supportImage: IMAGES.services.residentialLock1,
        supportImageAlt: 'Residential door lock hardware ready for service.',
        related: [
          'residential-locksmith-services/lock-repair-and-replacement',
          'residential-locksmith-services/rekeying-services',
          'commercial-storefront-lock-services/mortise-cylinder-replacement'
        ],
        commonProblems: ['Key spins without unlocking', 'Cylinder is worn or damaged', 'Keys frequently jam'],
        process: [
          'Inspect cylinder type and hardware',
          'Remove old cylinder safely',
          'Install new cylinder and align',
          'Test smooth operation and key fit'
        ],
        faqs: [
          { q: 'Can I keep my existing keys?', a: 'We can rekey new cylinders to match existing keys if desired.' },
          { q: 'How long does replacement take?', a: 'Most cylinder replacements are completed within a single visit.' },
          { q: 'Do you carry multiple cylinder brands?', a: 'Yes, we stock quality options and can source specific brands.' }
        ]
      },
      {
        name: 'Rekeying services',
        shortLabel: 'Rekeying',
        slug: 'rekeying-services',
        shortDescription: 'Change key access without replacing the full lock.',
        description: 'Rekey your locks to control access after a move, staffing change, or lost keys.',
        urgent: false,
        image: IMAGES.services.residentialLock3,
        imageAlt: 'Locksmith rekeying a residential lock cylinder.',
        supportImage: IMAGES.services.residentialLock2,
        supportImageAlt: 'Locksmith preparing tools at a residential door.',
        related: [
          'residential-locksmith-services/lock-repair-and-replacement',
          'residential-locksmith-services/lock-cylinder-replacement',
          'commercial-storefront-lock-services/mortise-cylinder-replacement'
        ],
        commonProblems: ['Lost or unreturned keys', 'Need to restrict access after move-in', 'Multiple locks with different keys'],
        process: [
          'Review locks and access goals',
          'Rekey cylinders on site',
          'Test all keys and locks',
          'Provide a clean set of keys'
        ],
        faqs: [
          { q: 'Is rekeying cheaper than replacement?', a: 'Often yes, because you keep the existing hardware.' },
          { q: 'How many keys will I receive?', a: 'We provide a standard set and can create additional copies.' },
          { q: 'Can you match all locks to one key?', a: 'Yes, we can create a single-key system where compatible.' }
        ]
      }
    ]
  },
  {
    name: 'Automotive Locksmith Services',
    label: 'Automotive Locksmith',
    slug: 'automotive-locksmith-services',
    services: [
      {
        name: 'Car lockouts',
        shortLabel: 'Car lockouts',
        slug: 'car-lockouts',
        shortDescription: 'Fast vehicle entry with careful, non-damaging methods.',
        description: 'Locked out of your car? We provide quick, safe entry wherever you are.',
        urgent: true,
        image: IMAGES.services.autoLockout1,
        imageAlt: 'Locksmith opening a car door for a lockout service.',
        supportImage: IMAGES.services.autoLockout2,
        supportImageAlt: 'Car keys and key fob ready for vehicle entry service.',
        related: [
          'automotive-locksmith-services/mobile-vehicle-entry-service',
          'residential-locksmith-services/home-and-apartment-lockouts',
          'commercial-storefront-lock-services/storefront-lock-repair'
        ],
        commonProblems: ['Keys locked inside the vehicle', 'Broken key or key fob failure', 'Door will not unlock'],
        process: [
          'Confirm vehicle location and model',
          'Verify ownership and authorization',
          'Use safe entry tools to unlock',
          'Test locks and provide next steps'
        ],
        faqs: [
          { q: 'Will the door be damaged?', a: 'We use non-destructive tools designed for modern vehicles.' },
          { q: 'Do you service all vehicle brands?', a: 'Yes, we handle most makes and models.' },
          { q: 'How fast can you arrive?', a: 'We provide a rapid ETA once your location is confirmed.' }
        ]
      },
      {
        name: 'Mobile vehicle entry service',
        shortLabel: 'Vehicle entry',
        slug: 'mobile-vehicle-entry-service',
        shortDescription: 'On-location vehicle access with fast dispatch.',
        description: 'Mobile service brings professional vehicle entry to your location quickly.',
        urgent: false,
        image: IMAGES.services.autoLockout2,
        imageAlt: 'Mobile locksmith van parked for vehicle entry service.',
        supportImage: IMAGES.services.autoLockout1,
        supportImageAlt: 'Technician assisting with a vehicle door lock.',
        related: [
          'automotive-locksmith-services/car-lockouts',
          'residential-locksmith-services/home-and-apartment-lockouts',
          'commercial-storefront-lock-services/commercial-door-lock-troubleshooting'
        ],
        commonProblems: ['Locked out at work or home', 'Key fob unresponsive', 'Need fast access on the go'],
        process: ['Confirm location details', 'Dispatch a mobile technician', 'Gain entry using safe tools', 'Review lock and key concerns'],
        faqs: [
          { q: 'Do you come to any location?', a: 'Yes, we dispatch to homes, parking lots, and roadside locations.' },
          { q: 'Is mobile service more expensive?', a: 'We provide upfront pricing before dispatch.' },
          { q: 'Can you help with key fobs?', a: 'We can assess key fob issues and recommend next steps.' }
        ]
      }
    ]
  },
  {
    name: 'Commercial / Storefront Lock Services',
    label: 'Commercial Locks',
    slug: 'commercial-storefront-lock-services',
    services: [
      {
        name: 'Storefront lock repair',
        shortLabel: 'Storefront repair',
        slug: 'storefront-lock-repair',
        shortDescription: 'Keep storefronts secure and accessible for customers.',
        description: 'Repair storefront locks quickly to protect business security and access.',
        urgent: false,
        image: IMAGES.services.commercialLock1,
        imageAlt: 'Storefront door lock being repaired by a technician.',
        supportImage: IMAGES.services.commercialLock2,
        supportImageAlt: 'Close-up of a commercial door lock mechanism.',
        related: [
          'commercial-storefront-lock-services/mortise-lock-service',
          'commercial-storefront-lock-services/commercial-door-lock-troubleshooting',
          'residential-locksmith-services/lock-repair-and-replacement'
        ],
        commonProblems: ['Door will not lock properly', 'Loose or failing lock hardware', 'Damaged lock after heavy use'],
        process: [
          'Inspect storefront door and hardware',
          'Diagnose wear and access issues',
          'Repair or replace failing parts',
          'Confirm secure locking and alignment'
        ],
        faqs: [
          { q: 'Can you service storefronts after hours?', a: 'Yes, we offer flexible scheduling for businesses.' },
          { q: 'Do you carry commercial-grade locks?', a: 'We stock and source high-quality commercial hardware.' },
          { q: 'Can you secure damaged doors?', a: 'Yes, we provide immediate stabilization and repair.' }
        ]
      },
      {
        name: 'Mortise lock service',
        shortLabel: 'Mortise service',
        slug: 'mortise-lock-service',
        shortDescription: 'Service and repair for commercial mortise locks.',
        description: 'Maintain or repair mortise locks for reliable commercial security.',
        urgent: false,
        image: IMAGES.services.commercialLock2,
        imageAlt: 'Commercial mortise lock being serviced on a door.',
        supportImage: IMAGES.services.commercialLock1,
        supportImageAlt: 'Technician servicing a storefront door lock.',
        related: [
          'commercial-storefront-lock-services/mortise-cylinder-replacement',
          'commercial-storefront-lock-services/commercial-door-lock-troubleshooting',
          'residential-locksmith-services/lock-repair-and-replacement'
        ],
        commonProblems: ['Stiff or sticky mortise lock action', 'Key does not turn smoothly', 'Lock latch not aligning'],
        process: [
          'Inspect lock body and alignment',
          'Repair or lubricate internal components',
          'Replace worn parts if needed',
          'Test locking and latching function'
        ],
        faqs: [
          { q: 'Do mortise locks need special service?', a: 'Yes, they require proper alignment and component care.' },
          { q: 'Can you repair instead of replace?', a: 'Often yes, depending on wear and part availability.' },
          { q: 'Do you service commercial buildings?', a: 'Yes, we work with storefronts and property managers.' }
        ]
      },
      {
        name: 'Mortise cylinder replacement',
        shortLabel: 'Mortise cylinder',
        slug: 'mortise-cylinder-replacement',
        shortDescription: 'Replace worn mortise cylinders to improve security.',
        description: 'Install new mortise cylinders to restore secure access control.',
        urgent: false,
        image: IMAGES.services.commercialLock2,
        imageAlt: 'Close-up of a mortise cylinder replacement in progress.',
        supportImage: IMAGES.services.commercialLock1,
        supportImageAlt: 'Storefront lock hardware being inspected.',
        related: [
          'commercial-storefront-lock-services/mortise-lock-service',
          'commercial-storefront-lock-services/commercial-door-lock-troubleshooting',
          'residential-locksmith-services/lock-cylinder-replacement'
        ],
        commonProblems: ['Cylinder spins or sticks', 'Key breaks inside cylinder', 'Need access control reset'],
        process: [
          'Identify cylinder type and size',
          'Remove worn cylinder safely',
          'Install and align the new cylinder',
          'Test keys and locking function'
        ],
        faqs: [
          { q: 'Can you rekey the new cylinder?', a: 'Yes, we can key it to match existing access systems.' },
          { q: 'How long does replacement take?', a: 'Most replacements are completed in one visit.' },
          { q: 'Do you stock commercial cylinders?', a: 'Yes, we carry common sizes and can source specialty options.' }
        ]
      },
      {
        name: 'Commercial door lock troubleshooting',
        shortLabel: 'Lock troubleshooting',
        slug: 'commercial-door-lock-troubleshooting',
        shortDescription: 'Diagnosis and repair for commercial door lock issues.',
        description: 'Resolve complex lock problems with on-site troubleshooting and repairs.',
        urgent: false,
        image: IMAGES.services.commercialLock1,
        imageAlt: 'Technician troubleshooting a commercial door lock.',
        supportImage: IMAGES.services.commercialLock2,
        supportImageAlt: 'Commercial door lock components on a work surface.',
        related: [
          'commercial-storefront-lock-services/storefront-lock-repair',
          'commercial-storefront-lock-services/mortise-lock-service',
          'residential-locksmith-services/lock-repair-and-replacement'
        ],
        commonProblems: ['Door will not lock or unlock', 'Latch alignment issues', 'Access control failures'],
        process: [
          'Inspect door hardware and alignment',
          'Diagnose lock mechanism issues',
          'Repair or replace components',
          'Verify access and security operation'
        ],
        faqs: [
          { q: 'Do you provide same-day troubleshooting?', a: 'Yes, we prioritize business security issues.' },
          { q: 'Can you support access control systems?', a: 'We troubleshoot locks and coordinate access control support.' },
          { q: 'Will you provide a written report?', a: 'We share clear recommendations and next steps.' }
        ]
      }
    ]
  }
];

export const servicesConfig: ServiceCategory[] = baseCategories.map((category) => ({
  ...category,
  services: category.services.map((service) => ({
    ...service,
    lastUpdated: (service as { lastUpdated?: string }).lastUpdated || defaultServiceMeta.lastUpdated,
    lastReviewed: (service as { lastReviewed?: string }).lastReviewed || defaultServiceMeta.lastReviewed,
    id: `${category.slug}/${service.slug}`,
    category: { name: category.name, slug: category.slug }
  }))
}));

export function getServicePaths() {
  return servicesConfig.flatMap((category) =>
    category.services.map((service) => ({ category: category.slug, service: service.slug }))
  );
}

export function getServiceByParams(categorySlug: string, serviceSlug: string) {
  return servicesConfig
    .find((category) => category.slug === categorySlug)
    ?.services.find((service) => service.slug === serviceSlug);
}

export function getServiceById(id: string) {
  return servicesConfig.flatMap((category) => category.services).find((service) => service.id === id);
}

export function getServiceUrl(categorySlug: string, serviceSlug: string) {
  return `/services/${categorySlug}/${serviceSlug}`;
}

export function getEmergencyServices() {
  return servicesConfig.flatMap((category) => category.services).filter((service) => service.urgent);
}

function getSimilarityScore(a: string[], b: string[]) {
  const setA = new Set(a.map((item) => item.toLowerCase().trim()));
  const setB = new Set(b.map((item) => item.toLowerCase().trim()));
  const intersection = [...setA].filter((item) => setB.has(item)).length;
  const union = new Set([...setA, ...setB]).size;
  if (union === 0) return 0;
  return intersection / union;
}

export function validateServiceSpecificity() {
  const services = servicesConfig.flatMap((category) => category.services);
  const threshold = 0.7;

  for (let i = 0; i < services.length; i += 1) {
    for (let j = i + 1; j < services.length; j += 1) {
      const a = services[i];
      const b = services[j];
      const aHeadings = [...a.commonProblems, ...a.process, ...a.faqs.map((faq) => faq.q)];
      const bHeadings = [...b.commonProblems, ...b.process, ...b.faqs.map((faq) => faq.q)];
      if (aHeadings.length < 6 || bHeadings.length < 6) continue;
      const similarity = getSimilarityScore(aHeadings, bHeadings);
      if (similarity > threshold) {
        throw new Error(
          `[Service Specificity] "${a.name}" and "${b.name}" share too much identical section content.`
        );
      }
    }
  }
}

