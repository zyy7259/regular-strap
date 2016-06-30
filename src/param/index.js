/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-30 16:40:04
* @Last modified by:   zyy
* @Last modified time: 2016-06-30 13:28:82
*/

require('../loading')
require('./checkboxes')
require('./radios')
var tpl = require('./index.html')
var util = require('util')
var dateUtil = util.date
var DateStrFormat = 'yyyy-MM-dd'
var DateTimeFormat = 'yyyy-MM-ddThh:mm'

if (Regular.directive('r-model2') === undefined) {
  Regular.directive('r-model2', {
    // TODO 理解一下
    link: function (elem, value) {
      value = this.$get(value)
      return Regular.directive('r-model').link.call(this, elem, value)
    }
  })
} else {
  console.warn('r-model2 指令已经被注册了，请检查兼容性')
}

// 合法的值类型, 这些类型均使用 input:text 来呈现
var validValueTypes = ['String', 'Number', 'Boolean', 'Array', 'Object']
var valueParsers = {
  'String': function (value) {
    return '' + value
  },
  'Number': function (value) {
    return +value
  },
  'Boolean': function (value) {
    return value === 'true'
  },
  'Array': function (value) {
    return JSON.parse(value)
  },
  'Object': function (value) {
    return JSON.parse(value)
  }
}

/**
 * data
 * - id ID
 * - list 参数列表
 *   - type:
 *     - Static
 *     - String
 *     - Number
 *     - Boolean
 *     - Array
 *     - Object
 *     - Email
 *     - DateStr
 *     - DateTime
 *     - Select
 *     - Checkboxes
 *     - Radios
 *   - name: String
 *   - desc: String
 *   - mandatory: true/false
 *   - value: 该参数的默认值
 *   - min/max: used by Number
 *   - maxlength: used by input
 *   - list: used by Select/Checkboxes/Radios
 *     - value: String
 *     - desc: String
 *     - selected: Boolean
 *     - checked: Boolean
 *   - invalidTip: String 参数非法时展示的提示
 *   - tip: String 参数提示
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
 * 默认值的优先级 default < param.value < param.list.checked/selected
 */
