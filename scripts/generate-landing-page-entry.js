const fs = require('fs');
const path = require('path');

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

const args = process.argv.slice(2);
if (args.length < 3) {
  console.log('Usage: node scripts/generate-landing-page-entry.js "<serviceSlug>" "<city>" "<headline>"');
  process.exit(1);
}

const [serviceSlug, city, headline] = args;
const slug = slugify(`${headline} ${city}`);
const entry = `
  {
    slug: '${slug}',
    pageType: 'service',
    headline: '${headline}',
    subheadline: 'Fast response with clear pricing and local technicians.',
    primaryService: '${serviceSlug}',
    city: '${city}',
    benefits: [
      'Fast response and ETA confirmation',
      'Upfront pricing before work begins',
      'Local technicians in your area'
    ],
    faqs: [
      { q: 'How quickly can you arrive?', a: 'We prioritize urgent requests and confirm an ETA.' },
      { q: 'Do you offer upfront pricing?', a: 'Yes, pricing is confirmed before work begins.' },
      { q: 'What areas do you serve?', a: 'Hamilton, ON and surrounding areas.' }
    ],
    testimonial: { name: 'A.C.', quote: 'Fast response and clear communication.' },
    urgencyBadge: 'Fast dispatch available',
    enableIndexing: false
  },`;

const target = path.join(process.cwd(), 'content', 'landing-pages.ts');
if (!fs.existsSync(target)) {
  console.error('landing-pages.ts not found.');
  process.exit(1);
}

const content = fs.readFileSync(target, 'utf8');
const insertAt = content.lastIndexOf('];');
if (insertAt === -1) {
  console.error('Could not find insertion point.');
  process.exit(1);
}

const updated = content.slice(0, insertAt) + entry + '\n' + content.slice(insertAt);
fs.writeFileSync(target, updated, 'utf8');
console.log(`Added landing page entry for ${headline}.`);
