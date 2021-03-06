/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-02 16:45:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-13T13:53:28+08:00
*/

import {default as util} from 'util'

const titleTpl = `
  <div class="{clazz}" style="cursor:pointer;" on-click={this.toggle()}>
    {#include this.$body}
  </div>
`

const dom = Regular.dom

Regular.extend({
  name: 'accordionPaneTitle',
  template: titleTpl,
  config () {
    if (this.$outer) {
      this.$outer.$title = this
    }
  },
  toggle () {
    if (this.$outer && this.$outer.toggle) {
      this.$outer.toggle()
    }
  }
})

const cntTpl = `
  <div class="{clazz} collapse"
    r-animation="
      when: show && !first;
      wait: 0;
      emit: assignHeight;
      wait: 350;
      emit: done;
    "
    r-animation="
      when: !show && !first;
      style: height 0;
      emit: done;
    "
    ref=body>
    {#include this.$body}
  </div>
`

Regular.extend({
  name: 'accordionPaneCnt',
  template: cntTpl,
  config () {
    if (this.$outer) {
      this.data.show = this.$outer.data.open
      this.$outer.$cnt = this
    }
    // 初始化后马上会触发一次动画，此时是第一次，直接跳过动画
    this.data.first = true
    this.$on('assignHeight', this.assignHeight.bind(this))
    this.$on('done', this.resetCollaping.bind(this))
  },
  init () {
    if (this.data.show) {
      dom.addClass(this.$refs.body, 'in')
    }
  },
  toggle () {
    this.data.first = false
    // 防止多次点击
    if (this.data.collapsing) {
      return
    }
    this.data.collapsing = true
    // 切换数据
    this.data.show = !this.data.show
    // 先赋值高度，再初始化 class，不能反过来，否则有了 class 再赋值的话会触发动画
    if (!this.data.show) {
      this.assignHeight()
    }
    dom.addClass(this.$refs.body, 'collapsing')
    dom.delClass(this.$refs.body, 'collapse')
    dom.delClass(this.$refs.body, 'in')
  },
  assignHeight () {
    this.$refs.body.style.height = util.calcHeight(this.$refs.body) + 'px'
  },
  resetCollaping () {
    // 重置数据、类、高度
    this.data.collapsing = false
    dom.delClass(this.$refs.body, 'collapsing')
    dom.addClass(this.$refs.body, 'collapse')
    if (this.data.show) {
      dom.addClass(this.$refs.body, 'in')
    } else {
      dom.delClass(this.$refs.body, 'in')
    }
    this.$refs.body.style.height = ''
  }
})

const paneTpl = `
  <div>
    {#include this.$body}
  </div>
`

Regular.extend({
  name: 'accordionPane',
  template: paneTpl,
  config () {
    if (this.$outer && this.$outer.data.$panes) {
      this.$outer.data.$panes.push(this)
    }
  },
  toggle () {
    if (this.$cnt) {
      this.$cnt.toggle()
    }
  }
})

const tpl = `
  {#include this.$body}
`

export default Regular.extend({
  name: 'accordion',
  template: tpl,
  config () {
    this.data.$panes = []
  }
})
