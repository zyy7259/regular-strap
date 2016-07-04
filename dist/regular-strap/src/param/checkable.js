/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-27 09:58:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-27 10:01:08
*/

module.exports = Regular.extend({
  resetDefaultCheckeds: function () {
    this.data.defaultCheckeds = this.data.list.filter(function (item) {
      return item.checked
    }).map(function (item) {
      return item.value
    })
    this.data.currChecked = this.data.defaultCheckeds.slice(0)
  },
  watch: function () {
    var self = this
    self.$watch('list|json', function () {
      self.resetDefaultCheckeds()
    })
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
