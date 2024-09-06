"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.setDefaultTimeout)(60 * 1000 * 2);
(0, _cucumber.Given)(/^I am on the "(.*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    }
  } = this;
  console.log(`I am on the ${pageId} page`);
  await page.goto("https://hub.testingtalks.com.au/");
});