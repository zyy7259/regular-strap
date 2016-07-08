/**
* @Author: Yingya Zhang <zyy>
* @Date:   2016-06-26 17:04:00
* @Email:  zyy7259@gmail.com
* @Last modified by:   zyy
* @Last modified time: 2016-07-08 10:53:77
*/

var Accordion = require('./accordion')
var Dropdown = require('./dropdown')
var EditableInput = require('./editableInput')
var Loading = require('./loading')
var Modal = require('./modal')
var ModalForm = require('./modal/form')
var Pager = require('./pager')
var Param = require('./params')
var Search = require('./search')
var Tab = require('./tab')

var RegularStrap = {
  Accordion: Accordion,
  Dropdown: Dropdown,
  EditableInput: EditableInput,
  Loading: Loading,
  Modal: Modal,
  ModalForm: ModalForm,
  Pager: Pager,
  Param: Param,
  Search: Search,
  Tab: Tab
}

module.exports = RegularStrap
