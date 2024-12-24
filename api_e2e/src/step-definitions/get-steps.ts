import { Given } from "@cucumber/cucumber"
import { ScenarioWorld } from "./setup/world";
import {getResponse} from "../support/rest-helper";

Given(
    /^I retrieve "([^"]*)"$/,
    async function(this: ScenarioWorld, route: string) {
        const {
            api: { request },
            globalAPIResponseVariables,
            globalConfig
        } = this

        console.log(`I retrieve ${route}`)

        await getResponse(request, route, globalConfig, globalAPIResponseVariables)

    }
)

Given(
    /^I retrieve the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)"$/,
    async function(this: ScenarioWorld, index: string, route: string) {
        const {
            api: { request },
            globalConfig,
            globalAPIResponseVariables
        } = this

        console.log(`I retrieve the ${index} ${route}`)

        const currentIndex = Number(index.match(/\d/g)?.join(''))

        const routeAtIndex = `${route}/${currentIndex}`

        await getResponse(request, routeAtIndex, globalConfig, globalAPIResponseVariables)

    }
)