(($) => {

  class Picker {
    constructor($element, selectedDate) {
      this.$element = $element;
      this.selectedDate = selectedDate;
      this.viewDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate()); // clone a date
      $element.on('click', '.date', (event) => {
        let $target = $(event.target);
        let date = parseInt(event.target.innerHTML);
        let viewDate = this.viewDate;
        let year = viewDate.getFullYear(), month;
        if ($target.hasClass('active')) {
          return false;
        } else if ($target.hasClass('old')) {
          month = viewDate.getMonth()-1;
        } else if ($target.hasClass('new')) {
          month = viewDate.getMonth()+1;
        } else {
          month = viewDate.getMonth()
        }
        this.selectedDate = new Date(year, month, date);
        this.viewDate = new Date(year, month, date);
        this.render();
        $element.trigger('datechange.datepicker', {
          year: this.selectedDate.getFullYear(),
          month: this.selectedDate.getMonth()+1,
          date: this.selectedDate.getDate()
        });
      });
      $element.on('click', '.prev', (event) => {
        let viewDate = this.viewDate;
        this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, viewDate.getDate())
        this.render();
      });
      $element.on('click', '.next', (event) => {
        let viewDate = this.viewDate;
        this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, viewDate.getDate())
        this.render();
      });
    }

    render() {
      let viewDate = this.viewDate;
      let viewYear = viewDate.getFullYear(), viewMonth = viewDate.getMonth(), date = viewDate.getDate();
      let selectedDateObj = this.selectedDate;
      let selectedYear = selectedDateObj.getFullYear(), selectedMonth = selectedDateObj.getMonth(), selectedDate = selectedDateObj.getDate();

      let html = `<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5">${viewYear}-${viewMonth+1}-${date}</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>`;
      html += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
      html += '</thead><tbody>';

      let dates = [];

      let thisMonthFirstDateObj = new Date(viewYear, viewMonth, 1);
      let thisMonthFirstDay = thisMonthFirstDateObj.getDay();

      if (thisMonthFirstDay > 0) {
        let prevMonthLastDateObj = new Date(viewYear, viewMonth, 0);
        let prevMonthLastDateYear = prevMonthLastDateObj.getFullYear();
        let prevMonthLastDateMonth = prevMonthLastDateObj.getMonth();
        let prevMonthLastDateDate = prevMonthLastDateObj.getDate();
        for (let i = 0; i < thisMonthFirstDay; ++i) {
          let showDate = prevMonthLastDateDate--;
          let type = 'old date';
          if (selectedYear === prevMonthLastDateYear && selectedMonth === prevMonthLastDateMonth && selectedDate === showDate) {
            type = 'active date';
          }
          dates.unshift({
            type,
            show: showDate
          });
        }
      }

      let thisMonthLastDateObj = new Date(viewYear, viewMonth+1, 0);
      let thisMonthLastDateDate = thisMonthLastDateObj.getDate();
      let thisMonthLastDateDay = thisMonthLastDateObj.getDay();

      for (let i = 1; i <= thisMonthLastDateDate; ++i) {
        let type = 'date';
        if (selectedYear === viewYear && selectedMonth === viewMonth && selectedDate === i) {
          type = 'active date';
        }
        dates.push({
          type,
          show: i
        });
      }

      if (thisMonthLastDateDay !== 6) {
        let nextMonthFirstDateObj = new Date(viewYear, viewMonth+1, 1);
        let nextMonthFirstDateYear = nextMonthFirstDateObj.getFullYear();
        let nextMonthFirstDateMonth = nextMonthFirstDateObj.getMonth();
        for (let i = 1; i <= 6 - thisMonthLastDateDay; ++i) {
          let type = 'new date';
          if (selectedYear === nextMonthFirstDateYear && selectedMonth === nextMonthFirstDateMonth && selectedDate === i) {
            type = 'active date';
          }
          dates.push({
            type,
            show: i
          });
        }
      }

      for (let i = 0; i < dates.length; ++i) {
        if (i % 7 === 0) {
          html += '<tr>';
        }
        let date = dates[i];
        html += `<td class="${date.type}">${date.show}</td>`;
        if (i % 7 === 6) {
          html += '</tr>';
        }
      }

      html += '</tbody></table>';
      this.$element.html(html);
      return this;
    }
  }

  function datepicker(options) {

    return this.each(() => {

      const dateString = options.date;
      let selectedDate = dateString ? new Date(dateString) : new Date();

      if (this.is('input')) {
        var $wrapper = $('<div class="date-picker float"></div>');
        this.parent().css({
          "position": "relative"
        }).append($wrapper);
        this.val(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${selectedDate.getDate()}`);
        var picker = new Picker($wrapper, selectedDate);
        picker.render();
        this.on('click', () => {
          $wrapper.addClass('show');
          var forceReflow = $wrapper[0].offsetWidth;
          $wrapper.addClass('in');
        });
        $wrapper.on('click', (event) => {
          event.stopPropagation();
        });
        $wrapper.on('datechange.datepicker', (event, show) => {
          this.val(`${show.year}-${show.month}-${show.date}`);
        });
        $(document).on('click.datepicker.close', (event) => {
          let $target = $(event.target);
          if (!$target.is(this)) {
            $wrapper.one('webkitTransitionEnd', () => {
              if (!$wrapper.hasClass('in')) {
                $wrapper.removeClass('show');
              }
            });
            $wrapper.removeClass('in');
          }
        });
      } else {
        let picker = new Picker(this, selectedDate);
        picker.render();
      }

      return this;

    });

  }

  $.fn.extend({ datepicker });

})(jQuery);
