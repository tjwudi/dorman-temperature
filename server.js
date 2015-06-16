'use strict';

let app = require('koa')(),
  router = require('koa-router')(),
  json = require('koa-json')(),
  thunkify = require('thunkify'),
  ds18b20 = require('./ds18b20');

app.use(json);

router.get('/', function *(next) {
  let that = this;
  let ids = yield thunkify(ds18b20.sensors)();
  let result = yield thunkify(ds18b20.temperature)(ids[0]);
  this.body = { temperature: result };
  yield next;
});

app.
  use(router.routes()).
  use(router.allowedMethods());
app.listen(3000);
console.log('[Temperature] Server now running at port 3000');