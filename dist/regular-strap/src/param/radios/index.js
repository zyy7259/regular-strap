/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:01:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-28 16:33:54
*/

var tpl = require('./index.html')
var Checkable = require('../checkable')

module.exports = Checkable.extend({
  name: 'radios',
  template: tpl,
  config: function () {
    this.data.name = +new Date()
    this.parseDefault()
    this.resetDefaultCheckeds()
    this.watch()
  },
  // 如果提供了默认值，那么勾选对应的 radio
  parseDefault: function () {
    var data = this.data
    if (data.default) {
      data.list.forEach(function (radio) {
        radio.checked = radio.value === data.default
      })
    }
  },
  getChecked: function () {
    return this.data.currChecked[0]
  },
  click: function (event, radio) {
    var value = radio.value
    this.data.currChecked = [value]
    this.$emit('change')
  }
})
