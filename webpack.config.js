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
    './src/styles/themes/admin_toolkit_theme/style.scss'
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
    },
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
