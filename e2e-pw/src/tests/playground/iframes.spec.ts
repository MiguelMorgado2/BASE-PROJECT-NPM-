import { test } from '../../fixtures'

test.describe('IFrames', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on iframes', async ({ page, playgroundPage }) => {
        await playgroundPage.scrollIntoView('playground', 'basic iframe')

        const iframeHandle = await page.locator("[id='basic-iframe']").contentFrame()

        await iframeHandle.locator("[data-id='search']").fill('Abraham Perry')
        await expect(iframeHandle.locator("[data-id='contact']")).toBeVisible()
        await expect(iframeHandle.locator("[data-id='full-name-label']")).toContainText('Name:')
        await expect(iframeHandle.locator("[data-id='name']")).toHaveText('Abraham Perry')
        await expect(iframeHandle.locator("[data-id='gender-label']")).toContainText('Gender:')
        await expect(iframeHandle.locator("[data-id='gender']")).toHaveText('Male')
        await expect(iframeHandle.locator("[data-id='address-label']")).toContainText('Address:')
        await expect(iframeHandle.locator("[data-id='address']")).toHaveText('Ap #826-8849 Vulputate Street, Laramie')
        await expect(iframeHandle.locator("[data-id='edit-button']")).toBeVisible()
        await expect(iframeHandle.locator("[data-id='delete-button']")).toBeVisible()
    })

})
