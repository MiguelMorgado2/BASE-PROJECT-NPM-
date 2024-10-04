"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
var _logger = require("../../logger");
var _htmlBehavior = require("../../support/html-behavior");
(0, _cucumber.Then)(/^the "([^"]*)" table should( not)? equal the following:$/, async function (elementKey, negate, dataTable) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  _logger.logger.log(`the ${elementKey} table should ${negate ? ' not' : ''}equal the following:`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  await (0, _waitForBehavior.waitFor)(async () => {
    const elementStable = await (0, _waitForBehavior.waitForSelector)(page, elementIdentifier);
    if (elementStable) {
      const tableData = await (0, _htmlBehavior.getTableData)(page, elementIdentifier);
      return tableData === JSON.stringify(dataTable.raw()) === !negate;
    } else {
      return elementStable;
    }
  });
});