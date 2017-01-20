/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-29 19:40:47
* @Last modified by:   zyy
* @Last modified time: 2016-07-13T13:53:22+08:00
*/

import '../loading'
import {default as util} from 'util'

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
 * - autoHideWhenClickMask 是否在点击遮罩的时候自动隐藏
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
  config () {
    this.initDefault()
    this.$on('afterFadeOut', this.afterFadeOut.bind(this))
  },
  initDefault () {
    util.fillUndef(this.data, {
      autoShow: true,
      autoDestroy: true,
      autoDestroyWhenCancel: true,
      autoHideWhenConfirm: true,
      autoDestroyWhenConfirm: true,
      autoHideWhenClickMask: true,
      cancelTitle: '取 消',
      confirmTitle: '确 定'
    })
  },
  computed: {
    sizeClazz () {
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
  init () {
    this.hideDom()
    if (this.data.autoShow) {
      this.show()
    }
  },
  hideDom () {
    this.$refs.backdrop.style.display = 'none'
    this.$refs.modal.style.display = 'none'
  },
  showDom () {
    this.$refs.backdrop.style.display = 'block'
    this.$refs.modal.style.display = 'block'
  },
  show () {
    counter++
    dom.addClass(body, 'modal-open')
    this.showDom()
    this.$inject(body)
    setTimeout(() => {
      this.data.show = true
      this.$update()
    }, 0)
  },
  clickModal (event) {
    // console.log(event)
    if (event.target === this.$refs.modal && this.data.autoHideWhenClickMask) {
      this.cancel()
    }
  },
  /**
   * cancel & confirm 会触发数据的变更, 数据变更会引起 UI 变更, 最终会调用 afterFadeOut 来决定要不要销毁
   * 子类可以覆盖 cancel & confirm, 但是记得要调用 this.supr() 来设置 reason, 这样才能在 afterFadeOut 里面正确判断是否要销毁
   */
  cancel () {
    this.hide()
    this.data.reason = 'cancel'
    this.$emit('cancel')
  },
  act (action) {
    this.confirm(action)
  },
  confirm (action) {
    if (this.data.autoHideWhenConfirm) {
      this.hide()
    }
    this.data.reason = 'confirm'
    this.$emit('confirm', action)
    this.afterConfirm()
  },
  afterConfirm () {
  },
  resetLoading () {
    this.data.loading = false
    this.$update()
  },
  hide () {
    this.data.show = false
    this.data.hide = true
    this.$update()
  },
  afterFadeOut () {
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
