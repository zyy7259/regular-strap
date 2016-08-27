(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["RegularStrap"] = factory();
	else
		root["RegularStrap"] = factory();
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
	
	__webpack_require__(1);
	
	var _accordion = __webpack_require__(5);
	
	var _accordion2 = _interopRequireDefault(_accordion);
	
	var _dropdown = __webpack_require__(8);
	
	var _dropdown2 = _interopRequireDefault(_dropdown);
	
	var _editableInput = __webpack_require__(10);
	
	var _editableInput2 = _interopRequireDefault(_editableInput);
	
	var _loading = __webpack_require__(16);
	
	var _loading2 = _interopRequireDefault(_loading);
	
	var _modal = __webpack_require__(17);
	
	var _modal2 = _interopRequireDefault(_modal);
	
	var _form = __webpack_require__(19);
	
	var _form2 = _interopRequireDefault(_form);
	
	var _pager = __webpack_require__(21);
	
	var _pager2 = _interopRequireDefault(_pager);
	
	var _params = __webpack_require__(25);
	
	var _params2 = _interopRequireDefault(_params);
	
	var _search = __webpack_require__(33);
	
	var _search2 = _interopRequireDefault(_search);
	
	var _tab = __webpack_require__(35);
	
	var _tab2 = _interopRequireDefault(_tab);
	
	var _util = __webpack_require__(6);
	
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
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate) {/**
	@author	leeluolee
	@version	0.5.0
	@homepage	http://regularjs.github.io
	*/
	(function webpackUniversalModuleDefinition(root, factory) {
		if(true)
			module.exports = factory();
		else if(typeof define === 'function' && define.amd)
			define(factory);
		else if(typeof exports === 'object')
			exports["Regular"] = factory();
		else
			root["Regular"] = factory();
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
	
		var env =  __webpack_require__(1);
		var config = __webpack_require__(2); 
		var Regular = module.exports = __webpack_require__(3);
		var Parser = Regular.Parser;
		var Lexer = Regular.Lexer;
	
		if(env.browser){
		    __webpack_require__(6);
		    __webpack_require__(7);
		    __webpack_require__(8);
		    Regular.dom = __webpack_require__(4);
		}
		Regular.env = env;
		Regular.util = __webpack_require__(5);
		Regular.parse = function(str, options){
		  options = options || {};
	
		  if(options.BEGIN || options.END){
		    if(options.BEGIN) config.BEGIN = options.BEGIN;
		    if(options.END) config.END = options.END;
		    Lexer.setup();
		  }
		  var ast = new Parser(str).parse();
		  return !options.stringify? ast : JSON.stringify(ast);
		}
	
	
	
	
	/***/ },
	/* 1 */
	/***/ function(module, exports, __webpack_require__) {
	
		// some fixture test;
		// ---------------
		var _ = __webpack_require__(5);
		exports.svg = (function(){
		  return typeof document !== "undefined" && document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1" );
		})();
	
	
		exports.browser = typeof document !== "undefined" && document.nodeType;
		// whether have component in initializing
		exports.exprCache = _.cache(1000);
		exports.isRunning = false;
	
	
	/***/ },
	/* 2 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		module.exports = {
		  'BEGIN': '{',
		  'END': '}',
		  'PRECOMPILE': false
		}
	
	/***/ },
	/* 3 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		var env = __webpack_require__(1);
		var Lexer = __webpack_require__(12);
		var Parser = __webpack_require__(13);
		var config = __webpack_require__(2);
		var _ = __webpack_require__(5);
		var extend = __webpack_require__(14);
		var combine = {};
		if(env.browser){
		  var dom = __webpack_require__(4);
		  var walkers = __webpack_require__(9);
		  var Group = __webpack_require__(10);
		  var doc = dom.doc;
		  combine = __webpack_require__(15);
		}
		var events = __webpack_require__(16);
		var Watcher = __webpack_require__(17);
		var parse = __webpack_require__(18);
		var filter = __webpack_require__(19);
	
	
		/**
		* `Regular` is regularjs's NameSpace and BaseClass. Every Component is inherited from it
		* 
		* @class Regular
		* @module Regular
		* @constructor
		* @param {Object} options specification of the component
		*/
		var Regular = function(definition, options){
		  var prevRunning = env.isRunning;
		  env.isRunning = true;
		  var node, template;
	
		  definition = definition || {};
		  var usePrototyeString = typeof this.template === 'string' && !definition.template;
		  options = options || {};
	
		  definition.data = definition.data || {};
		  definition.computed = definition.computed || {};
		  if( this.data ) _.extend( definition.data, this.data );
		  if( this.computed ) _.extend( definition.computed, this.computed );
	
		  var listeners = this._eventListeners || [];
		  var normListener;
		  // hanle initialized event binding
		  if( definition.events){
		    normListener = _.normListener(definition.events);
		    if(normListener.length){
		      listeners = listeners.concat(normListener)
		    }
		    delete definition.events;
		  }
	
		  _.extend(this, definition, true);
	
		  if(this.$parent){
		     this.$parent._append(this);
		  }
		  this._children = [];
		  this.$refs = {};
	
		  template = this.template;
	
		  // template is a string (len < 16). we will find it container first
		  if((typeof template === 'string' && template.length < 16) && (node = dom.find(template))) {
		    template = node.innerHTML;
		  }
		  // if template is a xml
		  if(template && template.nodeType) template = template.innerHTML;
		  if(typeof template === 'string') {
		    template = new Parser(template).parse();
		    if(usePrototyeString) {
		    // avoid multiply compile
		      this.constructor.prototype.template = template;
		    }else{
		      delete this.template;
		    }
		  }
	
		  this.computed = handleComputed(this.computed);
		  this.$root = this.$root || this;
		  // if have events
	
		  if(listeners && listeners.length){
		    listeners.forEach(function( item ){
		      this.$on(item.type, item.listener)
		    }.bind(this))
		  }
		  this.$emit("$config");
		  this.config && this.config(this.data);
		  this.$emit("$afterConfig");
	
		  var body = this._body;
		  this._body = null;
	
		  if(body && body.ast && body.ast.length){
		    this.$body = _.getCompileFn(body.ast, body.ctx , {
		      outer: this,
		      namespace: options.namespace,
		      extra: options.extra,
		      record: true
		    })
		  }
		  // handle computed
		  if(template){
		    this.group = this.$compile(template, {namespace: options.namespace});
		    combine.node(this);
		  }
	
	
		  if(!this.$parent) this.$update();
		  this.$ready = true;
		  this.$emit("$init");
		  if( this.init ) this.init(this.data);
		  this.$emit("$afterInit");
	
		  // @TODO: remove, maybe , there is no need to update after init; 
		  // if(this.$root === this) this.$update();
		  env.isRunning = prevRunning;
	
		  // children is not required;
		  
		  if (this.devtools) {
		    this.devtools.emit("init", this)
		  }
		}
	
		// check if regular devtools hook exists
		var devtools = window.__REGULAR_DEVTOOLS_GLOBAL_HOOK__;
		if (devtools) {
		  Regular.prototype.devtools = devtools;
		}
	
		walkers && (walkers.Regular = Regular);
	
	
		// description
		// -------------------------
		// 1. Regular and derived Class use same filter
		_.extend(Regular, {
		  // private data stuff
		  _directives: { __regexp__:[] },
		  _plugins: {},
		  _protoInheritCache: [ 'directive', 'use'] ,
		  __after__: function(supr, o) {
	
		    var template;
		    this.__after__ = supr.__after__;
	
		    // use name make the component global.
		    if(o.name) Regular.component(o.name, this);
		    // this.prototype.template = dom.initTemplate(o)
		    if(template = o.template){
		      var node, name;
		      if( typeof template === 'string' && template.length < 16 && ( node = dom.find( template )) ){
		        template = node ;
		      }
	
		      if(template && template.nodeType){
		        if(name = dom.attr(template, 'name')) Regular.component(name, this);
		        template = template.innerHTML;
		      } 
	
		      if(typeof template === 'string' ){
		        this.prototype.template = config.PRECOMPILE? new Parser(template).parse(): template;
		      }
		    }
	
		    if(o.computed) this.prototype.computed = handleComputed(o.computed);
		    // inherit directive and other config from supr
		    Regular._inheritConfig(this, supr);
	
		  },
		  /**
		   * Define a directive
		   *
		   * @method directive
		   * @return {Object} Copy of ...
		   */  
		  directive: function(name, cfg){
	
		    if(_.typeOf(name) === "object"){
		      for(var k in name){
		        if(name.hasOwnProperty(k)) this.directive(k, name[k]);
		      }
		      return this;
		    }
		    var type = _.typeOf(name);
		    var directives = this._directives, directive;
		    if(cfg == null){
		      if( type === "string" && (directive = directives[name]) ) return directive;
		      else{
		        var regexp = directives.__regexp__;
		        for(var i = 0, len = regexp.length; i < len ; i++){
		          directive = regexp[i];
		          var test = directive.regexp.test(name);
		          if(test) return directive;
		        }
		      }
		      return undefined;
		    }
		    if(typeof cfg === 'function') cfg = { link: cfg } 
		    if(type === 'string') directives[name] = cfg;
		    else if(type === 'regexp'){
		      cfg.regexp = name;
		      directives.__regexp__.push(cfg)
		    }
		    return this
		  },
		  plugin: function(name, fn){
		    var plugins = this._plugins;
		    if(fn == null) return plugins[name];
		    plugins[name] = fn;
		    return this;
		  },
		  use: function(fn){
		    if(typeof fn === "string") fn = Regular.plugin(fn);
		    if(typeof fn !== "function") return this;
		    fn(this, Regular);
		    return this;
		  },
		  // config the Regularjs's global
		  config: function(name, value){
		    var needGenLexer = false;
		    if(typeof name === "object"){
		      for(var i in name){
		        // if you config
		        if( i ==="END" || i==='BEGIN' )  needGenLexer = true;
		        config[i] = name[i];
		      }
		    }
		    if(needGenLexer) Lexer.setup();
		  },
		  expression: parse.expression,
		  Parser: Parser,
		  Lexer: Lexer,
		  _addProtoInheritCache: function(name, transform){
		    if( Array.isArray( name ) ){
		      return name.forEach(Regular._addProtoInheritCache);
		    }
		    var cacheKey = "_" + name + "s"
		    Regular._protoInheritCache.push(name)
		    Regular[cacheKey] = {};
		    if(Regular[name]) return;
		    Regular[name] = function(key, cfg){
		      var cache = this[cacheKey];
	
		      if(typeof key === "object"){
		        for(var i in key){
		          if(key.hasOwnProperty(i)) this[name](i, key[i]);
		        }
		        return this;
		      }
		      if(cfg == null) return cache[key];
		      cache[key] = transform? transform(cfg) : cfg;
		      return this;
		    }
		  },
		  _inheritConfig: function(self, supr){
	
		    // prototype inherit some Regular property
		    // so every Component will have own container to serve directive, filter etc..
		    var defs = Regular._protoInheritCache;
		    var keys = _.slice(defs);
		    keys.forEach(function(key){
		      self[key] = supr[key];
		      var cacheKey = '_' + key + 's';
		      if(supr[cacheKey]) self[cacheKey] = _.createObject(supr[cacheKey]);
		    })
		    return self;
		  }
	
		});
	
		extend(Regular);
	
		Regular._addProtoInheritCache("component")
	
		Regular._addProtoInheritCache("filter", function(cfg){
		  return typeof cfg === "function"? {get: cfg}: cfg;
		})
	
	
		events.mixTo(Regular);
		Watcher.mixTo(Regular);
	
		Regular.implement({
		  init: function(){},
		  config: function(){},
		  destroy: function(){
		    // destroy event wont propgation;
		    this.$emit("$destroy");
		    this._watchers = null;
		    this.group && this.group.destroy(true);
		    this.group = null;
		    this.parentNode = null;
		    this._children = [];
		    var parent = this.$parent;
		    if(parent){
		      var index = parent._children.indexOf(this);
		      parent._children.splice(index,1);
		    }
		    this.$parent = null;
		    this.$root = null;
		    this._handles = null;
		    this.$refs = null;
	
		    if (this.devtools) {
		      this.devtools.emit("destroy", this)
		    }
		  },
	
		  /**
		   * compile a block ast ; return a group;
		   * @param  {Array} parsed ast
		   * @param  {[type]} record
		   * @return {[type]}
		   */
		  $compile: function(ast, options){
		    options = options || {};
		    if(typeof ast === 'string'){
		      ast = new Parser(ast).parse()
		    }
		    var preExt = this.__ext__,
		      record = options.record, 
		      records;
	
		    if(options.extra) this.__ext__ = options.extra;
	
		    if(record) this._record();
		    var group = this._walk(ast, options);
		    if(record){
		      records = this._release();
		      var self = this;
		      if(records.length){
		        // auto destroy all wather;
		        group.ondestroy = function(){ self.$unwatch(records); }
		      }
		    }
		    if(options.extra) this.__ext__ = preExt;
		    return group;
		  },
	
	
		  /**
		   * create two-way binding with another component;
		   * *warn*: 
		   *   expr1 and expr2 must can operate set&get, for example: the 'a.b' or 'a[b + 1]' is set-able, but 'a.b + 1' is not, 
		   *   beacuse Regular dont know how to inverse set through the expression;
		   *   
		   *   if before $bind, two component's state is not sync, the component(passed param) will sync with the called component;
		   *
		   * *example: *
		   *
		   * ```javascript
		   * // in this example, we need to link two pager component
		   * var pager = new Pager({}) // pager compoennt
		   * var pager2 = new Pager({}) // another pager component
		   * pager.$bind(pager2, 'current'); // two way bind throw two component
		   * pager.$bind(pager2, 'total');   // 
		   * // or just
		   * pager.$bind(pager2, {"current": "current", "total": "total"}) 
		   * ```
		   * 
		   * @param  {Regular} component the
		   * @param  {String|Expression} expr1     required, self expr1 to operate binding
		   * @param  {String|Expression} expr2     optional, other component's expr to bind with, if not passed, the expr2 will use the expr1;
		   * @return          this;
		   */
		  $bind: function(component, expr1, expr2){
		    var type = _.typeOf(expr1);
		    if( expr1.type === 'expression' || type === 'string' ){
		      this._bind(component, expr1, expr2)
		    }else if( type === "array" ){ // multiply same path binding through array
		      for(var i = 0, len = expr1.length; i < len; i++){
		        this._bind(component, expr1[i]);
		      }
		    }else if(type === "object"){
		      for(var i in expr1) if(expr1.hasOwnProperty(i)){
		        this._bind(component, i, expr1[i]);
		      }
		    }
		    // digest
		    component.$update();
		    return this;
		  },
		  /**
		   * unbind one component( see $bind also)
		   *
		   * unbind will unbind all relation between two component
		   * 
		   * @param  {Regular} component [descriptionegular
		   * @return {This}    this
		   */
		  $unbind: function(){
		    // todo
		  },
		  $inject: combine.inject,
		  $mute: function(isMute){
	
		    isMute = !!isMute;
	
		    var needupdate = isMute === false && this._mute;
	
		    this._mute = !!isMute;
	
		    if(needupdate) this.$update();
		    return this;
		  },
		  // private bind logic
		  _bind: function(component, expr1, expr2){
	
		    var self = this;
		    // basic binding
	
		    if(!component || !(component instanceof Regular)) throw "$bind() should pass Regular component as first argument";
		    if(!expr1) throw "$bind() should  pass as least one expression to bind";
	
		    if(!expr2) expr2 = expr1;
	
		    expr1 = parse.expression( expr1 );
		    expr2 = parse.expression( expr2 );
	
		    // set is need to operate setting ;
		    if(expr2.set){
		      var wid1 = this.$watch( expr1, function(value){
		        component.$update(expr2, value)
		      });
		      component.$on('$destroy', function(){
		        self.$unwatch(wid1)
		      })
		    }
		    if(expr1.set){
		      var wid2 = component.$watch(expr2, function(value){
		        self.$update(expr1, value)
		      });
		      // when brother destroy, we unlink this watcher
		      this.$on('$destroy', component.$unwatch.bind(component,wid2))
		    }
		    // sync the component's state to called's state
		    expr2.set(component, expr1.get(this));
		  },
		  _walk: function(ast, arg1){
		    if( _.typeOf(ast) === 'array' ){
		      var res = [];
	
		      for(var i = 0, len = ast.length; i < len; i++){
		        res.push( this._walk(ast[i], arg1) );
		      }
	
		      return new Group(res);
		    }
		    if(typeof ast === 'string') return doc.createTextNode(ast)
		    return walkers[ast.type || "default"].call(this, ast, arg1);
		  },
		  _append: function(component){
		    this._children.push(component);
		    component.$parent = this;
		  },
		  _handleEvent: function(elem, type, value, attrs){
		    var Component = this.constructor,
		      fire = typeof value !== "function"? _.handleEvent.call( this, value, type ) : value,
		      handler = Component.event(type), destroy;
	
		    if ( handler ) {
		      destroy = handler.call(this, elem, fire, attrs);
		    } else {
		      dom.on(elem, type, fire);
		    }
		    return handler ? destroy : function() {
		      dom.off(elem, type, fire);
		    }
		  },
		  // 1. 用来处理exprBody -> Function
		  // 2. list里的循环
		  _touchExpr: function(expr){
		    var  rawget, ext = this.__ext__, touched = {};
		    if(expr.type !== 'expression' || expr.touched) return expr;
		    rawget = expr.get || (expr.get = new Function(_.ctxName, _.extName , _.prefix+ "return (" + expr.body + ")"));
		    touched.get = !ext? rawget: function(context){
		      return rawget(context, ext)
		    }
	
		    if(expr.setbody && !expr.set){
		      var setbody = expr.setbody;
		      expr.set = function(ctx, value, ext){
		        expr.set = new Function(_.ctxName, _.setName , _.extName, _.prefix + setbody);          
		        return expr.set(ctx, value, ext);
		      }
		      expr.setbody = null;
		    }
		    if(expr.set){
		      touched.set = !ext? expr.set : function(ctx, value){
		        return expr.set(ctx, value, ext);
		      }
		    }
		    _.extend(touched, {
		      type: 'expression',
		      touched: true,
		      once: expr.once || expr.constant
		    })
		    return touched
		  },
		  // find filter
		  _f_: function(name){
		    var Component = this.constructor;
		    var filter = Component.filter(name);
		    if(!filter) throw Error('filter ' + name + ' is undefined');
		    return filter;
		  },
		  // simple accessor get
		  _sg_:function(path, defaults, ext){
		    if(typeof ext !== 'undefined'){
		      // if(path === "demos")  debugger
		      var computed = this.computed,
		        computedProperty = computed[path];
		      if(computedProperty){
		        if(computedProperty.type==='expression' && !computedProperty.get) this._touchExpr(computedProperty);
		        if(computedProperty.get)  return computedProperty.get(this);
		        else _.log("the computed '" + path + "' don't define the get function,  get data."+path + " altnately", "warn")
		      }
		  }
		    if(typeof defaults === "undefined" || typeof path == "undefined" ){
		      return undefined;
		    }
		    return (ext && typeof ext[path] !== 'undefined')? ext[path]: defaults[path];
	
		  },
		  // simple accessor set
		  _ss_:function(path, value, data , op, computed){
		    var computed = this.computed,
		      op = op || "=", prev, 
		      computedProperty = computed? computed[path]:null;
	
		    if(op !== '='){
		      prev = computedProperty? computedProperty.get(this): data[path];
		      switch(op){
		        case "+=":
		          value = prev + value;
		          break;
		        case "-=":
		          value = prev - value;
		          break;
		        case "*=":
		          value = prev * value;
		          break;
		        case "/=":
		          value = prev / value;
		          break;
		        case "%=":
		          value = prev % value;
		          break;
		      }
		    }
		    if(computedProperty) {
		      if(computedProperty.set) return computedProperty.set(this, value);
		      else _.log("the computed '" + path + "' don't define the set function,  assign data."+path + " altnately", "warn" )
		    }
		    data[path] = value;
		    return value;
		  }
		});
	
		Regular.prototype.inject = function(){
		  _.log("use $inject instead of inject", "error");
		  return this.$inject.apply(this, arguments);
		}
	
	
		// only one builtin filter
	
		Regular.filter(filter);
	
		module.exports = Regular;
	
	
	
		var handleComputed = (function(){
		  // wrap the computed getter;
		  function wrapGet(get){
		    return function(context){
		      return get.call(context, context.data );
		    }
		  }
		  // wrap the computed setter;
		  function wrapSet(set){
		    return function(context, value){
		      set.call( context, value, context.data );
		      return value;
		    }
		  }
	
		  return function(computed){
		    if(!computed) return;
		    var parsedComputed = {}, handle, pair, type;
		    for(var i in computed){
		      handle = computed[i]
		      type = typeof handle;
	
		      if(handle.type === 'expression'){
		        parsedComputed[i] = handle;
		        continue;
		      }
		      if( type === "string" ){
		        parsedComputed[i] = parse.expression(handle)
		      }else{
		        pair = parsedComputed[i] = {type: 'expression'};
		        if(type === "function" ){
		          pair.get = wrapGet(handle);
		        }else{
		          if(handle.get) pair.get = wrapGet(handle.get);
		          if(handle.set) pair.set = wrapSet(handle.set);
		        }
		      } 
		    }
		    return parsedComputed;
		  }
		})();
	
	
	/***/ },
	/* 4 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		// thanks for angular && mootools for some concise&cross-platform  implemention
		// =====================================
	
		// The MIT License
		// Copyright (c) 2010-2014 Google, Inc. http://angularjs.org
	
		// ---
		// license: MIT-style license. http://mootools.net
	
	
		var dom = module.exports;
		var env = __webpack_require__(1);
		var _ = __webpack_require__(5);
		var consts = __webpack_require__(11);
		var tNode = document.createElement('div')
		var addEvent, removeEvent;
		var noop = function(){}
	
		var namespaces = consts.NAMESPACE;
	
		dom.body = document.body;
	
		dom.doc = document;
	
		// camelCase
		function camelCase(str){
		  return ("" + str).replace(/-\D/g, function(match){
		    return match.charAt(1).toUpperCase();
		  });
		}
	
	
		dom.tNode = tNode;
	
		if(tNode.addEventListener){
		  addEvent = function(node, type, fn) {
		    node.addEventListener(type, fn, false);
		  }
		  removeEvent = function(node, type, fn) {
		    node.removeEventListener(type, fn, false) 
		  }
		}else{
		  addEvent = function(node, type, fn) {
		    node.attachEvent('on' + type, fn);
		  }
		  removeEvent = function(node, type, fn) {
		    node.detachEvent('on' + type, fn); 
		  }
		}
	
	
		dom.msie = parseInt((/msie (\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
		if (isNaN(dom.msie)) {
		  dom.msie = parseInt((/trident\/.*; rv:(\d+)/.exec(navigator.userAgent.toLowerCase()) || [])[1]);
		}
	
		dom.find = function(sl){
		  if(document.querySelector) {
		    try{
		      return document.querySelector(sl);
		    }catch(e){
	
		    }
		  }
		  if(sl.indexOf('#')!==-1) return document.getElementById( sl.slice(1) );
		}
	
	
		dom.inject = function(node, refer, position){
	
		  position = position || 'bottom';
		  if(!node) return ;
		  if(Array.isArray(node)){
		    var tmp = node;
		    node = dom.fragment();
		    for(var i = 0,len = tmp.length; i < len ;i++){
		      node.appendChild(tmp[i])
		    }
		  }
	
		  var firstChild, next;
		  switch(position){
		    case 'bottom':
		      refer.appendChild( node );
		      break;
		    case 'top':
		      if( firstChild = refer.firstChild ){
		        refer.insertBefore( node, refer.firstChild );
		      }else{
		        refer.appendChild( node );
		      }
		      break;
		    case 'after':
		      if( next = refer.nextSibling ){
		        next.parentNode.insertBefore( node, next );
		      }else{
		        refer.parentNode.appendChild( node );
		      }
		      break;
		    case 'before':
		      refer.parentNode.insertBefore( node, refer );
		  }
		}
	
	
		dom.id = function(id){
		  return document.getElementById(id);
		}
	
		// createElement 
		dom.create = function(type, ns, attrs){
		  if(ns === 'svg'){
		    if(!env.svg) throw Error('the env need svg support')
		    ns = namespaces.svg;
		  }
		  return !ns? document.createElement(type): document.createElementNS(ns, type);
		}
	
		// documentFragment
		dom.fragment = function(){
		  return document.createDocumentFragment();
		}
	
	
	
		var specialAttr = {
		  'class': function(node, value){
		     ('className' in node && (!node.namespaceURI || node.namespaceURI === namespaces.html  )) ? 
		      node.className = (value || '') : node.setAttribute('class', value);
		  },
		  'for': function(node, value){
		    ('htmlFor' in node) ? node.htmlFor = value : node.setAttribute('for', value);
		  },
		  'style': function(node, value){
		    (node.style) ? node.style.cssText = value : node.setAttribute('style', value);
		  },
		  'value': function(node, value){
		    node.value = (value != null) ? value : '';
		  }
		}
	
	
		// attribute Setter & Getter
		dom.attr = function(node, name, value){
		  if (_.isBooleanAttr(name)) {
		    if (typeof value !== 'undefined') {
		      if (!!value) {
		        node[name] = true;
		        node.setAttribute(name, name);
		        // lt ie7 . the javascript checked setting is in valid
		        //http://bytes.com/topic/javascript/insights/799167-browser-quirk-dynamically-appended-checked-checkbox-does-not-appear-checked-ie
		        if(dom.msie && dom.msie <=7 && name === 'checked' ) node.defaultChecked = true
		      } else {
		        node[name] = false;
		        node.removeAttribute(name);
		      }
		    } else {
		      return (node[name] ||
		               (node.attributes.getNamedItem(name)|| noop).specified) ? name : undefined;
		    }
		  } else if (typeof (value) !== 'undefined') {
		    // if in specialAttr;
		    if(specialAttr[name]) specialAttr[name](node, value);
		    else if(value === null) node.removeAttribute(name)
		    else node.setAttribute(name, value);
		  } else if (node.getAttribute) {
		    // the extra argument "2" is to get the right thing for a.href in IE, see jQuery code
		    // some elements (e.g. Document) don't have get attribute, so return undefined
		    var ret = node.getAttribute(name, 2);
		    // normalize non-existing attributes to undefined (as jQuery)
		    return ret === null ? undefined : ret;
		  }
		}
	
	
		dom.on = function(node, type, handler){
		  var types = type.split(' ');
		  handler.real = function(ev){
		    var $event = new Event(ev);
		    $event.origin = node;
		    handler.call(node, $event);
		  }
		  types.forEach(function(type){
		    type = fixEventName(node, type);
		    addEvent(node, type, handler.real);
		  });
		  return dom;
		}
		dom.off = function(node, type, handler){
		  var types = type.split(' ');
		  handler = handler.real || handler;
		  types.forEach(function(type){
		    type = fixEventName(node, type);
		    removeEvent(node, type, handler);
		  })
		}
	
	
		dom.text = (function (){
		  var map = {};
		  if (dom.msie && dom.msie < 9) {
		    map[1] = 'innerText';    
		    map[3] = 'nodeValue';    
		  } else {
		    map[1] = map[3] = 'textContent';
		  }
		  
		  return function (node, value) {
		    var textProp = map[node.nodeType];
		    if (value == null) {
		      return textProp ? node[textProp] : '';
		    }
		    node[textProp] = value;
		  }
		})();
	
	
		dom.html = function( node, html ){
		  if(typeof html === "undefined"){
		    return node.innerHTML;
		  }else{
		    node.innerHTML = html;
		  }
		}
	
		dom.replace = function(node, replaced){
		  if(replaced.parentNode) replaced.parentNode.replaceChild(node, replaced);
		}
	
		dom.remove = function(node){
		  if(node.parentNode) node.parentNode.removeChild(node);
		}
	
		// css Settle & Getter from angular
		// =================================
		// it isnt computed style 
		dom.css = function(node, name, value){
		  if( _.typeOf(name) === "object" ){
		    for(var i in name){
		      if( name.hasOwnProperty(i) ){
		        dom.css( node, i, name[i] );
		      }
		    }
		    return;
		  }
		  if ( typeof value !== "undefined" ) {
	
		    name = camelCase(name);
		    if(name) node.style[name] = value;
	
		  } else {
	
		    var val;
		    if (dom.msie <= 8) {
		      // this is some IE specific weirdness that jQuery 1.6.4 does not sure why
		      val = node.currentStyle && node.currentStyle[name];
		      if (val === '') val = 'auto';
		    }
		    val = val || node.style[name];
		    if (dom.msie <= 8) {
		      val = val === '' ? undefined : val;
		    }
		    return  val;
		  }
		}
	
		dom.addClass = function(node, className){
		  var current = node.className || "";
		  if ((" " + current + " ").indexOf(" " + className + " ") === -1) {
		    node.className = current? ( current + " " + className ) : className;
		  }
		}
	
		dom.delClass = function(node, className){
		  var current = node.className || "";
		  node.className = (" " + current + " ").replace(" " + className + " ", " ").trim();
		}
	
		dom.hasClass = function(node, className){
		  var current = node.className || "";
		  return (" " + current + " ").indexOf(" " + className + " ") !== -1;
		}
	
	
	
		// simple Event wrap
	
		//http://stackoverflow.com/questions/11068196/ie8-ie7-onchange-event-is-emited-only-after-repeated-selection
		function fixEventName(elem, name){
		  return (name === 'change'  &&  dom.msie < 9 && 
		      (elem && elem.tagName && elem.tagName.toLowerCase()==='input' && 
		        (elem.type === 'checkbox' || elem.type === 'radio')
		      )
		    )? 'click': name;
		}
	
		var rMouseEvent = /^(?:click|dblclick|contextmenu|DOMMouseScroll|mouse(?:\w+))$/
		var doc = document;
		doc = (!doc.compatMode || doc.compatMode === 'CSS1Compat') ? doc.documentElement : doc.body;
		function Event(ev){
		  ev = ev || window.event;
		  if(ev._fixed) return ev;
		  this.event = ev;
		  this.target = ev.target || ev.srcElement;
	
		  var type = this.type = ev.type;
		  var button = this.button = ev.button;
	
		  // if is mouse event patch pageX
		  if(rMouseEvent.test(type)){ //fix pageX
		    this.pageX = (ev.pageX != null) ? ev.pageX : ev.clientX + doc.scrollLeft;
		    this.pageY = (ev.pageX != null) ? ev.pageY : ev.clientY + doc.scrollTop;
		    if (type === 'mouseover' || type === 'mouseout'){// fix relatedTarget
		      var related = ev.relatedTarget || ev[(type === 'mouseover' ? 'from' : 'to') + 'Element'];
		      while (related && related.nodeType === 3) related = related.parentNode;
		      this.relatedTarget = related;
		    }
		  }
		  // if is mousescroll
		  if (type === 'DOMMouseScroll' || type === 'mousewheel'){
		    // ff ev.detail: 3    other ev.wheelDelta: -120
		    this.wheelDelta = (ev.wheelDelta) ? ev.wheelDelta / 120 : -(ev.detail || 0) / 3;
		  }
		  
		  // fix which
		  this.which = ev.which || ev.keyCode;
		  if( !this.which && button !== undefined){
		    // http://api.jquery.com/event.which/ use which
		    this.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
		  }
		  this._fixed = true;
		}
	
		_.extend(Event.prototype, {
		  stop: function(){
		    this.preventDefault().stopPropagation();
		  },
		  preventDefault: function(){
		    if (this.event.preventDefault) this.event.preventDefault();
		    else this.event.returnValue = false;
		    return this;
		  },
		  stopPropagation: function(){
		    if (this.event.stopPropagation) this.event.stopPropagation();
		    else this.event.cancelBubble = true;
		    return this;
		  },
		  stopImmediatePropagation: function(){
		    if(this.event.stopImmediatePropagation) this.event.stopImmediatePropagation();
		  }
		})
	
	
		dom.nextFrame = (function(){
		    var request = window.requestAnimationFrame ||
		                  window.webkitRequestAnimationFrame ||
		                  window.mozRequestAnimationFrame|| 
		                  function(callback){
		                    return setTimeout(callback, 16)
		                  }
	
		    var cancel = window.cancelAnimationFrame ||
		                 window.webkitCancelAnimationFrame ||
		                 window.mozCancelAnimationFrame ||
		                 window.webkitCancelRequestAnimationFrame ||
		                 function(tid){
		                    clearTimeout(tid)
		                 }
		  
		  return function(callback){
		    var id = request(callback);
		    return function(){ cancel(id); }
		  }
		})();
	
		// 3ks for angular's raf  service
		var k
		dom.nextReflow = dom.msie? function(callback){
		  return dom.nextFrame(function(){
		    k = document.body.offsetWidth;
		    callback();
		  })
		}: dom.nextFrame;
	
	
	
	
	
	/***/ },
	/* 5 */
	/***/ function(module, exports, __webpack_require__) {
	
		/* WEBPACK VAR INJECTION */(function(global) {__webpack_require__(20)();
	
	
	
		var _  = module.exports;
		var entities = __webpack_require__(21);
		var slice = [].slice;
		var o2str = ({}).toString;
		var win = typeof window !=='undefined'? window: global;
		var MAX_PRIORITY = 9999;
	
	
		_.noop = function(){};
		_.uid = (function(){
		  var _uid=0;
		  return function(){
		    return _uid++;
		  }
		})();
	
		_.extend = function( o1, o2, override ){
		  for(var i in o2) if (o2.hasOwnProperty(i)){
		    if( o1[i] === undefined || override === true ){
		      o1[i] = o2[i]
		    }
		  }
		  return o1;
		}
	
		_.keys = function(obj){
		  if(Object.keys) return Object.keys(obj);
		  var res = [];
		  for(var i in obj) if(obj.hasOwnProperty(i)){
		    res.push(i);
		  }
		  return res;
		}
	
		_.varName = 'd';
		_.setName = 'p_';
		_.ctxName = 'c';
		_.extName = 'e';
	
		_.rWord = /^[\$\w]+$/;
		_.rSimpleAccessor = /^[\$\w]+(\.[\$\w]+)*$/;
	
		_.nextTick = typeof setImmediate === 'function'? 
		  setImmediate.bind(win) : 
		  function(callback) {
		    setTimeout(callback, 0) 
		  }
	
	
	
		_.prefix = "var " + _.varName + "=" + _.ctxName + ".data;" +  _.extName  + "=" + _.extName + "||'';";
	
	
		_.slice = function(obj, start, end){
		  var res = [];
		  for(var i = start || 0, len = end || obj.length; i < len; i++){
		    var item = obj[i];
		    res.push(item)
		  }
		  return res;
		}
	
		_.typeOf = function (o) {
		  return o == null ? String(o) :o2str.call(o).slice(8, -1).toLowerCase();
		}
	
	
		_.makePredicate = function makePredicate(words, prefix) {
		    if (typeof words === "string") {
		        words = words.split(" ");
		    }
		    var f = "",
		    cats = [];
		    out: for (var i = 0; i < words.length; ++i) {
		        for (var j = 0; j < cats.length; ++j){
		          if (cats[j][0].length === words[i].length) {
		              cats[j].push(words[i]);
		              continue out;
		          }
		        }
		        cats.push([words[i]]);
		    }
		    function compareTo(arr) {
		        if (arr.length === 1) return f += "return str === '" + arr[0] + "';";
		        f += "switch(str){";
		        for (var i = 0; i < arr.length; ++i){
		           f += "case '" + arr[i] + "':";
		        }
		        f += "return true}return false;";
		    }
	
		    // When there are more than three length categories, an outer
		    // switch first dispatches on the lengths, to save on comparisons.
		    if (cats.length > 3) {
		        cats.sort(function(a, b) {
		            return b.length - a.length;
		        });
		        f += "switch(str.length){";
		        for (var i = 0; i < cats.length; ++i) {
		            var cat = cats[i];
		            f += "case " + cat[0].length + ":";
		            compareTo(cat);
		        }
		        f += "}";
	
		        // Otherwise, simply generate a flat `switch` statement.
		    } else {
		        compareTo(words);
		    }
		    return new Function("str", f);
		}
	
	
		_.trackErrorPos = (function (){
		  // linebreak
		  var lb = /\r\n|[\n\r\u2028\u2029]/g;
		  var minRange = 20, maxRange = 20;
		  function findLine(lines, pos){
		    var tmpLen = 0;
		    for(var i = 0,len = lines.length; i < len; i++){
		      var lineLen = (lines[i] || "").length;
	
		      if(tmpLen + lineLen > pos) {
		        return {num: i, line: lines[i], start: pos - i - tmpLen , prev:lines[i-1], next: lines[i+1] };
		      }
		      // 1 is for the linebreak
		      tmpLen = tmpLen + lineLen ;
		    }
		  }
		  function formatLine(str,  start, num, target){
		    var len = str.length;
		    var min = start - minRange;
		    if(min < 0) min = 0;
		    var max = start + maxRange;
		    if(max > len) max = len;
	
		    var remain = str.slice(min, max);
		    var prefix = "[" +(num+1) + "] " + (min > 0? ".." : "")
		    var postfix = max < len ? "..": "";
		    var res = prefix + remain + postfix;
		    if(target) res += "\n" + new Array(start-min + prefix.length + 1).join(" ") + "^^^";
		    return res;
		  }
		  return function(input, pos){
		    if(pos > input.length-1) pos = input.length-1;
		    lb.lastIndex = 0;
		    var lines = input.split(lb);
		    var line = findLine(lines,pos);
		    var start = line.start, num = line.num;
	
		    return (line.prev? formatLine(line.prev, start, num-1 ) + '\n': '' ) + 
		      formatLine(line.line, start, num, true) + '\n' + 
		      (line.next? formatLine(line.next, start, num+1 ) + '\n': '' );
	
		  }
		})();
	
	
		var ignoredRef = /\((\?\!|\?\:|\?\=)/g;
		_.findSubCapture = function (regStr) {
		  var left = 0,
		    right = 0,
		    len = regStr.length,
		    ignored = regStr.match(ignoredRef); // ignored uncapture
		  if(ignored) ignored = ignored.length
		  else ignored = 0;
		  for (; len--;) {
		    var letter = regStr.charAt(len);
		    if (len === 0 || regStr.charAt(len - 1) !== "\\" ) { 
		      if (letter === "(") left++;
		      if (letter === ")") right++;
		    }
		  }
		  if (left !== right) throw "RegExp: "+ regStr + "'s bracket is not marched";
		  else return left - ignored;
		};
	
	
		_.escapeRegExp = function( str){// Credit: XRegExp 0.6.1 (c) 2007-2008 Steven Levithan <http://stevenlevithan.com/regex/xregexp/> MIT License
		  return str.replace(/[-[\]{}()*+?.\\^$|,#\s]/g, function(match){
		    return '\\' + match;
		  });
		};
	
	
		var rEntity = new RegExp("&(?:(#x[0-9a-fA-F]+)|(#[0-9]+)|(" + _.keys(entities).join('|') + '));', 'gi');
	
		_.convertEntity = function(chr){
	
		  return ("" + chr).replace(rEntity, function(all, hex, dec, capture){
		    var charCode;
		    if( dec ) charCode = parseInt( dec.slice(1), 10 );
		    else if( hex ) charCode = parseInt( hex.slice(2), 16 );
		    else charCode = entities[capture]
	
		    return String.fromCharCode( charCode )
		  });
	
		}
	
	
		// simple get accessor
	
		_.createObject = function(o, props){
		    function Foo() {}
		    Foo.prototype = o;
		    var res = new Foo;
		    if(props) _.extend(res, props);
		    return res;
		}
	
		_.createProto = function(fn, o){
		    function Foo() { this.constructor = fn;}
		    Foo.prototype = o;
		    return (fn.prototype = new Foo());
		}
	
	
		_.removeOne = function(list , filter){
		  var len = list.length;
		  for(;len--;){
		    if(filter(list[len])) {
		      list.splice(len, 1)
		      return;
		    }
		  }
		}
	
	
		/**
		clone
		*/
		_.clone = function clone(obj){
		    var type = _.typeOf(obj);
		    if(type === 'array'){
		      var cloned = [];
		      for(var i=0,len = obj.length; i< len;i++){
		        cloned[i] = obj[i]
		      }
		      return cloned;
		    }
		    if(type === 'object'){
		      var cloned = {};
		      for(var i in obj) if(obj.hasOwnProperty(i)){
		        cloned[i] = obj[i];
		      }
		      return cloned;
		    }
		    return obj;
		  }
	
		_.equals = function(now, old){
		  var type = typeof now;
		  if(type === 'number' && typeof old === 'number'&& isNaN(now) && isNaN(old)) return true
		  return now === old;
		}
	
		var dash = /-([a-z])/g;
		_.camelCase = function(str){
		  return str.replace(dash, function(all, capture){
		    return capture.toUpperCase();
		  })
		}
	
	
	
		_.throttle = function throttle(func, wait){
		  var wait = wait || 100;
		  var context, args, result;
		  var timeout = null;
		  var previous = 0;
		  var later = function() {
		    previous = +new Date;
		    timeout = null;
		    result = func.apply(context, args);
		    context = args = null;
		  };
		  return function() {
		    var now = + new Date;
		    var remaining = wait - (now - previous);
		    context = this;
		    args = arguments;
		    if (remaining <= 0 || remaining > wait) {
		      clearTimeout(timeout);
		      timeout = null;
		      previous = now;
		      result = func.apply(context, args);
		      context = args = null;
		    } else if (!timeout) {
		      timeout = setTimeout(later, remaining);
		    }
		    return result;
		  };
		};
	
		// hogan escape
		// ==============
		_.escape = (function(){
		  var rAmp = /&/g,
		      rLt = /</g,
		      rGt = />/g,
		      rApos = /\'/g,
		      rQuot = /\"/g,
		      hChars = /[&<>\"\']/;
	
		  return function(str) {
		    return hChars.test(str) ?
		      str
		        .replace(rAmp, '&amp;')
		        .replace(rLt, '&lt;')
		        .replace(rGt, '&gt;')
		        .replace(rApos, '&#39;')
		        .replace(rQuot, '&quot;') :
		      str;
		  }
		})();
	
		_.cache = function(max){
		  max = max || 1000;
		  var keys = [],
		      cache = {};
		  return {
		    set: function(key, value) {
		      if (keys.length > this.max) {
		        cache[keys.shift()] = undefined;
		      }
		      // 
		      if(cache[key] === undefined){
		        keys.push(key);
		      }
		      cache[key] = value;
		      return value;
		    },
		    get: function(key) {
		      if (key === undefined) return cache;
		      return cache[key];
		    },
		    max: max,
		    len:function(){
		      return keys.length;
		    }
		  };
		}
	
		// // setup the raw Expression
		// _.touchExpression = function(expr){
		//   if(expr.type === 'expression'){
		//   }
		//   return expr;
		// }
	
	
		// handle the same logic on component's `on-*` and element's `on-*`
		// return the fire object
		_.handleEvent = function(value, type ){
		  var self = this, evaluate;
		  if(value.type === 'expression'){ // if is expression, go evaluated way
		    evaluate = value.get;
		  }
		  if(evaluate){
		    return function fire(obj){
		      self.$update(function(){
		        var data = this.data;
		        data.$event = obj;
		        var res = evaluate(self);
		        if(res === false && obj && obj.preventDefault) obj.preventDefault();
		        data.$event = undefined;
		      })
	
		    }
		  }else{
		    return function fire(){
		      var args = slice.call(arguments)      
		      args.unshift(value);
		      self.$update(function(){
		        self.$emit.apply(self, args);
		      })
		    }
		  }
		}
	
		// only call once
		_.once = function(fn){
		  var time = 0;
		  return function(){
		    if( time++ === 0) fn.apply(this, arguments);
		  }
		}
	
		_.fixObjStr = function(str){
		  if(str.trim().indexOf('{') !== 0){
		    return '{' + str + '}';
		  }
		  return str;
		}
	
	
		_.map= function(array, callback){
		  var res = [];
		  for (var i = 0, len = array.length; i < len; i++) {
		    res.push(callback(array[i], i));
		  }
		  return res;
		}
	
		function log(msg, type){
		  if(typeof console !== "undefined")  console[type || "log"](msg);
		}
	
		_.log = log;
	
	
		_.normListener = function( events  ){
		    var eventListeners = [];
		    var pType = _.typeOf( events );
		    if( pType === 'array' ){
		      return events;
		    }else if ( pType === 'object' ){
		      for( var i in events ) if ( events.hasOwnProperty(i) ){
		        eventListeners.push({
		          type: i,
		          listener: events[i]
		        })
		      }
		    }
		    return eventListeners;
		}
	
	
		//http://www.w3.org/html/wg/drafts/html/master/single-page.html#void-elements
		_.isVoidTag = _.makePredicate("area base br col embed hr img input keygen link menuitem meta param source track wbr r-content");
		_.isBooleanAttr = _.makePredicate('selected checked disabled readonly required open autofocus controls autoplay compact loop defer multiple');
	
	
		_.isExpr = function(expr){
		  return expr && expr.type === 'expression';
		}
		// @TODO: make it more strict
		_.isGroup = function(group){
		  return group.inject || group.$inject;
		}
	
		_.getCompileFn = function(source, ctx, options){
		  return ctx.$compile.bind(ctx,source, options)
		}
	
		// remove directive param from AST
		_.fixTagAST = function( tagAST, Component ){
	
		  if( tagAST.touched ) return;
	
		  var attrs = tagAST.attrs;
	
		  if( !attrs ) return;
	
		  // Maybe multiple directive need same param, 
		  // We place all param in totalParamMap
		  var len = attrs.length;
		  if(!len) return;
		  var directives=[], otherAttrMap = {};
		  for(;len--;){
	
		    var attr = attrs[ len ];
	
	
		    // @IE fix IE9- input type can't assign after value
		    if(attr.name === 'type') attr.priority = MAX_PRIORITY+1;
	
		    var directive = Component.directive( attr.name );
		    if( directive ) {
	
		      attr.priority = directive.priority || 1;
		      attr.directive = true;
		      directives.push(attr);
	
		    }else if(attr.type === 'attribute'){
		      otherAttrMap[attr.name] = attr.value;
		    }
		  }
	
		  directives.forEach( function( attr ){
		    var directive = Component.directive(attr.name);
		    var param = directive.param;
		    if(param && param.length){
		      attr.param = {};
		      param.forEach(function( name ){
		        if( name in otherAttrMap ){
		          attr.param[name] = otherAttrMap[name] === undefined? true: otherAttrMap[name]
		          _.removeOne(attrs, function(attr){
		            return attr.name === name
		          })
		        }
		      })
		    }
		  });
	
		  attrs.sort(function(a1, a2){
		    
		    var p1 = a1.priority;
		    var p2 = a2.priority;
	
		    if( p1 == null ) p1 = MAX_PRIORITY;
		    if( p2 == null ) p2 = MAX_PRIORITY;
	
		    return p2 - p1;
	
		  })
	
		  tagAST.touched = true;
		}
	
		_.findItem = function(list, filter){
		  if(!list || !list.length) return;
		  var len = list.length;
		  while(len--){
		    if(filter(list[len])) return list[len]
		  }
		}
	
		_.getParamObj = function(component, param){
		  var paramObj = {};
		  if(param) {
		    for(var i in param) if(param.hasOwnProperty(i)){
		      var value = param[i];
		      paramObj[i] =  value && value.type==='expression'? component.$get(value): value;
		    }
		  }
		  return paramObj;
		}
	
	
	
	
	
	
		
		/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))
	
	/***/ },
	/* 6 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Regular
		var _ = __webpack_require__(5);
		var dom = __webpack_require__(4);
		var animate = __webpack_require__(22);
		var Regular = __webpack_require__(3);
		var consts = __webpack_require__(11);
		var namespaces = consts.NAMESPACE;
	
	
	
	
		__webpack_require__(23);
		__webpack_require__(24);
	
	
		module.exports = {
		// **warn**: class inteplation will override this directive 
		  'r-class': function(elem, value){
	
		    if(typeof value=== 'string'){
		      value = _.fixObjStr(value)
		    }
		    var isNotHtml = elem.namespaceURI && elem.namespaceURI !== namespaces.html ;
		    this.$watch(value, function(nvalue){
		      var className = isNotHtml? elem.getAttribute('class'): elem.className;
		      className = ' '+ (className||'').replace(/\s+/g, ' ') +' ';
		      for(var i in nvalue) if(nvalue.hasOwnProperty(i)){
		        className = className.replace(' ' + i + ' ',' ');
		        if(nvalue[i] === true){
		          className += i+' ';
		        }
		      }
		      className = className.trim();
		      if(isNotHtml){
		        dom.attr(elem, 'class', className)
		      }else{
		        elem.className = className
		      }
		    },true);
		  },
		  // **warn**: style inteplation will override this directive 
		  'r-style': function(elem, value){
		    if(typeof value=== 'string'){
		      value = _.fixObjStr(value)
		    }
		    this.$watch(value, function(nvalue){
		      for(var i in nvalue) if(nvalue.hasOwnProperty(i)){
		        dom.css(elem, i, nvalue[i]);
		      }
		    },true);
		  },
		  // when expression is evaluate to true, the elem will add display:none
		  // Example: <div r-hide={{items.length > 0}}></div>
		  'r-hide': function(elem, value){
		    var preBool = null, compelete;
		    if( _.isExpr(value) || typeof value === "string"){
		      this.$watch(value, function(nvalue){
		        var bool = !!nvalue;
		        if(bool === preBool) return; 
		        preBool = bool;
		        if(bool){
		          if(elem.onleave){
		            compelete = elem.onleave(function(){
		              elem.style.display = "none"
		              compelete = null;
		            })
		          }else{
		            elem.style.display = "none"
		          }
		          
		        }else{
		          if(compelete) compelete();
		          elem.style.display = "";
		          if(elem.onenter){
		            elem.onenter();
		          }
		        }
		      });
		    }else if(!!value){
		      elem.style.display = "none";
		    }
		  },
		  'r-html': function(elem, value){
		    this.$watch(value, function(nvalue){
		      nvalue = nvalue || "";
		      dom.html(elem, nvalue)
		    }, {force: true});
		  },
		  'ref': {
		    accept: consts.COMPONENT_TYPE + consts.ELEMENT_TYPE,
		    link: function( elem, value ){
		      var refs = this.$refs || (this.$refs = {});
		      var cval;
		      if(_.isExpr(value)){
		        this.$watch(value, function(nval, oval){
		          cval = nval;
		          if(refs[oval] === elem) refs[oval] = null;
		          if(cval) refs[cval] = elem;
		        })
		      }else{
		        refs[cval = value] = elem;
		      }
		      return function(){
		        refs[cval] = null;
		      }
		    }
		  }
		}
	
		Regular.directive(module.exports);
	
	
	
	
	
	
	
	
	
	
	
	
	/***/ },
	/* 7 */
	/***/ function(module, exports, __webpack_require__) {
	
		var // packages
		  _ = __webpack_require__(5),
		 animate = __webpack_require__(22),
		 dom = __webpack_require__(4),
		 Regular = __webpack_require__(3);
	
	
		var // variables
		  rClassName = /^[-\w]+(\s[-\w]+)*$/,
		  rCommaSep = /[\r\n\f ]*,[\r\n\f ]*(?=\w+\:)/, //  dont split comma in  Expression
		  rStyles = /^\{.*\}$/, //  for Simpilfy
		  rSpace = /\s+/, //  for Simpilfy
		  WHEN_COMMAND = "when",
		  EVENT_COMMAND = "on",
		  THEN_COMMAND = "then";
	
		/**
		 * Animation Plugin
		 * @param {Component} Component 
		 */
	
	
		function createSeed(type){
	
		  var steps = [], current = 0, callback = _.noop;
		  var key;
	
		  var out = {
		    type: type,
		    start: function(cb){
		      key = _.uid();
		      if(typeof cb === "function") callback = cb;
		      if(current> 0 ){
		        current = 0 ;
		      }else{
		        out.step();
		      }
		      return out.compelete;
		    },
		    compelete: function(){
		      key = null;
		      callback && callback();
		      callback = _.noop;
		      current = 0;
		    },
		    step: function(){
		      if(steps[current]) steps[current ]( out.done.bind(out, key) );
		    },
		    done: function(pkey){
		      if(pkey !== key) return; // means the loop is down
		      if( current < steps.length - 1 ) {
		        current++;
		        out.step();
		      }else{
		        out.compelete();
		      }
		    },
		    push: function(step){
		      steps.push(step)
		    }
		  }
	
		  return out;
		}
	
		Regular._addProtoInheritCache("animation")
	
	
		// builtin animation
		Regular.animation({
		  "wait": function( step ){
		    var timeout = parseInt( step.param ) || 0
		    return function(done){
		      // _.log("delay " + timeout)
		      setTimeout( done, timeout );
		    }
		  },
		  "class": function(step){
		    var tmp = step.param.split(","),
		      className = tmp[0] || "",
		      mode = parseInt(tmp[1]) || 1;
	
		    return function(done){
		      // _.log(className)
		      animate.startClassAnimate( step.element, className , done, mode );
		    }
		  },
		  "call": function(step){
		    var fn = this.$expression(step.param).get, self = this;
		    return function(done){
		      // _.log(step.param, 'call')
		      fn(self);
		      self.$update();
		      done()
		    }
		  },
		  "emit": function(step){
		    var param = step.param;
		    var tmp = param.split(","),
		      evt = tmp[0] || "",
		      args = tmp[1]? this.$expression(tmp[1]).get: null;
	
		    if(!evt) throw Error("you shoud specified a eventname in emit command");
	
		    var self = this;
		    return function(done){
		      self.$emit(evt, args? args(self) : undefined);
		      done();
		    }
		  },
		  // style: left {10}px,
		  style: function(step){
		    var styles = {}, 
		      param = step.param,
		      pairs = param.split(","), valid;
		    pairs.forEach(function(pair){
		      pair = pair.trim();
		      if(pair){
		        var tmp = pair.split( rSpace ),
		          name = tmp.shift(),
		          value = tmp.join(" ");
	
		        if( !name || !value ) throw Error("invalid style in command: style");
		        styles[name] = value;
		        valid = true;
		      }
		    })
	
		    return function(done){
		      if(valid){
		        animate.startStyleAnimate(step.element, styles, done);
		      }else{
		        done();
		      }
		    }
		  }
		})
	
	
	
		// hancdle the r-animation directive
		// el : the element to process
		// value: the directive value
		function processAnimate( element, value ){
		  var Component = this.constructor;
	
		  if(_.isExpr(value)){
		    value = value.get(this);
		  }
	
		  value = value.trim();
	
		  var composites = value.split(";"), 
		    composite, context = this, seeds = [], seed, destroies = [], destroy,
		    command, param , current = 0, tmp, animator, self = this;
	
		  function reset( type ){
		    seed && seeds.push( seed )
		    seed = createSeed( type );
		  }
	
		  function whenCallback(start, value){
		    if( !!value ) start()
		  }
	
		  function animationDestroy(element){
		    return function(){
		      element.onenter = null;
		      element.onleave = null;
		    } 
		  }
	
		  for( var i = 0, len = composites.length; i < len; i++ ){
	
		    composite = composites[i];
		    tmp = composite.split(":");
		    command = tmp[0] && tmp[0].trim();
		    param = tmp[1] && tmp[1].trim();
	
		    if( !command ) continue;
	
		    if( command === WHEN_COMMAND ){
		      reset("when");
		      this.$watch(param, whenCallback.bind( this, seed.start ) );
		      continue;
		    }
	
		    if( command === EVENT_COMMAND){
		      reset(param);
		      if( param === "leave" ){
		        element.onleave = seed.start;
		        destroies.push( animationDestroy(element) );
		      }else if( param === "enter" ){
		        element.onenter = seed.start;
		        destroies.push( animationDestroy(element) );
		      }else{
		        if( ("on" + param) in element){ // if dom have the event , we use dom event
		          destroies.push(this._handleEvent( element, param, seed.start ));
		        }else{ // otherwise, we use component event
		          this.$on(param, seed.start);
		          destroies.push(this.$off.bind(this, param, seed.start));
		        }
		      }
		      continue;
		    }
	
		    var animator =  Component.animation(command) 
		    if( animator && seed ){
		      seed.push(
		        animator.call(this,{
		          element: element,
		          done: seed.done,
		          param: param 
		        })
		      )
		    }else{
		      throw Error( animator? "you should start with `on` or `event` in animation" : ("undefined animator 【" + command +"】" ));
		    }
		  }
	
		  if(destroies.length){
		    return function(){
		      destroies.forEach(function(destroy){
		        destroy();
		      })
		    }
		  }
		}
	
	
		Regular.directive( "r-animation", processAnimate)
		Regular.directive( "r-anim", processAnimate)
	
	
	
	/***/ },
	/* 8 */
	/***/ function(module, exports, __webpack_require__) {
	
		var Regular = __webpack_require__(3);
	
		/**
		 * Timeout Module
		 * @param {Component} Component 
		 */
		function TimeoutModule(Component){
	
		  Component.implement({
		    /**
		     * just like setTimeout, but will enter digest automately
		     * @param  {Function} fn    
		     * @param  {Number}   delay 
		     * @return {Number}   timeoutid
		     */
		    $timeout: function(fn, delay){
		      delay = delay || 0;
		      return setTimeout(function(){
		        fn.call(this);
		        this.$update(); //enter digest
		      }.bind(this), delay);
		    },
		    /**
		     * just like setInterval, but will enter digest automately
		     * @param  {Function} fn    
		     * @param  {Number}   interval 
		     * @return {Number}   intervalid
		     */
		    $interval: function(fn, interval){
		      interval = interval || 1000/60;
		      return setInterval(function(){
		        fn.call(this);
		        this.$update(); //enter digest
		      }.bind(this), interval);
		    }
		  });
		}
	
	
		Regular.plugin('timeout', TimeoutModule);
		Regular.plugin('$timeout', TimeoutModule);
	
	/***/ },
	/* 9 */
	/***/ function(module, exports, __webpack_require__) {
	
		var diffArray = __webpack_require__(25).diffArray;
		var combine = __webpack_require__(15);
		var animate = __webpack_require__(22);
		var node = __webpack_require__(26);
		var Group = __webpack_require__(10);
		var dom = __webpack_require__(4);
		var _ = __webpack_require__(5);
	
	
		var walkers = module.exports = {};
	
		walkers.list = function(ast, options){
	
		  var Regular = walkers.Regular;  
		  var placeholder = document.createComment("Regular list"),
		    namespace = options.namespace,
		    extra = options.extra;
		  var self = this;
		  var group = new Group([placeholder]);
		  var indexName = ast.variable + '_index';
		  var keyName = ast.variable + '_key';
		  var variable = ast.variable;
		  var alternate = ast.alternate;
		  var track = ast.track, keyOf, extraObj;
	
		  if( track && track !== true ){
		    track = this._touchExpr(track);
		    extraObj = _.createObject(extra);
		    keyOf = function( item, index ){
		      extraObj[ variable ] = item;
		      extraObj[ indexName ] = index;
		      // @FIX keyName
		      return track.get( self, extraObj );
		    }
		  }
	
		  function removeRange(index, rlen){
		    for(var j = 0; j< rlen; j++){ //removed
		      var removed = group.children.splice( index + 1, 1)[0];
		      if(removed) removed.destroy(true);
		    }
		  }
	
		  function addRange(index, end, newList, rawNewValue){
		    for(var o = index; o < end; o++){ //add
		      // prototype inherit
		      var item = newList[o];
		      var data = {};
		      updateTarget(data, o, item, rawNewValue);
	
		      data = _.createObject(extra, data);
		      var section = self.$compile(ast.body, {
		        extra: data,
		        namespace:namespace,
		        record: true,
		        outer: options.outer
		      })
		      section.data = data;
		      // autolink
		      var insert =  combine.last(group.get(o));
		      if(insert.parentNode){
		        animate.inject(combine.node(section),insert, 'after');
		      }
		      // insert.parentNode.insertBefore(combine.node(section), insert.nextSibling);
		      group.children.splice( o + 1 , 0, section);
		    }
		  }
	
		  function updateTarget(target, index, item, rawNewValue){
	
		      target[ indexName ] = index;
		      if( rawNewValue ){
		        target[ keyName ] = item;
		        target[ variable ] = rawNewValue[ item ];
		      }else{
		        target[ variable ] = item;
		        target[keyName] = null
		      }
		  }
	
	
		  function updateRange(start, end, newList, rawNewValue){
		    for(var k = start; k < end; k++){ // no change
		      var sect = group.get( k + 1 ), item = newList[ k ];
		      updateTarget(sect.data, k, item, rawNewValue);
		    }
		  }
	
		  function updateLD(newList, oldList, splices , rawNewValue ){
	
		    var cur = placeholder;
		    var m = 0, len = newList.length;
	
		    if(!splices && (len !==0 || oldList.length !==0)  ){
		      splices = diffArray(newList, oldList, true);
		    }
	
		    if(!splices || !splices.length) return;
		      
		    for(var i = 0; i < splices.length; i++){ //init
		      var splice = splices[i];
		      var index = splice.index; // beacuse we use a comment for placeholder
		      var removed = splice.removed;
		      var add = splice.add;
		      var rlen = removed.length;
		      // for track
		      if( track && rlen && add ){
		        var minar = Math.min(rlen, add);
		        var tIndex = 0;
		        while(tIndex < minar){
		          if( keyOf(newList[index], index) !== keyOf( removed[0], index ) ){
		            removeRange(index, 1)
		            addRange(index, index+1, newList, rawNewValue)
		          }
		          removed.shift();
		          add--;
		          index++;
		          tIndex++;
		        }
		        rlen = removed.length;
		      }
		      // update
		      updateRange(m, index, newList, rawNewValue);
	
		      removeRange( index ,rlen)
	
		      addRange(index, index+add, newList, rawNewValue)
	
		      m = index + add - rlen;
		      m  = m < 0? 0 : m;
	
		    }
		    if(m < len){
		      for(var i = m; i < len; i++){
		        var pair = group.get(i + 1);
		        pair.data[indexName] = i;
		        // @TODO fix keys
		      }
		    }
		  }
	
		  // if the track is constant test.
		  function updateSimple(newList, oldList, rawNewValue ){
	
		    var nlen = newList.length;
		    var olen = oldList.length;
		    var mlen = Math.min(nlen, olen);
	
		    updateRange(0, mlen, newList, rawNewValue)
		    if(nlen < olen){ //need add
		      removeRange(nlen, olen-nlen);
		    }else if(nlen > olen){
		      addRange(olen, nlen, newList, rawNewValue);
		    }
		  }
	
		  function update(newValue, oldValue, splices){
	
		    var nType = _.typeOf( newValue );
		    var oType = _.typeOf( oldValue );
	
		    var newList = getListFromValue( newValue, nType );
		    var oldList = getListFromValue( oldValue, oType );
	
		    var rawNewValue;
	
	
		    var nlen = newList && newList.length;
		    var olen = oldList && oldList.length;
	
		    // if previous list has , we need to remove the altnated section.
		    if( !olen && nlen && group.get(1) ){
		      var altGroup = group.children.pop();
		      if(altGroup.destroy)  altGroup.destroy(true);
		    }
	
		    if( nType === 'object' ) rawNewValue = newValue;
	
		    if(track === true){
		      updateSimple( newList, oldList,  rawNewValue );
		    }else{
		      updateLD( newList, oldList, splices, rawNewValue );
		    }
	
		    // @ {#list} {#else}
		    if( !nlen && alternate && alternate.length){
		      var section = self.$compile(alternate, {
		        extra: extra,
		        record: true,
		        outer: options.outer,
		        namespace: namespace
		      })
		      group.children.push(section);
		      if(placeholder.parentNode){
		        animate.inject(combine.node(section), placeholder, 'after');
		      }
		    }
		  }
	
		  this.$watch(ast.sequence, update, { 
		    init: true, 
		    diff: track !== true ,
		    deep: true
		  });
		  return group;
		}
	
	
		function updateItem(){
		  
		}
	
	
		// {#include } or {#inc template}
		walkers.template = function(ast, options){
		  var content = ast.content, compiled;
		  var placeholder = document.createComment('inlcude');
		  var compiled, namespace = options.namespace, extra = options.extra;
		  var group = new Group([placeholder]);
		  if(content){
		    var self = this;
		    this.$watch(content, function(value){
		      var removed = group.get(1), type= typeof value;
		      if( removed){
		        removed.destroy(true); 
		        group.children.pop();
		      }
		      if(!value) return;
	
		      group.push( compiled = type === 'function' ? value(): self.$compile( type !== 'object'? String(value): value, {
		        record: true, 
		        outer: options.outer,
		        namespace: namespace, 
		        extra: extra}) ); 
		      if(placeholder.parentNode) {
		        compiled.$inject(placeholder, 'before')
		      }
		    }, {
		      init: true
		    });
		  }
		  return group;
		};
	
		function getListFromValue(value, type){
		  return type === 'object'? _.keys(value): (
		      type === 'array'? value: []
		    )
		}
	
	
		// how to resolve this problem
		var ii = 0;
		walkers['if'] = function(ast, options){
		  var self = this, consequent, alternate, extra = options.extra;
		  if(options && options.element){ // attribute inteplation
		    var update = function(nvalue){
		      if(!!nvalue){
		        if(alternate) combine.destroy(alternate)
		        if(ast.consequent) consequent = self.$compile(ast.consequent, {record: true, element: options.element , extra:extra});
		      }else{
		        if(consequent) combine.destroy(consequent)
		        if(ast.alternate) alternate = self.$compile(ast.alternate, {record: true, element: options.element, extra: extra});
		      }
		    }
		    this.$watch(ast.test, update, { force: true });
		    return {
		      destroy: function(){
		        if(consequent) combine.destroy(consequent);
		        else if(alternate) combine.destroy(alternate);
		      }
		    }
		  }
	
		  var test, consequent, alternate, node;
		  var placeholder = document.createComment("Regular if" + ii++);
		  var group = new Group();
		  group.push(placeholder);
		  var preValue = null, namespace= options.namespace;
	
	
		  var update = function (nvalue, old){
		    var value = !!nvalue;
		    if(value === preValue) return;
		    preValue = value;
		    if(group.children[1]){
		      group.children[1].destroy(true);
		      group.children.pop();
		    }
		    if(value){ //true
		      if(ast.consequent && ast.consequent.length){
		        consequent = self.$compile( ast.consequent , {record:true, outer: options.outer,namespace: namespace, extra:extra })
		        // placeholder.parentNode && placeholder.parentNode.insertBefore( node, placeholder );
		        group.push(consequent);
		        if(placeholder.parentNode){
		          animate.inject(combine.node(consequent), placeholder, 'before');
		        }
		      }
		    }else{ //false
		      if(ast.alternate && ast.alternate.length){
		        alternate = self.$compile(ast.alternate, {record:true, outer: options.outer,namespace: namespace, extra:extra});
		        group.push(alternate);
		        if(placeholder.parentNode){
		          animate.inject(combine.node(alternate), placeholder, 'before');
		        }
		      }
		    }
		  }
		  this.$watch(ast.test, update, {force: true, init: true});
	
		  return group;
		}
	
	
		walkers.expression = function(ast, options){
		  var node = document.createTextNode("");
		  this.$watch(ast, function(newval){
		    dom.text(node, "" + (newval == null? "": "" + newval) );
		  },{init: true})
		  return node;
		}
		walkers.text = function(ast, options){
		  var node = document.createTextNode(_.convertEntity(ast.text));
		  return node;
		}
	
	
	
		var eventReg = /^on-(.+)$/
	
		/**
		 * walkers element (contains component)
		 */
		walkers.element = function(ast, options){
		  var attrs = ast.attrs, self = this,
		    Constructor = this.constructor,
		    children = ast.children,
		    namespace = options.namespace, 
		    extra = options.extra,
		    tag = ast.tag,
		    Component = Constructor.component(tag),
		    ref, group, element;
	
		  if( tag === 'r-content' ){
		    _.log('r-content is deprecated, use {#inc this.$body} instead (`{#include}` as same)', 'warn');
		    return this.$body && this.$body();
		  } 
	
		  if(Component || tag === 'r-component'){
		    options.Component = Component;
		    return walkers.component.call(this, ast, options)
		  }
	
		  if(tag === 'svg') namespace = "svg";
		  // @Deprecated: may be removed in next version, use {#inc } instead
		  
		  if( children && children.length ){
		    group = this.$compile(children, {outer: options.outer,namespace: namespace, extra: extra });
		  }
	
		  element = dom.create(tag, namespace, attrs);
	
		  if(group && !_.isVoidTag(tag)){
		    dom.inject( combine.node(group) , element)
		  }
	
		  // fix tag ast, some infomation only avaliable at runtime (directive etc..)
		  _.fixTagAST(ast, Constructor)
	
		  var destroies = walkAttributes.call(this, attrs, element, extra);
	
		  return {
		    type: "element",
		    group: group,
		    node: function(){
		      return element;
		    },
		    last: function(){
		      return element;
		    },
		    destroy: function(first){
		      if( first ){
		        animate.remove( element, group? group.destroy.bind( group ): _.noop );
		      }else if(group) {
		        group.destroy();
		      }
		      // destroy ref
		      if( destroies.length ) {
		        destroies.forEach(function( destroy ){
		          if( destroy ){
		            if( typeof destroy.destroy === 'function' ){
		              destroy.destroy()
		            }else{
		              destroy();
		            }
		          }
		        })
		      }
		    }
		  }
		}
	
		walkers.component = function(ast, options){
		  var attrs = ast.attrs, 
		    Component = options.Component,
		    Constructor = this.constructor,
		    isolate, 
		    extra = options.extra,
		    namespace = options.namespace,
		    ref, self = this, is;
	
		  var data = {}, events;
	
		  for(var i = 0, len = attrs.length; i < len; i++){
		    var attr = attrs[i];
		    // consider disabled   equlasto  disabled={true}
		    var value = this._touchExpr(attr.value === undefined? true: attr.value);
		    if(value.constant) value = attr.value = value.get(this);
		    if(attr.value && attr.value.constant === true){
		      value = value.get(this);
		    }
		    var name = attr.name;
		    if(!attr.event){
		      var etest = name.match(eventReg);
		      // event: 'nav'
		      if(etest) attr.event = etest[1];
		    }
	
		    // @compile modifier
		    if(attr.mdf === 'cmpl'){
		      value = _.getCompileFn(value, this, {
		        record: true, 
		        namespace:namespace, 
		        extra: extra, 
		        outer: options.outer
		      })
		    }
		    
		    // @if is r-component . we need to find the target Component
		    if(name === 'is' && !Component){
		      is = value;
		      var componentName = this.$get(value, true);
		      Component = Constructor.component(componentName)
		      if(typeof Component !== 'function') throw new Error("component " + componentName + " has not registed!");
		    }
		    // bind event proxy
		    var eventName;
		    if(eventName = attr.event){
		      events = events || {};
		      events[eventName] = _.handleEvent.call(this, value, eventName);
		      continue;
		    }else {
		      name = attr.name = _.camelCase(name);
		    }
	
		    if(!value || value.type !== 'expression'){
		      data[name] = value;
		    }else{
		      data[name] = value.get(self); 
		    }
		    if( name === 'ref'  && value != null){
		      ref = value
		    }
		    if( name === 'isolate'){
		      // 1: stop: composite -> parent
		      // 2. stop: composite <- parent
		      // 3. stop 1 and 2: composite <-> parent
		      // 0. stop nothing (defualt)
		      isolate = value.type === 'expression'? value.get(self): parseInt(value === true? 3: value, 10);
		      data.isolate = isolate;
		    }
		  }
	
		  var definition = { 
		    data: data, 
		    events: events, 
		    $parent: (isolate & 2)? null: this,
		    $root: this.$root,
		    $outer: options.outer,
		    _body: {
		      ctx: this,
		      ast: ast.children
		    }
		  }
		  var options = {
		    namespace: namespace, 
		    extra: options.extra
		  }
	
	
		  var component = new Component(definition, options), reflink;
	
	
		  if(ref && this.$refs){
		    reflink = Component.directive('ref').link
		    this.$on('$destroy', reflink.call(this, component, ref) )
		  }
		  if(ref &&  self.$refs) self.$refs[ref] = component;
		  for(var i = 0, len = attrs.length; i < len; i++){
		    var attr = attrs[i];
		    var value = attr.value||true;
		    var name = attr.name;
		    // need compiled
		    if(value.type === 'expression' && !attr.event){
		      value = self._touchExpr(value);
		      // use bit operate to control scope
		      if( !(isolate & 2) ) 
		        this.$watch(value, (function(name, val){
		          this.data[name] = val;
		        }).bind(component, name), { sync: true })
		      if( value.set && !(isolate & 1 ) ) 
		        // sync the data. it force the component don't trigger attr.name's first dirty echeck
		        component.$watch(name, self.$update.bind(self, value), { init: true });
		    }
		  }
		  if(is && is.type === 'expression'  ){
		    var group = new Group();
		    group.push(component);
		    this.$watch(is, function(value){
		      // found the new component
		      var Component = Constructor.component(value);
		      if(!Component) throw new Error("component " + value + " has not registed!");
		      var ncomponent = new Component(definition);
		      var component = group.children.pop();
		      group.push(ncomponent);
		      ncomponent.$inject(combine.last(component), 'after')
		      component.destroy();
		      // @TODO  if component changed , we need update ref
		      if(ref){
		        self.$refs[ref] = ncomponent;
		      }
		    }, {sync: true})
		    return group;
		  }
		  return component;
		}
	
		function walkAttributes(attrs, element, extra){
		  var bindings = []
		  for(var i = 0, len = attrs.length; i < len; i++){
		    var binding = this._walk(attrs[i], {element: element, fromElement: true, attrs: attrs, extra: extra})
		    if(binding) bindings.push(binding);
		  }
		  return bindings;
		}
	
		walkers.attribute = function(ast ,options){
	
		  var attr = ast;
		  var name = attr.name;
		  var value = attr.value || "";
		  var constant = value.constant;
		  var Component = this.constructor;
		  var directive = Component.directive(name);
		  var element = options.element;
		  var self = this;
	
	
		  value = this._touchExpr(value);
	
		  if(constant) value = value.get(this);
	
		  if(directive && directive.link){
		    var extra = {
		      attrs: options.attrs,
		      param: _.getParamObj(this, attr.param) 
		    }
		    var binding = directive.link.call(self, element, value, name, extra);
		    // if update has been passed in , we will  automately watch value for user
		    if( typeof directive.update === 'function'){
		      if(_.isExpr(value)){
		        this.$watch(value, function(val, old){
		          directive.update.call(self, element, val, old, extra); 
		        })
		      }else{
		        directive.update.call(self, element, value, undefined, extra );
		      }
		    }
		    if(typeof binding === 'function') binding = {destroy: binding}; 
		    return binding;
		  } else{
		    if(value.type === 'expression' ){
		      this.$watch(value, function(nvalue, old){
		        dom.attr(element, name, nvalue);
		      }, {init: true});
		    }else{
		      if(_.isBooleanAttr(name)){
		        dom.attr(element, name, true);
		      }else{
		        dom.attr(element, name, value);
		      }
		    }
		    if(!options.fromElement){
		      return {
		        destroy: function(){
		          dom.attr(element, name, null);
		        }
		      }
		    }
		  }
	
		}
	
	
	
	
	/***/ },
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
		var combine = __webpack_require__(15)
	
		function Group(list){
		  this.children = list || [];
		}
	
	
		var o = _.extend(Group.prototype, {
		  destroy: function(first){
		    combine.destroy(this.children, first);
		    if(this.ondestroy) this.ondestroy();
		    this.children = null;
		  },
		  get: function(i){
		    return this.children[i]
		  },
		  push: function(item){
		    this.children.push( item );
		  }
		})
		o.inject = o.$inject = combine.inject
	
	
	
		module.exports = Group;
	
	
	
	
	/***/ },
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = {
		  'COMPONENT_TYPE': 1,
		  'ELEMENT_TYPE': 2,
		  'NAMESPACE': {
		    html: "http://www.w3.org/1999/xhtml",
		    svg: "http://www.w3.org/2000/svg"
		  }
		}
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
		var config = __webpack_require__(2);
	
		// some custom tag  will conflict with the Lexer progress
		var conflictTag = {"}": "{", "]": "["}, map1, map2;
		// some macro for lexer
		var macro = {
		  'NAME': /(?:[:_A-Za-z][-\.:_0-9A-Za-z]*)/,
		  'IDENT': /[\$_A-Za-z][_0-9A-Za-z\$]*/,
		  'SPACE': /[\r\n\t\f ]/
		}
	
	
		var test = /a|(b)/.exec("a");
		var testSubCapure = test && test[1] === undefined? 
		  function(str){ return str !== undefined }
		  :function(str){return !!str};
	
		function wrapHander(handler){
		  return function(all){
		    return {type: handler, value: all }
		  }
		}
	
		function Lexer(input, opts){
		  if(conflictTag[config.END]){
		    this.markStart = conflictTag[config.END];
		    this.markEnd = config.END;
		  }
	
		  this.input = (input||"").trim();
		  this.opts = opts || {};
		  this.map = this.opts.mode !== 2?  map1: map2;
		  this.states = ["INIT"];
		  if(opts && opts.expression){
		     this.states.push("JST");
		     this.expression = true;
		  }
		}
	
		var lo = Lexer.prototype
	
	
		lo.lex = function(str){
		  str = (str || this.input).trim();
		  var tokens = [], split, test,mlen, token, state;
		  this.input = str, 
		  this.marks = 0;
		  // init the pos index
		  this.index=0;
		  var i = 0;
		  while(str){
		    i++
		    state = this.state();
		    split = this.map[state] 
		    test = split.TRUNK.exec(str);
		    if(!test){
		      this.error('Unrecoginized Token');
		    }
		    mlen = test[0].length;
		    str = str.slice(mlen)
		    token = this._process.call(this, test, split, str)
		    if(token) tokens.push(token)
		    this.index += mlen;
		    // if(state == 'TAG' || state == 'JST') str = this.skipspace(str);
		  }
	
		  tokens.push({type: 'EOF'});
	
		  return tokens;
		}
	
		lo.error = function(msg){
		  throw  Error("Parse Error: " + msg +  ':\n' + _.trackErrorPos(this.input, this.index));
		}
	
		lo._process = function(args, split,str){
		  // console.log(args.join(","), this.state())
		  var links = split.links, marched = false, token;
	
		  for(var len = links.length, i=0;i<len ;i++){
		    var link = links[i],
		      handler = link[2],
		      index = link[0];
		    // if(args[6] === '>' && index === 6) console.log('haha')
		    if(testSubCapure(args[index])) {
		      marched = true;
		      if(handler){
		        token = handler.apply(this, args.slice(index, index + link[1]))
		        if(token)  token.pos = this.index;
		      }
		      break;
		    }
		  }
		  if(!marched){ // in ie lt8 . sub capture is "" but ont 
		    switch(str.charAt(0)){
		      case "<":
		        this.enter("TAG");
		        break;
		      default:
		        this.enter("JST");
		        break;
		    }
		  }
		  return token;
		}
		lo.enter = function(state){
		  this.states.push(state)
		  return this;
		}
	
		lo.state = function(){
		  var states = this.states;
		  return states[states.length-1];
		}
	
		lo.leave = function(state){
		  var states = this.states;
		  if(!state || states[states.length-1] === state) states.pop()
		}
	
	
		Lexer.setup = function(){
		  macro.END = config.END;
		  macro.BEGIN = config.BEGIN;
		  //
		  map1 = genMap([
		    // INIT
		    rules.ENTER_JST,
		    rules.ENTER_TAG,
		    rules.TEXT,
	
		    //TAG
		    rules.TAG_NAME,
		    rules.TAG_OPEN,
		    rules.TAG_CLOSE,
		    rules.TAG_PUNCHOR,
		    rules.TAG_ENTER_JST,
		    rules.TAG_UNQ_VALUE,
		    rules.TAG_STRING,
		    rules.TAG_SPACE,
		    rules.TAG_COMMENT,
	
		    // JST
		    rules.JST_OPEN,
		    rules.JST_CLOSE,
		    rules.JST_COMMENT,
		    rules.JST_EXPR_OPEN,
		    rules.JST_IDENT,
		    rules.JST_SPACE,
		    rules.JST_LEAVE,
		    rules.JST_NUMBER,
		    rules.JST_PUNCHOR,
		    rules.JST_STRING,
		    rules.JST_COMMENT
		    ])
	
		  // ignored the tag-relative token
		  map2 = genMap([
		    // INIT no < restrict
		    rules.ENTER_JST2,
		    rules.TEXT,
		    // JST
		    rules.JST_COMMENT,
		    rules.JST_OPEN,
		    rules.JST_CLOSE,
		    rules.JST_EXPR_OPEN,
		    rules.JST_IDENT,
		    rules.JST_SPACE,
		    rules.JST_LEAVE,
		    rules.JST_NUMBER,
		    rules.JST_PUNCHOR,
		    rules.JST_STRING,
		    rules.JST_COMMENT
		    ])
		}
	
	
		function genMap(rules){
		  var rule, map = {}, sign;
		  for(var i = 0, len = rules.length; i < len ; i++){
		    rule = rules[i];
		    sign = rule[2] || 'INIT';
		    ( map[sign] || (map[sign] = {rules:[], links:[]}) ).rules.push(rule);
		  }
		  return setup(map);
		}
	
		function setup(map){
		  var split, rules, trunks, handler, reg, retain, rule;
		  function replaceFn(all, one){
		    return typeof macro[one] === 'string'? 
		      _.escapeRegExp(macro[one]) 
		      : String(macro[one]).slice(1,-1);
		  }
	
		  for(var i in map){
	
		    split = map[i];
		    split.curIndex = 1;
		    rules = split.rules;
		    trunks = [];
	
		    for(var j = 0,len = rules.length; j<len; j++){
		      rule = rules[j]; 
		      reg = rule[0];
		      handler = rule[1];
	
		      if(typeof handler === 'string'){
		        handler = wrapHander(handler);
		      }
		      if(_.typeOf(reg) === 'regexp') reg = reg.toString().slice(1, -1);
	
		      reg = reg.replace(/\{(\w+)\}/g, replaceFn)
		      retain = _.findSubCapture(reg) + 1; 
		      split.links.push([split.curIndex, retain, handler]); 
		      split.curIndex += retain;
		      trunks.push(reg);
		    }
		    split.TRUNK = new RegExp("^(?:(" + trunks.join(")|(") + "))")
		  }
		  return map;
		}
	
		var rules = {
	
		  // 1. INIT
		  // ---------------
	
		  // mode1's JST ENTER RULE
		  ENTER_JST: [/[^\x00<]*?(?={BEGIN})/, function(all){
		    this.enter('JST');
		    if(all) return {type: 'TEXT', value: all}
		  }],
	
		  // mode2's JST ENTER RULE
		  ENTER_JST2: [/[^\x00]*?(?={BEGIN})/, function(all){
		    this.enter('JST');
		    if(all) return {type: 'TEXT', value: all}
		  }],
	
		  ENTER_TAG: [/[^\x00]*?(?=<[\w\/\!])/, function(all){ 
		    this.enter('TAG');
		    if(all) return {type: 'TEXT', value: all}
		  }],
	
		  TEXT: [/[^\x00]+/, 'TEXT' ],
	
		  // 2. TAG
		  // --------------------
		  TAG_NAME: [/{NAME}/, 'NAME', 'TAG'],
		  TAG_UNQ_VALUE: [/[^\{}&"'=><`\r\n\f\t ]+/, 'UNQ', 'TAG'],
	
		  TAG_OPEN: [/<({NAME})\s*/, function(all, one){ //"
		    return {type: 'TAG_OPEN', value: one}
		  }, 'TAG'],
		  TAG_CLOSE: [/<\/({NAME})[\r\n\f\t ]*>/, function(all, one){
		    this.leave();
		    return {type: 'TAG_CLOSE', value: one }
		  }, 'TAG'],
	
		    // mode2's JST ENTER RULE
		  TAG_ENTER_JST: [/(?={BEGIN})/, function(){
		    this.enter('JST');
		  }, 'TAG'],
	
	
		  TAG_PUNCHOR: [/[\>\/=&]/, function(all){
		    if(all === '>') this.leave();
		    return {type: all, value: all }
		  }, 'TAG'],
		  TAG_STRING:  [ /'([^']*)'|"([^"]*)\"/, /*'*/  function(all, one, two){ 
		    var value = one || two || "";
	
		    return {type: 'STRING', value: value}
		  }, 'TAG'],
	
		  TAG_SPACE: [/{SPACE}+/, null, 'TAG'],
		  TAG_COMMENT: [/<\!--([^\x00]*?)--\>/, function(all){
		    this.leave()
		    // this.leave('TAG')
		  } ,'TAG'],
	
		  // 3. JST
		  // -------------------
	
		  JST_OPEN: ['{BEGIN}#{SPACE}*({IDENT})', function(all, name){
		    return {
		      type: 'OPEN',
		      value: name
		    }
		  }, 'JST'],
		  JST_LEAVE: [/{END}/, function(all){
		    if(this.markEnd === all && this.expression) return {type: this.markEnd, value: this.markEnd};
		    if(!this.markEnd || !this.marks ){
		      this.firstEnterStart = false;
		      this.leave('JST');
		      return {type: 'END'}
		    }else{
		      this.marks--;
		      return {type: this.markEnd, value: this.markEnd}
		    }
		  }, 'JST'],
		  JST_CLOSE: [/{BEGIN}\s*\/({IDENT})\s*{END}/, function(all, one){
		    this.leave('JST');
		    return {
		      type: 'CLOSE',
		      value: one
		    }
		  }, 'JST'],
		  JST_COMMENT: [/{BEGIN}\!([^\x00]*?)\!{END}/, function(){
		    this.leave();
		  }, 'JST'],
		  JST_EXPR_OPEN: ['{BEGIN}',function(all, one){
		    if(all === this.markStart){
		      if(this.expression) return { type: this.markStart, value: this.markStart };
		      if(this.firstEnterStart || this.marks){
		        this.marks++
		        this.firstEnterStart = false;
		        return { type: this.markStart, value: this.markStart };
		      }else{
		        this.firstEnterStart = true;
		      }
		    }
		    return {
		      type: 'EXPR_OPEN',
		      escape: false
		    }
	
		  }, 'JST'],
		  JST_IDENT: ['{IDENT}', 'IDENT', 'JST'],
		  JST_SPACE: [/[ \r\n\f]+/, null, 'JST'],
		  JST_PUNCHOR: [/[=!]?==|[-=><+*\/%\!]?\=|\|\||&&|\@\(|\.\.|[<\>\[\]\(\)\-\|\{}\+\*\/%?:\.!,]/, function(all){
		    return { type: all, value: all }
		  },'JST'],
	
		  JST_STRING:  [ /'([^']*)'|"([^"]*)"/, function(all, one, two){ //"'
		    return {type: 'STRING', value: one || two || ""}
		  }, 'JST'],
		  JST_NUMBER: [/(?:[0-9]*\.[0-9]+|[0-9]+)(e\d+)?/, function(all){
		    return {type: 'NUMBER', value: parseFloat(all, 10)};
		  }, 'JST']
		}
	
	
		// setup when first config
		Lexer.setup();
	
	
	
		module.exports = Lexer;
	
	
	/***/ },
	/* 13 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
	
		var config = __webpack_require__(2);
		var node = __webpack_require__(26);
		var Lexer = __webpack_require__(12);
		var varName = _.varName;
		var ctxName = _.ctxName;
		var extName = _.extName;
		var isPath = _.makePredicate("STRING IDENT NUMBER");
		var isKeyWord = _.makePredicate("true false undefined null this Array Date JSON Math NaN RegExp decodeURI decodeURIComponent encodeURI encodeURIComponent parseFloat parseInt Object");
	
	
	
	
		function Parser(input, opts){
		  opts = opts || {};
	
		  this.input = input;
		  this.tokens = new Lexer(input, opts).lex();
		  this.pos = 0;
		  this.length = this.tokens.length;
		}
	
	
		var op = Parser.prototype;
	
	
		op.parse = function(){
		  this.pos = 0;
		  var res= this.program();
		  if(this.ll().type === 'TAG_CLOSE'){
		    this.error("You may got a unclosed Tag")
		  }
		  return res;
		}
	
		op.ll =  function(k){
		  k = k || 1;
		  if(k < 0) k = k + 1;
		  var pos = this.pos + k - 1;
		  if(pos > this.length - 1){
		      return this.tokens[this.length-1];
		  }
		  return this.tokens[pos];
		}
		  // lookahead
		op.la = function(k){
		  return (this.ll(k) || '').type;
		}
	
		op.match = function(type, value){
		  var ll;
		  if(!(ll = this.eat(type, value))){
		    ll  = this.ll();
		    this.error('expect [' + type + (value == null? '':':'+ value) + ']" -> got "[' + ll.type + (value==null? '':':'+ll.value) + ']', ll.pos)
		  }else{
		    return ll;
		  }
		}
	
		op.error = function(msg, pos){
		  msg =  "\n【 parse failed 】 " + msg +  ':\n\n' + _.trackErrorPos(this.input, typeof pos === 'number'? pos: this.ll().pos||0);
		  throw new Error(msg);
		}
	
		op.next = function(k){
		  k = k || 1;
		  this.pos += k;
		}
		op.eat = function(type, value){
		  var ll = this.ll();
		  if(typeof type !== 'string'){
		    for(var len = type.length ; len--;){
		      if(ll.type === type[len]) {
		        this.next();
		        return ll;
		      }
		    }
		  }else{
		    if( ll.type === type && (typeof value === 'undefined' || ll.value === value) ){
		       this.next();
		       return ll;
		    }
		  }
		  return false;
		}
	
		// program
		//  :EOF
		//  | (statement)* EOF
		op.program = function(){
		  var statements = [],  ll = this.ll();
		  while(ll.type !== 'EOF' && ll.type !=='TAG_CLOSE'){
	
		    statements.push(this.statement());
		    ll = this.ll();
		  }
		  // if(ll.type === 'TAG_CLOSE') this.error("You may have unmatched Tag")
		  return statements;
		}
	
		// statement
		//  : xml
		//  | jst
		//  | text
		op.statement = function(){
		  var ll = this.ll();
		  switch(ll.type){
		    case 'NAME':
		    case 'TEXT':
		      var text = ll.value;
		      this.next();
		      while(ll = this.eat(['NAME', 'TEXT'])){
		        text += ll.value;
		      }
		      return node.text(text);
		    case 'TAG_OPEN':
		      return this.xml();
		    case 'OPEN': 
		      return this.directive();
		    case 'EXPR_OPEN':
		      return this.interplation();
		    default:
		      this.error('Unexpected token: '+ this.la())
		  }
		}
	
		// xml 
		// stag statement* TAG_CLOSE?(if self-closed tag)
		op.xml = function(){
		  var name, attrs, children, selfClosed;
		  name = this.match('TAG_OPEN').value;
		  attrs = this.attrs();
		  selfClosed = this.eat('/')
		  this.match('>');
		  if( !selfClosed && !_.isVoidTag(name) ){
		    children = this.program();
		    if(!this.eat('TAG_CLOSE', name)) this.error('expect </'+name+'> got'+ 'no matched closeTag')
		  }
		  return node.element(name, attrs, children);
		}
	
		// xentity
		//  -rule(wrap attribute)
		//  -attribute
		//
		// __example__
		//  name = 1 |  
		//  ng-hide |
		//  on-click={{}} | 
		//  {{#if name}}on-click={{xx}}{{#else}}on-tap={{}}{{/if}}
	
		op.xentity = function(ll){
		  var name = ll.value, value, modifier;
		  if(ll.type === 'NAME'){
		    //@ only for test
		    if(~name.indexOf('.')){
		      var tmp = name.split('.');
		      name = tmp[0];
		      modifier = tmp[1]
	
		    }
		    if( this.eat("=") ) value = this.attvalue(modifier);
		    return node.attribute( name, value, modifier );
		  }else{
		    if( name !== 'if') this.error("current version. ONLY RULE #if #else #elseif is valid in tag, the rule #" + name + ' is invalid');
		    return this['if'](true);
		  }
	
		}
	
		// stag     ::=    '<' Name (S attr)* S? '>'  
		// attr    ::=     Name Eq attvalue
		op.attrs = function(isAttribute){
		  var eat
		  if(!isAttribute){
		    eat = ["NAME", "OPEN"]
		  }else{
		    eat = ["NAME"]
		  }
	
		  var attrs = [], ll;
		  while (ll = this.eat(eat)){
		    attrs.push(this.xentity( ll ))
		  }
		  return attrs;
		}
	
		// attvalue
		//  : STRING  
		//  | NAME
		op.attvalue = function(mdf){
		  var ll = this.ll();
		  switch(ll.type){
		    case "NAME":
		    case "UNQ":
		    case "STRING":
		      this.next();
		      var value = ll.value;
		      if(~value.indexOf(config.BEGIN) && ~value.indexOf(config.END) && mdf!=='cmpl'){
		        var constant = true;
		        var parsed = new Parser(value, { mode: 2 }).parse();
		        if(parsed.length === 1 && parsed[0].type === 'expression') return parsed[0];
		        var body = [];
		        parsed.forEach(function(item){
		          if(!item.constant) constant=false;
		          // silent the mutiple inteplation
		            body.push(item.body || "'" + item.text.replace(/'/g, "\\'") + "'");        
		        });
		        body = "[" + body.join(",") + "].join('')";
		        value = node.expression(body, null, constant);
		      }
		      return value;
		    case "EXPR_OPEN":
		      return this.interplation();
		    // case "OPEN":
		    //   if(ll.value === 'inc' || ll.value === 'include'){
		    //     this.next();
		    //     return this.inc();
		    //   }else{
		    //     this.error('attribute value only support inteplation and {#inc} statement')
		    //   }
		    //   break;
		    default:
		      this.error('Unexpected token: '+ this.la())
		  }
		}
	
	
		// {{#}}
		op.directive = function(){
		  var name = this.ll().value;
		  this.next();
		  if(typeof this[name] === 'function'){
		    return this[name]()
		  }else{
		    this.error('Undefined directive['+ name +']');
		  }
		}
	
	
		// {{}}
		op.interplation = function(){
		  this.match('EXPR_OPEN');
		  var res = this.expression(true);
		  this.match('END');
		  return res;
		}
	
		// {{~}}
		op.inc = op.include = function(){
		  var content = this.expression();
		  this.match('END');
		  return node.template(content);
		}
	
		// {{#if}}
		op["if"] = function(tag){
		  var test = this.expression();
		  var consequent = [], alternate=[];
	
		  var container = consequent;
		  var statement = !tag? "statement" : "attrs";
	
		  this.match('END');
	
		  var ll, close;
		  while( ! (close = this.eat('CLOSE')) ){
		    ll = this.ll();
		    if( ll.type === 'OPEN' ){
		      switch( ll.value ){
		        case 'else':
		          container = alternate;
		          this.next();
		          this.match( 'END' );
		          break;
		        case 'elseif':
		          this.next();
		          alternate.push( this["if"](tag) );
		          return node['if']( test, consequent, alternate );
		        default:
		          container.push( this[statement](true) );
		      }
		    }else{
		      container.push(this[statement](true));
		    }
		  }
		  // if statement not matched
		  if(close.value !== "if") this.error('Unmatched if directive')
		  return node["if"](test, consequent, alternate);
		}
	
	
		// @mark   mustache syntax have natrure dis, canot with expression
		// {{#list}}
		op.list = function(){
		  // sequence can be a list or hash
		  var sequence = this.expression(), variable, ll, track;
		  var consequent = [], alternate=[];
		  var container = consequent;
	
		  this.match('IDENT', 'as');
	
		  variable = this.match('IDENT').value;
	
		  if(this.eat('IDENT', 'by')){
		    if(this.eat('IDENT',variable + '_index')){
		      track = true;
		    }else{
		      track = this.expression();
		      if(track.constant){
		        // true is means constant, we handle it just like xxx_index.
		        track = true;
		      }
		    }
		  }
	
		  this.match('END');
	
		  while( !(ll = this.eat('CLOSE')) ){
		    if(this.eat('OPEN', 'else')){
		      container =  alternate;
		      this.match('END');
		    }else{
		      container.push(this.statement());
		    }
		  }
		  
		  if(ll.value !== 'list') this.error('expect ' + 'list got ' + '/' + ll.value + ' ', ll.pos );
		  return node.list(sequence, variable, consequent, alternate, track);
		}
	
	
		op.expression = function(){
		  var expression;
		  if(this.eat('@(')){ //once bind
		    expression = this.expr();
		    expression.once = true;
		    this.match(')')
		  }else{
		    expression = this.expr();
		  }
		  return expression;
		}
	
		op.expr = function(){
		  this.depend = [];
	
		  var buffer = this.filter()
	
		  var body = buffer.get || buffer;
		  var setbody = buffer.set;
		  return node.expression(body, setbody, !this.depend.length);
		}
	
	
		// filter
		// assign ('|' filtername[':' args]) * 
		op.filter = function(){
		  var left = this.assign();
		  var ll = this.eat('|');
		  var buffer = [], setBuffer, prefix,
		    attr = "t", 
		    set = left.set, get, 
		    tmp = "";
	
		  if(ll){
		    if(set) setBuffer = [];
	
		    prefix = "(function(" + attr + "){";
	
		    do{
		      tmp = attr + " = " + ctxName + "._f_('" + this.match('IDENT').value+ "' ).get.call( "+_.ctxName +"," + attr ;
		      if(this.eat(':')){
		        tmp +=", "+ this.arguments("|").join(",") + ");"
		      }else{
		        tmp += ');'
		      }
		      buffer.push(tmp);
		      setBuffer && setBuffer.unshift( tmp.replace(" ).get.call", " ).set.call") );
	
		    }while(ll = this.eat('|'));
		    buffer.push("return " + attr );
		    setBuffer && setBuffer.push("return " + attr);
	
		    get =  prefix + buffer.join("") + "})("+left.get+")";
		    // we call back to value.
		    if(setBuffer){
		      // change _ss__(name, _p_) to _s__(name, filterFn(_p_));
		      set = set.replace(_.setName, 
		        prefix + setBuffer.join("") + "})("+　_.setName　+")" );
	
		    }
		    // the set function is depend on the filter definition. if it have set method, the set will work
		    return this.getset(get, set);
		  }
		  return left;
		}
	
		// assign
		// left-hand-expr = condition
		op.assign = function(){
		  var left = this.condition(), ll;
		  if(ll = this.eat(['=', '+=', '-=', '*=', '/=', '%='])){
		    if(!left.set) this.error('invalid lefthand expression in assignment expression');
		    return this.getset( left.set.replace( "," + _.setName, "," + this.condition().get ).replace("'='", "'"+ll.type+"'"), left.set);
		    // return this.getset('(' + left.get + ll.type  + this.condition().get + ')', left.set);
		  }
		  return left;
		}
	
		// or
		// or ? assign : assign
		op.condition = function(){
	
		  var test = this.or();
		  if(this.eat('?')){
		    return this.getset([test.get + "?", 
		      this.assign().get, 
		      this.match(":").type, 
		      this.assign().get].join(""));
		  }
	
		  return test;
		}
	
		// and
		// and && or
		op.or = function(){
	
		  var left = this.and();
	
		  if(this.eat('||')){
		    return this.getset(left.get + '||' + this.or().get);
		  }
	
		  return left;
		}
		// equal
		// equal && and
		op.and = function(){
	
		  var left = this.equal();
	
		  if(this.eat('&&')){
		    return this.getset(left.get + '&&' + this.and().get);
		  }
		  return left;
		}
		// relation
		// 
		// equal == relation
		// equal != relation
		// equal === relation
		// equal !== relation
		op.equal = function(){
		  var left = this.relation(), ll;
		  // @perf;
		  if( ll = this.eat(['==','!=', '===', '!=='])){
		    return this.getset(left.get + ll.type + this.equal().get);
		  }
		  return left
		}
		// relation < additive
		// relation > additive
		// relation <= additive
		// relation >= additive
		// relation in additive
		op.relation = function(){
		  var left = this.additive(), ll;
		  // @perf
		  if(ll = (this.eat(['<', '>', '>=', '<=']) || this.eat('IDENT', 'in') )){
		    return this.getset(left.get + ll.value + this.relation().get);
		  }
		  return left
		}
		// additive :
		// multive
		// additive + multive
		// additive - multive
		op.additive = function(){
		  var left = this.multive() ,ll;
		  if(ll= this.eat(['+','-']) ){
		    return this.getset(left.get + ll.value + this.additive().get);
		  }
		  return left
		}
		// multive :
		// unary
		// multive * unary
		// multive / unary
		// multive % unary
		op.multive = function(){
		  var left = this.range() ,ll;
		  if( ll = this.eat(['*', '/' ,'%']) ){
		    return this.getset(left.get + ll.type + this.multive().get);
		  }
		  return left;
		}
	
		op.range = function(){
		  var left = this.unary(), ll, right;
	
		  if(ll = this.eat('..')){
		    right = this.unary();
		    var body = 
		      "(function(start,end){var res = [],step=end>start?1:-1; for(var i = start; end>start?i <= end: i>=end; i=i+step){res.push(i); } return res })("+left.get+","+right.get+")"
		    return this.getset(body);
		  }
	
		  return left;
		}
	
	
	
		// lefthand
		// + unary
		// - unary
		// ~ unary
		// ! unary
		op.unary = function(){
		  var ll;
		  if(ll = this.eat(['+','-','~', '!'])){
		    return this.getset('(' + ll.type + this.unary().get + ')') ;
		  }else{
		    return this.member()
		  }
		}
	
		// call[lefthand] :
		// member args
		// member [ expression ]
		// member . ident  
	
		op.member = function(base, last, pathes, prevBase){
		  var ll, path, extValue;
	
	
		  var onlySimpleAccessor = false;
		  if(!base){ //first
		    path = this.primary();
		    var type = typeof path;
		    if(type === 'string'){ 
		      pathes = [];
		      pathes.push( path );
		      last = path;
		      extValue = extName + "." + path
		      base = ctxName + "._sg_('" + path + "', " + varName + ", " + extName + ")";
		      onlySimpleAccessor = true;
		    }else{ //Primative Type
		      if(path.get === 'this'){
		        base = ctxName;
		        pathes = ['this'];
		      }else{
		        pathes = null;
		        base = path.get;
		      }
		    }
		  }else{ // not first enter
		    if(typeof last === 'string' && isPath( last) ){ // is valid path
		      pathes.push(last);
		    }else{
		      if(pathes && pathes.length) this.depend.push(pathes);
		      pathes = null;
		    }
		  }
		  if(ll = this.eat(['[', '.', '('])){
		    switch(ll.type){
		      case '.':
		          // member(object, property, computed)
		        var tmpName = this.match('IDENT').value;
		        prevBase = base;
		        if( this.la() !== "(" ){ 
		          base = ctxName + "._sg_('" + tmpName + "', " + base + ")";
		        }else{
		          base += "['" + tmpName + "']";
		        }
		        return this.member( base, tmpName, pathes,  prevBase);
		      case '[':
		          // member(object, property, computed)
		        path = this.assign();
		        prevBase = base;
		        if( this.la() !== "(" ){ 
		        // means function call, we need throw undefined error when call function
		        // and confirm that the function call wont lose its context
		          base = ctxName + "._sg_(" + path.get + ", " + base + ")";
		        }else{
		          base += "[" + path.get + "]";
		        }
		        this.match(']')
		        return this.member(base, path, pathes, prevBase);
		      case '(':
		        // call(callee, args)
		        var args = this.arguments().join(',');
		        base =  base+"(" + args +")";
		        this.match(')')
		        return this.member(base, null, pathes);
		    }
		  }
		  if( pathes && pathes.length ) this.depend.push( pathes );
		  var res =  {get: base};
		  if(last){
		    res.set = ctxName + "._ss_(" + 
		        (last.get? last.get : "'"+ last + "'") + 
		        ","+ _.setName + ","+ 
		        (prevBase?prevBase:_.varName) + 
		        ", '=', "+ ( onlySimpleAccessor? 1 : 0 ) + ")";
		  
		  }
		  return res;
		}
	
		/**
		 * 
		 */
		op.arguments = function(end){
		  end = end || ')'
		  var args = [];
		  do{
		    if(this.la() !== end){
		      args.push(this.assign().get)
		    }
		  }while( this.eat(','));
		  return args
		}
	
	
		// primary :
		// this 
		// ident
		// literal
		// array
		// object
		// ( expression )
	
		op.primary = function(){
		  var ll = this.ll();
		  switch(ll.type){
		    case "{":
		      return this.object();
		    case "[":
		      return this.array();
		    case "(":
		      return this.paren();
		    // literal or ident
		    case 'STRING':
		      this.next();
		      var value = "" + ll.value;
		      var quota = ~value.indexOf("'")? "\"": "'" ;
		      return this.getset(quota + value + quota);
		    case 'NUMBER':
		      this.next();
		      return this.getset( "" + ll.value );
		    case "IDENT":
		      this.next();
		      if(isKeyWord(ll.value)){
		        return this.getset( ll.value );
		      }
		      return ll.value;
		    default: 
		      this.error('Unexpected Token: ' + ll.type);
		  }
		}
	
		// object
		//  {propAssign [, propAssign] * [,]}
	
		// propAssign
		//  prop : assign
	
		// prop
		//  STRING
		//  IDENT
		//  NUMBER
	
		op.object = function(){
		  var code = [this.match('{').type];
	
		  var ll = this.eat( ['STRING', 'IDENT', 'NUMBER'] );
		  while(ll){
		    code.push("'" + ll.value + "'" + this.match(':').type);
		    var get = this.assign().get;
		    code.push(get);
		    ll = null;
		    if(this.eat(",") && (ll = this.eat(['STRING', 'IDENT', 'NUMBER'])) ) code.push(",");
		  }
		  code.push(this.match('}').type);
		  return {get: code.join("")}
		}
	
		// array
		// [ assign[,assign]*]
		op.array = function(){
		  var code = [this.match('[').type], item;
		  if( this.eat("]") ){
	
		     code.push("]");
		  } else {
		    while(item = this.assign()){
		      code.push(item.get);
		      if(this.eat(',')) code.push(",");
		      else break;
		    }
		    code.push(this.match(']').type);
		  }
		  return {get: code.join("")};
		}
	
		// '(' expression ')'
		op.paren = function(){
		  this.match('(');
		  var res = this.filter()
		  res.get = '(' + res.get + ')';
		  this.match(')');
		  return res;
		}
	
		op.getset = function(get, set){
		  return {
		    get: get,
		    set: set
		  }
		}
	
	
	
		module.exports = Parser;
	
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		// (c) 2010-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
		// Backbone may be freely distributed under the MIT license.
		// For all details and documentation:
		// http://backbonejs.org
	
		// klass: a classical JS OOP façade
		// https://github.com/ded/klass
		// License MIT (c) Dustin Diaz 2014
		  
		// inspired by backbone's extend and klass
		var _ = __webpack_require__(5),
		  fnTest = /xy/.test(function(){"xy";}) ? /\bsupr\b/:/.*/,
		  isFn = function(o){return typeof o === "function"};
	
		var hooks = {
		  events: function( propertyValue, proto ){
		    var eventListeners = proto._eventListeners || [];
		    var normedEvents = _.normListener(propertyValue);
	
		    if(normedEvents.length) {
		      proto._eventListeners = eventListeners.concat( normedEvents );
		    }
		    delete proto.events ;
		  }
		}
	
	
		function wrap( k, fn, supro ) {
		  return function () {
		    var tmp = this.supr;
		    this.supr = supro[k];
		    var ret = fn.apply(this, arguments);
		    this.supr = tmp;
		    return ret;
		  }
		}
	
		function process( what, o, supro ) {
		  for ( var k in o ) {
		    if (o.hasOwnProperty(k)) {
		      if(hooks[k]) {
		        hooks[k](o[k], what, supro)
		      }
		      what[k] = isFn( o[k] ) && isFn( supro[k] ) && 
		        fnTest.test( o[k] ) ? wrap(k, o[k], supro) : o[k];
		    }
		  }
		}
	
		// if the property is ["events", "data", "computed"] , we should merge them
		var merged = ["data", "computed"], mlen = merged.length;
		module.exports = function extend(o){
		  o = o || {};
		  var supr = this, proto,
		    supro = supr && supr.prototype || {};
	
		  if(typeof o === 'function'){
		    proto = o.prototype;
		    o.implement = implement;
		    o.extend = extend;
		    return o;
		  } 
		  
		  function fn() {
		    supr.apply(this, arguments);
		  }
	
		  proto = _.createProto(fn, supro);
	
		  function implement(o){
		    // we need merge the merged property
		    var len = mlen;
		    for(;len--;){
		      var prop = merged[len];
		      if(proto[prop] && o.hasOwnProperty(prop) && proto.hasOwnProperty(prop)){
		        _.extend(proto[prop], o[prop], true) 
		        delete o[prop];
		      }
		    }
	
	
		    process(proto, o, supro); 
		    return this;
		  }
	
	
	
		  fn.implement = implement
		  fn.implement(o)
		  if(supr.__after__) supr.__after__.call(fn, supr, o);
		  fn.extend = extend;
		  return fn;
		}
	
	
	
	/***/ },
	/* 15 */
	/***/ function(module, exports, __webpack_require__) {
	
		// some nested  operation in ast 
		// --------------------------------
	
		var dom = __webpack_require__(4);
		var animate = __webpack_require__(22);
	
		var combine = module.exports = {
	
		  // get the initial dom in object
		  node: function(item){
		    var children,node, nodes;
		    if(!item) return;
		    if(item.element) return item.element;
		    if(typeof item.node === "function") return item.node();
		    if(typeof item.nodeType === "number") return item;
		    if(item.group) return combine.node(item.group)
		    if(children = item.children){
		      if(children.length === 1){
		        return combine.node(children[0]);
		      }
		      nodes = [];
		      for(var i = 0, len = children.length; i < len; i++ ){
		        node = combine.node(children[i]);
		        if(Array.isArray(node)){
		          nodes.push.apply(nodes, node)
		        }else if(node) {
		          nodes.push(node)
		        }
		      }
		      return nodes;
		    }
		  },
		  // @TODO remove _gragContainer
		  inject: function(node, pos ){
		    var group = this;
		    var fragment = combine.node(group.group || group);
		    if(node === false) {
		      animate.remove(fragment)
		      return group;
		    }else{
		      if(!fragment) return group;
		      if(typeof node === 'string') node = dom.find(node);
		      if(!node) throw Error('injected node is not found');
		      // use animate to animate firstchildren
		      animate.inject(fragment, node, pos);
		    }
		    // if it is a component
		    if(group.$emit) {
		      var preParent = group.parentNode;
		      var newParent = (pos ==='after' || pos === 'before')? node.parentNode : node;
		      group.parentNode = newParent;
		      group.$emit("$inject", node, pos, preParent);
		    }
		    return group;
		  },
	
		  // get the last dom in object(for insertion operation)
		  last: function(item){
		    var children = item.children;
	
		    if(typeof item.last === "function") return item.last();
		    if(typeof item.nodeType === "number") return item;
	
		    if(children && children.length) return combine.last(children[children.length - 1]);
		    if(item.group) return combine.last(item.group);
	
		  },
	
		  destroy: function(item, first){
		    if(!item) return;
		    if(Array.isArray(item)){
		      for(var i = 0, len = item.length; i < len; i++ ){
		        combine.destroy(item[i], first);
		      }
		    }
		    var children = item.children;
		    if(typeof item.destroy === "function") return item.destroy(first);
		    if(typeof item.nodeType === "number" && first)  dom.remove(item);
		    if(children && children.length){
		      combine.destroy(children, true);
		      item.children = null;
		    }
		  }
	
		}
	
	
		// @TODO: need move to dom.js
		dom.element = function( component, all ){
		  if(!component) return !all? null: [];
		  var nodes = combine.node( component );
		  if( nodes.nodeType === 1 ) return all? [nodes]: nodes;
		  var elements = [];
		  for(var i = 0; i<nodes.length ;i++){
		    var node = nodes[i];
		    if( node && node.nodeType === 1){
		      if(!all) return node;
		      elements.push(node);
		    } 
		  }
		  return !all? elements[0]: elements;
		}
	
	
	
	
	
	/***/ },
	/* 16 */
	/***/ function(module, exports, __webpack_require__) {
	
		// simplest event emitter 60 lines
		// ===============================
		var slice = [].slice, _ = __webpack_require__(5);
		var API = {
		  $on: function(event, fn, desc) {
		    if(typeof event === "object" && event){
		      for (var i in event) {
		        this.$on(i, event[i], fn);
		      }
		    }else{
		      desc = desc || {};
		      // @patch: for list
		      var context = this;
		      var handles = context._handles || (context._handles = {}),
		        calls = handles[event] || (handles[event] = []);
		      var realFn;
		      if(desc.once){
		        realFn = function(){
		          fn.apply( this, arguments )
		          this.$off(event, fn);
		        }
		        fn.real = realFn;
		      }
		      calls.push(realFn || fn);
		    }
		    return this;
		  },
		  $off: function(event, fn) {
		    var context = this;
		    if(!context._handles) return;
		    if(!event) this._handles = {};
		    var handles = context._handles,
		      calls;
	
		    if (calls = handles[event]) {
		      if (!fn) {
		        handles[event] = [];
		        return context;
		      }
		      fn = fn.real || fn;
		      for (var i = 0, len = calls.length; i < len; i++) {
		        if (fn === calls[i]) {
		          calls.splice(i, 1);
		          return context;
		        }
		      }
		    }
		    return context;
		  },
		  // bubble event
		  $emit: function(event){
		    // @patch: for list
		    var context = this;
		    var handles = context._handles, calls, args, type;
		    if(!event) return;
		    var args = slice.call(arguments, 1);
		    var type = event;
	
		    if(!handles) return context;
		    if(calls = handles[type.slice(1)]){
		      for (var j = 0, len = calls.length; j < len; j++) {
		        calls[j].apply(context, args)
		      }
		    }
		    if (!(calls = handles[type])) return context;
		    for (var i = 0, len = calls.length; i < len; i++) {
		      calls[i].apply(context, args)
		    }
		    // if(calls.length) context.$update();
		    return context;
		  },
		  // capture  event
		  $once: function(event, fn){
		    var args = _.slice(arguments);
		    args.push({once: true})
		    return this.$on.apply(this, args);
		  }
		}
		// container class
		function Event() {}
		_.extend(Event.prototype, API)
	
		Event.mixTo = function(obj){
		  obj = typeof obj === "function" ? obj.prototype : obj;
		  _.extend(obj, API)
		}
		module.exports = Event;
	
	/***/ },
	/* 17 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
		var parseExpression = __webpack_require__(18).expression;
		var diff = __webpack_require__(25);
		var diffArray = diff.diffArray;
		var diffObject = diff.diffObject;
	
		function Watcher(){}
	
		var methods = {
		  $watch: function(expr, fn, options){
		    var get, once, test, rlen, extra = this.__ext__; //records length
		    if(!this._watchers) this._watchers = [];
	
		    options = options || {};
		    if(options === true){
		       options = { deep: true }
		    }
		    var uid = _.uid('w_');
		    if(Array.isArray(expr)){
		      var tests = [];
		      for(var i = 0,len = expr.length; i < len; i++){
		          tests.push(this.$expression(expr[i]).get)
		      }
		      var prev = [];
		      test = function(context){
		        var equal = true;
		        for(var i =0, len = tests.length; i < len; i++){
		          var splice = tests[i](context, extra);
		          if(!_.equals(splice, prev[i])){
		             equal = false;
		             prev[i] = _.clone(splice);
		          }
		        }
		        return equal? false: prev;
		      }
		    }else{
		      if(typeof expr === 'function'){
		        get = expr.bind(this);      
		      }else{
		        expr = this._touchExpr( parseExpression(expr) );
		        get = expr.get;
		        once = expr.once;
		      }
		    }
	
		    var watcher = {
		      id: uid, 
		      get: get, 
		      fn: fn, 
		      once: once, 
		      force: options.force,
		      // don't use ld to resolve array diff
		      diff: options.diff,
		      test: test,
		      deep: options.deep,
		      last: options.sync? get(this): options.last
		    }
		    
		    this._watchers.push( watcher );
	
		    rlen = this._records && this._records.length;
		    if(rlen) this._records[rlen-1].push(uid)
		    // init state.
		    if(options.init === true){
		      var prephase = this.$phase;
		      this.$phase = 'digest';
		      this._checkSingleWatch( watcher, this._watchers.length-1 );
		      this.$phase = prephase;
		    }
		    return watcher;
		  },
		  $unwatch: function( watcher ){
		    if(!this._watchers || !watcher) return;
		    var watchers = this._watchers;
		    if(typeof watcher === 'number'){
		      var id = watcher;
		      watcher = _.findItem( watchers, function(item){
		        return item.id === id;
		      } );
		      return this.$unwatch(watcher);
		    }
		    var len = watcher.length;
		    if( len ){
		      while( (len--) >= 0 ){
		        this.$unwatch(watcher[len])
		      }
		      return;
		    }else{
		      watcher.removed = true
		    }
		  },
		  $expression: function(value){
		    return this._touchExpr(parseExpression(value))
		  },
		  /**
		   * the whole digest loop ,just like angular, it just a dirty-check loop;
		   * @param  {String} path  now regular process a pure dirty-check loop, but in parse phase, 
		   *                  Regular's parser extract the dependencies, in future maybe it will change to dirty-check combine with path-aware update;
		   * @return {Void}   
		   */
	
		  $digest: function(){
		    if(this.$phase === 'digest' || this._mute) return;
		    this.$phase = 'digest';
		    var dirty = false, n =0;
		    while(dirty = this._digest()){
	
		      if((++n) > 20){ // max loop
		        throw Error('there may a circular dependencies reaches')
		      }
		    }
		    if( n > 0 && this.$emit) {
		      this.$emit("$update");
		      if (this.devtools) {
		        this.devtools.emit("flush", this)
		      }
		    }
		    this.$phase = null;
		  },
		  // private digest logic
		  _digest: function(){
	
		    var watchers = this._watchers;
		    var dirty = false, children, watcher, watcherDirty;
		    var len = watchers && watchers.length;
		    if(len){
		      for(;len--;){
		        watcher = watchers[len];
		        if( watcher.removed ){
		          watchers.splice( len, 1 );
		        }else{
		          watcherDirty = this._checkSingleWatch(watcher, len);
		          if(watcherDirty) dirty = true;
		        }
		      }
		    }
		    // check children's dirty.
		    children = this._children;
		    if(children && children.length){
		      for(var m = 0, mlen = children.length; m < mlen; m++){
		        var child = children[m];
		        if(child && child._digest()) dirty = true;
		      }
		    }
		    return dirty;
		  },
		  // check a single one watcher 
		  _checkSingleWatch: function(watcher, i){
		    var dirty = false;
		    if(!watcher) return;
	
		    var now, last, tlast, tnow,  eq, diff;
	
		    if(!watcher.test){
	
		      now = watcher.get(this);
		      last = watcher.last;
		      tlast = _.typeOf(last);
		      tnow = _.typeOf(now);
		      eq = true, diff;
	
		      // !Object
		      if( !(tnow === 'object' && tlast==='object' && watcher.deep) ){
		        // Array
		        if( tnow === 'array' && ( tlast=='undefined' || tlast === 'array') ){
		          diff = diffArray(now, watcher.last || [], watcher.diff)
		          if( tlast !== 'array' || diff === true || diff.length ) dirty = true;
		        }else{
		          eq = _.equals( now, last );
		          if( !eq || watcher.force ){
		            watcher.force = null;
		            dirty = true; 
		          }
		        }
		      }else{
		        diff =  diffObject( now, last, watcher.diff );
		        if( diff === true || diff.length ) dirty = true;
		      }
		    } else{
		      // @TODO 是否把多重改掉
		      var result = watcher.test(this);
		      if(result){
		        dirty = true;
		        watcher.fn.apply(this, result)
		      }
		    }
		    if(dirty && !watcher.test){
		      if(tnow === 'object' && watcher.deep || tnow === 'array'){
		        watcher.last = _.clone(now);
		      }else{
		        watcher.last = now;
		      }
		      watcher.fn.call(this, now, last, diff)
		      if(watcher.once) this._watchers.splice(i, 1);
		    }
	
		    return dirty;
		  },
	
		  /**
		   * **tips**: whatever param you passed in $update, after the function called, dirty-check(digest) phase will enter;
		   * 
		   * @param  {Function|String|Expression} path  
		   * @param  {Whatever} value optional, when path is Function, the value is ignored
		   * @return {this}     this 
		   */
		  $set: function(path, value){
		    if(path != null){
		      var type = _.typeOf(path);
		      if( type === 'string' || path.type === 'expression' ){
		        path = this.$expression(path);
		        path.set(this, value);
		      }else if(type === 'function'){
		        path.call(this, this.data);
		      }else{
		        for(var i in path) {
		          this.$set(i, path[i])
		        }
		      }
		    }
		  },
		  // 1. expr canbe string or a Expression
		  // 2. detect: if true, if expr is a string will directly return;
		  $get: function(expr, detect)  {
		    if(detect && typeof expr === 'string') return expr;
		    return this.$expression(expr).get(this);
		  },
		  $update: function(){
		    var rootParent = this;
		    do{
		      if(rootParent.data.isolate || !rootParent.$parent) break;
		      rootParent = rootParent.$parent;
		    } while(rootParent)
	
		    var prephase =rootParent.$phase;
		    rootParent.$phase = 'digest'
	
		    this.$set.apply(this, arguments);
	
		    rootParent.$phase = prephase
	
		    rootParent.$digest();
		    return this;
		  },
		  // auto collect watchers for logic-control.
		  _record: function(){
		    if(!this._records) this._records = [];
		    this._records.push([]);
		  },
		  _release: function(){
		    return this._records.pop();
		  }
		}
	
	
		_.extend(Watcher.prototype, methods)
	
	
		Watcher.mixTo = function(obj){
		  obj = typeof obj === "function" ? obj.prototype : obj;
		  return _.extend(obj, methods)
		}
	
		module.exports = Watcher;
	
	/***/ },
	/* 18 */
	/***/ function(module, exports, __webpack_require__) {
	
		var exprCache = __webpack_require__(1).exprCache;
		var _ = __webpack_require__(5);
		var Parser = __webpack_require__(13);
		module.exports = {
		  expression: function(expr, simple){
		    // @TODO cache
		    if( typeof expr === 'string' && ( expr = expr.trim() ) ){
		      expr = exprCache.get( expr ) || exprCache.set( expr, new Parser( expr, { mode: 2, expression: true } ).expression() )
		    }
		    if(expr) return expr;
		  },
		  parse: function(template){
		    return new Parser(template).parse();
		  }
		}
	
	
	
	/***/ },
	/* 19 */
	/***/ function(module, exports, __webpack_require__) {
	
		
		var f = module.exports = {};
	
		// json:  two way 
		//  - get: JSON.stringify
		//  - set: JSON.parse
		//  - example: `{ title|json }`
		f.json = {
		  get: function( value ){
		    return typeof JSON !== 'undefined'? JSON.stringify(value): value;
		  },
		  set: function( value ){
		    return typeof JSON !== 'undefined'? JSON.parse(value) : value;
		  }
		}
	
		// last: one-way
		//  - get: return the last item in list
		//  - example: `{ list|last }`
		f.last = function(arr){
		  return arr && arr[arr.length - 1];
		}
	
		// average: one-way
		//  - get: copute the average of the list
		//  - example: `{ list| average: "score" }`
		f.average = function(array, key){
		  array = array || [];
		  return array.length? f.total(array, key)/ array.length : 0;
		}
	
	
		// total: one-way
		//  - get: copute the total of the list
		//  - example: `{ list| total: "score" }`
		f.total = function(array, key){
		  var total = 0;
		  if(!array) return;
		  array.forEach(function( item ){
		    total += key? item[key] : item;
		  })
		  return total;
		}
	
		// var basicSortFn = function(a, b){return b - a}
	
		// f.sort = function(array, key, reverse){
		//   var type = typeof key, sortFn; 
		//   switch(type){
		//     case 'function': sortFn = key; break;
		//     case 'string': sortFn = function(a, b){};break;
		//     default:
		//       sortFn = basicSortFn;
		//   }
		//   // need other refernce.
		//   return array.slice().sort(function(a,b){
		//     return reverse? -sortFn(a, b): sortFn(a, b);
		//   })
		//   return array
		// }
	
	
	
	
	/***/ },
	/* 20 */
	/***/ function(module, exports, __webpack_require__) {
	
		// shim for es5
		var slice = [].slice;
		var tstr = ({}).toString;
	
		function extend(o1, o2 ){
		  for(var i in o2) if( o1[i] === undefined){
		    o1[i] = o2[i]
		  }
		  return o2;
		}
	
	
		module.exports = function(){
		  // String proto ;
		  extend(String.prototype, {
		    trim: function(){
		      return this.replace(/^\s+|\s+$/g, '');
		    }
		  });
	
	
		  // Array proto;
		  extend(Array.prototype, {
		    indexOf: function(obj, from){
		      from = from || 0;
		      for (var i = from, len = this.length; i < len; i++) {
		        if (this[i] === obj) return i;
		      }
		      return -1;
		    },
		    // polyfill from MDN 
		    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
		    forEach: function(callback, ctx){
		      var k = 0;
	
		      // 1. Let O be the result of calling ToObject passing the |this| value as the argument.
		      var O = Object(this);
	
		      var len = O.length >>> 0; 
	
		      if ( typeof callback !== "function" ) {
		        throw new TypeError( callback + " is not a function" );
		      }
	
		      // 7. Repeat, while k < len
		      while( k < len ) {
	
		        var kValue;
	
		        if ( k in O ) {
	
		          kValue = O[ k ];
	
		          callback.call( ctx, kValue, k, O );
		        }
		        k++;
		      }
		    },
		    // @deprecated
		    //  will be removed at 0.5.0
		    filter: function(fun, context){
	
		      var t = Object(this);
		      var len = t.length >>> 0;
		      if (typeof fun !== "function")
		        throw new TypeError();
	
		      var res = [];
		      for (var i = 0; i < len; i++)
		      {
		        if (i in t)
		        {
		          var val = t[i];
		          if (fun.call(context, val, i, t))
		            res.push(val);
		        }
		      }
	
		      return res;
		    }
		  });
	
		  // Function proto;
		  extend(Function.prototype, {
		    bind: function(context){
		      var fn = this;
		      var preArgs = slice.call(arguments, 1);
		      return function(){
		        var args = preArgs.concat(slice.call(arguments));
		        return fn.apply(context, args);
		      }
		    }
		  })
		  
		  // Array
		  extend(Array, {
		    isArray: function(arr){
		      return tstr.call(arr) === "[object Array]";
		    }
		  })
		}
	
	
	
	/***/ },
	/* 21 */
	/***/ function(module, exports, __webpack_require__) {
	
		// http://stackoverflow.com/questions/1354064/how-to-convert-characters-to-html-entities-using-plain-javascript
		var entities = {
		  'quot':34, 
		  'amp':38, 
		  'apos':39, 
		  'lt':60, 
		  'gt':62, 
		  'nbsp':160, 
		  'iexcl':161, 
		  'cent':162, 
		  'pound':163, 
		  'curren':164, 
		  'yen':165, 
		  'brvbar':166, 
		  'sect':167, 
		  'uml':168, 
		  'copy':169, 
		  'ordf':170, 
		  'laquo':171, 
		  'not':172, 
		  'shy':173, 
		  'reg':174, 
		  'macr':175, 
		  'deg':176, 
		  'plusmn':177, 
		  'sup2':178, 
		  'sup3':179, 
		  'acute':180, 
		  'micro':181, 
		  'para':182, 
		  'middot':183, 
		  'cedil':184, 
		  'sup1':185, 
		  'ordm':186, 
		  'raquo':187, 
		  'frac14':188, 
		  'frac12':189, 
		  'frac34':190, 
		  'iquest':191, 
		  'Agrave':192, 
		  'Aacute':193, 
		  'Acirc':194, 
		  'Atilde':195, 
		  'Auml':196, 
		  'Aring':197, 
		  'AElig':198, 
		  'Ccedil':199, 
		  'Egrave':200, 
		  'Eacute':201, 
		  'Ecirc':202, 
		  'Euml':203, 
		  'Igrave':204, 
		  'Iacute':205, 
		  'Icirc':206, 
		  'Iuml':207, 
		  'ETH':208, 
		  'Ntilde':209, 
		  'Ograve':210, 
		  'Oacute':211, 
		  'Ocirc':212, 
		  'Otilde':213, 
		  'Ouml':214, 
		  'times':215, 
		  'Oslash':216, 
		  'Ugrave':217, 
		  'Uacute':218, 
		  'Ucirc':219, 
		  'Uuml':220, 
		  'Yacute':221, 
		  'THORN':222, 
		  'szlig':223, 
		  'agrave':224, 
		  'aacute':225, 
		  'acirc':226, 
		  'atilde':227, 
		  'auml':228, 
		  'aring':229, 
		  'aelig':230, 
		  'ccedil':231, 
		  'egrave':232, 
		  'eacute':233, 
		  'ecirc':234, 
		  'euml':235, 
		  'igrave':236, 
		  'iacute':237, 
		  'icirc':238, 
		  'iuml':239, 
		  'eth':240, 
		  'ntilde':241, 
		  'ograve':242, 
		  'oacute':243, 
		  'ocirc':244, 
		  'otilde':245, 
		  'ouml':246, 
		  'divide':247, 
		  'oslash':248, 
		  'ugrave':249, 
		  'uacute':250, 
		  'ucirc':251, 
		  'uuml':252, 
		  'yacute':253, 
		  'thorn':254, 
		  'yuml':255, 
		  'fnof':402, 
		  'Alpha':913, 
		  'Beta':914, 
		  'Gamma':915, 
		  'Delta':916, 
		  'Epsilon':917, 
		  'Zeta':918, 
		  'Eta':919, 
		  'Theta':920, 
		  'Iota':921, 
		  'Kappa':922, 
		  'Lambda':923, 
		  'Mu':924, 
		  'Nu':925, 
		  'Xi':926, 
		  'Omicron':927, 
		  'Pi':928, 
		  'Rho':929, 
		  'Sigma':931, 
		  'Tau':932, 
		  'Upsilon':933, 
		  'Phi':934, 
		  'Chi':935, 
		  'Psi':936, 
		  'Omega':937, 
		  'alpha':945, 
		  'beta':946, 
		  'gamma':947, 
		  'delta':948, 
		  'epsilon':949, 
		  'zeta':950, 
		  'eta':951, 
		  'theta':952, 
		  'iota':953, 
		  'kappa':954, 
		  'lambda':955, 
		  'mu':956, 
		  'nu':957, 
		  'xi':958, 
		  'omicron':959, 
		  'pi':960, 
		  'rho':961, 
		  'sigmaf':962, 
		  'sigma':963, 
		  'tau':964, 
		  'upsilon':965, 
		  'phi':966, 
		  'chi':967, 
		  'psi':968, 
		  'omega':969, 
		  'thetasym':977, 
		  'upsih':978, 
		  'piv':982, 
		  'bull':8226, 
		  'hellip':8230, 
		  'prime':8242, 
		  'Prime':8243, 
		  'oline':8254, 
		  'frasl':8260, 
		  'weierp':8472, 
		  'image':8465, 
		  'real':8476, 
		  'trade':8482, 
		  'alefsym':8501, 
		  'larr':8592, 
		  'uarr':8593, 
		  'rarr':8594, 
		  'darr':8595, 
		  'harr':8596, 
		  'crarr':8629, 
		  'lArr':8656, 
		  'uArr':8657, 
		  'rArr':8658, 
		  'dArr':8659, 
		  'hArr':8660, 
		  'forall':8704, 
		  'part':8706, 
		  'exist':8707, 
		  'empty':8709, 
		  'nabla':8711, 
		  'isin':8712, 
		  'notin':8713, 
		  'ni':8715, 
		  'prod':8719, 
		  'sum':8721, 
		  'minus':8722, 
		  'lowast':8727, 
		  'radic':8730, 
		  'prop':8733, 
		  'infin':8734, 
		  'ang':8736, 
		  'and':8743, 
		  'or':8744, 
		  'cap':8745, 
		  'cup':8746, 
		  'int':8747, 
		  'there4':8756, 
		  'sim':8764, 
		  'cong':8773, 
		  'asymp':8776, 
		  'ne':8800, 
		  'equiv':8801, 
		  'le':8804, 
		  'ge':8805, 
		  'sub':8834, 
		  'sup':8835, 
		  'nsub':8836, 
		  'sube':8838, 
		  'supe':8839, 
		  'oplus':8853, 
		  'otimes':8855, 
		  'perp':8869, 
		  'sdot':8901, 
		  'lceil':8968, 
		  'rceil':8969, 
		  'lfloor':8970, 
		  'rfloor':8971, 
		  'lang':9001, 
		  'rang':9002, 
		  'loz':9674, 
		  'spades':9824, 
		  'clubs':9827, 
		  'hearts':9829, 
		  'diams':9830, 
		  'OElig':338, 
		  'oelig':339, 
		  'Scaron':352, 
		  'scaron':353, 
		  'Yuml':376, 
		  'circ':710, 
		  'tilde':732, 
		  'ensp':8194, 
		  'emsp':8195, 
		  'thinsp':8201, 
		  'zwnj':8204, 
		  'zwj':8205, 
		  'lrm':8206, 
		  'rlm':8207, 
		  'ndash':8211, 
		  'mdash':8212, 
		  'lsquo':8216, 
		  'rsquo':8217, 
		  'sbquo':8218, 
		  'ldquo':8220, 
		  'rdquo':8221, 
		  'bdquo':8222, 
		  'dagger':8224, 
		  'Dagger':8225, 
		  'permil':8240, 
		  'lsaquo':8249, 
		  'rsaquo':8250, 
		  'euro':8364
		}
	
	
	
		module.exports  = entities;
	
	/***/ },
	/* 22 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
		var dom  = __webpack_require__(4);
		var animate = {};
		var env = __webpack_require__(1);
	
	
		var 
		  transitionEnd = 'transitionend', 
		  animationEnd = 'animationend', 
		  transitionProperty = 'transition', 
		  animationProperty = 'animation';
	
		if(!('ontransitionend' in window)){
		  if('onwebkittransitionend' in window) {
		    
		    // Chrome/Saf (+ Mobile Saf)/Android
		    transitionEnd += ' webkitTransitionEnd';
		    transitionProperty = 'webkitTransition'
		  } else if('onotransitionend' in dom.tNode || navigator.appName === 'Opera') {
	
		    // Opera
		    transitionEnd += ' oTransitionEnd';
		    transitionProperty = 'oTransition';
		  }
		}
		if(!('onanimationend' in window)){
		  if ('onwebkitanimationend' in window){
		    // Chrome/Saf (+ Mobile Saf)/Android
		    animationEnd += ' webkitAnimationEnd';
		    animationProperty = 'webkitAnimation';
	
		  }else if ('onoanimationend' in dom.tNode){
		    // Opera
		    animationEnd += ' oAnimationEnd';
		    animationProperty = 'oAnimation';
		  }
		}
	
		/**
		 * inject node with animation
		 * @param  {[type]} node      [description]
		 * @param  {[type]} refer     [description]
		 * @param  {[type]} direction [description]
		 * @return {[type]}           [description]
		 */
		animate.inject = function( node, refer ,direction, callback ){
		  callback = callback || _.noop;
		  if( Array.isArray(node) ){
		    var fragment = dom.fragment();
		    var count=0;
	
		    for(var i = 0,len = node.length;i < len; i++ ){
		      fragment.appendChild(node[i]); 
		    }
		    dom.inject(fragment, refer, direction);
	
		    // if all nodes is done, we call the callback
		    var enterCallback = function (){
		      count++;
		      if( count === len ) callback();
		    }
		    if(len === count) callback();
		    for( i = 0; i < len; i++ ){
		      if(node[i].onenter){
		        node[i].onenter(enterCallback);
		      }else{
		        enterCallback();
		      }
		    }
		  }else{
		    dom.inject( node, refer, direction );
		    if(node.onenter){
		      node.onenter(callback)
		    }else{
		      callback();
		    }
		  }
		}
	
		/**
		 * remove node with animation
		 * @param  {[type]}   node     [description]
		 * @param  {Function} callback [description]
		 * @return {[type]}            [description]
		 */
		animate.remove = function(node, callback){
		  if(!node) return;
		  var count = 0;
		  function loop(){
		    count++;
		    if(count === len) callback && callback()
		  }
		  if(Array.isArray(node)){
		    for(var i = 0, len = node.length; i < len ; i++){
		      animate.remove(node[i], loop)
		    }
		    return node;
		  }
		  if(node.onleave){
		    node.onleave(function(){
		      removeDone(node, callback)
		    })
		  }else{
		    removeDone(node, callback)
		  }
		}
	
		var removeDone = function (node, callback){
		    dom.remove(node);
		    callback && callback();
		}
	
	
	
		animate.startClassAnimate = function ( node, className,  callback, mode ){
		  var activeClassName, timeout, tid, onceAnim;
		  if( (!animationEnd && !transitionEnd) || env.isRunning ){
		    return callback();
		  }
	
		  if(mode !== 4){
		    onceAnim = _.once(function onAnimateEnd(){
		      if(tid) clearTimeout(tid);
	
		      if(mode === 2) {
		        dom.delClass(node, activeClassName);
		      }
		      if(mode !== 3){ // mode hold the class
		        dom.delClass(node, className);
		      }
		      dom.off(node, animationEnd, onceAnim)
		      dom.off(node, transitionEnd, onceAnim)
	
		      callback();
	
		    });
		  }else{
		    onceAnim = _.once(function onAnimateEnd(){
		      if(tid) clearTimeout(tid);
		      callback();
		    });
		  }
		  if(mode === 2){ // auto removed
		    dom.addClass( node, className );
	
		    activeClassName = _.map(className.split(/\s+/), function(name){
		       return name + '-active';
		    }).join(" ");
	
		    dom.nextReflow(function(){
		      dom.addClass( node, activeClassName );
		      timeout = getMaxTimeout( node );
		      tid = setTimeout( onceAnim, timeout );
		    });
	
		  }else if(mode===4){
		    dom.nextReflow(function(){
		      dom.delClass( node, className );
		      timeout = getMaxTimeout( node );
		      tid = setTimeout( onceAnim, timeout );
		    });
	
		  }else{
		    dom.nextReflow(function(){
		      dom.addClass( node, className );
		      timeout = getMaxTimeout( node );
		      tid = setTimeout( onceAnim, timeout );
		    });
		  }
	
	
	
		  dom.on( node, animationEnd, onceAnim )
		  dom.on( node, transitionEnd, onceAnim )
		  return onceAnim;
		}
	
	
		animate.startStyleAnimate = function(node, styles, callback){
		  var timeout, onceAnim, tid;
	
		  dom.nextReflow(function(){
		    dom.css( node, styles );
		    timeout = getMaxTimeout( node );
		    tid = setTimeout( onceAnim, timeout );
		  });
	
	
		  onceAnim = _.once(function onAnimateEnd(){
		    if(tid) clearTimeout(tid);
	
		    dom.off(node, animationEnd, onceAnim)
		    dom.off(node, transitionEnd, onceAnim)
	
		    callback();
	
		  });
	
		  dom.on( node, animationEnd, onceAnim )
		  dom.on( node, transitionEnd, onceAnim )
	
		  return onceAnim;
		}
	
	
		/**
		 * get maxtimeout
		 * @param  {Node} node 
		 * @return {[type]}   [description]
		 */
		function getMaxTimeout(node){
		  var timeout = 0,
		    tDuration = 0,
		    tDelay = 0,
		    aDuration = 0,
		    aDelay = 0,
		    ratio = 5 / 3,
		    styles ;
	
		  if(window.getComputedStyle){
	
		    styles = window.getComputedStyle(node),
		    tDuration = getMaxTime( styles[transitionProperty + 'Duration']) || tDuration;
		    tDelay = getMaxTime( styles[transitionProperty + 'Delay']) || tDelay;
		    aDuration = getMaxTime( styles[animationProperty + 'Duration']) || aDuration;
		    aDelay = getMaxTime( styles[animationProperty + 'Delay']) || aDelay;
		    timeout = Math.max( tDuration+tDelay, aDuration + aDelay );
	
		  }
		  return timeout * 1000 * ratio;
		}
	
		function getMaxTime(str){
	
		  var maxTimeout = 0, time;
	
		  if(!str) return 0;
	
		  str.split(",").forEach(function(str){
	
		    time = parseFloat(str);
		    if( time > maxTimeout ) maxTimeout = time;
	
		  });
	
		  return maxTimeout;
		}
	
		module.exports = animate;
	
	/***/ },
	/* 23 */
	/***/ function(module, exports, __webpack_require__) {
	
		/**
		 * event directive  bundle
		 *
		 */
		var _ = __webpack_require__(5);
		var dom = __webpack_require__(4);
		var Regular = __webpack_require__(3);
	
		Regular._addProtoInheritCache("event");
	
		Regular.directive( /^on-\w+$/, function( elem, value, name , attrs) {
		  if ( !name || !value ) return;
		  var type = name.split("-")[1];
		  return this._handleEvent( elem, type, value, attrs );
		});
		// TODO.
		/**
		- $('dx').delegate()
		*/
		Regular.directive( /^(delegate|de)-\w+$/, function( elem, value, name ) {
		  var root = this.$root;
		  var _delegates = root._delegates || ( root._delegates = {} );
		  if ( !name || !value ) return;
		  var type = name.split("-")[1];
		  var fire = _.handleEvent.call(this, value, type);
	
		  function delegateEvent(ev){
		    matchParent(ev, _delegates[type], root.parentNode);
		  }
	
		  if( !_delegates[type] ){
		    _delegates[type] = [];
	
		    if(root.parentNode){
		      dom.on(root.parentNode, type, delegateEvent);
		    }else{
		      root.$on( "$inject", function( node, position, preParent ){
		        var newParent = this.parentNode;
		        if( preParent ){
		          dom.off(preParent, type, delegateEvent);
		        }
		        if(newParent) dom.on(this.parentNode, type, delegateEvent);
		      })
		    }
		    root.$on("$destroy", function(){
		      if(root.parentNode) dom.off(root.parentNode, type, delegateEvent)
		      _delegates[type] = null;
		    })
		  }
		  var delegate = {
		    element: elem,
		    fire: fire
		  }
		  _delegates[type].push( delegate );
	
		  return function(){
		    var delegates = _delegates[type];
		    if(!delegates || !delegates.length) return;
		    for( var i = 0, len = delegates.length; i < len; i++ ){
		      if( delegates[i] === delegate ) delegates.splice(i, 1);
		    }
		  }
	
		});
	
	
		function matchParent(ev , delegates, stop){
		  if(!stop) return;
		  var target = ev.target, pair;
		  while(target && target !== stop){
		    for( var i = 0, len = delegates.length; i < len; i++ ){
		      pair = delegates[i];
		      if(pair && pair.element === target){
		        pair.fire(ev)
		      }
		    }
		    target = target.parentNode;
		  }
		}
	
	/***/ },
	/* 24 */
	/***/ function(module, exports, __webpack_require__) {
	
		// Regular
		var _ = __webpack_require__(5);
		var dom = __webpack_require__(4);
		var Regular = __webpack_require__(3);
		var hasInput;
	
		var modelHandlers = {
		  "text": initText,
		  "select": initSelect,
		  "checkbox": initCheckBox,
		  "radio": initRadio
		}
	
	
		// @TODO
	
	
		// autoUpdate directive for select element
		// to fix r-model issue , when handle dynamic options
	
	
		/**
		 * <select r-model={name}> 
		 *   <r-option value={value} ></r-option>
		 * </select>
		 */
	
	
		// two-way binding with r-model
		// works on input, textarea, checkbox, radio, select
	
	
		Regular.directive("r-model", {
		  param: ['throttle', 'lazy'],
		  link: function( elem, value, name, extra ){
		    var tag = elem.tagName.toLowerCase();
		    var sign = tag;
		    if(sign === "input") sign = elem.type || "text";
		    else if(sign === "textarea") sign = "text";
		    if(typeof value === "string") value = this.$expression(value);
	
		    if( modelHandlers[sign] ) return modelHandlers[sign].call(this, elem, value, extra);
		    else if(tag === "input"){
		      return modelHandlers.text.call(this, elem, value, extra);
		    }
		  }
		})
	
	
	
		// binding <select>
	
		function initSelect( elem, parsed, extra){
		  var self = this;
		  var wc = this.$watch(parsed, function(newValue){
		    var children = elem.getElementsByTagName('option');
		    for(var i =0, len = children.length ; i < len; i++){
		      if(children[i].value == newValue){
		        elem.selectedIndex = i;
		        break;
		      }
		    }
		  });
	
		  function handler(){
		    parsed.set(self, this.value);
		    wc.last = this.value;
		    self.$update();
		  }
	
		  dom.on( elem, "change", handler );
		  
		  if(parsed.get(self) === undefined && elem.value){
		    parsed.set(self, elem.value);
		  }
	
		  return function destroy(){
		    dom.off(elem, "change", handler);
		  }
		}
	
		// input,textarea binding
		function initText(elem, parsed, extra){
		  var param = extra.param;
		  var throttle, lazy = param.lazy
	
		  if('throttle' in param){
		    // <input throttle r-model>
		    if(param[throttle] === true){
		      throttle = 400;
		    }else{
		      throttle = parseInt(param.throttle , 10)
		    }
		  }
	
		  var self = this;
		  var wc = this.$watch(parsed, function(newValue){
		    if(elem.value !== newValue) elem.value = newValue == null? "": "" + newValue;
		  });
	
		  // @TODO to fixed event
		  var handler = function (ev){
		    var that = this;
		    if(ev.type==='cut' || ev.type==='paste'){
		      _.nextTick(function(){
		        var value = that.value
		        parsed.set(self, value);
		        wc.last = value;
		        self.$update();
		      })
		    }else{
		        var value = that.value
		        parsed.set(self, value);
		        wc.last = value;
		        self.$update();
		    }
		  };
	
		  if(throttle && !lazy){
		    var preHandle = handler, tid;
		    handler = _.throttle(handler, throttle);
		  }
	
		  if(hasInput === undefined){
		    hasInput = dom.msie !== 9 && "oninput" in document.createElement('input')
		  }
	
		  if(lazy){
		    dom.on(elem, 'change', handler)
		  }else{
		    if( hasInput){
		      elem.addEventListener("input", handler );
		    }else{
		      dom.on(elem, "paste keyup cut change", handler)
		    }
		  }
		  if(parsed.get(self) === undefined && elem.value){
		     parsed.set(self, elem.value);
		  }
		  return function (){
		    if(lazy) return dom.off(elem, "change", handler);
		    if( hasInput ){
		      elem.removeEventListener("input", handler );
		    }else{
		      dom.off(elem, "paste keyup cut change", handler)
		    }
		  }
		}
	
	
		// input:checkbox  binding
	
		function initCheckBox(elem, parsed){
		  var self = this;
		  var watcher = this.$watch(parsed, function(newValue){
		    dom.attr(elem, 'checked', !!newValue);
		  });
	
		  var handler = function handler(){
		    var value = this.checked;
		    parsed.set(self, value);
		    watcher.last = value;
		    self.$update();
		  }
		  if(parsed.set) dom.on(elem, "change", handler)
	
		  if(parsed.get(self) === undefined){
		    parsed.set(self, !!elem.checked);
		  }
	
		  return function destroy(){
		    if(parsed.set) dom.off(elem, "change", handler)
		  }
		}
	
	
		// input:radio binding
	
		function initRadio(elem, parsed){
		  var self = this;
		  var wc = this.$watch(parsed, function( newValue ){
		    if(newValue == elem.value) elem.checked = true;
		    else elem.checked = false;
		  });
	
	
		  var handler = function handler(){
		    var value = this.value;
		    parsed.set(self, value);
		    self.$update();
		  }
		  if(parsed.set) dom.on(elem, "change", handler)
		  // beacuse only after compile(init), the dom structrue is exsit. 
		  if(parsed.get(self) === undefined){
		    if(elem.checked) {
		      parsed.set(self, elem.value);
		    }
		  }
	
		  return function destroy(){
		    if(parsed.set) dom.off(elem, "change", handler)
		  }
		}
	
	
	
	
	
	/***/ },
	/* 25 */
	/***/ function(module, exports, __webpack_require__) {
	
		var _ = __webpack_require__(5);
	
		function simpleDiff(now, old){
		  var nlen = now.length;
		  var olen = old.length;
		  if(nlen !== olen){
		    return true;
		  }
		  for(var i = 0; i < nlen ; i++){
		    if(now[i] !== old[i]) return  true;
		  }
		  return false
	
		}
	
		function equals(a,b){
		  return a === b;
		}
	
		// array1 - old array
		// array2 - new array
		function ld(array1, array2, equalFn){
		  var n = array1.length;
		  var m = array2.length;
		  var equalFn = equalFn || equals;
		  var matrix = [];
		  for(var i = 0; i <= n; i++){
		    matrix.push([i]);
		  }
		  for(var j=1;j<=m;j++){
		    matrix[0][j]=j;
		  }
		  for(var i = 1; i <= n; i++){
		    for(var j = 1; j <= m; j++){
		      if(equalFn(array1[i-1], array2[j-1])){
		        matrix[i][j] = matrix[i-1][j-1];
		      }else{
		        matrix[i][j] = Math.min(
		          matrix[i-1][j]+1, //delete
		          matrix[i][j-1]+1//add
		          )
		      }
		    }
		  }
		  return matrix;
		}
		// arr2 - new array
		// arr1 - old array
		function diffArray(arr2, arr1, diff, diffFn) {
		  if(!diff) return simpleDiff(arr2, arr1);
		  var matrix = ld(arr1, arr2, diffFn)
		  var n = arr1.length;
		  var i = n;
		  var m = arr2.length;
		  var j = m;
		  var edits = [];
		  var current = matrix[i][j];
		  while(i>0 || j>0){
		  // the last line
		    if (i === 0) {
		      edits.unshift(3);
		      j--;
		      continue;
		    }
		    // the last col
		    if (j === 0) {
		      edits.unshift(2);
		      i--;
		      continue;
		    }
		    var northWest = matrix[i - 1][j - 1];
		    var west = matrix[i - 1][j];
		    var north = matrix[i][j - 1];
	
		    var min = Math.min(north, west, northWest);
	
		    if (min === west) {
		      edits.unshift(2); //delete
		      i--;
		      current = west;
		    } else if (min === northWest ) {
		      if (northWest === current) {
		        edits.unshift(0); //no change
		      } else {
		        edits.unshift(1); //update
		        current = northWest;
		      }
		      i--;
		      j--;
		    } else {
		      edits.unshift(3); //add
		      j--;
		      current = north;
		    }
		  }
		  var LEAVE = 0;
		  var ADD = 3;
		  var DELELE = 2;
		  var UPDATE = 1;
		  var n = 0;m=0;
		  var steps = [];
		  var step = {index: null, add:0, removed:[]};
	
		  for(var i=0;i<edits.length;i++){
		    if(edits[i] > 0 ){ // NOT LEAVE
		      if(step.index === null){
		        step.index = m;
		      }
		    } else { //LEAVE
		      if(step.index != null){
		        steps.push(step)
		        step = {index: null, add:0, removed:[]};
		      }
		    }
		    switch(edits[i]){
		      case LEAVE:
		        n++;
		        m++;
		        break;
		      case ADD:
		        step.add++;
		        m++;
		        break;
		      case DELELE:
		        step.removed.push(arr1[n])
		        n++;
		        break;
		      case UPDATE:
		        step.add++;
		        step.removed.push(arr1[n])
		        n++;
		        m++;
		        break;
		    }
		  }
		  if(step.index != null){
		    steps.push(step)
		  }
		  return steps
		}
	
	
	
		// diffObject
		// ----
		// test if obj1 deepEqual obj2
		function diffObject( now, last, diff ){
	
	
		  if(!diff){
	
		    for( var j in now ){
		      if( last[j] !== now[j] ) return true
		    }
	
		    for( var n in last ){
		      if(last[n] !== now[n]) return true;
		    }
	
		  }else{
	
		    var nKeys = _.keys(now);
		    var lKeys = _.keys(last);
	
		    /**
		     * [description]
		     * @param  {[type]} a    [description]
		     * @param  {[type]} b){                   return now[b] [description]
		     * @return {[type]}      [description]
		     */
		    return diffArray(nKeys, lKeys, diff, function(a, b){
		      return now[b] === last[a];
		    });
	
		  }
	
		  return false;
	
	
		}
	
		module.exports = {
		  diffArray: diffArray,
		  diffObject: diffObject
		}
	
	/***/ },
	/* 26 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = {
		  element: function(name, attrs, children){
		    return {
		      type: 'element',
		      tag: name,
		      attrs: attrs,
		      children: children
		    }
		  },
		  attribute: function(name, value, mdf){
		    return {
		      type: 'attribute',
		      name: name,
		      value: value,
		      mdf: mdf
		    }
		  },
		  "if": function(test, consequent, alternate){
		    return {
		      type: 'if',
		      test: test,
		      consequent: consequent,
		      alternate: alternate
		    }
		  },
		  list: function(sequence, variable, body, alternate, track){
		    return {
		      type: 'list',
		      sequence: sequence,
		      alternate: alternate,
		      variable: variable,
		      body: body,
		      track: track
		    }
		  },
		  expression: function( body, setbody, constant ){
		    return {
		      type: "expression",
		      body: body,
		      constant: constant || false,
		      setbody: setbody || false
		    }
		  },
		  text: function(text){
		    return {
		      type: "text",
		      text: text
		    }
		  },
		  template: function(template){
		    return {
		      type: 'template',
		      content: template
		    }
		  }
		}
	
	
	/***/ }
	/******/ ])
	});
	
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(setImmediate, clearImmediate) {var nextTick = __webpack_require__(4).nextTick;
	var apply = Function.prototype.apply;
	var slice = Array.prototype.slice;
	var immediateIds = {};
	var nextImmediateId = 0;
	
	// DOM APIs, for completeness
	
	exports.setTimeout = function() {
	  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
	};
	exports.setInterval = function() {
	  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
	};
	exports.clearTimeout =
	exports.clearInterval = function(timeout) { timeout.close(); };
	
	function Timeout(id, clearFn) {
	  this._id = id;
	  this._clearFn = clearFn;
	}
	Timeout.prototype.unref = Timeout.prototype.ref = function() {};
	Timeout.prototype.close = function() {
	  this._clearFn.call(window, this._id);
	};
	
	// Does not start the time, just sets up the members needed.
	exports.enroll = function(item, msecs) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = msecs;
	};
	
	exports.unenroll = function(item) {
	  clearTimeout(item._idleTimeoutId);
	  item._idleTimeout = -1;
	};
	
	exports._unrefActive = exports.active = function(item) {
	  clearTimeout(item._idleTimeoutId);
	
	  var msecs = item._idleTimeout;
	  if (msecs >= 0) {
	    item._idleTimeoutId = setTimeout(function onTimeout() {
	      if (item._onTimeout)
	        item._onTimeout();
	    }, msecs);
	  }
	};
	
	// That's not how node.js implements it but the exposed api is the same.
	exports.setImmediate = typeof setImmediate === "function" ? setImmediate : function(fn) {
	  var id = nextImmediateId++;
	  var args = arguments.length < 2 ? false : slice.call(arguments, 1);
	
	  immediateIds[id] = true;
	
	  nextTick(function onNextTick() {
	    if (immediateIds[id]) {
	      // fn.call() is faster so we optimize for the common use-case
	      // @see http://jsperf.com/call-apply-segu
	      if (args) {
	        fn.apply(null, args);
	      } else {
	        fn.call(null);
	      }
	      // Prevent ids from leaking
	      exports.clearImmediate(id);
	    }
	  });
	
	  return id;
	};
	
	exports.clearImmediate = typeof clearImmediate === "function" ? clearImmediate : function(id) {
	  delete immediateIds[id];
	};
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3).setImmediate, __webpack_require__(3).clearImmediate))

