const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base.js')
const terser = require('terser-webpack-plugin')
const config = merge(baseConfig, {
  mode: 'production',
  stats: {
    children: false,
    warnings: false,
  },
  optimization: {
    minimizer: [
      new terser(
        {
          terserOptions: {
            warnings: false,
            compress: {
              warnings: false,
              drop_console: true,
              dead_code: true,
              drop_debugger: true,
            },
            output: {
              comments: false,
              beautify: false,
            },
            mangle: true,
          },
          parallel: true,
          sourceMap: false,
        }
      ),
    ]
  }
})

module.exports = config