"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../support/html-behavior");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I scroll to the "([^"]*)"$/, async function (elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I scroll to the ${elementKey}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(elementIdentifier, {
      state: 'visible'
    });
    if (result) {
      await (0, _htmlBehavior.scrollIntoView)(page, elementIdentifier);
    }
    return result;
  });
});