import {test,expect} from 'playwright/test';

test('asseriton in playwright',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

    page.on('dialog',async(d)=>{
        
       expect(d.type()).toContain("alert")
    })
    await page.locator('//*[@id="content"]/div/ul/li[1]/button').click();
    
})