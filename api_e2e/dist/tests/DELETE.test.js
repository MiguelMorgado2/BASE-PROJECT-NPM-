"use strict";

var _test = require("@playwright/test");
(0, _test.test)('delete user post', async _ref => {
  let {
    request
  } = _ref;
  const response = await request.delete('/posts/1');
  (0, _test.expect)(response.ok()).toBeTruthy();
  (0, _test.expect)(response.status()).toBe(200);
  (0, _test.expect)(await response.text()).toContain("{}");
});