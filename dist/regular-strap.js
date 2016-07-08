(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("regularjs"));
	else if(typeof define === 'function' && define.amd)
		define(["Regular"], factory);
	else if(typeof exports === 'object')
		exports["RegularStrap"] = factory(require("regularjs"));
	else
		root["RegularStrap"] = factory(root["Regular"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-26 17:04:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 10:53:77\n*/\n\nvar Accordion = __webpack_require__(/*! ./accordion */ 1)\nvar Dropdown = __webpack_require__(/*! ./dropdown */ 3)\nvar EditableInput = __webpack_require__(/*! ./editableInput */ 5)\nvar Loading = __webpack_require__(/*! ./loading */ 7)\nvar Modal = __webpack_require__(/*! ./modal */ 9)\nvar ModalForm = __webpack_require__(/*! ./modal/form */ 24)\nvar Pager = __webpack_require__(/*! ./pager */ 34)\nvar Param = __webpack_require__(/*! ./params */ 25)\nvar Search = __webpack_require__(/*! ./search */ 36)\nvar Tab = __webpack_require__(/*! ./tab */ 38)\n\nvar RegularStrap = {\n  Accordion: Accordion,\n  Dropdown: Dropdown,\n  EditableInput: EditableInput,\n  Loading: Loading,\n  Modal: Modal,\n  ModalForm: ModalForm,\n  Pager: Pager,\n  Param: Param,\n  Search: Search,\n  Tab: Tab\n}\n\nmodule.exports = RegularStrap\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/*!********************************!*\
  !*** ./src/accordion/index.js ***!
  \********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-07-02 16:45:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-07 16:15:84\n*/\n\nRegular.extend({\n  name: 'accordionPaneTitle',\n  template: '<div on-click={this.toggle()}>{#include this.$body}</div>',\n  config: function () {\n    if (this.$outer) {\n      this.$outer.$title = this\n    }\n  },\n  toggle: function () {\n    if (this.$outer && this.$outer.toggle) {\n      this.$outer.toggle()\n    }\n  }\n})\n\nRegular.extend({\n  name: 'accordionPaneCnt',\n  template: '<div>{#include this.$body}</div>',\n  config: function () {\n    if (this.$outer) {\n      this.$outer.$cnt = this\n    }\n  }\n})\n\nRegular.extend({\n  name: 'accordionPane',\n  template: '<div style=\"cursor:pointer;\">{#include this.$body}</div>',\n  config: function () {\n    if (this.$outer && this.$outer.data.$panes) {\n      this.$outer.data.$panes.push(this)\n    }\n  },\n  toggle: function () {\n    console.log('toggle')\n  }\n})\n\nmodule.exports = Regular.extend({\n  name: 'accordion',\n  template: '{#include this.$body}',\n  config: function () {\n    this.data.$panes = []\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/accordion/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/accordion/index.js?");

/***/ },
/* 2 */
/*!**************************************************************************************************!*\
  !*** external {"root":"Regular","amd":"Regular","commonjs":"regularjs","commonjs2":"regularjs"} ***!
  \**************************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 3 */
/*!*******************************!*\
  !*** ./src/dropdown/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-22 19:35:33\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 17:12:68\n*/\n\nvar dom = Regular.dom\nvar tpl = __webpack_require__(/*! ./index.html */ 4)\n\nmodule.exports = Regular.extend({\n  name: 'dropdown',\n  template: tpl,\n  config: function () {\n    var self = this\n    self.unopenHandler = self.unopen.bind(self)\n    dom.on(document, 'click', self.unopenHandler)\n  },\n  unopen: function (event) {\n    var target = event.target\n    if (dom.hasClass(target, 'btn')) {\n      return\n    }\n    var self = this\n    var data = self.data\n    data.open = false\n    self.$update()\n  },\n  destroy: function () {\n    var self = this\n    self.supr()\n    dom.off(document, 'click', self.unopenHandler)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/dropdown/index.js\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/dropdown/index.js?");

/***/ },
/* 4 */
/*!*********************************!*\
  !*** ./src/dropdown/index.html ***!
  \*********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-06-26 18:53:39\\n-->\\n\\n<div class=\\\"btn-group\\\" r-class={{'open':open}}>\\n  {#if href}\\n    <a href={href} class=\\\"btn btn-secondary-outline\\\" target=\\\"_blank\\\">{title}</a>\\n    <button type=\\\"button\\\" class=\\\"btn btn-secondary-outline dropdown-toggle\\\" on-click={open=!open}></button>\\n  {#else}\\n    <button type=\\\"button\\\" class=\\\"btn btn-secondary-outline dropdown-toggle\\\" on-click={open=!open}>{title}</button>\\n  {/if}\\n  <div class=\\\"dropdown-menu\\\">\\n    {#list items as item}\\n      <a href={item.href} class=\\\"dropdown-item\\\" target=\\\"_blank\\\" on-click={this.unopen($event)}>{item.title}</a>\\n    {/list}\\n  </div>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/dropdown/index.html\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/dropdown/index.html?");

/***/ },
/* 5 */
/*!************************************!*\
  !*** ./src/editableInput/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-28 23:53:02\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-29 22:32:99\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 6)\n/**\n * data\n * - value 初始值\n * - tmp 正在被更新的值\n * - editing 是否正在编辑\n * - invalid 非法输入\n * - canEmpty 是否允许空值\n * on-confirm 确定变更\n * on-cancel 取消变更\n */\nmodule.exports = Regular.extend({\n  name: 'editableInput',\n  template: tpl,\n  config: function () {\n    if (!this.data.tmp) {\n      this.data.tmp = this.data.value\n    }\n  },\n  cancel: function () {\n    this.data.tmp = this.data.value\n    this.reset()\n    this.$emit('cancel')\n  },\n  confirm: function (event) {\n    event.stop()\n    if (!this.data.tmp && !this.data.canEmpty) {\n      this.data.invalid = true\n      return\n    }\n    this.reset()\n    this.$emit('confirm', this.data.tmp)\n  },\n  reset: function () {\n    this.data.editing = false\n    this.data.invalid = false\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/editableInput/index.js\n ** module id = 5\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/editableInput/index.js?");

/***/ },
/* 6 */
/*!**************************************!*\
  !*** ./src/editableInput/index.html ***!
  \**************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-06-29 22:32:97\\n-->\\n\\n<form class=\\\"m-editableInput form-inline {clazz}\\\" r-class={{'has-danger':invalid}} on-submit={this.confirm($event)}>\\n  {#if !editing}\\n    <label class=\\\"form-control-label p-l-0 text-truncate\\\" r-class={{'font-weight-bold':bold, 'text-muted':mute}}>\\n      {value}\\n    </label>\\n    {#if !notEditable}\\n      <i class=\\\"fa fa-edit fa-btn\\\" on-click={editing=true}></i>\\n    {/if}\\n  {#else}\\n    <input class=\\\"form-control\\\" type=\\\"text\\\" r-model={tmp} on-input={invalid = !tmp && !canEmpty} autofocus>\\n    <i class=\\\"fa fa-check fa-btn\\\" r-class={{disabled:invalid}} on-click={this.confirm($event)}></i>\\n    <i class=\\\"fa fa-close fa-btn\\\" on-click={this.cancel()}></i>\\n  {/if}\\n</form>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/editableInput/index.html\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/editableInput/index.html?");

/***/ },
/* 7 */
/*!******************************!*\
  !*** ./src/loading/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-30 14:56:44\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-22 10:20:64\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 8)\n\nmodule.exports = Regular.extend({\n  name: 'loading',\n  template: tpl\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/loading/index.js\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/loading/index.js?");

/***/ },
/* 8 */
/*!********************************!*\
  !*** ./src/loading/index.html ***!
  \********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<i class=\\\"fa fa-spinner fa-pulse {clazz}\\\"></i>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/loading/index.html\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/loading/index.html?");

/***/ },
/* 9 */
/*!****************************!*\
  !*** ./src/modal/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-29 19:40:47\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 12:07:33\n*/\n\n__webpack_require__(/*! ../loading */ 7)\nvar tpl = __webpack_require__(/*! ./index.html */ 10)\nvar util = __webpack_require__(/*! zoro-base */ 11)\nvar dom = Regular.dom\nvar body = document.querySelector('.g-doc') || document.body\nvar counter = 0\n\n/**\n * data\n * - size\n *   - lg/large\n *   - sm/small\n * - autoShow 是否自动显示\n * - autoDestroy 是否要自动销毁\n * - autoDestroyWhenCancel 是否在取消时自动销毁\n * - autoHideWhenConfirm 是否在确认时自动隐藏\n * - autoDestroyWhenConfirm 是否在确认时自动销毁\n * - cancelTitle 取消按钮的文案\n * - confirmTitle 确定按钮的文案\n * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut\n */\nmodule.exports = Regular.extend({\n  name: 'modal',\n  template: tpl,\n  config: function () {\n    this.initDefault()\n    this.$on('afterFadeOut', this.afterFadeOut.bind(this))\n  },\n  initDefault: function () {\n    util.fillUndef(this.data, {\n      autoShow: true,\n      autoDestroy: true,\n      autoDestroyWhenCancel: true,\n      autoHideWhenConfirm: true,\n      autoDestroyWhenConfirm: true,\n      cancelTitle: '取 消',\n      confirmTitle: '确 定'\n    })\n  },\n  computed: {\n    sizeClazz: function () {\n      switch (this.data.size) {\n        case 'lg':\n        case 'large':\n          return 'modal-lg'\n        case 'sm':\n        case 'small':\n          return 'modal-sm'\n        default:\n          break\n      }\n      return ''\n    }\n  },\n  init: function () {\n    this.hideDom()\n    if (this.data.autoShow) {\n      this.show()\n    }\n  },\n  hideDom: function () {\n    this.$refs.backdrop.style.display = 'none'\n    this.$refs.modal.style.display = 'none'\n  },\n  showDom: function () {\n    this.$refs.backdrop.style.display = 'block'\n    this.$refs.modal.style.display = 'block'\n  },\n  show: function () {\n    var self = this\n    counter++\n    dom.addClass(body, 'modal-open')\n    self.showDom()\n    self.$inject(body)\n    setTimeout(function () {\n      self.data.show = true\n      self.$update()\n    }, 0)\n  },\n  click: function (event) {\n    // console.log(event)\n    if (event.target === this.$refs.modal) {\n      this.cancel()\n    }\n  },\n  /**\n   * cancel & confirm 会触发数据的变更, 数据变更会引起 UI 变更, 最终会调用 afterFadeOut 来决定要不要销毁\n   * 子类可以覆盖 cancel & confirm, 但是记得要调用 this.supr() 来设置 reason, 这样才能在 afterFadeOut 里面正确判断是否要销毁\n   */\n  cancel: function () {\n    this.hide()\n    this.data.reason = 'cancel'\n    this.$emit('cancel')\n  },\n  act: function (action) {\n    this.confirm(action)\n  },\n  confirm: function (action) {\n    if (this.data.autoHideWhenConfirm) {\n      this.hide()\n    }\n    this.data.reason = 'confirm'\n    var eventName = 'confirm'\n    if (action) {\n      eventName = action.value\n    }\n    this.$emit(eventName, action)\n  },\n  hide: function () {\n    this.data.show = false\n    this.data.hide = true\n    this.$update()\n  },\n  afterFadeOut: function () {\n    // 如果还有显示的 Modal, 那么不去 class\n    counter--\n    if (counter === 0) {\n      dom.delClass(body, 'modal-open')\n    }\n\n    this.data.hide = false\n    this.data.show = false\n    this.hideDom()\n    var shouldDestroy = (this.data.reason === 'cancel' &&\n      this.data.autoDestroyWhenCancel &&\n      this.data.autoDestroy) ||\n      (this.data.reason === 'confirm' &&\n      this.data.autoDestroyWhenConfirm &&\n      this.data.autoDestroy)\n    if (shouldDestroy) {\n      this.destroy()\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/index.js\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/index.js?");

/***/ },
/* 10 */
/*!******************************!*\
  !*** ./src/modal/index.html ***!
  \******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-05 10:26:07\\n-->\\n\\n<div\\n  class=\\\"modal-backdrop fade\\\"\\n  ref=\\\"backdrop\\\"\\n  r-class={{'in':show}}\\n  r-animation=\\\"when:hide; class:out; emit:afterFadeOut;\\\"\\n  on-click={this.cancel()}\\n></div>\\n<div\\n  class=\\\"modal fade\\\"\\n  ref=\\\"modal\\\"\\n  r-class={{'in':show}}\\n  on-click={this.click($event)}\\n>\\n  <div class=\\\"modal-dialog {sizeClazz}\\\">\\n    <div class=\\\"modal-content\\\">\\n      <div class=\\\"modal-header\\\">\\n        <button type=\\\"button\\\" class=\\\"close\\\" on-click={this.cancel()}>\\n          <span>&times;</span>\\n        </button>\\n        <h4 class=\\\"modal-title\\\">{title}</h4>\\n      </div>\\n      <div class=\\\"modal-body\\\">{#include this.$body}</div>\\n      <div class=\\\"modal-footer\\\">\\n        {#list actions as action}\\n          <button type=\\\"button\\\" class=\\\"btn btn-primary-outline\\\" on-click={this.act(action)}>{action.desc}</button>\\n        {/list}\\n        {#if loading}<loading/>{/if}\\n        <button type=\\\"button\\\" class=\\\"btn btn-primary-outline\\\" r-hide={hideConfirm} on-click={this.confirm()}>{confirmTitle}</button>\\n        <button type=\\\"button\\\" class=\\\"btn btn-secondary\\\" r-hide={hideCancel} on-click={this.cancel()}>{cancelTitle}</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/index.html\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/index.html?");

/***/ },
/* 11 */
/*!******************************************!*\
  !*** ./submodule/zoro-base/src/index.js ***!
  \******************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-23 13:45:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-23 13:52:66\n*/\n\nvar util = __webpack_require__(/*! ./util */ 12)\n\nutil.date = __webpack_require__(/*! ./date */ 21)\nutil.css = __webpack_require__(/*! ./css */ 22)\nutil.dom = __webpack_require__(/*! ./dom */ 23)\n\nmodule.exports = util\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/index.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/index.js?");

/***/ },
/* 12 */
/*!***********************************************!*\
  !*** ./submodule/zoro-base/src/util/index.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var util = {}\n\nutil.mixin = __webpack_require__(/*! ./mixin */ 13)\n\nutil.o = util.emptyObj = {}\n\nutil.f = util.emptyFunc = function () {}\n\nutil.regBlank = util.regWhiteSpace = /\\s+/ig\n\nmodule.exports = util\n\nvar arr = ['object', 'type', 'url', 'id', 'blob']\narr.forEach(function (name) {\n  __webpack_require__(/*! . */ 14)(\"./\" + name)\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/index.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/index.js?");

/***/ },
/* 13 */
/*!***********************************************!*\
  !*** ./submodule/zoro-base/src/util/mixin.js ***!
  \***********************************************/
/***/ function(module, exports) {

	eval("module.exports = function (to, from) {\n  Object.keys(from).forEach(function (key) {\n    to[key] = from[key]\n  })\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/mixin.js\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/mixin.js?");

/***/ },
/* 14 */
/*!***********************************************!*\
  !*** ./submodule/zoro-base/src/util ^\.\/.*$ ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var map = {\n\t\"./blob\": 15,\n\t\"./blob.js\": 15,\n\t\"./entry\": 16,\n\t\"./entry.js\": 16,\n\t\"./id\": 17,\n\t\"./id.js\": 17,\n\t\"./index\": 12,\n\t\"./index.js\": 12,\n\t\"./mixin\": 13,\n\t\"./mixin.js\": 13,\n\t\"./object\": 18,\n\t\"./object.js\": 18,\n\t\"./type\": 19,\n\t\"./type.js\": 19,\n\t\"./url\": 20,\n\t\"./url.js\": 20\n};\nfunction webpackContext(req) {\n\treturn __webpack_require__(webpackContextResolve(req));\n};\nfunction webpackContextResolve(req) {\n\treturn map[req] || (function() { throw new Error(\"Cannot find module '\" + req + \"'.\") }());\n};\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = 14;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util ^\\.\\/.*$\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util_^\\.\\/.*$?");

/***/ },
/* 15 */
/*!**********************************************!*\
  !*** ./submodule/zoro-base/src/util/blob.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var util = __webpack_require__(/*! ./index */ 12)\n\nutil.blobFromDataURL = function (dataURL) {\n    // convert base64/URLEncoded data component to raw binary data held in a string\n  var byteString\n  if (dataURL.split(',')[0].indexOf('base64') >= 0) {\n    byteString = window.atob(dataURL.split(',')[1])\n  } else {\n    byteString = window.decodeURIComponent(dataURL.split(',')[1])\n  }\n\n    // separate out the mime component\n  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0]\n\n    // write the bytes of the string to a typed array\n  var ia = new window.Uint8Array(byteString.length)\n  for (var i = 0; i < byteString.length; i++) {\n    ia[i] = byteString.charCodeAt(i)\n  }\n\n  return new window.Blob([ia], {type: mimeString})\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/blob.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/blob.js?");

/***/ },
/* 16 */
/*!***********************************************!*\
  !*** ./submodule/zoro-base/src/util/entry.js ***!
  \***********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("module.exports = __webpack_require__(/*! ./index */ 12)\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/entry.js\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/entry.js?");

/***/ },
/* 17 */
/*!********************************************!*\
  !*** ./submodule/zoro-base/src/util/id.js ***!
  \********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var util = __webpack_require__(/*! ./index */ 12)\n\nutil.uniqueID = (function () {\n  var id = 0\n  return function () {\n    return '' + (id++)\n  }\n}())\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/id.js\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/id.js?");

