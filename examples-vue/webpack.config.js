var Path    = require('path');
// var webpack = require('webpack');

module.exports = {

  entry: Path.resolve(__dirname, './app/main.js'),

  watch: true,

  output: {
      path: Path.resolve(__dirname, './public/app/')
    , publicPath: "/app/"
    , filename: "app.js"
    , chunkFilename: "[id].app.js"
  },

  module: {
    loaders: [
      {
          test: /\.js$/
        , exclude: /node_modules/
        , loader: "babel"
        , query: {
            presets: ['es2015', 'react']
          , plugins: ['transform-runtime']
        }
      }
    ]
  },

  resolve: {
    alias: {
      actions: Path.resolve(__dirname, './app/actions'),
      components: Path.resolve(__dirname, './app/components')
    }
  }

};
