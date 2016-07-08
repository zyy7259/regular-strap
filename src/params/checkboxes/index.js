/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-31 20:28:05
* @Last modified by:   zyy
* @Last modified time: 2016-07-05 01:20:46
*/

var tpl = require('./index.html')
var Checkable = require('../checkable')

module.exports = Checkable.extend({
  name: 'checkboxes',
  template: tpl,
  config: function () {
    this.resetDefaultCheckeds()
    this.watch()
  },
  // 获得页面上所有选中的 checkboxes
  getChecked: function () {
    return this.data.currChecked.slice(0)
  },
  click: function (event, checkbox) {
    var checked = event.target.checked
    var value = checkbox.value
    if (checked) {
      this.data.currChecked.push(value)
    } else {
      var index = this.data.currChecked.findIndex(function (id) {
        return id === value
      })
      if (index !== -1) {
        this.data.currChecked.splice(index, 1)
      }
    }
    this.$emit('change')
  }
})