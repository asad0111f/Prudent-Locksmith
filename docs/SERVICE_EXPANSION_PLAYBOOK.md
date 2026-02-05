# Service Expansion Playbook

## Add a New Service (Safe Workflow)
1. Update `lib/services.ts`:
   - Add service name, slug, description, bullets, process, FAQs.
   - Ensure `commonProblems`, `process`, and FAQs are specific.
2. Confirm internal linking:
   - Add related services for cross-linking.
3. Validate uniqueness:
   - Build will fail if section content is too similar to another service.

## SEO Checklist
- Unique title/description generated for the new service.
- Add a distinct hero image and alt text.
- Confirm service appears in sitemap.

## Ads Readiness
- Add /lp entry if running ads for this service.
- Test form submissions with UTM params.
