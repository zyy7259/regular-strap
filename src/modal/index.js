/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-29 19:40:47
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 16:24:12
*/

import '../loading'
import * as util from 'zoro-base'

const tpl = require('./index.html')
const dom = Regular.dom
const body = document.querySelector('.g-doc') || document.body
let counter = 0

/**
 * data
 * - size
 *   - lg/large
 *   - sm/small
 * - autoShow 是否自动显示
 * - autoDestroy 是否要自动销毁
 * - autoDestroyWhenCancel 是否在取消时自动销毁
 * - autoHideWhenConfirm 是否在确认时自动隐藏
 * - autoDestroyWhenConfirm 是否在确认时自动销毁
 * - cancelTitle 取消按钮的文案
 * - confirmTitle 确定按钮的文案
 * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut
 */
export default Regular.extend({
  name: 'modal',
  template: tpl,
  config: function () {
    this.initDefault()
    this.$on('afterFadeOut', this.afterFadeOut.bind(this))
  },
  initDefault: function () {
    util.fillUndef(this.data, {
      autoShow: true,
      autoDestroy: true,
      autoDestroyWhenCancel: true,
      autoHideWhenConfirm: true,
      autoDestroyWhenConfirm: true,
      cancelTitle: '取 消',
      confirmTitle: '确 定'
    })
  },
  computed: {
    sizeClazz: function () {
      switch (this.data.size) {
        case 'lg':
        case 'large':
          return 'modal-lg'
        case 'sm':
        case 'small':
          return 'modal-sm'
        default:
          break
      }
      return ''
    }
  },
  init: function () {
    this.hideDom()
    if (this.data.autoShow) {
      this.show()
    }
  },
  hideDom: function () {
    this.$refs.backdrop.style.display = 'none'
    this.$refs.modal.style.display = 'none'
  },
  showDom: function () {
    this.$refs.backdrop.style.display = 'block'
    this.$refs.modal.style.display = 'block'
  },
  show: function () {
    counter++
    dom.addClass(body, 'modal-open')
    this.showDom()
    this.$inject(body)
    setTimeout(() => {
      this.data.show = true
      this.$update()
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
  act: function (action) {
    this.confirm(action)
  },
  confirm: function (action) {
    if (this.data.autoHideWhenConfirm) {
      this.hide()
    }
    this.data.reason = 'confirm'
    let eventName = 'confirm'
    if (action) {
      eventName = action.value
    }
    this.$emit(eventName, action)
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
    this.hideDom()
    const shouldDestroy = (this.data.reason === 'cancel' &&
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
