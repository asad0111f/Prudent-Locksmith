import { SITE } from '@/lib/site';
import { getAllResources } from '@/lib/resources';

function escapeXml(value: string) {
  return value.replace(/[<>&'"]/g, (char) => {
    switch (char) {
      case '<':
        return '&lt;';
      case '>':
        return '&gt;';
      case '&':
        return '&amp;';
      case '"':
        return '&quot;';
      case "'":
        return '&apos;';
      default:
        return char;
    }
  });
}

export async function GET() {
  const items = getAllResources()
    .filter((resource) => !resource.noindex)
    .slice(0, 20)
    .map((resource) => {
      const link = `${SITE.baseUrl}/resources/${resource.slug}`;
      return `
        <item>
          <title>${escapeXml(resource.title)}</title>
          <link>${link}</link>
          <guid>${link}</guid>
          <pubDate>${new Date(resource.date).toUTCString()}</pubDate>
          <description>${escapeXml(resource.description)}</description>
        </item>
      `;
    })
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>${escapeXml(SITE.name)} Resources</title>
        <link>${SITE.baseUrl}/resources</link>
        <description>${escapeXml(SITE.description)}</description>
        ${items}
      </channel>
    </rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8'
    }
  });
}
