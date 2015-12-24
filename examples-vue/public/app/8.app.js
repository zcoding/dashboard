webpackJsonp([8],Array(34).concat([
/* 34 */
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
/* 35 */
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
		var sourceMap = obj.sourceMap;

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
		var media = obj.media;
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
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(40)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(55)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\modals.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _modal = __webpack_require__(41);

	var _modal2 = _interopRequireDefault(_modal);

	var _alert = __webpack_require__(46);

	var _alert2 = _interopRequireDefault(_alert);

	var _confirm = __webpack_require__(49);

	var _confirm2 = _interopRequireDefault(_confirm);

	var _prompt = __webpack_require__(52);

	var _prompt2 = _interopRequireDefault(_prompt);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>

	// <div class="grid">

	//   <div class="u-sm-16">

	//     <div class="box margin-top padding">

	//       <button class="btn btn-dark float radius" type="button" v-on:click="openModal">open modal</button>

	//       <button class="btn btn-primary float radius" type="button" v-on:click="openAlert">open alert</button>

	//       <button class="btn btn-danger float radius" type="button" v-on:click="openConfirm">open confirm</button>

	//       <button class="btn btn-info float radius" type="button" v-on:click="openPrompt">open prompt</button>

	//     </div>

	//   </div>

	//   <modal v-bind:show.sync="showModal" close-via-dimmer>

	//     <div class="modal-header" slot="header">

	//       <div class="title">

	//         基础模态框

	//         <span class="fa fa-close close" v-on:click="closeModal"></span>

	//       </div>

	//     </div>

	//     <div class="modal-body" slot="body">

	//       <p>这是一个最基础的模态框，本身不包含header，body或者footer，而且默认不能通过点击dimmer关闭，除非传递一个属性close-via-dimmer</p>

	//     </div>

	//     <div class="modal-footer cf" slot="footer">

	//       <div class="fr">

	//         <button class="btn radius">取消</button>

	//         <button class="btn btn-dark radius">确定</button>

	//       </div>

	//     </div>

	//   </modal>

	//   <modal-alert v-bind:show.sync="showAlert" title="Alert modal">

	//     <p>This is message alert...</p>

	//   </modal-alert>

	//   <modal-confirm v-bind:show.sync="showConfirm" question="Are you sure to delete this item?" v-on:modal-confrim-ok="confirmOK">

	//     <p>Warning: Once you delete, you can never find it back.</p>

	//   </modal-confirm>

	//   <modal-prompt v-bind:show.sync="showPrompt" title="Input what you want:" v-on:modal-prompt-ok="promptOK"></modal-prompt>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  components: { modal: _modal2.default, modalAlert: _alert2.default, modalConfirm: _confirm2.default, modalPrompt: _prompt2.default },

	  data: function data() {
	    return {
	      showModal: false,
	      showAlert: false,
	      showConfirm: false,
	      showPrompt: false
	    };
	  },

	  methods: {
	    openModal: function openModal() {
	      this.showModal = true;
	    },
	    closeModal: function closeModal() {
	      this.showModal = false;
	    },
	    openAlert: function openAlert() {
	      this.showAlert = true;
	    },
	    openConfirm: function openConfirm() {
	      this.showConfirm = true;
	    },
	    confirmOK: function confirmOK() {
	      console.log('year');
	      this.showConfirm = false;
	    },
	    openPrompt: function openPrompt() {
	      this.showPrompt = true;
	    },
	    promptOK: function promptOK(output) {
	      console.log(output);
	      this.showPrompt = false;
	    }
	  }

	};

	// </script>

/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(42)
	module.exports = __webpack_require__(44)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(45)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\modal.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(43);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-781187d0&file=modal.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-781187d0&file=modal.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./modal.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, ".modal.fade-transition {\n  display: block;\n  opacity: 1;\n  -webkit-transition: opacity 300ms ease 0s;\n  transition: opacity 300ms ease 0s; }\n  .modal.fade-transition .modal-dialog {\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n    -webkit-transition: -webkit-transform 300ms ease 0s;\n    transition: -webkit-transform 300ms ease 0s;\n    transition: transform 300ms ease 0s;\n    transition: transform 300ms ease 0s, -webkit-transform 300ms ease 0s; }\n\n.modal.fade-enter, .modal.fade-leave {\n  opacity: 0; }\n  .modal.fade-enter .modal-dialog, .modal.fade-leave .modal-dialog {\n    -webkit-transform: translate3d(0, -50px, 0);\n            transform: translate3d(0, -50px, 0); }\n\n.modal-dimmer.fade-transition {\n  background-color: rgba(0, 0, 0, 0.6);\n  -webkit-transition: background-color 300ms ease 0s;\n  transition: background-color 300ms ease 0s; }\n\n.modal-dimmer.fade-enter, .modal-dimmer.fade-leave {\n  background-color: transparent; }\n", ""]);

	// exports


