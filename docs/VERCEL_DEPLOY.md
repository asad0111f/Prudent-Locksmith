# Vercel Deploy Guide

## Deploy via GitHub → Vercel
1. Push the repo to GitHub.
2. In Vercel, click “New Project” and import the repo.
3. Use the default Next.js framework settings.
4. Add environment variables (below) before deploying.
5. Deploy.

## Required Environment Variables
- `SITE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO` (default Info.prudentlocksmith@gmail.com)

## Optional Environment Variables
- `ENABLE_ANALYTICS`
- `GTM_CONTAINER_ID`
- `ERROR_REPORTING_DSN`

## Post-Deploy Test Checklist
- Submit a test form and confirm email delivery.
- Check `/sitemap.xml` returns 200.
- Check `/robots.txt` returns 200.
- Check `/api/contact/health` returns `{ ok: true }`.
