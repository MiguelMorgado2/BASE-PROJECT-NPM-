"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../support/wait-for-behavior");
var _htmlBehavior = require("../support/html-behavior");
var _webElementHelper = require("../support/web-element-helper");
(0, _cucumber.Then)(/^I fill in the "([^"]*)" input on the "([^"]*)" iframe with "([^"]*)"$/, async function (elementKey, iframeName, input) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`I fill in the ${elementKey} input on the ${iframeName} iframe with ${input}`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const iframeIdentifier = (0, _webElementHelper.getElementLocator)(page, iframeName, globalConfig);
  const elementIframe = await (0, _htmlBehavior.getIframeElement)(page, iframeIdentifier);
  await (0, _waitForBehavior.waitFor)(async () => {
    const result = await page.waitForSelector(iframeIdentifier, {
      state: 'visible'
    });
    if (result) {
      if (elementIframe) {
        await (0, _htmlBehavior.inputValueOnIframe)(elementIframe, elementIdentifier, input);
      }
    }
    return result;
  });
});