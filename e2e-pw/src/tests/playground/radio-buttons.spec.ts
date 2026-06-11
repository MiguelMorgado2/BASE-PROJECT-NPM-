import { test } from '../../fixtures'

test.describe('Radio Buttons', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on radio buttons', async ({ playgroundPage }) => {
        await playgroundPage.expectText('playground', 'female label', 'Female')
        await playgroundPage.expectText('playground', 'male label', 'Male')
        await playgroundPage.expectNotText('playground', 'female label', 'Male')
        await playgroundPage.expectNotText('playground', 'male label', 'Female')
        await playgroundPage.expectChecked('playground', 'female')
        await playgroundPage.expectNotChecked('playground', 'male')
        await playgroundPage.check('playground', 'male')
        await playgroundPage.expectChecked('playground', 'male')
        await playgroundPage.expectNotChecked('playground', 'female')
        await playgroundPage.check('playground', 'female')
        await playgroundPage.expectChecked('playground', 'female')
        await playgroundPage.expectNotChecked('playground', 'male')
    })

})
