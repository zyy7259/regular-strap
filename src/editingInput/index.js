/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-28 23:53:02
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-08 10:13:33
*/

define([
  'regular!./index.html'
], function (tpl) {
  /**
   * data
   * - value 初始值
   * - newValue 正在被更新的值
   * - editing 是否正在编辑
   * - invalid 非法输入
   * - canEmpty 是否允许空值
   * on-confirm 确定变更
   * on-cancel 取消变更
   */
  return Regular.extend({
    name: 'editingInput',
    template: tpl,
    cancel: function () {
      this.data.newValue = this.data.value
      this.data.editing = false
      this.data.invalid = false
      this.$emit('cancel')
    },
    confirm: function () {
      if (!this.data.newValue && !this.data.canEmpty) {
        this.data.invalid = true
        return
      }
      this.data.invalid = false
      this.$emit('confirm')
    }
  })
})
