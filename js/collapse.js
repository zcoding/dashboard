(($) => {

  $.fn.extend({

    collapse(options) {
      return this.each((index, ele) => {
        let $this = $(ele);
        $this.slideToggle(300);
      });
    }

  });

})(jQuery);
