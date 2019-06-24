const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config');
const devConfig = merge(baseConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: baseConfig.externals.path.dist,
    port: 8081,
    overlay: {
      warning: false,
      errors: true
    }
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: '[file].map'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(devConfig);
})

