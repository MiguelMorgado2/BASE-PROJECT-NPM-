import {DataTable, Then} from "@cucumber/cucumber"
import { ScenarioWorld } from "../setup/world";
import { expect } from "@playwright/test"

Then(
    /^the response was (successful)?(unsuccessful)?$/,
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

Then(
    /^the response status code is (\d*)$/,
    async function(this: ScenarioWorld, statusCode: string) {
        const {
            globalAPIResponseVariables
        } = this

        console.log(`the response status code is ${statusCode}`)

        const response = globalAPIResponseVariables.response

        expect(response.status()).toBe(Number(statusCode))

    }
)

Then(
    /^the response json contains the attributes:$/,
    async function(this: ScenarioWorld, dataTable: DataTable) {
        const {
            globalAPIResponseVariables
        } = this

        console.log(`the response json contains the attributes: ${dataTable.raw()}`)

        const response = await globalAPIResponseVariables.response.json()

        const expected_response = dataTable.raw()

        for(let i = 0; i < expected_response.length; i++) {
            for(let j = 0; j < expected_response[i].length; j++) {
                expect(JSON.stringify(response)).toContain(expected_response[i][j])
            }
        }

    }
)

Then(
    /^the response text contains the attributes:$/,
    async function(this: ScenarioWorld, dataTable: DataTable) {
        const {
            globalAPIResponseVariables
        } = this

        console.log(`the response text contains the attributes: ${dataTable.raw()}`)

        const response = await globalAPIResponseVariables.response.text()

        const expected_response = dataTable.raw()

        for(let i = 0; i < expected_response.length; i++) {
            for(let j = 0; j < expected_response[i].length; j++) {
                expect(response).toContain(expected_response[i][j])
            }
        }

    }
)