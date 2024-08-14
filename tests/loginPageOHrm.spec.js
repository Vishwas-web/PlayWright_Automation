const { test, expect } = require('@playwright/test');

test('Login To Orange HRM',async({page})=>{
    //Loggin to OrangeHRM Application.
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    await page.getByPlaceholder('username').fill("Admin")
    await page.screenshot({ path: './screenShot/OrangeHRM1.png', fullPage: true })
    await page.getByPlaceholder('password').fill("admin123")
    await page.screenshot({ path: './screenShot/OrangeHRM2.png', fullPage: true })
    await page.getByRole('button', { name: /login/i }).click()
    // await page.screenshot({ path: './screenShot/OrangeHRM.png', fullPage: true })
    await expect(page.locator('xpath=//span/h6')).toHaveText('Dashboard') //Assertion
});