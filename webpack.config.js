'use strict';

const webpack = require('webpack');
const ReloadHtmlWebpackPlugin = require('reload-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  context: __dirname,
  entry: './app.js',
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],
  module:{
    loaders:[
        {
            test: /\.html$/,
            loader: 'raw-loader'
        }
    ]
  }
};
