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
const Mock  = require('mockjs');

let App = Koa();

App.use(Serve(Path.resolve(__dirname, './public')));
App.use(Serve(Path.resolve(__dirname, '../build')));
App.use(Serve(Path.resolve(__dirname, '../assets')));

App.use(_.get('/', function *(next) {

  var render = Jade.compileFile(Path.resolve(__dirname, `./views/index.jade`), {pretty: true});
  this.type = 'text/html';
  this.body = render();

}));

App.use(_.get('/table', function *(next) {

  var render = Jade.compileFile(Path.resolve(__dirname, `./views/table.jade`), {pretty: true});

  var data = Mock.mock({
    'list|5': [{
      'id|+1': 1,
      'name': '@name',
      'email': '@email',
      'age': '@integer(22,33)',
      'address': '@area',
      'lastLoginTime': '@datetime'
    }]
  })

  this.type = 'text/html';
  this.body = render(data);

}));

let pages = ['button', 'form', 'panel', 'grid', 'color', 'list', 'typography', 'label', 'tab', 'modal', 'chart'];

pages.forEach((page) => {

  App.use(_.get(`/${page}`, function *(next) {
    var render = Jade.compileFile(Path.resolve(__dirname, `./views/${page}.jade`), {pretty: true});
    this.type = 'text/html';
    this.body = render();
  }));

});

const port = 10241;

App.listen(port, () => {
  console.log(Chalk.green(`running at ${port}...`));
  Open(`http://localhost:${port}`);
});
