'use strict';

(function ($, window) {

  var Dashboard = window.Dashboard = {};
  Dashboard.support = {};

  var element = document.createElement('dashboard');

  function getTransitionEnd() {

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (element.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false;
  }

  Dashboard.support.transition = getTransitionEnd();

  function getRequestAnimationFrame() {

    var requestAnimationFrameNames = ['requestAnimationFrame', 'webkitRequestAnimationFrame', 'mozRequestAnimationFrame', 'oRequestAnimationFrame'];

    for (var i = 0; i < requestAnimationFrameNames.length; ++i) {
      if (window[requestAnimationFrameNames[i]] !== undefined) {
        return requestAnimationFrameNames[i];
      }
    }

    return function (callback) {
      return window.setTimeout(callback, 1000 / 60);
    };
  }

  Dashboard.requestAnimationFrame = getRequestAnimationFrame();

  function getCancelAnimationFrame() {

    var cancelAnimationFrameNames = ['cancelAnimationFrame', 'webkitCancelAnimationFrame', 'mozCancelAnimationFrame', 'oCancelAnimationFrame'];

    for (var i = 0; i < cancelAnimationFrameNames.length; ++i) {
      if (window[cancelAnimationFrameNames[i]] !== undefined) {
        return cancelAnimationFrameNames[i];
      }
    }

    return function (callback) {
      window.clearTimeout(id);
    };
  }

  Dashboard.cancelAnimationFrame = getCancelAnimationFrame();
})(jQuery, window);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
  var Button = (function () {
    function Button() {
      _classCallCheck(this, Button);
    }

    _createClass(Button, [{
      key: 'toggle',
      value: function toggle() {}
    }, {
      key: 'setState',
      value: function setState() {}
    }]);

    return Button;
  })();

  var old = $.fn.button;

  function button(options) {
    return $(this).each(function (index, ele) {});
  }

  $.fn.extend({ button: button });

  $.fn.button.Constructor = Button;

  $.fn.button.noConflict = function () {
    $.fn.button = old;
    return this;
  };

  $(document).on('click.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    var $btn = $(e.target);
    if (!$btn.hasClass('btn')) {
      $btn = $btn.closest('.btn');
    }
    button.call($btn, 'toggle');
    if (!($(e.target).is('input[type="radio"]') || $(e.target).is('input[type="checkbox"]'))) {
      e.preventDefault();
    }
  }).on('focus.bs.button.data-api blur.bs.button.data-api', '[data-toggle^="button"]', function (e) {
    $(e.target).closest('.btn').toggleClass('focus', /^focus(in)?$/.test(e.type));
  });
})(jQuery);
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

(function ($) {

  var defaultOptions = {
    timeout: 300
  };

  function collapse(options) {
    var option = $.extend({}, defaultOptions, (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' ? options : null);
    return this.each(function (index, ele) {
      var $this = $(ele);
      $this.slideToggle(option.timeout);
    });
  }

  var old = $.fn.collapse;

  $.fn.extend({ collapse: collapse });

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old;
    return this;
  };
})(jQuery);
"use strict";

(function ($) {

  $.fn.extend({
    dropdown: function dropdown(options) {
      return this.each(function (index, ele) {
        var $this = $(ele);
      });
    }
  });
})(jQuery);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
  var Modal = (function () {
    function Modal(element, options) {
      _classCallCheck(this, Modal);

      this.options = options;
      this.$body = $(document.body);
      this.$element = $(element);
      this.$dimmer = null;
      this.state = { show: false };
    }

    _createClass(Modal, [{
      key: 'show',
      value: function show() {
        var _this = this;

        var $element = this.$element;
        var $dimmer = this.$dimmer = $('<div class="modal-dimmer">');

        $element.trigger('db.modal.open');

        $element.addClass('show');
        $dimmer.appendTo(this.$body);

        if (Dashboard.support.transition) {
          var forceReflow = $element[0].offsetWidth; // force reflow
          $element.one(Dashboard.support.transition.end, function () {
            $element.trigger('db.modal.opened');
            _this.state.show = true;
          });
        } else {
          $element.trigger('db.modal.opened');
          this.state.show = true;
        }

        $element.addClass('in');
        $dimmer.addClass('in');

        $element.on('click', '[data-modal-close]', function () {
          _this.hide();
        });

        $element.on('click', function (e) {
          if (e.target !== e.currentTarget) return;
          _this.hide();
        });
      }
    }, {
      key: 'hide',
      value: function hide() {
        var _this2 = this;

        var $element = this.$element,
            $dimmer = this.$dimmer;
        $element.trigger('db.modal.close');
        var transition = Dashboard.support.transition;
        if (transition) {
          $dimmer.one(transition.end, function () {
            $dimmer.remove();
            _this2.$dimmer = null;
          });
          $element.one(Dashboard.support.transition.end, function () {
            $element.removeClass('show');
            $element.trigger('db.modal.closed');
            _this2.state.show = false;
          });
          $dimmer.removeClass('in');
          $element.removeClass('in');
        } else {
          $dimmer.remove();
          this.$dimmer = null;
          $dimmer.removeClass('in');
          $element.removeClass('in');
          $element.trigger('db.modal.closed');
        }
      }
    }, {
      key: 'toggle',
      value: function toggle() {
        return this.state.show ? this.hide() : this.show();
      }
    }]);

    return Modal;
  })();

  Modal.DEFAULTS = {};

  /**
   * jQuery.fn.modal
   *
   * @params: options {PlainObject|String}
   *
   * Events:
   * 1. db.modal.open
   * 2. db.modal.opened
   * 3. db.modal.close
   * 4. db.modal.closed
   */

  $.fn.extend({
    modal: function modal(option) {

      return this.each(function (index, ele) {

        var $this = $(ele);
        var data = $this.data('db.modal');
        var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
        if (!data) {
          $this.data('db.modal', data = new Modal(ele, options));
        }
        if (typeof option == 'string') {
          data[option]();
        } else if (options.show) {
          data.show();
        }
      });
    }
  });
})(jQuery);
"use strict";

