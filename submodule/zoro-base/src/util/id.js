var util = require('./index')

util.uniqueID = (function () {
  var id = 0
  return function () {
    return '' + (id++)
  }
}())
