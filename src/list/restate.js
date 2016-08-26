/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-25 13:25:08
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-05-01 22:26:41
*/

define([
  './index.js',
  'pro/base/util'
], function (List, du) {
  return List.extend({

    config () {
      var self = this
      self.supr()
    },

    enter (options) {
      var self = this
      var data = self.data
      data.param = options.param
      data.query = du._$fetch(du._$merge({}, data.queryBase, data.query), options.param)
      // 如果自动加载, 那么再加载
      if (data.autoLoad) {
        self.load()
      }
      self.update(options)
    },

    leave (options) {
      this.unload()
    },

    update (options) {
      this.$update()
    }

  })
})
