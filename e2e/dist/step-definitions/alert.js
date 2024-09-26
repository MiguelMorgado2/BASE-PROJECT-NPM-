"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.When)(/^I click (accept)?(dismiss)? on the alert dialog$/, async function (acceptDialog, negateDialog) {
  const {
    screen: {
      page
    }
  } = this;
  console.log(`I click ${acceptDialog} on the alert dialog`);
  if (!!negateDialog) {
    page.on('dialog', dialog => dialog.dismiss());
  } else {
    page.on('dialog', dialog => dialog.accept());
  }
});