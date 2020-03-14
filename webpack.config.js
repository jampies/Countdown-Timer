const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const isDevelopment = process.env.NODE_ENV !== 'production';
const env = !isDevelopment ? 'prod' : 'dev';
const config = require('./webpack.config.' + env);
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [
  new HtmlWebPackPlugin({
    template: './src/index.html'
  }),
  new MiniCssExtractPlugin()
].concat(config.plugins);

module.exports = Object.assign({
  target: 'web',
  entry: {
    app: ['./src/index']
  },
  output: {
    path: path.join(__dirname, '/dist'),
    publicPath: '/',
    filename: 'bundle-[hash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.module\.s(a|c)ss$/,
        loader: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: true,
              sourceMap: isDevelopment
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.s(a|c)ss$/,
        exclude: /\.module.(s(a|c)ss)$/,
        loader: [
          isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDevelopment
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
              importLoaders: 1
            }
          }
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        exclude: /src\/index\.html$/
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(woff|woff2)$/,
        loader: 'url-loader?prefix=font/&limit=5000'
      },
      {
        test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=application/octet-stream'
      },
      {
        test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
        loader: 'url-loader?limit=10000&mimetype=image/svg+xml'
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/,
        loader: 'url-loader?limit=8192'
      },
      {
        test: /\.(wav|mp3)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx', '.scss']
  }
}, config, { plugins });
