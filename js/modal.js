(($) => {

  class Modal {

    constructor(element, options) {
      this.options             = options;
      this.$body               = $(document.body);
      this.$element            = $(element);
      this.$dialog             = this.$element.find('.modal-dialog');
      this.$backdrop           = null;
      this.isShown             = null;
      this.originalBodyPad     = null;
      this.scrollbarWidth      = 0;
      this.ignoreBackdropClick = false;

      if (this.options.remote) {
        this.$element
          .find('.modal-content')
          .load(this.options.remote, $.proxy(function () {
            this.$element.trigger('loaded.bs.modal')
          }, this));
      }
    }

    show() {}

    hide() {}

    toggle() {}

  }

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

    modal(options) {
      return this.each((index, ele) => {

        var $this   = $(ele);
        var data    = $this.data('db.modal');
        var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option);
        if (!data) $this.data('db.modal', (data = new Modal(this, options)));
        if (typeof option == 'string') data[option](_relatedTarget);
        else if (options.show) data.show(_relatedTarget);

        // var $target = $(ele);
        // $target.trigger('db.modal.open');
        // $target.addClass('show animate-fade-in');
        // $target.off('webkitAnimationEnd').one('webkitAnimationEnd', function() {
        //   $target.removeClass('animate-fade-in');
        //   $target.trigger('db.modal.opened');
        // });
        // var $dimmer = $('<div class="modal-dimmer">');
        // $(document.body).append($dimmer);
        // setTimeout(function() {
        //   $dimmer.addClass('active');
        // }, 0);
        // $target.click(function(evt) {
        //   $target.trigger('db.modal.close');
        //   $dimmer.one('webkitTransitionEnd', function() {
        //     $dimmer.remove();
        //   });
        //   $dimmer.removeClass('active');
        //   $target.addClass('animate-fade-out');
        //   $target.off('webkitAnimationEnd').one('webkitAnimationEnd', function() {
        //     $target.removeClass('show animate-fade-out');
        //     $target.trigger('db.modal.closed');
        //   });
        // });
      });
    }

  });

})(jQuery);
