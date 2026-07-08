import { test, expect } from '@playwright/test';

test('upload file', async ({ page }) => {
    await page.goto('https://practice.expandtesting.com/upload');

    await page.locator('input[type="file"]').setInputFiles(
        'C:/Users/Shree/Downloads/Shreeyash_Wadhe_Resume (1).pdf'
    );

    await page.locator("#fileSubmit").click();
    await page.waitForTimeout(2000);

const text = await page.locator('#uploaded-files').textContent();
console.log(text);

   
});