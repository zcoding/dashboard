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

  $.fn.button.noConflit = function () {
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
"use strict";

(function ($) {

  $.fn.extend({
    collapse: function collapse(options) {
      return this.each(function (index, ele) {
        var $this = $(ele);
        $this.slideToggle(300);
      });
    }
  });
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