# City Expansion Playbook

## Add a New City (Safe Workflow)
1. Update `lib/cities.ts`:
   - Add city name, slug, description, top services, FAQs.
2. Verify city page renders:
   - `/service-areas/{city-slug}`
3. Add city to landing pages if running ads:
   - `content/landing-pages.ts`
4. Add internal links:
   - Ensure city is included in service pages’ “Serving Hamilton & nearby” section if needed.

## Ads Alignment
- Create /lp page(s) targeting the new city.
- Confirm UTM capture and form submissions.

## QA Checklist
- City page metadata is unique.
- City page has FAQs and breadcrumbs.
- City appears in sitemap.
