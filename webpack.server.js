const path = require('path');
const {merge} = require('webpack-merge');
const nodeExternal = require('webpack-node-externals');

const baseConfig = require('./webpack.base');

const serverConfig = {
  target: 'node',
  mode: 'development',
  entry: './src/server/index.js',
  externals: [nodeExternal()],
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'build'),
  },
};

module.exports = merge(baseConfig, serverConfig);