/***/ },
/* 18 */
/*!************************************************!*\
  !*** ./submodule/zoro-base/src/util/object.js ***!
  \************************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-01-07 22:16:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 12:01:05\n*/\n\nvar util = __webpack_require__(/*! ./index */ 12);\nvar mixin = __webpack_require__(/*! ./mixin */ 13);\n\nutil.merge = function (to) {\n  to = to || {}\n  var arr = [].slice.call(arguments, 1)\n  arr.forEach(function (obj) {\n    mixin(to, obj)\n  })\n  return to\n}\n\nutil.fetch = function (obj, config) {\n  Object.keys(obj).forEach(function (key) {\n    if (util.exist(config[key])) {\n      obj[key] = config[key]\n    }\n  })\n  return obj\n}\n\nutil.string2object = function (string, sep) {\n  var obj = {}\n  string = string || ''\n  string.split(sep).forEach(function (pair) {\n    var arr = pair.split('=')\n    var key = arr.shift()\n    if (!key) {\n      return\n    }\n    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='))\n  })\n  return obj\n}\n\nutil.object2string = function (obj, sep, encode) {\n  if (!obj) {\n    return ''\n  }\n  var arr = []\n  Object.keys(obj).forEach(function (key) {\n    var value = obj[key]\n    if (util.isFunction(value)) {\n      return\n    }\n    if (util.isDate(value)) {\n      value = value.getTime()\n    } else if (util.isArray(value)) {\n      value = value.join(',')\n    } else if (util.isObject(value)) {\n      value = JSON.stringify(value)\n    }\n    if (!!encode) {\n      value = encodeURIComponent(value)\n    }\n    arr.push(encodeURIComponent(key) + '=' + value)\n  })\n  return arr.join(sep || ',')\n}\n\nutil.checkWithDefault = function (obj, key, dft) {\n  var value = obj[key] || obj[key.toLowerCase()]\n  if (!value) {\n    value = dft\n    obj[key] = value\n  }\n  return value\n};\n\nutil.simpleClone = function (obj) {\n  return JSON.parse(JSON.stringify(obj))\n}\n\nutil.fillUndef = function (obj, defaultObj) {\n  for (var key in defaultObj) {\n    if (defaultObj.hasOwnProperty(key) && util.undef(obj[key])) {\n      obj[key] = defaultObj[key]\n    }\n  }\n  return obj\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/object.js\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/object.js?");

/***/ },
/* 19 */
/*!**********************************************!*\
  !*** ./submodule/zoro-base/src/util/type.js ***!
  \**********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-30 09:54:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 11:56:17\n*/\n\nvar util = __webpack_require__(/*! ./index */ 12)\n\n/*\n * 类型相关 API\n */\n\nutil.getClass = function (o) {\n  return Object.prototype.toString.call(o).slice(8, -1)\n}\n\nutil.typeOf = function (o) {\n  return util.getClass(o).toLowerCase()\n}\n\nutil.isString = function (o) {\n  return util.typeOf(o) === 'string'\n}\n\nutil.isNumber = function (o) {\n  return util.typeOf(o) === 'number'\n}\n\nutil.isBoolean = function (o) {\n  return util.typeOf(o) === 'boolean'\n}\n\nutil.isArray = function (o) {\n  return util.typeOf(o) === 'array'\n}\n\nutil.isFunction = function (o) {\n  return util.typeOf(o) === 'function'\n}\n\nutil.isObject = function (o) {\n  return util.exist(o) && util.typeOf(o) === 'object'\n}\n\nutil.isDate = function (o) {\n  return util.typeOf(o) === 'date'\n}\n\nutil.isRegExp = function (o) {\n  return util.typeOf(o) === 'regexp'\n}\n\nutil.isError = function (o) {\n  return util.typeOf(o) === 'error'\n}\n\nutil.isnull = function (o) {\n  return o === null\n}\n\nutil.notnull = function (o) {\n  return o !== null\n}\n\n// 需要用 typeof 来比较，兼容性好\nutil.undef = function (o) {\n  return typeof o === 'undefined'\n}\n\nutil.notundef = function (o) {\n  return typeof o !== 'undefined'\n}\n\nutil.exist = function (o) {\n  return util.notundef(o) && util.notnull(o)\n}\n\nutil.notexist = function (o) {\n  return util.undef(o) || util.isnull(o)\n}\n\nutil.isEmpty = function (o) {\n  return util.notexist(o) || o === ''\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/type.js\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/type.js?");

/***/ },
/* 20 */
/*!*********************************************!*\
  !*** ./submodule/zoro-base/src/util/url.js ***!
  \*********************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var util = __webpack_require__(/*! ./index */ 12)\n\nutil.genUrlSep = function (url) {\n  return url.indexOf('?') < 0 ? '?' : '&'\n}\n\nutil.object2query = function (obj) {\n  return util.object2string(obj, '&', true)\n}\n\nutil.url2origin = (function () {\n  var reg = /^([\\w]+?:\\/\\/.*?(?=\\/|$))/i\n  return function (url) {\n    if (reg.test(url || '')) {\n      return RegExp.$1.toLowerCase()\n    }\n    return ''\n  }\n}())\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/util/url.js\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/util/url.js?");

