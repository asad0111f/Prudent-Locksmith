# Launch Checklist

## Environment Variables
- `EMAIL_PROVIDER_API_KEY`
- `EMAIL_FROM`
- `EMAIL_TO` (optional)
- `NEXT_PUBLIC_SITE_URL`
- `SITE_URL` (optional)

## Form Testing
- Submit a request from `/contact` and confirm email delivery
- Submit a request from a service page modal
- Submit a request from the mobile sticky bar
- Confirm error handling for invalid email
- Confirm rate limit response after repeated submissions

## SEO Verification
- Check `https://yourdomain.com/sitemap.xml`
- Check `https://yourdomain.com/robots.txt`
- Submit sitemap in Google Search Console
- Verify no address is shown on site

## Performance & Accessibility
- Run Lighthouse on Home and a service page
- Confirm no layout shift on hero sections
- Confirm focus styles on buttons/links

## Post-Launch Monitoring
- Monitor form delivery logs in Vercel
- Review 404 logs for broken links
- Check Search Console for indexing and errors
