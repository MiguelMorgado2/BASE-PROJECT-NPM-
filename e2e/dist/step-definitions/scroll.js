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
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      await (0, _htmlBehavior.scrollElementIntoView)(page, elementIdentifier);
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});