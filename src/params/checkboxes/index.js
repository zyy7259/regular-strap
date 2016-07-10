/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-31 20:28:05
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 16:13:63
*/

import { default as Checkable } from '../checkable'

const tpl = require('./index.html')

export default Checkable.extend({
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
    const checked = event.target.checked
    const value = checkbox.value
    if (checked) {
      this.data.currChecked.push(value)
    } else {
      const index = this.data.currChecked.findIndex(id => id === value)
      if (index !== -1) {
        this.data.currChecked.splice(index, 1)
      }
    }
    this.$emit('change')
  }
})
