const webpack = require('webpack');
process.env.PORT = 8080;

module.exports = {
  devtool: 'cheap-module-source-map',
  watch: true,
  mode: 'development',
  watchOptions: {
    ignored: /node_modules/,
    poll: process.env.HOST_PLATFORM === 'win32'
  },
  devServer: {
    contentBase: './src',
    host: 'localhost',
    disableHostCheck: true,
    historyApiFallback: true,
    port: process.env.PORT,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('dev')
    })
  ]
};