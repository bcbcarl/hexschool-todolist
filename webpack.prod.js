const path = require('path');
const merge = require('webpack-merge');
const cssnano = require('cssnano');

const HtmlWebpackInlineSourcePlugin = require('html-webpack-inline-source-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

const common = require('./webpack.common.js');

const uglifyOptions = {
  ecma: 8,
  beautify: false,
  compress: {
    drop_console: true
  }
};

module.exports = merge(common, {
  mode: 'production',
  output: {
    hashDigestLength: 8,
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackInlineSourcePlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new OptimizeCssAssetsPlugin({
      cssProcessor: cssnano,
      cssProcessorOptions: {
        preset: 'default',
        safe: true,
        discardComments: { removeAll: true }
      }
    }),
    new UglifyJsPlugin({
      cache: true,
      parallel: true,
      uglifyOptions
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              camelCase: true
            }
          },
          'postcss-loader'
        ]
      }
    ]
  }
});
