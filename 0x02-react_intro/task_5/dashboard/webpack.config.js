const path = require('path');

module.exports = {
  entry: 'src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      { test: /\.css$/, use: ['css-loader', 'style-loader'] },
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
  devserver: {
    contentBase: './dist',
    port: 8564,
  },
};
