const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx']
  },
  module: {
    rules: [{
      test: /\.(ts|js)x?$/,
      exclude: '/node_modules/',
      loader: 'babel-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
}