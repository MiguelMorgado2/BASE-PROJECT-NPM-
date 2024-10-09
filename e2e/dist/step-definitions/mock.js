"use strict";

var _cucumber = require("@cucumber/cucumber");
var _mockBehavior = require("../support/mock-behavior");
var _logger = require("../logger");
(0, _cucumber.Given)(/^the "([^"]*)" endpoint for "([^"]*)" is mocked with "([^"]*)"$/, async function (mockServerKey, mockConfigKey, mockPayloadKey) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${mockServerKey} endpoint for ${mockConfigKey} is mocked with ${mockPayloadKey}`);
  await (0, _mockBehavior.interceptResponse)(page, mockServerKey, mockConfigKey, mockPayloadKey, globalConfig);
});