module.exports = Regular.extend({
  name: 'param',
  template: tpl,
  mandatoryTpl: '{#if param.mandatory}<span class="text-danger">*&nbsp;&nbsp;</span>{/if}',
  config: function () {
    this.initDefault()
    this.parseParamList()
    this.watch()
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
  /**
   * - 解析参数默认值
   * - 解析值类型
   */
  parseParamList: (function () {
    return function () {
      var self = this
      var data = self.data
      data.params = {}
      data.list.forEach(function (param) {
        // 解析默认值
        var defaultValue = param.value || data.default[param.name]
        switch (param.type) {
          case 'Select':
            // Select: 如果没有提供默认值, 那么取第一个为默认值, 如果某一项有 selected, 取其为默认值
            if (!defaultValue) {
              defaultValue = param.list[0].value
            }
            param.list.some(function (option) {
              if (option.selected) {
                defaultValue = option.value
                return true
              }
            })
            break
          case 'DateStr':
          case 'DateTime':
            // DateStr & DateTime: 如果提供了默认值，那么需要格式化一下日期
            if (defaultValue) {
              var format = param.type === 'DateStr' ? DateStrFormat : DateTimeFormat
              defaultValue = +new Date(defaultValue)
              if (!isNaN(defaultValue)) {
                defaultValue = dateUtil.format(defaultValue, format)
              } else {
                defaultValue = null
              }
            }
            break
          case 'Checkboxes':
          case 'Radios':
            // Checkboxes & Radios: 如果没有提供默认值，那么重新计算默认值
            if (!defaultValue) {
              var checkeds = param.list.filter(function (item) {
                return item.checked
              }).map(function (item) {
                return item.value
              })
              if (checkeds.length) {
                defaultValue = param.type === 'Radios' ? checkeds[0] : checkeds
              }
            }
            break
          default:
            break
        }
        // 将格式化好后的默认值存储起来
        if (util.exist(defaultValue)) {
          data.params[param.name] = defaultValue
        } else {
          delete data.params[param.name]
        }
      })
    }
  })(),
  watch: function () {
    var self = this
    setTimeout(function () {
      self.$watch('default|json', function () {
        self.parseParamList()
      })
    }, 0)
  },
  computed: {
    // 是否每个参数一排
    stack: 'list.length >= paramsLimit'
  },
  isValidValueType: function (type) {
    return validValueTypes.indexOf(type) !== -1
  },
  paramFitInput: function (param) {
    return this.isValidValueType(param.type) || param.type === 'Email'
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
        tip = '请输入合法邮箱, 格式为 foo@bar.com'
        break
      case 'String':
      case 'Number':
        tip = '请输入' + (param.type === 'String' ? '字符串' : '数字')
        if (param.min) {
          tip += ', 最小值 ' + param.min
        }
        if (param.max) {
          tip += ', 最大值 ' + param.max
        }
        if (param.maxlength) {
          tip += ', 最长 ' + param.maxlength + ' 位'
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
  * 如果指定了 paramToCheck, 那么只有当此参数有错误时才报错
  */
  getParams: function (paramToCheck) {
    var self = this
    var data = self.data
    var $refs = self.$refs
    // clone 一份
    var params = JSON.parse(JSON.stringify(data.params))
    var invalid = data.list.some(function (param) {
      param.invalid = false
      param.invalidTip = ''
      var name = param.name
      // 如果是字符串，trim一下
      var value = params[name]
      if (typeof value === 'string') {
        value = value.trim()
      }
      // 是否是待检查的参数
      var isParamToCheck = paramToCheck && name === paramToCheck.name
      // 参数值是否不存在
      var valueIsEmpty = util.isEmpty(value)
      var valueIsInvalid = false
      // 参数类型
      var type = param.type
      if (self.isValidValueType(type)) {
        type = 'Value'
      }
      switch (type) {
        case 'Value':
          if (!valueIsEmpty) {
            if (param.type === 'Number') {
              value = valueParsers[param.type](value)
              valueIsInvalid = isNaN(value) ||
                (param.min && value < param.min) ||
                (param.max && value > param.max)
            }
            // other types
          }
          break
        case 'Email':
          if (!valueIsEmpty) {
            valueIsInvalid = !self.verifyEmail(value)
          }
          break
        case 'DateStr':
          if (!valueIsEmpty) {
            value = +new Date(value)
            valueIsInvalid = isNaN(value)
            if (!valueIsInvalid) {
              value = dateUtil.format(value, DateStrFormat)
            }
          }
          break
        case 'DateTime':
          if (!valueIsEmpty) {
            value = +dateUtil.dateFromDateTimeLocal(value)
            valueIsInvalid = isNaN(value)
            if (!valueIsInvalid) {
              value = new Date(value)
            }
          }
          break
        case 'Select':
          // value = $refs[name].value
          if (!valueIsEmpty) {
            var parser = valueParsers[util.getClass(param.list[0].value)]
            if (!parser) {
              throw new Error('不支持的Select值类型', validValueTypes)
            }
            value = parser(value)
          }
          break
        case 'Checkboxes':
        case 'Radios':
          value = $refs[name].getChecked()
          if (param.type === 'Checkboxes') {
            valueIsEmpty = !value.length
          } else if (param.type === 'Radios') {
            valueIsEmpty = util.isEmpty(value)
          }
          break
        default:
          break
      }
      // 如果是检查所有参数 或者 是当前要检查的参数，那么当参数值为空时，检测参数是否非法
      if ((!paramToCheck || isParamToCheck) && valueIsEmpty) {
        return self.shouldInvalidEmptyParam(params, param)
      }
      // 参数值非法
      if (valueIsInvalid) {
        return self.invalidParam(param)
      }
      // 只有当参数非空时（空数组）, 才赋值参数值
      if (!valueIsEmpty && util.exist(value)) {
        params[name] = value
      } else {
        delete params[name]
      }
    })
    // 如果当前正在检查某个参数，那么触发 change
    if (paramToCheck) {
      self.$emit('change', params)
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
      return false
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
    var _reg = /^\S+@\S+?\.\S+$/
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
