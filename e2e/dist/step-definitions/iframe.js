"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _htmlBehavior = require("../support/html-behavior");
var _webElementHelper = require("../support/web-element-helper");
var _logger = require("../logger");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, async function (elementKey, iframeKey, inputValue) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I fill in the ${elementKey} input on the ${iframeKey} iframe with ${inputValue}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
    if (elementIframe) {
      const elementStable = await (0, _waitForBehavior.waitForSelectorInIframe)(elementIframe, elementIdentifier);
      if (elementStable) {
        await (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, inputValue);
        return {
          result: _waitForBehavior.waitForResult.PASS
        };
      } else {
        return {
          result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
          replace: elementKey
        };
      }
    } else {
      return {
        result: _waitForBehavior.waitForResult.ELEMENT_NOT_AVAILABLE,
        replace: iframeKey
      };
    }
  }, globalConfig, {
    target: iframeKey
  });
});