'use strict';

const Fsxx  = require('./fsxx');
const Chalk = require('chalk');
const Path  = require('path');
const dest  = Path.resolve(__dirname, '../build');

function cleanBuildFolder(dirpath) {
  return Fsxx.emptydir(dirpath).then((dirpath) => {
    console.log(Chalk.green(`${dirpath} All clear.`));
  });
}

cleanBuildFolder(dest).then((dest) => {
  // done
});
