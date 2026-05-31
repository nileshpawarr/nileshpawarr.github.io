import { test, expect } from '@playwright/test';

test.describe('smoke', () => {
  test('home page renders with all sections', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/Nilesh Pawar/);

    // Each section present and has heading
    const sectionIds = ['top', 'about', 'skills', 'work', 'projects', 'contact'];
    for (const id of sectionIds) {
      await expect(page.locator(`#${id}`)).toBeVisible();
    }

    // Nav links resolve to anchored sections
    const navAnchors = ['#work', '#projects', '#contact'];
    for (const href of navAnchors) {
      const link = page.locator(`header a[href="${href}"]`).first();
      await expect(link).toBeVisible();
    }
  });

  test('resume PDF is reachable', async ({ page }) => {
    const response = await page.request.get('/Nilesh_Pawar_Resume.pdf');
    expect(response.status()).toBeLessThan(400);
  });

  test('404 page renders for unknown route', async ({ page }) => {
    const response = await page.goto('/not-a-real-page');
    expect(response?.status()).toBe(404);
    await expect(page.locator('h1')).toContainText(/doesn't exist/i);
  });

  test('theme toggle flips data-theme attribute', async ({ page }) => {
    await page.goto('/');
    const html = page.locator('html');
    const initial = await html.getAttribute('data-theme');
    expect(['light', 'dark']).toContain(initial);

    await page.locator('header button[aria-label*="Switch to"]').first().click();
    await expect(html).not.toHaveAttribute('data-theme', initial!);
  });
});
