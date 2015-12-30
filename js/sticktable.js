(($) => {

  function stickTable() {

    return this.each((index, ele) => {
      let $td = this.find('table tr').first().children(), $cell = this.find('.table-stick-cell');
      $td.each((index, ele) => {
        $cell.eq(index).width($td.eq(index).width());
      });
    });

  }

  $.fn.extend({ stickTable });

})(jQuery);
