/* This is a simple server for dashboard-vue examples */
'use strict';
const Koa   = require('koa');
const _     = require('koa-route');
const Serve = require('koa-static');
const Path  = require('path');
const Fs    = require('fs');
const Chalk = require('chalk');
const Open  = require('open');

let App = Koa();

App.use(Serve(Path.resolve(__dirname, './public')));

App.use(_.get('/', function *(next) {

  this.type = 'text/html';
  this.body = Fs.createReadStream(Path.resolve(__dirname, './views/index.html'));

}));

const port = 10245;

App.listen(port, () => {
  console.log(Chalk.green(`running at ${port}...`));
  Open(`http://localhost:${port}`);
});
