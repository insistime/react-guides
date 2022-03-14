const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: path.resolve(__dirname, '../src/index.js'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'react guides',
      template: path.resolve(__dirname, './template.html')
    }),
  ],
  module: {
    rules: [
    ],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist'),
    clean: true,
  },
};