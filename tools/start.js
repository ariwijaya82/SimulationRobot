import webpack from 'webpack';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'result.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.json', '.jsx']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    })
  ]
}

webpack(config, (err, stats) => {
  if (err || stats.hasErrors()) {
    stats.compilation.errors.forEach(element => {
      console.log(element);
    });
  }
})
