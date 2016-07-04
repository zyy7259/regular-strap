/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-06-13 21:12:19
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-13 21:17:42
*/

var prettyjson = require('prettyjson')
var gutil = require('gulp-util')
var _ = require('lodash')

var log = function (msg) {
  if (_.isString(msg)) {
    gutil.log(msg)
  } else {
    console.log(prettyjson.render(msg))
  }
}

module.exports = log
