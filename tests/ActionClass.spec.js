const { test, expect } = require('@playwright/test');

test('Action Class-Text Input',async({page})=>{
    await page.goto('https://www.letskodeit.com/practice')
    await page.locator('id=autosuggest').fill("Hello")
    await page.locator('id=autosuggest').fill("bye")
})