(function ($) {

  $.fn.extend({
    tab: function tab(options) {
      return this.each(function (index, ele) {
        var $this = $(ele);
      });
    }
  });
})(jQuery);
'use strict';

(function ($) {

  function scrollbar(options) {
    var _this = this;

    return this.each(function (index, ele) {

      var HEIGHT = _this.innerHeight();
      var $scrollbar = _this.children('.scrollbar'),
          $scrollContent = _this.children('.scroll-content');

      var CONTENT_HEIGHT = $scrollContent.outerHeight(true);

      var ratio = HEIGHT / CONTENT_HEIGHT * 100;

      $scrollbar.css({
        height: ratio + '%'
      });

      _this.on('mousewheel', function (e) {
        var delta = e.originalEvent.wheelDeltaY;
        var move = -delta;
        _this.scrollTop(move);
        $scrollbar.css({
          top: move + 'px'
        });
      });
    });
  }

  $.fn.extend({ scrollbar: scrollbar });
})(jQuery);
'use strict';

(function ($) {

  function tagsinput(options) {
    var _this = this;

    return this.each(function (index, ele) {

      var $holder = _this.children('.holder');
      var $input = $holder.children('input');
      var $calculator = _this.children('.calculate-holder');
      var parentWidth = _this.innerWidth();
      var minWidth = 64;

      var $this = _this;

      function updateWidth() {
        $calculator.text($input.val());
        var width = $calculator.width();
        $holder.width(width + 2);
      }

      function handleClick(evt) {
        updateWidth();
        if (evt.target !== evt.currentTarget) {
          $input.focus();
        } else {
          var offsetX = evt.offsetX,
              offsetY = evt.offsetY;
          var $children = $this.children('.label');
          var before = false;
          for (var i = 0; i < $children.length; ++i) {
            var position = $children.eq(i).position();
            if (position.left > offsetX && position.top < offsetY && position.top + 25 > offsetY) {
              before = true;
              $children.eq(i).before($holder);
              break;
            }
          }
          if (!before) {
            $children.eq($children.length - 1).after($holder);
          }
          $input.focus();
        }
      }
      function handleKeydown(evt) {
        switch (evt.which) {
          case 13:
            // enter
            var newTagText = $input.val().replace(/^\s+|\s+$/g, '');
            if (newTagText !== '') {
              var $newTag = $('<span class="label label-dark">' + newTagText + ' <i class="fa fa-close close"></i></span>');
              $holder.before($newTag);
              $input.val('').focus();
              updateWidth();
            }
            evt.preventDefault();
            break;
          case 8:
            // backspace
            if ($input.val() === '') {
              var deleteLabelIndex = $holder.index() - 1;
              if (deleteLabelIndex >= 0) {
                $this.children('span').eq(deleteLabelIndex).remove();
              }
            } else {
              updateWidth();
            }
            break;
          case 37:
            // left
            if ($input.val() === '') {
              var holderIndex = $holder.index();
              if (holderIndex > 0) {
                $holder.width(2);
                $this.children('span').eq(holderIndex - 1).before($holder);
                $input.focus();
              }
            }
            break;
          case 39:
            // right
            if ($input.val() === '') {
              var holderIndex = $holder.index();
              if (holderIndex < $this.children().length - 1) {
                $holder.width(2);
                $this.children('span').eq(holderIndex + 1).after($holder);
                $input.focus();
              }
            }
            break;
          default:
          // console.log(evt.which);
        }
      }
      function handleKeyup() {
        updateWidth();
      }
      _this.on('click.tagsinput.db', '.close', function (evt) {
        evt.stopPropagation();
        $(evt.target).parent().remove();
        $input.focus();
      });
      _this.on('click.tagsinput.db', handleClick);
      _this.on('keydown.tagsinput.db', handleKeydown);
      _this.on('input.tagsinput.db', handleKeyup);
    });
  }

  $.fn.extend({ tagsinput: tagsinput });
})(jQuery);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {
  var Picker = (function () {
    function Picker(selectedDate) {
      _classCallCheck(this, Picker);

      this.selectedDate = selectedDate;
    }

    _createClass(Picker, [{
      key: 'render',
      value: function render($element) {
        var selectedDate = this.selectedDate;
        var year = selectedDate.getFullYear(),
            month = selectedDate.getMonth(),
            date = selectedDate.getDate();

        var html = '<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5">' + year + '-' + (month + 1) + '-' + date + '</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>';
        html += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
        html += '</thead><tbody>';

        var dates = [];

        var thisMonthFirstDateObj = new Date(year, month, 1);
        var thisMonthFirstDay = thisMonthFirstDateObj.getDay();

        if (thisMonthFirstDay > 0) {
          var prevMonthLastDate = new Date(year, month, 0).getDate();
          for (var i = 0; i < thisMonthFirstDay; ++i) {
            dates.unshift({
              type: 'old date',
              show: prevMonthLastDate--
            });
          }
        }

        var thisMonthLastDateObj = new Date(year, month + 1, 0);
        var thisMonthLastDate = thisMonthLastDateObj.getDate();
        var thisMonthLastDay = thisMonthLastDateObj.getDay();

        for (var i = 1; i <= thisMonthLastDate; ++i) {
          var type = i === date ? 'active date' : 'date';
          dates.push({
            type: type,
            show: i
          });
        }

        if (thisMonthLastDay !== 6) {
          for (var i = 1; i <= 6 - thisMonthLastDay; ++i) {
            dates.push({
              type: 'new date',
              show: i
            });
          }
        }

        for (var i = 0; i < dates.length; ++i) {
          if (i % 7 === 0) {
            html += '<tr>';
          }
          var _date = dates[i];
          html += '<td class="' + _date.type + '">' + _date.show + '</td>';
          if (i % 7 === 6) {
            html += '</tr>';
          }
        }

        html += '</tbody></table>';
        return $element.html(html);
      }
    }]);

    return Picker;
  })();

  function datepicker(options) {
    var _this = this;

    return this.each(function () {

      var dateString = options.date;
      var selectedDate = dateString ? new Date(dateString) : new Date();

      var picker = new Picker(selectedDate);

      if (_this.is('input')) {
        var $wrapper = $('<div class="date-picker float"></div>');
        _this.parent().css({
          "position": "relative"
        }).append($wrapper);
        picker.render($wrapper);
        _this.on('click', function () {
          $wrapper.show();
        });
        $wrapper.on('click', function (event) {
          event.stopPropagation();
        });
        $wrapper.on('click', '.date', function (event) {
          var $target = $(event.target);
          var date = parseInt(event.target.innerHTML);
          var selectedDate = picker.selectedDate;
          var month = undefined;
          if ($target.hasClass('active')) {
            return false;
          } else if ($target.hasClass('old')) {
            picker.selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, date);
          } else if ($target.hasClass('new')) {
            picker.selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, date);
          } else {
            picker.selectedDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), date);
          }
          picker.render($wrapper);
        });
        $(document).on('click.datepicker.close', function (event) {
          var $target = $(event.target);
          if (!$target.is(_this)) {
            $wrapper.hide();
          }
        });
      } else {
        picker.render(_this);
      }

      return _this;
    });
  }

  $.fn.extend({ datepicker: datepicker });
})(jQuery);