(function($) {

  function parseOptions(string) {
    if ($.isPlainObject(string)) {
      return string;
    }

    var start = (string ? string.indexOf('{') : -1);
    var options = {};

    if (start != -1) {
      try {
        options = (new Function('',
          'var json = ' + string.substr(start) +
          '; return JSON.parse(JSON.stringify(json));'))();
      } catch (e) {
      }
    }

    return options;
  }

  $.fn.collapse = function() {

    return $(this).each(function(index, ele) {

      var $this = $(ele);
      var config = parseOptions($this.data('collapse'));
      var $targets = $(config.target);
      $this.click(function(evt) {
        evt.preventDefault();
        $targets.slideToggle(100);
      });

    });

  };

})(jQuery);
