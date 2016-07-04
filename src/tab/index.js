/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-22 11:31:18
* @Last modified by:   zyy
* @Last modified time: 2016-07-02 17:02:83
*/

var tpl = require('./index.html')
var paneTpl = require('./pane.html')

Regular.extend({
  name: 'tabPane',
  template: paneTpl,
  config: function () {
    this.data.disableClick = this.$outer.data.disableClick
    this.$outer.data.tabs[this.data.id] = this
    this.$outer.data.tabArray.push(this)
    if (this.data.selected) {
      this.select()
    }
  },
  select: function (notEmit) {
    var self = this
    var data = self.data
    if (data.disabled) {
      return
    }
    var $outer = self.$outer
    $outer.$update('selected', self)
    if (!notEmit) {
      $outer.$emit('nav', data)
    }
  }
})

module.exports = Regular.extend({
  name: 'tab',
  template: tpl,
  config: function () {
    this.data.tabArray = []
    this.data.tabs = {}
  },
  selectId: function (id, notEmit) {
    var self = this
    self.selectTab(self.data.tabs[id], notEmit)
  },
  selectIndex: function (index, notEmit) {
    var self = this
    self.selectTab(self.data.tabArray[index], notEmit)
  },
  selectTab: function (tab, notEmit) {
    if (tab && tab.select) {
      tab.select(notEmit)
    } else {
      delete this.data.selected
    }
  }
})
