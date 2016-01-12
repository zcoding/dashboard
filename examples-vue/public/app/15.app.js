webpackJsonp([15],{

/***/ 74:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(75)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(76)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pageScrollbar.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 75:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .grid.margin-top

	//   .u-sm-8

	//     .box.padding(style="height:300px;overflow-y:auto;" v-el:box)

	//       p 0

	//       p 1

	//       p 2

	//       p 3

	//       p 4

	//       p 5

	//       p 6

	//       p 7

	//       p 8

	//       p 9

	//       p 10

	//       p 11

	//       p 12

	//       p 13

	//       p 14

	//       p 15

	//       p 16

	//       p 17

	//       p 18

	//       p 19

	// </template>

	// <script>

	exports.default = {
	  ready: function ready() {
	    NProgress.done();
	    this.$dispatch('content-change');
	    $(this.$els.box).scrollbar();
	  }
	};

	// </script>

/***/ },

/***/ 76:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\"><div class=\"u-sm-8\"><div style=\"height:300px;overflow-y:auto;\" v-el:box=\"v-el:box\" class=\"box padding\"><p>0</p><p>1</p><p>2</p><p>3</p><p>4</p><p>5</p><p>6</p><p>7</p><p>8</p><p>9</p><p>10</p><p>11</p><p>12</p><p>13</p><p>14</p><p>15</p><p>16</p><p>17</p><p>18</p><p>19</p></div></div></div>";

/***/ }

});