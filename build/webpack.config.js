/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-05-16 21:15:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-11T11:47:39+08:00
*/

var pjson = require('../package.json')
var env = require('./env')
var path = require('path')
var webpack = require('webpack')
var precss = require('precss')
var postcssCustomProperties = require('postcss-custom-properties')
var postcssCalc = require('postcss-calc')
var autoprefixer = require('autoprefixer')
var cssnano = require('cssnano')
// var HtmlWebpackPlugin = require('html-webpack-plugin')

var config = {
  entry: './src/index',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'regular-strap.js',
    library: 'RegularStrap',
    libraryTarget: 'umd'
  },
  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.yaml$/, loader: 'json!yaml' },
      { test: /\.css$/, loader: 'style!css!postcss' },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015'],
          cacheDirectory: true,
          plugins: [
            'transform-es3-property-literals',
            'transform-es3-member-expression-literals',
            'add-module-exports',
            ['transform-es2015-modules-commonjs', {
              loose: true
            }]
          ]
        }
      }
    ]
  },
  postcss: function () {
    return [precss, postcssCustomProperties, postcssCalc, autoprefixer, cssnano]
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../src')
    ],
    alias: {
      'data': path.resolve(__dirname, '../data'),
      'zoro-base': path.resolve(__dirname, '../submodule/zoro-base/src'),
      'regularjs': path.resolve(__dirname, '../node_modules/regularjs/dist/regular'),
      'restate': path.resolve(__dirname, '../node_modules/regular-state/restate-full'),
      'stateman': path.resolve(__dirname, '../node_modules/stateman/stateman')
    },
    extensions: ['', '.js', '.json', '.yaml']
  },
  externals: [
    {
      'regularjs': {
        root: 'Regular',
        amd: 'Regular',
        commonjs: 'regularjs',
        commonjs2: 'regularjs'
      },
      'lodash': {
        root: 'Lodash',
        amd: 'Lodash',
        commonjs: 'lodash',
        commonjs2: 'lodash'
      }
    }
  ],
  plugins: [
    new webpack.ProvidePlugin({
      Regular: 'regularjs',
      restate: 'restate',
      _: 'lodash'
    })
  ]
}

var isProduction = env.isProduction()
if (!isProduction) {
  // sourceMap 相关
  config.output.pathinfo = true
  config.devtool = 'eval'
} else {
  config.output.filename = config.output.filename.replace('.js', '.' + pjson.version + '.min.js')
  Array.prototype.push.apply(config.plugins, [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}),
    new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000})
  ])
}

module.exports = config
