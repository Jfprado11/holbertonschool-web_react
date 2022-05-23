/** @type {import('webpack').Configuration} */
const path = require('path');

module.exports = {
  entry: './js/dashboard_main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'production',
  module: {
    rules: [
      { test: /.\css$/, use: ['css-loader', 'style-loader'] },
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
};
