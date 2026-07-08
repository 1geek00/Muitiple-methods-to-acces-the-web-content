import {test,expect} from '@playwright/test';

test('dropdown', async({page})=>{
    await page.goto("https://practice.expandtesting.com/dropdown");
   await page.locator("#dropdown").selectOption({label:"Option 1"});
    await page.locator("#dropdown").selectOption({label:"Option 2"});

   
    await page.locator("#elementsPerPageSelect").selectOption("100");

   await page.locator("#country").selectOption({ value: "AL" });

  const country = page.locator("#Country");

const allElements = await country.locator("option").all();
let ddstatus=false;
for (let i = 0; i < allElements.length; i++) {
    const element = allElements[i];

    const value = await element.textContent();
    if (value.includes("India")){
       ddstatus=true;
       break;
    }

    console.log("Country is:", value);
}
});