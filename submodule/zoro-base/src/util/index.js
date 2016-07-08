var util = {}

util.mixin = require('./mixin')

util.o = util.emptyObj = {}

util.f = util.emptyFunc = function () {}

util.regBlank = util.regWhiteSpace = /\s+/ig

module.exports = util

var arr = ['object', 'type', 'url', 'id', 'blob']
arr.forEach(function (name) {
  require('./' + name)
})
