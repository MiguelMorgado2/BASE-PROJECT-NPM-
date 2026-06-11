import { test } from '../../fixtures'

test.describe('Switches', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on switches', async ({ playgroundPage }) => {
        await playgroundPage.expectChecked('playground', 'switch one')
        await playgroundPage.uncheck('playground', 'switch one')
        await playgroundPage.expectNotChecked('playground', 'switch one')
        await playgroundPage.check('playground', 'switch one')
        await playgroundPage.expectChecked('playground', 'switch one')
        await playgroundPage.expectNotEnabled('playground', 'switch two')
    })

})
