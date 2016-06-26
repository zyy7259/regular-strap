/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-06-13 22:47:04
* @Last modified by:   zyy_hzzhangyingya
* @Last modified time: 2016-06-21 00:04:96
*/

var env = require('./env')

var config = {
  input: 'src/postcss/**/*.css',
  dir: 'dist/css',
  'local-plugins': true,
  use: [
    'precss',
    'postcss-custom-properties',
    'postcss-calc',
    'autoprefixer',
    'cssnano'
  ],
  autoprefixer: {
    browsers: ['Android >= 4', 'iOS >= 7', 'Chrome >= 10', 'Firefox >= 10', 'IE >= 8']
  }
}

if (env.isProduction()) {
  config.map = false
} else {
  config.map = 'inline'
}

module.exports = config
