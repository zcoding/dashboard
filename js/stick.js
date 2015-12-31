(($) => {

  const defaults = {};

  class Stick {
    constructor($element, options) {
      this.$element = $element;
      options = this.options = $.extend(true, {}, defaults, options);
      this.repaint();
      $(window).on('resize', () => {
        this.repaint();
      });
      $(window).on('scroll', () => {});
    }

    repaint() {
      let offset = this.$element.offset();
      this.$element.css({
        position: 'fixed',
        top: '50px',
        left: `${offset.left}px`
      });
    }
  }

  function stick(options) {

    return this.each((index, ele) => {
      let $this = $(ele);
      let stickObj = $this.data('stick');
      if (stickObj == null) {
        stickObj = new Stick($this, options);
        $this.data('stick', stickObj);
      }
    });

  }

  $.fn.extend({ stick });

})(jQuery);
