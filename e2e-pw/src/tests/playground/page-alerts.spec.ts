import { test } from '../../fixtures'

test.describe('Page Alerts', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should assert on page alerts', async ({ playgroundPage }) => {
        await playgroundPage.expectText('playground', 'error alert', 'This is an error alert — check it out!')
        await playgroundPage.expectText('playground', 'warning alert', 'This is a warning alert — check it out!')
        await playgroundPage.expectText('playground', 'info alert', 'This is an info alert — check it out!')
        await playgroundPage.expectText('playground', 'success alert', 'This is a success alert — check it out!')
    })

})
