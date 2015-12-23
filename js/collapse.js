(($) => {

  const defaultOptions = {
    timeout: 300
  };

  function collapse(options) {
    let option = $.extend({}, defaultOptions, (typeof options === 'object' ? options: null));
    return this.each((index, ele) => {
      let $this = $(ele);
      $this.slideToggle(option.timeout);
    });
  }

  const old = $.fn.collapse;

  $.fn.extend({ collapse });

  $.fn.collapse.noConflict = function() {
    $.fn.collapse = old;
    return this;
  };

})(jQuery);
