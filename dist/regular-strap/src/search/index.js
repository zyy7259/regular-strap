/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-06-13 14:49:26
* @Last Modified by:   Zhang Yingya(hzzhangyingya)
* @Last Modified time: 2016-06-13 14:59:49
*/

module.exports = Regular.extend({
  name: 'search',
  template: require('./index.html'),
  input: function () {
    this.$emit('change', this.data.search)
  }
})
