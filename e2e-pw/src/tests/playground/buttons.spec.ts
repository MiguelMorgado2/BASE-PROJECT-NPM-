import { test, expect } from '../../fixtures'

test.describe('Buttons', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on buttons at index', async ({ playgroundPage }) => {
        await playgroundPage.clickAtIndex('my button', 0)
        await playgroundPage.expectTextAtIndex('my button', 0, 'One')
        await playgroundPage.clickAtIndex('my button', 1)
        await playgroundPage.expectTextAtIndex('my button', 1, 'Two')
        await playgroundPage.clickAtIndex('my button', 2)
        await playgroundPage.expectTextAtIndex('my button', 2, 'Three')
    })

})
