import { test } from '../../fixtures'

test.describe('Inputs', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on inputs', async ({ playgroundPage }) => {
        await playgroundPage.expectValue('playground', 'outlined required', 'Testing')
        await playgroundPage.expectValue('playground', 'outlined disabled', 'Talks')
        await playgroundPage.expectValue('playground', 'outlined read only', 'Hub')
        await playgroundPage.expectEnabled('playground', 'outlined required')
        await playgroundPage.expectNotEnabled('playground', 'outlined disabled')
        await playgroundPage.fill('playground', 'outlined required', 'Testing Talks Online')
        await playgroundPage.expectValue('playground', 'outlined required', 'Testing Talks Online')
    })

    test('should assert on input validation', async ({ playgroundPage }) => {
        await playgroundPage.expectText('playground', 'outlined error', 'Error')
        await playgroundPage.expectText('playground', 'outlined error text', 'Incorrect entry.')
    })

    test('should interact and assert on autocomplete inputs', async ({ playgroundPage }) => {
        await playgroundPage.fill('playground', 'movies', 'The G')
        await playgroundPage.click('playground', 'the godfather')
        await playgroundPage.expectValue('playground', 'movies', 'The Godfather')
        await playgroundPage.expectNotValue('playground', 'movies', 'The Godfather: Part II')
    })

})
