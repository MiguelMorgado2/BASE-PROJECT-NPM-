import { test, expect } from '../fixtures'

test.describe('Home Page', () => {

    test('should display the header logo', async ({ homePage }) => {
        await homePage.open()
        await homePage.expectHeaderVisible()
    })

    test('should navigate to login when clicking login button', async ({ homePage, loginPage }) => {
        await homePage.open()
        await homePage.clickLogin()
        await loginPage.waitForPage('login')
    })

})
