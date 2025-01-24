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
(0, _cucumber.Given)(/^the cookie "([^"]*)" is set with value "([^"]*)"$/, async function (cookieName, cookieValue) {
  const {
    screen: {
      page
    }
  } = this;
  _logger.logger.log(`Setting cookie ${cookieName} with value ${cookieValue}`);
  await page.context().addCookies([{
    name: cookieName,
    value: cookieValue,
    domain: 'pt.iqos.com',
    // You can make this dynamic if needed
    path: '/',
    httpOnly: false,
    secure: true
  }]);
  _logger.logger.log(`Cookie ${cookieName} has been set`);
});