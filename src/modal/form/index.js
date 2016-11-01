const tpl = require('./index.html')

export default Regular.extend({
  name: 'modalForm',
  template: tpl,
  config () {
    this.supr()
    this.initParamList()
  },
  initParamList () {
    this.data.paramList = []
  },
  init () {
    // 确认的时候不要自动隐藏, 要在请求结束后再隐藏, 隐藏后会自动销毁
    this.data.autoHideWhenConfirm = false
    this.data.list = this.data.paramList
    this.data.paramsLimit = 0
    this.$refs.modal.data = Object.assign(this.$refs.modal.data, this.data)
    this.$refs.params.data = Object.assign(this.$refs.params.data, this.data)
    if (this.data.autoShow !== false) {
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
