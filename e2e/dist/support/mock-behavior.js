"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.interceptResponse = void 0;
const interceptResponse = async (page, mockServerKey, mockConfigKey, mockPayloadKey, _ref) => {
  let {
    hostsConfig,
    mocksConfig,
    mockPayloadMappings
  } = _ref;
  const mockServerHostURL = hostsConfig[mockServerKey];
  const mockServerRoute = mocksConfig[mockConfigKey];
  const mockServerPayload = mockPayloadMappings[mockPayloadKey];
  if (!mockServerPayload) {
    throw Error(`🧨 Unable to find the ${mockPayloadKey} payload json file 🧨`);
  }
  await page.route(`${mockServerHostURL}${mockServerRoute}`, route => route.fulfill({
    contentType: 'application/json',
    body: JSON.stringify(mockServerPayload)
  }));
};
exports.interceptResponse = interceptResponse;