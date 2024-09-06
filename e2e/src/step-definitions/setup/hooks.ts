import { Before, After, ITestCaseHookParameter } from '@cucumber/cucumber';
import { env } from '../../env/parsEnv';
import { ScenarioWorld } from './world';

Before(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    console.log(`🥒 Running cucumber "${scenario.pickle.name}"`);
    const contextOptions = {
        recordVideo: {
            dir: `${env('VIDEO_PATH')}${scenario.pickle.name}.png`,
        },
    };
    const ready = await this.init(contextOptions);
    return ready;
});
After(async function (this: ScenarioWorld, scenario: ITestCaseHookParameter) {
    const {
        screen: { page, browser },
    } = this;
    const scenarioStatus = scenario.result?.status;
    if (scenarioStatus === 'FAILED') {
        const screenshot = await page.screenshot({
            path: `${env('SCREEENSHOT_PATH')}${scenario.pickle.name}.png`,
        });
        await this.attach(screenshot, 'image/png');
    }
    await browser.close();
    return browser;
});
