(($) => {

  function scrollbar(options) {
    return this.each((index, ele) => {

      const HEIGHT = this.innerHeight();
      let $scrollbar = this.children('.scrollbar'), $scrollContent = this.children('.scroll-content');

      const CONTENT_HEIGHT = $scrollContent.outerHeight(true);

      const ratio = HEIGHT / CONTENT_HEIGHT * 100;

      $scrollbar.css({
        height: ratio + '%'
      });

      this.on('mousewheel', (e) => {
        var delta = e.originalEvent.wheelDeltaY;
        var move = -delta;
        this.scrollTop(move);
        $scrollbar.css({
          top: move + 'px'
        });
      });

    });
  }

  $.fn.extend({ scrollbar });

})(jQuery);
