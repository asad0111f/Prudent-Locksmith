# Landing Pages Playbook

## Add a New Landing Page
1. Edit `content/landing-pages.ts`.
2. Add a new entry with a unique `slug` and required fields.
3. Set `primaryService` to an existing service ID (e.g., `garage-door-repair/garage-door-not-opening-or-stuck`).
4. Keep `enableIndexing` as `false` unless you explicitly want indexing.
5. Run `npm run lp:generate -- "<serviceSlug>" "<city>" "<headline>"` to scaffold a new entry (optional).

## Enable Indexing Safely
1. Set `enableIndexing: true` on the specific landing page entry.
2. Confirm the title/description are unique.
3. The canonical will self-reference and the page will be added to the sitemap.

## Running Ads
1. Use the full landing URL: `/lp/{slug}`.
2. Add UTM parameters and click IDs in your ad URLs.
3. Confirm form submissions include attribution in email logs.

## QA Checklist
- Call Now button works on mobile and desktop.
- Form submits successfully and includes the correct service and city.
- UTM/gclid/wbraid/gbraid values persist on refresh.
- Landing pages are noindex unless enabled.
