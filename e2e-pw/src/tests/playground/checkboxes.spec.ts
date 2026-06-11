import { test } from '../../fixtures'

test.describe('Checkboxes', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on checkboxes', async ({ playgroundPage }) => {
        await playgroundPage.check('playground', 'blue')
        await playgroundPage.check('playground', 'green')
        await playgroundPage.check('playground', 'grey')
        await playgroundPage.expectChecked('playground', 'blue')
        await playgroundPage.expectNotChecked('playground', 'purple')
        await playgroundPage.expectChecked('playground', 'green')
        await playgroundPage.expectChecked('playground', 'grey')
        await playgroundPage.expectNotChecked('playground', 'red')
        await playgroundPage.uncheck('playground', 'green')
        await playgroundPage.expectNotChecked('playground', 'green')
    })

})
