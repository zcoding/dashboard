webpackJsonp([11],{

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(28)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(32)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\pageForm.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _taginput = __webpack_require__(29);

	var _taginput2 = _interopRequireDefault(_taginput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  data: function data() {
	    return {
	      tags1: ['hello', 'dashboard'],
	      tags2: ['hello', 'dashboard']
	    };
	  },

	  components: { tagInput: _taginput2.default },

	  ready: function ready() {
	    NProgress.done();
	    this.$dispatch('content-change');
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

	//       tag-input(v-bind:tags.sync="tags1")

	//   .u-sm-8

	//     .box.padding

	//       h3 .tag-input

	//       tag-input(v-bind:tags.sync="tags2" label-style="primary")

	// </template>

	// <script>

	// components

/***/ },

/***/ 29:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(30)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(31)
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

/***/ 30:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template lang="jade">

	// .tag-input(v-on:click="handleClick")

	//   span.label(v-for="tag in tags" track-by="$index" v-if="$index < holderIndex" v-bind:class="['label-' + labelStyle]") {{ tag }} <i class="fa fa-close close" v-on:click="deleteTag($index)"></i>

	//   span.holder(v-bind:style="holderStyle")

	//     input(type="text" v-model="newTag" v-el:input v-on:keydown.enter.prevent="addTag" v-on:keydown.left="moveLeft" v-on:keydown.right="moveRight" v-on:keydown.8="backDelete")

	//   span.label(v-for="tag in tags" track-by="$index" v-if="$index >= holderIndex" v-bind:class="['label-' + labelStyle]") {{ tag }} <i class="fa fa-close close" v-on:click="deleteTag($index)"></i>

	//   .calculate-holder(v-el:calculator) {{ calculateTag }}

	// </template>

	// <script>

	exports.default = {

	  props: {
	    tags: {
	      type: Array,
	      required: true,
	      twoWay: true
	    },
	    labelStyle: {
	      type: String,
	      required: false,
	      default: 'dark'
	    }
	  },

	  data: function data() {
	    var holderIndex = this.tags.length;
	    return {
	      newTag: '',
	      holderStyle: {
	        width: '2px'
	      },
	      holderIndex: holderIndex
	    };
	  },

	  computed: {
	    calculateTag: function calculateTag() {
	      var _tag = this.newTag.replace(/\s/g, 'i');
	      this.updateWidth();
	      return _tag;
	    }
	  },

	  methods: {
	    handleClick: function handleClick(event) {
	      if (event.target === event.currentTarget) {
	        var offsetX = event.offsetX,
	            offsetY = event.offsetY;
	        var children = this.$el.querySelectorAll('.label');
	        var isAtTheEnd = true;
	        for (var i = 0; i < children.length; ++i) {
	          var child = children[i];
	          if (child.offsetLeft > offsetX && child.offsetTop < offsetY && child.offsetTop + child.offsetHeight > offsetY) {
	            this.holderIndex = i;
	            isAtTheEnd = false;
	            break;
	          }
	        }
	        if (isAtTheEnd) {
	          this.holderIndex = this.tags.length;
	        }
	      }
	      this.$els.input.focus();
	    },
	    updateWidth: function updateWidth() {
	      var _this = this;

	      this.$nextTick(function () {
	        var width = _this.$els.calculator.offsetWidth;
	        _this.holderStyle.width = width + 2 + 'px';
	      });
	    },
	    addTag: function addTag() {
	      var newTag = this.newTag.trim();
	      if (newTag !== '') {
	        this.tags.splice(this.holderIndex, 0, newTag);
	        this.newTag = '';
	        this.holderIndex += 1;
	      }
	    },
	    moveLeft: function moveLeft() {
	      if (this.newTag.trim() === '' && this.holderIndex > 0) {
	        this.holderIndex -= 1;
	      }
	    },
	    moveRight: function moveRight() {
	      if (this.newTag.trim() === '' && this.holderIndex < this.tags.length) {
	        this.holderIndex += 1;
	      }
	    },
	    deleteTag: function deleteTag(index) {
	      if (index < this.holderIndex) {
	        this.holderIndex -= 1;
	      }
	      this.tags.splice(index, 1);
	      this.$els.input.focus();
	    },
	    backDelete: function backDelete() {
	      if (this.newTag.trim() === '' && this.holderIndex > 0) {
	        this.deleteTag(this.holderIndex - 1);
	      }
	    }
	  }

	};

	// </script>

/***/ },

/***/ 31:
/***/ function(module, exports) {

	module.exports = "<div v-on:click=\"handleClick\" class=\"tag-input\"><span v-for=\"tag in tags\" track-by=\"$index\" v-if=\"$index &lt; holderIndex\" v-bind:class=\"['label-' + labelStyle]\" class=\"label\">{{ tag }} <i class=\"fa fa-close close\" v-on:click=\"deleteTag($index)\"></i></span><span v-bind:style=\"holderStyle\" class=\"holder\"><input type=\"text\" v-model=\"newTag\" v-el:input=\"v-el:input\" v-on:keydown.enter.prevent=\"addTag\" v-on:keydown.left=\"moveLeft\" v-on:keydown.right=\"moveRight\" v-on:keydown.8=\"backDelete\"/></span><span v-for=\"tag in tags\" track-by=\"$index\" v-if=\"$index &gt;= holderIndex\" v-bind:class=\"['label-' + labelStyle]\" class=\"label\">{{ tag }} <i class=\"fa fa-close close\" v-on:click=\"deleteTag($index)\"></i></span><div v-el:calculator=\"v-el:calculator\" class=\"calculate-holder\">{{ calculateTag }}</div></div>";

/***/ },

/***/ 32:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid padding\"><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\"/></div><div class=\"form-control\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\"/></div><div class=\"form-control\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\"/></div><div class=\"form-control\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\"/></div><div class=\"form-control\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\"/></div><div class=\"form-control\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\"></textarea></div><div class=\"form-control\"><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option1</label><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option2</label><label class=\"field-check\"><input type=\"checkbox\" name=\"check1\"/><i></i>Option3</label></div><div class=\"form-control\"><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option1</label><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option2</label><label class=\"field-radio\"><input type=\"radio\" name=\"radio1\"/><i></i>Option3</label></div><div class=\"form-control\"><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>A</label><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>B</label><label class=\"field-switch\"><input type=\"checkbox\" name=\"check2\"/><i></i>C</label></div><div class=\"form-control\"><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A1</label><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A2</label><label class=\"field-switch\"><input type=\"radio\" name=\"radio2\"/><i></i>A3</label></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control\"><label for=\"name2\">Name</label><input type=\"text\" placeholder=\"input your name\" id=\"name2\" class=\"field-md\"/></div><div class=\"form-control\"><label for=\"password2\">Password</label><input type=\"password\" placeholder=\"input password\" id=\"password2\" class=\"field-md\"/></div><div class=\"form-control\"><label for=\"content2\">Textarea</label><textarea id=\"content2\" rows=\"5\" class=\"field-md\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control u-sm-8\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\"/></div><div class=\"form-control u-sm-8\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\"/></div><div class=\"form-control u-sm-8\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\"/></div><div class=\"form-control u-sm-8\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\"/></div><div class=\"form-control u-sm-8\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\"/></div><div class=\"form-control u-sm-8\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control u-sm-16\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><form action=\"/\" class=\"form\"><fieldset><div class=\"form-control u-sm-8\"><label for=\"name\">Name</label><input id=\"name\" type=\"text\" placeholder=\"input your name\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"password\">Password</label><input id=\"password\" type=\"password\" placeholder=\"input password\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"number\">Number</label><input id=\"number\" type=\"number\" placeholder=\"input number\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"email\">Email</label><input id=\"email\" type=\"email\" placeholder=\"input email\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"url\">URL</label><input id=\"url\" type=\"url\" placeholder=\"input url\" class=\"field-md\"/></div><div class=\"form-control u-sm-8\"><label for=\"select\">Select</label><select id=\"select\" name=\"select\" class=\"field-md\"><option value=\"1\">Option1</option><option value=\"2\">Option2</option><option value=\"3\">Option3</option></select></div><div class=\"form-control u-sm-16\"><label for=\"textarea\">Textarea</label><textarea id=\"textarea\" rows=\"5\" class=\"field-md\"></textarea></div></fieldset></form></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><h3>.tag-input</h3><tag-input v-bind:tags.sync=\"tags1\"></tag-input></div></div><div class=\"u-sm-8\"><div class=\"box padding\"><h3>.tag-input</h3><tag-input v-bind:tags.sync=\"tags2\" label-style=\"primary\"></tag-input></div></div></div>";

/***/ }

});