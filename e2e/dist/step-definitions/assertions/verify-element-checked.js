"use strict";

var _cucumber = require("@cucumber/cucumber");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _webElementHelper = require("../../support/web-element-helper");
(0, _cucumber.Then)(/^the "([^"]*)" (?:check box|radio button) should( not)? be checked$/, async function (elementKey, negate) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`the ${elementKey} check box|radio button should ${negate ? 'not ' : ''}be checked`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const isElementVisible = await page.isChecked(elementIdentifier);
    return isElementVisible === !negate;
  });
});