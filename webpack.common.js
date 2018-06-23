const path = require('path');
const webpack= require('webpack');
const rxPaths = require('rxjs/_esm5/path-mapping');

const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const pageTitle = 'todolist';

module.exports = {
  entry: {
    app: './src/index.js'
  },
  resolve: {
    alias: rxPaths()
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      title: pageTitle,
      template: path.resolve(__dirname, 'src/index.pug'),
      inlineSource: 'runtime~.+\\.js'
    })
  ],
  module: {
    rules: [
      {
        test: path.resolve(__dirname, 'node_modules/rxjs'),
        sideEffects: false
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          cache: true
        },
        enforce: 'pre'
      },
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 10240
        }
      },
      {
        test: /\.svg$/,
        loader: 'svg-url-loader',
        options: {
          limit: 10240,
          noquotes: true,
          iesafe: true
        }
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loader: 'image-webpack-loader',
        enforce: 'pre'
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      }
    ]
  }
};
