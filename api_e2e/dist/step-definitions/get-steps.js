"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.Given)(/^I retrieve "([^"]*)"$/, async function (route) {
  const {
    api: {
      request
    },
    globalAPIResponseVariables
  } = this;
  console.log("I retrieve ".concat(route));
  const response = await request.get("https://jsonplaceholder.typicode.com/" + route);
  globalAPIResponseVariables.response = response;
});