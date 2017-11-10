'use strict';

const webpack = require('webpack');
const ReloadHtmlWebpackPlugin = require('reload-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractCSS = new ExtractTextPlugin('app.bundle.css');

module.exports = {
  context: __dirname,
  entry: './app.js',
  output:{
    path: __dirname + '/js',
    filename: 'app.bundle.js'
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new HtmlWebpackPlugin({template: './index.html'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    }),
    extractCSS
  ],
  module:{
    loaders:[
        {
            test: /\.html$/,
            loader: 'raw-loader'
        },
        {
          test: /\.css$/,
          use: extractCSS.extract({use: {loader: 'css-loader', options:{minimize: true}}})
        }
    ]
  }
};
