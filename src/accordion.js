/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-02 16:45:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 15:48:27
*/

const titleTpl = `
  <div style="cursor:pointer;" on-click={this.toggle()}>
    {#include this.$body}
  </div>
`

Regular.extend({
  name: 'accordionPaneTitle',
  template: titleTpl,
  config: function () {
    if (this.$outer) {
      this.$outer.$title = this
    }
  },
  toggle: function () {
    if (this.$outer && this.$outer.toggle) {
      this.$outer.toggle()
    }
  }
})

const cntTpl = `
  <div r-class={{collapse:!this.$outer.data.open}}>
    {#include this.$body}
  </div>
`

Regular.extend({
  name: 'accordionPaneCnt',
  template: cntTpl,
  config: function () {
    if (this.$outer) {
      this.$outer.$cnt = this
    }
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
  config: function () {
    if (this.$outer && this.$outer.data.$panes) {
      this.$outer.data.$panes.push(this)
    }
  },
  toggle: function () {
    console.log('toggle')
  }
})

const tpl = `
  {#include this.$body}
`

export default Regular.extend({
  name: 'accordion',
  template: tpl,
  config: function () {
    this.data.$panes = []
  }
})
