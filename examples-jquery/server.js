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

App.use(_.get('/', function *(next) {

  var render = Jade.compileFile(Path.resolve(__dirname, `./views/index.jade`), {});
  this.type = 'text/html';
  this.body = render();

}));

App.use(_.get('/table', function *(next) {

  var render = Jade.compileFile(Path.resolve(__dirname, `./views/table.jade`), {});

  var data = Mock.mock({
    // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
    'list|10': [{
      // 属性 id 是一个自增数，起始值为 1，每次增 1
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

let pages = ['button', 'form', 'panel', 'grid', 'color'];

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
