"use strict";

var _test = require("@playwright/test");
(0, _test.test)('retrieve user posts', async _ref => {
  let {
    request
  } = _ref;
  const response = await request.get('/posts');
  (0, _test.expect)(response.ok()).toBeTruthy();
  (0, _test.expect)(response.status()).toBe(200);
});
(0, _test.test)('retrieve user post', async _ref2 => {
  let {
    request
  } = _ref2;
  const response = await request.get('/posts/1');
  (0, _test.expect)(response.ok()).toBeTruthy();
  (0, _test.expect)(response.status()).toBe(200);
  (0, _test.expect)(await response.json()).toEqual(_test.expect.objectContaining({
    "id": 1,
    "userId": 1
  }));
});
(0, _test.test)('cannot retrieve animals', async _ref3 => {
  let {
    request
  } = _ref3;
  const response = await request.get('/animals');
  (0, _test.expect)(response.ok()).toBeFalsy();
  (0, _test.expect)(response.status()).toBe(404);
  (0, _test.expect)(response.statusText()).toEqual("Not Found");
});