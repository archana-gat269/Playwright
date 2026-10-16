import {test, Page,expect} from '@playwright/test'

export class loginPage {

    async login(page: Page) {

        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

        await page.getByRole('textbox', { name: 'Username' }).fill('Admin');

        await page.getByRole('textbox', { name: 'Password' }).fill('admin123');

        await page.getByRole('button', { name: 'Login' }).click();

        await expect(
            page.getByRole('heading', { name: 'Dashboard' })
        ).toBeVisible();

        await expect(page).toHaveURL(/.*dashboard\/index/);

        await expect(page).toHaveTitle('OrangeHRM');
    }
}
