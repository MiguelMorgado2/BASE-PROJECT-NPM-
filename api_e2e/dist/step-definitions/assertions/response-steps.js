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
(0, _cucumber.Then)(/^the response json contains the attributes:$/, async function (dataTable) {
  const {
    globalAPIResponseVariables
  } = this;
  console.log("the response json contains the attributes: ".concat(dataTable.raw()));
  const response = await globalAPIResponseVariables.response.json();
  const expected_response = dataTable.raw();
  for (let i = 0; i < expected_response.length; i++) {
    for (let j = 0; j < expected_response[i].length; j++) {
      (0, _test.expect)(JSON.stringify(response)).toContain(expected_response[i][j]);
    }
  }
});
(0, _cucumber.Then)(/^the response text contains the attributes:$/, async function (dataTable) {
  const {
    globalAPIResponseVariables
  } = this;
  console.log("the response text contains the attributes: ".concat(dataTable.raw()));
  const response = await globalAPIResponseVariables.response.text();
  const expected_response = dataTable.raw();
  for (let i = 0; i < expected_response.length; i++) {
    for (let j = 0; j < expected_response[i].length; j++) {
      (0, _test.expect)(response).toContain(expected_response[i][j]);
    }
  }
});