webpackJsonp([16],{

/***/ 90:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(91)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(92)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pageTable.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 91:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _pagination = __webpack_require__(94);

	var _pagination2 = _interopRequireDefault(_pagination);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { pagination: _pagination2.default },

	  data: function data() {
	    return {
	      page: 2,
	      total: 10
	    };
	  },

	  methods: {
	    link: function link(page) {
	      return '/table?page=' + page;
	    }
	  },

	  ready: function ready() {
	    NProgress.done();
	    this.$dispatch('content-change');
	  }
	};

	// </script>
	// <template lang="jade">

	// .grid.margin-top

	//   .u-sm-16

	//     table.table.table-border.table-hover

	//       thead

	//         tr

	//           th 1

	//           th 1

	//           th 1

	//           th 1

	//           th 1

	//       tbody

	//         tr

	//           td a

	//           td a

	//           td a

	//           td a

	//           td a

	//   .u-sm-16

	//     pagination(v-bind:page="page" v-bind:total="total", v-bind:link="link")

	// </template>

	// <script>

/***/ },

/***/ 92:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\"><div class=\"u-sm-16\"><table class=\"table table-border table-hover\"><thead><tr><th>1</th><th>1</th><th>1</th><th>1</th><th>1</th></tr></thead><tbody><tr><td>a</td><td>a</td><td>a</td><td>a</td><td>a</td></tr></tbody></table></div><div class=\"u-sm-16\"><pagination v-bind:page=\"page\" v-bind:total=\"total\" v-bind:link=\"link\"></pagination></div></div>";

/***/ },

/***/ 94:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(96)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(97)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\pagination.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 96:
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// ul.pagination

	//   li

	//     a(v-link="link(page-1)")

	//       i.fa.fa-chevron-left

	//   li(v-for="p in pages" track-by="$index" v-bind:class="{'active': p === page}")

	//     a(href="javascript:;" v-if="p === -1") ...

	//     a(v-link="link(p)" v-else) {{ p }}

	//   li

	//     a(v-link="link(page+1)")

	//       i.fa.fa-chevron-right

	// </template>

	// <script>

	/**
	 * Create Pagination
	 * @param {Number} total 总页数
	 * @param {Number} current 当前页页码
	 */
	function repaint(total, current) {

	  var pages = [];

	  if (total < 1) {
	    pages.push(1);
	    return pages;
	  }

	  if (total < 9) {
	    for (var i = 0; i < total; ++i) {
	      pages.push(i + 1);
	    }
	  } else {
	    if (current < 5) {
	      if (current === 4) {
	        for (var i = 0; i < 5; ++i) {
	          pages.push(i + 1);
	        }
	      } else {
	        for (var i = 0; i < 4; ++i) {
	          pages.push(i + 1);
	        }
	      }
	      pages.push(-1);
	      pages.push(total - 1);
	      pages.push(total);
	    } else if (current > total - 4) {
	      pages.push(1);
	      pages.push(2);
	      pages.push(-1);
	      if (current === total - 3) {
	        for (var i = -1; i < 4; ++i) {
	          pages.push(total - 3 + i);
	        }
	      } else {
	        for (var i = 0; i < 4; ++i) {
	          pages.push(total - 3 + i);
	        }
	      }
	    } else {
	      pages.push(1);
	      pages.push(-1);
	      for (var i = -2; i < 3; ++i) {
	        pages.push(current + i);
	      }
	      pages.push(-1);
	      pages.push(total);
	    }
	  }

	  return pages;
	};

	exports.default = {
	  props: {
	    page: {
	      type: Number,
	      default: 1
	    },
	    total: {
	      type: Number,
	      default: 0
	    },
	    link: {
	      type: Function,
	      default: function _default(p) {
	        return p;
	      }
	    }
	  },

	  computed: {
	    pages: function pages() {
	      return repaint(this.total, this.page);
	    }
	  }
	};

	// </script>

/***/ },

/***/ 97:
/***/ function(module, exports) {

	module.exports = "<ul class=\"pagination\"><li><a v-link=\"link(page-1)\"><i class=\"fa fa-chevron-left\"></i></a></li><li v-for=\"p in pages\" track-by=\"$index\" v-bind:class=\"{'active': p === page}\"><a href=\"javascript:;\" v-if=\"p === -1\">...</a><a v-link=\"link(p)\" v-else=\"v-else\">{{ p }}</a></li><li><a v-link=\"link(page+1)\"><i class=\"fa fa-chevron-right\"></i></a></li></ul>";

/***/ }

});