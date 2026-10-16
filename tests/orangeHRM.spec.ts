
import {test, Page,expect} from '@playwright/test'
import {loginPage} from '../page/login.page'
 
 
const auth = 'auth/user.json'

test('verify login functionality of orangehrmlive', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@name='password']").fill("admin123");
  await page.getByRole("button",{name:'Login'}).click();
  await page.context().storageState({path:auth})
 
  
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
    await expect(page).toHaveURL(/.*dashboard\/index/)
 
    await expect(page).toHaveTitle('OrangeHRM')
});

