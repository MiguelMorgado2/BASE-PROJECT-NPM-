import { test } from '../../fixtures'

test.describe('Drop Down Menus', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on drop down menus', async ({ playgroundPage }) => {
        await playgroundPage.click('playground', 'drop down button')
        await playgroundPage.expectText('playground', 'drop down profile', 'Profile')
        await playgroundPage.expectText('playground', 'drop down my account', 'My account')
        await playgroundPage.expectText('playground', 'drop down logout', 'Logout')
        await playgroundPage.click('playground', 'drop down profile')
        await playgroundPage.click('playground', 'drop down button')
        await playgroundPage.click('playground', 'drop down my account')
        await playgroundPage.click('playground', 'drop down button')
        await playgroundPage.click('playground', 'drop down logout')
        await playgroundPage.expectNotVisible('playground', 'drop down profile')
        await playgroundPage.expectNotVisible('playground', 'drop down my account')
        await playgroundPage.expectNotVisible('playground', 'drop down logout')
    })

})
