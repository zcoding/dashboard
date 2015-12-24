webpackJsonp([3],{

/***/ 26:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(27)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(38)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\views\\datetimepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 27:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datepicker = __webpack_require__(28);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	var _dateinput = __webpack_require__(31);

	var _dateinput2 = _interopRequireDefault(_dateinput);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	// <template>

	// <div class="grid margin-top">

	//   <div class="u-sm-8">

	//     <div class="box padding">

	//       <h3>{{ myDate | format 'yyyy年 M月 d日' }}</h3>

	//       <date-picker v-on:date-change="myDateChange"></date-picker>

	//     </div>

	//   </div>

	//   <div class="u-sm-8">

	//     <div class="box padding">

	//       <date-input v-bind:date.sync="yourDate" format="yyyy-MM-dd">pick a date via date-input</date-input>

	//     </div>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  components: { datePicker: _datepicker2.default, dateInput: _dateinput2.default },

	  data: function data() {
	    return {
	      myDate: '2015-12-12',
	      yourDate: '2015-12-20'
	    };
	  },

	  filters: {
	    format: function format(time, _format) {
	      return this.format(time, _format);
	    }
	  },

	  methods: {
	    format: function format(time) {
	      var _format2 = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd hh:mm:ss' : arguments[1];

	      if (typeof time !== 'number' && typeof time !== 'string') {
	        return time;
	      }

	      var _date = new Date(time);

	      if (isNaN(_date.getTime())) {
	        return time;
	      }

	      var map = {
	        "M": _date.getMonth() + 1,
	        "d": _date.getDate(),
	        "h": _date.getHours(),
	        "m": _date.getMinutes(),
	        "s": _date.getSeconds()
	      };

	      _format2 = _format2.replace(/([yMdDhms])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	          if (all.length > 1) {
	            v = '0' + v;
	            v = v.substr(v.length - 2);
	          }
	          return v;
	        } else if (t === 'y') {
	          return (_date.getFullYear() + '').substr(4 - all.length);
	        } else if (t === 'D') {
	          return ['日', '一', '二', '三', '四', '五', '六'][_date.getDay()];
	        }
	        return all;
	      });

	      return _format2;
	    },
	    myDateChange: function myDateChange(date) {
	      this.myDate = date.getTime();
	    }
	  }

	};

	// </script>

/***/ },

