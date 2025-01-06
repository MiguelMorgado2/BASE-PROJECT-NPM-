"use strict";

var _cucumber = require("@cucumber/cucumber");
var _restHelper = require("../support/rest-helper");
(0, _cucumber.Given)(/^I create a new "([^"]*)" with "([^"]*)"$/, async function (route, jsonPayloadName) {
  const {
    api: {
      request
    },
    globalConfig,
    globalAPIResponseVariables
  } = this;
  console.log("I create a new ".concat(route, " with ").concat(jsonPayloadName));
  await (0, _restHelper.postResponse)(request, route, jsonPayloadName, globalConfig, globalAPIResponseVariables);
});