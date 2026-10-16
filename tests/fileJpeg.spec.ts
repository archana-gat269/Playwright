
//Handle the download event and save the file
import { test, expect } from '@playwright/test';
test('Handle Download Event and Save PDF', async ({ context}) => {
const page = await context.newPage();
    // Step 1: Open the website
    await page.goto(
        "https://filesamples.com/formats/jpeg");
     const downloadPromise = page.waitForEvent('download'); 
       await page.getByRole('link',{name:'Download'}).nth(1).click();
       const download = await downloadPromise;

       await download.saveAs('./tests/' + download.suggestedFilename());
    });