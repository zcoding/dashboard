(($) => {

  const defaults = {
    speed: 300
  };

  class Collapse {

    constructor($element, options) {
      options = this.options = $.extend(true, {}, defaults, options);
      this.$element = $element;
      let $target = $(options.target || $element.data('collapse-target'));
      $element.on('click', () => {
        $target.slideToggle(options.speed);
      });
    }

  }

  function collapse(options) {

    return this.each((index, ele) => {
      let $this = $(ele);
      let collapse = $this.data('collapse');
      if (collapse == null || !(collapse instanceof Collapse)) {
        collapse = new Collapse($this, options);
        $this.data('collapse', collapse);
      }
    });
  }

  $.fn.extend({ collapse });

})(jQuery);
