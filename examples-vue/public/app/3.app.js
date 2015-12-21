webpackJsonp([3],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(14)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(16)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\forms.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _taginput = __webpack_require__(18);

	var _taginput2 = _interopRequireDefault(_taginput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      tags: ['danger', 'warning']
	    };
	  },

	  components: {
	    tagInput: _taginput2.default
	  }

	};

	// </script>
	// <template lang="jade">

	// .grid.padding

	//   .u-sm-8

	//     .box.padding

	//       form(action="/").form

	//         fieldset

	//           .form-control

	//             label(for="name") Name

	//             input#name(type="text" placeholder="input your name")

	//           .form-control

	//             label(for="password") Password

	//             input#password(type="password" placeholder="input password")

	//           .form-control

	//             label(for="number") Number

	//             input#number(type="number" placeholder="input number")

	//           .form-control

	//             label(for="email") Email

	//             input#email(type="email" placeholder="input email")

	//           .form-control

	//             label(for="url") URL

	//             input#url(type="url" placeholder="input url")

	//           .form-control

	//             label(for="select") Select

	//             select#select(name="select")

	//               option(value="1") Option1

	//               option(value="2") Option2

	//               option(value="3") Option3

	//           .form-control

	//             label(for="textarea") Textarea

	//             textarea#textarea(rows="5")

	//           .form-control

	//             label.field-check

	//               input(type="checkbox" name="check1")

	//               | <i></i>Option1

	//             label.field-check

	//               input(type="checkbox" name="check1")

	//               | <i></i>Option2

	//             label.field-check

	//               input(type="checkbox" name="check1")

	//               | <i></i>Option3

	//           .form-control

	//             label.field-radio

	//               input(type="radio" name="radio1")

	//               | <i></i>Option1

	//             label.field-radio

	//               input(type="radio" name="radio1")

	//               | <i></i>Option2

	//             label.field-radio

	//               input(type="radio" name="radio1")

	//               | <i></i>Option3

	//           .form-control

	//             label.field-switch

	//               input(type="checkbox" name="check2")

	//               | <i></i>A

	//             label.field-switch

	//               input(type="checkbox" name="check2")

	//               | <i></i>B

	//             label.field-switch

	//               input(type="checkbox" name="check2")

	//               | <i></i>C

	//           .form-control

	//             label.field-switch

	//               input(type="radio" name="radio2")

	//               | <i></i>A1

	//             label.field-switch

	//               input(type="radio" name="radio2")

	//               | <i></i>A2

	//             label.field-switch

	//               input(type="radio" name="radio2")

	//               | <i></i>A3

	//   .u-sm-8

	//     .box.padding

	//       form(action="/").form

	//         fieldset

	//           .form-control

	//             label(for="name2") Name

	//             input(type="text" placeholder="input your name")#name2.field-md

	//           .form-control

	//             label(for="password2") Password

	//             input(type="password" placeholder="input password")#password2.field-md

	//           .form-control

	//             label(for="content2") Textarea

	//             textarea#content2(rows="5").field-md

	//   .u-sm-8

	//     .box.padding

	//       form(action="/").form

	//         fieldset

	//           .form-control.u-sm-8

	//             label(for="name") Name

	//             input#name(type="text" placeholder="input your name")

	//           .form-control.u-sm-8

	//             label(for="password") Password

	//             input#password(type="password" placeholder="input password")

	//           .form-control.u-sm-8

	//             label(for="number") Number

	//             input#number(type="number" placeholder="input number")

	//           .form-control.u-sm-8

	//             label(for="email") Email

	//             input#email(type="email" placeholder="input email")

	//           .form-control.u-sm-8

	//             label(for="url") URL

	//             input#url(type="url" placeholder="input url")

	//           .form-control.u-sm-8

	//             label(for="select") Select

	//             select#select(name="select")

	//               option(value="1") Option1

	//               option(value="2") Option2

	//               option(value="3") Option3

	//           .form-control.u-sm-16

	//             label(for="textarea") Textarea

	//             textarea#textarea(rows="5")

	//   .u-sm-8

	//     .box.padding

	//       form(action="/").form

	//         fieldset

	//           .form-control.u-sm-8

	//             label(for="name") Name

	//             input#name(type="text" placeholder="input your name").field-md

	//           .form-control.u-sm-8

	//             label(for="password") Password

	//             input#password(type="password" placeholder="input password").field-md

	//           .form-control.u-sm-8

	//             label(for="number") Number

	//             input#number(type="number" placeholder="input number").field-md

	//           .form-control.u-sm-8

	//             label(for="email") Email

	//             input#email(type="email" placeholder="input email").field-md

	//           .form-control.u-sm-8

	//             label(for="url") URL

	//             input#url(type="url" placeholder="input url").field-md

	//           .form-control.u-sm-8

	//             label(for="select") Select

	//             select#select(name="select").field-md

	//               option(value="1") Option1

	//               option(value="2") Option2

	//               option(value="3") Option3

	//           .form-control.u-sm-16

	//             label(for="textarea") Textarea

	//             textarea#textarea(rows="5").field-md

	//   .u-sm-8

	//     .box.padding

	//       h3 .tag-input

	//       tag-input(v-bind:tags.sync="tags")

	// </template>

	// <script>

	// components

