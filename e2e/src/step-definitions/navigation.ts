import { Given, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(10000);

Given (
    /^I am on the "([^"]*)" page$/,
    async function (pageId: string) {

        console.log(`I am on the ${pageId} page`);

        await global.page.goto("https://hub.testingtalks.com.au/")
    }

)