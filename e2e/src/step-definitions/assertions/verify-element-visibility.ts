import { Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test'
import { ElementKey } from '../../env/global';
import { getElementLocator } from '../../support/web-element-helper';
import { waitFor } from '../../support/await-for-behavior';

Then(
    /^the "([^"]*)" should be displayed$/,
    async function(elementKey: ElementKey) {
        const {
            screen: { page },
            globalVariables,
            globalConfig,
        } = this;

        console.log(`the ${elementKey} should be displayed`)

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig);

        await waitFor(async () => {
            const isElementVisible = (await page.$(elementIdentifier)) != null;
            return isElementVisible;
        });
    }
)