const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  mode: 'development',
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
  devServer: {
    static: path.join(__dirname, 'dist'),
  },
};
