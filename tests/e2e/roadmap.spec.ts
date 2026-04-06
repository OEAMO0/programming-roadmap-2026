import { expect, test } from '@playwright/test';

test('opens the site, searches, opens a topic, and copies the share link', async ({ page }) => {
  await page.goto('/');

  await expect(page.getByText('خريطة تعلّم البرمجة 2026')).toBeVisible();

  const searchbox = page.getByRole('searchbox', { name: 'ابحث داخل الخريطة' });
  await searchbox.fill('NumPy');

  const quickResult = page.getByRole('button', {
    name: 'افتح موضوع رياضيات Python: math و NumPy و SciPy بوعي عملي',
  });
  await expect(quickResult).toBeVisible();

  await searchbox.press('Enter');

  await expect(page.getByRole('heading', { name: 'رياضيات Python: math و NumPy و SciPy بوعي عملي' })).toBeVisible();

  await page.getByRole('button', { name: 'المزيد من الأدوات' }).click();
  await page.getByRole('menuitem', { name: /نسخ الرابط/ }).click();

  await expect(page.getByText('تم نسخ رابط الحالة الحالية.')).toBeVisible();

  const clipboardText = await page.evaluate(async () => navigator.clipboard.readText());
  expect(clipboardText).toContain('topic=python-math-computing');
});

test('keeps the tools menu fully inside the viewport on narrow screens', async ({ page }) => {
  await page.setViewportSize({ width: 360, height: 740 });
  await page.goto('/');

  await page.getByRole('button', { name: 'المزيد من الأدوات' }).click();

  const menu = page.locator('.topbar-menu');
  await expect(menu).toBeVisible();

  const menuBox = await menu.boundingBox();
  const viewport = page.viewportSize();

  expect(menuBox).not.toBeNull();
  expect(viewport).not.toBeNull();

  expect(menuBox!.x).toBeGreaterThanOrEqual(0);
  expect(menuBox!.y).toBeGreaterThanOrEqual(0);
  expect(menuBox!.x + menuBox!.width).toBeLessThanOrEqual(viewport!.width);
  expect(menuBox!.y + menuBox!.height).toBeLessThanOrEqual(viewport!.height);
});
