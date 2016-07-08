/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-30 09:54:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 11:56:17
*/

var util = require('./index')

/*
 * 类型相关 API
 */

util.getClass = function (o) {
  return Object.prototype.toString.call(o).slice(8, -1)
}

util.typeOf = function (o) {
  return util.getClass(o).toLowerCase()
}

util.isString = function (o) {
  return util.typeOf(o) === 'string'
}

util.isNumber = function (o) {
  return util.typeOf(o) === 'number'
}

util.isBoolean = function (o) {
  return util.typeOf(o) === 'boolean'
}

util.isArray = function (o) {
  return util.typeOf(o) === 'array'
}

util.isFunction = function (o) {
  return util.typeOf(o) === 'function'
}

util.isObject = function (o) {
  return util.exist(o) && util.typeOf(o) === 'object'
}

util.isDate = function (o) {
  return util.typeOf(o) === 'date'
}

util.isRegExp = function (o) {
  return util.typeOf(o) === 'regexp'
}

util.isError = function (o) {
  return util.typeOf(o) === 'error'
}

util.isnull = function (o) {
  return o === null
}

util.notnull = function (o) {
  return o !== null
}

// 需要用 typeof 来比较，兼容性好
util.undef = function (o) {
  return typeof o === 'undefined'
}

util.notundef = function (o) {
  return typeof o !== 'undefined'
}

util.exist = function (o) {
  return util.notundef(o) && util.notnull(o)
}

util.notexist = function (o) {
  return util.undef(o) || util.isnull(o)
}

util.isEmpty = function (o) {
  return util.notexist(o) || o === ''
}
