import { Given, setDefaultTimeout } from "@cucumber/cucumber";

setDefaultTimeout(10000);

Given (
    /^I am on the home page$/,
    async function () {
        console.log(" I am on the home page");
        await global.page.goto("https://hub.testingtalks.com.au/")
    }

)