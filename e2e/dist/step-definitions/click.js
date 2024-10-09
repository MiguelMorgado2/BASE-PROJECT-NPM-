"use strict";

var _cucumber = require("@cucumber/cucumber");
var _htmlBehavior = require("../support/html-behavior");
var _waitForBehavior = require("../support/wait-for-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
(0, _cucumber.When)(/^I click the "([^"]*)" (?:button|link)$/, async function (elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I click the ${elementKey} (?:button|link|icon|element|radio button)`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      await (0, _htmlBehavior.clickElement)(page, elementIdentifier);
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});
(0, _cucumber.When)(/^I click the "([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd)" "([^"]*)" (?:button|link)$/, async function (elementPosition, elementKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I click ${elementPosition} ${elementKey} button|link`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const pageIndex = Number(elementPosition.match(/\d/g)?.join('')) - 1;
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      await (0, _htmlBehavior.clickElementAtIndex)(page, elementIdentifier, pageIndex);
      return _waitForBehavior.waitForResult.PASS;
    }
    return _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE;
  }, globalConfig, {
    target: elementKey
  });
});