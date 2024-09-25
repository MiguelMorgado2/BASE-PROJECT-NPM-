"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.Then)(/^I wait "([^"]*)" seconds?$/, async function (waitSeconds) {
  const {
    screen: {
      page
    }
  } = this;
  console.log(`I wait ${waitSeconds} seconds`);
  await page.waitForTimeout(parseInt(waitSeconds, 10) * 1000);
});