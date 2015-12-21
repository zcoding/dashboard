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
            presets: ['es2015']
          , plugins: ['transform-runtime']
        }
      }

      , {
          test: /\.vue$/
        , loader: 'vue'
      }
    ]
  },

  resolve: {
    alias: {
      views: Path.resolve(__dirname, './app/views'),
      components: Path.resolve(__dirname, './app/components')
    }
  }

};
