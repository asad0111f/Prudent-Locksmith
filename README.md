# Prudent Locksmith and Garage Services

Deploy badge: [Deploy]

## Overview
Lead-generation site for locksmith and garage door services with local SEO focus and conversion-first UX.

## Local Development
1. `npm install`
2. `npm run dev`

## Deploy to Vercel
- Import the repo in Vercel.
- Set environment variables in the Vercel project settings.
- Deploy.

## Environment Variables
Set in Vercel or your local `.env` file (do not commit secrets).
- `SITE_URL`
- `EMAIL_PROVIDER_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO`
- `ENABLE_ANALYTICS` (optional)
- `GTM_CONTAINER_ID` (optional)
- `ERROR_REPORTING_DSN` (optional)

Warning: Do not commit secrets in any `.env*` file.

## Key Routes
- `/`
- `/services`
- `/service-areas`
- `/emergency`
- `/lp` (noindex)
