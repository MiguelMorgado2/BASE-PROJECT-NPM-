"use strict";

var _test = require("@playwright/test");
(0, _test.test)('update user post', async _ref => {
  let {
    request
  } = _ref;
  const response = await request.put('/posts/1', {
    data: {
      id: 1,
      title: 'Existing Post',
      body: 'This is a post',
      userId: 1
    }
  });
  (0, _test.expect)(response.ok()).toBeTruthy();
  (0, _test.expect)(response.status()).toBe(200);
  (0, _test.expect)(await response.json()).toEqual(_test.expect.objectContaining({
    "body": "This is a post",
    "id": 1,
    "title": "Existing Post",
    "userId": 1
  }));
});
(0, _test.test)('update a user post that does not exist', async _ref2 => {
  let {
    request
  } = _ref2;
  const response = await request.put('/posts/200', {
    data: {
      id: 1,
      title: 'Existing Post',
      body: 'This is a post',
      userId: 1
    }
  });
  (0, _test.expect)(response.ok()).toBeFalsy();
  (0, _test.expect)(response.status()).toBe(500);
  (0, _test.expect)(response.statusText()).toEqual("Internal Server Error");
  (0, _test.expect)(await response.text()).toContain("Cannot read properties of undefined (reading 'id')");
});