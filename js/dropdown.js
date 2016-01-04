(($) => {

  const defaults = {
    show: false
  };

  class Dropdown {

    constructor($element, options) {
      this.options = options = $.extend(true, {}, defaults, options);
      this.$element = $element;
      let $trigger = this.$trigger = $element.find('[data-dropdown-trigger]'), $menu = this.$menu = $element.children('.dropdown-menu');

      this.show = this.options.show;

      $trigger.on('click', (event) => {
        if (this.show) {
          this.hideMenu();
        } else {
          this.showMenu();
        }
        event.stopPropagation();
      });

      $menu.on('click', (event) => {
        event.stopPropagation();
      });

      $(document).on('click', (event) => {
        this.hideMenu();
      });
    }

    hideMenu() {
      this.show = false;
      this.$menu
        .one(Dashboard.support.transition.end, () => {
          if (!this.show) { // Must check current status
            this.$menu.removeClass('active');
          }
        })
        .removeClass('in');
    }

    showMenu() {
      this.show = true;
      this.$menu.addClass('active');
      this.$menu[0].offsetWidth; // Must force reflow
      this.$menu.addClass('in');
    }

  }

  function dropdown(options) {

    return this.each((index, ele) => {
      let $this = $(ele);
      let dropdown = $this.data('dropdown');
      if (dropdown == null) {
        dropdown = new Dropdown($this, options);
        $this.data('dropdown', dropdown);
      }
    });

  }

  $.fn.extend({ dropdown });

})(jQuery);
