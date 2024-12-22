"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.Before)(async function (scenario) {
  console.log("Running cucumber scenario ".concat(scenario.pickle.name));
  const ready = await this.init();
  return ready;
});