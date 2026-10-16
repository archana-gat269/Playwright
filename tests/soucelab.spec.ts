import { test, expect } from '@playwright/test';


// test('has title', async ({ page }) => {
//   await page.goto('https://saucelabs.com/');
//   await page.getByRole('link', { name: 'Login' }).click();
//   await expect(page).toHaveTitle("Sauce Labs | Accounts");
// });

test('verify login functionality of Sauce Labs', async ({ page }) => {
  await page.goto('https://saucelabs.com/');
  await page.getByRole('link', { name: 'Login' }).click();
  await page.getByPlaceholder('User Name').fill('Archana');
  await page.getByPlaceholder('Password').fill('Archana@123');
  await page.locator('label[for="remember"]').click();
  await page.getByRole('button', { name: 'Log in' }).click();
 // await page.waitForTimeout(2000);
   // await expect(
   // page.getByText('User name/password combination is invalid.')
  //).toBeVisible();
  await expect(
  page.getByText('User name/password combination is invalid.')
).toHaveText('User name/password combination is invalid.');
});