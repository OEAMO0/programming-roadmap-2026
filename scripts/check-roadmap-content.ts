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
    'نسخ الرابط',
  ];

  const notebookExpectations = [
    roadmapMeta.updatedAt,
    'البحث والفلترة',
    'تعميق الرياضيات',
    'رابط مباشر',
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

async function probeUrl(url: string) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 10000);

  try {
    const headResponse = await fetch(url, {
      method: 'HEAD',
      redirect: 'follow',
      signal: controller.signal,
    });

    if (headResponse.ok) {
      return;
    }

    if (headResponse.status !== 405 && headResponse.status !== 403) {
      addIssue('links', `الرابط ${url} أعاد الحالة ${headResponse.status} أثناء فحص HEAD.`);
      return;
    }

    const getResponse = await fetch(url, {
      method: 'GET',
      redirect: 'follow',
      signal: controller.signal,
    });

    if (!getResponse.ok) {
      addIssue('links', `الرابط ${url} أعاد الحالة ${getResponse.status} أثناء فحص GET.`);
    }
  } catch (error) {
    addIssue('links', `تعذر فحص الرابط ${url}: ${error instanceof Error ? error.message : String(error)}`);
  } finally {
    clearTimeout(timeoutId);
  }
}

async function checkLiveLinks() {
  const urls = [...new Set([SITE_URL, ...Object.values(topicCatalog).flatMap((topic) => topic.resources.map((resource) => resource.url))])];
  const concurrency = 8;
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
