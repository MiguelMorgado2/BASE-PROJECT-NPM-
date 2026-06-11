import { test, expect } from '../../fixtures'

test.describe('Windows', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert with new windows', async ({ page, context, playgroundPage }) => {
        const [newPage] = await Promise.all([
            context.waitForEvent('page'),
            playgroundPage.click('playground', 'open window'),
        ])
        await newPage.waitForLoadState()

        expect(await newPage.title()).toContain('Contacts')
        expect(await page.title()).toContain('Playground')

        await newPage.locator("[data-id='search']").fill('Sloane Juarez')
        await expect(newPage.locator("[data-id='contact']")).toBeVisible()
        await expect(newPage.locator("[data-id='name']")).toHaveText('Sloane Juarez')
        await expect(newPage.locator("[data-id='gender']")).toHaveText('Female')
        await expect(newPage.locator("[data-id='address']")).toHaveText('8162 Tincidunt Rd., Ludhiana')
        await expect(newPage.locator("[data-id='edit-button']")).toBeVisible()
        await expect(newPage.locator("[data-id='delete-button']")).toBeVisible()
    })

})
