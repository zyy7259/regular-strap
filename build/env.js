/**
* @Author: zyy
* @Date:   2016-06-19T20:11:30+08:00
* @Last modified by:   zyy
* @Last modified time: 2016-06-19T23:25:21+08:00
*/

var env = {}

env.isProduction = function () {
  return process.env.NODE_ENV === 'production'
}

module.exports = env
