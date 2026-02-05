**Checked**
- Metadata coverage (titles, descriptions, canonical, OpenGraph, Twitter)
- Structured data placement and JSON validity
- Sitemap completeness for all routes
- Modal accessibility and keyboard navigation
- Request Service modal focus/escape behavior
- Links to new routes (resources/emergency/service areas)
- Frontmatter validation and noindex handling
- Form UX success/error states and session persistence

**Fixed**
- Added keyboard focus support for Services dropdown
- Added focus trap and focus return for Request Service modal
- Added OpenGraph/Twitter metadata to indexable pages missing it
- Removed LocalBusiness JSON-LD from city pages (Home only)
- Added /resources to navigation and sitemap
- Added .env.example for required variables
- Added sitemap entries for resources

**Optional improvements**
- Add real photos and OpenGraph images per resource
- Add real review data with AggregateRating schema (if verified)
- Add automated link-checking in CI
