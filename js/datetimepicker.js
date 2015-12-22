(($) => {

  class Picker {
    constructor(selectedDate) {
      this.selectedDate = selectedDate;
    }

    render($element) {
      let selectedDate = this.selectedDate;
      let year = selectedDate.getFullYear(), month = selectedDate.getMonth(), date = selectedDate.getDate();

      let html = `<table><thead><tr class="header"><th class="prev"><i class="fa fa-angle-left"></i></th><th colspan="5">${year}-${month+1}-${date}</th><th class="next"><i class="fa fa-angle-right"></i></th></tr>`;
      html += '<tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>';
      html += '</thead><tbody>';

      let dates = [];

      let thisMonthFirstDateObj = new Date(year, month, 1);
      let thisMonthFirstDay = thisMonthFirstDateObj.getDay();

      if (thisMonthFirstDay > 0) {
        let prevMonthLastDate = new Date(year, month, 0).getDate();
        for (let i = 0; i < thisMonthFirstDay; ++i) {
          dates.unshift({
            type: 'old date',
            show: prevMonthLastDate--
          });
        }
      }

      let thisMonthLastDateObj = new Date(year, month+1, 0);
      let thisMonthLastDate = thisMonthLastDateObj.getDate();
      let thisMonthLastDay = thisMonthLastDateObj.getDay();

      for (let i = 1; i <= thisMonthLastDate; ++i) {
        let type = i === date ? 'active date' : 'date';
        dates.push({
          type,
          show: i
        });
      }

      if (thisMonthLastDay !== 6) {
        for (let i = 1; i <= 6 - thisMonthLastDay; ++i) {
          dates.push({
            type: 'new date',
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
      return $element.html(html);
    }
  }

  function datepicker(options) {

    return this.each(() => {

      const dateString = options.date;
      let selectedDate = dateString ? new Date(dateString) : new Date();

      var picker = new Picker(selectedDate);

      if (this.is('input')) {
        var $wrapper = $('<div class="date-picker float"></div>');
        this.parent().css({
          "position": "relative"
        }).append($wrapper);
        this.val(`${selectedDate.getFullYear()}-${selectedDate.getMonth()+1}-${selectedDate.getDate()}`);
        picker.render($wrapper);
        this.on('click', () => {
          $wrapper.addClass('show');
          var forceReflow = $wrapper[0].offsetWidth;
          $wrapper.addClass('in');
        });
        $wrapper.on('click', (event) => {
          event.stopPropagation();
        });
        $wrapper.on('click', '.date', (event) => {
          let $target = $(event.target);
          let date = parseInt(event.target.innerHTML);
          let selectedDate = picker.selectedDate;
          let year = selectedDate.getFullYear(), month;
          if ($target.hasClass('active')) {
            return false;
          } else if ($target.hasClass('old')) {
            month = selectedDate.getMonth()-1;
          } else if ($target.hasClass('new')) {
            month = selectedDate.getMonth()+1;
          } else {
            month = selectedDate.getMonth()
          }
          picker.selectedDate = new Date(year, month, date);
          this.val(`${year}-${month+1}-${date}`);
          picker.render($wrapper);
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
        picker.render(this);
      }

      return this;

    });

  }

  $.fn.extend({ datepicker });

})(jQuery);