/***/ 28:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(29)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(30)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\datepicker.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 29:
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	// <template>

	// <div class="datepicker" v-bind:class="{'float': float}">

	//   <div class="date-picker" v-if="show === 'date'">

	//     <table>

	//       <thead>

	//         <tr class="header">

	//           <th class="prev" v-on:click="prevMonth"><i class="fa fa-angle-left"></i></th>

	//           <th colspan="5" class="switch" v-on:click="switchView2Month">{{ showYear }} {{ showMonth }}</th>

	//           <th class="next" v-on:click="nextMonth"><i class="fa fa-angle-right"></i></th>

	//         </tr>

	//         <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>

	//       </thead>

	//       <tbody>

	//         <tr v-for="row in dates" track-by="$index">

	//           <td v-for="date in row" track-by="$index" v-on:click="selectDate(date)" v-bind:class="['date', date.old ? 'old' : date.new ? 'new' : '', date.active ? 'active': '']">{{ date.show }}</td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	//   <div class="month-picker" v-if="show === 'month'">

	//     <table>

	//       <thead>

	//         <tr class="header">

	//           <th class="prev" v-on:click="prevYear"><i class="fa fa-angle-left"></i></th>

	//           <th colspan="5" class="switch" v-on:click="switchView2Year">{{ showYear }}</th>

	//           <th class="next" v-on:click="nextYear"><i class="fa fa-angle-right"></i></th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td colspan="7">

	//             <span v-for="month in months" track-by="$index" v-on:click="selectMonth(month)" v-bind:class="['month', month.old ? 'old' : month.new ? 'new' : '', month.active ? 'active': '']">{{ month.show }}</span>

	//           </td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	//   <div class="year-picker" v-if="show === 'year'">

	//     <table>

	//       <thead>

	//         <tr class="header">

	//           <th class="prev" v-on:click="prevDecade"><i class="fa fa-angle-left"></i></th>

	//           <th colspan="5" class="switch">{{ showDecade }}</th>

	//           <th class="next" v-on:click="nextDecade"><i class="fa fa-angle-right"></i></th>

	//         </tr>

	//       </thead>

	//       <tbody>

	//         <tr>

	//           <td colspan="7">

	//             <span v-for="year in years" track-by="$index" v-on:click="selectYear(year)" v-bind:class="['year', year.old ? 'old' : year.new ? 'new' : '', year.active ? 'active': '']">{{ year.show }}</span>

	//           </td>

	//         </tr>

	//       </tbody>

	//     </table>

	//   </div>

	// </div>

	// </template>

	// <script>

	exports.default = {

	  props: {
	    selectedDate: {
	      type: Number,
	      twoWay: true,
	      default: function _default() {
	        return new Date().getTime();
	      },

	      required: false
	    },
	    float: {
	      type: Boolean,
	      required: false,
	      default: false
	    }
	  },

	  data: function data() {
	    var viewDate = this.selectedDate.valueOf();
	    return {
	      viewDate: viewDate,
	      show: 'date'
	    };
	  },

	  computed: {
	    dates: function dates() {
	      var viewDateObj = new Date(this.viewDate),
	          selectedDateObj = new Date(this.selectedDate);
	      var viewYear = viewDateObj.getFullYear(),
	          viewMonth = viewDateObj.getMonth(),
	          viewDate = viewDateObj.getDate(),
	          selectedYear = selectedDateObj.getFullYear(),
	          selectedMonth = selectedDateObj.getMonth(),
	          selectedDate = selectedDateObj.getDate();

	      var dates = [],
	          week = [];

	      var thisMonthFirstDateObj = new Date(viewYear, viewMonth, 1);
	      var thisMonthFirstDay = thisMonthFirstDateObj.getDay();

	      if (thisMonthFirstDay > 0) {
	        var prevMonthLastDateObj = new Date(viewYear, viewMonth, 0);
	        var prevMonthLastDateYear = prevMonthLastDateObj.getFullYear();
	        var prevMonthLastDateMonth = prevMonthLastDateObj.getMonth();
	        var prevMonthLastDateDate = prevMonthLastDateObj.getDate();
	        for (var i = 0; i < thisMonthFirstDay; ++i) {
	          var showDate = prevMonthLastDateDate--;
	          var date = {
	            active: false, new: false, old: true,
	            date: showDate,
	            month: prevMonthLastDateMonth,
	            year: prevMonthLastDateYear,
	            show: showDate
	          };
	          if (selectedYear === prevMonthLastDateYear && selectedMonth === prevMonthLastDateMonth && selectedDate === showDate) {
	            date.active = true;
	          }
	          week.unshift(date);
	        }
	      }

	      var thisMonthLastDateObj = new Date(viewYear, viewMonth + 1, 0);
	      var thisMonthLastDateDate = thisMonthLastDateObj.getDate();
	      var thisMonthLastDateDay = thisMonthLastDateObj.getDay();

	      for (var i = 1; i <= thisMonthLastDateDate; ++i) {
	        var date = {
	          active: false, new: false, old: false,
	          date: i,
	          month: viewMonth,
	          year: viewYear,
	          show: i
	        };
	        if (selectedYear === viewYear && selectedMonth === viewMonth && selectedDate === i) {
	          date.active = true;
	        }
	        week.push(date);
	        if (week.length === 7) {
	          dates.push(week);
	          week = [];
	        }
	      }

	      if (thisMonthLastDateDay !== 6) {
	        var nextMonthFirstDateObj = new Date(viewYear, viewMonth + 1, 1);
	        var nextMonthFirstDateYear = nextMonthFirstDateObj.getFullYear();
	        var nextMonthFirstDateMonth = nextMonthFirstDateObj.getMonth();
	        for (var i = 1; i <= 6 - thisMonthLastDateDay; ++i) {
	          var date = {
	            active: false, new: true, old: false,
	            date: i,
	            month: nextMonthFirstDateMonth,
	            year: nextMonthFirstDateYear,
	            show: i
	          };
	          if (selectedYear === nextMonthFirstDateYear && selectedMonth === nextMonthFirstDateMonth && selectedDate === i) {
	            date.active = true;
	          }
	          week.push(date);
	          if (week.length === 7) {
	            dates.push(week);
	            week = [];
	          }
	        }
	      }

	      return dates;
	    },
	    months: function months() {
	      var viewDateObj = new Date(this.viewDate),
	          selectedDateObj = new Date(this.selectedDate);
	      var viewYear = viewDateObj.getFullYear(),
	          viewMonth = viewDateObj.getMonth(),
	          viewDate = viewDateObj.getDate(),
	          selectedYear = selectedDateObj.getFullYear(),
	          selectedMonth = selectedDateObj.getMonth(),
	          selectedDate = selectedDateObj.getDate();

	      var months = [],
	          locales = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	      for (var i = 0; i < locales.length; ++i) {
	        months.push({
	          active: viewMonth === i,
	          month: i,
	          year: viewYear,
	          show: locales[i]
	        });
	      }
	      return months;
	    },
	    years: function years() {
	      var viewDateObj = new Date(this.viewDate),
	          selectedDateObj = new Date(this.selectedDate);
	      var viewYear = viewDateObj.getFullYear(),
	          viewMonth = viewDateObj.getMonth(),
	          viewDate = viewDateObj.getDate(),
	          selectedYear = selectedDateObj.getFullYear(),
	          selectedMonth = selectedDateObj.getMonth(),
	          selectedDate = selectedDateObj.getDate();

	      var years = [];
	      var begin = viewYear - viewYear % 10;
	      var end = begin + 10;
	      for (var i = begin - 1; i <= end; ++i) {
	        years.push({
	          active: viewYear === i,
	          year: i,
	          show: i
	        });
	      }
	      return years;
	    },
	    showYear: function showYear() {
	      return new Date(this.viewDate).getFullYear() + '年';
	    },
	    showMonth: function showMonth() {
	      var locales = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
	      return locales[new Date(this.viewDate).getMonth()];
	    },
	    showDecade: function showDecade() {
	      var viewYear = new Date(this.viewDate).getFullYear();
	      var begin = viewYear - viewYear % 10;
	      return begin + ' ~ ' + (begin + 10);
	    }
	  },

	  methods: {
	    switchView2Month: function switchView2Month() {
	      this.show = 'month';
	    },
	    switchView2Year: function switchView2Year() {
	      this.show = 'year';
	    },
	    switchView2Date: function switchView2Date() {
	      this.show = 'date';
	    },
	    prevMonth: function prevMonth() {
	      var viewDate = new Date(this.viewDate);
	      this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, viewDate.getDate());
	    },
	    nextMonth: function nextMonth() {
	      var viewDate = new Date(this.viewDate);
	      this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, viewDate.getDate());
	    },
	    selectDate: function selectDate(date) {
	      this.viewDate = new Date(date.year, date.month, date.date).getTime();
	      this.selectedDate = new Date(date.year, date.month, date.date).getTime();
	      this.$dispatch('date-change', new Date(this.selectedDate));
	    },
	    prevYear: function prevYear() {
	      var viewDate = new Date(this.viewDate);
	      viewDate.setFullYear(viewDate.getFullYear() - 1);
	      this.viewDate = viewDate.getTime();
	    },
	    nextYear: function nextYear() {
	      var viewDate = new Date(this.viewDate);
	      viewDate.setFullYear(viewDate.getFullYear() + 1);
	      this.viewDate = viewDate.getTime();
	    },
	    selectMonth: function selectMonth(month) {
	      var viewDate = new Date(this.viewDate);
	      this.viewDate = new Date(month.year, month.month, viewDate.getDate()).getTime();
	      this.switchView2Date();
	    },
	    prevDecade: function prevDecade() {
	      var viewDate = new Date(this.viewDate);
	      viewDate.setFullYear(viewDate.getFullYear() - 10);
	      this.viewDate = viewDate.getTime();
	    },
	    nextDecade: function nextDecade() {
	      var viewDate = new Date(this.viewDate);
	      viewDate.setFullYear(viewDate.getFullYear() + 10);
	      this.viewDate = viewDate.getTime();
	    },
	    selectYear: function selectYear(year) {
	      var viewDate = new Date(this.viewDate);
	      this.viewDate = new Date(year.year, viewDate.getMonth(), viewDate.getDate()).getTime();
	      this.switchView2Month();
	    }
	  }

	};

	// </script>