/***/ },
/* 21 */
/*!*****************************************!*\
  !*** ./submodule/zoro-base/src/date.js ***!
  \*****************************************/
/***/ function(module, exports) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-23 13:40:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-30 11:00:90\n*/\n\nvar dateUtil = module.exports\n\ndateUtil.fix = function (number, count) {\n  count = count || 2\n  var str = '' + number\n  while (str.length < count) {\n    str = '0' + str\n  }\n  return str\n}\n\ndateUtil.getYearStr = function (date) {\n  return '' + date.getFullYear()\n}\n\ndateUtil.getMonthStr = function (date) {\n  return dateUtil.fix(date.getMonth() + 1)\n}\n\ndateUtil.getDayStr = function (date) {\n  return dateUtil.fix(date.getDate())\n}\n\ndateUtil.getHourStr = function (date) {\n  return dateUtil.fix(date.getHours())\n}\n\ndateUtil.getMinuteStr = function (date) {\n  return dateUtil.fix(date.getMinutes())\n}\n\ndateUtil.getSecondStr = function (date) {\n  return dateUtil.fix(date.getSeconds())\n}\n\ndateUtil.getMillisecondStr = function (date) {\n  return dateUtil.fix(date.getMilliseconds(), 3)\n}\n\ndateUtil.format = (function () {\n  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g\n  var mappers = {\n    yyyy: dateUtil.getYearStr,\n    MM: dateUtil.getMonthStr,\n    dd: dateUtil.getDayStr,\n    hh: dateUtil.getHourStr,\n    mm: dateUtil.getMinuteStr,\n    ss: dateUtil.getSecondStr,\n    SSS: dateUtil.getMillisecondStr\n  }\n  return function (date, format) {\n    date = new Date(date)\n    if (isNaN(+date)) {\n      return 'invalid date'\n    }\n    format = format || 'yyyy-MM-dd'\n    return format.replace(reg, function (match) {\n      return mappers[match](date)\n    })\n  }\n})()\n\ndateUtil.dateFromDateTimeLocal = function (str) {\n  str = '' + str\n  return new Date(str.replace(/-/g, '/').replace('T', ' '))\n}\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/date.js\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/date.js?");

