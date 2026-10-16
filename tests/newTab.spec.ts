import { test, expect } from '@playwright/test';

test("open new tab", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/", { waitUntil: 'domcontentloaded',
        timeout: 30000 });

    // 1. Click 'Multiple Windows' to go to the page containing the popup link
    await page.locator("//a[text()='Multiple Windows']").click({ timeout: 5000 });

    const[newTab] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("//a[text()='Click Here']").click({timeout:5000})
    ])

    // const popPromis = await page.waitForEvent('popup')
    // await page.locator("//a[text()='Click Here']").click({timeout:5000})
    // const newTab = popPromis;

    // 4. Resolve the promise to get the new tab context
    await newTab.waitForLoadState();

    // 5. Use a proper assertion to check visibility
    await expect(newTab.locator("//h3[text()='New Window']")).toBeVisible();

    await page.waitForTimeout(5000)
});