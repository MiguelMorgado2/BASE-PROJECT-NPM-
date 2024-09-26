"use strict";

var _cucumber = require("@cucumber/cucumber");
var _webElementHelper = require("../../support/web-element-helper");
var _waitForBehavior = require("../../support/wait-for-behavior");
(0, _cucumber.When)(/^the "([^"]*)" table should( not)? equal the following:$/, async function (elementKey, negate, dataTable) {
  const {
    screen: {
      page
    },
    globalConfig
  } = this;
  console.log(`the ${elementKey} table should ${negate ? 'not ' : ''}equal the following:`);
  const elementIdentifier = (0, _webElementHelper.getElementLocator)(page, elementKey, globalConfig);
  const dataBefore = await page.$$eval(elementIdentifier + " tbody tr", rows => {
    return rows.map(row => {
      const cells = row.querySelectorAll('td');
      return Array.from(cells).map(cell => cell.textContent);
    });
  });
  console.log("html table ", JSON.stringify(dataBefore));
  console.log("cucumber table ", JSON.stringify(dataTable.raw()));
  await (0, _waitForBehavior.waitFor)(async () => {
    return JSON.stringify(dataBefore) === JSON.stringify(dataTable.raw()) === !negate;
  });
});