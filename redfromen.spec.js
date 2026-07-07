import {test,expect} from 'Playwright/test';

test('env reader',async({page})=>{
    await page.goto("process.get.env");
    //first enbled == require('dotenv).config();   in config file mean uncommit this 
    await page.locator('#apj').click();
    await page.locator("#amclksm").fill("shreeyash");
    await page.locator("0dwe").press(enter);

    console.log("Username is:"+process.env.USER_NAME)
    console.log("Password is:",+process.env.PASSWORD)
    
})