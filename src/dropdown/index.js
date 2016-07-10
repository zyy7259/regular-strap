/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-22 19:35:33
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 16:24:09
*/

const dom = Regular.dom

const tpl = require('./index.html')

export default Regular.extend({
  name: 'dropdown',
  template: tpl,
  config: function () {
    this.unopenHandler = this.unopen.bind(this)
    dom.on(document, 'click', this.unopenHandler)
  },
  unopen: function (event) {
    const target = event.target
    if (dom.hasClass(target, 'btn')) {
      return
    }
    const data = this.data
    data.open = false
    this.$update()
  },
  destroy: function () {
    this.supr()
    dom.off(document, 'click', this.unopenHandler)
  }
})
