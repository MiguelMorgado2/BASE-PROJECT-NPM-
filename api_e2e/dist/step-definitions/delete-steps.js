"use strict";

var _cucumber = require("@cucumber/cucumber");
var _restHelper = require("../support/rest-helper");
(0, _cucumber.Given)(/^I delete the ([0-9]+th|[0-9]+st|[0-9]+nd|[0-9]+rd) "([^"]*)"$/, async function (index, route) {
  var _index$match;
  const {
    api: {
      request
    },
    globalConfig,
    globalAPIResponseVariables
  } = this;
  console.log("I delete the ".concat(index, " ").concat(route));
  const currentIndex = Number((_index$match = index.match(/\d/g)) === null || _index$match === void 0 ? void 0 : _index$match.join(''));
  const routeAtIndex = "".concat(route, "/").concat(currentIndex);
  await (0, _restHelper.deleteResponse)(request, routeAtIndex, globalConfig, globalAPIResponseVariables);
});