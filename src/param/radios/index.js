/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:01:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-27 10:48:35
*/

var tpl = require('./index.html')
var Checkable = require('../checkable')

module.exports = Checkable.extend({
  name: 'radios',
  template: tpl,
  config: function () {
    this.data.name = +new Date()
    this.resetDefaultCheckeds()
    this.watch()
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
