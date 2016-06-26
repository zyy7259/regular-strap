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

	eval("/**\n* @Author: Yingya Zhang <zyy>\n* @Date:   2016-06-26 17:04:00\n* @Email:  zyy7259@gmail.com\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:07:48\n*/\n\nvar Dropdown = __webpack_require__(/*! ./dropdown */ 1)\nvar EditingInput = __webpack_require__(/*! ./editingInput */ 4)\nvar Loading = __webpack_require__(/*! ./loading */ 6)\nvar Modal = __webpack_require__(/*! ./modal */ 10)\nvar Pager = __webpack_require__(/*! ./pager */ 8)\nvar Param = __webpack_require__(/*! ./param */ 11)\nvar Search = __webpack_require__(/*! ./search */ 15)\nvar Tab = __webpack_require__(/*! ./tab */ 17)\n\nvar RegularStrap = {\n  Dropdown: Dropdown,\n  EditingInput: EditingInput,\n  Loading: Loading,\n  Modal: Modal,\n  Pager: Pager,\n  Param: Param,\n  Search: Search,\n  Tab: Tab\n}\n\nmodule.exports = RegularStrap\n\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/index.js\n ** module id = 0\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/index.js?");

/***/ },
/* 1 */
/*!*******************************!*\
  !*** ./src/dropdown/index.js ***!
  \*******************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-22 19:35:33\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 17:12:68\n*/\n\nvar dom = Regular.dom\nvar tpl = __webpack_require__(/*! ./index.html */ 3)\n\nmodule.exports = Regular.extend({\n  name: 'dropdown',\n  template: tpl,\n  config: function () {\n    var self = this\n    self.unopenHandler = self.unopen.bind(self)\n    dom.on(document, 'click', self.unopenHandler)\n  },\n  unopen: function (event) {\n    var target = event.target\n    if (dom.hasClass(target, 'btn')) {\n      return\n    }\n    var self = this\n    var data = self.data\n    data.open = false\n    self.$update()\n  },\n  destroy: function () {\n    var self = this\n    self.supr()\n    dom.off(document, 'click', self.unopenHandler)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/dropdown/index.js\n ** module id = 1\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/dropdown/index.js?");

/***/ },
/* 2 */
/*!**************************************************************************************************!*\
  !*** external {"root":"Regular","amd":"Regular","commonjs":"regularjs","commonjs2":"regularjs"} ***!
  \**************************************************************************************************/
/***/ function(module, exports) {

	eval("module.exports = __WEBPACK_EXTERNAL_MODULE_2__;\n\n/*****************\n ** WEBPACK FOOTER\n ** external {\"root\":\"Regular\",\"amd\":\"Regular\",\"commonjs\":\"regularjs\",\"commonjs2\":\"regularjs\"}\n ** module id = 2\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///external_%7B%22root%22:%22Regular%22,%22amd%22:%22Regular%22,%22commonjs%22:%22regularjs%22,%22commonjs2%22:%22regularjs%22%7D?");

/***/ },
/* 3 */
/*!*********************************!*\
  !*** ./src/dropdown/index.html ***!
  \*********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"btn-group\\\" r-class={{'open':open}}>\\n  {#if nav.href}\\n    <a href={nav.href} class=\\\"btn btn-secondary-outline\\\" target=\\\"_blank\\\">{nav.title}</a>\\n    <button type=\\\"button\\\" class=\\\"btn btn-secondary-outline dropdown-toggle\\\" on-click={open=!open}></button>\\n  {#else}\\n    <button type=\\\"button\\\" class=\\\"btn btn-secondary-outline dropdown-toggle\\\" on-click={open=!open}>{nav.title}</button>\\n  {/if}\\n  <div class=\\\"dropdown-menu\\\">\\n    {#list nav.items as item}\\n      <a href={item.href} class=\\\"dropdown-item\\\" target=\\\"_blank\\\" on-click={this.unopen($event)}>{item.title}</a>\\n    {/list}\\n  </div>\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/dropdown/index.html\n ** module id = 3\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/dropdown/index.html?");

/***/ },
/* 4 */
/*!***********************************!*\
  !*** ./src/editingInput/index.js ***!
  \***********************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-28 23:53:02\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:07:77\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 18)\n/**\n * data\n * - value 初始值\n * - newValue 正在被更新的值\n * - editing 是否正在编辑\n * - invalid 非法输入\n * - canEmpty 是否允许空值\n * on-confirm 确定变更\n * on-cancel 取消变更\n */\nmodule.exports = Regular.extend({\n  name: 'editingInput',\n  template: tpl,\n  cancel: function () {\n    this.data.newValue = this.data.value\n    this.data.editing = false\n    this.data.invalid = false\n    this.$emit('cancel')\n  },\n  confirm: function () {\n    if (!this.data.newValue && !this.data.canEmpty) {\n      this.data.invalid = true\n      return\n    }\n    this.data.invalid = false\n    this.$emit('confirm')\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/editingInput/index.js\n ** module id = 4\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/editingInput/index.js?");

/***/ },
/* 5 */,
/* 6 */
/*!******************************!*\
  !*** ./src/loading/index.js ***!
  \******************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-30 14:56:44\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-22 10:20:64\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 7)\n\nmodule.exports = Regular.extend({\n  name: 'loading',\n  template: tpl\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/loading/index.js\n ** module id = 6\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/loading/index.js?");

/***/ },
/* 7 */
/*!********************************!*\
  !*** ./src/loading/index.html ***!
  \********************************/
/***/ function(module, exports) {

	eval("module.exports = \"<i class=\\\"fa fa-spinner fa-pulse {clazz}\\\"></i>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/loading/index.html\n ** module id = 7\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/loading/index.html?");

/***/ },
/* 8 */
/*!****************************!*\
  !*** ./src/pager/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-19 15:39:01\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:21:12\n*/\n\nvar notNumReg = /[^0-9]/g\nvar tpl = __webpack_require__(/*! ./index.html */ 9)\n\nRegular.extend({\n  name: 'pager',\n  template: tpl,\n  config: function () {\n    this.initDefault()\n    this.caclSize()\n    this.watchData()\n  },\n  initDefault: function () {\n    this.data.initial = {\n      id: +new Date(),\n      // 列表总长度\n      total: 0,\n      // 每页数量\n      limit: 10,\n      // size: 页码总数, total/limit\n      // 当前页码\n      current: 1,\n      // 分页器当前页码左右多余的页码数量\n      padding: 2,\n      // 如果 size 小于此值, 那么全部列出\n      sizeLimit: 9,\n      // 上一页文案\n      prevText: '&laquo;',\n      // 下一页文案\n      nextText: '&raquo;',\n      // 是否展示调整 limit 的 input\n      showLimit: false,\n      // 是否展示跳页的 input\n      showJump: false\n    }\n    this.supr()\n  },\n  caclSize: function () {\n    this.data.size = Math.ceil(this.data.total / this.data.limit)\n  },\n  watchData: function () {\n    var self = this\n    var data = self.data\n    self.$watch('limit', function (newValue, oldValue) {\n      if (typeof newValue === 'string') {\n        newValue = newValue.replace(notNumReg, '')\n        data.limit = newValue ? parseInt(newValue) : data.total\n        self.caclSize()\n      }\n    })\n    self.$watch('jump', function (newValue, oldValue) {\n      if (typeof newValue === 'string') {\n        newValue = newValue.replace(notNumReg, '')\n        if (newValue !== '') {\n          newValue = parseInt(newValue)\n        }\n        data.jump = newValue\n      }\n    })\n    self.$watch(['current', 'total', 'limit'], function (current) {\n      self.caclSize()\n      if (current > data.size) {\n        data.current = 1\n      }\n      data.begin = current - data.padding\n      data.end = current + data.padding\n      if (data.begin < 2) {\n        data.begin = 2\n      }\n      if (data.end > data.size - 1) {\n        data.end = data.size - 1\n      }\n      if (current - data.begin <= 1) {\n        data.end = data.begin + data.padding * 2\n      }\n      if (data.end - current <= 1) {\n        data.begin = data.end - data.padding * 2\n      }\n    })\n  },\n  computed: {\n    validJump: function () {\n      var data = this.data\n      var jump = data.jump\n      return typeof jump === 'number' && jump > 0 && jump <= data.size && jump !== data.current\n    }\n  },\n  jump: function () {\n    var self = this\n    var data = self.data\n    var jump = data.jump\n    if (typeof jump === 'number') {\n      self.nav(jump)\n    }\n    data.jump = ''\n    self.$refs.jump.focus()\n  },\n  nav: function (page) {\n    var self = this\n    var data = self.data\n    if (page < 1 || page > data.total || page === data.current) {\n      return\n    }\n    data.current = page\n    self.$emit('nav', data)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/pager/index.js\n ** module id = 8\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/pager/index.js?");

/***/ },
/* 9 */
/*!******************************!*\
  !*** ./src/pager/index.html ***!
  \******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<!--\\n@Author: Yingya Zhang <zyy>\\n@Date:   2016-05-19 15:39:00\\n@Email:  zyy7259@gmail.com\\n@Last modified by:   zyy\\n@Last modified time: 2016-06-21 19:59:87\\n-->\\n\\n<div class=\\\"m-pagination {clazz}\\\" r-hide={size<=1}>\\n  <!-- 可以动态调整 limit -->\\n  <form class=\\\"form form-inline\\\" r-hide={!showLimit}>\\n    <fieldset class=\\\"form-group\\\">\\n      <label for={id+'-limit'}>limit</label>\\n      <input class=\\\"limit form-control\\\" type=\\\"text\\\" r-model={limit} id={id+'-limit'}/>\\n    </fieldset>\\n  </form>\\n  <ul class=\\\"pagination\\\">\\n    <!-- 上一页 -->\\n    <li class=\\\"page-item\\\" r-class={{'disabled':current===1}}>\\n      {#if current!==1}\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(current-1)}>{#inc prevText}</a>\\n      {#else}\\n        <span class=\\\"page-link\\\">{#inc prevText}</span>\\n      {/if}\\n    </li>\\n    {#if size > sizeLimit}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===1}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(1)}>1</a>\\n      </li>\\n      {#if begin > 2}\\n        <li class=\\\"page-item disabled\\\">\\n          <span class=\\\"page-link\\\">...</span>\\n        </li>\\n      {/if}\\n      {#list begin..end as i}\\n        <li class=\\\"page-item\\\" r-class={{'active':current===i}}>\\n          <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(i)}>{i}</a>\\n        </li>\\n      {/list}\\n      {#if end < size -1}\\n        <li class=\\\"page-item disabled\\\">\\n          <span class=\\\"page-link\\\">...</span>\\n        </li>\\n      {/if}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===size}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(size)}>{size}</a>\\n      </li>\\n    {#else}\\n      {#list 1..size as i}\\n      <li class=\\\"page-item\\\" r-class={{'active':current===i}}>\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(i)}>{i}</a>\\n      </li>\\n      {/list}\\n    {/if}\\n    <!-- 下一页 -->\\n    <li class=\\\"page-item\\\" r-class={{'disabled':current===size}}>\\n      {#if current!==size}\\n        <a href=\\\"javascript:void(0)\\\" class=\\\"page-link\\\" on-click={this.nav(current+1)}>{#inc nextText}</a>\\n      {#else}\\n        <span class=\\\"page-link\\\">{#inc nextText}</span>\\n      {/if}\\n    </li>\\n  </ul>\\n  <!-- 可以随机跳转到某一页 -->\\n  <form class=\\\"form form-inline\\\" r-hide={!showJump}>\\n    <fieldset class=\\\"form-group\\\">\\n      <input type=\\\"text\\\" class=\\\"jump form-control\\\" r-model={jump} {#if validJump}on-enter={this.jump()}{#else}on-enter={false}{/if} ref=jump>\\n      <button type=\\\"button\\\" class=\\\"btn btn-primary-outline\\\" on-click={this.jump()} {#if !validJump}disabled{/if}>Go</button>\\n    </fieldset>\\n  </form>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/pager/index.html\n ** module id = 9\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/pager/index.html?");

/***/ },
/* 10 */
/*!****************************!*\
  !*** ./src/modal/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-29 19:40:47\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:10:79\n*/\n\n__webpack_require__(/*! ../loading */ 6)\nvar tpl = __webpack_require__(/*! ./index.html */ 19)\nvar dom = Regular.dom\nvar body = document.querySelector('.g-doc') || document.body\nvar counter = 0\n\n/**\n * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut\n */\nmodule.exports = Regular.extend({\n  name: 'modal',\n  template: tpl,\n  config: function () {\n    this.initDefault()\n    this.$on('afterFadeOut', this.afterFadeOut.bind(this))\n  },\n  initDefault: function () {\n    this.data.initial = {\n      // 使用 JS 始化时, 可以传入内容\n      $cnt: null,\n      // 是否自动显示\n      autoShow: true,\n      // 是否在取消时自动销毁\n      autoDestroyWhenCancel: true,\n      // 是否在确认时自动隐藏\n      autoHideWhenConfirm: true,\n      // 是否在确认时自动销毁\n      autoDestroyWhenConfirm: true,\n      // 取消按钮的文案\n      cancelTitle: '取 消',\n      // 确定按钮的文案\n      confirmTitle: '确 定'\n    }\n    this.supr()\n  },\n  init: function () {\n    if (this.$cnt) {\n      this.$cnt.$inject(this.$refs.cnt)\n    }\n    if (this.data.autoShow) {\n      this.show()\n    }\n  },\n  show: function () {\n    counter++\n    dom.addClass(body, 'modal-open')\n    this.$inject(body)\n    this.data.show = true\n    this.$update()\n  },\n  click: function (event) {\n    if (event.target === this.$refs.modal) {\n      this.cancel()\n    }\n  },\n  /**\n   * cancel & confirm 会触发数据的变更, 数据变更会引起 UI 变更, 最终会调用 afterFadeOut 来决定要不要销毁\n   * 子类可以覆盖 cancel & confirm, 但是记得要调用 this.supr() 来设置 reason, 这样才能在 afterFadeOut 里面正确判断是否要销毁\n   */\n  cancel: function () {\n    this.hide()\n    this.data.reason = 'cancel'\n    this.$emit('cancel')\n  },\n  confirm: function () {\n    if (this.data.autoHideWhenConfirm) {\n      this.hide()\n    }\n    this.data.reason = 'confirm'\n    this.$emit('confirm')\n  },\n  hide: function () {\n    this.data.show = false\n    this.data.hide = true\n    this.$update()\n  },\n  afterFadeOut: function () {\n    // 如果还有显示的 Modal, 那么不去 class\n    counter--\n    if (counter === 0) {\n      dom.delClass(body, 'modal-open')\n    }\n\n    this.data.hide = false\n    this.data.show = false\n    var shouldDestroy = (this.data.reason === 'cancel' && this.data.autoDestroyWhenCancel) ||\n      (this.data.reason === 'confirm' && this.data.autoDestroyWhenConfirm)\n    if (shouldDestroy) {\n      this.destroy()\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/index.js\n ** module id = 10\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/index.js?");

/***/ },
/* 11 */
/*!****************************!*\
  !*** ./src/param/index.js ***!
  \****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-30 16:40:04\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:21:23\n*/\n\n__webpack_require__(/*! ./checkboxes */ 12)\n__webpack_require__(/*! ../loading */ 6)\nvar tpl = __webpack_require__(/*! ./index.html */ 14)\n\n/**\n* data.list []\n* - type: 'String/Email/Integer/DateStr/Select/Checkboxes'\n* - name: String\n* - desc: String\n* - mandatory: true/false\n* - labelClazz: ''\n* - iptClazz: ''\n* - options: used by Select\n*   - value: String\n*   - desc: String\n* - list: used by checkboxes\n*   - value: String\n*   - desc: String\n*\n* data.emailReg\n* - 验证邮箱的正则表达式\n*\n* data.default\n* - 默认值\n*/\nmodule.exports = Regular.extend({\n  name: 'param',\n  template: tpl,\n  mandatoryTpl: '{#if param.mandatory}<span class=\"text-danger\">*&nbsp;&nbsp;</span>{/if}',\n  config: function () {\n    this.initDefault()\n    this.mergeParamDefault()\n  },\n  initDefault: function () {\n    this.data.initial = {\n      // ID\n      id: +new Date(),\n      // 超过这个数量, 参数就叠起来\n      paramsLimit: 3,\n      // 参数列表\n      list: [],\n      // 是否隐藏 * 号\n      hideMandatory: false,\n      // 是否隐藏 : 号\n      hideColon: false,\n      // 是否隐藏提示\n      hideTip: false,\n      // 参数值对象\n      params: {},\n      // 是否展示提交按钮\n      showSubmit: false,\n      // 提交按钮的文案\n      submitTitle: '确定',\n      // 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙\n      // label 的类\n      labelPosClazz: 'text-xs-right',\n      labelColClazz: 'col-md-3',\n      // ipt 的类\n      iptColClazz: 'col-md-8',\n      // submit 的类\n      submitClazz: 'col-md-offset-3 col-md-8',\n      submitBtnClazz: 'btn-primary-outline'\n    }\n    this.supr()\n  },\n  // 参数默认值\n  mergeParamDefault: function () {\n    this.data.params = Object.assign({}, this.data.default)\n  },\n  init: function () {\n    var self = this\n    self.$watch('default', function () {\n      self.mergeParamDefault()\n    })\n  },\n  computed: {\n    // 是否每个参数一排\n    stack: 'list.length >= paramsLimit'\n  },\n  genInputType: function (param) {\n    return param.type === 'Email' ? 'email' : 'text'\n  },\n  genParamId: function (param) {\n    return this.data.id + '-param-' + param.name\n  },\n  genParamTip: function (param) {\n    var tip = param.invalidTip || param.tip || ''\n    if (tip) {\n      return tip\n    }\n    switch (param.type) {\n      case 'Email':\n        tip = '请输入合法邮箱'\n        break\n      case 'Integer':\n        tip = '请输入数字, '\n        if (param.min) {\n          tip += '最小值 ' + param.min\n        }\n        if (param.max) {\n          if (param.min) {\n            tip += ', '\n          }\n          tip += '最大值 ' + param.max\n        }\n        break\n      case 'DateStr':\n        tip = '请选择年月日'\n        break\n    }\n    return tip\n  },\n  /**\n  * 获取参数, 有错误的话返回 false, 正常的话返回所有的参数\n  * 如果指定了 checkParam, 那么只检查对应的参数\n  */\n  getParams: function (checkParam) {\n    var self = this\n    var data = self.data\n    var $refs = self.$refs\n    var params = JSON.parse(JSON.stringify(data.params))\n    var invalid = data.list.some(function (param) {\n      param.invalid = false\n      param.invalidTip = ''\n      var name = param.name\n      if (checkParam && name !== checkParam.name) {\n        return\n      }\n      var value = params[name]\n      if (typeof value === 'string') {\n        value = value.trim()\n      }\n      switch (param.type) {\n        case 'String':\n          if (value !== 0 && !value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            params[name] = '' + value\n          }\n          break\n        case 'Email':\n          if (!value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            if (!checkParam && !self.verifyEmail(value)) {\n              return self.invalidParam(param)\n            }\n          }\n          break\n        case 'Integer':\n          if (!value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            value = parseFloat(value)\n            if (isNaN(value) ||\n              (param.min && value < param.min) ||\n              (param.max && value > param.max)\n            ) {\n              return self.invalidParam(param)\n            }\n            params[name] = value\n          }\n          break\n        case 'DateStr':\n          if (!value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            value = +new Date(value)\n            if (isNaN(value)) {\n              return self.invalidParam(param)\n            }\n          }\n          break\n        case 'DateTime':\n          if (!value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            value = +new Date(value.replace(/-/g, '/').replace('T', ' '))\n            if (isNaN(value)) {\n              return self.invalidParam(param)\n            }\n            params[name] = value\n          }\n          break\n        case 'Select':\n          value = $refs[name].value\n          if (!value) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            if (param.valueType === 'Integer') {\n              value = parseInt(value)\n              if (isNaN(value)) {\n                return self.invalidParam(param)\n              }\n            }\n            params[name] = value\n          }\n          break\n        case 'Checkboxes':\n          value = $refs[name].getChecked()\n          if (!value.length) {\n            if (self.shouldInvalidEmptyParam(params, param)) {\n              return true\n            }\n          } else {\n            params[name] = value\n          }\n          break\n        default:\n          break\n      }\n    })\n    if (checkParam) {\n      this.$emit('change', params)\n    }\n    return invalid ? false : params\n  },\n  /**\n  * 对于空的参数, 如果是必须的, 那么它是 invalid\n  * 如果不是必须的, 那么从最终的结果里面删除它\n  */\n  shouldInvalidEmptyParam: function (params, param) {\n    if (param.mandatory) {\n      return this.invalidParam(param)\n    } else {\n      delete params[param.name]\n      delete this.data.params[param.name]\n    }\n  },\n  invalidParam: function (param) {\n    param.invalid = true\n    var ref = this.$refs[param.name]\n    if (ref.tagName && ref.tagName.toLowerCase() === 'input') {\n      ref.focus()\n    }\n    return true\n  },\n  verifyEmail: (function () {\n    var _reg = /^\\S+@\\S+$/\n    return function (email) {\n      var reg = this.data.emailReg || _reg\n      return reg.test(email)\n    }\n  })(),\n  submit: function (event) {\n    event.stop()\n    var params = this.getParams()\n    if (params) {\n      this.$emit('submit', params)\n    }\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/param/index.js\n ** module id = 11\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/param/index.js?");

/***/ },
/* 12 */
/*!***************************************!*\
  !*** ./src/param/checkboxes/index.js ***!
  \***************************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-05-31 20:28:05\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-22 10:21:41\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 13)\n\nmodule.exports = Regular.extend({\n  name: 'checkboxes',\n  template: tpl,\n  config: function () {\n    this.updateDefaultCheckeds()\n    this.watch()\n  },\n  updateDefaultCheckeds: function () {\n    this.data.defaultCheckeds = this.data.list.filter(function (checkbox) {\n      return checkbox.checked\n    }).map(function (checkbox) {\n      return checkbox.value\n    })\n    this.data.currChecked = this.data.defaultCheckeds.slice(0)\n  },\n  watch: function () {\n    var self = this\n    self.$watch('list', function () {\n      self.updateDefaultCheckeds()\n    })\n  },\n  isDefaultChecked: function (checkbox) {\n    return this.data.defaultCheckeds.indexOf(checkbox.value) !== -1\n  },\n  isCurrChecked: function (checkbox) {\n    return this.data.currChecked.indexOf(checkbox.value) !== -1\n  },\n  genClass: function (checkbox) {\n    var isDefaultChecked = this.isDefaultChecked(checkbox)\n    var isCurrChecked = this.isCurrChecked(checkbox)\n    if (isDefaultChecked && isCurrChecked) {\n      return 'has-success'\n    } else if ((isDefaultChecked && !isCurrChecked) ||\n    (!isDefaultChecked && isCurrChecked)) {\n      return 'has-warning'\n    }\n  },\n  // 获得页面上所有选中的 checkboxes\n  getChecked: function () {\n    return this.data.currChecked.slice(0)\n  },\n  click: function (event, checkbox) {\n    var checked = event.target.checked\n    var value = checkbox.value\n    if (checked) {\n      this.data.currChecked.push(value)\n    } else {\n      var index = this.data.currChecked.findIndex(function (id) {\n        return id === value\n      })\n      if (index !== -1) {\n        this.data.currChecked.splice(index, 1)\n      }\n    }\n    this.$emit('change')\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/param/checkboxes/index.js\n ** module id = 12\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/param/checkboxes/index.js?");

/***/ },
/* 13 */
/*!*****************************************!*\
  !*** ./src/param/checkboxes/index.html ***!
  \*****************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"row m-x-0\\\" ref=\\\"body\\\">\\n  {#list list as checkbox}\\n    <div class=\\\"col-xs-6 p-l-0\\\">\\n      <label class=\\\"checkbox-inline {this.genClass(checkbox)}\\\">\\n        <input type=\\\"checkbox\\\" data-value={checkbox.value} {#if checkbox.checked}checked{/if} on-click={this.click($event, checkbox)}>\\n        <span class=\\\"text-help\\\" r-class={{'text-muted':muted}}>{checkbox.desc}</span>\\n      </label>\\n    </div>\\n  {/list}\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/param/checkboxes/index.html\n ** module id = 13\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/param/checkboxes/index.html?");

/***/ },
/* 14 */
/*!******************************!*\
  !*** ./src/param/index.html ***!
  \******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"m-param {clazz}\\\">\\n  <div class=\\\"caption m-b-1\\\" r-hide={!caption}>{caption}</div>\\n  <!-- 如果参数不多, 那么一排放; 否则每个参数一排 -->\\n  <form class=\\\"form\\\" r-class={{'form-inline':!stack}} on-submit={this.submit($event)}>\\n    {#list list as param}\\n      <fieldset class=\\\"form-group\\\" r-class={{'row':stack, 'has-danger':param.invalid}}>\\n        <label {#if stack}class=\\\"form-control-label {labelPosClazz} {labelColClazz}\\\"{#else}class=\\\"form-control-label {param.labelClazz}\\\"{/if} for={this.genParamId(param)} title={param.title || param.desc} r-hide={!param.desc}>\\n          {#if !hideMandatory}{#include this.mandatoryTpl}{/if}\\n          {param.desc}\\n          {#if !hideColon}:{/if}\\n        </label>\\n        <div {#if stack}class=\\\"{iptColClazz}\\\"{#else}class=\\\"form-group {param.iptClazz}\\\"{/if}>\\n          {#if param.type === 'String' || param.type === 'Email' || param.type === 'Integer'}\\n            <input class=\\\"form-control\\\" type={this.genInputType(param)} id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' placeholder={this.genParamTip(param)} maxlength={param.maxlength} on-input={this.getParams(param)} on-blur={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'DateStr'}\\n            <input type=\\\"date\\\" class=\\\"form-control\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'DateTime'}\\n            <input type=\\\"datetime-local\\\" class=\\\"form-control\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n          {/if}\\n          {#if param.type === 'Select'}\\n            <select class=\\\"form-control c-select\\\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\\n              {#list param.options as option}\\n                <option value={option.value}>{option.desc}</option>\\n              {/list}\\n            </select>\\n          {/if}\\n          {#if param.type === 'Checkboxes'}\\n            <checkboxes list={param.list} ref='{param.name}' on-change={this.getParams(param)}/>\\n          {/if}\\n          {#if param.invalid && !hideTip}\\n            <div class=\\\"text-help\\\" r-class={{'form-group':stack}}>\\n              <small>{this.genParamTip(param)}</small>\\n            </div>\\n          {/if}\\n        </div>\\n      </fieldset>\\n    {/list}\\n    {#if showSubmit}\\n      <fieldset class=\\\"form-group\\\" r-class={{'row':stack}}>\\n        <div {#if stack}class=\\\"{submitClazz} p-l-0\\\"{#else}class=\\\"form-group\\\"{/if}>\\n          <button type=\\\"submit\\\" class=\\\"btn {submitBtnClazz}\\\">{submitTitle}</button>{#if loading}<loading/>{/if}\\n        </div>\\n      </fieldset>\\n    {/if}\\n  </form>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/param/index.html\n ** module id = 14\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/param/index.html?");

/***/ },
/* 15 */
/*!*****************************!*\
  !*** ./src/search/index.js ***!
  \*****************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-06-13 14:49:26\n* @Last Modified by:   Zhang Yingya(hzzhangyingya)\n* @Last Modified time: 2016-06-13 14:59:49\n*/\n\nmodule.exports = Regular.extend({\n  name: 'search',\n  template: __webpack_require__(/*! ./index.html */ 16),\n  input: function () {\n    this.$emit('change', this.data.search)\n  }\n})\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/search/index.js\n ** module id = 15\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/search/index.js?");

/***/ },
/* 16 */
/*!*******************************!*\
  !*** ./src/search/index.html ***!
  \*******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<form class=\\\"form\\\">\\n  <fieldset class=\\\"form-group\\\">\\n    <input class=\\\"form-control\\\" type=\\\"text\\\" placeholder=\\\"Search...\\\" r-model={search} on-input={this.input()}>\\n    <a href=\\\"javascript:void(0)\\\"><i class=\\\"fa fa-search\\\"></i></a>\\n  </fieldset>\\n</form>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/search/index.html\n ** module id = 16\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/search/index.html?");

/***/ },
/* 17 */
/*!**************************!*\
  !*** ./src/tab/index.js ***!
  \**************************/
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(Regular) {/*\n* @Author: Zhang Yingya(hzzhangyingya)\n* @Date:   2016-04-22 11:31:18\n* @Last modified by:   zyy\n* @Last modified time: 2016-06-26 18:09:11\n*/\n\nvar tpl = __webpack_require__(/*! ./index.html */ 20)\nvar paneTpl = __webpack_require__(/*! ./pane.html */ 21)\n\nvar Tab = Regular.extend({\n  name: 'tab',\n  template: tpl,\n  config: function () {\n    this.data.tabArray = []\n    this.data.tabs = {}\n  },\n  selectId: function (id, notEmit) {\n    var self = this\n    self.selectTab(self.data.tabs[id], notEmit)\n  },\n  selectIndex: function (index, notEmit) {\n    var self = this\n    self.selectTab(self.data.tabArray[index], notEmit)\n  },\n  selectTab: function (tab, notEmit) {\n    if (tab && tab.select) {\n      tab.select(notEmit)\n    } else {\n      delete this.data.selected\n    }\n  }\n})\n\nTab.Pane = Regular.extend({\n  name: 'tabPane',\n  template: paneTpl,\n  config: function () {\n    var self = this\n    self.data.disableClick = self.$outer.data.disableClick\n    self.$outer.data.tabs[self.data.id] = self\n    self.$outer.data.tabArray.push(self)\n    if (self.data.selected) {\n      this.select()\n    }\n  },\n  select: function (notEmit) {\n    var self = this\n    var data = self.data\n    if (data.disabled) {\n      return\n    }\n    var $outer = self.$outer\n    $outer.$update('selected', self)\n    if (!notEmit) {\n      $outer.$emit('nav', data)\n    }\n  }\n})\n\nmodule.exports = Tab\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(/*! regularjs */ 2)))\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/index.js\n ** module id = 17\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/index.js?");

/***/ },
/* 18 */
/*!*************************************!*\
  !*** ./src/editingInput/index.html ***!
  \*************************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"m-editingInput f-inline f-xfull\\\" r-class={{'f-block':block,'has-danger':invalid}}>\\n  {#if !editing}\\n    <label class=\\\"form-control-label p-l-0 text-truncate\\\" r-class={{'font-weight-bold':bold, 'text-muted':mute}}>\\n      {value}\\n    </label>\\n    {#if !notEditable}\\n      <i class=\\\"fa fa-edit fa-btn\\\" on-click={editing=true}></i>\\n    {/if}\\n  {#else}\\n    <input class=\\\"form-control\\\" type=\\\"text\\\" r-model={newValue} on-input={invalid = !newValue && !canEmpty} on-enter={this.confirm()} autofocus>\\n    <i class=\\\"fa fa-check fa-btn\\\" r-class={{disabled:invalid}} on-click={this.confirm()}></i>\\n    <i class=\\\"fa fa-close fa-btn\\\" on-click={this.cancel()}></i>\\n  {/if}\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/editingInput/index.html\n ** module id = 18\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/editingInput/index.html?");

/***/ },
/* 19 */
/*!******************************!*\
  !*** ./src/modal/index.html ***!
  \******************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"modal-backdrop fade\\\" r-class={{'in f-block':show}} r-animation=\\\"when:hide; class:out; emit:afterFadeOut;\\\" on-click={this.cancel()}></div>\\n<div class=\\\"modal fade\\\" ref=\\\"modal\\\" r-class={{'in f-block':show}} on-click={this.click($event)}>\\n  <div class=\\\"modal-dialog\\\">\\n    <div class=\\\"modal-content\\\">\\n      <div class=\\\"modal-header\\\">\\n        <button type=\\\"button\\\" class=\\\"close\\\" on-click={this.cancel()}>\\n          <span>&times;</span>\\n        </button>\\n        <h4 class=\\\"modal-title\\\">{title}</h4>\\n      </div>\\n      <div class=\\\"modal-body\\\" ref=\\\"cnt\\\">{#include this.$body}</div>\\n      <div class=\\\"modal-footer\\\">\\n        {#if loading}<loading/>{/if}\\n        <button class=\\\"btn btn-primary-outline\\\" r-hide={hideConfirm} on-click={this.confirm()}>{confirmTitle}</button>\\n        <button class=\\\"btn btn-secondary\\\" r-hide={hideCancel} on-click={this.cancel()}>{cancelTitle}</button>\\n      </div>\\n    </div>\\n  </div>\\n</div>\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/modal/index.html\n ** module id = 19\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/modal/index.html?");

/***/ },
/* 20 */
/*!****************************!*\
  !*** ./src/tab/index.html ***!
  \****************************/
/***/ function(module, exports) {

	eval("module.exports = \"<div class=\\\"m-tab m-b-1\\\" r-class={{'disableClick':disableClick}}>\\n  <ul class=\\\"nav nav-tabs m-b-1\\\">\\n    {#include this.$body}\\n  </ul>\\n  <div class=\\\"tab-cnt\\\">\\n    {#include selected.$body}\\n  </div>\\n</div>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/index.html\n ** module id = 20\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/index.html?");

/***/ },
/* 21 */
/*!***************************!*\
  !*** ./src/tab/pane.html ***!
  \***************************/
/***/ function(module, exports) {

	eval("module.exports = \"<li class=\\\"nav-item\\\">\\n  <a class=\\\"nav-link\\\" href={href || 'javascript:void(0)'} r-class={{'hover': hover, 'active': this.$outer.data.selected===this}} {#if !disableClick}on-click={this.select()}{/if}>\\n    {#include title}\\n  </a>\\n</li>\\n\"\n\n/*****************\n ** WEBPACK FOOTER\n ** ./src/tab/pane.html\n ** module id = 21\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./src/tab/pane.html?");

/***/ }
/******/ ])
});
;