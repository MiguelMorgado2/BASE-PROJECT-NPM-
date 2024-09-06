"use strict";

var _cucumber = require("@cucumber/cucumber");
var _parsEnv = require("../../env/parsEnv");
(0, _cucumber.Before)(async function (scenario) {
  console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
  const contextOptions = {
    recordVideo: {
      dir: `${(0, _parsEnv.env)('VIDEO_PATH')}${scenario.pickle.name}.png`
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
      path: `${(0, _parsEnv.env)('SCREEENSHOT_PATH')}${scenario.pickle.name}.png`
    });
    await this.attach(screenshot, 'image/png');
  }
  await browser.close();
  return browser;
});