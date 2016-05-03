var jsRootDir = './src/scripts/';
var webpack = require('webpack');

module.exports = {
  entry: {
    index: jsRootDir + 'index.entry.js',
    login: jsRootDir + 'login/login.entry.js',
    dashboard: jsRootDir + 'dashboard/dashboard.entry.js'
  },
  output: {
    filename: '[name].bundle.js',
  },
  plugins: [
    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: "jquery"
    })
  ]

};