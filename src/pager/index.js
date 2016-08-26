/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-05-19 15:39:01
* @Last modified by:   zyy
* @Last modified time: 2016-07-13T13:54:23+08:00
*/

import {default as util} from 'util'
require('./index.css')

const tpl = require('./index.html')
const notNumReg = /[^0-9]/g

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
 * - showTotal 是否展示总数
 *   - totalPrefix
 *   - totalSuffix
 *  - on-nav
 */
export default Regular.extend({
  name: 'pager',
  template: tpl,
  config () {
    this.initDefault()
    this.caclSize()
    this.watchData()
  },
  initDefault () {
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
      limitClazz: 'text-muted',
      showJump: false,
      showTotal: false,
      totalClazz: 'text-muted',
      totalPrefix: '共 ',
      totalSuffix: ' 条'
    })
  },
  caclSize () {
    this.data.size = Math.ceil(this.data.total / this.data.limit)
  },
  watchData () {
    const data = this.data
    this.$watch('limit', (newValue, oldValue) => {
      if (typeof newValue === 'string') {
        newValue = newValue.replace(notNumReg, '')
        data.limit = newValue ? parseInt(newValue) : data.total
        this.caclSize()
      }
    })
    this.$watch('jump', function (newValue, oldValue) {
      if (typeof newValue === 'string') {
        newValue = newValue.replace(notNumReg, '')
        if (newValue !== '') {
          newValue = parseInt(newValue)
        }
        data.jump = newValue
      }
    })
    this.$watch(['current', 'total', 'limit'], current => {
      this.caclSize()
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
    validJump () {
      const data = this.data
      const jump = data.jump
      return typeof jump === 'number' && jump > 0 && jump <= data.size && jump !== data.current
    }
  },
  jump () {
    const data = this.data
    const jump = data.jump
    if (typeof jump === 'number') {
      this.nav(jump)
    }
    data.jump = ''
    this.$refs.jump.focus()
  },
  nav (page) {
    const data = this.data
    if (page < 1 || page > data.total || page === data.current) {
      return
    }
    data.current = page
    this.$emit('nav', {
      total: data.total,
      current: data.current,
      limit: data.limit,
      offset: data.limit * (data.current - 1)
    })
  }
})
