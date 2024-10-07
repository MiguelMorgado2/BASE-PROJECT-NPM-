"use strict";

var _cucumber = require("@cucumber/cucumber");
var _navigationBehavior = require("../support/navigation-behavior");
var _waitForBehavior = require("../support/wait-for-behavior");
var _logger = require("../logger");
(0, _cucumber.Given)(/^I am on the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I am on the ${pageId} page`);
  await (0, _navigationBehavior.navigateToPage)(page, pageId, globalConfig);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig), globalConfig, {
    target: pageId,
    type: 'page'
  });
});
(0, _cucumber.Given)(/^I am directed to the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I am directed to the ${pageId} page`);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig), globalConfig, {
    target: pageId,
    type: 'page'
  });
});
(0, _cucumber.Given)(/^I refresh the "([^"]*)" page$/, async function (pageId) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`I refresh the ${pageId} page`);
  await (0, _navigationBehavior.reloadPage)(page);
  await (0, _waitForBehavior.waitFor)(() => (0, _navigationBehavior.currentPathMatchesPageId)(page, pageId, globalConfig), globalConfig, {
    target: pageId,
    type: 'page',
    timeout: 30000
  });
});