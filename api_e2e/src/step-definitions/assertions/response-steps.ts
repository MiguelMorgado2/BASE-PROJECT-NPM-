import { Then } from "@cucumber/cucumber"
import { ScenarioWorld } from "../setup/world";
import { expect } from "@playwright/test"

Then(
    /^the response was (successful)?(unsuccesful)?$/,
    async function(this: ScenarioWorld, success: boolean, unsuccessful: boolean) {
        const {
            globalAPIResponseVariables
        } = this

        console.log(`the response was ${unsuccessful?'unsuccessful ':'successful '} `)

        const response = globalAPIResponseVariables.response

        if (unsuccessful) {
            expect(response.ok()).toBeFalsy()
        } else {
            expect(response.ok()).toBeTruthy()
        }

    }
)