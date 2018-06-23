const path = require('path');
const merge = require('webpack-merge');

const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const config = require('./webpack.prod.js');

module.exports = merge(config, {
  optimization: {
    concatenateModules: false
  },
  plugins: [
    new BundleAnalyzerPlugin()
  ]
});
