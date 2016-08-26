import {default as Checkable} from '../checkable'

const tpl = require('./index.html')

export default Checkable.extend({
  name: 'checkboxes',
  template: tpl,
  // 获得页面上所有选中的 checkboxes
  getChecked () {
    return this.data.currChecked.slice(0)
  },
  click (event, checkbox) {
    const checked = event.target.checked
    const value = checkbox.value
    if (checked) {
      this.data.currChecked.push(value)
    } else {
      const index = this.data.currChecked.findIndex(id => id === value)
      if (index !== -1) {
        this.data.currChecked.splice(index, 1)
      }
    }
    this.$emit('change')
  }
})
