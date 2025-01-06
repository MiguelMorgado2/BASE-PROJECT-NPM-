"use strict";

var _cucumber = require("@cucumber/cucumber");
var _restHelper = require("../support/rest-helper");
(0, _cucumber.Given)(/^I update the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)" with an "([^"]*)"$/, async function (index, route, jsonPayloadName) {
  var _index$match;
  const {
    api: {
      request
    },
    globalConfig,
    globalAPIResponseVariables
  } = this;
  console.log("I update the ".concat(index, " ").concat(route, " with an ").concat(jsonPayloadName));
  const currentIndex = Number((_index$match = index.match(/\d/g)) === null || _index$match === void 0 ? void 0 : _index$match.join(''));
  const routeAtIndex = "".concat(route, "/").concat(currentIndex);
  await (0, _restHelper.putResponse)(request, routeAtIndex, jsonPayloadName, globalConfig, globalAPIResponseVariables);
});