/***/ },
/* 22 */
/*!****************************************!*\
  !*** ./submodule/zoro-base/src/css.js ***!
  \****************************************/
/***/ function(module, exports) {

	eval("/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-03-30 16:52:45\n* @Last Modified by:   Zhang Yingya(hzzhangyingya)\n* @Last Modified time: 2016-03-30 16:53:44\n*/\n\nvar css = {};\n\ncss.detectCSSFeature = function(featurename){\n    var feature = false,\n    domPrefixes = 'Webkit Moz ms O'.split(' '),\n    elm = document.createElement('div'),\n    featurenameCapital = null;\n\n    featurename = featurename.toLowerCase();\n\n    if( elm.style[featurename] !== undefined ) { feature = true; } \n\n    if( feature === false ) {\n        featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);\n        for( var i = 0; i < domPrefixes.length; i++ ) {\n            if( elm.style[domPrefixes[i] + featurenameCapital ] !== undefined ) {\n              feature = true;\n              break;\n            }\n        }\n    }\n    return feature; \n};\n\nmodule.exports = css;\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/css.js\n ** module id = 22\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/css.js?");

/***/ },
/* 23 */
/*!****************************************!*\
  !*** ./submodule/zoro-base/src/dom.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("var util = __webpack_require__(/*! ./util */ 12)\n\nvar dom = {}\n\ndom.remove = function (node) {\n  if (!!node.parentNode) {\n    node.parentNode.removeChild(node)\n  }\n}\n\ndom.dataset = function (node, key, value) {\n  if (util.exist(value)) {\n    node.setAttribute('data-' + key, value)\n  } else {\n    return node.getAttribute('data-' + key)\n  }\n}\n\ndom.on = dom.addEventListener = function (node, type, callback) {\n  if (node.addEventListener) {\n    node.addEventListener(type, callback, false)\n  } else if (node.attachEvent) {\n    node.attachEvent('on' + type, callback)\n  }\n}\n\ndom.off = dom.removeEventListener = function (node, type, callback) {\n  if (node.removeEventListener) {\n    node.removeEventListener(type, callback, false)\n  } else if (node.detachEvent) {\n    node.detachEvent('on' + type, callback)\n  }\n}\n\ndom.target = function (event) {\n  return event.target || event.srcElement\n}\n\n// TODO untest\ndom.html2node = function (html) {\n  var div = window.document.createElement('div')\n  div.innerHTML = html\n  var children = [],\n    i,\n    l\n  if (!!div.children) {\n    for (i = 0, l = div.children.length; i < l; i++) {\n      children.push(div.children[i])\n    }\n  } else {\n    for (i = 0, l = div.childNodes.length; i < l; i++) {\n      var child = div.childNodes[i]\n      if (child.nodeType === 1) {\n        children.push(child)\n      }\n    }\n  }\n  return children.length > 1 ? div : children[0]\n}\n\ndom.createIframe = function (options) {\n  options = options || {}\n  var iframe = document.createElement('iframe')\n  iframe.frameBorder = 0\n  if (options.name) {\n    iframe.name = options.name\n  }\n  if (!options.visible) {\n    iframe.style.display = 'none'\n  }\n  if (util.isFunction(options.onload)) {\n    var onIframeLoad = function (event) {\n      if (!iframe.src) {\n        return\n      }\n      if (!options.multi) {\n        dom.off(iframe, 'load', onIframeLoad)\n      }\n      options.onload(event)\n    }\n    dom.on(iframe, 'load', onIframeLoad)\n  }\n    // will trigger onload\n  var parent = options.parent;\n  (parent || document.body).appendChild(iframe)\n    // ensure trigger onload async\n  var src = options.src || 'about:blank'\n  setTimeout(function () {\n    iframe.src = src\n  }, 0)\n  return iframe\n}\n\nmodule.exports = dom\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./submodule/zoro-base/src/dom.js\n ** module id = 23\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./submodule/zoro-base/src/dom.js?");

