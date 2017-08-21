const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const themePath = path.join(__dirname, 'theme.json');

module.exports = {
  entry: {
    main: path.join(__dirname, 'app.js'),
    splash: path.join(__dirname, 'splash.js'),
  },

  output: {
    path: '/',
    filename: '[name]-[chunkhash].js',
    publicPath: '/',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'favicon.ico'),
      inject: 'body',
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'index.html'),
      favicon: path.join(__dirname, 'favicon.ico'),
      inject: 'body',
      filename: 'splash.html',
      chunks: ['splash']
    }),
    new ExtractTextPlugin('main-[contenthash].css'),
    new ExtractTextPlugin('splash-[contenthash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
  ],

  sassLoader: {
    precision: 8,
  },

  postcss: [
    autoprefixer({
      browsers: [
        'Android >= 4',
        'Chrome >= 20',
        'Firefox >= 24',
        'Explorer >= 9',
        'Edge >= 1',
        'iOS >= 6',
        'Opera >= 12',
        'Safari >= 6',
      ],
    }),
  ],
  devtool: '#inline-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract(
          'style',
          `css?postcss!sass!jsontosass?path=${themePath}`
        ),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      },
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'file-loader?mimetype=image/svg+xml'},
      {test: /\.woff(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/font-woff"},
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader?mimetype=application/octet-stream"},
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader"},
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]",
      }
    ],
  },
};
