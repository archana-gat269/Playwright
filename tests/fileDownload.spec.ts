//Handle the download event and save the file
// import { test, expect } from '@playwright/test';
// import path from 'path';
// import fs from 'fs';

//  test('Download Text File', async ({ page }) => {

//     await page.goto(
//         'https://testautomationpractice.blogspot.com/p/download-files_25.html'
//     );

//     // Step 1: Enter text to generate the file
//     await page.locator("//textarea[@id='inputText']")
//         .fill('This is my Playwright file download test.');

//     // Step 2: Click Generate
//     await page.locator("//button[@id='generateTxt']").click();

//     // Step 3: Locate the Download text file link
//     const downloadLink = page.locator("//a[@id='txtDownloadLink']");

//     // Wait for the download event before clicking
//     const downloadPromise = page.waitForEvent('download', {
//     });

//     // Step 4: Click Download text file
//     await downloadLink.waitFor({ state: 'visible' });
//     await downloadLink.click();

//     // Step 5: Capture the download
//     const download = await downloadPromise;

//     // Step 6: Validate the downloaded filename
//     expect(download.suggestedFilename()).toBe('info.txt');

//     // Step 7: Create downloads folder
//     const downloadDir = path.join(process.cwd(), 'downloads');
//     fs.mkdirSync(downloadDir, { recursive: true });

//     // Step 8: Save the file
//     const filePath = path.join(downloadDir, 'info.txt');
//     await download.saveAs(filePath);

//     // Step 9: Verify the file exists
//     expect(fs.existsSync(filePath)).toBeTruthy();
//     expect(download.suggestedFilename()).toBe('info.txt');

//     console.log('File downloaded successfully:', filePath);

//     // Keep the page open briefly so you can observe it
//     await page.waitForTimeout(10000);

//  });

//download pdf file

import { test, expect } from '@playwright/test';
import path from 'path';
import fs from 'fs';

test('Download PDF File', async ({ page }) => {

    // Step 1: Open the website
    await page.goto(
        'https://testautomationpractice.blogspot.com/p/download-files_25.html'
    );

    // Step 2: Enter text (if PDF generation requires it)
    await page.locator("//textarea[@id='inputText']")
        .fill('This is my Playwright PDF download test.');

    // Step 3: Click Generate PDF
    // Verify this button ID in your page
    await page.locator("//button[@id='generatePdf']").click();

    // Step 4: Locate the PDF download link
    const downloadLink = page.locator("//a[@id='pdfDownloadLink']");

    // Step 5: Wait for the download event
    const downloadPromise = page.waitForEvent('download', {
        timeout: 60000
    });

    // Step 6: Wait for the link and click it
    await downloadLink.waitFor({ state: 'visible' });
    await downloadLink.click();

    // Step 7: Capture the download
    const download = await downloadPromise;

    // Step 8: Validate the PDF filename
    expect(download.suggestedFilename()).toMatch(/\.pdf$/i);

    // Step 9: Create the downloads folder
    const downloadDir = path.join(process.cwd(), 'downloads');
    fs.mkdirSync(downloadDir, { recursive: true });

    // Step 10: Save the PDF
    const filePath = path.join(
        downloadDir,
        download.suggestedFilename()
    );

    await download.saveAs(filePath);

    // Step 11: Verify that the file exists
    expect(fs.existsSync(filePath)).toBeTruthy();

    // Step 12: Verify that the file is not empty
    expect(fs.statSync(filePath).size).toBeGreaterThan(0);

    console.log('PDF downloaded successfully:', filePath);

});

// //PDF file with brwser

// //download pdf file

// // import { test, expect } from '@playwright/test';
// // import path from 'path';
// // import fs from 'fs';

// //  test('Download PDF File in Browser', async ({ page }) => {

// //     // Step 1: Open the website
// //     await page.goto(
// //         'https://testautomationpractice.blogspot.com/p/download-files_25.html'
// //     );

// // await page.locator(
// //     "//button[@onClick='generatePDFFile()']"
// // ).click();
// //  await page.waitForTimeout(30000)

// // });





