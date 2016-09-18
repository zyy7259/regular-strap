/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-30 16:40:04
* @Last modified by:   zyy
* @Last modified time: 2016-08-05T14:06:23+08:00
*/

import './checkboxes'
import './radios'

import {default as util} from 'util'

const tpl = require('./index.html')
const suffixTpl = require('./suffix.html')
const DateTimeFormat = 'yyyy-MM-ddThh:mm'
const DateStrFormat = 'yyyy-MM-dd'
const MonthStrFormat = 'yyyy-MM'

if (Regular.directive('r-model2') === undefined) {
  Regular.directive('r-model2', {
    // TODO 理解一下
    link (elem, value) {
      value = this.$get(value)
      return Regular.directive('r-model').link.call(this, elem, value)
    }
  })
} else {
  console.warn('r-model2 指令已经被注册了，请检查兼容性')
}

// 合法的值类型, 这些类型均使用 input:text 来呈现
const validValueTypes = ['String', 'Number', 'Boolean', 'Array', 'Object']
const valueParsers = {
  'String' (value) {
    return '' + value
  },
  'Number' (value) {
    return +value
  },
  'Boolean' (value) {
    return value === 'true'
  },
  'Array' (value) {
    return JSON.parse(value)
  },
  'Object' (value) {
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
 *     - DateTime
 *     - DateStr
 *     - MonthStr
 *     - Select
 *     - Textarea
 *     - Checkboxes
 *     - Radios
 *   - name: String
 *   - desc: String
 *   - mandatory: true/false
 *   - value: 该参数的默认值
 *   - min/max: used by Number
 *   - digits: used by Number, max number of digits after dot
 *   - maxlength: used by input
 *   - list: used by Select/Checkboxes/Radios
 *     - value: String
 *     - desc: String
 *     - selected: Boolean
 *     - checked: Boolean
 *     - spread: 是否将 checkbox 和 radio 展开放在一行
 *   - invalidTip: String 参数非法时展示的提示
 *   - tip: String 参数提示
 *   - showSubtitle: Boolean 是否展示子标题
 * - paramsLimit 超过这个数量, 参数就叠起来
 * - emailReg 验证邮箱的正则表达式
 * - hideMandatory 是否隐藏 * 号
 * - hideColon 是否隐藏 : 号
 * - hideLabel 是否隐藏 label
 * - hideTip 是否隐藏提示
 * - subtitle 子标题
 * - showSubtitle 是否展示子标题
 * - showSubmit 是否展示提交按钮
 * - submitTitle 提交按钮的文案
 * - submitClazz
 * - submitBtnClazz
 * 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙
 * - labelPosClazz
 * - labelColClazz
 * - iptColClazz
 * - default 默认值
 *   - 默认值的优先级 default < param.value < param.list.checked/selected
 *   - 如果需要动态更新参数列表，每次更新参数列表之后都会根据 default 来重新渲染，此种场景下请注意及时更新参数的 default 值
 */
module.exports = Regular.extend({
  name: 'params',
  template: tpl,
  suffixTpl,
  mandatoryTpl: '{#if param.mandatory}<span class="text-danger">*&nbsp;&nbsp;</span>{/if}',
  config () {
    this.initDefault()
    this.parseParamList()
    this.watch()
  },
  initDefault () {
    // 处理 ipt 和 submit 的 class
    let iptColClazz
    let submitClazz = 'col-md-8'
    if (!this.data.hideLabel) {
      iptColClazz = 'col-md-8'
      submitClazz += ' offset-md-3 col-md-offset-3'
    } else {
      iptColClazz = 'col-xs-12'
      submitClazz = 'col-xs-12'
    }
    util.fillUndef(this.data, {
      id: +new Date(),
      list: [],
      default: {},
      paramsLimit: 2,
      hideMandatory: false,
      hideColon: false,
      hideLabel: false,
      hideTip: false,
      showSubmit: false,
      submitTitle: '确定',
      labelPosClazz: 'text-xs-right',
      labelColClazz: 'col-md-3',
      iptColClazz,
      submitClazz,
      submitBtnClazz: 'btn-outline-primary btn-primary-outline'
    })
    this.data.params = {}
  },
  reset () {
    this.data.params = {}
    this.parseParamList()
    this.$update()
  },
  resetParam (name) {
    delete this.data.params[name]
    this.parseParamList()
    this.$update()
  },
  /**
   * - 解析参数默认值
   * - 解析值类型
   */
  parseParamList () {
    const data = this.data
    data.parsedList = data.list.map(param => {
      param = util.simpleClone(param)
      // 解析默认值, 优先级为
      // - 之前输入的值
      // - param.value
      // - data.default
      let defaultValue = data.params[param.name]
      if (util.isEmpty(defaultValue)) {
        defaultValue = param.value
      }
      if (util.isEmpty(defaultValue)) {
        defaultValue = data.default[param.name]
      }
      const defaultIsEmpty = util.isEmpty(defaultValue)
      switch (param.type) {
        case 'Select':
          // Select: 如果没有提供默认值, 那么取第一个为默认值, 如果某一项有 selected, 取其为默认值
          if (defaultIsEmpty) {
            defaultValue = param.list[0].value
          }
          param.list.some(option => {
            if (option.selected) {
              defaultValue = option.value
              return true
            }
          })
          break
        case 'DateTime':
        case 'DateStr':
        case 'MonthStr':
          // DateStr & DateTime: 如果提供了默认值，那么需要格式化一下日期
          if (!defaultIsEmpty) {
            let format = DateTimeFormat
            if (param.type === 'DateStr') {
              format = DateStrFormat
            } else if (param.type === 'MonthStr') {
              format = MonthStrFormat
            }
            defaultValue = +new Date(defaultValue)
            if (!isNaN(defaultValue)) {
              defaultValue = util.format(defaultValue, format)
            } else {
              defaultValue = null
            }
          }
          break
        case 'Checkboxes':
        case 'Radios':
          // 如果没有 checked 并且提供了默认值, 那么根据默认值勾选对应的 item
          const hasChecked = param.list.some(item => item.checked)
          if (!hasChecked && !defaultIsEmpty) {
            param.list.forEach(item => {
              let checked
              if (param.type === 'Checkboxes') {
                checked = defaultValue.indexOf(item.value) !== -1
              } else {
                checked = item.value === defaultValue
              }
              item.checked = checked
            })
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
      return param
    })
    // console.log(data.parsedList.length, data.parsedList)
  },
  watch () {
    this.data.defaultWatcher = this.$watch('default|json', this.parseParamList.bind(this), {
      sync: true
    })
    this.data.listWatcher = this.$watch('list|json', this.parseParamList.bind(this), {
      sync: true
    })
  },
  unwatch () {
    this.$unwatch(this.data.defaultWatcher)
    this.$unwatch(this.data.listWatcher)
  },
  computed: {
    // 是否每个参数一排
    stack: 'list.length >= paramsLimit'
  },
  isValidValueType (type) {
    return validValueTypes.indexOf(type) !== -1
  },
  paramFitInput (param) {
    return this.isValidValueType(param.type) || param.type === 'Email' || param.type === 'Password'
  },
  genInputType (param) {
    switch (param.type) {
      case 'Email':
        return 'email'
      case 'Password':
        return 'password'
      default:
        return 'text'
    }
  },
  paramFitDateInput (param) {
    return param.type === 'DateTime' || param.type === 'DateStr' || param.type === 'MonthStr'
  },
  genDateInputType (param) {
    switch (param.type) {
      case 'DateTime':
        return 'datetime-local'
      case 'DateStr':
        return 'date'
      case 'MonthStr':
        return 'month'
    }
  },
  genParamId (param) {
    return this.data.id + '-param-' + param.name
  },
  genParamTip (param) {
    let tip = param.invalidTip || param.tip || ''
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
      case 'DateTime':
      case 'DateStr':
      case 'MonthStr':
        tip = '请选择日期'
        break
    }
    return tip
  },
  /**
  * 获取参数, 有错误的话返回 false, 正常的话返回所有的参数
  * 如果指定了 paramToCheck, 那么只有当此参数有错误时才报错
  */
  getParams (paramToCheck) {
    const data = this.data
    const $refs = this.$refs
    if (!$refs) { return {} }
    let params = data.params
    // 有的参数存的值跟放出去的是不一样的
    // - 数字, 存的是字符串 (不能存数字, 否则小西点会被丢掉), 放出去的是数字
    // - DateTime，存的是字符串，放出去的是日期对象
    let paramsToEmit = {}
    const invalid = data.parsedList.some(param => {
      param.invalid = false
      const name = param.name
      // 如果是字符串，trim一下
      let value = params[name]
      if (typeof value === 'string') {
        value = value.trim()
      }
      const originValue = value
      // 是否是待检查的参数
      const isParamToCheck = paramToCheck && name === paramToCheck.name
      // 参数值是否不存在
      let valueIsEmpty = util.isEmpty(value)
      let valueIsInvalid = false
      // 参数类型
      let type = param.type
      if (this.isValidValueType(type)) {
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
              if (!valueIsInvalid) {
                let origin = originValue
                // 截取小数点后的位数
                const dotIndex = originValue.indexOf('.')
                if (param.digits && dotIndex !== -1) {
                  let digits = +param.digits
                  digits = isNaN(digits) ? 2 : digits
                  origin = origin.slice(0, dotIndex + digits + 1)
                  value = +origin
                }
                paramsToEmit[name] = value
                value = origin
              }
            }
            // other types
          }
          break
        case 'Email':
          if (!valueIsEmpty) {
            valueIsInvalid = !this.verifyEmail(value)
          }
          break
        case 'DateStr':
        case 'MonthStr':
          if (!valueIsEmpty) {
            value = +new Date(value)
            valueIsInvalid = isNaN(value)
            if (!valueIsInvalid) {
              var format = DateStrFormat
              if (type === 'MonthStr') {
                format = MonthStrFormat
              }
              value = util.format(value, format)
            }
          }
          break
        case 'DateTime':
          if (!valueIsEmpty) {
            value = +util.dateFromDateTimeLocal(value)
            valueIsInvalid = isNaN(value)
            if (!valueIsInvalid) {
              paramsToEmit[name] = new Date(value)
              value = util.format(value, DateTimeFormat)
            }
          }
          break
        case 'Select':
          // value = $refs[name].value
          if (!valueIsEmpty) {
            const parser = valueParsers[util.getClass(param.list[0].value)]
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
      // 如果是检查所有参数 或者 是当前要检查的参数, 那么当参数值为空时, 检测参数是否非法
      if ((!paramToCheck || isParamToCheck) && valueIsEmpty) {
        return this.shouldInvalidEmptyParam(params, param)
      }
      // 参数值非法
      if (valueIsInvalid) {
        this.invalidParam(param)
        // 如果是检查所有参数 或者 是当前要检查的参数, 那么返回非法, 结束当前检查, 否则继续检查下一个参数
        if (!paramToCheck || isParamToCheck) {
          return true
        }
      }
      // 只有当参数合法并且非空时(空数组也是空), 才存储该参数的值
      if (!valueIsInvalid && !valueIsEmpty && util.exist(value)) {
        params[name] = value
        // 只有 paramsToEmit 不存在该值时, 才存储, 如果有该值, 说明上面 switch 时已经存储过了
        if (!paramsToEmit[name]) {
          paramsToEmit[name] = value
        }
      } else {
        delete paramsToEmit[name]
      }
    })
    if (!invalid) {
      // 如果当前正在检查某个参数，那么触发 change
      if (paramToCheck) {
        this.$emit('change', paramsToEmit)
      }
      return paramsToEmit
    }
    return false
  },
  /**
  * 对于空的参数, 如果是必须的, 那么它是 invalid
  * 如果不是必须的, 那么从最终的结果里面删除它
  */
  shouldInvalidEmptyParam (params, param) {
    if (param.mandatory) {
      return this.invalidParam(param)
    } else {
      delete params[param.name]
      delete this.data.params[param.name]
      return false
    }
  },
  invalidParam (param) {
    param.invalid = true
    const ref = this.$refs[param.name]
    if (ref.tagName && ref.tagName.toLowerCase() === 'input') {
      ref.focus()
    }
    return true
  },
  verifyEmail: (() => {
    const _reg = /^\S+@\S+?\.\S+$/
    return function (email) {
      const reg = this.data.emailReg || _reg
      return reg.test(email)
    }
  })(),
  submit (event) {
    event.stop()
    const params = this.getParams()
    if (params) {
      this.$emit('submit', params)
    }
  }
})
