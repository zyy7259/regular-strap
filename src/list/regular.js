/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-25 12:39:43
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-05-01 20:10:52
*/

define([
  './index.js'
], function (List) {
  return List.extend({

    init: function () {
      var self = this
      self.supr()
      self.load()
    },

    destroy: function () {
      var self = this
      self.supr()
      self.unload()
    }

  })
})
