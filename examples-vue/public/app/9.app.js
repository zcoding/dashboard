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

	//       <tab v-bind:active="2">

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

	module.exports = "<div class=\"grid\">\r\n  <div class=\"u-sm-16\">\r\n    <div class=\"margin-top\">\r\n      <tab v-bind:active=\"2\">\r\n        <tab-item menu=\"Home\">\r\n          <p>content 1</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Button\">\r\n          <p>content 2</p>\r\n          <p>content 2</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Form\">\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n          <p>content 3</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Tab\">\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n          <p>content 4</p>\r\n        </tab-item>\r\n        <tab-item menu=\"Panel\">\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n          <p>content 5</p>\r\n        </tab-item>\r\n      </tab>\r\n    </div>\r\n  </div>\r\n</div>";

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

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="tab">

	//   <ul class="nav">

	//     <li v-for="item in items"

	//       v-bind:class="{'active': active === $index}"

	//       v-bind:style="{width: itemWidth}">

	//       <a href="javascript:;" v-on:click.prevent="selectItem($index, item)">{{ item.menu }}</a>

	//     </li>

	//     <div class="indicator" v-bind:style="{width: itemWidth, left: offsetLeft}"></div>

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
	    offsetLeft: function offsetLeft() {
	      if (this.items.length === 0) {
	        return '';
	      }
	      return 100 / this.items.length * this.active + '%';
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

/***/ 65:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab\">\r\n  <ul class=\"nav\">\r\n    <li v-for=\"item in items\"\r\n      v-bind:class=\"{'active': active === $index}\"\r\n      v-bind:style=\"{width: itemWidth}\">\r\n      <a href=\"javascript:;\" v-on:click.prevent=\"selectItem($index, item)\">{{ item.menu }}</a>\r\n    </li>\r\n    <div class=\"indicator\" v-bind:style=\"{width: itemWidth, left: offsetLeft}\"></div>\r\n  </ul>\r\n  <div class=\"tab-content\">\r\n    <slot></slot>\r\n  </div>\r\n</div>";

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

	// <div class="tab-pane" v-bind:class="{'active': index === $parent.active}">

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
	    this.index = this.$parent.items.length - 1;
	  },
	  data: function data() {
	    return {
	      index: 0
	    };
	  }
	};

	// </script>

/***/ },

/***/ 69:
/***/ function(module, exports) {

	module.exports = "<div class=\"tab-pane\" v-bind:class=\"{'active': index === $parent.active}\">\r\n  <slot></slot>\r\n</div>";

/***/ }

});