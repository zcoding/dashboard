webpackJsonp([9],{

/***/ 23:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(24)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(25)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pageHome.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 24:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .grid.margin-top

	//   .u-sm-16

	//     .box.padding

	//       h1 Hello, Dashboard!

	// </template>

	// <script>

	exports.default = {
	  ready: function ready() {
	    this.$dispatch('content-change');
	    NProgress.done();
	  }
	};

	// </script>

/***/ },

/***/ 25:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\"><div class=\"u-sm-16\"><div class=\"box padding\"><h1>Hello, Dashboard!</h1></div></div></div>";

/***/ }

});