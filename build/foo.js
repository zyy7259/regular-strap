/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-16 21:20:04
* @Last modified by:   zyy
* @Last modified time: 2016-06-20T11:15:48+08:00
*/

var log = require('./log')

var env = process.env
Object.keys(env).sort().forEach(function (key) {
  var obj = {}
  obj[key] = env[key]
  // log(obj)
})
log({'process.env.NODE_ENV': '' + process.env.NODE_ENV})

var path = require('path')

log({'path.join': path.join('a', 'b')})

log({'path.resolve': path.resolve('a', 'b')})
