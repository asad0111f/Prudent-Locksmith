# Analytics Readiness

## Events Fired
- `call_click`: Any click on the phone number.
- `form_submit`: Form submit attempt.
- `form_success`: Form submitted successfully.
- `emergency_cta_click`: Emergency page primary call CTA.
- `service_cta_click`: Service page primary call CTA.
- `page_view_lp`: Landing page view.

Event payload includes:
- `path` (page path)
- `source` (page type)
- `service` (if applicable)
- `city` (if applicable)

## Google Tag Manager (Optional)
1. Set `ENABLE_ANALYTICS=true`.
2. Set `GTM_CONTAINER_ID=GTM-XXXXXXX` (or `NEXT_PUBLIC_GTM_ID`).
3. Set `NEXT_PUBLIC_ENABLE_ANALYTICS=true` to allow client-side event dispatch.
4. Deploy. GTM loads only when enabled.

## Google Ads Conversions (Later)
- Map events like `form_success` and `call_click` in GTM.
- Add conversion tags in GTM, not in code.

## Call Tracking (Later)
- Update `components/phone-link.tsx` to swap the phone number dynamically.
- Keep the tracking logic in the same component to avoid vendor lock-in.
