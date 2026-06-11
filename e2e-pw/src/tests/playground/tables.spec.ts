import { test, expect } from '../../fixtures'

test.describe('Tables', () => {

    test.beforeEach(async ({ homePage, playgroundPage }) => {
        await homePage.open()
        await homePage.clickPlayground()
        await playgroundPage.waitForPage('playground')
    })

    test('should assert on table data', async ({ page }) => {
        const expectedData = [
            ['159', '6', '24', '4'],
            ['237', '9', '37', '4.3'],
            ['262', '16', '24', '6'],
            ['305', '3.7', '67', '4.3'],
            ['356', '16', '49', '3.9'],
        ]

        const rows = page.locator("[data-id='basic-table'] tbody tr")
        const rowCount = await rows.count()

        for (let i = 0; i < rowCount; i++) {
            const cells = rows.nth(i).locator('td')
            const cellCount = await cells.count()
            for (let j = 0; j < cellCount; j++) {
                const cellText = await cells.nth(j).textContent()
                expect(cellText?.trim()).toBe(expectedData[i][j])
            }
        }
    })

})
