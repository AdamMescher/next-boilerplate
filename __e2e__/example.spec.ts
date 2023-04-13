const AxeBuilder = require('@axe-core/playwright').default;
import { test, expect } from '@playwright/test';
const playwright = require('playwright');

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects the URL to contain intro.
  await expect(page).toHaveURL(/.*intro/);
});

test('does not have axe core a11y errors', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const browser = await playwright.chromium.launch();
  const context = await browser.newContext();
  try {
    const results = await new AxeBuilder({ page }).analyze();
    console.log(results);
  } catch (e) {
    // do something with the error
  }
  await browser.close();
})
