webpackJsonp([5],{

/***/ 37:
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

/***/ 38:
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

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(67)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\tabs.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 60:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _tab = __webpack_require__(61);

	var _tab2 = _interopRequireDefault(_tab);

	var _tabitem = __webpack_require__(64);

	var _tabitem2 = _interopRequireDefault(_tabitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>

	// <div class="grid">

	//   <div class="u-sm-16">

	//     <div class="margin-top">

	//       <tab v-bind:active="1">

	//         <tab-item menu="Home">

	//           <p>content 1</p>

	//         </tab-item>

	//         <tab-item menu="Button">

	//           <p>content 2</p>

	//           <p>content 2</p>

	//         </tab-item>

	//         <tab-item menu="Form">

	//           <p>content 3</p>

	//           <p>content 3</p>

	//           <p>content 3</p>

	//         </tab-item>

	//         <tab-item menu="Tab">

	//           <p>content 4</p>

	//           <p>content 4</p>

	//           <p>content 4</p>

	//           <p>content 4</p>

	//         </tab-item>

	//         <tab-item menu="Panel">

	//           <p>content 5</p>

	//           <p>content 5</p>

	//           <p>content 5</p>

	//           <p>content 5</p>

	//           <p>content 5</p>

	//         </tab-item>

	//       </tab>

	//     </div>

	//   </div>

	//   <div class="u-sm-16">

	//     <div class="margin-top">

	//       <tab color="info">

	//         <tab-item menu="Home">

	//           <p>content 1</p>

	//         </tab-item>

	//         <tab-item menu="Button">

	//           <p>content 2</p>

	//           <p>content 2</p>

	//         </tab-item>

	//         <tab-item menu="Form">

	//           <p>content 3</p>

	//           <p>content 3</p>

	//           <p>content 3</p>

	//         </tab-item>

	//         <tab-item menu="Tab">

	//           <p>content 4</p>

	//           <p>content 4</p>

	//           <p>content 4</p>

	//           <p>content 4</p>

	//         </tab-item>

	//       </tab>

	//     </div>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  components: { tab: _tab2.default, tabItem: _tabitem2.default },

	  data: function data() {
	    return {};
	  }
	};

	// </script>

/***/ },

/***/ 61:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(62)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(63)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\tab.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 62:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="tab" v-bind:class="[colorStyle]">

	//   <ul class="nav">

	//     <li v-for="item in items"

	//       v-bind:class="{'active': active === $index}"

	//       v-bind:style="{width: itemWidth}">

	//       <a href="javascript:;" v-on:click.prevent="selectItem($index, item)">{{ item.menu }}</a>

	//     </li>

	//     <div class="indicator" v-bind:style="{width: itemWidth, left: positionLeft}"></div>

	//   </ul>

	//   <div class="tab-content">

	//     <slot></slot>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  props: {
	    active: {
	      type: Number,
	      default: 0
	    },
	    color: {
	      type: String,
	      default: 'primary'
	    }
	  },

	  data: function data() {
	    return {
	      items: []
	    };
	  },

	  computed: {
	    itemWidth: function itemWidth() {
	      return this.items.length > 0 ? 100 / this.items.length + '%' : '';
	    },
	    positionLeft: function positionLeft() {
	      if (this.items.length === 0) {
	        return '';
	      }
	      return 100 / this.items.length * this.active + '%';
	    },
	    colorStyle: function colorStyle() {
	      return 'tab-' + this.color;
	    }
	  },

	  methods: {
	    selectItem: function selectItem(index, item) {
	      this.active = index;
	    }
	  }

	};

	// </script>

/***/ },

/***/ 63:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab\" v-bind:class=\"[colorStyle]\">\r\n  <ul class=\"nav\">\r\n    <li v-for=\"item in items\"\r\n      v-bind:class=\"{'active': active === $index}\"\r\n      v-bind:style=\"{width: itemWidth}\">\r\n      <a href=\"javascript:;\" v-on:click.prevent=\"selectItem($index, item)\">{{ item.menu }}</a>\r\n    </li>\r\n    <div class=\"indicator\" v-bind:style=\"{width: itemWidth, left: positionLeft}\"></div>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },

/***/ 64:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(72)
	module.exports = __webpack_require__(65)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(66)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\tabitem.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 65:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="tab-pane" v-show="index === $parent.active" transition="move">

	//   <slot></slot>

	// </div>

	// </template>

	// <style lang="sass">

	// .tab .nav+.tab-content .tab-pane {

	//   &.move-transition {

	//     display: block;

	//   }

	// }

	// </style>

	// <script>

	exports.default = {

	  props: {
	    menu: {
	      type: String,
	      required: true
	    }
	  },

	  created: function created() {
	    this.$parent.items.push({
	      menu: this.menu
	    });
	    this.index = this.$parent.items.length - 1;
	  },
	  data: function data() {
	    return {
	      index: 0
	    };
	  },

	  transitions: {
	    move: {
	      css: false
	    }
	  }

	};

	// </script>

/***/ },

/***/ 66:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab-pane\" v-show=\"index === $parent.active\" transition=\"move\">\r\n  <slot></slot>\r\n</div>";

/***/ },

/***/ 67:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"margin-top\">\r\n      <tab v-bind:active=\"1\">\r\n        <tab-item menu=\"Home\">\r\n          <p>content 1</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Button\">\r\n          <p>content 2</p>\r\n          <p>content 2</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Form\">\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Tab\">\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Panel\">\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n        </tab-item>\r\n      </tab>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"margin-top\">\r\n      <tab color=\"info\">\r\n        <tab-item menu=\"Home\">\r\n          <p>content 1</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Button\">\r\n          <p>content 2</p>\r\n          <p>content 2</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Form\">\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Tab\">\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n        </tab-item>\r\n      </tab>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ },

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(73);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(38)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ea0cadea&file=tabitem.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabitem.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-ea0cadea&file=tabitem.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./tabitem.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(37)();
	// imports


	// module
	exports.push([module.id, ".tab .nav + .tab-content .tab-pane.move-transition {\n  display: block; }\n", ""]);

	// exports


/***/ }

});