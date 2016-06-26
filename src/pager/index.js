/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-19 15:39:01
* @Last modified by:   zyy
* @Last modified time: 2016-06-26 23:35:87
*/

var notNumReg = /[^0-9]/g
var tpl = require('./index.html')

/**
 * data
 * - id ID
 * - total 列表总长度
 * - limit 每页数量
 * - size 页码总数, total/limit
 * - current 当前页码
 * - padding 分页器当前页码左右多余的页码数量
 * - sizeLimit 如果 size 小于此值, 那么全部列出
 * - prevText 上一页文案
 * - nextText 下一页文案
 * - showLimit 是否展示调整 limit 的 input
 * - showJump 是否展示跳页的 input
 */
Regular.extend({
  name: 'pager',
  template: tpl,
  config: function () {
    this.initDefault()
    this.caclSize()
    this.watchData()
  },
  initDefault: function () {
    if (this.data.id === undefined) {
      this.data.id = +new Date()
    }
    if (this.data.total === undefined) {
      this.data.total = 0
    }
    if (this.data.limit === undefined) {
      this.data.limit = 10
    }
    if (this.data.current === undefined) {
      this.data.current = 1
    }
    if (this.data.padding === undefined) {
      this.data.padding = 2
    }
    if (this.data.sizeLimit === undefined) {
      this.data.sizeLimit = 9
    }
    if (this.data.prevText === undefined) {
      this.data.prevText = '&laquo;'
    }
    if (this.data.nextText === undefined) {
      this.data.nextText = '&raquo;'
    }
    if (this.data.showLimit === undefined) {
      this.data.showLimit = false
    }
    if (this.data.showJump === undefined) {
      this.data.showJump = false
    }
  },
  caclSize: function () {
    this.data.size = Math.ceil(this.data.total / this.data.limit)
  },
  watchData: function () {
    var self = this
    var data = self.data
    self.$watch('limit', function (newValue, oldValue) {
      if (typeof newValue === 'string') {
        newValue = newValue.replace(notNumReg, '')
        data.limit = newValue ? parseInt(newValue) : data.total
        self.caclSize()
      }
    })
    self.$watch('jump', function (newValue, oldValue) {
      if (typeof newValue === 'string') {
        newValue = newValue.replace(notNumReg, '')
        if (newValue !== '') {
          newValue = parseInt(newValue)
        }
        data.jump = newValue
      }
    })
    self.$watch(['current', 'total', 'limit'], function (current) {
      self.caclSize()
      if (current > data.size) {
        data.current = 1
      }
      data.begin = current - data.padding
      data.end = current + data.padding
      if (data.begin < 2) {
        data.begin = 2
      }
      if (data.end > data.size - 1) {
        data.end = data.size - 1
      }
      if (current - data.begin <= 1) {
        data.end = data.begin + data.padding * 2
      }
      if (data.end - current <= 1) {
        data.begin = data.end - data.padding * 2
      }
    })
  },
  computed: {
    validJump: function () {
      var data = this.data
      var jump = data.jump
      return typeof jump === 'number' && jump > 0 && jump <= data.size && jump !== data.current
    }
  },
  jump: function () {
    var self = this
    var data = self.data
    var jump = data.jump
    if (typeof jump === 'number') {
      self.nav(jump)
    }
    data.jump = ''
    self.$refs.jump.focus()
  },
  nav: function (page) {
    var self = this
    var data = self.data
    if (page < 1 || page > data.total || page === data.current) {
      return
    }
    data.current = page
    self.$emit('nav', data)
  }
})
