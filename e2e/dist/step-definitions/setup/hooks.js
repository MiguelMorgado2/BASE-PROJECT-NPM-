"use strict";

var _cucumber = require("@cucumber/cucumber");
(0, _cucumber.Before)(async function (scenario) {
  console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
  const contextOptions = {
    recordVideo: {
      dir: `./reports/videos/'${scenario.pickle.name}.png`
    }
  };
  const ready = await this.init(contextOptions);
  return ready;
});
(0, _cucumber.After)(async function (scenario) {
  const {
    screen: {
      page,
      browser
    }
  } = this;
  const scenarioStatus = scenario.result?.status;
  if (scenarioStatus === 'FAILED') {
    const screenshot = await page.screenshot({
      path: `./reports/screenshots/${scenario.pickle.name}.png`
    });
    await this.attach(screenshot, 'image/png');
  }
  await browser.close();
  return browser;
});