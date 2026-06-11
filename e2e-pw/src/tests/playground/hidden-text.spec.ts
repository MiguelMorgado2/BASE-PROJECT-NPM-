import { test } from '../../fixtures'

test.describe('Hidden Text', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on hidden and displayed text', async ({ playgroundPage }) => {
        await playgroundPage.expectVisible('playground', 'show hide text')
        await playgroundPage.expectText('playground', 'show hide text', 'This is visible')
        await playgroundPage.click('playground', 'show hide button')
        await playgroundPage.expectNotVisible('playground', 'show hide text')
    })

})
