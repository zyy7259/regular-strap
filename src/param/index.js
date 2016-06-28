/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-30 16:40:04
* @Last modified by:   zyy
* @Last modified time: 2016-06-28 17:28:06
*/

require('../loading')
require('./checkboxes')
require('./radios')
var tpl = require('./index.html')

var dateUtil = {
  fix: function (number, count) {
    count = count || 2
    var str = '' + number
    while (str.length < count) {
      str = '0' + str
    }
    return str
  },
  getYearStr: function (date) {
    return '' + date.getFullYear()
  },
  getMonthStr: function (date) {
    return dateUtil.fix(date.getMonth() + 1)
  },
  getDayStr: function (date) {
    return dateUtil.fix(date.getDate())
  },
  getHourStr: function (date) {
    return dateUtil.fix(date.getHours())
  },
  getMinuteStr: function (date) {
    return dateUtil.fix(date.getMinutes())
  },
  getSecondStr: function (date) {
    return dateUtil.fix(date.getSeconds())
  },
  getMillisecondStr: function (date) {
    return dateUtil.fix(date.getMilliseconds(), 3)
  }
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

Regular.directive('r-model2', {
  // TODO 理解一下
  link: function (elem, value) {
    value = this.$get(value)
    return Regular.directive('r-model').link.call(this, elem, value)
  }
})

/**
 * data
 * - id ID
 * - list 参数列表
 *   - type: 'String/Email/Number/DateStr/DateTime/Select/Checkboxes/Radios'
 *   - name: String
 *   - desc: String
 *   - mandatory: true/false
 *   - min/max: used by Number
 *   - list: used by Select/Checkboxes/Radios
 *     - value: String
 *     - desc: String
 *     - checked: Boolean
 * - default 默认值
 * - paramsLimit 超过这个数量, 参数就叠起来
 * - emailReg 验证邮箱的正则表达式
 * - hideMandatory 是否隐藏 * 号
 * - hideColon 是否隐藏 : 号
 * - hideTip 是否隐藏提示
 * - params 参数值对象
 * - showSubmit 是否展示提交按钮
 * - submitTitle 提交按钮的文案
 * - submitClazz
 * - submitBtnClazz
 * 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙
 * - labelPosClazz
 * - labelColClazz
 * - iptColClazz
 */
module.exports = Regular.extend({
  name: 'param',
  template: tpl,
  mandatoryTpl: '{#if param.mandatory}<span class="text-danger">*&nbsp;&nbsp;</span>{/if}',
  config: function () {
    this.initDefault()
    this.mergeParamDefault()
  },
  initDefault: function () {
    if (this.data.id === undefined) {
      this.data.id = +new Date()
    }
    if (this.data.list === undefined) {
      this.data.list = []
    }
    if (this.data.paramsLimit === undefined) {
      this.data.paramsLimit = 3
    }
    if (this.data.hideMandatory === undefined) {
      this.data.hideMandatory = false
    }
    if (this.data.hideColon === undefined) {
      this.data.hideColon = false
    }
    if (this.data.hideTip === undefined) {
      this.data.hideTip = false
    }
    if (this.data.params === undefined) {
      this.data.params = {}
    }
    if (this.data.showSubmit === undefined) {
      this.data.showSubmit = false
    }
    if (this.data.submitTitle === undefined) {
      this.data.submitTitle = '确定'
    }
    if (this.data.labelPosClazz === undefined) {
      this.data.labelPosClazz = 'text-xs-right'
    }
    if (this.data.labelColClazz === undefined) {
      this.data.labelColClazz = 'col-md-3'
    }
    if (this.data.iptColClazz === undefined) {
      this.data.iptColClazz = 'col-md-8'
    }
    if (this.data.submitClazz === undefined) {
      this.data.submitClazz = 'col-md-offset-3 col-md-8'
    }
    if (this.data.submitBtnClazz === undefined) {
      this.data.submitBtnClazz = 'btn-primary-outline'
    }
  },
  // 参数默认值
  mergeParamDefault: function () {
    var self = this
    var data = self.data
    data.params = {}
    Object.assign(data.params, data.default)
    data.list.forEach(function (param) {
      var defaultValue = data.params[param.name] || param.value
      switch (param.type) {
        case 'DateStr':
        case 'DateTime':
          if (defaultValue) {
            var format = param.type === 'DateStr' ? 'yyyy-MM-dd' : 'yyyy-MM-ddThh:mm'
            defaultValue = +new Date(defaultValue)
            if (!isNaN(defaultValue)) {
              defaultValue = new Date(defaultValue)
              data.params[param.name] = dateUtil.format(defaultValue, format)
            } else {
              delete data.params[param.name]
            }
          }
          return
        case 'Select':
          param.list.some(function (option) {
            if (option.selected) {
              defaultValue = option.value
              return true
            }
          })
          break
        default:
          break
      }
      if (defaultValue !== null && defaultValue !== undefined) {
        data.params[param.name] = defaultValue
      }
    })
  },
  init: function () {
    var self = this
    self.$watch('default', function () {
      self.mergeParamDefault()
    })
  },
  computed: {
    // 是否每个参数一排
    stack: 'list.length >= paramsLimit'
  },
  genInputType: function (param) {
    return param.type === 'Email' ? 'email' : 'text'
  },
  genParamId: function (param) {
    return this.data.id + '-param-' + param.name
  },
  genParamTip: function (param) {
    var tip = param.invalidTip || param.tip || ''
    if (tip) {
      return tip
    }
    switch (param.type) {
      case 'Email':
        tip = '请输入合法邮箱'
        break
      case 'Number':
        tip = '请输入数字'
        if (param.min) {
          tip += ', '
          tip += '最小值 ' + param.min
        }
        if (param.max) {
          if (param.min) {
            tip += ', '
          }
          tip += '最大值 ' + param.max
        }
        break
      case 'DateStr':
        tip = '请选择年月日'
        break
    }
    return tip
  },
  /**
  * 获取参数, 有错误的话返回 false, 正常的话返回所有的参数
  * 如果指定了 checkParam, 那么只检查对应的参数
  */
  getParams: function (checkParam) {
    var self = this
    var data = self.data
    var $refs = self.$refs
    var params = JSON.parse(JSON.stringify(data.params))
    var invalid = data.list.some(function (param) {
      param.invalid = false
      param.invalidTip = ''
      var name = param.name
      if (checkParam && name !== checkParam.name) {
        return
      }
      var value = params[name]
      if (typeof value === 'string') {
        value = value.trim()
      }
      switch (param.type) {
        case 'String':
          if (value !== 0 && !value) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            params[name] = '' + value
          }
          break
        case 'Email':
          if (!value) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            if (!checkParam && !self.verifyEmail(value)) {
              return self.invalidParam(param)
            }
          }
          break
        case 'Number':
          if (value === null || value === undefined || value === '') {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            value = parseFloat(value)
            if (isNaN(value) ||
              (param.min && value < param.min) ||
              (param.max && value > param.max)
            ) {
              return self.invalidParam(param)
            }
            params[name] = value
          }
          break
        case 'DateStr':
          if (!value) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            value = +new Date(value)
            if (isNaN(value)) {
              return self.invalidParam(param)
            }
          }
          break
        case 'DateTime':
          if (!value) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            value = +new Date(value.replace(/-/g, '/').replace('T', ' '))
            if (isNaN(value)) {
              return self.invalidParam(param)
            }
            params[name] = value
          }
          break
        case 'Select':
          value = $refs[name].value
          if (!value) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            if (param.valueType === 'Number') {
              value = parseInt(value)
              if (isNaN(value)) {
                return self.invalidParam(param)
              }
            }
            params[name] = value
          }
          break
        case 'Checkboxes':
        case 'Radios':
          value = $refs[name].getChecked()
          if (!value || !value.length) {
            if (self.shouldInvalidEmptyParam(params, param)) {
              return true
            }
          } else {
            params[name] = value
          }
          break
        default:
          break
      }
    })
    if (checkParam) {
      this.$emit('change', params)
    }
    return invalid ? false : params
  },
  /**
  * 对于空的参数, 如果是必须的, 那么它是 invalid
  * 如果不是必须的, 那么从最终的结果里面删除它
  */
  shouldInvalidEmptyParam: function (params, param) {
    if (param.mandatory) {
      return this.invalidParam(param)
    } else {
      delete params[param.name]
      delete this.data.params[param.name]
    }
  },
  invalidParam: function (param) {
    param.invalid = true
    var ref = this.$refs[param.name]
    if (ref.tagName && ref.tagName.toLowerCase() === 'input') {
      ref.focus()
    }
    return true
  },
  verifyEmail: (function () {
    var _reg = /^\S+@\S+$/
    return function (email) {
      var reg = this.data.emailReg || _reg
      return reg.test(email)
    }
  })(),
  submit: function (event) {
    event.stop()
    var params = this.getParams()
    if (params) {
      this.$emit('submit', params)
    }
  }
})
