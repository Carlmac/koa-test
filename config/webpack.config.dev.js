const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'eval-source-map',
  stats: { children: false }
})

module.exports = config