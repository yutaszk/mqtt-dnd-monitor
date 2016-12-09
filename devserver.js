const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require('./webpack.config.dev.js');
const devServerPort = process.env.DEV_SERVER_PORT || 8000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  contentBase: 'src',
  inline: true,
  hot: true,
}).listen(devServerPort, '0.0.0.0', err => {
  if (err) return console.log(err);
});
