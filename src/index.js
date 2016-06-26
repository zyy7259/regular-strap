/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:04:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-26 18:07:48
*/

var Dropdown = require('./dropdown')
var EditingInput = require('./editingInput')
var Loading = require('./loading')
var Modal = require('./modal')
var Pager = require('./pager')
var Param = require('./param')
var Search = require('./search')
var Tab = require('./tab')

var RegularStrap = {
  Dropdown: Dropdown,
  EditingInput: EditingInput,
  Loading: Loading,
  Modal: Modal,
  Pager: Pager,
  Param: Param,
  Search: Search,
  Tab: Tab
}

module.exports = RegularStrap
