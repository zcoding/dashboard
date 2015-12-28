(($) => {

  function scrollbar(options) {
    return this.each((index, ele) => {

      let $parent = this.parent(), $scrollbar = $('<div class="scrollbar">');
      if (!/relative|absolute|fixed/.test($parent.css('position'))) {
        $parent.css({ "position": "relative" });
      }
      $parent.append($scrollbar);

      const ContentHeight = this[0].scrollHeight;
      this.css({
        overflow: 'hidden'
      });

      const Height = this.outerHeight();
      const ScrollbarHeight = Height / ContentHeight * Height;
      const MaxMoveHeight = ContentHeight - Height;

      const Width = this.innerWidth();
      const Position = this.position();
      const MarginTop = parseInt(this.css('marginTop'));
      const PaddingRight = $parent.css('paddingRight');
      $scrollbar.css({
        top: Position.top + MarginTop + 'px',
        right: PaddingRight,
        height: ScrollbarHeight
      });
      $scrollbar[0].offsetWidth;
      $scrollbar.addClass('active');

      this.on('mousewheel', (e) => {
        var delta = e.originalEvent.wheelDeltaY < 0 ? -50 : 50;
        let currentScrollTop = this.scrollTop();
        let move = currentScrollTop - delta;
        move = move < 0 ? 0 : (move > MaxMoveHeight ? MaxMoveHeight : move);
        this.scrollTop(move);

        let scrollbarMove = move / ContentHeight * Height;
        $scrollbar.css({
          top: Position.top + MarginTop + scrollbarMove + 'px'
        });

        if (move > 0 && move < MaxMoveHeight) {
          e.preventDefault();
        }

      });

    });
  }

  $.fn.extend({ scrollbar });

})(jQuery);
