/** @type {import('webpack').Configuration} */
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'inline-source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      {
        test: /\.(png|jpg|svg)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: { bypassOnDebug: true, disable: true },
          },
        ],
      },
    ],
  },
  devServer: {
    static: './dist',
    compress: true,
    open: true,
  },
};
