import { expect, test } from '@playwright/test';

test('opens the landing page, enters the map, opens a topic, and copies the share link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByRole('heading', { name: 'خريطة تعلّم البرمجة 2026' })).toBeVisible();
  await page.getByRole('button', { name: 'افتح الخريطة التفاعلية' }).click();

  await expect(page).toHaveURL(/\/map$/);
  await expect(page.getByRole('button', { name: 'الرئيسية' })).toBeVisible();

  await page.getByRole('button', { name: 'الفهرس' }).click();
  await page.locator('.overview-overlay').getByRole('button', { name: 'Linux Distribution Engineering' }).click();

  await expect(page.getByRole('heading', { name: 'Linux Distribution Engineering' })).toBeVisible();

  await page.getByRole('button', { name: 'نسخ الرابط' }).first().click();

  const clipboardText = await page.evaluate(async () => navigator.clipboard.readText());
  expect(clipboardText).toContain('/map?topic=linux-distribution-engineering');
});

test('supports beginner mode and shows the index as an overlay without shrinking the map', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/map');

  const topbar = page.locator('.topbar').first();
  await expect(topbar).toBeVisible();
  await expect(page.locator('.compact-filters')).toHaveCount(0);

  await page.getByRole('button', { name: 'الأدوات' }).click();
  const mobileTools = page.locator('.mobile-controls-sheet');
  await expect(mobileTools).toBeVisible();
  await mobileTools.getByRole('button', { name: 'وضع مبتدئ' }).click();
  await expect(page.locator('.mobile-status-strip')).toContainText('تعرض الآن');
  await mobileTools.getByRole('button', { name: 'إغلاق أدوات الجوال' }).click();
  await expect(page.locator('.mobile-controls-sheet')).toHaveCount(0);
  await page.getByRole('button', { name: 'الفهرس' }).click();
  const overview = page.locator('.overview-overlay');
  await expect(overview).toBeVisible();

  const topbarBox = await topbar.boundingBox();
  const overviewBox = await overview.boundingBox();
  const viewport = page.viewportSize();

  expect(topbarBox).not.toBeNull();
  expect(overviewBox).not.toBeNull();
  expect(viewport).not.toBeNull();

  expect(topbarBox!.x).toBeGreaterThanOrEqual(0);
  expect(topbarBox!.y).toBeGreaterThanOrEqual(0);
  expect(topbarBox!.x + topbarBox!.width).toBeLessThanOrEqual(viewport!.width);
  expect(overviewBox!.x).toBeGreaterThanOrEqual(0);
  expect(overviewBox!.x + overviewBox!.width).toBeLessThanOrEqual(viewport!.width);
  await expect(page.locator('.roadmap-minimap')).toHaveCount(0);

  await overview.getByRole('button', { name: 'Linux Distribution Engineering' }).click();
  const drawer = page.locator('.details-drawer');
  await expect(drawer).toBeVisible();
  const drawerBox = await drawer.boundingBox();

  expect(drawerBox).not.toBeNull();
  expect(drawerBox!.width).toBeLessThanOrEqual(viewport!.width);
  expect(drawerBox!.y + drawerBox!.height).toBeLessThanOrEqual(viewport!.height + 1);
});
