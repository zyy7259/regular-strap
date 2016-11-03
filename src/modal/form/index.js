const tpl = require('./index.html')

export default Regular.extend({
  name: 'modalForm',
  template: tpl,
  config () {
    this.supr()
    this.initParamList()
  },
  initParamList () {
  },
  init () {
    var data = this.data
    // 确认的时候不要自动隐藏, 要在请求结束后再隐藏, 隐藏后会自动销毁
    data.autoHideWhenConfirm = false
    data.list = data.paramList || []
    data.paramsLimit = 0
    this.$refs.modal.data = Object.assign(this.$refs.modal.data, data, data.modalData || {})
    this.$refs.params.data = Object.assign(this.$refs.params.data, data, data.paramsData || {})
    if (data.autoShow !== false) {
      this.show()
    }
  },
  show () {
    this.$refs.modal.show()
  },
  hide () {
    this.$refs.modal.hide()
  },
  // override, 检查参数, 如果不合法那么直接返回, 否则抛出 create
  confirm () {
    let params = this.$refs.params
    if (params) {
      // 重置所有的错误
      params.clearAllInvalid()
      params = params.getParams()
      if (params) {
        this.$refs.modal.data.loading = true
        this.$emit('confirm')
        this.afterConfirm(params)
      }
    }
  },
  afterConfirm () {
    this.resetLoading()
  },
  resetLoading () {
    this.$refs.modal.data.loading = false
    this.$update()
  }
})
