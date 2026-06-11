import { test, expect } from '../../fixtures'

test.describe('Stored Values', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should interact and assert on stored values', async ({ page, playgroundPage }) => {
        // Read the first value from the page
        const firstValue = await page.locator("[data-id='first-value']").textContent() ?? ''

        // Assert second value equals first value
        await playgroundPage.expectEqualText('playground', 'second value', firstValue)

        // Assert fourth value does NOT equal first value
        const fourthText = await page.locator("[data-id='fourth-value']").textContent() ?? ''
        expect(fourthText).not.toBe(firstValue)

        // Assert fourth value CONTAINS first value
        expect(fourthText).toContain(firstValue)

        // Assert fifth value contains first value
        const fifthText = await page.locator("[data-id='fifth-value']").textContent() ?? ''
        expect(fifthText).toContain(firstValue)

        // Assert third value does NOT contain first value
        const thirdText = await page.locator("[data-id='third-value']").textContent() ?? ''
        expect(thirdText).not.toContain(firstValue)
    })

})
