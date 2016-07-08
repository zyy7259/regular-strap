/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-19 15:39:01
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 12:08:27
*/

var notNumReg = /[^0-9]/g
var tpl = require('./index.html')
var util = require('zoro-base')

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
    util.fillUndef(this.data, {
      id: +new Date(),
      total: 0,
      limit: 10,
      current: 1,
      padding: 2,
      sizeLimit: 9,
      prevText: '&laquo;',
      nextText: '&raquo;',
      showLimit: false,
      showJump: false
    })
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
