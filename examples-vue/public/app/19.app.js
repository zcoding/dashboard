webpackJsonp([19],{

/***/ 83:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(84)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(85)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\page404.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 84:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .margin-top

	//   h1.text-center Page not found.

	// </template>

	// <script>

	exports.default = {

	  route: {
	    canReuse: false // 必须指定为不可重用
	  },

	  ready: function ready() {
	    NProgress.done();
	  }
	};

	// </script>

/***/ },

/***/ 85:
/***/ function(module, exports) {

	module.exports = "<div class=\"margin-top\"><h1 class=\"text-center\">Page not found.</h1></div>";

/***/ }

});