/***/ },
/* 4 */
/***/ function(module, exports) {

	// shim for using process in browser
	var process = module.exports = {};
	
	// cached from whatever global is present so that test runners that stub it
	// don't break things.  But we need to wrap it in a try catch in case it is
	// wrapped in strict mode code which doesn't define any globals.  It's inside a
	// function because try/catches deoptimize in certain engines.
	
	var cachedSetTimeout;
	var cachedClearTimeout;
	
	(function () {
	    try {
	        cachedSetTimeout = setTimeout;
	    } catch (e) {
	        cachedSetTimeout = function () {
	            throw new Error('setTimeout is not defined');
	        }
	    }
	    try {
	        cachedClearTimeout = clearTimeout;
	    } catch (e) {
	        cachedClearTimeout = function () {
	            throw new Error('clearTimeout is not defined');
	        }
	    }
	} ())
	function runTimeout(fun) {
	    if (cachedSetTimeout === setTimeout) {
	        //normal enviroments in sane situations
	        return setTimeout(fun, 0);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedSetTimeout(fun, 0);
	    } catch(e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
	            return cachedSetTimeout.call(null, fun, 0);
	        } catch(e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
	            return cachedSetTimeout.call(this, fun, 0);
	        }
	    }
	
	
	}
	function runClearTimeout(marker) {
	    if (cachedClearTimeout === clearTimeout) {
	        //normal enviroments in sane situations
	        return clearTimeout(marker);
	    }
	    try {
	        // when when somebody has screwed with setTimeout but no I.E. maddness
	        return cachedClearTimeout(marker);
	    } catch (e){
	        try {
	            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
	            return cachedClearTimeout.call(null, marker);
	        } catch (e){
	            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
	            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
	            return cachedClearTimeout.call(this, marker);
	        }
	    }
	
	
	
	}
	var queue = [];
	var draining = false;
	var currentQueue;
	var queueIndex = -1;
	
	function cleanUpNextTick() {
	    if (!draining || !currentQueue) {
	        return;
	    }
	    draining = false;
	    if (currentQueue.length) {
	        queue = currentQueue.concat(queue);
	    } else {
	        queueIndex = -1;
	    }
	    if (queue.length) {
	        drainQueue();
	    }
	}
	
	function drainQueue() {
	    if (draining) {
	        return;
	    }
	    var timeout = runTimeout(cleanUpNextTick);
	    draining = true;
	
	    var len = queue.length;
	    while(len) {
	        currentQueue = queue;
	        queue = [];
	        while (++queueIndex < len) {
	            if (currentQueue) {
	                currentQueue[queueIndex].run();
	            }
	        }
	        queueIndex = -1;
	        len = queue.length;
	    }
	    currentQueue = null;
	    draining = false;
	    runClearTimeout(timeout);
	}
	
	process.nextTick = function (fun) {
	    var args = new Array(arguments.length - 1);
	    if (arguments.length > 1) {
	        for (var i = 1; i < arguments.length; i++) {
	            args[i - 1] = arguments[i];
	        }
	    }
	    queue.push(new Item(fun, args));
	    if (queue.length === 1 && !draining) {
	        runTimeout(drainQueue);
	    }
	};
	
	// v8 likes predictible objects
	function Item(fun, array) {
	    this.fun = fun;
	    this.array = array;
	}
	Item.prototype.run = function () {
	    this.fun.apply(null, this.array);
	};
	process.title = 'browser';
	process.browser = true;
	process.env = {};
	process.argv = [];
	process.version = ''; // empty string to avoid regexp issues
	process.versions = {};
	
	function noop() {}
	
	process.on = noop;
	process.addListener = noop;
	process.once = noop;
	process.off = noop;
	process.removeListener = noop;
	process.removeAllListeners = noop;
	process.emit = noop;
	
	process.binding = function (name) {
	    throw new Error('process.binding is not supported');
	};
	
	process.cwd = function () { return '/' };
	process.chdir = function (dir) {
	    throw new Error('process.chdir is not supported');
	};
	process.umask = function() { return 0; };


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(6);
	
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
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _zoroBase = __webpack_require__(7);
	
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
/* 7 */
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
		
		var _mixin = __webpack_require__(9);
		
		var _mixin2 = _interopRequireDefault(_mixin);
		
		var _object = __webpack_require__(10);
		
		var object = _interopRequireWildcard(_object);
		
		var _type = __webpack_require__(6);
		
		var type = _interopRequireWildcard(_type);
		
		var _url = __webpack_require__(14);
		
		var url = _interopRequireWildcard(_url);
		
		function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
		
		function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }
		
		var obj = object.merge({}, blob, css, consts, date, dom, {
		  forOwn: _forOwn2['default']
		}, id, {
		  mixin: _mixin2['default']
		}, object, type, url); /**
		                       * @Author: Yingya Zhang <zyy>
		                       * @Date:   2016-06-23 13:45:00
		                       * @Email:  zyy7259@gmail.com
		                       * @Last modified by:   zyy
		                       * @Last modified time: 2016-07-13T12:13:51+08:00
		                       */
		
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
	/* 10 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		
		var _stringify = __webpack_require__(11);
		
		var _stringify2 = _interopRequireDefault(_stringify);
		
		exports.simpleClone = simpleClone;
		exports.merge = merge;
		exports.fillUndef = fillUndef;
		exports.checkWithDefault = checkWithDefault;
		exports.fetch = fetch;
		exports.string2object = string2object;
		exports.object2string = object2string;
		
		var _mixin = __webpack_require__(9);
		
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
	/* 11 */
	/***/ function(module, exports, __webpack_require__) {
	
		module.exports = { "default": __webpack_require__(12), __esModule: true };
	
	/***/ },
	/* 12 */
	/***/ function(module, exports, __webpack_require__) {
	
		var core  = __webpack_require__(13)
		  , $JSON = core.JSON || (core.JSON = {stringify: JSON.stringify});
		module.exports = function stringify(it){ // eslint-disable-line no-unused-vars
		  return $JSON.stringify.apply($JSON, arguments);
		};
	
	/***/ },
	/* 13 */
	/***/ function(module, exports) {
	
		var core = module.exports = {version: '2.4.0'};
		if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef
	
	/***/ },
	/* 14 */
	/***/ function(module, exports, __webpack_require__) {
	
		'use strict';
		
		exports.__esModule = true;
		exports.url2origin = undefined;
		exports.genUrlSep = genUrlSep;
		exports.object2query = object2query;
		
		var _object = __webpack_require__(10);
		
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
/* 8 */
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
	
	var tpl = __webpack_require__(9);
	
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
/* 9 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-07-10 15:43:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 15:43:74\n-->\n\n<div class=\"btn-group\" r-class={{'open':open}}>\n  {#if href}\n    <a href={href} class=\"btn btn-secondary-outline\" target=\"_blank\">{title}</a>\n    <button type=\"button\" class=\"btn btn-secondary-outline dropdown-toggle\" on-click={open=!open}></button>\n  {#else}\n    <button type=\"button\" class=\"btn btn-secondary-outline dropdown-toggle\" on-click={open=!open}>{title}</button>\n  {/if}\n  <div class=\"dropdown-menu\">\n    {#list items as item}\n      <a href={item.href} class=\"dropdown-item\" target=\"_blank\" on-click={this.unopen($event)}>{item.title}</a>\n    {/list}\n  </div>\n</div>\n"

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-28 23:53:02
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-10 15:53:51
	*/
	
	var tpl = __webpack_require__(11);
	__webpack_require__(12);
	
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
/* 11 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-06-29 22:32:97\n-->\n\n<form class=\"m-editableInput form-inline {clazz}\" r-class={{'has-danger':invalid}} on-submit={this.confirm($event)}>\n  {#if !editing}\n    <label class=\"form-control-label p-l-0 text-truncate\" r-class={{'font-weight-bold':bold, 'text-muted':mute}}>\n      {value}\n    </label>\n    {#if !notEditable}\n      <i class=\"fa fa-edit fa-btn\" on-click={editing=true}></i>\n    {/if}\n  {#else}\n    <input class=\"form-control\" type=\"text\" r-model={tmp} on-input={invalid = !tmp && !canEmpty} autofocus>\n    <i class=\"fa fa-check fa-btn\" r-class={{disabled:invalid}} on-click={this.confirm($event)}></i>\n    <i class=\"fa fa-close fa-btn\" on-click={this.cancel()}></i>\n  {/if}\n</form>\n"

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(13);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-editableInput .fa{cursor:pointer}", ""]);
	
	// exports


/***/ },
/* 14 */
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
/* 15 */
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
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	__webpack_require__(16);
	
	var _util = __webpack_require__(6);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-05-29 19:40:47
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-13T13:53:22+08:00
	*/
	
	var tpl = __webpack_require__(18);
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
/* 18 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-05 10:26:07\n-->\n\n<div\n  class=\"modal-backdrop fade\"\n  ref=\"backdrop\"\n  r-class={{'in':show}}\n  r-animation=\"when:hide; class:out; emit:afterFadeOut;\"\n  on-click={this.cancel()}\n></div>\n<div\n  class=\"modal fade\"\n  ref=\"modal\"\n  r-class={{'in':show}}\n  on-click={this.click($event)}\n>\n  <div class=\"modal-dialog {sizeClazz}\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" on-click={this.cancel()}>\n          <span>&times;</span>\n        </button>\n        <h4 class=\"modal-title\">{title}</h4>\n      </div>\n      <div class=\"modal-body\">{#include this.$body}</div>\n      <div class=\"modal-footer\">\n        {#list actions as action}\n          <button type=\"button\" class=\"btn btn-primary-outline\" on-click={this.act(action)}>{action.desc}</button>\n        {/list}\n        {#if loading}<loading/>{/if}\n        <button type=\"button\" class=\"btn btn-primary-outline\" r-hide={hideConfirm} on-click={this.confirm()}>{confirmTitle}</button>\n        <button type=\"button\" class=\"btn btn-secondary\" r-hide={hideCancel} on-click={this.cancel()}>{cancelTitle}</button>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _index = __webpack_require__(17);
	
	var _index2 = _interopRequireDefault(_index);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(20); /*
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
/* 20 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:03:34\n-->\n\n<params\n  caption={caption}\n  list={paramList}\n  clazz={paramClazz}\n  paramsLimit={0}\n  labelColClazz={labelColClazz}\n  iptColClazz={iptColClazz}\n  default={default}\n  on-change=\"change\"\n  ref=\"params\"/>\n"

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(6);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	__webpack_require__(22); /*
	                        * @Author: Zhang Yingya(hzzhangyingya)
	                        * @Date:   2016-05-19 15:39:01
	                        * @Last modified by:   zyy
	                        * @Last modified time: 2016-07-13T13:54:23+08:00
	                        */
	
	var tpl = __webpack_require__(24);
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
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(23);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(15)(content, {});
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(14)();
	// imports
	
	
	// module
	exports.push([module.id, ".m-pager{position:relative}.m-pager .jump,.m-pager .jump button,.m-pager .jump input,.m-pager .jump label,.m-pager .limit,.m-pager .limit button,.m-pager .limit input,.m-pager .limit label,.m-pager .pagination,.m-pager .total{float:left;margin-right:.25rem}.m-pager .jump button:last-child,.m-pager .jump input:last-child,.m-pager .jump label:last-child,.m-pager .limit button:last-child,.m-pager .limit input:last-child,.m-pager .limit label:last-child{margin-right:0}.m-pager .text{padding:.5rem 0;border:1px solid transparent}.m-pager label{margin-bottom:0}.m-pager button{margin-top:2px}.m-pager input{width:2.5rem!important;padding:.5rem 0;text-align:center}.m-pager.right .wrap{float:right}", ""]);
	
	// exports


