/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-02 16:45:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 16:02:22
*/

Regular.extend({
  name: 'accordionPaneTitle',
  template: '<div style="cursor:pointer;" on-click={this.toggle()}>{#include this.$body}</div>',
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

Regular.extend({
  name: 'accordionPaneCnt',
  template: '<div r-class={{collapse:!this.$outer.data.open}}>{#include this.$body}</div>',
  config: function () {
    if (this.$outer) {
      this.$outer.$cnt = this
    }
  }
})

Regular.extend({
  name: 'accordionPane',
  template: '<div>{#include this.$body}</div>',
  config: function () {
    if (this.$outer && this.$outer.data.$panes) {
      this.$outer.data.$panes.push(this)
    }
  },
  toggle: function () {
    console.log('toggle')
  }
})

module.exports = Regular.extend({
  name: 'accordion',
  template: '{#include this.$body}',
  config: function () {
    this.data.$panes = []
  }
})
