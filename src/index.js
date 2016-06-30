/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:04:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-06-29 23:46:03
*/

var Dropdown = require('./dropdown')
var EditableInput = require('./editableInput')
var Loading = require('./loading')
var Modal = require('./modal')
var Pager = require('./pager')
var Param = require('./param')
var Search = require('./search')
var Tab = require('./tab')

var RegularStrap = {
  Dropdown: Dropdown,
  EditableInput: EditableInput,
  Loading: Loading,
  Modal: Modal,
  Pager: Pager,
  Param: Param,
  Search: Search,
  Tab: Tab
}

module.exports = RegularStrap
