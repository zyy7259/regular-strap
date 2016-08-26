/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-22 11:31:18
* @Last modified by:   zyy
* @Last modified time: 2016-07-28T18:33:53+08:00
*/

const tpl = require('./index.html')
const paneTpl = require('./pane.html')

Regular.extend({
  name: 'tabPane',
  template: paneTpl,
  config () {
    this.data.disableClick = this.$outer.data.disableClick
    this.$outer.data.tabs[this.data.id] = this
    this.$outer.data.tabArray.push(this)
    if (this.data.selected) {
      this.select()
    }
  },
  select (notEmit) {
    const data = this.data
    if (data.disabled) {
      return
    }
    const $outer = this.$outer
    $outer.data.selected = this
    if (!notEmit) {
      $outer.$emit('nav', data)
    }
  }
})

export default Regular.extend({
  name: 'tab',
  template: tpl,
  config () {
    this.data.tabArray = []
    this.data.tabs = {}
  },
  selectId (id, notEmit) {
    this.selectTab(this.data.tabs[id], notEmit)
  },
  selectIndex (index, notEmit) {
    this.selectTab(this.data.tabArray[index], notEmit)
  },
  selectTab (tab, notEmit) {
    if (tab && tab.select) {
      tab.select(notEmit)
    } else {
      delete this.data.selected
    }
  }
})
