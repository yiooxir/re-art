/* eslint-disable */

var path = require('path');
var webpack = require('webpack');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './src/App.js',
    './src/styles/themes/admin_toolkit_theme/style.scss',
    // './src/styles/base/index.scss',
    'font-awesome/css/font-awesome.css',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['react-hot', 'babel'],
      include: path.join(__dirname, 'src')
    },{
      test: /\.(scss|css)$/,
      loaders: [
        'style?sourceMap',
        'css',
        'postcss',
        'sass'
      ]
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/font-woff"
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.json'],
    alias: {
      'components': path.join(__dirname, 'src/components'),
    }
  },
  postcss: function () {
    return [precss, autoprefixer];
  }
};
