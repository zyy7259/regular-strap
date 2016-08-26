/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-27 09:58:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-26T17:05:13+08:00
*/

import {default as util} from 'util'

export default Regular.extend({
  config () {
    util.fillUndef(this.data, {
      colClazz: 'col-xs-6 p-l-0',
      spreadClazz: 'm-r-1'
    })
    this.resetDefaultCheckeds()
    this.watch()
  },
  resetDefaultCheckeds () {
    this.data.currChecked = this.data.param.list.filter(item => item.checked).map(item => item.value)
    // 如果提供了上一次的值，那么默认选中的应该是它们，否则默认选中的就是当前选中的
    var v = this.data.param.previousValue
    if (v) {
      this.data.defaultCheckeds = Array.isArray(v) ? v : [v]
    } else {
      this.data.defaultCheckeds = this.data.currChecked.slice(0)
    }
  },
  watch () {
    this.$watch('param.list|json', this.resetDefaultCheckeds.bind(this))
    this.$watch('param.previousValue', this.resetDefaultCheckeds.bind(this))
  },
  isDefaultChecked (item) {
    return this.data.defaultCheckeds.indexOf(item.value) !== -1
  },
  isCurrChecked (item) {
    return this.data.currChecked.indexOf(item.value) !== -1
  },
  shouldDisable (item) {
    return item.disabled
  },
  genClass (item) {
    var clazz
    var isDefaultChecked = this.isDefaultChecked(item)
    var isCurrChecked = this.isCurrChecked(item)
    if (isDefaultChecked && isCurrChecked) {
      clazz = 'has-success'
    } else if ((isDefaultChecked && !isCurrChecked) || (!isDefaultChecked && isCurrChecked)) {
      clazz = 'has-warning'
    }
    if (this.shouldDisable(item)) {
      clazz += ' disabled'
    }
    if (this.data.param.spread) {
      clazz += ' ' + this.data.spreadClazz
    }
    return clazz
  }
})
