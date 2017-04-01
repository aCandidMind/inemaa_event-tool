const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const themePath = path.join(__dirname, 'theme.json');

const StaticSiteGeneratorPlugin = require('static-site-generator-webpack-plugin');

module.exports = {
  entry: {
    main: path.join(__dirname, 'appStatic.js'),
    splashChunk: path.join(__dirname, 'splashStatic.js'),
  },
//  entry: {
//    main: path.join(__dirname, 'appStatic.js'),
//    splashChunk: path.join(__dirname, 'splashStatic.js'),
//  },
//  main: path.join(__dirname, 'appStatic.js'),

  output: {
    path: 'dist',
    filename: '[name].js',
    //publicPath: '/eventTool',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new ExtractTextPlugin('main-[contenthash].css'),
    new ExtractTextPlugin('splash-[contenthash].css'),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.AggressiveMergingPlugin(),
    new StaticSiteGeneratorPlugin({
        paths: [
            'splashChunk',
            'main'
        ],
        globals: {
          window: {}
        }
    })
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
          'css?modules!postcss!sass!jsontosass?path='+themePath
        ),
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader!sass-loader"),
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: "file-loader?name=[name].[ext]",
      },
      {
        test: /\.ejs$/,
        loader: "ejs-compiled",
      }
    ],
  },
};
