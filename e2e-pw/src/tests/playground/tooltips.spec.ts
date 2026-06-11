import { test } from '../../fixtures'

test.describe('Tooltips', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should assert on tooltip attributes', async ({ playgroundPage }) => {
        await playgroundPage.expectAttribute('playground', 'tooltip', 'title', 'This is a tooltip')
        await playgroundPage.expectNotAttribute('playground', 'tooltip', 'title', 'This is not a tooltip')
    })

})
