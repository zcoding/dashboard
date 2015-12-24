webpackJsonp([9],{

/***/ 59:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(60)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(61)
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

	var _tab = __webpack_require__(63);

	var _tab2 = _interopRequireDefault(_tab);

	var _tabitem = __webpack_require__(67);

	var _tabitem2 = _interopRequireDefault(_tabitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>

	// <div class="grid">

	//   <div class="u-sm-16">

	//     <div class="margin-top">

	//       <tab>

	//         <tab-item menu="Home">

	//           <p>content 1</p>

	//           <p>content 1</p>

	//           <p>content 1</p>

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
	    return {
	      tabs: []
	    };
	  }
	};

	// </script>

/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"margin-top\">\r\n      <tab>\r\n        <tab-item menu=\"Home\">\r\n          <p>content 1</p>\r\n          <p>content 1</p>\r\n          <p>content 1</p>\r\n        </tab-item>\r\n      </tab>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ },

/***/ 63:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(64)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(65)
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

/***/ 64:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="tab">

	//   <ul class="nav">

	//     <li v-for="item in items"><a href="javascript:;">{{ item.menu }}</a></li>

	//     <div class="indicator"></div>

	//   </ul>

	//   <div class="tab-content">

	//     <slot></slot>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  props: {},

	  data: function data() {
	    return {
	      items: []
	    };
	  }
	};

	// </script>

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab\">\r\n  <ul class=\"nav\">\r\n    <li v-for=\"item in items\"><a href=\"javascript:;\">{{ item.menu }}</a></li>\r\n    <div class=\"indicator\"></div>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

/***/ },

/***/ 67:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(68)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(69)
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

/***/ 68:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="tab-pane active">

	//   <slot></slot>

	// </div>

	// </template>

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
	  }
	};

	// </script>

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab-pane active\">\r\n  <slot></slot>\r\n</div>";

/***/ }

});