(($) => {

  class Modal {

    constructor(element, options) {
      this.options  = options;
      this.$body    = $(document.body);
      this.$element = $(element);
      this.$dimmer  = null;
      this.state    = { show: false };
    }

    show() {
      let $element = this.$element;
      let $dimmer = this.$dimmer = $('<div class="modal-dimmer">');

      $element.trigger('db.modal.open');

      $element.addClass('show');
      $dimmer.appendTo(this.$body);

      if (Dashboard.support.transition) {
        var forceReflow = $element[0].offsetWidth; // force reflow
        $element.one(Dashboard.support.transition.end, () => {
          $element.trigger('db.modal.opened');
          this.state.show = true;
        });
      } else {
        $element.trigger('db.modal.opened');
        this.state.show = true;
      }

      $element.addClass('in');
      $dimmer.addClass('in');

      $element.on('click', '[data-modal-close]', () => {
        this.hide();
      });
    }

    hide() {
      let $element = this.$element, $dimmer = this.$dimmer;
      $element.trigger('db.modal.close');
      const transition = Dashboard.support.transition;
      if (transition) {
        $dimmer.one(transition.end, () => {
          $dimmer.remove();
          this.$dimmer = null;
        });
        $element.one(Dashboard.support.transition.end, () => {
          $element.removeClass('show');
          $element.trigger('db.modal.closed');
          this.state.show = false;
        });
        $dimmer.removeClass('in');
        $element.removeClass('in');
      } else {
        $dimmer.remove();
        this.$dimmer = null;
        $dimmer.removeClass('in');
        $element.removeClass('in');
        $element.trigger('db.modal.closed');
      }
    }

    toggle() {
      return this.state.show ? this.hide() : this.show();
    }

  }

  Modal.DEFAULTS = {};

  /**
   * jQuery.fn.modal
   *
   * @params: options {PlainObject|String}
   *
   * Events:
   * 1. db.modal.open
   * 2. db.modal.opened
   * 3. db.modal.close
   * 4. db.modal.closed
   */

  $.fn.extend({

    modal(option) {

      return this.each((index, ele) => {

        var $this   = $(ele);
        var data    = $this.data('db.modal');
        var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
        if (!data) {
          $this.data('db.modal', (data = new Modal(ele, options)));
        }
        if (typeof option == 'string') {
          data[option]();
        } else if (options.show) {
          data.show();
        }

      });

    }

  });

})(jQuery);