/***/ },
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	module.exports = "<div class=\"grid padding\"><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\"/></div><div class=\"form-control\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\"/></div><div class=\"form-control\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\"/></div><div class=\"form-control\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\"/></div><div class=\"form-control\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\"/></div><div class=\"form-control\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\"></textarea></div><div class=\"form-control\"><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option1</label><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option2</label><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option3</label></div><div class=\"form-control\"><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option1</label><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option2</label><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option3</label></div><div class=\"form-control\"><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>A</label><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>B</label><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>C</label></div><div class=\"form-control\"><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A1</label><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A2</label><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A3</label></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control\"><label for=\"name2\">Name</label><input type=\"text\" placeholder=\"input your name\" id=\"name2\" class=\"field-md\"/></div><div class=\"form-control\"><label for=\"password2\">Password</label><input type=\"password\" placeholder=\"input password\" id=\"password2\" class=\"field-md\"/></div><div class=\"form-control\"><label for=\"content2\">Textarea</label><textarea id=\"content2\" rows=\"5\" class=\"field-md\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control u-sm-8\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\"/></div><div class=\"form-control u-sm-8\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\"/></div><div class=\"form-control u-sm-8\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\"/></div><div class=\"form-control u-sm-8\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\"/></div><div class=\"form-control u-sm-8\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\"/></div><div class=\"form-control u-sm-8\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control u-sm-16\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control u-sm-8\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\" class=\"field-md\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control u-sm-16\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\" class=\"field-md\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><h3>.tag-input</h3><tag-input v-bind:tags.sync=\"tags\"></tag-input></div></div></div>";

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(19)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(20)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\taginput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .tag-input(v-on:click="handleClick")

	//   span.label.label-dark(v-for="tag in tags") {{ tag }} <i class="fa fa-close close"></i>

	//   span.holder(v-bind:style="holderStyle")

	//     input(type="text" v-model="newTag" v-el:input)

	//   .calculate-holder(v-el:calculator) {{ newTag }}

	// </template>

	// <script>

	exports.default = {

	  props: {
	    tags: {
	      type: Array,
	      required: true,
	      twoWay: true
	    }
	  },

	  data: function data() {
	    return {
	      newTag: '',
	      holderStyle: {
	        width: '2px'
	      }
	    };
	  },

	  methods: {
	    handleClick: function handleClick(event) {
	      // updateWidth();
	      // var offsetX = event.offsetX, offsetY = event.offsetY;
	      // var $children = $this.children('.label');
	      // var before = false;
	      // for (var i = 0; i < $children.length; ++i) {
	      //   var position = $children.eq(i).position();
	      //   if (position.left > offsetX && position.top < offsetY && position.top + 25 > offsetY) {
	      //     before = true;
	      //     $children.eq(i).before($holder);
	      //     break;
	      //   }
	      // }
	      // if (!before) {
	      //   $children.eq($children.length - 1).after($holder);
	      // }
	      this.$els.input.focus();
	    },
	    updateWidth: function updateWidth() {
	      // var width = $calculator.width();
	      // $holder.width(width + 2);
	    }
	  }

	};

	// </script>

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = "<div v-on:click=\"handleClick\" class=\"tag-input\"><span v-for=\"tag in tags\" class=\"label label-dark\">{{ tag }} <i class=\"fa fa-close close\"></i></span><span v-bind:style=\"holderStyle\" class=\"holder\"><input type=\"text\" v-model=\"newTag\" v-el:input=\"v-el:input\"/></span><div v-el:calculator=\"v-el:calculator\" class=\"calculate-holder\">{{ newTag }}</div></div>";

/***/ }
]);