/***/ },

/***/ 30:
/***/ function(module, exports) {

	module.exports = "<div class=\"datepicker\" v-bind:class=\"{'float': float}\">\r\n\r\n  <div class=\"date-picker\" v-if=\"show === 'date'\">\r\n    <table>\r\n      <thead>\r\n        <tr class=\"header\">\r\n          <th class=\"prev\" v-on:click=\"prevMonth\"><i class=\"fa fa-angle-left\"></i></th>\r\n          <th colspan=\"5\" class=\"switch\" v-on:click=\"switchView2Month\">{{ showYear }} {{ showMonth }}</th>\r\n          <th class=\"next\" v-on:click=\"nextMonth\"><i class=\"fa fa-angle-right\"></i></th>\r\n        </tr>\r\n        <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr v-for=\"row in dates\" track-by=\"$index\">\r\n          <td v-for=\"date in row\" track-by=\"$index\" v-on:click=\"selectDate(date)\" v-bind:class=\"['date', date.old ? 'old' : date.new ? 'new' : '', date.active ? 'active': '']\">{{ date.show }}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"month-picker\" v-if=\"show === 'month'\">\r\n    <table>\r\n      <thead>\r\n        <tr class=\"header\">\r\n          <th class=\"prev\" v-on:click=\"prevYear\"><i class=\"fa fa-angle-left\"></i></th>\r\n          <th colspan=\"5\" class=\"switch\" v-on:click=\"switchView2Year\">{{ showYear }}</th>\r\n          <th class=\"next\" v-on:click=\"nextYear\"><i class=\"fa fa-angle-right\"></i></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td colspan=\"7\">\r\n            <span v-for=\"month in months\" track-by=\"$index\" v-on:click=\"selectMonth(month)\" v-bind:class=\"['month', month.old ? 'old' : month.new ? 'new' : '', month.active ? 'active': '']\">{{ month.show }}</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"year-picker\" v-if=\"show === 'year'\">\r\n    <table>\r\n      <thead>\r\n        <tr class=\"header\">\r\n          <th class=\"prev\" v-on:click=\"prevDecade\"><i class=\"fa fa-angle-left\"></i></th>\r\n          <th colspan=\"5\" class=\"switch\">{{ showDecade }}</th>\r\n          <th class=\"next\" v-on:click=\"nextDecade\"><i class=\"fa fa-angle-right\"></i></th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr>\r\n          <td colspan=\"7\">\r\n            <span v-for=\"year in years\" track-by=\"$index\" v-on:click=\"selectYear(year)\" v-bind:class=\"['year', year.old ? 'old' : year.new ? 'new' : '', year.active ? 'active': '']\">{{ year.show }}</span>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n\r\n</div>";

/***/ },

