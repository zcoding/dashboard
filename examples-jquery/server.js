/* This is a simple server for dashboard-jquery examples */
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
App.use(Serve(Path.resolve(__dirname, '../build')));

App.use(_.get('/', function *(next) {

  this.type = 'text/html';
  this.body = Fs.createReadStream(Path.resolve(__dirname, './views/index.html'));

}));

App.use(_.get('/buttons', function *(next) {

  this.type = 'text/html';
  this.body = Fs.createReadStream(Path.resolve(__dirname, './views/buttons.html'));

}));

App.use(_.get('/tables', function *(next) {

  this.type = 'text/html';
  this.body = Fs.createReadStream(Path.resolve(__dirname, './views/tables.html'));

}));

App.use(_.get('/panels', function *(next) {

  this.type = 'text/html';
  this.body = Fs.createReadStream(Path.resolve(__dirname, './views/panels.html'));

}));

const port = 10241;

App.listen(port, () => {
  console.log(Chalk.green(`running at ${port}...`));
  Open(`http://localhost:${port}`);
});
