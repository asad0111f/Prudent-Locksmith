# Deployment (Vercel)

## Production (Vercel) checklist
1. Open Vercel → Project → Settings → Environment Variables.
2. Add the following keys:
   - `EMAIL_PROVIDER_API_KEY` (Resend API key)
   - `EMAIL_FROM` (must be a Resend-verified sender or domain)
   - `EMAIL_TO` (optional; defaults to `Info.prudentlocksmith@gmail.com`)
   - `NEXT_PUBLIC_SITE_URL` (e.g., https://www.prudentlocksmith.com)
   - `SITE_URL` (optional fallback for server-side canonical links)
3. Redeploy the project.

## Before going live
- Verify a domain in Resend
- Update `EMAIL_FROM` in Vercel env vars
- Redeploy

## Local testing
1. Create `.env.local` from `.env.local.template` and fill the values.
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Test the contact form from:
   - `/contact`
   - Any service page
   - Mobile sticky request form
5. Optional: POST to `/api/email-test` (only works when `NODE_ENV` is not `production`).

## Test checklist
- Submit valid request and confirm email delivery
- Submit invalid email and confirm error message
- Submit too quickly (under 3 seconds) and confirm validation error
- Trigger honeypot field and confirm no email is sent
- Verify `/api/contact/health` returns `{ ok: true }`
- Confirm logs appear in Vercel for validation/rate limit/provider errors

## Notes
- Rate limiting is best-effort in-memory and may reset between serverless invocations.
- `EMAIL_FROM` must be verified in Resend.