/***/ },
/* 24 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-05-19 15:39:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:00:30\n-->\n\n<div class=\"m-pager m-y-1 {clazz}\" r-hide={size<=1}>\n  <div class=\"wrap clearfix\" style=\"display:inline-block;\">\n    <span class=\"total text {totalClazz}\" r-hide={!showTotal}>{totalPrefix}{total}{totalSuffix}</span>\n    <!-- 可以动态调整 limit -->\n    <form class=\"limit form form-inline\" r-hide={!showLimit}>\n      <fieldset class=\"form-group\">\n        <label class=\"text {limitClazz}\" for={id+'-limit'}>limit</label>\n        <input class=\"form-control\" type=\"text\" r-model={limit} id={id+'-limit'}/>\n      </fieldset>\n    </form>\n    <ul class=\"pagination m-y-0\">\n      <!-- 上一页 -->\n      <li class=\"page-item\" r-class={{'disabled':current===1}}>\n        {#if current!==1}\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(current-1)}>{#inc prevText}</a>\n        {#else}\n        <span class=\"page-link\">{#inc prevText}</span>\n        {/if}\n      </li>\n      {#if size > sizeLimit}\n      <li class=\"page-item\" r-class={{'active':current===1}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(1)}>1</a>\n      </li>\n      {#if begin > 2}\n      <li class=\"page-item disabled\">\n        <span class=\"page-link\">...</span>\n      </li>\n      {/if}\n      {#list begin..end as i}\n      <li class=\"page-item\" r-class={{'active':current===i}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(i)}>{i}</a>\n      </li>\n      {/list}\n      {#if end < size -1}\n      <li class=\"page-item disabled\">\n        <span class=\"page-link\">...</span>\n      </li>\n      {/if}\n      <li class=\"page-item\" r-class={{'active':current===size}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(size)}>{size}</a>\n      </li>\n      {#else}\n      {#list 1..size as i}\n      <li class=\"page-item\" r-class={{'active':current===i}}>\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(i)}>{i}</a>\n      </li>\n      {/list}\n      {/if}\n      <!-- 下一页 -->\n      <li class=\"page-item\" r-class={{'disabled':current===size}}>\n        {#if current!==size}\n        <a href=\"javascript:void(0)\" class=\"page-link\" on-click={this.nav(current+1)}>{#inc nextText}</a>\n        {#else}\n        <span class=\"page-link\">{#inc nextText}</span>\n        {/if}\n      </li>\n    </ul>\n    <!-- 可以随机跳转到某一页 -->\n    <form class=\"jump form form-inline\" r-hide={!showJump}>\n      <fieldset class=\"form-group\">\n        <input type=\"text\" class=\"form-control\" r-model={jump} {#if validJump}on-enter={this.jump()}{#else}on-enter={false}{/if} ref=jump>\n        <button type=\"button\" class=\"btn btn-primary-outline\" on-click={this.jump()} {#if !validJump}disabled{/if}>Go</button>\n      </fieldset>\n    </form>\n  </div>\n</div>\n"

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	__webpack_require__(26);
	
	__webpack_require__(29);
	
	var _util = __webpack_require__(6);
	
	var _util2 = _interopRequireDefault(_util);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(32); /*
	                                   * @Author: Zhang Yingya(hzzhangyingya)
	                                   * @Date:   2016-05-30 16:40:04
	                                   * @Last modified by:   zyy
	                                   * @Last modified time: 2016-08-05T14:06:23+08:00
	                                   */
	
	var suffixTpl = __webpack_require__(31);
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
	    // - DateTime，存的是字符串，放出去的是日期对象
	    var paramsToEmit = {};
	    var invalid = data.parsedList.some(function (param) {
	      param.invalid = false;
	      var name = param.name;
	      // 如果是字符串，trim一下
	      var value = params[name];
	      if (typeof value === 'string') {
	        value = value.trim();
	      }
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
	      // 如果是检查所有参数 或者 是当前要检查的参数，那么当参数值为空时，检测参数是否非法
	      if ((!paramToCheck || isParamToCheck) && valueIsEmpty) {
	        return _this.shouldInvalidEmptyParam(params, param);
	      }
	      // 参数值非法
	      if (valueIsInvalid) {
	        return _this.invalidParam(param);
	      }
	      // 只有当参数非空时（空数组）, 才赋值参数值
	      if (!valueIsEmpty && _util2['default'].exist(value)) {
	        params[name] = value;
	      } else {
	        delete params[name];
	      }
	    });
	    if (!invalid) {
	      params = _util2['default'].simpleClone(params);
	      _util2['default'].merge(params, paramsToEmit);
	      // 如果当前正在检查某个参数，那么触发 change
	      if (paramToCheck) {
	        this.$emit('change', params);
	      }
	      return params;
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
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _checkable = __webpack_require__(27);
	
	var _checkable2 = _interopRequireDefault(_checkable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(28);
	
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
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	
	var _util = __webpack_require__(6);
	
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
/* 28 */
/***/ function(module, exports) {

	module.exports = "<div class=\"row m-x-0\" ref=\"body\">\n  {#list param.list as checkbox}\n    <div\n      {#if param.spread}\n        style=\"display:inline-block;\"\n      {#else}\n        class=\"{colClazz}\"\n      {/if}>\n      <label class=\"checkbox-inline {this.genClass(checkbox)}\">\n        <input\n          type=\"checkbox\"\n          {#if checkbox.checked}checked{/if}\n          on-click={this.click($event, checkbox)}>\n        <span\n          class=\"text-help\"\n          r-class={{'text-muted':muted}}>\n          {checkbox.desc}\n        </span>\n      </label>\n    </div>\n  {/list}\n</div>\n"

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	exports.__esModule = true;
	
	var _checkable = __webpack_require__(27);
	
	var _checkable2 = _interopRequireDefault(_checkable);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var tpl = __webpack_require__(30); /**
	                                   * @Author: Yingya Zhang <zyy>
	                                   * @Date:   2016-06-26 17:01:00
	                                   * @Email:  zyy7259@gmail.com
	                                   * @Last modified by:   zyy
	                                   * @Last modified time: 2016-07-26T17:02:26+08:00
	                                   */
	
	var suffixTpl = __webpack_require__(31);
	
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
/* 30 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-26T17:28:53+08:00\n-->\n\n<div class=\"row m-x-0\" ref=\"body\">\n  {#if param.checkable}\n    <label class=\"checkbox-inline m-r-1\" r-class={{disabled:param.disabled, 'has-warning':checked!=previousChecked}}>\n      <input type=\"checkbox\"\n        on-click={this.toggle()}\n        {#if param.checked}checked{/if}\n        {#if param.disabled}disabled{/if}>\n        <span class=\"text-help\">{param.checkableDesc||'开启'}</span>\n    </label>\n  {/if}\n  {#list param.list as radio}\n    <div\n      {#if param.spread}\n        style=\"display:inline-block;\"\n      {#else}\n        class=\"{colClazz}\"\n      {/if}>\n      <label class=\"radio-inline {this.genClass(radio)}\">\n        <input\n          type=\"radio\"\n          name={name}\n          {#if radio.checked}checked{/if}\n          {#if this.shouldDisable(radio)}disabled{/if}\n          on-click={this.click($event, radio)}>\n        <span class=\"text-help\" r-class={{'text-muted':muted}}>{radio.desc}</span>\n      </label>\n    </div>\n  {/list}\n  {#include this.suffixTpl}\n</div>\n"

/***/ },
/* 31 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-07-05 15:58:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-19T15:28:49+08:00\n-->\n\n<!-- 会同时被多个组件使用，所以单独用一个 HTML 文件存储 -->\n{#if param.suffix}\n  <span class=\"{param.suffixClazz || 'text-info'}\">{param.suffix}</span>\n{/if}\n"

/***/ },
/* 32 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-08-05T14:04:34+08:00\n-->\n\n<div class=\"m-param {clazz}\">\n  <div class=\"caption m-b-1\" r-hide={!caption}>{caption}</div>\n  <!-- 如果参数不多, 那么一排放; 否则每个参数一排 -->\n  <form class=\"form\" r-class={{'form-inline':!stack}} on-submit={this.submit($event)}>\n    {#list parsedList as param}\n      <!-- param_index: {param_index} -->\n      <fieldset class=\"form-group\" r-class={{'row':stack, 'has-danger':param.invalid}}>\n        <label\n          {#if stack}\n            class=\"form-control-label {labelPosClazz} {labelColClazz}\"\n          {#else}\n            class=\"form-control-label {param.labelClazz}\"\n          {/if}\n          for={this.genParamId(param)}\n          title={param.title || param.desc}\n          r-hide={hideLabel || param.hideLabel || !param.desc}>\n          {#if !hideMandatory}{#include this.mandatoryTpl}{/if}\n          {param.desc}\n          {#if !hideColon && !param.hideColon}:{/if}\n        </label>\n        <div {#if stack}class=\"{iptColClazz}\"{#else}class=\"form-group {param.iptClazz}\"{/if}>\n          {#if param.type === 'Static'}\n            <p class=\"form-control-static\">\n              {#if !param.hideValue}{params[param.name]}{/if}\n              {#include this.suffixTpl}\n            </p>\n          {#elseif this.paramFitInput(param)}\n            <input type={this.genInputType(param)} class=\"form-control\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' placeholder={this.genParamTip(param)} maxlength={param.maxlength} on-input={this.getParams(param)}>\n          {#elseif this.paramFitDateInput(param)}\n            <input type={this.genDateInputType(param)} class=\"form-control\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\n          {#elseif param.type === 'Select'}\n            <select class=\"form-control custom-select\" id={this.genParamId(param)} r-model2={'params.' + param.name} ref='{param.name}' on-change={this.getParams(param)}>\n              {#list param.list as option}\n                <option value={option.value}>{option.desc}</option>\n              {/list}\n            </select>\n          {#elseif param.type === 'Checkboxes'}\n            <checkboxes param={param} ref='{param.name}' on-change={this.getParams(param)}/>\n          {#elseif param.type === 'Radios'}\n            <radios param={param} ref='{param.name}' on-change={this.getParams(param)}/>\n          {/if}\n          <!-- subtitle -->\n          {#if (showSubtitle || param.showSubtitle) && param.subtitle}\n            <div class=\"text-help\" r-class={{'form-group':stack}}>\n              <small>{param.subtitle}</small>\n            </div>\n          {/if}\n          <!-- 提示 -->\n          {#if param.invalid && !hideTip}\n            <div class=\"text-help\" r-class={{'form-group':stack}}>\n              <small>{this.genParamTip(param)}</small>\n            </div>\n          {/if}\n        </div>\n      </fieldset>\n    {/list}\n    {#if showSubmit}\n      <fieldset class=\"form-group\" r-class={{'row':stack}}>\n        <div {#if stack}class=\"{submitClazz}\"{#else}class=\"form-group\"{/if}>\n          <button type=\"submit\" class=\"btn {submitBtnClazz}\">{submitTitle}</button>{#if loading}<loading/>{/if}\n        </div>\n      </fieldset>\n    {/if}\n  </form>\n</div>\n"

/***/ },
/* 33 */
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
	  template: __webpack_require__(34),
	  input: function input() {
	    this.$emit('change', this.data.search);
	  }
	});
	module.exports = exports['default'];
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-08 13:19:73\n-->\n\n<form class=\"form\">\n  <fieldset class=\"form-group\">\n    <input class=\"form-control\" type=\"text\" placeholder=\"Search...\" r-model={search} on-input={this.input()}>\n    <a href=\"javascript:void(0)\"><i class=\"fa fa-search\"></i></a>\n  </fieldset>\n</form>\n"

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(Regular) {'use strict';
	
	exports.__esModule = true;
	/*
	* @Author: Zhang Yingya(hzzhangyingya)
	* @Date:   2016-04-22 11:31:18
	* @Last modified by:   zyy
	* @Last modified time: 2016-07-28T18:33:53+08:00
	*/
	
	var tpl = __webpack_require__(36);
	var paneTpl = __webpack_require__(37);
	
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
/* 36 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-02 22:21:22\n-->\n\n<div\n  class=\"m-tab m-b-1\"\n  r-class={{'disableClick':disableClick}}>\n  <ul class=\"nav nav-tabs m-b-1\">\n    {#include this.$body}\n  </ul>\n  <div class=\"tab-cnt\">\n    {#include selected.$body}\n  </div>\n</div>\n"

/***/ },
/* 37 */
/***/ function(module, exports) {

	module.exports = "<!--\n@Author: Yingya Zhang <zyy>\n@Date:   2016-06-26 17:01:00\n@Email:  zyy7259@gmail.com\n@Last modified by:   zyy\n@Last modified time: 2016-07-10 16:03:74\n-->\n\n<li class=\"nav-item\">\n  <a\n    class=\"nav-link\"\n    href={href || 'javascript:void(0)'}\n    r-class={{'hover': hover, 'active': this.$outer.data.selected===this}}\n    {#if !disableClick}on-click={this.select()}{/if}>\n    {#include title}\n  </a>\n</li>\n"

/***/ }
/******/ ])
});
;
//# sourceMappingURL=regular-strap.js.map