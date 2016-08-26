/*
* @Author: Zhang Yingya(hzzhangyingya)
* @Date:   2016-06-13 14:49:26
* @Last modified by:   zyy
* @Last modified time: 2016-07-10 16:03:33
*/

export default Regular.extend({
  name: 'search',
  template: require('./index.html'),
  input () {
    this.$emit('change', this.data.search)
  }
})
