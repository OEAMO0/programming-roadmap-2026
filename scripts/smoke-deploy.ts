import { roadmapMeta } from '../src/data/roadmap.ts';

const DEFAULT_ATTEMPTS = 6;
const DEFAULT_DELAY_MS = 4000;
const DEFAULT_TIMEOUT_MS = 15000;

function readCliOption(name: string) {
  const prefix = `--${name}=`;
  const match = process.argv.find((argument) => argument.startsWith(prefix));

  return match ? match.slice(prefix.length) : '';
}

function sleep(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function fetchWithTimeout(url: string, timeoutMs: number) {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  try {
    return await fetch(url, {
      redirect: 'follow',
      signal: controller.signal,
      headers: {
        'user-agent': 'roadmap-smoke-check',
      },
    });
  } finally {
    clearTimeout(timeoutId);
  }
}

async function runSmokeCheck(url: string, timeoutMs: number) {
  const response = await fetchWithTimeout(url, timeoutMs);

  if (!response.ok) {
    throw new Error(`الموقع أعاد الحالة ${response.status}.`);
  }

  const html = await response.text();
  const expectedMarkers = [
    `<title>${roadmapMeta.title}</title>`,
    roadmapMeta.siteUrl,
    '<div id="root"></div>',
  ];

  for (const marker of expectedMarkers) {
    if (!html.includes(marker)) {
      throw new Error(`الصفحة استجابت لكن لا تحتوي على العلامة المتوقعة: ${marker}`);
    }
  }
}

async function main() {
  const url = readCliOption('url') || process.env.ROADMAP_SMOKE_URL || roadmapMeta.siteUrl;
  const attempts = Number.parseInt(process.env.ROADMAP_SMOKE_ATTEMPTS ?? '', 10) || DEFAULT_ATTEMPTS;
  const delayMs = Number.parseInt(process.env.ROADMAP_SMOKE_DELAY_MS ?? '', 10) || DEFAULT_DELAY_MS;
  const timeoutMs = Number.parseInt(process.env.ROADMAP_SMOKE_TIMEOUT_MS ?? '', 10) || DEFAULT_TIMEOUT_MS;

  let lastError: unknown = null;

  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      await runSmokeCheck(url, timeoutMs);
      console.log(`نجح smoke check للرابط ${url} في المحاولة ${attempt}/${attempts}.`);
      return;
    } catch (error) {
      lastError = error;
      const reason = error instanceof Error ? error.message : String(error);
      console.warn(`فشل smoke check في المحاولة ${attempt}/${attempts}: ${reason}`);

      if (attempt < attempts) {
        await sleep(delayMs);
      }
    }
  }

  const finalReason = lastError instanceof Error ? lastError.message : String(lastError);
  throw new Error(`تعذر تأكيد استجابة النسخة المنشورة بعد ${attempts} محاولات. آخر سبب: ${finalReason}`);
}

await main();
