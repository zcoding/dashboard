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
'use strict';

(function ($) {

  var defaults = {};

  function dropdown(options) {

    return this.each(function (index, ele) {
      options = $.extend(true, {}, defaults, options);
      var $this = $(ele);
      var $trigger = $this.children('[data-dropdown-trigger]'),
          $menu = $this.children('.dropdown-menu');
      var data = $this.data('dropdown');
      if (data == null) {
        data = {
          show: false
        };
        $this.data('dropdown', data);
      }
      $trigger.on('click', function () {
        var data = $this.data('dropdown');
        if (data.show) {
          data.show = false;
          $menu.one('webkitTransitionEnd', function () {
            if (!data.show) {
              // Must check current status
              $menu.removeClass('active');
            }
          }).removeClass('in');
        } else {
          data.show = true;
          $menu.addClass('active');
          $menu[0].offsetWidth; // Must force reflow
          $menu.addClass('in');
        }
      });
    });
  }

  $.fn.extend({ dropdown: dropdown });
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
'use strict';

(function ($) {

  $.fn.extend({
    tab: function tab(options) {
      var _this = this;

      return this.each(function () {
        var activeIndex = options.active;
        var $this = _this;
        var Width = $this.width();
        var $nav = $this.children('.nav');
        var $items = $nav.children('li'),
            $indicator = $nav.children('.indicator');
        var ItemLength = $items.length;

        var $panes = $this.find('.tab-content .tab-pane');
        $panes.removeClass('active').eq(activeIndex).addClass('active');

        $items.css({
          width: 1 / ItemLength * 100 + '%'
        });
        var itemWidth = $items.width();
        $indicator.css({
          width: itemWidth + 'px',
          left: activeIndex * itemWidth
        });

        $this.on('click', '.nav > li', function (event) {
          var $target = $(event.currentTarget);
          activeIndex = $target.index();
          $items.removeClass('active').eq(activeIndex).addClass('active');
          $panes.removeClass('active').eq(activeIndex).addClass('active');
          $indicator.css({
            left: activeIndex * itemWidth
          });
        });
      });
    }
  });
})(jQuery);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {

  var Defaults = {
    style: 'dark',
    width: 8,
    speed: 50,
    fade: true
  };

  var Scrollbar = (function () {
    function Scrollbar($element, options) {
      var _this = this;

      _classCallCheck(this, Scrollbar);

      options = this.options = $.extend(true, {}, Defaults, options);
      this.$element = $element;
      $element.css({
        overflow: 'hidden'
      });
      var $parent = this.$parent = $element.parent();
      var $scrollbar = this.$scrollbar = $('<div class="scrollbar ' + options.style + '">');
      if (!/relative|absolute|fixed/.test($parent.css('position'))) {
        $parent.css({ "position": "relative" });
      }
      $parent.append($scrollbar);

      this.ContentHeight = $element[0].scrollHeight;

      this.Height = $element.outerHeight();

      this.ScrollbarHeight = this.Height / this.ContentHeight * this.Height;
      this.MaxMoveHeight = this.ContentHeight - this.Height;
      this.MaxPositionTop = this.Height / this.ContentHeight * this.MaxMoveHeight;

      var scrollbarPosition = $element.position(),
          scrollbarMarginTop = parseInt($element.css('marginTop'));
      var paddingRight = $parent.css('paddingRight');
      this.shimTop = scrollbarPosition.top + scrollbarMarginTop;
      $scrollbar.css({
        width: options.width + 'px',
        borderRadius: options.width / 2 + 'px',
        top: this.shimTop + 'px',
        right: paddingRight,
        height: this.ScrollbarHeight
      });
      if (options.fade) {
        $scrollbar.addClass('fade');
      }
      $scrollbar[0].offsetWidth;
      $scrollbar.addClass('active');

      if (this.Height === this.ContentHeight) {
        $scrollbar.hide();
      }

      $element.on('mousewheel', $.proxy(this.mousewheel, this));
      $element.on('mouseenter', function () {
        $scrollbar.addClass('hover');
      });
      $element.on('mouseleave', function () {
        $scrollbar.removeClass('hover');
      });

      this.draging = false;
      this.startY = 0;
      this.distance = 0;
      this.startTop = this.shimTop;
      this.req = null;
      this.startContentTop = 0;

      $scrollbar.on('mousedown', function (event) {
        _this.startY = event.pageY;
        _this.start();
      });

      $(document).on('mousemove', function (event) {
        if (_this.draging) {
          _this.distance = event.pageY - _this.startY;
        }
      });

      $(document).on('mouseup', function (event) {
        _this.stop();
      });

      // 当窗口大小发生变化时，需要重新计算长度
      $(window).on('resize', function () {
        _this.repaint();
      });
      // 当内容发生变化时，也可能会影响高度，由于无法检测到内容高度的变化，所以在具体使用时，需要在可能引起内容变化的代码中手动对滚动条重绘
    }

    _createClass(Scrollbar, [{
      key: 'mousewheel',
      value: function mousewheel(event) {
        var $element = this.$element,
            $scrollbar = this.$scrollbar;
        var speed = this.options.speed;
        var delta = event.deltaY < 0 ? -speed : speed;
        var currentScrollTop = $element.scrollTop();
        var move = currentScrollTop - delta;
        move = move < 0 ? 0 : move > this.MaxMoveHeight ? this.MaxMoveHeight : move;
        $element.scrollTop(move);

        var scrollbarMove = move / this.ContentHeight * this.Height;
        $scrollbar.css({
          top: this.shimTop + scrollbarMove + 'px'
        });

        if (move > 0 && move < this.MaxMoveHeight) {
          event.preventDefault();
          event.stopPropagation();
        }
      }
    }, {
      key: 'start',
      value: function start() {
        var $scrollbar = this.$scrollbar,
            $element = this.$element;
        this.startTop = $scrollbar.position().top;
        this.startContentTop = $element.scrollTop();
        $scrollbar.addClass('drag');
        $element.addClass('drag');
        $(document.body).addClass('drag');
        this.draging = true;
        this.req = requestAnimationFrame($.proxy(this.step, this));
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.draging = false;
        cancelAnimationFrame(this.req);
        this.req = null;
        this.$scrollbar.removeClass('drag');
        this.$element.removeClass('drag');
        $(document.body).removeClass('drag');
        this.distance = 0;
        this.startY = 0;
      }
    }, {
      key: 'step',
      value: function step() {
        if (this.draging) {
          this.move(this.distance);
          this.req = requestAnimationFrame($.proxy(this.step, this));
        }
      }
    }, {
      key: 'move',
      value: function move(distance) {
        var positionTop = this.startTop + distance;
        positionTop = positionTop < this.shimTop ? this.shimTop : positionTop > this.shimTop + this.MaxPositionTop ? this.shimTop + this.MaxPositionTop : positionTop;
        this.$scrollbar.css({
          top: positionTop + 'px'
        });
        var contentMove = this.ContentHeight / this.Height * distance;
        this.$element.scrollTop(this.startContentTop + contentMove);
      }
    }, {
      key: 'repaint',
      value: function repaint() {
        this.ContentHeight = this.$element[0].scrollHeight;
        this.Height = this.$element.outerHeight();
        this.ScrollbarHeight = this.Height / this.ContentHeight * this.Height;
        this.MaxMoveHeight = this.ContentHeight - this.Height;
        this.MaxPositionTop = this.Height / this.ContentHeight * this.MaxMoveHeight;

        var scrollbarPosition = this.$element.position(),
            scrollbarMarginTop = parseInt(this.$element.css('marginTop'));
        this.shimTop = scrollbarPosition.top + scrollbarMarginTop;

        this.$scrollbar.css({
          height: this.ScrollbarHeight
        });
        if (this.Height === this.ContentHeight) {
          this.$scrollbar.hide();
        } else {
          this.$scrollbar.show();
        }
      }
    }]);

    return Scrollbar;
  })();

  function scrollbar(options) {

    return this.each(function (index, ele) {
      var $this = $(ele);
      // 如果是mac os就不要初始化
      if (/Mac OS X/ig.test(navigator.userAgent)) {
        $this.addClass('scroll-y');
        return false;
      }
      var scrollbar = $this.data('scrollbar');
      if (typeof scrollbar === 'undefined') {
        scrollbar = new Scrollbar($this, options);
        $this.data('scrollbar', scrollbar);
      }
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
              // $this.trigger('tagschange.dashboard', );
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
    function Picker($element, selectedDate) {
      var _this = this;

      _classCallCheck(this, Picker);

      this.$element = $element;
      this.selectedDate = selectedDate;
      this.viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()); // clone a date
      // switch to month view
      $element.on('click', '.date-picker .date', function (event) {
        var $target = $(event.target);
        var date = parseInt(event.target.innerHTML);
        var viewDate = _this.viewDate;
        var year = viewDate.getFullYear(),
            month = undefined;
        if ($target.hasClass('active')) {
          return false;
        } else if ($target.hasClass('old')) {
          month = viewDate.getMonth() - 1;
        } else if ($target.hasClass('new')) {
          month = viewDate.getMonth() + 1;
        } else {
          month = viewDate.getMonth();
        }
        _this.selectedDate = new Date(year, month, date);
        _this.viewDate = new Date(year, month, date);
        $datePicker.html(_this.renderDate());
        $element.trigger('datechange.datepicker', {
          year: _this.selectedDate.getFullYear(),
          month: _this.selectedDate.getMonth() + 1,
          date: _this.selectedDate.getDate()
        });
      });
      // view last month
      $element.on('click', '.date-picker .prev', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() - 1, viewDate.getDate());
        $datePicker.html(_this.renderDate());
      });
      // view next month
      $element.on('click', '.date-picker .next', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth() + 1, viewDate.getDate());
        $datePicker.html(_this.renderDate());
      });
      // switch to month view
      $element.on('click', '.date-picker .switch', function (event) {
        $monthPicker.show();
        $datePicker.hide();
        $yearPicker.hide();
      });

      // switch to year view
      $element.on('click', '.month-picker .switch', function (event) {
        $yearPicker.show();
        $datePicker.hide();
        $monthPicker.hide();
      });
      // view last year
      $element.on('click', '.month-picker .prev', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear() - 1, viewDate.getMonth(), viewDate.getDate());
        $monthPicker.html(_this.renderMonth());
        $datePicker.html(_this.renderDate());
      });
      // view next year
      $element.on('click', '.month-picker .next', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear() + 1, viewDate.getMonth(), viewDate.getDate());
        $monthPicker.html(_this.renderMonth());
        $datePicker.html(_this.renderDate());
      });
      // select month
      $element.on('click', '.month-picker .month', function (event) {
        var $target = $(event.target);
        var month = parseInt($target.data('month'));
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear(), month, viewDate.getDate());
        $datePicker.html(_this.renderDate()).show();
        $monthPicker.html(_this.renderMonth()).hide();
        $yearPicker.html(_this.renderYear()).hide();
      });

      // view last decade
      $element.on('click', '.year-picker .prev', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear() - 10, viewDate.getMonth(), viewDate.getDate());
        $monthPicker.html(_this.renderMonth());
        $datePicker.html(_this.renderDate());
        $yearPicker.html(_this.renderYear());
      });
      // view next decade
      $element.on('click', '.year-picker .next', function (event) {
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(viewDate.getFullYear() + 10, viewDate.getMonth(), viewDate.getDate());
        $monthPicker.html(_this.renderMonth());
        $datePicker.html(_this.renderDate());
        $yearPicker.html(_this.renderYear());
      });
      // select year
      $element.on('click', '.year-picker .year', function (event) {
        var $target = $(event.target);
        var year = parseInt($target.data('year'));
        var viewDate = _this.viewDate;
        _this.viewDate = new Date(year, viewDate.getMonth(), viewDate.getDate());
        $monthPicker.html(_this.renderMonth()).show();
        $datePicker.html(_this.renderDate()).hide();
        $yearPicker.html(_this.renderYear()).hide();
      });

      var $datePicker = $('<div class="date-picker"></div>'),
          $monthPicker = $('<div class="month-picker"></div>'),
          $yearPicker = $('<div class="year-picker"></div>');
      $datePicker.html(this.renderDate());
      $monthPicker.html(this.renderMonth()).hide();
      $yearPicker.html(this.renderYear()).hide();

      $element.append($datePicker, $monthPicker, $yearPicker);
    }

    _createClass(Picker, [{
      key: 'renderDate',
      value: function renderDate() {
        var viewDate = this.viewDate;
        var viewYear = viewDate.getFullYear(),
            viewMonth = viewDate.getMonth(),
            date = viewDate.getDate();
        var selectedDateObj = this.selectedDate;
        var selectedYear = selectedDateObj.getFullYear(),
            selectedMonth = selectedDateObj.getMonth(),
            selectedDate = selectedDateObj.getDate();

        var html = '<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5" class="switch">' + viewYear + '年 ' + (viewMonth + 1) + '月</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>';
        html += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
        html += '</thead><tbody>';

        var dates = [];

        var thisMonthFirstDateObj = new Date(viewYear, viewMonth, 1);
        var thisMonthFirstDay = thisMonthFirstDateObj.getDay();

        if (thisMonthFirstDay > 0) {
          var prevMonthLastDateObj = new Date(viewYear, viewMonth, 0);
          var prevMonthLastDateYear = prevMonthLastDateObj.getFullYear();
          var prevMonthLastDateMonth = prevMonthLastDateObj.getMonth();
          var prevMonthLastDateDate = prevMonthLastDateObj.getDate();
          for (var i = 0; i < thisMonthFirstDay; ++i) {
            var showDate = prevMonthLastDateDate--;
            var type = 'old date';
            if (selectedYear === prevMonthLastDateYear && selectedMonth === prevMonthLastDateMonth && selectedDate === showDate) {
              type = 'active date';
            }
            dates.unshift({
              type: type,
              show: showDate
            });
          }
        }

        var thisMonthLastDateObj = new Date(viewYear, viewMonth + 1, 0);
        var thisMonthLastDateDate = thisMonthLastDateObj.getDate();
        var thisMonthLastDateDay = thisMonthLastDateObj.getDay();

        for (var i = 1; i <= thisMonthLastDateDate; ++i) {
          var type = 'date';
          if (selectedYear === viewYear && selectedMonth === viewMonth && selectedDate === i) {
            type = 'active date';
          }
          dates.push({
            type: type,
            show: i
          });
        }

        if (thisMonthLastDateDay !== 6) {
          var nextMonthFirstDateObj = new Date(viewYear, viewMonth + 1, 1);
          var nextMonthFirstDateYear = nextMonthFirstDateObj.getFullYear();
          var nextMonthFirstDateMonth = nextMonthFirstDateObj.getMonth();
          for (var i = 1; i <= 6 - thisMonthLastDateDay; ++i) {
            var type = 'new date';
            if (selectedYear === nextMonthFirstDateYear && selectedMonth === nextMonthFirstDateMonth && selectedDate === i) {
              type = 'active date';
            }
            dates.push({
              type: type,
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
        return $(html);
      }
    }, {
      key: 'renderMonth',
      value: function renderMonth() {
        var viewDate = this.viewDate;
        var viewYear = viewDate.getFullYear(),
            viewMonth = viewDate.getMonth(),
            date = viewDate.getDate();
        var selectedDateObj = this.selectedDate;
        var selectedYear = selectedDateObj.getFullYear(),
            selectedMonth = selectedDateObj.getMonth(),
            selectedDate = selectedDateObj.getDate();

        var html = '<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5" class="switch">' + viewYear + '年</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>';
        html += '</thead><tbody><tr><td colspan="7">';
        var months = locales['zh_CN'].months;
        for (var i = 0; i < months.length; ++i) {
          var month = months[i];
          if (viewMonth === i && selectedYear === viewYear) {
            html += '<span class="active month" data-month="' + i + '">' + month + '</span>';
          } else {
            html += '<span class="month" data-month="' + i + '">' + month + '</span>';
          }
        }
        html += '</tr></td></tbody></table>';
        return $(html);
      }
    }, {
      key: 'renderYear',
      value: function renderYear() {
        var viewDate = this.viewDate;
        var viewYear = viewDate.getFullYear(),
            viewMonth = viewDate.getMonth(),
            date = viewDate.getDate();
        var selectedDateObj = this.selectedDate;
        var selectedYear = selectedDateObj.getFullYear(),
            selectedMonth = selectedDateObj.getMonth(),
            selectedDate = selectedDateObj.getDate();

        var html = '<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5" class="switch">' + viewYear + '年</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>';
        html += '</thead><tbody><tr><td colspan="7">';
        var begin = viewYear - viewYear % 10;
        var end = begin + 10;
        for (var i = begin - 1; i <= end; ++i) {
          if (viewYear === i) {
            html += '<span class="active year" data-year="' + i + '">' + i + '</span>';
          } else {
            html += '<span class="year" data-year="' + i + '">' + i + '</span>';
          }
        }
        html += '</tr></td></tbody></table>';
        return html;
      }
    }]);

    return Picker;
  })();

  var locales = {
    en_US: {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      daysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      daysMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
      months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      weekStart: 0
    },
    zh_CN: {
      days: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
      daysShort: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
      daysMin: ['日', '一', '二', '三', '四', '五', '六'],
      months: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      monthsShort: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
      weekStart: 1,
      year: ['年']
    }
  };

  function datepicker(options) {
    var _this2 = this;

    return this.each(function () {

      var dateString = options.date;
      var selectedDate = dateString ? new Date(dateString) : new Date();

      if (_this2.is('input')) {
        var $wrapper = $('<div class="datepicker float"></div>');
        _this2.parent().css({
          "position": "relative"
        }).append($wrapper);
        _this2.val(selectedDate.getFullYear() + '-' + (selectedDate.getMonth() + 1) + '-' + selectedDate.getDate());
        var picker = new Picker($wrapper, selectedDate);
        _this2.on('click', function () {
          $wrapper.addClass('show');
          var forceReflow = $wrapper[0].offsetWidth;
          $wrapper.addClass('in');
        });
        $wrapper.on('click', function (event) {
          event.stopPropagation();
        });
        $wrapper.on('datechange.datepicker', function (event, show) {
          _this2.val(show.year + '-' + show.month + '-' + show.date);
        });
        $(document).on('click.datepicker.close', function (event) {
          var $target = $(event.target);
          if (!$target.is(_this2)) {
            $wrapper.one('webkitTransitionEnd', function () {
              if (!$wrapper.hasClass('in')) {
                $wrapper.removeClass('show');
              }
            });
            $wrapper.removeClass('in');
          }
        });
      } else {
        var _picker = new Picker(_this2, selectedDate);
      }

      return _this2;
    });
  }

  $.fn.extend({ datepicker: datepicker });
})(jQuery);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {

  var defaults = {
    dragable: true // 是否允许通过拖动单元格边框改变单元格大小
    , gridWidth: false // 初始单元格占宽度百分比，用数组表示，如果没有就等分
  };

  var DragTable = (function () {
    function DragTable($element, options) {
      var _this = this;

      _classCallCheck(this, DragTable);

      this.$element = $element;
      options = this.options = $.extend(true, {}, defaults, options);

      var $headerRows = this.$headerRows = $element.find('.grid-table-header .grid-table-row');
      var TableWidth = $element.innerWidth();

      var $headerCells = $headerRows.children('.grid-table-cell'),
          $headerControls = $headerRows.children('.grid-table-control');
      var TotalWidth = TableWidth - $headerControls.length * 2;
      var initWidth = TotalWidth / $headerCells.length;
      var $bodyRows = this.$bodyRows = $element.find('.grid-table-body .grid-table-row');
      var $bodyCells = $bodyRows.find('.grid-table-cell');
      var $footerRows = this.$footerRows = $element.find('.grid-table-footer .grid-table-row');
      var $footerCells = $footerRows.children('.grid-table-cell');

      if (options.gridWidth && Array.isArray(options.gridWidth)) {
        options.gridWidth.forEach(function (percentage, i) {
          $headerCells.eq(i).css({
            width: TotalWidth * percentage / 100 + 'px'
          });
          $bodyRows.each(function (j, ele) {
            $bodyRows.eq(j).children('.grid-table-cell').eq(i).css({
              width: TotalWidth * percentage / 100 + 'px'
            });
          });
          $footerCells.eq(i).css({
            width: TotalWidth * percentage / 100 + 'px'
          });
        });
      } else {
        $headerCells.css({
          width: initWidth + 'px'
        });

        $bodyCells.css({
          width: initWidth + 'px'
        });

        $footerCells.css({
          width: initWidth + 'px'
        });
      }

      // 设置control的长度
      this.updateBorderHeight();

      this.$leftElements = null;
      this.$rightElements = null;
      this.currentLeftWidth = 0;
      this.currentRightWidth = 0;
      this.startPosition = 0;
      this.draging = false;
      this.req = null;
      this.distance = 0;

      if (options.dragable) {
        $element.on('mousedown', '.grid-table-control', function (event) {
          var $target = $(event.currentTarget);
          var controlIndex = ($target.index() + 1) / 2;
          _this.$leftElements = $headerCells.eq(controlIndex - 1).add($footerCells.eq(controlIndex - 1));
          _this.$rightElements = $headerCells.eq(controlIndex).add($footerCells.eq(controlIndex));
          $bodyRows.each(function (i) {
            var $cells = $bodyRows.eq(i).find('.grid-table-cell');
            _this.$leftElements = _this.$leftElements.add($cells.eq(controlIndex - 1));
            _this.$rightElements = _this.$rightElements.add($cells.eq(controlIndex));
          });
          _this.currentLeftWidth = parseFloat(_this.$leftElements[0].style.width);
          _this.currentRightWidth = parseFloat(_this.$rightElements[0].style.width);
          _this.startPosition = event.pageX;
          _this.start();
        });

        $element.on('mousemove', function (event) {
          if (_this.draging) {
            _this.distance = event.pageX - _this.startPosition;
          }
        });

        $(document).on('mouseup', function (event) {
          _this.stop();
        });
      } else {
        $element.addClass('no-drag');
      }
    }

    _createClass(DragTable, [{
      key: 'start',
      value: function start() {
        this.draging = true;
        this.$element.addClass('drag');
        this.req = requestAnimationFrame($.proxy(this.step, this));
      }
    }, {
      key: 'stop',
      value: function stop() {
        this.draging = false;
        cancelAnimationFrame(this.req);
        this.req = null;
        this.$element.removeClass('drag');
        this.distance = 0;
        this.startPosition = 0;
      }
    }, {
      key: 'step',
      value: function step() {
        if (this.draging) {
          this.move(this.distance);
          this.req = requestAnimationFrame($.proxy(this.step, this));
        }
      }
    }, {
      key: 'updateBorderHeight',
      value: function updateBorderHeight() {
        this.$bodyRows.each(function (i, ele) {
          var $row = $(ele);
          var height = 0;
          $row.children('.grid-table-cell').each(function (i, ele) {
            var $el = $(ele);
            var h = $el.css({ height: 'auto' }).outerHeight();
            if (h > height) {
              height = h;
            }
          });
          $row.children().css({
            height: height + 'px'
          });
        });

        this.$headerRows.each(function (i, ele) {
          var $row = $(ele);
          var height = 0;
          $row.children('.grid-table-cell').each(function (i, ele) {
            var $el = $(ele);
            var h = $el.css({ height: 'auto' }).outerHeight();
            if (h > height) {
              height = h;
            }
          });
          $row.children().css({
            height: height + 'px'
          });
        });

        this.$footerRows.each(function (i, ele) {
          var $row = $(ele);
          var height = 0;
          $row.children('.grid-table-cell').each(function (i, ele) {
            var $el = $(ele);
            var h = $el.css({ height: 'auto' }).outerHeight();
            if (h > height) {
              height = h;
            }
          });
          $row.children().css({
            height: height + 'px'
          });
        });
      }
    }, {
      key: 'move',
      value: function move(distance) {
        var leftMove = this.currentLeftWidth + distance,
            rightMove = this.currentRightWidth - distance;
        if (leftMove < 32) {
          leftMove = 32;
          rightMove = this.currentLeftWidth + this.currentRightWidth - 32;
        }
        if (rightMove < 32) {
          rightMove = 32;
          leftMove = this.currentLeftWidth + this.currentRightWidth - 32;
        }
        this.$leftElements.css({
          width: leftMove + 'px'
        });
        this.$rightElements.css({
          width: rightMove + 'px'
        });
        // 除了改变宽度，还要改变control的高度
        this.updateBorderHeight();
        this.$element.trigger('gridchange.dashboard');
      }
    }, {
      key: 'repaint',
      value: function repaint() {}
    }]);

    return DragTable;
  })();

  function gridtable(options) {

    return this.each(function (index, ele) {
      var dragTable = new DragTable($(ele), options);
    });
  }

  $.fn.extend({ gridtable: gridtable });
})(jQuery);
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function ($) {

  var defaults = {};

  var Stick = (function () {
    function Stick($element, options) {
      var _this = this;

      _classCallCheck(this, Stick);

      this.$element = $element;
      options = this.options = $.extend(true, {}, defaults, options);
      this.repaint();
      $(window).on('resize', function () {
        _this.repaint();
      });
      $(window).on('scroll', function () {});
    }

    _createClass(Stick, [{
      key: 'repaint',
      value: function repaint() {
        var offset = this.$element.offset();
        this.$element.css({
          position: 'fixed',
          top: '50px',
          left: offset.left + 'px'
        });
      }
    }]);

    return Stick;
  })();

  function stick(options) {

    return this.each(function (index, ele) {
      var $this = $(ele);
      var stickObj = $this.data('stick');
      if (stickObj == null) {
        stickObj = new Stick($this, options);
        $this.data('stick', stickObj);
      }
    });
  }

  $.fn.extend({ stick: stick });
})(jQuery);