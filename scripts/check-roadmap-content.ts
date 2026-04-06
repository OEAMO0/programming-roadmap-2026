import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import { roadmapMeta, roadmapSections, topicCatalog } from '../src/data/roadmap.ts';

const SITE_URL = 'https://programming-roadmap-2026.omadkdklilipo.workers.dev/';
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

async function loadProjectDocs() {
  const readmePath = resolve(process.cwd(), 'README.md');
  const notebookPath = resolve(process.cwd(), 'PROJECT_NOTEBOOK_AR.md');
  const [readme, notebook] = await Promise.all([
    readFile(readmePath, 'utf8'),
    readFile(notebookPath, 'utf8'),
  ]);

  return { readme, notebook };
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
  }
}

function checkDocsSync(readme: string, notebook: string) {
  const readmeExpectations = [
    SITE_URL,
    roadmapMeta.updatedAt,
    'بحث وفلترة',
    'رابط مباشر',
    'أطلس المصادر',
  ];

  const notebookExpectations = [
    roadmapMeta.updatedAt,
    'البحث والفلترة',
    'تعميق الرياضيات',
    'رابط مباشر',
    'أخطاء شائعة',
    'مصدر رسمي',
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
  const { readme, notebook } = await loadProjectDocs();
  checkDocsSync(readme, notebook);

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
      : 'تم فحص المحتوى والتوثيق البنيوي بنجاح.',
  );
}

await main();
