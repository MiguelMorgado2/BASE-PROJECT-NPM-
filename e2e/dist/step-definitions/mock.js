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
    },
    globalConfig
  } = this;
  _logger.logger.log(`Setting cookie ${cookieName} with value ${cookieValue}`);
  const hostName = process.env.UI_AUTOMATION_HOST ?? 'localhost';
  const hostUrl = globalConfig.hostsConfig[hostName];
  const domain = new URL(hostUrl).hostname;
  await page.context().addCookies([{
    name: cookieName,
    value: cookieValue,
    domain,
    path: '/',
    httpOnly: false,
    secure: true
  }]);
  _logger.logger.log(`Cookie ${cookieName} has been set on domain ${domain}`);
});