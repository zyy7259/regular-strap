/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-31 13:46:32
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-02 19:50:53
*/

define([
  '../index.js',
  '../../param/index',
  'regular!./index.html'
], function (Modal, Param, tpl) {
  return Modal.extend({
    name: 'modalForm',
    $body: tpl,
    config: function () {
      this.supr()
      // 确认的时候不要自动隐藏, 要在请求结束后再隐藏, 隐藏后会自动销毁
      this.data.autoHideWhenConfirm = false
      this.initParamList()
    },
    initParamList: function () {},
    // override, 检查参数, 如果不合法那么直接返回, 否则抛出 create
    confirm: function () {
      var params = this.$refs.params
      if (params) {
        params = params.getParams()
        if (params) {
          this.data.loading = true
          this.supr()
          this.$emit('confirm')
          this.afterConfirm(params)
        }
      }
    },
    afterConfirm: function () {},
    resetLoading: function () {
      this.data.loading = false
      this.$update()
    }
  })
})
