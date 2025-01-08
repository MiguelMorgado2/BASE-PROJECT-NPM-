import { Given } from '@cucumber/cucumber'
import { ScenarioWorld } from './setup/world'
import { MockConfigKey, MockServerKey, MockPayloadKey } from '../env/global'
import { interceptResponse } from "../support/mock-behavior"
import { logger } from '../logger'

Given(
    /^the "([^"]*)" endpoint for "([^"]*)" is mocked with "([^"]*)"$/,
    async function(this: ScenarioWorld, mockServerKey: MockServerKey, mockConfigKey: MockConfigKey, mockPayloadKey: MockPayloadKey) {
        const {
            screen: { page },
            globalConfig,
        } = this

        logger.log(`the ${mockServerKey} endpoint for ${mockConfigKey} is mocked with ${mockPayloadKey}`)

        await interceptResponse(page, mockServerKey, mockConfigKey, mockPayloadKey, globalConfig)
    }
)

Given(
    /^the cookie "([^"]*)" is set with value "([^"]*)"$/,
    async function (this: ScenarioWorld, cookieName: string, cookieValue: string) {
      const {
        screen: { page },
      } = this;
  
      logger.log(`Setting cookie ${cookieName} with value ${cookieValue}`);
  
      await page.context().addCookies([
        {
          name: cookieName,
          value: cookieValue,
          domain: 'pt.iqos.com', // You can make this dynamic if needed
          path: '/',
          httpOnly: false,
          secure: true,
        },
      ]);
  
      logger.log(`Cookie ${cookieName} has been set`);
    }
  );