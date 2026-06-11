import { test } from '../../fixtures'

test.describe('Cards', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should assert on cards', async ({ playgroundPage }) => {
        await playgroundPage.expectText('playground', 'card header', 'Word of the Day')
        await playgroundPage.expectText('playground', 'card main', 'Automation')
        await playgroundPage.expectText('playground', 'card type', 'noun')
        await playgroundPage.expectText('playground', 'card overview', 'Automate the execution of tests')
        await playgroundPage.expectText('playground', 'card overview', '"compares actual with expected"')
        await playgroundPage.expectText('playground', 'card action', 'Learn More')
    })

})
