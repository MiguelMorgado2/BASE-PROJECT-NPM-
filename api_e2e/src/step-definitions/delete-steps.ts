import { Given } from "@cucumber/cucumber"
import { ScenarioWorld} from "./setup/world";
import {deleteResponse} from "../support/rest-helper";

Given(
    /^I delete the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)"$/,
    async function(this: ScenarioWorld, index: string, route: string) {
        const {
            api: { request },
            globalConfig,
            globalAPIResponseVariables
        } = this

        console.log(`I delete the ${index} ${route}`)

        const currentIndex = Number(index.match(/\d/g)?.join(''))

        const routeAtIndex = `${route}/${currentIndex}`

        await deleteResponse(request, routeAtIndex, globalConfig, globalAPIResponseVariables)

    }
)