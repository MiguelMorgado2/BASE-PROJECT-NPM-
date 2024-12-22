"use strict";

var _test = require("@playwright/test");
(0, _test.test)('updating part of user post', async _ref => {
  let {
    request
  } = _ref;
  const response = await request.patch('/posts/1', {
    data: {
      title: 'Just an edited title'
    }
  });
  (0, _test.expect)(response.ok()).toBeTruthy();
  (0, _test.expect)(response.status()).toBe(200);
  (0, _test.expect)(await response.json()).toEqual(_test.expect.objectContaining({
    "title": "Just an edited title"
  }));
});