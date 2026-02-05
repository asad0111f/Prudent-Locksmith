# Conversion Plan

## Primary Conversions
- `call_click`
- `form_success`

## Secondary Conversions
- `form_submit`
- `emergency_cta_click`

## Validate Events (Analytics Disabled)
1. Click Call Now → ensure no errors in console.
2. Submit a form → ensure no errors in console.
3. Confirm form success UI appears.

## GTM Integration (Later)
- Insert GTM in `app/layout.tsx` via env flags.
- Listen for dataLayer events:
  - `call_click`
  - `form_submit`
  - `form_success`
  - `emergency_cta_click`
  - `service_cta_click`
  - `page_view_lp`

## Post‑Install Conversion QA
- Verify call_click events fire on tel links.
- Verify form_success fires on successful submit.
- Verify emergency_cta_click on /emergency page.
- Verify page_view_lp on /lp pages.
