import { test } from '../../fixtures'

test.describe('Page Refresh', () => {

    test('should refresh the browser and be on the expected page', async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.reload()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
        await playgroundPage.reload()
        await playgroundPage.waitForPage('playground')
    })

})
