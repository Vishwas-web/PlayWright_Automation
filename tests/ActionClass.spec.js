const { test, expect } = require('@playwright/test');

test('Action Class-Text Input',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    await page.locator('id=autosuggest').fill("Hello")
    await page.locator('id=autosuggest').fill("bye")
});

test('CheckBox Radio Buttons',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    //Selecting an CheckBox.
    await page.locator('id=bmwcheck').click()
    expect(page.locator('id=bmwcheck')).toBeChecked()
    //Taking Screenshot
    await page.screenshot({ path: './screenShot/screenshot.png', fullPage: true })
    //Selecting an Radio button.
    await page.locator('id=bmwradio').click();
    //Taking Screenshot
    await page.screenshot({ path: './screenShot/screenshot.png', fullPage: true })
});

test('Select Options',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    //Selecting One Value From the DropDown
    await page.locator('id=carselect').selectOption('bmw')
    //Taking Screenshot
    await page.screenshot({ path: './screenShot/screenshot.png', fullPage: true })
    //Selecting Mutiple Records
    await page.locator('id=multiple-select-example').selectOption(['apple'],['orange'],['peach'])
    //Taking Screenshot
    await page.screenshot({ path: './screenShot/screenshot.png', fullPage: true })
});