import {test,expect} from 'playwright/test';
test('windoe heighr chagin',async({page})=>{
    await page.goto("https://docs.docker.com/ai/sandboxes/get-started/");
    
    await page.setViewportSize({
  width: 1000,
  height: 500
});
await page.waitForTimeout(3000)
})