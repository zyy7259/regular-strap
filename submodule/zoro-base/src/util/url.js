var util = require('./index')

util.genUrlSep = function (url) {
  return url.indexOf('?') < 0 ? '?' : '&'
}

util.object2query = function (obj) {
  return util.object2string(obj, '&', true)
}

util.url2origin = (function () {
  var reg = /^([\w]+?:\/\/.*?(?=\/|$))/i
  return function (url) {
    if (reg.test(url || '')) {
      return RegExp.$1.toLowerCase()
    }
    return ''
  }
}())
