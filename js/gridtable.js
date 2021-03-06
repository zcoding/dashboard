(($) => {

  const defaults = {
      dragable: true // 是否允许通过拖动单元格边框改变单元格大小
    , gridWidth: false // 初始单元格占宽度百分比，用数组表示，如果没有就等分
  };

  class DragTable {
    constructor($element, options) {
      this.$element = $element;
      options = this.options = $.extend(true, {}, defaults, options);

      let $headerRows = this.$headerRows = $element.find('.grid-table-header .grid-table-row');
      const TableWidth = $element.innerWidth();

      let $headerCells = $headerRows.children('.grid-table-cell'), $headerControls = $headerRows.children('.grid-table-control');
      const TotalWidth = TableWidth - $headerControls.length * 2;
      var initWidth = TotalWidth / $headerCells.length;
      let $bodyRows = this.$bodyRows = $element.find('.grid-table-body .grid-table-row');
      let $bodyCells = $bodyRows.find('.grid-table-cell');
      let $footerRows = this.$footerRows = $element.find('.grid-table-footer .grid-table-row')
      let $footerCells = $footerRows.children('.grid-table-cell');

      if (options.gridWidth && Array.isArray(options.gridWidth)) {
        options.gridWidth.forEach((percentage, i) => {
          $headerCells.eq(i).css({
            width: `${TotalWidth * percentage / 100}px`
          });
          $bodyRows.each((j, ele) => {
            $bodyRows.eq(j).children('.grid-table-cell').eq(i).css({
              width: `${TotalWidth * percentage / 100}px`
            });
          });
          $footerCells.eq(i).css({
            width: `${TotalWidth * percentage / 100}px`
          });
        });
      } else {
        $headerCells.css({
          width: initWidth + 'px'
        });

        $bodyCells.css({
          width: initWidth + 'px'
        });

        $footerCells.css({
          width: initWidth + 'px'
        });
      }

      // 设置control的长度
      this.updateBorderHeight();

      this.$leftElements = null;
      this.$rightElements = null;
      this.currentLeftWidth = 0;
      this.currentRightWidth = 0;
      this.startPosition = 0;
      this.draging = false;
      this.req = null;
      this.distance = 0;

      if (options.dragable) {
        $element.on('mousedown', '.grid-table-control', (event) => {
          let $target = $(event.currentTarget);
          let controlIndex = ($target.index()+1) / 2;
          this.$leftElements = $headerCells.eq(controlIndex-1).add($footerCells.eq(controlIndex-1));
          this.$rightElements = $headerCells.eq(controlIndex).add($footerCells.eq(controlIndex));
          $bodyRows.each((i) => {
            let $cells = $bodyRows.eq(i).find('.grid-table-cell');
            this.$leftElements = this.$leftElements.add($cells.eq(controlIndex-1));
            this.$rightElements = this.$rightElements.add($cells.eq(controlIndex));
          });
          this.currentLeftWidth = parseFloat(this.$leftElements[0].style.width);
          this.currentRightWidth = parseFloat(this.$rightElements[0].style.width);
          this.startPosition = event.pageX;
          this.start();
        });

        $element.on('mousemove', (event) => {
          if (this.draging) {
            this.distance = event.pageX - this.startPosition;
          }
        });

        $(document).on('mouseup', (event) => {
          this.stop();
        });
      } else {
        $element.addClass('no-drag');
      }
    }

    start() {
      this.draging = true;
      this.$element.addClass('drag');
      this.req = requestAnimationFrame($.proxy(this.step, this));
    }

    stop() {
      this.draging = false;
      cancelAnimationFrame(this.req);
      this.req = null;
      this.$element.removeClass('drag');
      this.distance = 0;
      this.startPosition = 0;
    }

    step() {
      if (this.draging) {
        this.move(this.distance);
        this.req = requestAnimationFrame($.proxy(this.step, this));
      }
    }

    updateBorderHeight() {
      this.$bodyRows.each((i, ele) => {
        let $row = $(ele);
        let height = 0;
        $row.children('.grid-table-cell').each((i, ele) => {
          let $el = $(ele);
          let h = $el.css({ height: 'auto' }).outerHeight();
          if (h > height) {
            height = h;
          }
        });
        $row.children().css({
          height: `${height}px`
        });
      });

      this.$headerRows.each((i, ele) => {
        let $row = $(ele);
        let height = 0;
        $row.children('.grid-table-cell').each((i, ele) => {
          let $el = $(ele);
          let h = $el.css({ height: 'auto' }).outerHeight();
          if (h > height) {
            height = h;
          }
        });
        $row.children().css({
          height: `${height}px`
        });
      });

      this.$footerRows.each((i, ele) => {
        let $row = $(ele);
        let height = 0;
        $row.children('.grid-table-cell').each((i, ele) => {
          let $el = $(ele);
          let h = $el.css({ height: 'auto' }).outerHeight();
          if (h > height) {
            height = h;
          }
        });
        $row.children().css({
          height: `${height}px`
        });
      });
    }

    move(distance) {
      let leftMove = this.currentLeftWidth + distance, rightMove = this.currentRightWidth - distance;
      if (leftMove < 32) {
        leftMove = 32;
        rightMove = this.currentLeftWidth + this.currentRightWidth - 32;
      }
      if (rightMove < 32) {
        rightMove = 32;
        leftMove = this.currentLeftWidth + this.currentRightWidth - 32;
      }
      this.$leftElements.css({
        width: leftMove + 'px'
      });
      this.$rightElements.css({
        width: rightMove + 'px'
      });
      // 除了改变宽度，还要改变control的高度
      this.updateBorderHeight();
      this.$element.trigger('gridchange.dashboard');
    }

    repaint() {
    }
  }

  function gridtable(options) {

    return this.each(function(index, ele) {
      let dragTable = new DragTable($(ele), options);
    });

  }

  $.fn.extend({ gridtable });

})(jQuery);
