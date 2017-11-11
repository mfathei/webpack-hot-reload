'use strict';

const webpack = require('webpack');
const path = require('path');
const ReloadHtmlWebpackPlugin = require('reload-html-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
          use: ['css-hot-loader'].concat(extractCSS.extract({use: {loader: 'css-loader', options:{minimize: true}}}))
        },
        {
            test: /\.(png|jpe?g|gif|svgz?|woff2?|eot)$/i,
            include: path.resolve(__dirname, 'img'),
            use: {
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]'
                }
            }
        }
    ]
  }
};
