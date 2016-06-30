/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-29 19:40:47
* @Last modified by:   zyy
* @Last modified time: 2016-06-30 15:17:34
*/

require('../loading')
var tpl = require('./index.html')
var dom = Regular.dom
var body = document.querySelector('.g-doc') || document.body
var counter = 0

/**
 * data
 * - autoShow 是否自动显示
 * - autoDestroy 是否要自动销毁
 * - autoDestroyWhenCancel 是否在取消时自动销毁
 * - autoHideWhenConfirm 是否在确认时自动隐藏
 * - autoDestroyWhenConfirm 是否在确认时自动销毁
 * - cancelTitle 取消按钮的文案
 * - confirmTitle 确定按钮的文案
 * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut
 */
module.exports = Regular.extend({
  name: 'modal',
  template: tpl,
  config: function () {
    this.initDefault()
    this.$on('afterFadeOut', this.afterFadeOut.bind(this))
  },
  initDefault: function () {
    if (this.data.autoShow === undefined) {
      this.data.autoShow = true
    }
    if (this.data.autoDestroy === undefined) {
      this.data.autoDestroy = true
    }
    if (this.data.autoDestroyWhenCancel === undefined) {
      this.data.autoDestroyWhenCancel = true
    }
    if (this.data.autoHideWhenConfirm === undefined) {
      this.data.autoHideWhenConfirm = true
    }
    if (this.data.autoDestroyWhenConfirm === undefined) {
      this.data.autoDestroyWhenConfirm = true
    }
    if (this.data.cancelTitle === undefined) {
      this.data.cancelTitle = '取 消'
    }
    if (this.data.confirmTitle === undefined) {
      this.data.confirmTitle = '确 定'
    }
  },
  init: function () {
    if (this.data.autoShow) {
      this.show()
    }
  },
  show: function () {
    var self = this
    counter++
    dom.addClass(body, 'modal-open')
    self.$inject(body)
    self.$update()
    setTimeout(function () {
      self.data.show = true
      self.$update()
    }, 0)
  },
  click: function (event) {
    // console.log(event)
    if (event.target === this.$refs.modal) {
      this.cancel()
    }
  },
  /**
   * cancel & confirm 会触发数据的变更, 数据变更会引起 UI 变更, 最终会调用 afterFadeOut 来决定要不要销毁
   * 子类可以覆盖 cancel & confirm, 但是记得要调用 this.supr() 来设置 reason, 这样才能在 afterFadeOut 里面正确判断是否要销毁
   */
  cancel: function () {
    this.hide()
    this.data.reason = 'cancel'
    this.$emit('cancel')
  },
  confirm: function () {
    if (this.data.autoHideWhenConfirm) {
      this.hide()
    }
    this.data.reason = 'confirm'
    this.$emit('confirm')
  },
  hide: function () {
    this.data.show = false
    this.data.hide = true
    this.$update()
  },
  afterFadeOut: function () {
    // 如果还有显示的 Modal, 那么不去 class
    counter--
    if (counter === 0) {
      dom.delClass(body, 'modal-open')
    }

    this.data.hide = false
    this.data.show = false
    var shouldDestroy = (this.data.reason === 'cancel' &&
      this.data.autoDestroyWhenCancel &&
      this.data.autoDestroy) ||
      (this.data.reason === 'confirm' &&
      this.data.autoDestroyWhenConfirm &&
      this.data.autoDestroy)
    if (shouldDestroy) {
      this.destroy()
    }
  }
})
