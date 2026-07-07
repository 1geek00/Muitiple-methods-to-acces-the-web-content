import {test,expect} from 'playwright/test';

test('mouse hover', async ({page}) =>{
  await page.goto('https://search.brave.com/search?q=tester+talk');
  //click
  await page.getByRole('link',{name:'Tester Talk'}).first().click();
  //double click
 await page.getByRole('link',{name:'Tester Talk'}).first().dblclick();
  //mouse right click
  await page.getByRole('link',{name:'Tester Talk'}).first().click({button:'right'});
  //mouse left click
  await page.getByRole('link',{name:'Tester Talk'}).first().click({button:'left'});
  //mouse hover

  await page.locator("[aria-lable='Search by voice']").hover();






await page.waitForTimeout(3000);
});