/***/ },
/* 24 */
/*!*********************************!*\
  !*** ./src/modal/form/index.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-31 13:46:32\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 10:53:72\n*/\n\n__webpack_require__(/*! ../../params */ 25)\nvar Modal = __webpack_require__(/*! ../index */ 9)\nvar tpl = __webpack_require__(/*! ./index.html */ 33)\n\nmodule.exports = Modal.extend({\n  name: 'modalForm',\n  $body: tpl,\n  config: function () {\n    this.supr()\n    // 确认的时候不要自动隐藏, 要在请求结束后再隐藏, 隐藏后会自动销毁\n    this.data.autoHideWhenConfirm = false\n    this.initParamList()\n  },\n  initParamList: function () {},\n  // override, 检查参数, 如果不合法那么直接返回, 否则抛出 create\n  confirm: function () {\n    var params = this.$refs.params\n    if (params) {\n      params = params.getParams()\n      if (params) {\n        this.data.loading = true\n        this.supr()\n        this.$emit('confirm')\n        this.afterConfirm(params)\n      }\n    }\n  },\n  afterConfirm: function () {},\n  resetLoading: function () {\n    this.data.loading = false\n    this.$update()\n  }\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/form/index.js\n ** module id = 24\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/form/index.js?");

/***/ },
/* 25 */
/*!*****************************!*\
  !*** ./src/params/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-30 16:40:04\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 12:04:04\n*/\n\n__webpack_require__(/*! ../loading */ 7)\n__webpack_require__(/*! ./checkboxes */ 26)\n__webpack_require__(/*! ./radios */ 29)\nvar tpl = __webpack_require__(/*! ./index.html */ 32)\nvar suffixTpl = __webpack_require__(/*! ./suffix.html */ 31)\nvar util = __webpack_require__(/*! zoro-base */ 11)\nvar dateUtil = util.date\nvar DateStrFormat = 'yyyy-MM-dd'\nvar DateTimeFormat = 'yyyy-MM-ddThh:mm'\n\nif (Regular.directive('r-model2') === undefined) {\n  Regular.directive('r-model2', {\n    // TODO 理解一下\n    link: function (elem, value) {\n      value = this.$get(value)\n      return Regular.directive('r-model').link.call(this, elem, value)\n    }\n  })\n} else {\n  console.warn('r-model2 指令已经被注册了，请检查兼容性')\n}\n\n// 合法的值类型, 这些类型均使用 input:text 来呈现\nvar validValueTypes = ['String', 'Number', 'Boolean', 'Array', 'Object']\nvar valueParsers = {\n  'String': function (value) {\n    return '' + value\n  },\n  'Number': function (value) {\n    return +value\n  },\n  'Boolean': function (value) {\n    return value === 'true'\n  },\n  'Array': function (value) {\n    return JSON.parse(value)\n  },\n  'Object': function (value) {\n    return JSON.parse(value)\n  }\n}\n\n/**\n * data\n * - id ID\n * - list 参数列表\n *   - type:\n *     - Static\n *     - String\n *     - Number\n *     - Boolean\n *     - Array\n *     - Object\n *     - Email\n *     - DateStr\n *     - DateTime\n *     - Select\n *     - Checkboxes\n *     - Radios\n *   - name: String\n *   - desc: String\n *   - mandatory: true/false\n *   - value: 该参数的默认值\n *   - min/max: used by Number\n *   - maxlength: used by input\n *   - list: used by Select/Checkboxes/Radios\n *     - value: String\n *     - desc: String\n *     - selected: Boolean\n *     - checked: Boolean\n *   - invalidTip: String 参数非法时展示的提示\n *   - tip: String 参数提示\n * - paramsLimit 超过这个数量, 参数就叠起来\n * - emailReg 验证邮箱的正则表达式\n * - hideMandatory 是否隐藏 * 号\n * - hideColon 是否隐藏 : 号\n * - hideLabel 是否隐藏 label\n * - hideTip 是否隐藏提示\n * - params 参数值对象\n * - showSubmit 是否展示提交按钮\n * - submitTitle 提交按钮的文案\n * - submitClazz\n * - submitBtnClazz\n * 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙\n * - labelPosClazz\n * - labelColClazz\n * - iptColClazz\n * - default 默认值\n *   - 默认值的优先级 default < param.value < param.list.checked/selected\n *   - 如果需要动态更新参数列表，每次更新参数列表之后都会根据 default 来重新渲染，此种场景下请注意及时更新参数的 default 值\n */\nmodule.exports = Regular.extend({\n  name: 'params',\n  template: tpl,\n  suffixTpl: suffixTpl,\n  mandatoryTpl: '{#if param.mandatory}<span class=\"text-danger\">*&nbsp;&nbsp;</span>{/if}',\n  config: function () {\n    this.initDefault()\n    this.parseParamList()\n    this.watch()\n  },\n  initDefault: function () {\n    util.fillUndef(this.data, {\n      id: +new Date(),\n      list: [],\n      default: {},\n      paramsLimit: 3,\n      hideMandatory: false,\n      hideColon: false,\n      hideLabel: false,\n      hideTip: false,\n      showSubmit: false,\n      submitTitle: '确定',\n      labelPosClazz: 'text-xs-right',\n      labelColClazz: 'col-md-3',\n      iptColClazz: 'col-md-8',\n      submitClazz: 'col-md-offset-3 col-md-8',\n      submitBtnClazz: 'btn-primary-outline'\n    })\n    this.data.params = {}\n  },\n  /**\n   * - 解析参数默认值\n   * - 解析值类型\n   */\n  parseParamList: function () {\n    var self = this\n    var data = self.data\n    data.parsedList = data.list.map(function (param) {\n      param = util.simpleClone(param)\n      // 解析默认值\n      var defaultValue = data.params[param.name]\n      if (util.isEmpty(defaultValue)) {\n        defaultValue = param.value\n      }\n      if (util.isEmpty(defaultValue)) {\n        defaultValue = data.default[param.name]\n      }\n      var defaultIsEmpty = util.isEmpty(defaultValue)\n      switch (param.type) {\n        case 'Select':\n          // Select: 如果没有提供默认值, 那么取第一个为默认值, 如果某一项有 selected, 取其为默认值\n          if (defaultIsEmpty) {\n            defaultValue = param.list[0].value\n          }\n          param.list.some(function (option) {\n            if (option.selected) {\n              defaultValue = option.value\n              return true\n            }\n          })\n          break\n        case 'DateStr':\n        case 'DateTime':\n          // DateStr & DateTime: 如果提供了默认值，那么需要格式化一下日期\n          if (!defaultIsEmpty) {\n            var format = param.type === 'DateStr' ? DateStrFormat : DateTimeFormat\n            defaultValue = +new Date(defaultValue)\n            if (!isNaN(defaultValue)) {\n              defaultValue = dateUtil.format(defaultValue, format)\n            } else {\n              defaultValue = null\n            }\n          }\n          break\n        case 'Checkboxes':\n        case 'Radios':\n          // 如果没有 checked 并且提供了默认值, 那么根据默认值勾选对应的 item\n          var hasChecked = param.list.some(function (item) {\n            return item.checked\n          })\n          if (!hasChecked && !defaultIsEmpty) {\n            param.list.forEach(function (item) {\n              var checked\n              if (param.type === 'Checkboxes') {\n                checked = defaultValue.indexOf(item.value) !== -1\n              } else {\n                checked = item.value === defaultValue\n              }\n              item.checked = checked\n            })\n          }\n          break\n        default:\n          break\n      }\n      // 将格式化好后的默认值存储起来\n      if (util.exist(defaultValue)) {\n        data.params[param.name] = defaultValue\n      } else {\n        delete data.params[param.name]\n      }\n      return param\n    })\n  },\n  watch: function () {\n    var self = this\n    self.$watch('default|json', function () {\n      self.parseParamList()\n    })\n    self.$watch('list|json', function () {\n      self.parseParamList()\n    })\n  },\n  computed: {\n    // 是否每个参数一排\n    stack: 'list.length >= paramsLimit'\n  },\n  isValidValueType: function (type) {\n    return validValueTypes.indexOf(type) !== -1\n  },\n  paramFitInput: function (param) {\n    return this.isValidValueType(param.type) || param.type === 'Email'\n  },\n  genInputType: function (param) {\n    return param.type === 'Email' ? 'email' : 'text'\n  },\n  genParamId: function (param) {\n    return this.data.id + '-param-' + param.name\n  },\n  genParamTip: function (param) {\n    var tip = param.invalidTip || param.tip || ''\n    if (tip) {\n      return tip\n    }\n    switch (param.type) {\n      case 'Email':\n        tip = '请输入合法邮箱, 格式为 foo@bar.com'\n        break\n      case 'String':\n      case 'Number':\n        tip = '请输入' + (param.type === 'String' ? '字符串' : '数字')\n        if (param.min) {\n          tip += ', 最小值 ' + param.min\n        }\n        if (param.max) {\n          tip += ', 最大值 ' + param.max\n        }\n        if (param.maxlength) {\n          tip += ', 最长 ' + param.maxlength + ' 位'\n        }\n        break\n      case 'DateStr':\n        tip = '请选择年月日'\n        break\n    }\n    return tip\n  },\n  /**\n  * 获取参数, 有错误的话返回 false, 正常的话返回所有的参数\n  * 如果指定了 paramToCheck, 那么只有当此参数有错误时才报错\n  */\n  getParams: function (paramToCheck) {\n    var self = this\n    var data = self.data\n    var $refs = self.$refs\n    if (!$refs) { return {} }\n    var params = data.params\n    var invalid = data.parsedList.some(function (param) {\n      param.invalid = false\n      var name = param.name\n      // 如果是字符串，trim一下\n      var value = params[name]\n      if (typeof value === 'string') {\n        value = value.trim()\n      }\n      // 是否是待检查的参数\n      var isParamToCheck = paramToCheck && name === paramToCheck.name\n      // 参数值是否不存在\n      var valueIsEmpty = util.isEmpty(value)\n      var valueIsInvalid = false\n      // 参数类型\n      var type = param.type\n      if (self.isValidValueType(type)) {\n        type = 'Value'\n      }\n      switch (type) {\n        case 'Value':\n          if (!valueIsEmpty) {\n            if (param.type === 'Number') {\n              value = valueParsers[param.type](value)\n              valueIsInvalid = isNaN(value) ||\n                (param.min && value < param.min) ||\n                (param.max && value > param.max)\n            }\n            // other types\n          }\n          break\n        case 'Email':\n          if (!valueIsEmpty) {\n            valueIsInvalid = !self.verifyEmail(value)\n          }\n          break\n        case 'DateStr':\n          if (!valueIsEmpty) {\n            value = +new Date(value)\n            valueIsInvalid = isNaN(value)\n            if (!valueIsInvalid) {\n              value = dateUtil.format(value, DateStrFormat)\n            }\n          }\n          break\n        case 'DateTime':\n          if (!valueIsEmpty) {\n            value = +dateUtil.dateFromDateTimeLocal(value)\n            valueIsInvalid = isNaN(value)\n            if (!valueIsInvalid) {\n              value = new Date(value)\n            }\n          }\n          break\n        case 'Select':\n          // value = $refs[name].value\n          if (!valueIsEmpty) {\n            var parser = valueParsers[util.getClass(param.list[0].value)]\n            if (!parser) {\n              throw new Error('不支持的Select值类型', validValueTypes)\n            }\n            value = parser(value)\n          }\n          break\n        case 'Checkboxes':\n        case 'Radios':\n          value = $refs[name].getChecked()\n          if (param.type === 'Checkboxes') {\n            valueIsEmpty = !value.length\n          } else if (param.type === 'Radios') {\n            valueIsEmpty = util.isEmpty(value)\n          }\n          break\n        default:\n          break\n      }\n      // 如果是检查所有参数 或者 是当前要检查的参数，那么当参数值为空时，检测参数是否非法\n      if ((!paramToCheck || isParamToCheck) && valueIsEmpty) {\n        return self.shouldInvalidEmptyParam(params, param)\n      }\n      // 参数值非法\n      if (valueIsInvalid) {\n        return self.invalidParam(param)\n      }\n      // 只有当参数非空时（空数组）, 才赋值参数值\n      if (!valueIsEmpty && util.exist(value)) {\n        params[name] = value\n      } else {\n        delete params[name]\n      }\n    })\n    if (!invalid) {\n      params = util.simpleClone(params)\n      // 如果当前正在检查某个参数，那么触发 change\n      if (paramToCheck) {\n        self.$emit('change', params)\n      }\n      return params\n    }\n    return false\n  },\n  /**\n  * 对于空的参数, 如果是必须的, 那么它是 invalid\n  * 如果不是必须的, 那么从最终的结果里面删除它\n  */\n  shouldInvalidEmptyParam: function (params, param) {\n    if (param.mandatory) {\n      return this.invalidParam(param)\n    } else {\n      delete params[param.name]\n      delete this.data.params[param.name]\n      return false\n    }\n  },\n  invalidParam: function (param) {\n    param.invalid = true\n    var ref = this.$refs[param.name]\n    if (ref.tagName && ref.tagName.toLowerCase() === 'input') {\n      ref.focus()\n    }\n    return true\n  },\n  verifyEmail: (function () {\n    var _reg = /^\\S+@\\S+?\\.\\S+$/\n    return function (email) {\n      var reg = this.data.emailReg || _reg\n      return reg.test(email)\n    }\n  })(),\n  submit: function (event) {\n    event.stop()\n    var params = this.getParams()\n    if (params) {\n      this.$emit('submit', params)\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/index.js\n ** module id = 25\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/index.js?");

/***/ },
/* 26 */
/*!****************************************!*\
  !*** ./src/params/checkboxes/index.js ***!
  \****************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-31 20:28:05\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-05 01:20:46\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 27)\nvar Checkable = __webpack_require__(/*! ../checkable */ 28)\n\nmodule.exports = Checkable.extend({\n  name: 'checkboxes',\n  template: tpl,\n  config: function () {\n    this.resetDefaultCheckeds()\n    this.watch()\n  },\n  // 获得页面上所有选中的 checkboxes\n  getChecked: function () {\n    return this.data.currChecked.slice(0)\n  },\n  click: function (event, checkbox) {\n    var checked = event.target.checked\n    var value = checkbox.value\n    if (checked) {\n      this.data.currChecked.push(value)\n    } else {\n      var index = this.data.currChecked.findIndex(function (id) {\n        return id === value\n      })\n      if (index !== -1) {\n        this.data.currChecked.splice(index, 1)\n      }\n    }\n    this.$emit('change')\n  }\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/checkboxes/index.js\n ** module id = 26\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/checkboxes/index.js?");

/***/ },
/* 27 */
/*!******************************************!*\
  !*** ./src/params/checkboxes/index.html ***!
  \******************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-04 23:33:56\\n-->\\n\\n<div class=\\\"row m-x-0\\\" ref=\\\"body\\\">\\n  {#list param.list as checkbox}\\n    <div class=\\\"col-xs-6 p-l-0\\\">\\n      <label class=\\\"checkbox-inline {this.genClass(checkbox)}\\\">\\n        <input type=\\\"checkbox\\\" {#if checkbox.checked}checked{/if} on-click={this.click($event, checkbox)}>\\n        <span class=\\\"text-help\\\" r-class={{'text-muted':muted}}>{checkbox.desc}</span>\\n      </label>\\n    </div>\\n  {/list}\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/checkboxes/index.html\n ** module id = 27\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/checkboxes/index.html?");

/***/ },
/* 28 */
/*!*********************************!*\
  !*** ./src/params/checkable.js ***!
  \*********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-27 09:58:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-05 14:58:55\n*/\n\nmodule.exports = Regular.extend({\n  resetDefaultCheckeds: function () {\n    this.data.currChecked = this.data.param.list.filter(function (item) {\n      return item.checked\n    }).map(function (item) {\n      return item.value\n    })\n    // 如果提供了上一次的值，那么默认选中的应该是它们，否则默认选中的就是当前选中的\n    var v = this.data.param.previousValue\n    if (v) {\n      this.data.defaultCheckeds = Array.isArray(v) ? v : [v]\n    } else {\n      this.data.defaultCheckeds = this.data.currChecked.slice(0)\n    }\n  },\n  watch: function () {\n    var self = this\n    self.$watch('param.list|json', self.resetDefaultCheckeds.bind(self))\n    self.$watch('param.previousValue', self.resetDefaultCheckeds.bind(self))\n  },\n  isDefaultChecked: function (item) {\n    return this.data.defaultCheckeds.indexOf(item.value) !== -1\n  },\n  isCurrChecked: function (item) {\n    return this.data.currChecked.indexOf(item.value) !== -1\n  },\n  genClass: function (item) {\n    var isDefaultChecked = this.isDefaultChecked(item)\n    var isCurrChecked = this.isCurrChecked(item)\n    if (isDefaultChecked && isCurrChecked) {\n      return 'has-success'\n    } else if ((isDefaultChecked && !isCurrChecked) ||\n    (!isDefaultChecked && isCurrChecked)) {\n      return 'has-warning'\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/checkable.js\n ** module id = 28\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/checkable.js?");

/***/ },
/* 29 */
/*!************************************!*\
  !*** ./src/params/radios/index.js ***!
  \************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-26 17:01:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-07 18:57:98\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 30)\nvar suffixTpl = __webpack_require__(/*! ../suffix.html */ 31)\nvar Checkable = __webpack_require__(/*! ../checkable */ 28)\n\nmodule.exports = Checkable.extend({\n  name: 'radios',\n  template: tpl,\n  suffixTpl: suffixTpl,\n  config: function () {\n    this.data.name = +new Date()\n    if (this.data.param.checkable) {\n      this.data.param.spread = true\n      this.data.checked = this.data.param.checked\n      this.data.previousChecked = this.data.param.previousChecked\n      if (this.data.previousChecked === undefined) {\n        this.data.previousChecked = this.data.checked\n      }\n    }\n    this.resetDefaultCheckeds()\n    this.watch()\n  },\n  shouldDisableRadio: function (radio) {\n    if (this.data.param.checkable) {\n      return !this.data.checked || this.data.param.disabled\n    } else {\n      return radio.disabled\n    }\n  },\n  genClass: function (radio) {\n    var clazz = this.supr(radio) || ''\n    if (this.shouldDisableRadio(radio)) {\n      clazz += ' disabled'\n    }\n    if (this.data.param.spread) {\n      clazz += ' m-r-1'\n    }\n    return clazz\n  },\n  getChecked: function () {\n    if (this.data.param.checkable && !this.data.checked) {\n      return undefined\n    }\n    return this.data.currChecked[0]\n  },\n  toggle: function () {\n    if (this.data.param.disabled) { return }\n    this.data.checked = !this.data.checked\n    this.$emit('change')\n  },\n  click: function (event, radio) {\n    if (radio.disabled) { return }\n    var value = radio.value\n    this.data.currChecked = [value]\n    this.$emit('change')\n  }\n})\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/radios/index.js\n ** module id = 29\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/radios/index.js?");

/***/ },
/* 30 */
/*!**************************************!*\
  !*** ./src/params/radios/index.html ***!
  \**************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-07 18:57:61\\n-->\\n\\n<div class=\\\"row m-x-0\\\" ref=\\\"body\\\">\\n  {#if param.checkable}\\n    <label class=\\\"checkbox-inline m-r-1\\\" r-class={{disabled:param.disabled, 'has-warning':checked!=previousChecked}}>\\n      <input type=\\\"checkbox\\\"\\n        on-click={this.toggle()}\\n        {#if param.checked}checked{/if}\\n        {#if param.disabled}disabled{/if}>\\n        <span class=\\\"text-help\\\">{param.checkableDesc||'开启'}</span>\\n    </label>\\n  {/if}\\n  {#list param.list as radio}\\n    <div\\n      {#if param.spread}\\n        style=\\\"display:inline-block;\\\"\\n      {#else}\\n        class=\\\"col-xs-6 p-l-0\\\"\\n      {/if}>\\n      <label class=\\\"radio-inline {this.genClass(radio)}\\\">\\n        <input\\n          type=\\\"radio\\\"\\n          name={name}\\n          {#if radio.checked}checked{/if}\\n          {#if this.shouldDisableRadio(radio)}disabled{/if}\\n          on-click={this.click($event, radio)}>\\n        <span class=\\\"text-help\\\" r-class={{'text-muted':muted}}>{radio.desc}</span>\\n      </label>\\n    </div>\\n  {/list}\\n  {#include this.suffixTpl}\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/radios/index.html\n ** module id = 30\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/radios/index.html?");

/***/ },
/* 31 */
/*!********************************!*\
  !*** ./src/params/suffix.html ***!
  \********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-07-05 15:58:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-05 15:58:93\\n-->\\n\\n{#if param.suffix}\\n  <span class=\\\"{param.suffixClazz || 'text-info'}\\\">{param.suffix}</span>\\n{/if}\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/suffix.html\n ** module id = 31\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/suffix.html?");

/***/ },
/* 32 */
/*!*******************************!*\
  !*** ./src/params/index.html ***!
  \*******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-05 16:07:04\\n-->\\n\\n<div class=\\\"m-param {clazz}\\\">\\n  <div class=\\\"caption m-b-1\\\" r-hide={!caption}>{caption}</div>\\n  <!-- 如果参数不多, 那么一排放; 否则每个参数一排 -->\\n  <form class=\\\"form\\\" r-class={{'form-inline':!stack}} on-submit={this.submit($event)}>\\n    {#list parsedList as param}\\n      <fieldset class=\\\"form-group\\\" r-class={{'row':stack, 'has-danger':param.invalid}}>\\n        <label\\n          {#if stack}\\n            class=\\\"form-control-label {labelPosClazz} {labelColClazz}\\\"\\n          {#else}\\n            class=\\\"form-control-label {param.labelClazz}\\\"\\n          {/if}\\n          for={this.genParamId(param)}\\n          title={param.title || param.desc}\\n          r-hide={hideLabel || param.hideLabel || !param.desc}\\n        >\\n          {#if !hideMandatory}{#include this.mandatoryTpl}{/if}\\n          {param.desc}\\n          {#if !hideColon && !param.hideColon}:{/if}\\n        </label>\\n        <div {#if stack}class=\\\"{iptColClazz}\\\"{#else}class=\\\"form-group {param.iptClazz}\\\"{/if}>\\n          {#if param.type === 'Static'}\\n            <p class=\\\"form-control-static\\\">\\n              {#if !param.hideValue}{params[param.name]}{/if}\\n              {#include this.suffixTpl}\\n            </p>\\n          {/if}\\n          {#if this.paramFitInput(param)}\\n            <input class=\\\"form-control\\\" type={this.genInputType(param)} id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' placeholder={this.genParamTip(param)} maxlength={param.maxlength} on-input={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'DateStr'}\\n            <input type=\\\"date\\\" class=\\\"form-control\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'DateTime'}\\n            <input type=\\\"datetime-local\\\" class=\\\"form-control\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'Select'}\\n            <select class=\\\"form-control c-select\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n              {#list param.list as option}\\n                <option value={option.value}>{option.desc}</option>\\n              {/list}\\n            </select>\\n          {/if}\\n          {#if param.type === 'Checkboxes'}\\n            <checkboxes param={param} ref='{param.name}' on-change={this.getParams(param)}/>\\n          {/if}\\n          {#if param.type === 'Radios'}\\n            <radios param={param} ref='{param.name}' on-change={this.getParams(param)}></radios>\\n          {/if}\\n          {#if param.invalid && !hideTip}\\n            <div class=\\\"text-help\\\" r-class={{'form-group':stack}}>\\n              <small>{this.genParamTip(param)}</small>\\n            </div>\\n          {/if}\\n        </div>\\n      </fieldset>\\n    {/list}\\n    {#if showSubmit}\\n      <fieldset class=\\\"form-group\\\" r-class={{'row':stack}}>\\n        <div {#if stack}class=\\\"{submitClazz}\\\"{#else}class=\\\"form-group\\\"{/if}>\\n          <button type=\\\"submit\\\" class=\\\"btn {submitBtnClazz}\\\">{submitTitle}</button>{#if loading}<loading/>{/if}\\n        </div>\\n      </fieldset>\\n    {/if}\\n  </form>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/params/index.html\n ** module id = 32\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/params/index.html?");

/***/ },
/* 33 */
/*!***********************************!*\
  !*** ./src/modal/form/index.html ***!
  \***********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-08 10:14:65\\n-->\\n\\n<params caption={caption} list={paramList} clazz={paramClazz} paramsLimit={0} labelColClazz={labelColClazz} iptColClazz={iptColClazz} default={default} on-change=\\\"change\\\" ref=\\\"params\\\"/>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/form/index.html\n ** module id = 33\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/form/index.html?");

/***/ },
/* 34 */
/*!****************************!*\
  !*** ./src/pager/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-19 15:39:01\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-08 12:08:27\n*/\n\nvar notNumReg = /[^0-9]/g\nvar tpl = __webpack_require__(/*! ./index.html */ 35)\nvar util = __webpack_require__(/*! zoro-base */ 11)\n\n/**\n * data\n * - id ID\n * - total 列表总长度\n * - limit 每页数量\n * - size 页码总数, total/limit\n * - current 当前页码\n * - padding 分页器当前页码左右多余的页码数量\n * - sizeLimit 如果 size 小于此值, 那么全部列出\n * - prevText 上一页文案\n * - nextText 下一页文案\n * - showLimit 是否展示调整 limit 的 input\n * - showJump 是否展示跳页的 input\n */\nRegular.extend({\n  name: 'pager',\n  template: tpl,\n  config: function () {\n    this.initDefault()\n    this.caclSize()\n    this.watchData()\n  },\n  initDefault: function () {\n    util.fillUndef(this.data, {\n      id: +new Date(),\n      total: 0,\n      limit: 10,\n      current: 1,\n      padding: 2,\n      sizeLimit: 9,\n      prevText: '&laquo;',\n      nextText: '&raquo;',\n      showLimit: false,\n      showJump: false\n    })\n  },\n  caclSize: function () {\n    this.data.size = Math.ceil(this.data.total / this.data.limit)\n  },\n  watchData: function () {\n    var self = this\n    var data = self.data\n    self.$watch('limit', function (newValue, oldValue) {\n      if (typeof newValue === 'string') {\n        newValue = newValue.replace(notNumReg, '')\n        data.limit = newValue ? parseInt(newValue) : data.total\n        self.caclSize()\n      }\n    })\n    self.$watch('jump', function (newValue, oldValue) {\n      if (typeof newValue === 'string') {\n        newValue = newValue.replace(notNumReg, '')\n        if (newValue !== '') {\n          newValue = parseInt(newValue)\n        }\n        data.jump = newValue\n      }\n    })\n    self.$watch(['current', 'total', 'limit'], function (current) {\n      self.caclSize()\n      if (current > data.size) {\n        data.current = 1\n      }\n      data.begin = current - data.padding\n      data.end = current + data.padding\n      if (data.begin < 2) {\n        data.begin = 2\n      }\n      if (data.end > data.size - 1) {\n        data.end = data.size - 1\n      }\n      if (current - data.begin <= 1) {\n        data.end = data.begin + data.padding * 2\n      }\n      if (data.end - current <= 1) {\n        data.begin = data.end - data.padding * 2\n      }\n    })\n  },\n  computed: {\n    validJump: function () {\n      var data = this.data\n      var jump = data.jump\n      return typeof jump === 'number' && jump > 0 && jump <= data.size && jump !== data.current\n    }\n  },\n  jump: function () {\n    var self = this\n    var data = self.data\n    var jump = data.jump\n    if (typeof jump === 'number') {\n      self.nav(jump)\n    }\n    data.jump = ''\n    self.$refs.jump.focus()\n  },\n  nav: function (page) {\n    var self = this\n    var data = self.data\n    if (page < 1 || page > data.total || page === data.current) {\n      return\n    }\n    data.current = page\n    self.$emit('nav', data)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/pager/index.js\n ** module id = 34\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/pager/index.js?");

/***/ },
/* 35 */
/*!******************************!*\
  !*** ./src/pager/index.html ***!
  \******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-05-19 15:39:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-06-21 19:59:87\\n-->\\n\\n<div class=\\\"m-pagination {clazz}\\\" r-hide={size<=1}>\\n  <!-- 可以动态调整 limit -->\\n  <form class=\\\"form form-inline\\\" r-hide={!showLimit}>\\n    <fieldset class=\\\"form-group\\\">\\n      <label for={id+'-limit'}>limit</label>\\n      <input class=\\\"limit form-control\\\" type=\\\"text\\\" r-model={limit} id={id+'-limit'}/>\\n    </fieldset>\\n  </form>\\n  <ul class=\\\"pagination\\\">\\n    <!-- 上一页 -->\\n    <li class=\\\"page-item\\\" r-class={{'disabled':current===1}}>\\n      {#if current!==1}\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(current-1)}>{#inc prevText}</a>\\n      {#else}\\n        <span class=\\\"page-link\\\">{#inc prevText}</span>\\n      {/if}\\n    </li>\\n    {#if size > sizeLimit}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===1}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(1)}>1</a>\\n      </li>\\n      {#if begin > 2}\\n        <li class=\\\"page-item disabled\\\">\\n          <span class=\\\"page-link\\\">...</span>\\n        </li>\\n      {/if}\\n      {#list begin..end as i}\\n        <li class=\\\"page-item\\\" r-class={{'active':current===i}}>\\n          <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(i)}>{i}</a>\\n        </li>\\n      {/list}\\n      {#if end < size -1}\\n        <li class=\\\"page-item disabled\\\">\\n          <span class=\\\"page-link\\\">...</span>\\n        </li>\\n      {/if}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===size}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(size)}>{size}</a>\\n      </li>\\n    {#else}\\n      {#list 1..size as i}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===i}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(i)}>{i}</a>\\n      </li>\\n      {/list}\\n    {/if}\\n    <!-- 下一页 -->\\n    <li class=\\\"page-item\\\" r-class={{'disabled':current===size}}>\\n      {#if current!==size}\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(current+1)}>{#inc nextText}</a>\\n      {#else}\\n        <span class=\\\"page-link\\\">{#inc nextText}</span>\\n      {/if}\\n    </li>\\n  </ul>\\n  <!-- 可以随机跳转到某一页 -->\\n  <form class=\\\"form form-inline\\\" r-hide={!showJump}>\\n    <fieldset class=\\\"form-group\\\">\\n      <input type=\\\"text\\\" class=\\\"jump form-control\\\" r-model={jump} {#if validJump}on-enter={this.jump()}{#else}on-enter={false}{/if} ref=jump>\\n      <button type=\\\"button\\\" class=\\\"btn btn-primary-outline\\\" on-click={this.jump()} {#if !validJump}disabled{/if}>Go</button>\\n    </fieldset>\\n  </form>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/pager/index.html\n ** module id = 35\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/pager/index.html?");

/***/ },
/* 36 */
/*!*****************************!*\
  !*** ./src/search/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-06-13 14:49:26\n* @Last Modified by:   Zhang Yingya(hzzhangyingya)\n* @Last Modified time: 2016-06-13 14:59:49\n*/\n\nmodule.exports = Regular.extend({\n  name: 'search',\n  template: __webpack_require__(/*! ./index.html */ 37),\n  input: function () {\n    this.$emit('change', this.data.search)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/search/index.js\n ** module id = 36\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/search/index.js?");

/***/ },
/* 37 */
/*!*******************************!*\
  !*** ./src/search/index.html ***!
  \*******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-06-27 09:24:14\\n-->\\n\\n<form class=\\\"form-inline\\\">\\n  <fieldset class=\\\"form-group\\\">\\n    <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Search...\\\" r-model={search} on-input={this.input()}>\\n    <a href=\\\"javascript:void(0)\\\"><i class=\\\"fa fa-search\\\"></i></a>\\n  </fieldset>\\n</form>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/search/index.html\n ** module id = 37\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/search/index.html?");

/***/ },
/* 38 */
/*!**************************!*\
  !*** ./src/tab/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-04-22 11:31:18\n* @Last modified by:   zyy\n* @Last modified time: 2016-07-02 17:02:83\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 39)\nvar paneTpl = __webpack_require__(/*! ./pane.html */ 40)\n\nRegular.extend({\n  name: 'tabPane',\n  template: paneTpl,\n  config: function () {\n    this.data.disableClick = this.$outer.data.disableClick\n    this.$outer.data.tabs[this.data.id] = this\n    this.$outer.data.tabArray.push(this)\n    if (this.data.selected) {\n      this.select()\n    }\n  },\n  select: function (notEmit) {\n    var self = this\n    var data = self.data\n    if (data.disabled) {\n      return\n    }\n    var $outer = self.$outer\n    $outer.$update('selected', self)\n    if (!notEmit) {\n      $outer.$emit('nav', data)\n    }\n  }\n})\n\nmodule.exports = Regular.extend({\n  name: 'tab',\n  template: tpl,\n  config: function () {\n    this.data.tabArray = []\n    this.data.tabs = {}\n  },\n  selectId: function (id, notEmit) {\n    var self = this\n    self.selectTab(self.data.tabs[id], notEmit)\n  },\n  selectIndex: function (index, notEmit) {\n    var self = this\n    self.selectTab(self.data.tabArray[index], notEmit)\n  },\n  selectTab: function (tab, notEmit) {\n    if (tab && tab.select) {\n      tab.select(notEmit)\n    } else {\n      delete this.data.selected\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/index.js\n ** module id = 38\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/index.js?");

/***/ },
/* 39 */
/*!****************************!*\
  !*** ./src/tab/index.html ***!
  \****************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-06-26 17:01:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-07-02 22:21:22\\n-->\\n\\n<div\\n  class=\\\"m-tab m-b-1\\\"\\n  r-class={{'disableClick':disableClick}}>\\n  <ul class=\\\"nav nav-tabs m-b-1\\\">\\n    {#include this.$body}\\n  </ul>\\n  <div class=\\\"tab-cnt\\\">\\n    {#include selected.$body}\\n  </div>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/index.html\n ** module id = 39\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/index.html?");

/***/ },
/* 40 */
/*!***************************!*\
  !*** ./src/tab/pane.html ***!
  \***************************/
/***/ function(module, exports) {

	eval("module.exports = \"<li class=\\\"nav-item\\\">\\n  <a class=\\\"nav-link\\\" href={href || 'javascript:void(0)'} r-class={{'hover': hover, 'active': this.$outer.data.selected===this}} {#if !disableClick}on-click={this.select()}{/if}>\\n    {#include title}\\n  </a>\\n</li>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/pane.html\n ** module id = 40\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/pane.html?");

/***/ }
/******/ ])
});
;