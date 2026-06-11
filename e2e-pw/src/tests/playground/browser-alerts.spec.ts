import { test } from '../../fixtures'

test.describe('Browser Alerts', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on browser alerts', async ({ page, playgroundPage }) => {
        page.on('dialog', dialog => dialog.accept())
        await playgroundPage.click('playground', 'browser alert')

        page.on('dialog', dialog => dialog.dismiss())
        await playgroundPage.click('playground', 'browser alert')
    })

})
