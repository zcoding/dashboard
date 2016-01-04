(($) => {

  const defaults = {
    timeout: 300
  };

  function collapse(options) {
    options = $.extend(true, {}, defaults, options);
    return this.each((index, ele) => {
      let $this = $(ele);
      $this.slideToggle(options.timeout);
    });
  }

  $.fn.extend({ collapse });

})(jQuery);
