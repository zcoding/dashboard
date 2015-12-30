(($) => {

  const defaults = {};

  function dropdown(options) {

    return this.each((index, ele) => {
      options = $.extend(true, {}, defaults, options);
      let $this = $(ele);
      let $trigger = $this.children('[data-dropdown-trigger]'), $menu = $this.children('.dropdown-menu');
      let data = $this.data('dropdown');
      if (data == null) {
        data = {
          show: false
        };
        $this.data('dropdown', data);
      }
      $trigger.on('click', () => {
        let data = $this.data('dropdown');
        if (data.show) {
          data.show = false;
          $menu.one('webkitTransitionEnd', () => {
            if (!data.show) { // Must check current status
              $menu.removeClass('active');
            }
          }).removeClass('in');
        } else {
          data.show = true;
          $menu.addClass('active');
          $menu[0].offsetWidth; // Must force reflow
          $menu.addClass('in');
        }
      });
    });

  }

  $.fn.extend({ dropdown });

})(jQuery);