/***/ },
/* 44 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="modal" v-show="show" transition="fade" v-on:click="tryToClose">

	//   <div class="modal-dialog" v-on:click.stop>

	//     <slot name="header"></slot>

	//     <slot name="body"></slot>

	//     <slot name="footer"></slot>

	//   </div>

	// </div>

	// <div class="modal-dimmer" v-show="show" transition="fade"></div>

	// </template>

	// <style lang="sass">

	// $transition-duration: 300ms;

	// .modal {

	//   &.fade-transition {

	//     display: block;

	//     opacity: 1;

	//     transition: opacity $transition-duration ease 0s;

	//     .modal-dialog {

	//       transform: translate3d(0, 0, 0);

	//       transition: transform $transition-duration ease 0s;

	//     }

	//   }

	//   &.fade-enter, &.fade-leave {

	//     opacity: 0;

	//     .modal-dialog {

	//       transform: translate3d(0, -50px, 0);

	//     }

	//   }

	// }

	// .modal-dimmer {

	//   &.fade-transition {

	//     background-color: rgba(0, 0, 0, .6);

	//     transition: background-color $transition-duration ease 0s;

	//   }

	//   &.fade-enter, &.fade-leave {

	//     background-color: rgba(0, 0, 0, 0);

	//   }

	// }

	// </style>

	// <script>

	exports.default = {

	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    closeViaDimmer: {
	      type: Boolean,
	      default: false
	    }
	  },

	  methods: {
	    tryToClose: function tryToClose(event) {
	      if (this.closeViaDimmer) {
	        this.show = false;
	      }
	    }
	  }

	};

	// </script>

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = "<div class=\"modal\" v-show=\"show\" transition=\"fade\" v-on:click=\"tryToClose\">\r\n  <div class=\"modal-dialog\" v-on:click.stop>\r\n    <slot name=\"header\"></slot>\r\n    <slot name=\"body\"></slot>\r\n    <slot name=\"footer\"></slot>\r\n  </div>\r\n</div>\r\n<div class=\"modal-dimmer\" v-show=\"show\" transition=\"fade\"></div>";

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(47)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(48)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\alert.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _modal = __webpack_require__(41);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { modal: _modal2.default },

	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      default: 'Message:'
	    }
	  },

	  methods: {
	    closeModal: function closeModal() {
	      this.show = false;
	    }
	  }

	};

	// </script>
	// <template>

	// <modal v-bind:show.sync="show">

	//   <div class="modal-header" slot="header">

	//     <div class="title">

	//       {{ title }}

	//       <span class="fa fa-close close" v-on:click="closeModal"></span>

	//     </div>

	//   </div>

	//   <div class="modal-body" slot="body">

	//     <slot></slot>

	//   </div>

	// </modal>

	// </template>

	// <script>

/***/ },
/* 48 */
/***/ function(module, exports) {

	module.exports = "<modal v-bind:show.sync=\"show\">\r\n  <div class=\"modal-header\" slot=\"header\">\r\n    <div class=\"title\">\r\n      {{ title }}\r\n      <span class=\"fa fa-close close\" v-on:click=\"closeModal\"></span>\r\n    </div>\r\n  </div>\r\n  <div class=\"modal-body\" slot=\"body\">\r\n    <slot></slot>\r\n  </div>\r\n</modal>";

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(50)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(51)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\confirm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _modal = __webpack_require__(41);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { modal: _modal2.default },

	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    question: {
	      type: String,
	      default: 'Question:'
	    }
	  },

	  methods: {
	    closeModal: function closeModal() {
	      this.show = false;
	    },
	    confirmOK: function confirmOK() {
	      this.$dispatch('modal-confrim-ok');
	    }
	  }

	};

	// </script>
	// <template>

	// <modal v-bind:show.sync="show">

	//   <div class="modal-header" slot="header">

	//     <div class="title">{{ question }}</div>

	//   </div>

	//   <div class="modal-body" slot="body">

	//     <slot></slot>

	//   </div>

	//   <div class="modal-footer cf" slot="footer">

	//     <div class="fr">

	//       <button class="btn radius" v-on:click="closeModal">取消</button>

	//       <button class="btn btn-dark radius" v-on:click="confirmOK">确定</button>

	//     </div>

	//   </div>

	// </modal>

	// </template>

	// <script>

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = "<modal v-bind:show.sync=\"show\">\r\n  <div class=\"modal-header\" slot=\"header\">\r\n    <div class=\"title\">{{ question }}</div>\r\n  </div>\r\n  <div class=\"modal-body\" slot=\"body\">\r\n    <slot></slot>\r\n  </div>\r\n  <div class=\"modal-footer cf\" slot=\"footer\">\r\n    <div class=\"fr\">\r\n      <button class=\"btn radius\" v-on:click=\"closeModal\">取消</button>\r\n      <button class=\"btn btn-dark radius\" v-on:click=\"confirmOK\">确定</button>\r\n    </div>\r\n  </div>\r\n</modal>";

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(53)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(54)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\prompt.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _modal = __webpack_require__(41);

	var _modal2 = _interopRequireDefault(_modal);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { modal: _modal2.default },

	  props: {
	    show: {
	      type: Boolean,
	      default: false
	    },
	    title: {
	      type: String,
	      default: 'Input:'
	    }
	  },

	  data: function data() {
	    return {
	      output: ''
	    };
	  },

	  methods: {
	    closeModal: function closeModal() {
	      this.show = false;
	    },
	    promptOK: function promptOK() {
	      this.$dispatch('modal-prompt-ok', this.output);
	      this.output = '';
	    }
	  }

	};

	// </script>
	// <template>

	// <modal v-bind:show.sync="show">

	//   <div class="modal-header" slot="header">

	//     <div class="title">{{ title }}</div>

	//   </div>

	//   <div class="modal-body" slot="body">

	//     <input type="text" v-model="output" v-on:keydown.enter="promptOK">

	//   </div>

	//   <div class="modal-footer cf" slot="footer">

	//     <div class="fr">

	//       <button class="btn radius" v-on:click="closeModal">取消</button>

	//       <button class="btn btn-dark radius" v-on:click="promptOK">确定</button>

	//     </div>

	//   </div>

	// </modal>

	// </template>

	// <script>

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = "<modal v-bind:show.sync=\"show\">\r\n  <div class=\"modal-header\" slot=\"header\">\r\n    <div class=\"title\">{{ title }}</div>\r\n  </div>\r\n  <div class=\"modal-body\" slot=\"body\">\r\n    <input type=\"text\" v-model=\"output\" v-on:keydown.enter=\"promptOK\">\r\n  </div>\r\n  <div class=\"modal-footer cf\" slot=\"footer\">\r\n    <div class=\"fr\">\r\n      <button class=\"btn radius\" v-on:click=\"closeModal\">取消</button>\r\n      <button class=\"btn btn-dark radius\" v-on:click=\"promptOK\">确定</button>\r\n    </div>\r\n  </div>\r\n</modal>";

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"box margin-top padding\">\r\n      <button class=\"btn btn-dark float radius\" type=\"button\" v-on:click=\"openModal\">open modal</button>\r\n      <button class=\"btn btn-primary float radius\" type=\"button\" v-on:click=\"openAlert\">open alert</button>\r\n      <button class=\"btn btn-danger float radius\" type=\"button\" v-on:click=\"openConfirm\">open confirm</button>\r\n      <button class=\"btn btn-info float radius\" type=\"button\" v-on:click=\"openPrompt\">open prompt</button>\r\n    </div>\r\n  </div>\r\n\r\n  <modal v-bind:show.sync=\"showModal\" close-via-dimmer>\r\n    <div class=\"modal-header\" slot=\"header\">\r\n      <div class=\"title\">\r\n        基础模态框\r\n        <span class=\"fa fa-close close\" v-on:click=\"closeModal\"></span>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-body\" slot=\"body\">\r\n      <p>这是一个最基础的模态框，本身不包含header，body或者footer，而且默认不能通过点击dimmer关闭，除非传递一个属性close-via-dimmer</p>\r\n    </div>\r\n    <div class=\"modal-footer cf\" slot=\"footer\">\r\n      <div class=\"fr\">\r\n        <button class=\"btn radius\">取消</button>\r\n        <button class=\"btn btn-dark radius\">确定</button>\r\n      </div>\r\n    </div>\r\n  </modal>\r\n\r\n  <modal-alert v-bind:show.sync=\"showAlert\" title=\"Alert modal\">\r\n    <p>This is message alert...</p>\r\n  </modal-alert>\r\n\r\n  <modal-confirm v-bind:show.sync=\"showConfirm\" question=\"Are you sure to delete this item?\" v-on:modal-confrim-ok=\"confirmOK\">\r\n    <p>Warning: Once you delete, you can never find it back.</p>\r\n  </modal-confirm>\r\n\r\n  <modal-prompt v-bind:show.sync=\"showPrompt\" title=\"Input what you want:\" v-on:modal-prompt-ok=\"promptOK\"></modal-prompt>\r\n</div>";

/***/ }
]));