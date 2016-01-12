webpackJsonp([17],{

/***/ 77:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(78)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(79)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pageColor.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 78:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .grid.margin-top

	//   .u-sm-16

	//     .box.padding

	//       p.text-primary text color: primary

	//       p.text-secondary text color: secondary

	//       p.text-success text color: success

	//       p.text-danger text color: danger

	//       p.text-warning text color: warning

	//       p.text-tips text color: tips

	//       p.text-info text color: info

	//       p.text-dark text color: dark

	// </template>

	// <script>

	exports.default = {
	  ready: function ready() {
	    NProgress.done();
	  }
	};

	// </script>

/***/ },

/***/ 79:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\"><div class=\"u-sm-16\"><div class=\"box padding\"><p class=\"text-primary\">text color: primary</p><p class=\"text-secondary\">text color: secondary</p><p class=\"text-success\">text color: success</p><p class=\"text-danger\">text color: danger</p><p class=\"text-warning\">text color: warning</p><p class=\"text-tips\">text color: tips</p><p class=\"text-info\">text color: info</p><p class=\"text-dark\">text color: dark</p></div></div></div>";

/***/ }

});