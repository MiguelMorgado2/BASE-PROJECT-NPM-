import { Given } from "@cucumber/cucumber";

Given (
    /^I am on the home page$/,
    async function () {
        console.log(" I am on the home page");
        await global.page.goto("https://hub.testingtalks.com.au/")
    }

)