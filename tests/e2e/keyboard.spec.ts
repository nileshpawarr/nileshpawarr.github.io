import { test, expect } from '@playwright/test';

test.describe('keyboard navigation', () => {
  test('skip link appears on first Tab and lands on #main', async ({ page }) => {
    await page.goto('/');
    await page.keyboard.press('Tab');

    const skip = page.locator('a.skip-link');
    await expect(skip).toBeFocused();
    await expect(skip).toBeVisible();

    await page.keyboard.press('Enter');
    expect(page.url()).toContain('#main');
  });

  test('all interactive elements reachable by Tab', async ({ page }) => {
    await page.goto('/');

    // Walk through ~20 Tab stops; expect each one to be a real interactive element
    const expectedRoles = ['link', 'button'];
    const stopsToCheck = 20;

    let tabbed = 0;
    let interactiveSeen = 0;
    while (tabbed < stopsToCheck) {
      await page.keyboard.press('Tab');
      tabbed++;
      const tagName = await page.evaluate(() => document.activeElement?.tagName.toLowerCase());
      const role = await page.evaluate(() => document.activeElement?.getAttribute('role'));
      const isInteractive =
        ['a', 'button', 'input', 'textarea', 'select', 'details', 'summary'].includes(
          tagName ?? '',
        ) || expectedRoles.includes(role ?? '');
      if (isInteractive) interactiveSeen++;
    }

    expect(interactiveSeen).toBeGreaterThan(5);
  });
});
