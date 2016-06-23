/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-31 20:28:05
* @Last modified by:   zyy
* @Last modified time: 2016-06-22 10:21:41
*/

var tpl = require('./index.html')

module.exports = Regular.extend({
  name: 'checkboxes',
  template: tpl,
  config: function () {
    this.updateDefaultCheckeds()
    this.watch()
  },
  updateDefaultCheckeds: function () {
    this.data.defaultCheckeds = this.data.list.filter(function (checkbox) {
      return checkbox.checked
    }).map(function (checkbox) {
      return checkbox.value
    })
    this.data.currChecked = this.data.defaultCheckeds.slice(0)
  },
  watch: function () {
    var self = this
    self.$watch('list', function () {
      self.updateDefaultCheckeds()
    })
  },
  isDefaultChecked: function (checkbox) {
    return this.data.defaultCheckeds.indexOf(checkbox.value) !== -1
  },
  isCurrChecked: function (checkbox) {
    return this.data.currChecked.indexOf(checkbox.value) !== -1
  },
  genClass: function (checkbox) {
    var isDefaultChecked = this.isDefaultChecked(checkbox)
    var isCurrChecked = this.isCurrChecked(checkbox)
    if (isDefaultChecked && isCurrChecked) {
      return 'has-success'
    } else if ((isDefaultChecked && !isCurrChecked) ||
    (!isDefaultChecked && isCurrChecked)) {
      return 'has-warning'
    }
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
