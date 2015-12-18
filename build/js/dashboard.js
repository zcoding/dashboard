"use strict";

(function ($) {

  $.fn.button = function (options) {
    return $(this).each(function (index, ele) {});
  };
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
'use strict';

(function ($, window) {

  var Dashboard = window.Dashboard = {};
  Dashboard.support = {};

  function transitionEnd() {
    var el = document.createElement('dashboard');

    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] };
      }
    }

    return false;
  }

  Dashboard.support.transition = transitionEnd();

  var rAF = (function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    function (callback) {
      return window.setTimeout(callback, 1000 / 60); // shoot for 60 fps
    };
  })();

  var cancelAF = (function () {
    return window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function (id) {
      window.clearTimeout(id);
    };
  })();
})(jQuery, window);
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

        $element.trigger('db.modal.open');
        $element.addClass('show');
        var $dimmer = this.$dimmer = $('<div class="modal-dimmer">');
        $dimmer.appendTo(this.$body);

        var forceReflow = $element[0].offsetWidth;

        $element.one('webkitTransitionEnd', function () {
          $element.trigger('db.modal.opened');
          _this.state.show = true;
        });
        $element.addClass('in');
        $dimmer.addClass('in');

        $element.on('click', '[data-modal-close]', function () {
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
        $dimmer.one('webkitTransitionEnd', function () {
          $dimmer.remove();
          _this2.$dimmer = null;
        });
        $element.one('webkitTransitionEnd', function () {
          $element.removeClass('show');
          $element.trigger('db.modal.closed');
          _this2.state.show = false;
        });
        $dimmer.removeClass('in');
        $element.removeClass('in');
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