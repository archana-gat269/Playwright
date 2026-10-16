import { test } from '@playwright/test';
test("Context menu",async({page}) =>{

    await page.goto("https://the-internet.herokuapp.com/", { waitUntil: 'domcontentloaded',
        timeout: 30000 });

    await page.locator("//a[text()='Context Menu']").click();

    page.on('dialog',async dialog=>{
        console.log(`Alert message ${dialog.message()}`),
        await page.waitForTimeout(3000),
        await dialog.dismiss();
    })

    await page.locator("//div[@oncontextmenu='displayMessage()']").click({timeout:5000,button:'right'})

    await page.waitForTimeout(5000)

})