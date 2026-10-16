
import {test, Page} from '@playwright/test'


test("Mouse Hover",async({page})=>{


    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//button[text()='Point Me']").scrollIntoViewIfNeeded();
    // await page.waitForTimeout(5000)

    await page.locator("//button[text()='Point Me']").hover();
    await page.waitForTimeout(20000)

    await page.locator("//a[text()='Mobiles']").click();
    await page.waitForTimeout(5000)
})