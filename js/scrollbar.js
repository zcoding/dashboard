(($) => {

  const Defaults = {
    style: 'dark'
  };

  function scrollbar(options) {

    options = $.extend({}, Defaults, options);

    return this.each((index, ele) => {

      let $this = this;

      let $parent = this.parent(), $scrollbar = $(`<div class="scrollbar ${options.style}">`);
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
      const MaxPositionTop = Height / ContentHeight * MaxMoveHeight;

      const Width = this.innerWidth();
      const Position = this.position();
      const MarginTop = parseInt(this.css('marginTop'));
      const PaddingRight = $parent.css('paddingRight');
      const shimTop = Position.top + MarginTop;
      $scrollbar.css({
        top: shimTop + 'px',
        right: PaddingRight,
        height: ScrollbarHeight
      });
      $scrollbar[0].offsetWidth;
      $scrollbar.addClass('active');

      if (Height === ContentHeight) {
        $scrollbar.hide();
      }

      this.on('mousewheel', (event) => {
        var delta = event.originalEvent.wheelDeltaY < 0 ? -50 : 50;
        let currentScrollTop = this.scrollTop();
        let move = currentScrollTop - delta;
        move = move < 0 ? 0 : (move > MaxMoveHeight ? MaxMoveHeight : move);
        this.scrollTop(move);

        let scrollbarMove = move / ContentHeight * Height;
        $scrollbar.css({
          top: shimTop + scrollbarMove + 'px'
        });

        if (move > 0 && move < MaxMoveHeight) {
          event.preventDefault();
        }

      });

      // drag
      let drag = false, startY = 0, currentY = 0, startTop = shimTop, req = null, startContentTop = 0;
      $scrollbar.on('mousedown', (event) => {
        startY = event.pageY;
        startTop = $scrollbar.position().top;
        startContentTop = $this.scrollTop();
        $scrollbar.addClass('drag');
        drag = true;
        req = requestAnimationFrame(step);
      });
      function step() {
        if (drag) {
          let move = currentY - startY;
          let positionTop = startTop + move;
          positionTop = positionTop < shimTop ? shimTop : (positionTop > shimTop + MaxPositionTop ? shimTop + MaxPositionTop : positionTop);
          $scrollbar.css({
            top: positionTop + 'px'
          });
          let contentMove = ContentHeight / Height * move;
          $this.scrollTop(startContentTop + contentMove);
          req = requestAnimationFrame(step);
        } else {
          cancelAnimationFrame(req);
          req = null;
        }
      }
      $(document).on('mousemove', (event) => {
        currentY = event.pageY;
      });
      $(document).on('mouseup', (event) => {
        $scrollbar.removeClass('drag');
        drag = false;
      });

    });
  }

  $.fn.extend({ scrollbar });

})(jQuery);
