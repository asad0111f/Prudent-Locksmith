# Ads Launch QA Checklist

## Landing Page Mobile QA
- Above-the-fold Call Now button visible.
- Short form visible without excessive scroll.
- Sticky call bar present on mobile.

## Form + Email Delivery Test
- Submit a test form.
- Confirm email receipt.
- Check spam folder and deliverability.

## UTM + GCLID Capture Test
- Visit /lp page with UTM + gclid params.
- Submit form and verify payload in email.

## Call Click Event Test
- Tap Call Now on mobile.
- Confirm no errors in console.

## Redirect + Broken Link Checks
- Verify internal links resolve.
- Confirm no redirect loops.

## Budget Pacing Sanity Checks
- Confirm daily budget caps.
- Check emergency vs non‑emergency split.
