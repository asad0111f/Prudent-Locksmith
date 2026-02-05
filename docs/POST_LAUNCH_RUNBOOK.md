# Post-Launch Runbook

## Vercel Environment Variables
- `NEXT_PUBLIC_SITE_URL`
- `SITE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`
- `ENABLE_ANALYTICS`
- `NEXT_PUBLIC_ENABLE_ANALYTICS`
- `GTM_CONTAINER_ID` (optional)
- `NEXT_PUBLIC_GTM_ID` (optional)
- `ERROR_REPORTING_DSN` (optional)

## Google Search Console (GSC)
1. Add the domain property for the site.
2. Verify via DNS or upload a verification file to `public/.well-known/` and deploy.
3. Confirm `https://your-domain.com/sitemap.xml` is reachable.

## Submit Sitemap
1. In GSC, open Sitemaps.
2. Submit `https://your-domain.com/sitemap.xml`.
3. Confirm it processes without errors.

## Request Indexing
1. Use GSC URL Inspection on priority pages:
   - `/`
   - `/services`
   - `/service-areas`
   - `/emergency`
   - Top 3 services
2. Click “Request indexing.”

## Lead Monitoring
1. Submit a test form on `/contact`.
2. Confirm delivery in `EMAIL_TO`.
3. Check spam folder and email deliverability.

## Ads Launch with /lp Pages
1. Select the relevant `/lp/{slug}` URL.
2. Add UTM parameters and `gclid` (test).
3. Submit a test lead and verify attribution in emails.

## Weekly SEO Maintenance
- Publish 1 new resource article.
- Add 2 internal links from new content to services.
- Check Search Console for coverage errors.
- Review top landing pages for CTR and conversion rate.
