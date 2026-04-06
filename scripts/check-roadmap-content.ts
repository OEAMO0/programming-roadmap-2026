import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { roadmapMeta, roadmapSections, topicCatalog } from '../src/data/roadmap.ts';

const SITE_URL = roadmapMeta.siteUrl;
const LEGACY_SITE_URLS = roadmapMeta.legacySiteUrls;
const SITEMAP_URL = new URL('/sitemap.xml', SITE_URL).toString();
const softFailHosts = new Set(['sqlite.org', 'www.sqlite.org']);
const shouldCheckLinks = process.argv.includes('--links');

type Issue = {
  kind: 'content' | 'docs' | 'links';
  message: string;
};

const issues: Issue[] = [];

function addIssue(kind: Issue['kind'], message: string) {
  issues.push({ kind, message });
}

function isHttpsUrl(value: string) {
  try {
    const url = new URL(value);
    return url.protocol === 'https:';
  } catch {
    return false;
  }
}

async function safeReadText(path: string) {
  try {
    return await readFile(path, 'utf8');
  } catch {
    return '';
  }
}

async function loadProjectDocs() {
  const readmePath = resolve(process.cwd(), 'README.md');
  const notebookPath = resolve(process.cwd(), 'PROJECT_NOTEBOOK_AR.md');
  const indexHtmlPath = resolve(process.cwd(), 'index.html');
  const workflowPath = resolve(process.cwd(), '.github', 'workflows', 'ci.yml');
  const robotsPath = resolve(process.cwd(), 'public', 'robots.txt');
  const sitemapPath = resolve(process.cwd(), 'public', 'sitemap.xml');
  const manifestPath = resolve(process.cwd(), 'public', 'site.webmanifest');

  const [readme, notebook, indexHtml, workflow, robotsTxt, sitemapXml, manifest] = await Promise.all([
    safeReadText(readmePath),
    safeReadText(notebookPath),
    safeReadText(indexHtmlPath),
    safeReadText(workflowPath),
    safeReadText(robotsPath),
    safeReadText(sitemapPath),
    safeReadText(manifestPath),
  ]);

  return { readme, notebook, indexHtml, workflow, robotsTxt, sitemapXml, manifest };
}

function checkRoadmapStructure() {
  const sectionIds = new Set(roadmapSections.map((section) => section.id));
  const seenTopicIds = new Set<string>();

  for (const section of roadmapSections) {
    if (!topicCatalog[section.id]) {
      addIssue('content', `المسار "${section.id}" موجود في roadmapSections لكنه غير موجود في topicCatalog.`);
    }

    for (const topicId of [...section.right, ...section.left]) {
      if (!topicCatalog[topicId]) {
        addIssue('content', `الموضوع "${topicId}" مشار إليه داخل المسار "${section.id}" لكنه غير موجود في topicCatalog.`);
        continue;
      }

      if (seenTopicIds.has(topicId)) {
        addIssue('content', `الموضوع "${topicId}" مكرر في أكثر من فرع داخل roadmapSections.`);
      }

      seenTopicIds.add(topicId);
    }
  }

  for (const [topicId, topic] of Object.entries(topicCatalog)) {
    if (!topic.resources.length) {
      addIssue('content', `الموضوع "${topicId}" لا يملك أي مصدر.`);
    }

    for (const resource of topic.resources) {
      if (!resource.label.trim()) {
        addIssue('content', `أحد مصادر "${topicId}" بلا عنوان واضح.`);
      }

      if (!isHttpsUrl(resource.url)) {
        addIssue('content', `الموضوع "${topicId}" يحتوي على رابط غير صالح أو غير آمن: ${resource.url}`);
      }
    }

    if (!sectionIds.has(topicId) && !seenTopicIds.has(topicId)) {
      addIssue('content', `الموضوع "${topicId}" موجود في topicCatalog لكنه غير مربوط داخل roadmapSections.`);
    }

    const isResourceAtlasTopic = topicId === 'resource-atlas' || topicId.endsWith('-resource-atlas');

    if (isResourceAtlasTopic && topic.resources.length < 4) {
      addIssue('content', `باب أطلس المصادر "${topicId}" يحتاج إلى 4 مصادر على الأقل ليبقى بابًا مرجعيًا قويًا.`);
    }
  }
}

