import {test as it } from '@playwright/test'

it.describe('FORM PAGE TYPE', () => {

    it("Fill all fields", async ({page}) => {
        await page.goto('https://www.lambdatest.com/selenium-playground/input-form-demo')
        await page.locator('#name').fill('John Doe')
        await page.locator('[class = "w-full border border-gray-90 text-size-14 rounded mt-10 px-10 py-5"][type = email]')
        .fill(('johndoe@example.com'))
        await page.locator('input[placeholder = "Password"]').fill('1234567890')
        //await page.locator('[for = "companyname"]~ input[placeholder="company"]').fill("LLC Happy")
        await page.locator('#websitename').fill('https://www.example.com')
        await page.selectOption('select[name = "country"]', {label: "United States"})
        await page.locator('label:has-text("City*") ~ input#inputCity').fill("California")
        await page.getByPlaceholder('Address 1').fill('123 Main St')
    })    
})