/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-22 11:31:18
* @Last modified by:   zyy
* @Last modified time: 2016-06-26 18:09:11
*/

var tpl = require('./index.html')
var paneTpl = require('./pane.html')

var Tab = Regular.extend({
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

Tab.Pane = Regular.extend({
  name: 'tabPane',
  template: paneTpl,
  config: function () {
    var self = this
    self.data.disableClick = self.$outer.data.disableClick
    self.$outer.data.tabs[self.data.id] = self
    self.$outer.data.tabArray.push(self)
    if (self.data.selected) {
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

module.exports = Tab
