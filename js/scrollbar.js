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
      $element.css({
        overflow: 'hidden'
      });
      let $parent = this.$parent = $element.parent();
      let $scrollbar = this.$scrollbar = $(`<div class="scrollbar ${options.style}">`);
      if (!/relative|absolute|fixed/.test($parent.css('position'))) {
        $parent.css({ "position": "relative" });
      }
      $parent.append($scrollbar);

      this.ContentHeight = $element[0].scrollHeight;

      this.Height = $element.outerHeight();

      this.ScrollbarHeight = this.Height / this.ContentHeight * this.Height;
      this.MaxMoveHeight = this.ContentHeight - this.Height;
      this.MaxPositionTop = this.Height / this.ContentHeight * this.MaxMoveHeight;

      var scrollbarPosition = $element.position(), scrollbarMarginTop = parseInt($element.css('marginTop'));
      var paddingRight = $parent.css('paddingRight');
      this.shimTop = scrollbarPosition.top + scrollbarMarginTop;
      $scrollbar.css({
        width: `${options.width}px`,
        borderRadius: `${options.width / 2}px`,
        top: `${this.shimTop}px`,
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
      $element.on('mouseenter', () => {
        $scrollbar.addClass('hover');
      });
      $element.on('mouseleave', () => {
        $scrollbar.removeClass('hover');
      });

      this.draging = false;
      this.startY = 0;
      this.distance = 0;
      this.startTop = this.shimTop;
      this.req = null;
      this.startContentTop = 0;

      $scrollbar.on('mousedown', (event) => {
        this.startY = event.pageY;
        this.start();
      });

      $(document).on('mousemove', (event) => {
        if (this.draging) {
          this.distance = event.pageY - this.startY;
        }
      });

      $(document).on('mouseup', (event) => {
        this.stop();
      });

      // 当窗口大小发生变化时，需要重新计算长度
      $(window).on('resize', () => {
        this.repaint();
      });
      // 当内容发生变化时，也可能会影响高度，由于无法检测到内容高度的变化，所以在具体使用时，需要在可能引起内容变化的代码中手动对滚动条重绘
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
        top: `${this.shimTop + scrollbarMove}px`
      });

      if (move > 0 && move < this.MaxMoveHeight) {
        event.preventDefault();
        event.stopPropagation();
      }
    }

    start() {
      let $scrollbar = this.$scrollbar, $element = this.$element;
      this.startTop = $scrollbar.position().top;
      this.startContentTop = $element.scrollTop();
      $scrollbar.addClass('drag');
      $element.addClass('drag');
      $(document.body).addClass('drag');
      this.draging = true;
      this.req = requestAnimationFrame($.proxy(this.step, this));
    }

    stop() {
      this.draging = false;
      cancelAnimationFrame(this.req);
      this.req = null;
      this.$scrollbar.removeClass('drag');
      this.$element.removeClass('drag');
      $(document.body).removeClass('drag');
      this.distance = 0;
      this.startY = 0;
    }

    step() {
      if (this.draging) {
        this.move(this.distance);
        this.req = requestAnimationFrame($.proxy(this.step, this));
      }
    }

    move(distance) {
      let positionTop = this.startTop + distance;
      positionTop = positionTop < this.shimTop ? this.shimTop : (positionTop > this.shimTop + this.MaxPositionTop ? this.shimTop + this.MaxPositionTop : positionTop);
      this.$scrollbar.css({
        top: `${positionTop}px`
      });
      let contentMove = this.ContentHeight / this.Height * distance;
      this.$element.scrollTop(this.startContentTop + contentMove);
    }

    repaint() {
      this.ContentHeight = this.$element[0].scrollHeight;
      this.Height = this.$element.outerHeight();
      this.ScrollbarHeight = this.Height / this.ContentHeight * this.Height;
      this.MaxMoveHeight = this.ContentHeight - this.Height;
      this.MaxPositionTop = this.Height / this.ContentHeight * this.MaxMoveHeight;

      var scrollbarPosition = this.$element.position(), scrollbarMarginTop = parseInt(this.$element.css('marginTop'));
      this.shimTop = scrollbarPosition.top + scrollbarMarginTop;

      this.$scrollbar.css({
        height: this.ScrollbarHeight
      });
      if (this.Height === this.ContentHeight) {
        this.$scrollbar.hide();
      } else {
        this.$scrollbar.show();
      }
    }

  }

  function scrollbar(options) {

    return this.each((index, ele) => {
      let $this = $(ele);
      // 如果是mac os就不要初始化
      if(/Mac OS X/ig.test(navigator.userAgent)) {
        $this.addClass('scroll-y');
        return false;
      }
      let scrollbar = $this.data('scrollbar');
      if (typeof scrollbar === 'undefined') {
        scrollbar = new Scrollbar($this, options);
        $this.data('scrollbar', scrollbar);
      }

    });
  }

  $.fn.extend({ scrollbar });

})(jQuery);
