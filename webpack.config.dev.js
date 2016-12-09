const webpack = require('webpack');

const config = require('./webpack.config');

const devServerHost = process.env.DEV_SERVER_HOST || '0.0.0.0';
const devServerPort = process.env.DEV_SERVER_PORT || 8000;

module.exports = {
  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://${devServerHost}:${devServerPort}`,
    'webpack/hot/only-dev-server',
    ...config.entry,
  ],
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    ...config.plugins,
  ],
  devtool: 'inline-source-map',
  output: config.output,
  module: config.module,
  resolve: config.resolve,
};
