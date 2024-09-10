import { Then } from '@cucumber/cucumber'
import { ElementKey } from '../../env/global';
import {getElementLocator} from "../../support/web-element-helper";
import { waitFor } from '../../support/wait-for-behavior';

Then(
    /^the "([^"]*)" should contain the text "(.*)"$/,
    async function(elementKey: ElementKey, expectedElementText: string) {
        const {
            screen: { page },
            globalVariables,
            globalConfig,
        } = this;

        const elementIdentifier = getElementLocator(page, elementKey, globalVariables, globalConfig)

        await waitFor(async () => {
            const elementText = await page.textContent(elementIdentifier)
            return elementText?.includes(expectedElementText);
        });

    }
)