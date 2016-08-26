/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-04-29 17:01:24
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-04-29 19:39:15
*/

define(function () {
  return Regular.extend({
    data: {
      limit: 10,
      current: 1
    },
    computed: {
      total: 'Math.ceil(list.length / limit)',
      listShown: 'list.slice((current-1)*limit, (current-1)*limit + limit)'
    },
    init () {
      var self = this
      var data = self.data
      self.$watch('list', function () {
        data.current = 1
        self.$update()
      })
    }
  })
})
