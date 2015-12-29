webpackJsonp([6],{

/***/ 72:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(73)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(78)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\scrollbars.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 73:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _box = __webpack_require__(74);

	var _box2 = _interopRequireDefault(_box);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { box: _box2.default }

	};

	// </script>
	// <template>

	// <div class="grid">

	//   <div class="u-sm-8">

	//     <box v-bind:height="300">

	//       <p>0</p>

	//       <p>1</p>

	//       <p>2</p>

	//       <p>3</p>

	//       <p>4</p>

	//       <p>5</p>

	//       <p>6</p>

	//       <p>7</p>

	//       <p>8</p>

	//       <p>9</p>

	//       <p>10</p>

	//       <p>11</p>

	//       <p>12</p>

	//       <p>13</p>

	//       <p>14</p>

	//       <p>15</p>

	//       <p>16</p>

	//       <p>17</p>

	//       <p>18</p>

	//       <p>19</p>

	//     </box>

	//   </div>

	// </div>

	// </template>

	// <script>

/***/ },

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(77)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\box.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 75:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _dom = __webpack_require__(76);

	var _dom2 = _interopRequireDefault(_dom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  ready: function ready() {
	    var $box = this.$els.box,
	        $scrollbar = this.$els.scrollbar;
	    var $parent = $box.parentElement;
	    this.contentHeight = $box.scrollHeight;
	    this.style.overflow = 'hidden';
	    var boxStyles = _dom2.default.getStyles($box),
	        parentStyles = _dom2.default.getStyles($parent);
	    var paddingRight = parentStyles.getPropertyValue('padding-right') || parentStyles['padding-right'];
	    this.scrollbarStyle = {
	      top: $box.offsetTop + 'px',
	      right: paddingRight,
	      height: this.scrollbarHeight + 'px'
	    };
	    this.$nextTick(function () {
	      $scrollbar.offsetWidth;
	      $scrollbar.classList.add('active');
	    });
	  },

	  props: {
	    height: {
	      type: Number,
	      default: 1,
	      required: true
	    }
	  },

	  data: function data() {
	    var height = this.height + 'px';
	    return {
	      style: {
	        overflow: 'auto',
	        height: height
	      },
	      scrollbarStyle: {
	        top: '0px',
	        right: '0px',
	        height: '0px'
	      },
	      contentHeight: 0
	    };
	  },

	  computed: {
	    maxMoveHeight: function maxMoveHeight() {
	      return this.contentHeight - this.height;
	    },
	    scrollbarHeight: function scrollbarHeight() {
	      return this.height / this.contentHeight * this.height;
	    }
	  },

	  methods: {
	    scroll: function scroll(event) {
	      var delta = event.wheelDeltaY < 0 ? -50 : 50;
	      var $box = this.$els.box;
	      var move = $box.scrollTop - delta;
	      move = move < 0 ? 0 : move > this.maxMoveHeight ? this.maxMoveHeight : move;
	      $box.scrollTop = move;

	      var scrollbarMove = move / this.contentHeight * this.height;
	      this.$els.scrollbar.style.top = this.$els.box.offsetTop + scrollbarMove + 'px';

	      if (move > 0 && move < this.maxMoveHeight) {
	        event.preventDefault();
	      }
	    }
	  }

	};

	// </script>
	// <template>

	// <div class="box padding scroll-y margin-top" v-on:mousewheel="scroll" v-bind:style="style" v-el:box>

	//   <slot></slot>

	// </div>

	// <div class="scrollbar dark" v-bind:style="scrollbarStyle" v-el:scrollbar></div>

	// </template>

	// <script>

/***/ },

/***/ 76:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  getStyles: function getStyles(element) {
	    var view = element.ownerDocument.defaultView;
	    if (!view.opener) {
	      view = window;
	    }
	    return view.getComputedStyle(element);
	  },
	  setStyles: function setStyles(element, styles) {
	    for (var s in styles) {
	      if (styles.hasOwnProperty(s)) {
	        element.style[s] = styles[s];
	      }
	    }
	  }
	};

/***/ },

/***/ 77:
/***/ function(module, exports) {

	module.exports = "<div class=\"box padding scroll-y margin-top\" v-on:mousewheel=\"scroll\" v-bind:style=\"style\" v-el:box>\r\n  <slot></slot>\r\n</div>\r\n<div class=\"scrollbar dark\" v-bind:style=\"scrollbarStyle\" v-el:scrollbar></div>";

/***/ },

/***/ 78:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-8\">\r\n    <box v-bind:height=\"300\">\r\n      <p>0</p>\r\n      <p>1</p>\r\n      <p>2</p>\r\n      <p>3</p>\r\n      <p>4</p>\r\n      <p>5</p>\r\n      <p>6</p>\r\n      <p>7</p>\r\n      <p>8</p>\r\n      <p>9</p>\r\n      <p>10</p>\r\n      <p>11</p>\r\n      <p>12</p>\r\n      <p>13</p>\r\n      <p>14</p>\r\n      <p>15</p>\r\n      <p>16</p>\r\n      <p>17</p>\r\n      <p>18</p>\r\n      <p>19</p>\r\n    </box>\r\n  </div>\r\n</div>";

/***/ }

});