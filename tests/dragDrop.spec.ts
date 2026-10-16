import{test,Page, expect} from '@playwright/test'

test("Drag and Drop",async({page}) =>{
    await page.goto("https://the-internet.herokuapp.com/", { waitUntil: 'networkidle' });

    await page.locator("//a[text()='Drag and Drop']").click({timeout:5000});

    await page.waitForTimeout(5000)
    const sourceBox = page.locator("#column-a")
    const targetBox = page.locator("#column-b")

    await sourceBox.dragTo(targetBox)

    await expect(sourceBox).toHaveText('B')

    await page.waitForTimeout(5000)

})