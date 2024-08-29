import { Then, setDefaultTimeout } from '@cucumber/cucumber'
import { expect } from '@playwright/test'

setDefaultTimeout(10000)

Then(
    /^the contacts header should contain the text Contacts$/,
    async function() {

        console.log("the contacts header should contain the text Contacts")

        const content = await global.page.textContent("[data-id='contacts']")

        expect(content).toBe('Contacts')

    }
)