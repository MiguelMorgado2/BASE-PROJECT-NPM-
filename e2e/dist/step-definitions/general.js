"use strict";

var _cucumber = require("@cucumber/cucumber");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I wait "([^"]*)" seconds?$/, async function (waitSeconds) {
  const {
    screen: {
      page
    }
  } = this;
  _logger.logger.log(`I wait ${waitSeconds} seconds`);
  await page.waitForTimeout(parseInt(waitSeconds, 10) * 1000);
});