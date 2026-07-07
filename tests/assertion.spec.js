import {test,expect} from 'playwright/test';

test('asseriton in playwright',async({page})=>{
    await page.goto('https://search.brave.com/search?q=nilay+kulkarni');

    await expect(page).toHaveURL('https://search.brave.com/search?q=nilay+kulkarni');
    await expect(page).toHaveTitle("nilay kulkarni")

    //assert text;
    await expect(page.locator("[aria-lable=Search]").first()).toHaveText('nilay kulkarni')
})

//url-toHaveUrl()
//title-toHvaeTitle()
//text-toHvaeText()
//Editable=toBeEditable()
//visible-toBeisible()
//Disabled-toBeDisabled()
//Empty-toBeEmpty()
//Count-toHaveCount()