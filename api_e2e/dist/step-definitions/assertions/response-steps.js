"use strict";

var _cucumber = require("@cucumber/cucumber");
var _test = require("@playwright/test");
(0, _cucumber.Then)(/^the response was (successful)?(unsuccessful)?$/, async function (success, unsuccessful) {
  const {
    globalAPIResponseVariables
  } = this;
  console.log("the response was ".concat(unsuccessful ? 'unsuccessful ' : 'successful ', " "));
  const response = globalAPIResponseVariables.response;
  if (unsuccessful) {
    (0, _test.expect)(response.ok()).toBeFalsy();
  } else {
    (0, _test.expect)(response.ok()).toBeTruthy();
  }
});
(0, _cucumber.Then)(/^the response status code is (\d*)$/, async function (statusCode) {
  const {
    globalAPIResponseVariables
  } = this;
  console.log("the response status code is ".concat(statusCode));
  const response = globalAPIResponseVariables.response;
  (0, _test.expect)(response.status()).toBe(Number(statusCode));
});