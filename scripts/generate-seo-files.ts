import { mkdir, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { roadmapMeta, topicCatalog } from '../src/data/roadmap.ts';

type SitemapEntry = {
  loc: string;
  changefreq: 'daily' | 'weekly' | 'monthly';
  priority: string;
};

function escapeXml(value: string) {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;');
}

function buildTopicUrl(topicId: string) {
  const url = new URL(roadmapMeta.siteUrl);
  url.searchParams.set('topic', topicId);
  return url.toString();
}

function buildSitemapXml(entries: SitemapEntry[]) {
  const urls = entries
    .map(
      (entry) => `  <url>
    <loc>${escapeXml(entry.loc)}</loc>
    <lastmod>${roadmapMeta.updatedAt}</lastmod>
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`,
    )
    .join('\n');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
}

function buildRobotsTxt() {
  const sitemapUrl = new URL('/sitemap.xml', roadmapMeta.siteUrl).toString();

  return `User-agent: *
Allow: /

Sitemap: ${sitemapUrl}
`;
}

function buildManifest() {
  return JSON.stringify(
    {
      name: roadmapMeta.title,
      short_name: 'خريطة البرمجة',
      description: 'خريطة تعلم برمجة تفاعلية بالعربية من البداية إلى التخصص.',
      lang: 'ar',
      dir: 'rtl',
      start_url: '/',
      scope: '/',
      display: 'standalone',
      background_color: '#ebe3d6',
      theme_color: '#ebe3d6',
      icons: [
        {
          src: '/favicon.svg',
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
      ],
    },
    null,
    2,
  );
}

async function main() {
  const publicDir = resolve(process.cwd(), 'public');

  await mkdir(publicDir, { recursive: true });

  const entries: SitemapEntry[] = [
    {
      loc: roadmapMeta.siteUrl,
      changefreq: 'daily',
      priority: '1.0',
    },
    ...Object.keys(topicCatalog)
      .sort((left, right) => topicCatalog[left].title.localeCompare(topicCatalog[right].title, 'ar'))
      .map((topicId) => ({
        loc: buildTopicUrl(topicId),
        changefreq: 'weekly' as const,
        priority: topicId.includes('resource-atlas') ? '0.6' : '0.7',
      })),
  ];

  await Promise.all([
    writeFile(resolve(publicDir, 'sitemap.xml'), buildSitemapXml(entries), 'utf8'),
    writeFile(resolve(publicDir, 'robots.txt'), buildRobotsTxt(), 'utf8'),
    writeFile(resolve(publicDir, 'site.webmanifest'), buildManifest(), 'utf8'),
  ]);

  console.log(`Generated sitemap.xml, robots.txt, and site.webmanifest for ${entries.length} URLs.`);
}

await main();
