'use strict';

const Fs    = require('fs');
const Path  = require('path');
const Chalk = require('chalk');

let fsxx = {};

let simpleTransforms = ['unlink', 'rmdir'];

simpleTransforms.forEach((m, i) => {
  fsxx[m] = function(path) {
    return new Promise((resolve, reject) => {
      Fs[m](path, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(path);
        }
      });
    });
  };
});

fsxx.readFile = function(filename) {
  return new Promise((resolve, reject) => {
    Fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

fsxx.mkdir = function(dirpath) {
  return new Promise((resolve, reject) => {
    Fs.mkdir(dirpath, (err) => {
      if (err && err.code !== 'EEXIST') {
        reject(err);
      } else {
        resolve(dirpath);
      }
    });
  });
};

fsxx.stat = function(path) {
  return new Promise((resolve, reject) => {
    Fs.stat(path, (err, stat) => {
      if (err) {
        reject(err);
      } else {
        resolve(stat);
      }
    });
  });
};

fsxx.readdir = function(dirpath) {
  return new Promise((resolve, reject) => {
    Fs.readdir(dirpath, (err, files) => {
      if (err) {
        reject(err);
      } else {
        resolve(files);
      }
    });
  });
};

fsxx.emptydir = function(dirpath) {
  return fsxx.readdir(dirpath)
    .then((files) => {
      return Promise.all(files.map((file) => {
        var path = Path.resolve(dirpath, `./${file}`);
        return fsxx
          .stat(path)
          .then((stat) => {
            if (stat.isDirectory()) {
              return fsxx.emptydir(path)
                .then(() => {
                  return fsxx.rmdir(path);
                });
            } else {
              return fsxx.unlink(path);
            }
          });
      }));
    })
    .then(dirpath)
    .catch((err) => {
      console.error(chalk.red(err));
    });
};

fsxx.rmdir_rf = function(dirpath) {
  return fsxx.emptydir(dirpath).then(fsxx.rmdir);
};

fsxx.rm = function(path, options) {
  return fsxx.stat(path)
    .then((stat) => {
      if (stat.isDirectory()) {
        return fsxx.readdir(path).then((items) => {
          if (items.length === 0) { // empty folder, delete directly
            return fsxx.rmdir(path);
          } else { // not empty
          }
        });
      } else if (stat.isFile()) {
        return fsxx.unlink(path);
      } else {
        throw new Error(`Cannot remove ${path}`);
      }
    });
};

fsxx.mkdirp = function(dirpath) {
  return new Promise((resolve, reject) => {
    Fs.mkdir(dirpath, (err) => {
      if (!err) {
        resolve(dirpath);
      } else {
        switch(err.code) {
          case 'EEXIST':
            resolve(dirpath);
            break;
          case 'ENOENT':
            fsxx.mkdirp(Path.dirname(dirpath)).then(() => {
              return fsxx.mkdirp(dirpath);
            }).then(() => {
              resolve(dirpath);
            });
            break;
          default:
            reject(err);
        }
      }
    });
  });
};

fsxx.copy = function(src, dest) {
  return new Promise((resolve, reject) => {
    var reader = Fs.createReadStream(src);

    reader.on('error', (err) => { reject(err); });

    var writer = Fs.createWriteStream(dest);

    writer.on('error', (err) => { reject(err); });

    writer.on('finish', () => { resolve(dest); });

    reader.pipe(writer);
  });
}

fsxx.createFile = function(path) {
  return new Promise((resolve, reject) => {
    Fs.open(path, 'w', (err, fd) => {
      if (err) {
        reject(err);
      } else {
        Fs.write(fd, '', 0, 'utf8', (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(path);
          }
        });
      }
    });
  });
};

fsxx.writeFile = function(path, data) {
  return new Promise((resolve, reject) => {
    Fs.writeFile(path, data, 'utf8', (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

module.exports = fsxx;
