# Deployment (Vercel)

## Environment variables
Set the following environment variables in Vercel (Project Settings → Environment Variables):

- `EMAIL_PROVIDER_API_KEY` (Resend API key)
- `EMAIL_FROM` (e.g., "Prudent Locksmith <no-reply@yourdomain>")
- `EMAIL_TO` (optional, defaults to Info.prudentlocksmith@gmail.com)
- `NEXT_PUBLIC_SITE_URL` (e.g., https://www.prudentlocksmith.com)
- `SITE_URL` (optional fallback for server-side canonical links)

## Local testing
1. Create a `.env.local` file with the variables above.
2. Install dependencies: `npm install`
3. Run the app: `npm run dev`
4. Test the contact form from:
   - `/contact`
   - Any service page
   - Mobile sticky request form

## Test checklist
- Submit valid request and confirm email delivery
- Submit invalid email and confirm error message
- Submit too quickly (under 3 seconds) and confirm validation error
- Trigger honeypot field and confirm no email is sent
- Verify `/api/contact/health` returns `{ ok: true }`
- Confirm logs appear in Vercel for validation/rate limit/provider errors

## Notes
- Rate limiting is best-effort in-memory and may reset between serverless invocations.
- Ensure `EMAIL_FROM` uses a verified domain in Resend.
