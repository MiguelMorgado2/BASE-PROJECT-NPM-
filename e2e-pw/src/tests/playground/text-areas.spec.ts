import { test } from '../../fixtures'

test.describe('Text Areas', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on text areas', async ({ page, playgroundPage }) => {
        await page.waitForTimeout(3000)
        await playgroundPage.expectText('playground', 'textarea', 'Testing Talks Hub has been established to teach the community how to build world class automation frameworks using the latest tooling.')
        await playgroundPage.fill('playground', 'textarea', 'Learning to input to textarea.')
        await playgroundPage.expectValue('playground', 'textarea', 'Learning to input to textarea.')
    })

})
