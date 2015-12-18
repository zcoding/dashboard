"use strict";

(function ($) {

  $.fn.button = function (options) {
    return $(this).each(function (index, ele) {});
  };
})(jQuery);
'use strict';

(function ($) {

  function parseOptions(string) {
    if ($.isPlainObject(string)) {
      return string;
    }

    var start = string ? string.indexOf('{') : -1;
    var options = {};

    if (start != -1) {
      try {
        options = new Function('', 'var json = ' + string.substr(start) + '; return JSON.parse(JSON.stringify(json));')();
      } catch (e) {}
    }

    return options;
  }

  $.fn.collapse = function () {

    return $(this).each(function (index, ele) {

      var $this = $(ele);
      var config = parseOptions($this.data('collapse'));
      var $targets = $(config.target);
      $this.click(function (evt) {
        evt.preventDefault();
        $targets.slideToggle(100);
      });
    });
  };
})(jQuery);
'use strict';

(function ($) {

  var animation = (function () {

    var animationEnd = (function () {
      var element = document.body || document.documentElement;
      var animEndEventNames = {
        WebkitAnimation: 'webkitAnimationEnd',
        MozAnimation: 'animationend',
        OAnimation: 'oAnimationEnd oanimationend',
        animation: 'animationend'
      };

      for (var name in animEndEventNames) {
        if (element.style[name] !== undefined) {
          return animEndEventNames[name];
        }
      }
    })();

    return animationEnd && { end: animationEnd };
  })();

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
      this.$dialog = this.$element.find('.modal-dialog');
      this.$backdrop = null;
      this.isShown = null;
      this.originalBodyPad = null;
      this.scrollbarWidth = 0;
      this.ignoreBackdropClick = false;

      if (this.options.remote) {
        this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal');
        }, this));
      }
    }

    _createClass(Modal, [{
      key: 'show',
      value: function show() {}
    }, {
      key: 'hide',
      value: function hide() {}
    }, {
      key: 'toggle',
      value: function toggle() {}
    }]);

    return Modal;
  })();

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
    modal: function modal(options) {
      var _this = this;

      return this.each(function (index, ele) {

        var $this = $(ele);
        var data = $this.data('db.modal');
        var options = $.extend({}, Modal.DEFAULTS, $this.data(), (typeof option === 'undefined' ? 'undefined' : _typeof(option)) == 'object' && option);
        if (!data) $this.data('db.modal', data = new Modal(_this, options));
        if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);

        // var $target = $(ele);
        // $target.trigger('db.modal.open');
        // $target.addClass('show animate-fade-in');
        // $target.off('webkitAnimationEnd').one('webkitAnimationEnd', function() {
        //   $target.removeClass('animate-fade-in');
        //   $target.trigger('db.modal.opened');
        // });
        // var $dimmer = $('<div class="modal-dimmer">');
        // $(document.body).append($dimmer);
        // setTimeout(function() {
        //   $dimmer.addClass('active');
        // }, 0);
        // $target.click(function(evt) {
        //   $target.trigger('db.modal.close');
        //   $dimmer.one('webkitTransitionEnd', function() {
        //     $dimmer.remove();
        //   });
        //   $dimmer.removeClass('active');
        //   $target.addClass('animate-fade-out');
        //   $target.off('webkitAnimationEnd').one('webkitAnimationEnd', function() {
        //     $target.removeClass('show animate-fade-out');
        //     $target.trigger('db.modal.closed');
        //   });
        // });
      });
    }
  });
})(jQuery);
"use strict";

(function ($) {

  $.fn.tab = function (options) {
    return $(this).each(function (index, ele) {});
  };
})(jQuery);