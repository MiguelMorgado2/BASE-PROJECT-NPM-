"use strict";

var _cucumber = require("@cucumber/cucumber");
var _navigationBehavior = require("../support/navigation-behavior");
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalVariables,
    globalConfig
  } = this;
  console.log(`I am on the ${pageId} page`);
  globalVariables.currentScreen = pageId;
  await (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);
});