/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-01-07 22:16:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 12:01:05
*/

var util = require('./index');
var mixin = require('./mixin');

util.merge = function (to) {
  to = to || {}
  var arr = [].slice.call(arguments, 1)
  arr.forEach(function (obj) {
    mixin(to, obj)
  })
  return to
}

util.fetch = function (obj, config) {
  Object.keys(obj).forEach(function (key) {
    if (util.exist(config[key])) {
      obj[key] = config[key]
    }
  })
  return obj
}

util.string2object = function (string, sep) {
  var obj = {}
  string = string || ''
  string.split(sep).forEach(function (pair) {
    var arr = pair.split('=')
    var key = arr.shift()
    if (!key) {
      return
    }
    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='))
  })
  return obj
}

util.object2string = function (obj, sep, encode) {
  if (!obj) {
    return ''
  }
  var arr = []
  Object.keys(obj).forEach(function (key) {
    var value = obj[key]
    if (util.isFunction(value)) {
      return
    }
    if (util.isDate(value)) {
      value = value.getTime()
    } else if (util.isArray(value)) {
      value = value.join(',')
    } else if (util.isObject(value)) {
      value = JSON.stringify(value)
    }
    if (!!encode) {
      value = encodeURIComponent(value)
    }
    arr.push(encodeURIComponent(key) + '=' + value)
  })
  return arr.join(sep || ',')
}

util.checkWithDefault = function (obj, key, dft) {
  var value = obj[key] || obj[key.toLowerCase()]
  if (!value) {
    value = dft
    obj[key] = value
  }
  return value
};

util.simpleClone = function (obj) {
  return JSON.parse(JSON.stringify(obj))
}

util.fillUndef = function (obj, defaultObj) {
  for (var key in defaultObj) {
    if (defaultObj.hasOwnProperty(key) && util.undef(obj[key])) {
      obj[key] = defaultObj[key]
    }
  }
  return obj
}
