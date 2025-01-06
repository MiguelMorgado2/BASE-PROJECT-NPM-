import { Given } from "@cucumber/cucumber"
import { ScenarioWorld } from "./setup/world";
import {JsonPayloadName} from "../env/global";
import {postResponse} from "../support/rest-helper";

Given(
    /^I create a new "([^"]*)" with "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string, jsonPayloadName: JsonPayloadName) {
        const {
            api: { request },
            globalConfig,
            globalAPIResponseVariables
        } = this

        console.log(`I create a new ${route} with ${jsonPayloadName}`)

        await postResponse(request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables)

    }
)