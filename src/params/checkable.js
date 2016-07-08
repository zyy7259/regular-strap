/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-27 09:58:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-05 14:58:55
*/

module.exports = Regular.extend({
  resetDefaultCheckeds: function () {
    this.data.currChecked = this.data.param.list.filter(function (item) {
      return item.checked
    }).map(function (item) {
      return item.value
    })
    // 如果提供了上一次的值，那么默认选中的应该是它们，否则默认选中的就是当前选中的
    var v = this.data.param.previousValue
    if (v) {
      this.data.defaultCheckeds = Array.isArray(v) ? v : [v]
    } else {
      this.data.defaultCheckeds = this.data.currChecked.slice(0)
    }
  },
  watch: function () {
    var self = this
    self.$watch('param.list|json', self.resetDefaultCheckeds.bind(self))
    self.$watch('param.previousValue', self.resetDefaultCheckeds.bind(self))
  },
  isDefaultChecked: function (item) {
    return this.data.defaultCheckeds.indexOf(item.value) !== -1
  },
  isCurrChecked: function (item) {
    return this.data.currChecked.indexOf(item.value) !== -1
  },
  genClass: function (item) {
    var isDefaultChecked = this.isDefaultChecked(item)
    var isCurrChecked = this.isCurrChecked(item)
    if (isDefaultChecked && isCurrChecked) {
      return 'has-success'
    } else if ((isDefaultChecked && !isCurrChecked) ||
    (!isDefaultChecked && isCurrChecked)) {
      return 'has-warning'
    }
  }
})
