(($) => {

  const defaults = {};

  class DataTable {

    constructor($element, options) {
      this.$element = $element;
      options = this.options = $.extend(true, {}, defaults, options);

      let $bodyWrapper = $element.find('.data-table-body'), $headerWrapper = $element.find('.data-table-header');
      $bodyWrapper.on('scroll', (event) => {
        $headerWrapper.scrollLeft($bodyWrapper.scrollLeft());
      });
    }

  }

  function dataTable(options) {

    return this.each(function(index, ele) {
      let $this = $(ele);
      let dataTable = $this.data('datatable');
      if (dataTable == null) {
        dataTable = new DataTable($this, options);
        $this.data('datatable', dataTable);
      }
    });

  }

  $.fn.extend({ dataTable });

})(jQuery);
