/**
* @Author: zyy
* @Date:   2016-06-16T22:17:34+08:00
* @Last modified by:   zyy
* @Last modified time: 2016-06-16T22:19:35+08:00
*/

var favicons = require('favicons')
var path = require('path')
favicons({
  source: path.resolve('../res/img/logo.png'),
  dest: path.resolve('../dist/')
})
