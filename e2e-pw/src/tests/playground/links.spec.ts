import { test } from '../../fixtures'

test.describe('Links & Buttons', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on links and buttons', async ({ playgroundPage }) => {
        await playgroundPage.click('playground', 'primary')
        await playgroundPage.expectText('playground', 'primary', 'Primary')
        await playgroundPage.expectNotEnabled('playground', 'secondary')
        await playgroundPage.expectEqualText('playground', 'secondary', 'Disabled')
        await playgroundPage.click('playground', 'third')
        await playgroundPage.expectText('playground', 'third', 'Link')
    })

})
