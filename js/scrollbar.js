(($) => {

  const Defaults = {
    style: 'dark',
    width: 8,
    speed: 50,
    fade: true
  };

  class Scrollbar {
    constructor($element, options) {
      options = this.options = $.extend(true, {}, Defaults, options);
      this.$element = $element;
      let $parent = this.$parent = $element.parent();
      let $scrollbar = this.$scrollbar = $(`<div class="scrollbar ${options.style}">`);
      if (!/relative|absolute|fixed/.test($parent.css('position'))) {
        $parent.css({ "position": "relative" });
      }
      $parent.append($scrollbar);

      this.ContentHeight = $element[0].scrollHeight;
      $element.css({
        overflow: 'hidden'
      });

      this.Height = $element.outerHeight();

      this.ScrollbarHeight = this.Height / this.ContentHeight * this.Height;
      this.MaxMoveHeight = this.ContentHeight - this.Height;
      this.MaxPositionTop = this.Height / this.ContentHeight * this.MaxMoveHeight;

      const Width = $element.innerWidth();
      var scrollbarPosition = $element.position(), scrollbarMarginTop = parseInt($element.css('marginTop'));
      var paddingRight = $parent.css('paddingRight');
      this.shimTop = scrollbarPosition.top + scrollbarMarginTop;
      $scrollbar.css({
        width: options.width + 'px',
        borderRadius: options.width / 2 + 'px',
        top: this.shimTop + 'px',
        right: paddingRight,
        height: this.ScrollbarHeight
      });
      if (options.fade) {
        $scrollbar.addClass('fade');
      }
      $scrollbar[0].offsetWidth;
      $scrollbar.addClass('active');

      if (this.Height === this.ContentHeight) {
        $scrollbar.hide();
      }

      $element.on('mousewheel', $.proxy(this.mousewheel, this));
      $element.on('mouseover', () => {
        $scrollbar.addClass('hover');
      });
      $element.on('mouseout', () => {
        $scrollbar.removeClass('hover');
      });

      this.drag = false;
      this.startY = 0;
      this.currentY = 0;
      this.startTop = this.shimTop;
      this.req = null;
      this.startContentTop = 0;

      $scrollbar.on('mousedown', (event) => {
        this.startY = event.pageY;
        this.startTop = this.$scrollbar.position().top;
        this.startContentTop = this.$element.scrollTop();
        this.$scrollbar.addClass('drag');
        this.$element.addClass('drag');
        this.drag = true;
        this.req = requestAnimationFrame($.proxy(this.step, this));
      });

      $(document).on('mousemove', (event) => {
        this.currentY = event.pageY;
      });
      $(document).on('mouseup', (event) => {
        this.$scrollbar.removeClass('drag');
        this.$element.removeClass('drag');
        this.drag = false;
      });

      // 当窗口大小发生变化时，需要重新计算长度
    }

    mousewheel(event) {
      let $element = this.$element, $scrollbar = this.$scrollbar;
      let speed = this.options.speed;
      var delta = event.deltaY < 0 ? -speed : speed;
      let currentScrollTop = $element.scrollTop();
      let move = currentScrollTop - delta;
      move = move < 0 ? 0 : (move > this.MaxMoveHeight ? this.MaxMoveHeight : move);
      $element.scrollTop(move);

      let scrollbarMove = move / this.ContentHeight * this.Height;
      $scrollbar.css({
        top: this.shimTop + scrollbarMove + 'px'
      });

      if (move > 0 && move < this.MaxMoveHeight) {
        event.preventDefault();
      }
    }

    step() {
      if (this.drag) {
        let move = this.currentY - this.startY;
        let positionTop = this.startTop + move;
        positionTop = positionTop < this.shimTop ? this.shimTop : (positionTop > this.shimTop + this.MaxPositionTop ? this.shimTop + this.MaxPositionTop : positionTop);
        this.$scrollbar.css({
          top: positionTop + 'px'
        });
        let contentMove = this.ContentHeight / this.Height * move;
        this.$element.scrollTop(this.startContentTop + contentMove);
        this.req = requestAnimationFrame($.proxy(this.step, this));
      } else {
        cancelAnimationFrame(this.req);
        this.req = null;
      }
    }

  }

  function scrollbar(options) {

    return this.each((index, ele) => {

      let scrollbar = this.data('scrollbar');
      if (typeof scrollbar === 'undefined') {
        scrollbar = new Scrollbar(this, options);
        this.data('scrollbar', scrollbar);
      }

    });
  }

  $.fn.extend({ scrollbar });

})(jQuery);
