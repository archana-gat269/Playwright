import {test,Page} from '@playwright/test'

test("Clear and fill data",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

  await page.locator("//input[@id='field1']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)

  await page.locator("//input[@id='field1']").fill("Pune")
  await page.waitForTimeout(20000)

})