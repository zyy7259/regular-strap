/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-07-02 16:45:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-02 22:59:93
*/

var tpl = require('./index.html')
var paneTpl = require('./pane.html')

Regular.extend({
  name: 'accordionPane',
  template: paneTpl,
  config: function () {
    console.log('config accordionPane')
  }
})

module.exports = Regular.extend({
  name: 'accordion',
  template: tpl,
  config: function () {
    console.log('config accordion')
  }
})