/***/ 31:
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(32)
	module.exports = __webpack_require__(36)

	if (module.exports.__esModule) module.exports = module.exports.default
	;(typeof module.exports === "function" ? module.exports.options : module.exports).template = __webpack_require__(37)
	if (false) {(function () {  module.hot.accept()
	  var hotAPI = require("vue-hot-reload-api")
	  hotAPI.install(require("vue"), true)
	  if (!hotAPI.compatible) return
	  var id = "D:\\lib.wuzijie\\dashboard\\examples-vue\\app\\components\\dateinput.vue"
	  if (!module.hot.data) {
	    hotAPI.createRecord(id, module.exports)
	  } else {
	    hotAPI.update(id, module.exports, (typeof module.exports === "function" ? module.exports.options : module.exports).template)
	  }
	})()}

/***/ },

/***/ 32:
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(33);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(35)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ceb3602&file=dateinput.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dateinput.vue", function() {
				var newContent = require("!!./../../../node_modules/css-loader/index.js!./../../../node_modules/vue-loader/lib/style-rewriter.js?id=_v-5ceb3602&file=dateinput.vue!./../../../node_modules/sass-loader/index.js!./../../../node_modules/vue-loader/lib/selector.js?type=style&index=0!./dateinput.vue");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },

/***/ 33:
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(34)();
	// imports


	// module
	exports.push([module.id, ".datepicker.float.fade-transition {\n  display: block;\n  opacity: 1;\n  -webkit-transform: translate3d(0, 0, 0);\n          transform: translate3d(0, 0, 0);\n  -webkit-transition: opacity .5s ease 0s, -webkit-transform .5s ease 0s;\n  transition: opacity .5s ease 0s, -webkit-transform .5s ease 0s;\n  transition: transform .5s ease 0s, opacity .5s ease 0s;\n  transition: transform .5s ease 0s, opacity .5s ease 0s, -webkit-transform .5s ease 0s; }\n\n.datepicker.float.fade-enter, .datepicker.float.fade-leave {\n  opacity: 0;\n  -webkit-transform: translate3d(0, -10px, 0);\n          transform: translate3d(0, -10px, 0); }\n", ""]);

	// exports


