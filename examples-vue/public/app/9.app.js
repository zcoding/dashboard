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

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { tab: _tab2.default },

	  data: function data() {
	    return {
	      tabs: []
	    };
	  }
	};

	// </script>
	// <template>

	// <div class="grid">

	//   <div class="u-sm-16">

	//     <div class="margin-top">

	//       <tab>

	//         <template slot="menu">

	//           <li class="active"><a href="javascript:;">Home</a></li>

	//         </template>

	//         <template slot="content">

	//           <div class="tab-pane active">

	//             <p>content 1</p>

	//             <p>content 1</p>

	//             <p>content 1</p>

	//           </div>

	//         </template>

	//       </tab>

	//     </div>

	//   </div>

	// </div>

	// </template>

	// <script>

/***/ },

/***/ 61:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"margin-top\">\r\n      <tab>\r\n        <template slot=\"menu\">\r\n          <li class=\"active\"><a href=\"javascript:;\">Home</a></li>\r\n        </template>\r\n        <template slot=\"content\">\r\n          <div class=\"tab-pane active\">\r\n            <p>content 1</p>\r\n            <p>content 1</p>\r\n            <p>content 1</p>\r\n          </div>\r\n        </template>\r\n      </tab>\r\n    </div>\r\n  </div>\r\n</div>";

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

	//     <slot name="menu"></slot>

	//     <div class="indicator"></div>

	//   </ul>

	//   <div class="tab-content">

	//     <slot name="content"></slot>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  props: {}

	};

	// </script>

/***/ },

/***/ 65:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab\">\r\n  <ul class=\"nav\">\r\n    <slot name=\"menu\"></slot>\r\n    <div class=\"indicator\"></div>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <slot name=\"content\"></slot>\r\n  </div>\r\n</div>";

/***/ }

});