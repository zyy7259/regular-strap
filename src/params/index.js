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
 * - caption 顶部文字
 * - captionClazz 顶部自定义样式类
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
 *     - Date
 *     - DateStr
 *     - MonthStr
 *     - Select
 *     - Textarea
 *     - Checkbox
 *     - Checkboxes
 *     - Radios
 *   - name: String
 *   - desc: String
 *   - descHead: String
 *   - descTail: String
 *   - mandatory: true/false
 *   - value: 该参数的默认值
 *     - Checkbox 的值为 true/false
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
 *   - iptClazz: 如果是 input, 给 input 的 class
 *   - disabled: 是否禁用该参数, 禁用的时候不会读取参数的值, 可以设置 required=true 来强制读取该参数的值
 *   - required: 禁用状态下是否需要读取参数的值
 *   - ignore: 是否忽略该参数, 如果忽略, 既不渲染该参数, 也不返回该参数的值
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
 * - footer 底部文字
 * - footerClazz 底部自定义样式类
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
  },
  resetParam (name) {
    delete this.data.params[name]
  },
  resetParamWithValue (name, value) {
    this.data.params[name] = value
  },
  clearAllInvalid () {
    this.data.list.forEach(param => {
      param.invalid = false
    })
    this.$update()
  },
  /**
   * - 解析参数默认值
   * - 解析值类型
   */
  parseParamList () {
    const data = this.data
    data.parsedList = data.list.map((param, index) => {
      param = util.simpleClone(param)
      // 如果忽略该参数, 那么直接返回
      if (param.ignore) {
        return param
      }
      const parsedParam = data.parsedList ? data.parsedList[index] || {} : {}
      // 维持 invalid 状态
      if (parsedParam.invalid) {
        param.invalid = true
      }
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
          // Select: 如果没有提供默认值或者默认值找不到, 那么取第一个为默认值, 如果某一项有 selected, 取其为默认值
          let invalidDefault = !defaultIsEmpty && param.list.every(option => {
            return option.value !== defaultValue
          })
          if (defaultIsEmpty || invalidDefault) {
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
        case 'Date':
        case 'DateStr':
        case 'MonthStr':
          // 如果提供了默认值，那么需要格式化一下日期
          if (!defaultIsEmpty) {
            let format = DateTimeFormat
            if (param.type === 'Date' || param.type === 'DateStr') {
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
          if (parsedParam.valueIsEmpty) {
            param.list.forEach(item => {
              item.checked = false
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
    return param.type === 'DateTime' || param.type === 'Date' || param.type === 'DateStr' || param.type === 'MonthStr'
  },
  genDateInputType (param) {
    switch (param.type) {
      case 'DateTime':
        return 'datetime-local'
      case 'Date':
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
        if (util.exist(param.min)) {
          tip += ', 最小值 ' + param.min
        }
        if (util.exist(param.max)) {
          tip += ', 最大值 ' + param.max
        }
        if (param.maxlength) {
          tip += ', 最长 ' + param.maxlength + ' 位'
        }
        break
      case 'DateTime':
      case 'Date':
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
      // 如果忽略该参数, 那么直接返回
      if (param.ignore) {
        return
      }
      param.invalid = false
      const name = param.name
      // 如果是字符串，trim一下
      let value = params[name]
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
          if (param.type === 'String' && !valueIsEmpty) {
            valueIsEmpty = util.isEmpty(value.trim())
          }
          if (!valueIsEmpty) {
            if (param.type === 'Number') {
              value = valueParsers[param.type](value)
              valueIsInvalid = isNaN(value) ||
                (util.exist(param.min) && value < param.min) ||
                (util.exist(param.max) && value > param.max)
              if (!valueIsInvalid) {
                let origin = '' + originValue
                // 截取小数点后的位数
                const dotIndex = origin.indexOf('.')
                if (util.exist(param.digits) && dotIndex !== -1) {
                  let digits = +param.digits
                  digits = isNaN(digits) ? 0 : digits
                  origin = origin.slice(0, digits ? dotIndex + digits + 1 : dotIndex)
                  value = +origin
                }
                paramsToEmit[name] = value
                value = origin
              }
            }
            if (param.type === 'String') {
              paramsToEmit[name] = value.trim()
            }
            // other types
          }
          break
        case 'Email':
          if (!valueIsEmpty) {
            valueIsInvalid = !this.verifyEmail(value)
          }
          break
        case 'Checkbox':
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
        case 'Date':
          if (!valueIsEmpty) {
            value = +util.dateFromDateTimeLocal(value)
            valueIsInvalid = isNaN(value)
            if (!valueIsInvalid) {
              paramsToEmit[name] = new Date(value)
              format = DateStrFormat
              if (type === 'DateTime') {
                format = DateTimeFormat
              }
              value = util.format(value, format)
            }
          }
          break
        case 'Select':
          // value = $refs[name].value
          if (!valueIsEmpty) {
            // 最后一个选项的类型应该是正确的, 第一个不一定
            const parser = valueParsers[util.getClass(param.list[param.list.length - 1].value)]
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
      // 如果参数被禁用, 那么当不需要该参数的时候不存储该参数的值
      if (param.disabled && !param.required) {
        valueIsEmpty = true
      }
      param.valueIsEmpty = valueIsEmpty
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
    // 如果当前正在检查某个参数，那么触发 change
    if (paramToCheck) {
      return this.$emit('change', paramsToEmit)
    }
    if (!invalid) {
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