function checkDocsSync(
  readme: string,
  notebook: string,
  indexHtml: string,
  workflow: string,
  robotsTxt: string,
  sitemapXml: string,
  manifest: string,
) {
  const readmeExpectations = [
    SITE_URL,
    roadmapMeta.updatedAt,
    'بحث وفلترة',
    'رابط مباشر',
    'أطلس المصادر',
    'اذهب إلى المسار',
    'test:e2e',
    'smoke:deploy',
    'GitHub Actions',
  ];

  const notebookExpectations = [
    roadmapMeta.updatedAt,
    'البحث والفلترة',
    'رياضيات Python',
    'رابط مباشر',
    'أخطاء شائعة',
    'مصدر رسمي',
    'أفضل فرص التوسعة القادمة',
    'GitHub Actions',
  ];

  for (const phrase of readmeExpectations) {
    if (!readme.includes(phrase)) {
      addIssue('docs', `README.md لا يحتوي على العبارة المتوقعة: "${phrase}"`);
    }
  }

  for (const phrase of notebookExpectations) {
    if (!notebook.includes(phrase)) {
      addIssue('docs', `PROJECT_NOTEBOOK_AR.md لا يحتوي على العبارة المتوقعة: "${phrase}"`);
    }
  }

  if (!indexHtml.includes(SITE_URL)) {
    addIssue('docs', 'index.html لا يحتوي على الرابط الرسمي داخل الـ metadata.');
  }

  for (const phrase of ['name="robots"', 'application/ld+json', 'roadmap-social-card.svg', 'favicon.svg', 'site.webmanifest']) {
    if (!indexHtml.includes(phrase)) {
      addIssue('docs', `index.html لا يحتوي على عنصر SEO متوقع: "${phrase}"`);
    }
  }

  for (const legacyUrl of LEGACY_SITE_URLS) {
    if (readme.includes(legacyUrl) || notebook.includes(legacyUrl) || indexHtml.includes(legacyUrl)) {
      addIssue('docs', `تم العثور على رابط نشر قديم يجب إزالته من التوثيق أو الميتاداتا: ${legacyUrl}`);
    }
  }

  if (!robotsTxt.trim()) {
    addIssue('docs', 'ملف public/robots.txt غير موجود أو فارغ.');
  } else if (!robotsTxt.includes(`Sitemap: ${SITEMAP_URL}`)) {
    addIssue('docs', 'ملف public/robots.txt لا يشير إلى sitemap.xml الرسمي.');
  }

  if (!sitemapXml.trim()) {
    addIssue('docs', 'ملف public/sitemap.xml غير موجود أو فارغ.');
  } else {
    if (!sitemapXml.includes(`<loc>${SITE_URL}</loc>`)) {
      addIssue('docs', 'ملف public/sitemap.xml لا يحتوي على الصفحة الرئيسية.');
    }

    if (!sitemapXml.includes('topic=frontend-web')) {
      addIssue('docs', 'ملف public/sitemap.xml لا يحتوي على صفحات موضوعات قابلة للفهرسة.');
    }
  }

  if (!manifest.trim()) {
    addIssue('docs', 'ملف public/site.webmanifest غير موجود أو فارغ.');
  } else {
    for (const phrase of ['"name"', '"lang": "ar"', '"start_url": "/"', '/favicon.svg']) {
      if (!manifest.includes(phrase)) {
        addIssue('docs', `ملف public/site.webmanifest لا يحتوي على القيمة المتوقعة: "${phrase}"`);
      }
    }
  }

  if (!workflow.trim()) {
    addIssue('docs', 'ملف GitHub Actions غير موجود في .github/workflows/ci.yml.');
    return;
  }

  for (const phrase of ['npm run check:content', 'npm run build', 'npm run test:run', 'npm run test:e2e', 'npm run smoke:deploy']) {
    if (!workflow.includes(phrase)) {
      addIssue('docs', `ملف GitHub Actions لا يحتوي على الخطوة المتوقعة: "${phrase}"`);
    }
  }
}

async function fetchWithTimeout(url: string, method: 'HEAD' | 'GET') {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 15000);

  try {
    return await fetch(url, {
      method,
      redirect: 'follow',
      signal: controller.signal,
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function probeUrl(url: string) {
  let headFailureReason: string | null = null;
  const hostname = new URL(url).hostname;

  try {
    const headResponse = await fetchWithTimeout(url, 'HEAD');

    if (headResponse.ok) {
      return;
    }

    headFailureReason = `أعاد الحالة ${headResponse.status} أثناء فحص HEAD`;
  } catch (error) {
    headFailureReason = `تعذر فحص HEAD: ${error instanceof Error ? error.message : String(error)}`;
  }

  try {
    const getResponse = await fetchWithTimeout(url, 'GET');

    if (getResponse.ok || getResponse.status === 403) {
      return;
    }

    addIssue(
      'links',
      `الرابط ${url} فشل بعد المحاولتين. ${headFailureReason ?? 'فشل HEAD.'} ثم أعاد GET الحالة ${getResponse.status}.`,
    );
  } catch (error) {
    if (softFailHosts.has(hostname)) {
      return;
    }

    addIssue(
      'links',
      `تعذر فحص الرابط ${url}. ${headFailureReason ?? 'فشل HEAD.'} ثم تعذر GET: ${error instanceof Error ? error.message : String(error)}`,
    );
  }
}

async function checkLiveLinks() {
  const urls = [...new Set(Object.values(topicCatalog).flatMap((topic) => topic.resources.map((resource) => resource.url)))];
  const concurrency = 4;
  let index = 0;

  await Promise.all(
    Array.from({ length: concurrency }, async () => {
      while (index < urls.length) {
        const currentIndex = index;
        index += 1;
        await probeUrl(urls[currentIndex]);
      }
    }),
  );
}

async function main() {
  checkRoadmapStructure();
  const { readme, notebook, indexHtml, workflow, robotsTxt, sitemapXml, manifest } = await loadProjectDocs();
  checkDocsSync(readme, notebook, indexHtml, workflow, robotsTxt, sitemapXml, manifest);

  if (shouldCheckLinks) {
    await checkLiveLinks();
  }

  if (issues.length) {
    for (const issue of issues) {
      console.error(`[${issue.kind}] ${issue.message}`);
    }

    process.exitCode = 1;
    return;
  }

  console.log(
    shouldCheckLinks
      ? 'تم فحص المحتوى والتوثيق والروابط بنجاح.'
      : 'تم فحص المحتوى والتوثيق البنيوي وملفات SEO بنجاح.',
  );
}

await main();
