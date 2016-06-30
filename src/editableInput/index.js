/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-28 23:53:02
* @Last modified by:   zyy
* @Last modified time: 2016-06-29 22:32:99
*/

var tpl = require('./index.html')
/**
 * data
 * - value 初始值
 * - tmp 正在被更新的值
 * - editing 是否正在编辑
 * - invalid 非法输入
 * - canEmpty 是否允许空值
 * on-confirm 确定变更
 * on-cancel 取消变更
 */
module.exports = Regular.extend({
  name: 'editableInput',
  template: tpl,
  config: function () {
    if (!this.data.tmp) {
      this.data.tmp = this.data.value
    }
  },
  cancel: function () {
    this.data.tmp = this.data.value
    this.reset()
    this.$emit('cancel')
  },
  confirm: function (event) {
    event.stop()
    if (!this.data.tmp && !this.data.canEmpty) {
      this.data.invalid = true
      return
    }
    this.reset()
    this.$emit('confirm', this.data.tmp)
  },
  reset: function () {
    this.data.editing = false
    this.data.invalid = false
  }
})
