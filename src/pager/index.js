/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-19 15:39:01
* @Last modified by:   zyy
* @Last modified time: 2016-06-21 20:19:77
*/

var notNumReg = /[^0-9]/g
var tpl = require('./index.html')

Regular.extend({
  name: 'pager',
  template: tpl,
  config: function () {
    this.initDefault()
    this.caclSize()
    this.watchData()
  },
  initDefault: function () {
    this.data.initial = {
      id: +new Date(),
      // 列表总长度
      total: 0,
      // 每页数量
      limit: 10,
      // size: 页码总数, total/limit
      // 当前页码
      current: 1,
      // 分页器当前页码左右多余的页码数量
      padding: 2,
      // 如果 size 小于此值, 那么全部列出
      sizeLimit: 9,
      // 上一页文案
      prevText: '&laquo;',
      // 下一页文案
      nextText: '&raquo;',
      // 是否展示调整 limit 的 input
      showLimit: false,
      // 是否展示跳页的 input
      showJump: false
    }
    this.supr()
  },
  caclSize: function () {
    this.data.size = Math.ceil(this.data.total / this.data.limit)
  },
  watchData: function () {
    var self = this
    var data = self.data
    self.$watch('limit', function (newValue, oldValue) {
      if (_.isString(newValue)) {
        newValue = newValue.replace(notNumReg, '')
        data.limit = newValue ? parseInt(newValue) : data.total
        self.caclSize()
      }
    })
    self.$watch('jump', function (newValue, oldValue) {
      if (_.isString(newValue)) {
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
      return _.isNumber(jump) && jump > 0 && jump <= data.size && jump !== data.current
    }
  },
  jump: function () {
    var self = this
    var data = self.data
    var jump = data.jump
    if (_.isNumber(jump)) {
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
