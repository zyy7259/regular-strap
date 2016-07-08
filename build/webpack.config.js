/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-05-16 21:15:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 13:03:70
*/

var pjson = require('../package.json')
var env = require('./env')
var path = require('path')
var webpack = require('webpack')
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
      { test: /\.yaml$/, loader: 'json!yaml' }
    ]
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
