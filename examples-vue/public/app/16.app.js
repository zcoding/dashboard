webpackJsonp([16],{

/***/ 86:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(88)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(87)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pagePanel.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 87:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\"><div class=\"u-sm-8\"><div class=\"panel panel-primary\"><div id=\"collapse\" data-collapse-target=\"#collapse-body\" class=\"panel-header\">title</div><div id=\"collapse-body\" class=\"panel-body\"><p>content</p><p>content</p><p>content</p></div><div class=\"panel-footer\">footer</div></div></div></div>";

/***/ },

/***/ 88:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .grid.margin-top

	//   .u-sm-8

	//     .panel.panel-primary

	//       .panel-header#collapse(data-collapse-target="#collapse-body") title

	//       .panel-body#collapse-body

	//         p content

	//         p content

	//         p content

	//       .panel-footer footer

	// </template>

	// <script>

	exports.default = {
	  ready: function ready() {
	    NProgress.done();
	    $('#collapse').collapse({
	      speed: 100
	    });
	  }
	};

	// </script>

/***/ }

});