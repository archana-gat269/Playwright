//Sinfle File uplaod
import {test,Page} from '@playwright/test'

test("Single file upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='singleFileInput']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)

    const path = "C:\\Users\\Archana.Gat\\OneDrive - Enterprise Minds\\Desktop\\abc.txt"
    await page.locator("//input[@id='singleFileInput']").setInputFiles(path)

    await page.waitForTimeout(5000)

    await page.locator("//button[text()='Upload Single File']").click()
    await page.waitForTimeout(5000)
})

// Multiple File Upload

test("Multiple files upload",async({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/");

    await page.locator("//input[@id='multipleFilesInput']").scrollIntoViewIfNeeded();
    await page.waitForTimeout(5000)

    const path = ["C:\\Users\\Archana.Gat\\OneDrive - Enterprise Minds\\Desktop\\abc.txt",
        "C:\\Users\\Archana.Gat\\OneDrive - Enterprise Minds\\Desktop\\xyz.txt",]

    await page.locator("//input[@id='multipleFilesInput']").setInputFiles(path)

    await page.waitForTimeout(5000)

    await page.locator("//button[@type='submit']").nth(1).click()
    await page.waitForTimeout(5000)
})