/***/ },

/***/ 34:
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },

/***/ 35:
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ },

/***/ 36:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _datepicker = __webpack_require__(28);

	var _datepicker2 = _interopRequireDefault(_datepicker);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {

	  components: { datePicker: _datepicker2.default },

	  props: {
	    date: {
	      type: String,
	      required: true,
	      twoWay: true
	    },
	    format: {
	      type: String,
	      required: false
	    }
	  },

	  data: function data() {
	    var selectedDate = new Date(this.date).getTime();
	    if (selectedDate !== selectedDate) {
	      selectedDate = new Date().getTime();
	    }
	    return {
	      show: false,
	      selectedDate: selectedDate
	    };
	  },

	  methods: {
	    triggerPicker: function triggerPicker() {
	      this.show = true;
	    },
	    handleDateChange: function handleDateChange(date) {
	      this.date = this.formatDate(date.getTime(), this.format);
	      this.show = false;
	    },
	    formatDate: function formatDate(time) {
	      var format = arguments.length <= 1 || arguments[1] === undefined ? 'yyyy-MM-dd' : arguments[1];

	      if (typeof time !== 'number' && typeof time !== 'string') {
	        return time;
	      }

	      var _date = new Date(time);

	      if (isNaN(_date.getTime())) {
	        return time;
	      }

	      var map = {
	        "M": _date.getMonth() + 1,
	        "d": _date.getDate(),
	        "h": _date.getHours(),
	        "m": _date.getMinutes(),
	        "s": _date.getSeconds()
	      };

	      format = format.replace(/([yMdDhms])+/g, function (all, t) {
	        var v = map[t];
	        if (v !== undefined) {
	          if (all.length > 1) {
	            v = '0' + v;
	            v = v.substr(v.length - 2);
	          }
	          return v;
	        } else if (t === 'y') {
	          return (_date.getFullYear() + '').substr(4 - all.length);
	        } else if (t === 'D') {
	          return ['日', '一', '二', '三', '四', '五', '六'][_date.getDay()];
	        }
	        return all;
	      });

	      return format;
	    }
	  },

	  events: {
	    "dismiss": function dismiss() {
	      var _this = this;

	      this.$nextTick(function () {
	        _this.show = false;
	      });
	    }
	  }

	};

	// </script>
	// <template>

	// <div class="form-control" style="position:relative;">

	//   <label><slot></slot></label>

	//   <input type="text" v-model="date" v-on:focus="triggerPicker" v-on:click.stop>

	//   <date-picker float v-show="show" transition="fade" v-bind:selected-date.sync="selectedDate" v-on:click.stop v-on:date-change="handleDateChange"></date-picker>

	// </div>

	// </template>

	// <style lang="sass">

	// .datepicker.float {

	//   &.fade-transition {

	//     display: block;

	//     opacity: 1;

	//     transform: translate3d(0, 0, 0);

	//     transition: transform .5s ease 0s, opacity .5s ease 0s;

	//   }

	//   &.fade-enter, &.fade-leave {

	//     opacity: 0;

	//     transform: translate3d(0, -10px, 0);

	//   }

	// }

	// </style>

	// <script>

/***/ },

/***/ 37:
/***/ function(module, exports) {

	module.exports = "<div class=\"form-control\" style=\"position:relative;\">\r\n  <label><slot></slot></label>\r\n  <input type=\"text\" v-model=\"date\" v-on:focus=\"triggerPicker\" v-on:click.stop>\r\n  <date-picker float v-show=\"show\" transition=\"fade\" v-bind:selected-date.sync=\"selectedDate\" v-on:click.stop v-on:date-change=\"handleDateChange\"></date-picker>\r\n</div>";

/***/ },

/***/ 38:
/***/ function(module, exports) {

	module.exports = "<div class=\"grid margin-top\">\r\n  <div class=\"u-sm-8\">\r\n    <div class=\"box padding\">\r\n      <h3>{{ myDate | format 'yyyy年 M月 d日' }}</h3>\r\n      <date-picker v-on:date-change=\"myDateChange\"></date-picker>\r\n    </div>\r\n  </div>\r\n  <div class=\"u-sm-8\">\r\n    <div class=\"box padding\">\r\n      <date-input v-bind:date.sync=\"yourDate\" format=\"yyyy-MM-dd\">pick a date via date-input</date-input>\r\n    </div>\r\n  </div>\r\n</div>";

/***/ }

});