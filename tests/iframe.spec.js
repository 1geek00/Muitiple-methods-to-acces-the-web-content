import {test,expect} from 'playwright/test';

test('iframe',async ({page}) =>{
      await page.goto("https://jqueryui.com/droppable/");

      const iframe= page.frameLocator('.demo-frame');
      const dragelement=iframe.locator("[id='draggable']");
      const dropelement=iframe.locator("[id='droppable']");

      await dragelement.dragTo(dropelement);
      await page.waitForTimeout(3000);
})