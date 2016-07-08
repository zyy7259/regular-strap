/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-23 13:40:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-30 11:00:90
*/

var dateUtil = module.exports

dateUtil.fix = function (number, count) {
  count = count || 2
  var str = '' + number
  while (str.length < count) {
    str = '0' + str
  }
  return str
}

dateUtil.getYearStr = function (date) {
  return '' + date.getFullYear()
}

dateUtil.getMonthStr = function (date) {
  return dateUtil.fix(date.getMonth() + 1)
}

dateUtil.getDayStr = function (date) {
  return dateUtil.fix(date.getDate())
}

dateUtil.getHourStr = function (date) {
  return dateUtil.fix(date.getHours())
}

dateUtil.getMinuteStr = function (date) {
  return dateUtil.fix(date.getMinutes())
}

dateUtil.getSecondStr = function (date) {
  return dateUtil.fix(date.getSeconds())
}

dateUtil.getMillisecondStr = function (date) {
  return dateUtil.fix(date.getMilliseconds(), 3)
}

dateUtil.format = (function () {
  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g
  var mappers = {
    yyyy: dateUtil.getYearStr,
    MM: dateUtil.getMonthStr,
    dd: dateUtil.getDayStr,
    hh: dateUtil.getHourStr,
    mm: dateUtil.getMinuteStr,
    ss: dateUtil.getSecondStr,
    SSS: dateUtil.getMillisecondStr
  }
  return function (date, format) {
    date = new Date(date)
    if (isNaN(+date)) {
      return 'invalid date'
    }
    format = format || 'yyyy-MM-dd'
    return format.replace(reg, function (match) {
      return mappers[match](date)
    })
  }
})()

dateUtil.dateFromDateTimeLocal = function (str) {
  str = '' + str
  return new Date(str.replace(/-/g, '/').replace('T', ' '))
}
