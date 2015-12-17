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
"use strict";

(function ($) {

  $.fn.tab = function (options) {
    return $(this).each(function (index, ele) {});
  };
})(jQuery);