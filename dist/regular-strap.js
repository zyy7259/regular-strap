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
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(1);
	
	var _accordion = __webpack_require__(3);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _dropdown = __webpack_require__(6);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _editableInput = __webpack_require__(8);
	
	var _editableInput2 = _interopRequireDefault(_editableInput);
	
	var _loading = __webpack_require__(14);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _modal = __webpack_require__(15);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(17);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _pager = __webpack_require__(19);
	
	var _pager2 = _interopRequireDefault(_pager);
	
	var _params = __webpack_require__(23);
	
	var _params2 = _interopRequireDefault(_params);
	
	var _search = __webpack_require__(31);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _tab = __webpack_require__(33);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/**
	* @Author: Yingya Zhang <zyy>
	* @Date:   2016-06-26 17:04:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-13T17:24:09+08:00
	*/
	
	exports['default'] = {
	  Accordion: _accordion2['default'],
	  Dropdown: _dropdown2['default'],
	  EditableInput: _editableInput2['default'],
	  Loading: _loading2['default'],
	  Modal: _modal2['default'],
	  ModalForm: _form2['default'],
	  Pager: _pager2['default'],
	  Param: _params2['default'],
	  Search: _search2['default'],
	  Tab: _tab2['default'],
	  util: _util2['default']
	};
	module.exports = exports['default'];

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	/**
	* @Author: Zhang Yingya(hzzhangyingya) <zyy>
	* @Date:   2016-07-13T17:13:00+08:00
	* @Email:  zyy7259@gmail.com
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-13T17:24:44+08:00
	*/
	
	Regular.filter('parseUrl', function () {
	  var reg = /http(?:s?):\/\/.*?(?=\s|$)/;
	  return function (value, clazz) {
	    clazz = clazz || 'primary';
	    return value.replace(reg, '<a href="$&" class="text-' + clazz + '" target="_blank">$&</a>');
	  };
	}());
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var titleTpl = '\n  <div class="{clazz}" style="cursor:pointer;" on-click={this.toggle()}>\n    {#include this.$body}\n  </div>\n'; /**
	                                                                                                                                    * @Author: Yingya Zhang <zyy>
	                                                                                                                                    * @Date:   2016-07-02 16:45:00
	                                                                                                                                    * @Email:  zyy7259@gmail.com
	                                                                                                                                    * @Last modified by:   zyy
	                                                                                                                                    * @Last modified time: 2016-07-13T13:53:28+08:00
	                                                                                                                                    */
	
	var dom = Regular.dom;
	
	Regular.extend({
	  name: 'accordionPaneTitle',
	  template: titleTpl,
	  config: function config() {
	    if (this.$outer) {
	      this.$outer.$title = this;
	    }
	  },
	  toggle: function toggle() {
	    if (this.$outer && this.$outer.toggle) {
	      this.$outer.toggle();
	    }
	  }
	});
	
	var cntTpl = '\n  <div class="{clazz} collapse"\n    r-animation="\n      when: show && !first;\n      wait: 0;\n      emit: assignHeight;\n      wait: 350;\n      emit: done;\n    "\n    r-animation="\n      when: !show && !first;\n      style: height 0;\n      emit: done;\n    "\n    ref=body>\n    {#include this.$body}\n  </div>\n';
	
	Regular.extend({
	  name: 'accordionPaneCnt',
	  template: cntTpl,
	  config: function config() {
	    if (this.$outer) {
	      this.data.show = this.$outer.data.open;
	      this.$outer.$cnt = this;
	    }
	    // 初始化后马上会触发一次动画，此时是第一次，直接跳过动画
	    this.data.first = true;
	    this.$on('assignHeight', this.assignHeight.bind(this));
	    this.$on('done', this.resetCollaping.bind(this));
	  },
	  init: function init() {
	    if (this.data.show) {
	      dom.addClass(this.$refs.body, 'in');
	    }
	  },
	  toggle: function toggle() {
	    this.data.first = false;
	    // 防止多次点击
	    if (this.data.collapsing) {
	      return;
	    }
	    this.data.collapsing = true;
	    // 切换数据
	    this.data.show = !this.data.show;
	    // 先赋值高度，再初始化 class，不能反过来，否则有了 class 再赋值的话会触发动画
	    if (!this.data.show) {
	      this.assignHeight();
	    }
	    dom.addClass(this.$refs.body, 'collapsing');
	    dom.delClass(this.$refs.body, 'collapse');
	    dom.delClass(this.$refs.body, 'in');
	  },
	  assignHeight: function assignHeight() {
	    this.$refs.body.style.height = _util2['default'].calcHeight(this.$refs.body) + 'px';
	  },
	  resetCollaping: function resetCollaping() {
	    // 重置数据、类、高度
	    this.data.collapsing = false;
	    dom.delClass(this.$refs.body, 'collapsing');
	    dom.addClass(this.$refs.body, 'collapse');
	    if (this.data.show) {
	      dom.addClass(this.$refs.body, 'in');
	    } else {
	      dom.delClass(this.$refs.body, 'in');
	    }
	    this.$refs.body.style.height = '';
	  }
	});
	
	var paneTpl = '\n  <div>\n    {#include this.$body}\n  </div>\n';
	
	Regular.extend({
	  name: 'accordionPane',
	  template: paneTpl,
	  config: function config() {
	    if (this.$outer && this.$outer.data.$panes) {
	      this.$outer.data.$panes.push(this);
	    }
	  },
	  toggle: function toggle() {
	    if (this.$cnt) {
	      this.$cnt.toggle();
	    }
	  }
	});
	
	var tpl = '\n  {#include this.$body}\n';
	
	exports['default'] = Regular.extend({
	  name: 'accordion',
	  template: tpl,
	  config: function config() {
	    this.data.$panes = [];
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _zoroBase = __webpack_require__(5);
	
	var _zoroBase2 = _interopRequireDefault(_zoroBase);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = _zoroBase2['default']; /**
	                                            * @Author: Zhang Yingya(hzzhangyingya) <zyy>
	                                            * @Date:   2016-07-13T12:09:14+08:00
	                                            * @Email:  zyy7259@gmail.com
	                                            * @Last modified by:   zyy
	                                            * @Last modified time: 2016-07-13T13:47:23+08:00
	                                            */

	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define([], factory);
		else if(typeof exports === 'object')
			exports["ZoroBase"] = factory();
		else
			root["ZoroBase"] = factory();
	})(this, function() {
	return /******/ (function(modules) { // webpackBootstrap
	/******/ 	// The module cache
	/******/ 	var installedModules = {};
	/******/
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/
	/******/ 		// Check if module is in cache
	/******/ 		if(installedModules[moduleId])
	/******/ 			return installedModules[moduleId].exports;
	/******/
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = installedModules[moduleId] = {
	/******/ 			exports: {},
	/******/ 			id: moduleId,
	/******/ 			loaded: false
	/******/ 		};
	/******/
	/******/ 		// Execute the module function
	/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
	/******/
	/******/ 		// Flag the module as loaded
	/******/ 		module.loaded = true;
	/******/
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/
	/******/
	/******/ 	// expose the modules object (__webpack_modules__)
	/******/ 	__webpack_require__.m = modules;
	/******/
	/******/ 	// expose the module cache
	/******/ 	__webpack_require__.c = installedModules;
	/******/
	/******/ 	// __webpack_public_path__
	/******/ 	__webpack_require__.p = "";
	/******/
	/******/ 	// Load entry module and return exports
	/******/ 	return __webpack_require__(0);
	/******/ })
	/************************************************************************/
	/******/ ([
	/* 0 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _blob = __webpack_require__(1);
		
		var blob = _interopRequireWildcard(_blob);
		
		var _css = __webpack_require__(2);
		
		var css = _interopRequireWildcard(_css);
		
		var _const = __webpack_require__(3);
		
		var consts = _interopRequireWildcard(_const);
		
		var _date = __webpack_require__(4);
		
		var date = _interopRequireWildcard(_date);
		
		var _dom = __webpack_require__(5);
		
		var dom = _interopRequireWildcard(_dom);
		
		var _forOwn = __webpack_require__(7);
		
		var _forOwn2 = _interopRequireDefault(_forOwn);
		
		var _id = __webpack_require__(8);
		
		var id = _interopRequireWildcard(_id);
		
		var _json = __webpack_require__(9);
		
		var json = _interopRequireWildcard(_json);
		
		var _mixin = __webpack_require__(10);
		
		var _mixin2 = _interopRequireDefault(_mixin);
		
		var _object = __webpack_require__(11);
		
		var object = _interopRequireWildcard(_object);
		
		var _type = __webpack_require__(6);
		
		var type = _interopRequireWildcard(_type);
		
		var _url = __webpack_require__(15);
		
		var url = _interopRequireWildcard(_url);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
		
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-06-23 13:45:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-13T12:13:51+08:00
		*/
		
		var obj = object.merge({}, blob, css, consts, date, dom, {
		  forOwn: _forOwn2['default']
		}, id, json, {
		  mixin: _mixin2['default']
		}, object, type, url);
		
		// TODO obj.__esModule ???
		delete obj.__esModule;
		
		exports['default'] = obj;
		module.exports = exports['default'];
	
	/***/ },
	/* 1 */
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.blobFromDataURL = blobFromDataURL;
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-07-08 11:29:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 12:42:13
		*/
		
		function blobFromDataURL(dataURL) {
		  // convert base64/URLEncoded data component to raw binary data held in a string
		  var byteString = void 0;
		  if (dataURL.split(',')[0].indexOf('base64') >= 0) {
		    byteString = window.atob(dataURL.split(',')[1]);
		  } else {
		    byteString = window.decodeURIComponent(dataURL.split(',')[1]);
		  }
		
		  // separate out the mime component
		  var mimeString = dataURL.split(',')[0].split(':')[1].split(';')[0];
		
		  // write the bytes of the string to a typed array
		  var ia = new window.Uint8Array(byteString.length);
		  for (var i = 0; i < byteString.length; i++) {
		    ia[i] = byteString.charCodeAt(i);
		  }
		
		  return new window.Blob([ia], { type: mimeString });
		}
	
	/***/ },
	/* 2 */
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.detectCSSFeature = detectCSSFeature;
		/*
		* @Author: Zhang Yingya(hzzhangyingya)
		* @Date:   2016-03-30 16:52:45
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 12:57:03
		*/
		
		function detectCSSFeature(featurename) {
		  var feature = false;
		  var domPrefixes = 'Webkit Moz ms O'.split(' ');
		  var elm = document.createElement('div');
		  var featurenameCapital = null;
		
		  featurename = featurename.toLowerCase();
		
		  if (elm.style[featurename] !== undefined) {
		    feature = true;
		  }
		
		  if (feature === false) {
		    featurenameCapital = featurename.charAt(0).toUpperCase() + featurename.substr(1);
		    for (var i = 0; i < domPrefixes.length; i++) {
		      if (elm.style[domPrefixes[i] + featurenameCapital] !== undefined) {
		        feature = true;
		        break;
		      }
		    }
		  }
		  return feature;
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports) {
	
		"use strict";
		
		exports.__esModule = true;
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-07-10 12:47:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 12:48:49
		*/
		
		var o = exports.o = {};
		var emptyObj = exports.emptyObj = {};
		
		var f = exports.f = function f() {};
		var emptyFunc = exports.emptyFunc = function emptyFunc() {};
		
		var regBlank = exports.regBlank = /\s+/ig;
		var regWhiteSpace = exports.regWhiteSpace = /\s+/ig;
	
	/***/ },
	/* 4 */
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.fix = fix;
		exports.getYearStr = getYearStr;
		exports.getMonthStr = getMonthStr;
		exports.getDayStr = getDayStr;
		exports.getHourStr = getHourStr;
		exports.getMinuteStr = getMinuteStr;
		exports.getSecondStr = getSecondStr;
		exports.getMillisecondStr = getMillisecondStr;
		exports.dateFromDateTimeLocal = dateFromDateTimeLocal;
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-06-23 13:40:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 13:03:62
		*/
		
		function fix(number, count) {
		  count = count || 2;
		  var str = '' + number;
		  while (str.length < count) {
		    str = '0' + str;
		  }
		  return str;
		}
		
		function getYearStr(date) {
		  return '' + date.getFullYear();
		}
		
		function getMonthStr(date) {
		  return fix(date.getMonth() + 1);
		}
		
		function getDayStr(date) {
		  return fix(date.getDate());
		}
		
		function getHourStr(date) {
		  return fix(date.getHours());
		}
		
		function getMinuteStr(date) {
		  return fix(date.getMinutes());
		}
		
		function getSecondStr(date) {
		  return fix(date.getSeconds());
		}
		
		function getMillisecondStr(date) {
		  return fix(date.getMilliseconds(), 3);
		}
		
		var format = exports.format = function () {
		  var reg = /yyyy|MM|dd|hh|mm|ss|SSS/g;
		  var mappers = {
		    yyyy: getYearStr,
		    MM: getMonthStr,
		    dd: getDayStr,
		    hh: getHourStr,
		    mm: getMinuteStr,
		    ss: getSecondStr,
		    SSS: getMillisecondStr
		  };
		  return function (date, format) {
		    date = new Date(date);
		    if (isNaN(+date)) {
		      return 'invalid date';
		    }
		    format = format || 'yyyy-MM-dd';
		    return format.replace(reg, function (match) {
		      return mappers[match](date);
		    });
		  };
		}();
		
		function dateFromDateTimeLocal(str) {
		  str = '' + str;
		  return new Date(str.replace(/-/g, '/').replace('T', ' '));
		}
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.off = exports.removeEventListener = exports.on = exports.addEventListener = undefined;
		exports.calcHeight = calcHeight;
		exports.remove = remove;
		exports.dataset = dataset;
		exports.target = target;
		exports.createIframe = createIframe;
		exports.html2node = html2node;
		
		var _type = __webpack_require__(6);
		
		function calcHeight(node) {
		  var parent = node.parentNode || document.body;
		  node = node.cloneNode(true);
		  node.style.display = 'block';
		  node.style.opacity = 0;
		  node.style.height = 'auto';
		  parent.appendChild(node);
		  var height = node.offsetHeight;
		  parent.removeChild(node);
		  return height;
		} /**
		  * @Author: Yingya Zhang <zyy>
		  * @Date:   2016-07-08 11:29:00
		  * @Email:  zyy7259@gmail.com
		  * @Last modified by:   zyy
		  * @Last modified time: 2016-07-12T16:49:46+08:00
		  */
		
		function remove(node) {
		  if (node.parentNode) {
		    node.parentNode.removeChild(node);
		  }
		}
		
		function dataset(node, key, value) {
		  if ((0, _type.exist)(value)) {
		    node.setAttribute('data-' + key, value);
		  } else {
		    return node.getAttribute('data-' + key);
		  }
		}
		
		var addEventListener = exports.addEventListener = function addEventListener(node, type, callback) {
		  if (node.addEventListener) {
		    node.addEventListener(type, callback, false);
		  } else if (node.attachEvent) {
		    node.attachEvent('on' + type, callback);
		  }
		};
		var on = exports.on = addEventListener;
		
		var removeEventListener = exports.removeEventListener = function removeEventListener(node, type, callback) {
		  if (node.removeEventListener) {
		    node.removeEventListener(type, callback, false);
		  } else if (node.detachEvent) {
		    node.detachEvent('on' + type, callback);
		  }
		};
		var off = exports.off = removeEventListener;
		
		function target(event) {
		  return event.target || event.srcElement;
		}
		
		function createIframe(options) {
		  options = options || {};
		  var iframe = document.createElement('iframe');
		  iframe.frameBorder = 0;
		  if (options.name) {
		    iframe.name = options.name;
		  }
		  if (!options.visible) {
		    iframe.style.display = 'none';
		  }
		  if ((0, _type.isFunction)(options.onload)) {
		    var onIframeLoad = function onIframeLoad(event) {
		      if (!iframe.src) {
		        return;
		      }
		      if (!options.multi) {
		        off(iframe, 'load', onIframeLoad);
		      }
		      options.onload(event);
		    };
		    on(iframe, 'load', onIframeLoad);
		  }
		  // will trigger onload
		  var parent = options.parent;
		  (parent || document.body).appendChild(iframe);
		  // ensure trigger onload async
		  var src = options.src || 'about:blank';
		  setTimeout(function () {
		    iframe.src = src;
		  }, 0);
		  return iframe;
		}
		
		function html2node(html) {
		  var div = window.document.createElement('div');
		  div.innerHTML = html;
		  var children = [];
		  var i = void 0;
		  var l = void 0;
		  if (div.children) {
		    for (i = 0, l = div.children.length; i < l; i++) {
		      children.push(div.children[i]);
		    }
		  } else {
		    for (i = 0, l = div.childNodes.length; i < l; i++) {
		      var child = div.childNodes[i];
		      if (child.nodeType === 1) {
		        children.push(child);
		      }
		    }
		  }
		  return children.length > 1 ? div : children[0];
		}
	
	/***/ },
	/* 6 */
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.getClass = getClass;
		exports.typeOf = typeOf;
		exports.isString = isString;
		exports.isNumber = isNumber;
		exports.isBoolean = isBoolean;
		exports.isArray = isArray;
		exports.isFunction = isFunction;
		exports.isDate = isDate;
		exports.isRegExp = isRegExp;
		exports.isError = isError;
		exports.isnull = isnull;
		exports.notnull = notnull;
		exports.undef = undef;
		exports.notundef = notundef;
		exports.exist = exist;
		exports.notexist = notexist;
		exports.isObject = isObject;
		exports.isEmpty = isEmpty;
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-06-30 09:54:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 12:33:38
		*/
		
		/*
		 * 类型相关 API
		 */
		
		function getClass(obj) {
		  return Object.prototype.toString.call(obj).slice(8, -1);
		}
		
		function typeOf(obj) {
		  return getClass(obj).toLowerCase();
		}
		
		function isString(obj) {
		  return typeOf(obj) === 'string';
		}
		
		function isNumber(obj) {
		  return typeOf(obj) === 'number';
		}
		
		function isBoolean(obj) {
		  return typeOf(obj) === 'boolean';
		}
		
		function isArray(obj) {
		  return typeOf(obj) === 'array';
		}
		
		function isFunction(obj) {
		  return typeOf(obj) === 'function';
		}
		
		function isDate(obj) {
		  return typeOf(obj) === 'date';
		}
		
		function isRegExp(obj) {
		  return typeOf(obj) === 'regexp';
		}
		
		function isError(obj) {
		  return typeOf(obj) === 'error';
		}
		
		function isnull(obj) {
		  return obj === null;
		}
		
		function notnull(obj) {
		  return obj !== null;
		}
		
		// 需要用 typeof 来比较，兼容性好
		function undef(obj) {
		  return typeof obj === 'undefined';
		}
		
		function notundef(obj) {
		  return typeof obj !== 'undefined';
		}
		
		function exist(obj) {
		  return notundef(obj) && notnull(obj);
		}
		
		function notexist(obj) {
		  return undef(obj) || isnull(obj);
		}
		
		function isObject(obj) {
		  return exist(obj) && typeOf(obj) === 'object';
		}
		
		/**
		 * 是否是空值
		 * @param  {Object}  obj 待检查的对象
		 * @return {Boolean}     如果是 null/undefined/''/[] 返回 true
		 */
		function isEmpty(obj) {
		  return notexist(obj) || (isString(obj) || isArray(obj)) && obj.length === 0;
		}
	
	/***/ },
	/* 7 */
	/***/ function(module, exports) {
	
		"use strict";
		
		exports.__esModule = true;
		
		exports["default"] = function () {
		  var obj = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		  var callback = arguments.length <= 1 || arguments[1] === undefined ? function () {} : arguments[1];
		  var that = arguments[2];
		
		  for (var key in obj) {
		    if (obj.hasOwnProperty(key)) {
		      callback.call(that, key, obj[key]);
		    }
		  }
		};
		
		module.exports = exports["default"]; /**
		                                     * @Author: Yingya Zhang <zyy>
		                                     * @Date:   2016-07-10 11:22:00
		                                     * @Email:  zyy7259@gmail.com
		                                     * @Last modified by:   zyy
		                                     * @Last modified time: 2016-07-10 11:25:33
		                                     */
	
	/***/ },
	/* 8 */
	/***/ function(module, exports) {
	
		'use strict';
		
		exports.__esModule = true;
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-07-08 11:29:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-07-10 12:35:03
		*/
		
		var uniqueID = exports.uniqueID = function () {
		  var id = 0;
		  return function () {
		    return '' + id++;
		  };
		}();
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.isJSON = isJSON;
		exports.parseJSON = parseJSON;
		
		var _forOwn = __webpack_require__(7);
		
		var _forOwn2 = _interopRequireDefault(_forOwn);
		
		var _type = __webpack_require__(6);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function isJSON(str) {
		  return (0, _type.isString)(str) && str.indexOf('{') === 0 && str.lastIndexOf('}') === str.length - 1;
		}
		
		function parseJSON(obj) {
		  try {
		    if (isJSON(obj)) {
		      obj = JSON.parse(obj);
		    }
		    if ((0, _type.isObject)(obj)) {
		      (0, _forOwn2['default'])(obj, function (key, value) {
		        switch ((0, _type.typeOf)(value)) {
		          case 'string':
		          case 'object':
		            obj[key] = parseJSON(value);
		            break;
		        }
		      });
		    }
		  } catch (error) {
		    console.error(error);
		  }
		  return obj;
		}
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _forOwn = __webpack_require__(7);
		
		var _forOwn2 = _interopRequireDefault(_forOwn);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		exports['default'] = function (target, source) {
		  (0, _forOwn2['default'])(source, function (key, value) {
		    target[key] = value;
		  });
		}; /**
		   * @Author: Yingya Zhang <zyy>
		   * @Date:   2016-07-08 11:29:00
		   * @Email:  zyy7259@gmail.com
		   * @Last modified by:   zyy
		   * @Last modified time: 2016-07-10 11:27:24
		   */
	
		module.exports = exports['default'];
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _stringify = __webpack_require__(12);
		
		var _stringify2 = _interopRequireDefault(_stringify);
		
		exports.simpleClone = simpleClone;
		exports.merge = merge;
		exports.fillUndef = fillUndef;
		exports.checkWithDefault = checkWithDefault;
		exports.fetch = fetch;
		exports.string2object = string2object;
		exports.object2string = object2string;
		
		var _mixin = __webpack_require__(10);
		
		var _mixin2 = _interopRequireDefault(_mixin);
		
		var _forOwn = __webpack_require__(7);
		
		var _forOwn2 = _interopRequireDefault(_forOwn);
		
		var _type = __webpack_require__(6);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function simpleClone(obj) {
		  return JSON.parse((0, _stringify2['default'])(obj));
		}
		
		/**
		 * mock Object.assign
		 * - 将 sources 的 enumerable own properties 拷贝到 target
		 * @param  {Object} target={}  目标对象
		 * @param  {Object} ...sources 待拷贝的对象
		 * @return {Object}            目标对象
		 */
		/**
		* @Author: Yingya Zhang <zyy>
		* @Date:   2016-01-07 22:16:00
		* @Email:  zyy7259@gmail.com
		* @Last modified by:   zyy
		* @Last modified time: 2016-08-04T12:05:07+08:00
		*/
		
		function merge() {
		  var target = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
		
		  for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
		    sources[_key - 1] = arguments[_key];
		  }
		
		  sources.forEach(function (source) {
		    (0, _mixin2['default'])(target, source);
		  });
		  return target;
		}
		
		/**
		 * 对于 source 的 enumerable own properties, 如果 target 没有此属性, 将 source 的值赋给 target
		 * @param  {Object} target 目标对象
		 * @param  {Object} source 源对象
		 * @return {Object}        目标对象
		 */
		function fillUndef(target, source) {
		  (0, _forOwn2['default'])(source, function (key, value) {
		    if ((0, _type.undef)(target[key])) {
		      target[key] = value;
		    }
		  });
		  return target;
		}
		
		/**
		 * 如果 target 没有 key 对应的属性, 那么将 value 赋给他
		 * @param  {Object} target 目标对象
		 * @param  {String} key    属性名
		 * @param  {Object} value  属性值
		 * @return {Object}        属性值
		 */
		function checkWithDefault(target, key, value) {
		  var v = target[key] || target[key.toLowerCase()];
		  if ((0, _type.notexist)(v)) {
		    v = value;
		    target[key] = v;
		  }
		  return v;
		}
		
		/**
		 * 对于 target 的 enumerable own properties, 如果 source 存在对应的值, 将其赋给 target
		 * @param  {Object} target 目标对象
		 * @param  {Object} source 源对象
		 * @return {Object}        目标对象
		 */
		function fetch(target, source) {
		  (0, _forOwn2['default'])(target, function (key, value) {
		    if ((0, _type.exist)(source[key])) {
		      target[key] = source[key];
		    }
		  });
		  return target;
		}
		
		function string2object() {
		  var string = arguments.length <= 0 || arguments[0] === undefined ? '' : arguments[0];
		  var sep = arguments.length <= 1 || arguments[1] === undefined ? ',' : arguments[1];
		
		  var obj = {};
		  string.split(sep).forEach(function (pair) {
		    var arr = pair.split('=');
		    var key = arr.shift();
		    if (!key) {
		      return;
		    }
		    obj[decodeURIComponent(key)] = decodeURIComponent(arr.join('='));
		  });
		  return obj;
		}
		
		function object2string(obj, sep, encode) {
		  if (!obj) {
		    return '';
		  }
		  var arr = [];
		  (0, _forOwn2['default'])(obj, function (key, value) {
		    if ((0, _type.isFunction)(value)) {
		      return;
		    }
		    if ((0, _type.isDate)(value)) {
		      value = value.getTime();
		    } else if ((0, _type.isArray)(value)) {
		      value = value.join(',');
		    } else if ((0, _type.isObject)(value)) {
		      value = (0, _stringify2['default'])(value);
		    }
		    if (encode) {
		      value = encodeURIComponent(value);
		    }
		    arr.push(encodeURIComponent(key) + '=' + value);
		  });
		  return arr.join(sep || ',');
		}
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(13), __esModule: true };
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var core  = __webpack_require__(14)
		  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
		module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
		  return $JSON.stringify.apply($JSON, arguments);
		};
	
	/***/ },
	/* 14 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.url2origin = undefined;
		exports.genUrlSep = genUrlSep;
		exports.object2query = object2query;
		
		var _object = __webpack_require__(11);
		
		function genUrlSep(url) {
		  return url.indexOf('?') < 0 ? '?' : '&';
		} /**
		  * @Author: Yingya Zhang <zyy>
		  * @Date:   2016-07-08 11:29:00
		  * @Email:  zyy7259@gmail.com
		  * @Last modified by:   zyy
		  * @Last modified time: 2016-07-10 12:41:71
		  */
		
		function object2query(obj) {
		  return (0, _object.object2string)(obj, '&', true);
		}
		
		var url2origin = exports.url2origin = function () {
		  var reg = /^([\w]+?:\/\/.*?(?=\/|$))/i;
		  return function (url) {
		    if (reg.test(url || '')) {
		      return RegExp.$1.toLowerCase();
		    }
		    return '';
		  };
		}();
	
	/***/ }
	/******/ ])
	});
	;
	//# sourceMappingURL=zoro-base.js.map

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-22 19:35:33
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 16:24:09
	*/
	
	var dom = Regular.dom;
	
	var tpl = __webpack_require__(7);
	
	exports['default'] = Regular.extend({
	  name: 'dropdown',
	  template: tpl,
	  config: function config() {
	    this.unopenHandler = this.unopen.bind(this);
	    dom.on(document, 'click', this.unopenHandler);
	  },
	  unopen: function unopen(event) {
	    var target = event.target;
	    if (dom.hasClass(target, 'btn')) {
	      return;
	    }
	    var data = this.data;
	    data.open = false;
	    this.$update();
	  },
	  destroy: function destroy() {
	    this.supr();
	    dom.off(document, 'click', this.unopenHandler);
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-07-10 15:43:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 15:43:74\n-->\n\n<div class=\"btn-group\" r-class={{'open':open}}>\n  {#if href}\n    <a href={href} class=\"btn btn-secondary-outline\" target=\"_blank\">{title}</a>\n    <button type=\"button\" class=\"btn btn-secondary-outline dropdown-toggle\" on-click={open=!open}></button>\n  {#else}\n    <button type=\"button\" class=\"btn btn-secondary-outline dropdown-toggle\" on-click={open=!open}>{title}</button>\n  {/if}\n  <div class=\"dropdown-menu\">\n    {#list items as item}\n      <a href={item.href} class=\"dropdown-item\" target=\"_blank\" on-click={this.unopen($event)}>{item.title}</a>\n    {/list}\n  </div>\n</div>\n"

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-28 23:53:02
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 15:53:51
	*/
	
	var tpl = __webpack_require__(9);
	__webpack_require__(10);
	
	/**
	 * data
	 * - value 初始值
	 * - tmp 正在被更新的值
	 * - editing 是否正在编辑
	 * - invalid 非法输入
	 * - canEmpty 是否允许空值
	 * on-confirm 确定变更
	 * on-cancel 取消变更
	 */
	exports['default'] = Regular.extend({
	  name: 'editableInput',
	  template: tpl,
	  config: function config() {
	    if (!this.data.tmp) {
	      this.data.tmp = this.data.value;
	    }
	  },
	  cancel: function cancel() {
	    this.data.tmp = this.data.value;
	    this.reset();
	    this.$emit('cancel');
	  },
	  confirm: function confirm(event) {
	    event.stop();
	    if (!this.data.tmp && !this.data.canEmpty) {
	      this.data.invalid = true;
	      return;
	    }
	    this.reset();
	    this.$emit('confirm', this.data.tmp);
	  },
	  reset: function reset() {
	    this.data.editing = false;
	    this.data.invalid = false;
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-06-29 22:32:97\n-->\n\n<form class=\"m-editableInput form-inline {clazz}\" r-class={{'has-danger':invalid}} on-submit={this.confirm($event)}>\n  {#if !editing}\n    <label class=\"form-control-label p-l-0 text-truncate\" r-class={{'font-weight-bold':bold, 'text-muted':mute}}>\n      {value}\n    </label>\n    {#if !notEditable}\n      <i class=\"fa fa-edit fa-btn\" on-click={editing=true}></i>\n    {/if}\n  {#else}\n    <input class=\"form-control\" type=\"text\" r-model={tmp} on-input={invalid = !tmp && !canEmpty} autofocus>\n    <i class=\"fa fa-check fa-btn\" r-class={{disabled:invalid}} on-click={this.confirm($event)}></i>\n    <i class=\"fa fa-close fa-btn\" on-click={this.cancel()}></i>\n  {/if}\n</form>\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(11);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-editableInput .fa{cursor:pointer}", ""]);
	
	// exports


/***/ },
/* 12 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];
	
		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};
	
		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];
	
	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}
	
		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();
	
		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";
	
		var styles = listToStyles(list);
		addStylesToDom(styles, options);
	
		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}
	
	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}
	
	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}
	
	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}
	
	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}
	
	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}
	
	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}
	
	function addStyle(obj, options) {
		var styleElement, update, remove;
	
		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}
	
		update(obj);
	
		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}
	
	var replaceText = (function () {
		var textStore = [];
	
		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();
	
	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;
	
		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}
	
	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
	
		if(media) {
			styleElement.setAttribute("media", media)
		}
	
		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}
	
	function updateLink(linkElement, obj) {
		var css = obj.css;
		var sourceMap = obj.sourceMap;
	
		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}
	
		var blob = new Blob([css], { type: "text/css" });
	
		var oldSrc = linkElement.href;
	
		linkElement.href = URL.createObjectURL(blob);
	
		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-30 14:56:44
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 15:52:17
	*/
	
	exports['default'] = Regular.extend({
	  name: 'loading',
	  template: '<i class="fa fa-spinner fa-pulse {clazz}"></i>'
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(14);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-29 19:40:47
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-13T13:53:22+08:00
	*/
	
	var tpl = __webpack_require__(16);
	var dom = Regular.dom;
	var body = document.querySelector('.g-doc') || document.body;
	var counter = 0;
	
	/**
	 * data
	 * - size
	 *   - lg/large
	 *   - sm/small
	 * - autoShow 是否自动显示
	 * - autoDestroy 是否要自动销毁
	 * - autoDestroyWhenCancel 是否在取消时自动销毁
	 * - autoHideWhenConfirm 是否在确认时自动隐藏
	 * - autoDestroyWhenConfirm 是否在确认时自动销毁
	 * - cancelTitle 取消按钮的文案
	 * - confirmTitle 确定按钮的文案
	 * cancel/confirm 之后只是调用 hide 来触发动画, 在动画结束后执行 afterFadeOut
	 */
	exports['default'] = Regular.extend({
	  name: 'modal',
	  template: tpl,
	  config: function config() {
	    this.initDefault();
	    this.$on('afterFadeOut', this.afterFadeOut.bind(this));
	  },
	  initDefault: function initDefault() {
	    _util2['default'].fillUndef(this.data, {
	      autoShow: true,
	      autoDestroy: true,
	      autoDestroyWhenCancel: true,
	      autoHideWhenConfirm: true,
	      autoDestroyWhenConfirm: true,
	      cancelTitle: '取 消',
	      confirmTitle: '确 定'
	    });
	  },
	
	  computed: {
	    sizeClazz: function sizeClazz() {
	      switch (this.data.size) {
	        case 'lg':
	        case 'large':
	          return 'modal-lg';
	        case 'sm':
	        case 'small':
	          return 'modal-sm';
	        default:
	          break;
	      }
	      return '';
	    }
	  },
	  init: function init() {
	    this.hideDom();
	    if (this.data.autoShow) {
	      this.show();
	    }
	  },
	  hideDom: function hideDom() {
	    this.$refs.backdrop.style.display = 'none';
	    this.$refs.modal.style.display = 'none';
	  },
	  showDom: function showDom() {
	    this.$refs.backdrop.style.display = 'block';
	    this.$refs.modal.style.display = 'block';
	  },
	  show: function show() {
	    var _this = this;
	
	    counter++;
	    dom.addClass(body, 'modal-open');
	    this.showDom();
	    this.$inject(body);
	    setTimeout(function () {
	      _this.data.show = true;
	      _this.$update();
	    }, 0);
	  },
	  click: function click(event) {
	    // console.log(event)
	    if (event.target === this.$refs.modal) {
	      this.cancel();
	    }
	  },
	
	  /**
	   * cancel & confirm 会触发数据的变更, 数据变更会引起 UI 变更, 最终会调用 afterFadeOut 来决定要不要销毁
	   * 子类可以覆盖 cancel & confirm, 但是记得要调用 this.supr() 来设置 reason, 这样才能在 afterFadeOut 里面正确判断是否要销毁
	   */
	  cancel: function cancel() {
	    this.hide();
	    this.data.reason = 'cancel';
	    this.$emit('cancel');
	  },
	  act: function act(action) {
	    this.confirm(action);
	  },
	  confirm: function confirm(action) {
	    if (this.data.autoHideWhenConfirm) {
	      this.hide();
	    }
	    this.data.reason = 'confirm';
	    var eventName = 'confirm';
	    if (action) {
	      eventName = action.value;
	    }
	    this.$emit(eventName, action);
	  },
	  hide: function hide() {
	    this.data.show = false;
	    this.data.hide = true;
	    this.$update();
	  },
	  afterFadeOut: function afterFadeOut() {
	    // 如果还有显示的 Modal, 那么不去 class
	    counter--;
	    if (counter === 0) {
	      dom.delClass(body, 'modal-open');
	    }
	
	    this.data.hide = false;
	    this.data.show = false;
	    this.hideDom();
	    var shouldDestroy = this.data.reason === 'cancel' && this.data.autoDestroyWhenCancel && this.data.autoDestroy || this.data.reason === 'confirm' && this.data.autoDestroyWhenConfirm && this.data.autoDestroy;
	    if (shouldDestroy) {
	      this.destroy();
	    }
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-05 10:26:07\n-->\n\n<div\n  class=\"modal-backdrop fade\"\n  ref=\"backdrop\"\n  r-class={{'in':show}}\n  r-animation=\"when:hide; class:out; emit:afterFadeOut;\"\n  on-click={this.cancel()}\n></div>\n<div\n  class=\"modal fade\"\n  ref=\"modal\"\n  r-class={{'in':show}}\n  on-click={this.click($event)}\n>\n  <div class=\"modal-dialog {sizeClazz}\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" on-click={this.cancel()}>\n          <span>&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{title}</h4>\n      </div>\n      <div class=\"modal-body\">{#include this.$body}</div>\n      <div class=\"modal-footer\">\n        {#list actions as action}\n          <button type=\"button\" class=\"btn btn-primary-outline\" on-click={this.act(action)}>{action.desc}</button>\n        {/list}\n        {#if loading}<loading/>{/if}\n        <button type=\"button\" class=\"btn btn-primary-outline\" r-hide={hideConfirm} on-click={this.confirm()}>{confirmTitle}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" r-hide={hideCancel} on-click={this.cancel()}>{cancelTitle}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _index = __webpack_require__(15);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(18); /*
	                                   * @Author: Zhang Yingya(hzzhangyingya)
	                                   * @Date:   2016-05-31 13:46:32
	                                   * @Last modified by:   zyy
	                                   * @Last modified time: 2016-07-10 15:55:41
	                                   */
	
	exports['default'] = _index2['default'].extend({
	  name: 'modalForm',
	  $body: tpl,
	  config: function config() {
	    this.supr();
	    // 确认的时候不要自动隐藏, 要在请求结束后再隐藏, 隐藏后会自动销毁
	    this.data.autoHideWhenConfirm = false;
	    this.initParamList();
	  },
	  initParamList: function initParamList() {},
	
	  // override, 检查参数, 如果不合法那么直接返回, 否则抛出 create
	  confirm: function confirm() {
	    var params = this.$refs.params;
	    if (params) {
	      params = params.getParams();
	      if (params) {
	        this.data.loading = true;
	        this.supr();
	        this.$emit('confirm');
	        this.afterConfirm(params);
	      }
	    }
	  },
	  afterConfirm: function afterConfirm() {},
	  resetLoading: function resetLoading() {
	    this.data.loading = false;
	    this.$update();
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:03:34\n-->\n\n<params\n  caption={caption}\n  list={paramList}\n  clazz={paramClazz}\n  paramsLimit={0}\n  labelColClazz={labelColClazz}\n  iptColClazz={iptColClazz}\n  default={default}\n  on-change=\"change\"\n  ref=\"params\"/>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(20); /*
	                        * @Author: Zhang Yingya(hzzhangyingya)
	                        * @Date:   2016-05-19 15:39:01
	                        * @Last modified by:   zyy
	                        * @Last modified time: 2016-07-13T13:54:23+08:00
	                        */
	
	var tpl = __webpack_require__(22);
	var notNumReg = /[^0-9]/g;
	
	/**
	 * data
	 * - id ID
	 * - total 列表总长度
	 * - limit 每页数量
	 * - size 页码总数, total/limit
	 * - current 当前页码
	 * - padding 分页器当前页码左右多余的页码数量
	 * - sizeLimit 如果 size 小于此值, 那么全部列出
	 * - prevText 上一页文案
	 * - nextText 下一页文案
	 * - showLimit 是否展示调整 limit 的 input
	 * - showJump 是否展示跳页的 input
	 * - showTotal 是否展示总数
	 *   - totalPrefix
	 *   - totalSuffix
	 *  - on-nav
	 */
	exports['default'] = Regular.extend({
	  name: 'pager',
	  template: tpl,
	  config: function config() {
	    this.initDefault();
	    this.caclSize();
	    this.watchData();
	  },
	  initDefault: function initDefault() {
	    _util2['default'].fillUndef(this.data, {
	      id: +new Date(),
	      total: 0,
	      limit: 10,
	      current: 1,
	      padding: 2,
	      sizeLimit: 9,
	      prevText: '&laquo;',
	      nextText: '&raquo;',
	      showLimit: false,
	      limitClazz: 'text-muted',
	      showJump: false,
	      showTotal: false,
	      totalClazz: 'text-muted',
	      totalPrefix: '共 ',
	      totalSuffix: ' 条'
	    });
	  },
	  caclSize: function caclSize() {
	    this.data.size = Math.ceil(this.data.total / this.data.limit);
	  },
	  watchData: function watchData() {
	    var _this = this;
	
	    var data = this.data;
	    this.$watch('limit', function (newValue, oldValue) {
	      if (typeof newValue === 'string') {
	        newValue = newValue.replace(notNumReg, '');
	        data.limit = newValue ? parseInt(newValue) : data.total;
	        _this.caclSize();
	      }
	    });
	    this.$watch('jump', function (newValue, oldValue) {
	      if (typeof newValue === 'string') {
	        newValue = newValue.replace(notNumReg, '');
	        if (newValue !== '') {
	          newValue = parseInt(newValue);
	        }
	        data.jump = newValue;
	      }
	    });
	    this.$watch(['current', 'total', 'limit'], function (current) {
	      _this.caclSize();
	      if (current > data.size) {
	        data.current = 1;
	      }
	      data.begin = current - data.padding;
	      data.end = current + data.padding;
	      if (data.begin < 2) {
	        data.begin = 2;
	      }
	      if (data.end > data.size - 1) {
	        data.end = data.size - 1;
	      }
	      if (current - data.begin <= 1) {
	        data.end = data.begin + data.padding * 2;
	      }
	      if (data.end - current <= 1) {
	        data.begin = data.end - data.padding * 2;
	      }
	    });
	  },
	
	  computed: {
	    validJump: function validJump() {
	      var data = this.data;
	      var jump = data.jump;
	      return typeof jump === 'number' && jump > 0 && jump <= data.size && jump !== data.current;
	    }
	  },
	  jump: function jump() {
	    var data = this.data;
	    var jump = data.jump;
	    if (typeof jump === 'number') {
	      this.nav(jump);
	    }
	    data.jump = '';
	    this.$refs.jump.focus();
	  },
	  nav: function nav(page) {
	    var data = this.data;
	    if (page < 1 || page > data.total || page === data.current) {
	      return;
	    }
	    data.current = page;
	    this.$emit('nav', {
	      total: data.total,
	      current: data.current,
	      limit: data.limit,
	      offset: data.limit * (data.current - 1)
	    });
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(21);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(13)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/postcss-loader/index.js!./index.css");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(12)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-pager{position:relative}.m-pager .jump,.m-pager .jump button,.m-pager .jump input,.m-pager .jump label,.m-pager .limit,.m-pager .limit button,.m-pager .limit input,.m-pager .limit label,.m-pager .pagination,.m-pager .total{float:left;margin-right:.25rem}.m-pager .jump button:last-child,.m-pager .jump input:last-child,.m-pager .jump label:last-child,.m-pager .limit button:last-child,.m-pager .limit input:last-child,.m-pager .limit label:last-child{margin-right:0}.m-pager .text{padding:.5rem 0;border:1px solid transparent}.m-pager label{margin-bottom:0}.m-pager button{margin-top:2px}.m-pager input{width:2.5rem!important;padding:.5rem 0;text-align:center}.m-pager.right .wrap{float:right}", ""]);
	
	// exports


/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-05-19 15:39:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:00:30\n-->\n\n<div class=\"m-pager m-y-1 {clazz}\" r-hide={size<=1}>\n  <div class=\"wrap clearfix\" style=\"display:inline-block;\">\n    <span class=\"total text {totalClazz}\" r-hide={!showTotal}>{totalPrefix}{total}{totalSuffix}</span>\n    <!-- 可以动态调整 limit -->\n    <form class=\"limit form form-inline\" r-hide={!showLimit}>\n      <fieldset class=\"form-group\">\n        <label class=\"text {limitClazz}\" for={id+'-limit'}>limit</label>\n        <input class=\"form-control\" type=\"text\" r-model={limit} id={id+'-limit'}/>\n      </fieldset>\n    </form>\n    <ul class=\"pagination m-y-0\">\n      <!-- 上一页 -->\n      <li class=\"page-item\" r-class={{'disabled':current===1}}>\n        {#if current!==1}\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(current-1)}>{#inc prevText}</a>\n        {#else}\n        <span class=\"page-link\">{#inc prevText}</span>\n        {/if}\n      </li>\n      {#if size > sizeLimit}\n      <li class=\"page-item\" r-class={{'active':current===1}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(1)}>1</a>\n      </li>\n      {#if begin > 2}\n      <li class=\"page-item disabled\">\n        <span class=\"page-link\">...</span>\n      </li>\n      {/if}\n      {#list begin..end as i}\n      <li class=\"page-item\" r-class={{'active':current===i}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(i)}>{i}</a>\n      </li>\n      {/list}\n      {#if end < size -1}\n      <li class=\"page-item disabled\">\n        <span class=\"page-link\">...</span>\n      </li>\n      {/if}\n      <li class=\"page-item\" r-class={{'active':current===size}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(size)}>{size}</a>\n      </li>\n      {#else}\n      {#list 1..size as i}\n      <li class=\"page-item\" r-class={{'active':current===i}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(i)}>{i}</a>\n      </li>\n      {/list}\n      {/if}\n      <!-- 下一页 -->\n      <li class=\"page-item\" r-class={{'disabled':current===size}}>\n        {#if current!==size}\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(current+1)}>{#inc nextText}</a>\n        {#else}\n        <span class=\"page-link\">{#inc nextText}</span>\n        {/if}\n      </li>\n    </ul>\n    <!-- 可以随机跳转到某一页 -->\n    <form class=\"jump form form-inline\" r-hide={!showJump}>\n      <fieldset class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" r-model={jump} {#if validJump}on-enter={this.jump()}{#else}on-enter={false}{/if} ref=jump>\n        <button type=\"button\" class=\"btn btn-primary-outline\" on-click={this.jump()} {#if !validJump}disabled{/if}>Go</button>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	__webpack_require__(24);
	
	__webpack_require__(27);
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(30); /*
	                                   * @Author: Zhang Yingya(hzzhangyingya)
	                                   * @Date:   2016-05-30 16:40:04
	                                   * @Last modified by:   zyy
	                                   * @Last modified time: 2016-08-05T14:06:23+08:00
	                                   */
	
	var suffixTpl = __webpack_require__(29);
	var DateTimeFormat = 'yyyy-MM-ddThh:mm';
	var DateStrFormat = 'yyyy-MM-dd';
	var MonthStrFormat = 'yyyy-MM';
	
	if (Regular.directive('r-model2') === undefined) {
	  Regular.directive('r-model2', {
	    // TODO 理解一下
	    link: function link(elem, value) {
	      value = this.$get(value);
	      return Regular.directive('r-model').link.call(this, elem, value);
	    }
	  });
	} else {
	  console.warn('r-model2 指令已经被注册了，请检查兼容性');
	}
	
	// 合法的值类型, 这些类型均使用 input:text 来呈现
	var validValueTypes = ['String', 'Number', 'Boolean', 'Array', 'Object'];
	var valueParsers = {
	  'String': function String(value) {
	    return '' + value;
	  },
	  'Number': function Number(value) {
	    return +value;
	  },
	  'Boolean': function Boolean(value) {
	    return value === 'true';
	  },
	  'Array': function Array(value) {
	    return JSON.parse(value);
	  },
	  'Object': function Object(value) {
	    return JSON.parse(value);
	  }
	};
	
	/**
	 * data
	 * - id ID
	 * - list 参数列表
	 *   - type:
	 *     - Static
	 *     - String
	 *     - Number
	 *     - Boolean
	 *     - Array
	 *     - Object
	 *     - Email
	 *     - DateTime
	 *     - DateStr
	 *     - MonthStr
	 *     - Select
	 *     - Textarea
	 *     - Checkboxes
	 *     - Radios
	 *   - name: String
	 *   - desc: String
	 *   - mandatory: true/false
	 *   - value: 该参数的默认值
	 *   - min/max: used by Number
	 *   - maxlength: used by input
	 *   - list: used by Select/Checkboxes/Radios
	 *     - value: String
	 *     - desc: String
	 *     - selected: Boolean
	 *     - checked: Boolean
	 *     - spread: 是否将 checkbox 和 radio 展开放在一行
	 *   - invalidTip: String 参数非法时展示的提示
	 *   - tip: String 参数提示
	 *   - showSubtitle: Boolean 是否展示子标题
	 * - paramsLimit 超过这个数量, 参数就叠起来
	 * - emailReg 验证邮箱的正则表达式
	 * - hideMandatory 是否隐藏 * 号
	 * - hideColon 是否隐藏 : 号
	 * - hideLabel 是否隐藏 label
	 * - hideTip 是否隐藏提示
	 * - subtitle 子标题
	 * - showSubtitle 是否展示子标题
	 * - showSubmit 是否展示提交按钮
	 * - submitTitle 提交按钮的文案
	 * - submitClazz
	 * - submitBtnClazz
	 * 下面的类只在 stackParams 的时候才起作用, 3 + 8 != 12, 是为了让右边有空隙
	 * - labelPosClazz
	 * - labelColClazz
	 * - iptColClazz
	 * - default 默认值
	 *   - 默认值的优先级 default < param.value < param.list.checked/selected
	 *   - 如果需要动态更新参数列表，每次更新参数列表之后都会根据 default 来重新渲染，此种场景下请注意及时更新参数的 default 值
	 */
	module.exports = Regular.extend({
	  name: 'params',
	  template: tpl,
	  suffixTpl: suffixTpl,
	  mandatoryTpl: '{#if param.mandatory}<span class="text-danger">*&nbsp;&nbsp;</span>{/if}',
	  config: function config() {
	    this.initDefault();
	    this.parseParamList();
	    this.watch();
	  },
	  initDefault: function initDefault() {
	    // 处理 ipt 和 submit 的 class
	    var iptColClazz = void 0;
	    var submitClazz = 'col-md-8';
	    if (!this.data.hideLabel) {
	      iptColClazz = 'col-md-8';
	      submitClazz += ' offset-md-3 col-md-offset-3';
	    } else {
	      iptColClazz = 'col-xs-12';
	      submitClazz = 'col-xs-12';
	    }
	    _util2['default'].fillUndef(this.data, {
	      id: +new Date(),
	      list: [],
	      'default': {},
	      paramsLimit: 2,
	      hideMandatory: false,
	      hideColon: false,
	      hideLabel: false,
	      hideTip: false,
	      showSubmit: false,
	      submitTitle: '确定',
	      labelPosClazz: 'text-xs-right',
	      labelColClazz: 'col-md-3',
	      iptColClazz: iptColClazz,
	      submitClazz: submitClazz,
	      submitBtnClazz: 'btn-outline-primary btn-primary-outline'
	    });
	    this.data.params = {};
	  },
	  reset: function reset() {
	    this.data.params = {};
	    this.parseParamList();
	    this.$update();
	  },
	  resetParam: function resetParam(name) {
	    delete this.data.params[name];
	    this.parseParamList();
	    this.$update();
	  },
	
	  /**
	   * - 解析参数默认值
	   * - 解析值类型
	   */
	  parseParamList: function parseParamList() {
	    var data = this.data;
	    data.parsedList = data.list.map(function (param) {
	      param = _util2['default'].simpleClone(param);
	      // 解析默认值, 优先级为
	      // - 之前输入的值
	      // - param.value
	      // - data.default
	      var defaultValue = data.params[param.name];
	      if (_util2['default'].isEmpty(defaultValue)) {
	        defaultValue = param.value;
	      }
	      if (_util2['default'].isEmpty(defaultValue)) {
	        defaultValue = data['default'][param.name];
	      }
	      var defaultIsEmpty = _util2['default'].isEmpty(defaultValue);
	      switch (param.type) {
	        case 'Select':
	          // Select: 如果没有提供默认值, 那么取第一个为默认值, 如果某一项有 selected, 取其为默认值
	          if (defaultIsEmpty) {
	            defaultValue = param.list[0].value;
	          }
	          param.list.some(function (option) {
	            if (option.selected) {
	              defaultValue = option.value;
	              return true;
	            }
	          });
	          break;
	        case 'DateTime':
	        case 'DateStr':
	        case 'MonthStr':
	          // DateStr & DateTime: 如果提供了默认值，那么需要格式化一下日期
	          if (!defaultIsEmpty) {
	            var format = DateTimeFormat;
	            if (param.type === 'DateStr') {
	              format = DateStrFormat;
	            } else if (param.type === 'MonthStr') {
	              format = MonthStrFormat;
	            }
	            defaultValue = +new Date(defaultValue);
	            if (!isNaN(defaultValue)) {
	              defaultValue = _util2['default'].format(defaultValue, format);
	            } else {
	              defaultValue = null;
	            }
	          }
	          break;
	        case 'Checkboxes':
	        case 'Radios':
	          // 如果没有 checked 并且提供了默认值, 那么根据默认值勾选对应的 item
	          var hasChecked = param.list.some(function (item) {
	            return item.checked;
	          });
	          if (!hasChecked && !defaultIsEmpty) {
	            param.list.forEach(function (item) {
	              var checked = void 0;
	              if (param.type === 'Checkboxes') {
	                checked = defaultValue.indexOf(item.value) !== -1;
	              } else {
	                checked = item.value === defaultValue;
	              }
	              item.checked = checked;
	            });
	          }
	          break;
	        default:
	          break;
	      }
	      // 将格式化好后的默认值存储起来
	      if (_util2['default'].exist(defaultValue)) {
	        data.params[param.name] = defaultValue;
	      } else {
	        delete data.params[param.name];
	      }
	      return param;
	    });
	    // console.log(data.parsedList.length, data.parsedList)
	  },
	  watch: function watch() {
	    this.data.defaultWatcher = this.$watch('default|json', this.parseParamList.bind(this), {
	      sync: true
	    });
	    this.data.listWatcher = this.$watch('list|json', this.parseParamList.bind(this), {
	      sync: true
	    });
	  },
	  unwatch: function unwatch() {
	    this.$unwatch(this.data.defaultWatcher);
	    this.$unwatch(this.data.listWatcher);
	  },
	
	  computed: {
	    // 是否每个参数一排
	    stack: 'list.length >= paramsLimit'
	  },
	  isValidValueType: function isValidValueType(type) {
	    return validValueTypes.indexOf(type) !== -1;
	  },
	  paramFitInput: function paramFitInput(param) {
	    return this.isValidValueType(param.type) || param.type === 'Email' || param.type === 'Password';
	  },
	  genInputType: function genInputType(param) {
	    switch (param.type) {
	      case 'Email':
	        return 'email';
	      case 'Password':
	        return 'password';
	      default:
	        return 'text';
	    }
	  },
	  paramFitDateInput: function paramFitDateInput(param) {
	    return param.type === 'DateTime' || param.type === 'DateStr' || param.type === 'MonthStr';
	  },
	  genDateInputType: function genDateInputType(param) {
	    switch (param.type) {
	      case 'DateTime':
	        return 'datetime-local';
	      case 'DateStr':
	        return 'date';
	      case 'MonthStr':
	        return 'month';
	    }
	  },
	  genParamId: function genParamId(param) {
	    return this.data.id + '-param-' + param.name;
	  },
	  genParamTip: function genParamTip(param) {
	    var tip = param.invalidTip || param.tip || '';
	    if (tip) {
	      return tip;
	    }
	    switch (param.type) {
	      case 'Email':
	        tip = '请输入合法邮箱, 格式为 foo@bar.com';
	        break;
	      case 'String':
	      case 'Number':
	        tip = '请输入' + (param.type === 'String' ? '字符串' : '数字');
	        if (param.min) {
	          tip += ', 最小值 ' + param.min;
	        }
	        if (param.max) {
	          tip += ', 最大值 ' + param.max;
	        }
	        if (param.maxlength) {
	          tip += ', 最长 ' + param.maxlength + ' 位';
	        }
	        break;
	      case 'DateTime':
	      case 'DateStr':
	      case 'MonthStr':
	        tip = '请选择日期';
	        break;
	    }
	    return tip;
	  },
	
	  /**
	  * 获取参数, 有错误的话返回 false, 正常的话返回所有的参数
	  * 如果指定了 paramToCheck, 那么只有当此参数有错误时才报错
	  */
	  getParams: function getParams(paramToCheck) {
	    var _this = this;
	
	    var data = this.data;
	    var $refs = this.$refs;
	    if (!$refs) {
	      return {};
	    }
	    var params = data.params;
	    // 有的参数存的值跟放出去的是不一样的
	    // - 数字, 存的是字符串 (不能存数字, 否则小西点会被丢掉), 放出去的是数字
	    // - DateTime，存的是字符串，放出去的是日期对象
	    var paramsToEmit = _util2['default'].simpleClone(params);
	    var invalid = data.parsedList.some(function (param) {
	      param.invalid = false;
	      var name = param.name;
	      // 如果是字符串，trim一下
	      var value = params[name];
	      if (typeof value === 'string') {
	        value = value.trim();
	      }
	      var originValue = value;
	      // 是否是待检查的参数
	      var isParamToCheck = paramToCheck && name === paramToCheck.name;
	      // 参数值是否不存在
	      var valueIsEmpty = _util2['default'].isEmpty(value);
	      var valueIsInvalid = false;
	      // 参数类型
	      var type = param.type;
	      if (_this.isValidValueType(type)) {
	        type = 'Value';
	      }
	      switch (type) {
	        case 'Value':
	          if (!valueIsEmpty) {
	            if (param.type === 'Number') {
	              value = valueParsers[param.type](value);
	              valueIsInvalid = isNaN(value) || param.min && value < param.min || param.max && value > param.max;
	              if (!valueIsInvalid) {
	                paramsToEmit[name] = value;
	                value = originValue;
	              }
	            }
	            // other types
	          }
	          break;
	        case 'Email':
	          if (!valueIsEmpty) {
	            valueIsInvalid = !_this.verifyEmail(value);
	          }
	          break;
	        case 'DateStr':
	        case 'MonthStr':
	          if (!valueIsEmpty) {
	            value = +new Date(value);
	            valueIsInvalid = isNaN(value);
	            if (!valueIsInvalid) {
	              var format = DateStrFormat;
	              if (type === 'MonthStr') {
	                format = MonthStrFormat;
	              }
	              value = _util2['default'].format(value, format);
	            }
	          }
	          break;
	        case 'DateTime':
	          if (!valueIsEmpty) {
	            value = +_util2['default'].dateFromDateTimeLocal(value);
	            valueIsInvalid = isNaN(value);
	            if (!valueIsInvalid) {
	              paramsToEmit[name] = new Date(value);
	              value = _util2['default'].format(value, DateTimeFormat);
	            }
	          }
	          break;
	        case 'Select':
	          // value = $refs[name].value
	          if (!valueIsEmpty) {
	            var parser = valueParsers[_util2['default'].getClass(param.list[0].value)];
	            if (!parser) {
	              throw new Error('不支持的Select值类型', validValueTypes);
	            }
	            value = parser(value);
	          }
	          break;
	        case 'Checkboxes':
	        case 'Radios':
	          value = $refs[name].getChecked();
	          if (param.type === 'Checkboxes') {
	            valueIsEmpty = !value.length;
	          } else if (param.type === 'Radios') {
	            valueIsEmpty = _util2['default'].isEmpty(value);
	          }
	          break;
	        default:
	          break;
	      }
	      // 如果是检查所有参数 或者 是当前要检查的参数, 那么当参数值为空时, 检测参数是否非法
	      if ((!paramToCheck || isParamToCheck) && valueIsEmpty) {
	        return _this.shouldInvalidEmptyParam(params, param);
	      }
	      // 参数值非法
	      if (valueIsInvalid) {
	        _this.invalidParam(param);
	        // 如果是检查所有参数 或者 是当前要检查的参数, 那么返回非法, 结束当前检查, 否则继续检查下一个参数
	        if (!paramToCheck || isParamToCheck) {
	          return true;
	        }
	      }
	      // 只有当参数合法并且非空时(空数组也是空), 才赋值参数值
	      if (!valueIsInvalid && !valueIsEmpty && _util2['default'].exist(value)) {
	        paramsToEmit[name] = value;
	      } else {
	        delete paramsToEmit[name];
	      }
	    });
	    if (!invalid) {
	      // 如果当前正在检查某个参数，那么触发 change
	      if (paramToCheck) {
	        this.$emit('change', paramsToEmit);
	      }
	      return paramsToEmit;
	    }
	    return false;
	  },
	
	  /**
	  * 对于空的参数, 如果是必须的, 那么它是 invalid
	  * 如果不是必须的, 那么从最终的结果里面删除它
	  */
	  shouldInvalidEmptyParam: function shouldInvalidEmptyParam(params, param) {
	    if (param.mandatory) {
	      return this.invalidParam(param);
	    } else {
	      delete params[param.name];
	      delete this.data.params[param.name];
	      return false;
	    }
	  },
	  invalidParam: function invalidParam(param) {
	    param.invalid = true;
	    var ref = this.$refs[param.name];
	    if (ref.tagName && ref.tagName.toLowerCase() === 'input') {
	      ref.focus();
	    }
	    return true;
	  },
	
	  verifyEmail: function () {
	    var _reg = /^\S+@\S+?\.\S+$/;
	    return function (email) {
	      var reg = this.data.emailReg || _reg;
	      return reg.test(email);
	    };
	  }(),
	  submit: function submit(event) {
	    event.stop();
	    var params = this.getParams();
	    if (params) {
	      this.$emit('submit', params);
	    }
	  }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _checkable = __webpack_require__(25);
	
	var _checkable2 = _interopRequireDefault(_checkable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(26);
	
	exports['default'] = _checkable2['default'].extend({
	  name: 'checkboxes',
	  template: tpl,
	  // 获得页面上所有选中的 checkboxes
	  getChecked: function getChecked() {
	    return this.data.currChecked.slice(0);
	  },
	  click: function click(event, checkbox) {
	    var checked = event.target.checked;
	    var value = checkbox.value;
	    if (checked) {
	      this.data.currChecked.push(value);
	    } else {
	      var index = this.data.currChecked.findIndex(function (id) {
	        return id === value;
	      });
	      if (index !== -1) {
	        this.data.currChecked.splice(index, 1);
	      }
	    }
	    this.$emit('change');
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(4);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	exports['default'] = Regular.extend({
	  config: function config() {
	    _util2['default'].fillUndef(this.data, {
	      colClazz: 'col-xs-6 p-l-0',
	      spreadClazz: 'm-r-1'
	    });
	    this.resetDefaultCheckeds();
	    this.watch();
	  },
	  resetDefaultCheckeds: function resetDefaultCheckeds() {
	    this.data.currChecked = this.data.param.list.filter(function (item) {
	      return item.checked;
	    }).map(function (item) {
	      return item.value;
	    });
	    // 如果提供了上一次的值，那么默认选中的应该是它们，否则默认选中的就是当前选中的
	    var v = this.data.param.previousValue;
	    if (v) {
	      this.data.defaultCheckeds = Array.isArray(v) ? v : [v];
	    } else {
	      this.data.defaultCheckeds = this.data.currChecked.slice(0);
	    }
	  },
	  watch: function watch() {
	    this.$watch('param.list|json', this.resetDefaultCheckeds.bind(this));
	    this.$watch('param.previousValue', this.resetDefaultCheckeds.bind(this));
	  },
	  isDefaultChecked: function isDefaultChecked(item) {
	    return this.data.defaultCheckeds.indexOf(item.value) !== -1;
	  },
	  isCurrChecked: function isCurrChecked(item) {
	    return this.data.currChecked.indexOf(item.value) !== -1;
	  },
	  shouldDisable: function shouldDisable(item) {
	    return item.disabled;
	  },
	  genClass: function genClass(item) {
	    var clazz;
	    var isDefaultChecked = this.isDefaultChecked(item);
	    var isCurrChecked = this.isCurrChecked(item);
	    if (isDefaultChecked && isCurrChecked) {
	      clazz = 'has-success';
	    } else if (isDefaultChecked && !isCurrChecked || !isDefaultChecked && isCurrChecked) {
	      clazz = 'has-warning';
	    }
	    if (this.shouldDisable(item)) {
	      clazz += ' disabled';
	    }
	    if (this.data.param.spread) {
	      clazz += ' ' + this.data.spreadClazz;
	    }
	    return clazz;
	  }
	}); /**
	    * @Author: Yingya Zhang <zyy>
	    * @Date:   2016-06-27 09:58:00
	    * @Email:  zyy7259@gmail.com
	    * @Last modified by:   zyy
	    * @Last modified time: 2016-07-26T17:05:13+08:00
	    */

	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 26 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row m-x-0\" ref=\"body\">\n  {#list param.list as checkbox}\n    <div\n      {#if param.spread}\n        style=\"display:inline-block;\"\n      {#else}\n        class=\"{colClazz}\"\n      {/if}>\n      <label class=\"checkbox-inline {this.genClass(checkbox)}\">\n        <input\n          type=\"checkbox\"\n          {#if checkbox.checked}checked{/if}\n          on-click={this.click($event, checkbox)}>\n        <span\n          class=\"text-help\"\n          r-class={{'text-muted':muted}}>\n          {checkbox.desc}\n        </span>\n      </label>\n    </div>\n  {/list}\n</div>\n"

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _checkable = __webpack_require__(25);
	
	var _checkable2 = _interopRequireDefault(_checkable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(28); /**
	                                   * @Author: Yingya Zhang <zyy>
	                                   * @Date:   2016-06-26 17:01:00
	                                   * @Email:  zyy7259@gmail.com
	                                   * @Last modified by:   zyy
	                                   * @Last modified time: 2016-07-26T17:02:26+08:00
	                                   */
	
	var suffixTpl = __webpack_require__(29);
	
	exports['default'] = _checkable2['default'].extend({
	  name: 'radios',
	  template: tpl,
	  suffixTpl: suffixTpl,
	  config: function config() {
	    this.data.name = +new Date();
	    if (this.data.param.checkable) {
	      this.data.param.spread = true;
	      this.data.checked = this.data.param.checked;
	      this.data.previousChecked = this.data.param.previousChecked;
	      if (this.data.previousChecked === undefined) {
	        this.data.previousChecked = this.data.checked;
	      }
	    }
	    this.supr();
	  },
	  shouldDisable: function shouldDisable(radio) {
	    if (this.data.param.checkable) {
	      return !this.data.checked || this.data.param.disabled;
	    } else {
	      return radio.disabled;
	    }
	  },
	  getChecked: function getChecked() {
	    if (this.data.param.checkable && !this.data.checked) {
	      return undefined;
	    }
	    return this.data.currChecked[0];
	  },
	  toggle: function toggle() {
	    if (this.data.param.disabled) {
	      return;
	    }
	    this.data.checked = !this.data.checked;
	    this.$emit('change');
	  },
	  click: function click(event, radio) {
	    if (radio.disabled) {
	      return;
	    }
	    var value = radio.value;
	    this.data.currChecked = [value];
	    this.$emit('change');
	  }
	});
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-26T17:28:53+08:00\n-->\n\n<div class=\"row m-x-0\" ref=\"body\">\n  {#if param.checkable}\n    <label class=\"checkbox-inline m-r-1\" r-class={{disabled:param.disabled, 'has-warning':checked!=previousChecked}}>\n      <input type=\"checkbox\"\n        on-click={this.toggle()}\n        {#if param.checked}checked{/if}\n        {#if param.disabled}disabled{/if}>\n        <span class=\"text-help\">{param.checkableDesc||'开启'}</span>\n    </label>\n  {/if}\n  {#list param.list as radio}\n    <div\n      {#if param.spread}\n        style=\"display:inline-block;\"\n      {#else}\n        class=\"{colClazz}\"\n      {/if}>\n      <label class=\"radio-inline {this.genClass(radio)}\">\n        <input\n          type=\"radio\"\n          name={name}\n          {#if radio.checked}checked{/if}\n          {#if this.shouldDisable(radio)}disabled{/if}\n          on-click={this.click($event, radio)}>\n        <span class=\"text-help\" r-class={{'text-muted':muted}}>{radio.desc}</span>\n      </label>\n    </div>\n  {/list}\n  {#include this.suffixTpl}\n</div>\n"

/***/ },
/* 29 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-07-05 15:58:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-19T15:28:49+08:00\n-->\n\n<!-- 会同时被多个组件使用，所以单独用一个 HTML 文件存储 -->\n{#if param.suffix}\n  <span class=\"{param.suffixClazz || 'text-info'}\">{param.suffix}</span>\n{/if}\n"

/***/ },
/* 30 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-08-05T14:04:34+08:00\n-->\n\n<div class=\"m-param {clazz}\">\n  <div class=\"caption m-b-1\" r-hide={!caption}>{caption}</div>\n  <!-- 如果参数不多, 那么一排放; 否则每个参数一排 -->\n  <form class=\"form\" r-class={{'form-inline':!stack}} on-submit={this.submit($event)}>\n    {#list parsedList as param}\n      <!-- param_index: {param_index} -->\n      <fieldset class=\"form-group\" r-class={{'row':stack, 'has-danger':param.invalid}}>\n        <label\n          {#if stack}\n            class=\"form-control-label {labelPosClazz} {labelColClazz}\"\n          {#else}\n            class=\"form-control-label {param.labelClazz}\"\n          {/if}\n          for={this.genParamId(param)}\n          title={param.title || param.desc}\n          r-hide={hideLabel || param.hideLabel || !param.desc}>\n          {#if !hideMandatory}{#include this.mandatoryTpl}{/if}\n          {param.desc}\n          {#if !hideColon && !param.hideColon}:{/if}\n        </label>\n        <div {#if stack}class=\"{iptColClazz}\"{#else}class=\"form-group {param.iptClazz}\"{/if}>\n          {#if param.type === 'Static'}\n            <p class=\"form-control-static\">\n              {#if !param.hideValue}{params[param.name]}{/if}\n              {#include this.suffixTpl}\n            </p>\n          {#elseif this.paramFitInput(param)}\n            <input type={this.genInputType(param)} class=\"form-control\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' placeholder={this.genParamTip(param)} maxlength={param.maxlength} on-input={this.getParams(param)}>\n          {#elseif this.paramFitDateInput(param)}\n            <input type={this.genDateInputType(param)} class=\"form-control\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\n          {#elseif param.type === 'Select'}\n            <select class=\"form-control custom-select\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\n              {#list param.list as option}\n                <option value={option.value}>{option.desc}</option>\n              {/list}\n            </select>\n          {#elseif param.type === 'Textarea'}\n            <textarea class='form-control' id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}></textarea>\n          {#elseif param.type === 'Checkboxes'}\n            <checkboxes param={param} ref='{param.name}' on-change={this.getParams(param)}/>\n          {#elseif param.type === 'Radios'}\n            <radios param={param} ref='{param.name}' on-change={this.getParams(param)}/>\n          {/if}\n          <!-- subtitle -->\n          {#if (showSubtitle || param.showSubtitle) && param.subtitle}\n            <div class=\"text-help\" r-class={{'form-group':stack}}>\n              <small>{param.subtitle}</small>\n            </div>\n          {/if}\n          <!-- 提示 -->\n          {#if param.invalid && !hideTip}\n            <div class=\"text-help\" r-class={{'form-group':stack}}>\n              <small>{this.genParamTip(param)}</small>\n            </div>\n          {/if}\n        </div>\n      </fieldset>\n    {/list}\n    {#if showSubmit}\n      <fieldset class=\"form-group\" r-class={{'row':stack}}>\n        <div {#if stack}class=\"{submitClazz}\"{#else}class=\"form-group\"{/if}>\n          <button type=\"submit\" class=\"btn {submitBtnClazz}\">{submitTitle}</button>{#if loading}<loading/>{/if}\n        </div>\n      </fieldset>\n    {/if}\n  </form>\n</div>\n"

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-06-13 14:49:26
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 16:03:33
	*/
	
	exports['default'] = Regular.extend({
	  name: 'search',
	  template: __webpack_require__(32),
	  input: function input() {
	    this.$emit('change', this.data.search);
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-08 13:19:73\n-->\n\n<form class=\"form\">\n  <fieldset class=\"form-group\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search...\" r-model={search} on-input={this.input()}>\n    <a href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\n  </fieldset>\n</form>\n"

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-04-22 11:31:18
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-28T18:33:53+08:00
	*/
	
	var tpl = __webpack_require__(34);
	var paneTpl = __webpack_require__(35);
	
	Regular.extend({
	  name: 'tabPane',
	  template: paneTpl,
	  config: function config() {
	    this.data.disableClick = this.$outer.data.disableClick;
	    this.$outer.data.tabs[this.data.id] = this;
	    this.$outer.data.tabArray.push(this);
	    if (this.data.selected) {
	      this.select();
	    }
	  },
	  select: function select(notEmit) {
	    var data = this.data;
	    if (data.disabled) {
	      return;
	    }
	    var $outer = this.$outer;
	    $outer.data.selected = this;
	    if (!notEmit) {
	      $outer.$emit('nav', data);
	    }
	  }
	});
	
	exports['default'] = Regular.extend({
	  name: 'tab',
	  template: tpl,
	  config: function config() {
	    this.data.tabArray = [];
	    this.data.tabs = {};
	  },
	  selectId: function selectId(id, notEmit) {
	    this.selectTab(this.data.tabs[id], notEmit);
	  },
	  selectIndex: function selectIndex(index, notEmit) {
	    this.selectTab(this.data.tabArray[index], notEmit);
	  },
	  selectTab: function selectTab(tab, notEmit) {
	    if (tab && tab.select) {
	      tab.select(notEmit);
	    } else {
	      delete this.data.selected;
	    }
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-02 22:21:22\n-->\n\n<div\n  class=\"m-tab m-b-1\"\n  r-class={{'disableClick':disableClick}}>\n  <ul class=\"nav nav-tabs m-b-1\">\n    {#include this.$body}\n  </ul>\n  <div class=\"tab-cnt\">\n    {#include selected.$body}\n  </div>\n</div>\n"

/***/ },
/* 35 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:03:74\n-->\n\n<li class=\"nav-item\">\n  <a\n    class=\"nav-link\"\n    href={href || 'javascript:void(0)'}\n    r-class={{'hover': hover, 'active': this.$outer.data.selected===this}}\n    {#if !disableClick}on-click={this.select()}{/if}>\n    {#include title}\n  </a>\n</li>\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=regular-strap.js.map