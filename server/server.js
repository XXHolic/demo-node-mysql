const Koa = require('koa');
const cors = require('@koa/cors');
const mysql = require('mysql');
const app = new Koa();
const sqlConnect = require('./db');

app.use(cors())
// response
app.use(async ctx => {
  const list = await sqlConnect();
  console.info('list', list)
  ctx.body = list;
});

app.listen(3000);
console.info('server listen 3000 ')