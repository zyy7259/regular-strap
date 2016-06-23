/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-22 19:35:33
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-07 21:03:14
*/

var dom = Regular.dom

module.exports = Regular.extend({
  name: 'dropdown',
  template: require('./index.html'),
  config: function () {
    var self = this
    self.unopenHandler = self.unopen.bind(self)
    dom.on(document, 'click', self.unopenHandler)
  },
  unopen: function (event) {
    var target = event.target
    if (dom.hasClass(target, 'btn')) {
      return
    }
    var self = this
    var data = self.data
    data.open = false
    self.$update()
  },
  destroy: function () {
    var self = this
    self.supr()
    dom.off(document, 'click', self.unopenHandler)
  }
})
