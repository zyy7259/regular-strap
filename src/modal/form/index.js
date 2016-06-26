/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-31 13:46:32
* @Last modified by:   zyy
* @Last modified time: 2016-06-26 18:08:59
*/

require('../../param')
var Modal = require('../index')
var tpl = require('./index.html')

module.exports = Modal.extend({
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
