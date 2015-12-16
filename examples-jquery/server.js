/* This is a simple server for dashboard-jquery examples */
'use strict';
const Koa   = require('koa');
const _     = require('koa-route');
const Serve = require('koa-static');
const Path  = require('path');
const Fs    = require('fs');
const Chalk = require('chalk');
const Open  = require('open');
const Jade  = require('jade');

let App = Koa();

App.use(Serve(Path.resolve(__dirname, './public')));
App.use(Serve(Path.resolve(__dirname, '../build')));

App.use(_.get('/', function *(next) {

  var render = Jade.compileFile(Path.resolve(__dirname, `./views/index.jade`), {});
  this.type = 'text/html';
  this.body = render();

}));

let pages = ['button', 'table', 'form', 'panel', 'grid', 'color'];

pages.forEach((page) => {

  App.use(_.get(`/${page}`, function *(next) {
    var render = Jade.compileFile(Path.resolve(__dirname, `./views/${page}.jade`), {});
    this.type = 'text/html';
    this.body = render();
  }));

});

const port = 10241;

App.listen(port, () => {
  console.log(Chalk.green(`running at ${port}...`));
  Open(`http://localhost:${port}`);
});
