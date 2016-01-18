(($) => {

  const defaults = {
      dragable: true // 是否允许通过拖动单元格边框改变单元格大小
    , gridWidth: false // 初始单元格占宽度百分比，用数组表示，如果没有就等分
  };

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
