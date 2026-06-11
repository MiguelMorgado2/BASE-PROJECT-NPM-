import { test } from '../../fixtures'

test.describe('Select Boxes', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on select boxes', async ({ playgroundPage }) => {
        await playgroundPage.selectOption('playground', 'age', '10')
        await playgroundPage.expectValue('playground', 'age', '10')
        await playgroundPage.selectOption('playground', 'age', '20')
        await playgroundPage.expectValue('playground', 'age', '20')
        await playgroundPage.selectOption('playground', 'age', '30')
        await playgroundPage.expectValue('playground', 'age', '30')
    })

})
