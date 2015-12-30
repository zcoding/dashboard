(($) => {

  function gridtable() {

    return this.each((index, ele) => {
      let $headerFirstRow = this.find('.grid-table-header .grid-table-row').first();
      const TableWidth = this.innerWidth();

      let $headerCells = $headerFirstRow.children('.grid-table-cell'), $headerControls = $headerFirstRow.children('.grid-table-control');
      var initWidth = (TableWidth - $headerControls.length * 2) / $headerCells.length;
      $headerCells.css({
        width: initWidth + 'px'
      });

      let $bodyRows = this.find('.grid-table-body .grid-table-row');

      let $bodyCells = $bodyRows.find('.grid-table-cell');
      $bodyCells.css({
        width: initWidth + 'px'
      });

      let $footerCells = this.find('.grid-table-footer .grid-table-row .grid-table-cell');
      $footerCells.css({
        width: initWidth + 'px'
      });

      let $target = null, $befores = null, $afters = null, currentBeforeWidth = initWidth, currentAfterWidth = initWidth;

      let currentPosition = 0, dragStart = false;;

      this.on('mousedown', '.grid-table-control', (event) => {
        $target = $(event.currentTarget);
        let controlIndex = ($target.index()+1) / 2;
        $befores = $headerCells.eq(controlIndex-1).add($footerCells.eq(controlIndex-1));
        $afters = $headerCells.eq(controlIndex).add($footerCells.eq(controlIndex));
        $bodyRows.each((i) => {
          let $cells = $bodyRows.eq(i).find('.grid-table-cell');
          $befores = $befores.add($cells.eq(controlIndex-1));
          $afters = $afters.add($cells.eq(controlIndex));
        });
        currentBeforeWidth = parseFloat($befores[0].style.width);
        currentAfterWidth = parseFloat($afters[0].style.width);
        currentPosition = event.pageX;
        dragStart = true;
        this.addClass('drag');
      });

      this.on('mousemove', (event) => {
        if (dragStart) {
          let move = event.pageX - currentPosition;

          let beforeMove = currentBeforeWidth + move, afterMove = currentAfterWidth - move;
          if (beforeMove < 32) {
            beforeMove = 32;
            afterMove = currentBeforeWidth + currentAfterWidth - 32;
          }
          if (afterMove < 32) {
            afterMove = 32;
            beforeMove = currentBeforeWidth + currentAfterWidth - 32;
          }
          $befores.css({
            width: beforeMove + 'px'
          });
          $afters.css({
            width: afterMove + 'px'
          });
        }
      });

      this.on('mouseup', (event) => {
        dragStart = false;
        this.removeClass('drag');
      });
    });

  }

  $.fn.extend({ gridtable });

})(jQuery);
