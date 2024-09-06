import {Given, setDefaultTimeout} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000 * 2)

Given(
  /^I am on the "(.*)" page$/,
  async function(pageId: string) {
    const {
      screen: {page},
    } = this;
    console.log(`I am on the ${pageId} page`);
    await page.goto("https://hub.testingtalks.com.au/")
  }
)