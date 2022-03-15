var path = require('path');

/**
 * qiao.webpack.js
 */
module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  output: {
    filename  : '[name].bundle.js',
    path      : path.resolve(__dirname, '../dist'),
    clean     : true,
  },
  plugins: [
    {
      type    : 'html',
      title   : 'react guides',
      inject  : 'body',
      template: path.resolve(__dirname, './template.html')
    }
  ],
  module: {
    rules: [],
  },
};