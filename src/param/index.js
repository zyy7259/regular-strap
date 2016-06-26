/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-30 16:40:04
* @Last modified by:   zyy
* @Last modified time: 2016-06-26 18:21:23
*/

require('./checkboxes')
require('../loading')
var tpl = require('./index.html')

/**
* data.list []
* - type: 'String/Email/Integer/DateStr/Select/Checkboxes'
* - name: String
* - desc: String
* - mandatory: true/false
* - labelClazz: ''
* - iptClazz: ''
* - options: used by Select
*   - value: String
*   - desc: String
* - list: used by checkboxes
*   - value: String
*   - desc: String
*
* data.emailReg
* - 验证邮箱的正则表达式
*
* data.default
* - 默认值
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
    this.data.initial = {
      // ID
      id: +new Date(),
      // 超过这个数量, 参数就叠起来
      paramsLimit: 3,
      // 参数列表
      list: [],
      // 是否隐藏 * 号
      hideMandatory: false,
      // 是否隐藏 : 号
      hideColon: false,
      // 是否隐藏提示
      hideTip: false,
      // 参数值对象
      params: {},
      // 是否展示提交按钮
      showSubmit: false,
      // 提交按钮的文案
      submitTitle: '确定',
      // 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙
      // label 的类
      labelPosClazz: 'text-xs-right',
      labelColClazz: 'col-md-3',
      // ipt 的类
      iptColClazz: 'col-md-8',
      // submit 的类
      submitClazz: 'col-md-offset-3 col-md-8',
      submitBtnClazz: 'btn-primary-outline'
    }
    this.supr()
  },
  // 参数默认值
  mergeParamDefault: function () {
    this.data.params = Object.assign({}, this.data.default)
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
      case 'Integer':
        tip = '请输入数字, '
        if (param.min) {
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
        case 'Integer':
          if (!value) {
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
            if (param.valueType === 'Integer') {
              value = parseInt(value)
              if (isNaN(value)) {
                return self.invalidParam(param)
              }
            }
            params[name] = value
          }
          break
        case 'Checkboxes':
          value = $refs[name].getChecked()
          if (!value.length) {
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
