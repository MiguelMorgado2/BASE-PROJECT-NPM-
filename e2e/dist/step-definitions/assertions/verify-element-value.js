"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
(0, _cucumber.Then)(/^the "([^"]*)" should contain the text "(.*)"$/, async function (elementKey, expectedElementText) {
  const {
    screen: {
      page
    },
    globalVariables,
    globalConfig
  } = this;
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalVariables, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementText = await page.textContent(elementIdentifier);
    return elementText?.includes(expectedElementText);
  });
});