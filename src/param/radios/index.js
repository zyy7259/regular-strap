/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:01:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-05 21:36:80
*/

var tpl = require('./index.html')
var suffixTpl = require('../suffix.html')
var Checkable = require('../checkable')

module.exports = Checkable.extend({
  name: 'radios',
  template: tpl,
  suffixTpl: suffixTpl,
  config: function () {
    this.data.name = +new Date()
    if (this.data.param.checkable) {
      this.data.param.spread = true
      this.data.checked = this.data.param.checked
      this.data.previousChecked = this.data.param.previousChecked
      if (this.data.previousChecked === undefined) {
        this.data.previousChecked = this.data.checked
      }
    }
    this.resetDefaultCheckeds()
    this.watch()
  },
  shouldDisableRadio: function (radio) {
    if (this.data.param.checkable) {
      return !this.data.checked || this.data.param.disabled
    } else {
      return radio.disabled
    }
  },
  genClass: function (radio) {
    var clazz = this.supr(radio) || ''
    if (this.shouldDisableRadio(radio)) {
      clazz += ' disabled'
    }
    if (this.data.param.spread) {
      clazz += ' m-r-1'
    }
    return clazz
  },
  getChecked: function () {
    if (this.data.param.checkable && !this.data.checked) {
      return undefined
    }
    return this.data.currChecked[0]
  },
  toggle: function () {
    if (this.data.param.disabled) { return }
    this.data.checked = !this.data.checked
    this.$emit('change')
  },
  click: function (event, radio) {
    if (radio.disabled) { return }
    var value = radio.value
    this.data.currChecked = [value]
    this.$emit('change')
  },
  clickBody: function (event) {
  }
})
