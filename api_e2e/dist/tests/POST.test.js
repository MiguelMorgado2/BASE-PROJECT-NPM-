"use strict";

var _test = require("@playwright/test");
(0, _test.test)('create user post', async _ref => {
  let {
    request
  } = _ref;
  const response = await request.post('/posts', {
    data: {
      title: 'New Post',
      body: 'This is a new post',
      userId: 1
    }
  });
  (0, _test.expect)(response.status()).toBe(201);
  (0, _test.expect)(await response.json()).toEqual(_test.expect.objectContaining({
    "body": "This is a new post",
    "id": 101,
    "title": "New Post",
    "userId": 1
  }));
});