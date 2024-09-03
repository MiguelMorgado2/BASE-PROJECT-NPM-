import { Then, setDefaultTimeout } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

setDefaultTimeout(10000)

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(elementKey: string, expectedElementText: string) {

        console.log(`the ${elementKey} should contain the text ${expectedElementText}`)

        const content = await global.page.textContent("[data-id='contacts']")

        expect(content).toBe(expectedElementText)

    }
)

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(elementKey: string) {

        console.log(`the ${elementKey} should be displayed`)

        const locator = await global.page.locator("[data-id='playground-button']")

        await expect(locator).toBeVisible()
    }
)