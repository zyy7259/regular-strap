/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-29 19:40:47
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-17 14:25:48
*/

define([
  '../loading/index',
  'regular!./index.html'
], function (Loading, tpl) {
  var dom = Regular.dom
  var body = document.querySelector('.g-doc') || document.body
  var counter = 0

  /**
   * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut
   */
  return Regular.extend({
    name: 'modal',
    template: tpl,
    config: function () {
      this.initDefault()
      this.$on('afterFadeOut', this.afterFadeOut.bind(this))
    },
    initDefault: function () {
      this.data.initial = {
        // 使用 JS 始化时, 可以传入内容
        $cnt: null,
        // 是否自动显示
        autoShow: true,
        // 是否在取消时自动销毁
        autoDestroyWhenCancel: true,
        // 是否在确认时自动隐藏
        autoHideWhenConfirm: true,
        // 是否在确认时自动销毁
        autoDestroyWhenConfirm: true,
        // 取消按钮的文案
        cancelTitle: '取 消',
        // 确定按钮的文案
        confirmTitle: '确 定'
      }
      this.supr()
    },
    init: function () {
      if (this.$cnt) {
        this.$cnt.$inject(this.$refs.cnt)
      }
      if (this.data.autoShow) {
        this.show()
      }
    },
    show: function () {
      counter++
      dom.addClass(body, 'modal-open')
      this.$inject(body)
      this.data.show = true
      this.$update()
    },
    click: function (event) {
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
      var shouldDestroy = (this.data.reason === 'cancel' && this.data.autoDestroyWhenCancel) ||
        (this.data.reason === 'confirm' && this.data.autoDestroyWhenConfirm)
      if (shouldDestroy) {
        this.destroy()
      }
    }
  })
})
