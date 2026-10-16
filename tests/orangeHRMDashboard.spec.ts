import {test, Page,expect} from '@playwright/test'
import {loginPage} from '../page/login.page'

test.use({storageState:'auth/user.json'})
test("Dashboard page validation", async ({page}) => {
    // const loginpage = new loginPage();

    // await loginpage.login(page);
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    await expect(page.getByRole('heading',{name:'Dashboard'})).toBeVisible()
})
