/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-28 23:53:02
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 15:53:51
*/

const tpl = require('./index.html')
require('./index.css')

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
export default Regular.extend({
  name: 'editableInput',
  template: tpl,
  config () {
    if (!this.data.tmp) {
      this.data.tmp = this.data.value
    }
  },
  cancel () {
    this.data.tmp = this.data.value
    this.reset()
    this.$emit('cancel')
  },
  confirm (event) {
    event.stop()
    if (!this.data.tmp && !this.data.canEmpty) {
      this.data.invalid = true
      return
    }
    this.reset()
    this.$emit('confirm', this.data.tmp)
  },
  reset () {
    this.data.editing = false
    this.data.invalid = false
  }
})
