"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _htmlBehavior = require("../../support/html-behavior");
var _webElementHelper = require("../../support/web-element-helper");
var _logger = require("../../logger");
(0, _cucumber.Then)(/^the "([^"]*)" (?:check box|radio button|switch) should( not)? be checked$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} check box|radio button should ${negate ? 'not ' : ''}be checked`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const isElementChecked = await (0, _htmlBehavior.elementChecked)(page, elementIdentifier);
      if (isElementChecked === !negate) {
        return _waitForBehavior.waitForResult.PASS;
      } else {
        return _waitForBehavior.waitForResult.FAIL;
      }
    } else {
      return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
    }
  }, globalConfig, {
    target: elementKey,
    failureMessage: `🧨 Expected ${elementKey} to ${negate ? 'not ' : ''}be checked 🧨`
  });
});