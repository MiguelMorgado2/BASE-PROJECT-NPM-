import { test } from '../../fixtures'

test.describe('Avatars', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should assert on avatars', async ({ playgroundPage }) => {
        await playgroundPage.expectVisibleAtIndex('playground', 'avatar', 0)
        await playgroundPage.expectVisibleAtIndex('playground', 'avatar', 1)
        await playgroundPage.expectVisible('playground', 'small avatar')
        await playgroundPage.expectCount('playground', 'avatar', 2)
    })

})
