/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:01:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-26T17:02:26+08:00
*/

import {default as Checkable} from '../checkable'

const tpl = require('./index.html')
const suffixTpl = require('../suffix.html')

export default Checkable.extend({
  name: 'radios',
  template: tpl,
  suffixTpl,
  config () {
    this.data.name = +new Date()
    if (this.data.param.checkable) {
      this.data.param.spread = true
      this.data.checked = this.data.param.checked
      this.data.previousChecked = this.data.param.previousChecked
      if (this.data.previousChecked === undefined) {
        this.data.previousChecked = this.data.checked
      }
    }
    this.supr()
  },
  shouldDisable (radio) {
    if (this.data.param.checkable) {
      return !this.data.checked || this.data.param.disabled
    } else {
      return radio.disabled
    }
  },
  getChecked () {
    if (this.data.param.checkable && !this.data.checked) {
      return undefined
    }
    return this.data.currChecked[0]
  },
  toggle () {
    if (this.data.param.disabled) { return }
    this.data.checked = !this.data.checked
    this.$emit('change')
  },
  click (event, radio) {
    if (radio.disabled) { return }
    const value = radio.value
    this.data.currChecked = [value]
    this.$emit('change')
  }
})
