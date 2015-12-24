(($) => {

  $.fn.extend({

    tab(options) {
      return this.each(() => {
        let activeIndex = options.active;
        let $this = this;
        const Width = $this.width();
        let $nav = $this.children('.nav');
        let $items = $nav.children('li'), $indicator = $nav.children('.indicator');
        const ItemLength = $items.length;

        let $panes = $this.find('.tab-content .tab-pane');
        $panes.removeClass('active').eq(activeIndex).addClass('active');

        $items.css({
          width: (1 / ItemLength * 100) + '%'
        });
        let itemWidth = $items.width();
        $indicator.css({
          width: itemWidth + 'px',
          left: activeIndex * itemWidth
        });

        $this.on('click', '.nav > li', event => {
          let $target = $(event.currentTarget);
          activeIndex = $target.index();
          $items.removeClass('active').eq(activeIndex).addClass('active');
          $panes.removeClass('active').eq(activeIndex).addClass('active');
          $indicator.css({
            left: activeIndex * itemWidth
          });
        });
      });
    }

  });

})(jQuery);
