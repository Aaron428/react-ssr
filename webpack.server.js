const path = require('path');
const nodeExternal = require('webpack-node-externals');

module.exports = {
  target: 'node',
  mode: 'development',
  entry: './src/index.js',
  externals: [nodeExternal()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            [
              'env',
              {
                targets: {
                  browser: ['last 2 versions'],
                },
              },
            ],
          ],
        },
      },
    ],
  },
};
