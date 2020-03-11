const webpack = require('webpack');

const define = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production')
});

const sourceMap = new webpack.SourceMapDevToolPlugin({
  test: /\.js$/,
  filename: 'bundle-[hash:6].js.map',
  append: '//# sourceMappingURL=http://localhost:8080/[url]',
  moduleFilenameTemplate: '[resource-path]',
  fallbackModuleFilenameTemplate: '[resource-path]'
});

const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: {
    app: ['babel-polyfill', './src/index']
  },
  mode: 'production',
  plugins: [
    define,
    sourceMap,
    new UglifyJsPlugin()
  ]
};
