import { test, expect } from '../../fixtures'

test.describe('Mock API', () => {

    test.beforeEach(async ({ homePage }) => {
        await homePage.open()
    })

    test('should see REST users', async ({ homePage, playgroundPage }) => {
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
        await playgroundPage.expectTextAtIndex('playground', 'full name', 0, 'Leanne Graham')
    })

    test('should mock no users', async ({ page, homePage, playgroundPage }) => {
        await page.route('**/users', route => route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify([])
        }))
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
        await playgroundPage.expectNotVisible('common', 'full name label')
    })

    test('should mock a single user', async ({ page, homePage, playgroundPage }) => {
        await page.route('**/users', route => route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify([{ id: 1, name: 'Todd Smith' }])
        }))
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
        await playgroundPage.expectNotTextAtIndex('playground', 'full name', 0, 'Leanne Graham')
        await playgroundPage.expectTextAtIndex('playground', 'full name', 0, 'Todd Smith')
    })

    test('should mock multiple users', async ({ page, homePage, playgroundPage }) => {
        await page.route('**/users', route => route.fulfill({
            contentType: 'application/json',
            body: JSON.stringify([
                { id: 1, name: 'Todd Smith' },
                { id: 2, name: 'Natalie Ford' },
                { id: 3, name: 'River Wild' }
            ])
        }))
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
        await playgroundPage.expectTextAtIndex('playground', 'full name', 0, 'Todd Smith')
        await playgroundPage.expectTextAtIndex('playground', 'full name', 1, 'Natalie Ford')
        await playgroundPage.expectTextAtIndex('playground', 'full name', 2, 'River Wild')
    })

})
