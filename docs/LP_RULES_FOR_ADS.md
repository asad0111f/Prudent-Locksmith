# LP Rules for Ads

## Required Sections
- Above-the-fold Call Now CTA + Request Service form
- Trust strip
- At least 3 benefit bullets
- FAQs (3+ when indexing is enabled)
- Final CTA section

## Indexing Rules
- Default: `enableIndexing: false`
- When `enableIndexing: true`, ensure unique headline and subheadline.
- Canonical:
  - If noindex: point to main service or city page.
  - If indexed: self-referential.

## UTM Capture QA
1. Visit `/lp/{slug}?utm_source=test&utm_medium=cpc&utm_campaign=qa&gclid=TEST`.
2. Submit a form.
3. Confirm UTM + gclid values appear in the contact email payload.
