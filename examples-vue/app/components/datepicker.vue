<template>

<div class="datepicker">

  <div class="date-picker" v-if="show === 'date'">
    <table>
      <thead>
        <tr class="header">
          <th class="prev" v-on:click="prevMonth"><i class="fa fa-angle-left"></i></th>
          <th colspan="5" class="switch" v-on:click="switchView2Month">{{ showYear }} {{ showMonth }}</th>
          <th class="next" v-on:click="nextMonth"><i class="fa fa-angle-right"></i></th>
        </tr>
        <tr><th>日</th><th>一</th><th>二</th><th>三</th><th>四</th><th>五</th><th>六</th></tr>
      </thead>
      <tbody>
        <tr v-for="row in dates" track-by="$index">
          <td v-for="date in row" track-by="$index" v-on:click="selectDate(date)" v-bind:class="['date', date.old ? 'old' : date.new ? 'new' : '', date.active ? 'active': '']">{{ date.show }}</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="month-picker" v-if="show === 'month'">
    <table>
      <thead>
        <tr class="header">
          <th class="prev" v-on:click="prevYear"><i class="fa fa-angle-left"></i></th>
          <th colspan="5" class="switch" v-on:click="switchView2Year">{{ showYear }}</th>
          <th class="next" v-on:click="nextYear"><i class="fa fa-angle-right"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7">
            <span v-for="month in months" track-by="$index" v-on:click="selectMonth(month)" v-bind:class="['month', month.old ? 'old' : month.new ? 'new' : '', month.active ? 'active': '']">{{ month.show }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="year-picker" v-if="show === 'year'">
    <table>
      <thead>
        <tr class="header">
          <th class="prev" v-on:click="prevDecade"><i class="fa fa-angle-left"></i></th>
          <th colspan="5" class="switch">{{ showDecade }}</th>
          <th class="next" v-on:click="nextDecade"><i class="fa fa-angle-right"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td colspan="7">
            <span v-for="year in years" track-by="$index" v-on:click="selectYear(year)" v-bind:class="['year', year.old ? 'old' : year.new ? 'new' : '', year.active ? 'active': '']">{{ year.show }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

</div>

</template>

<script>

export default {

  props: {
    selectedDate: {
      type: Number,
      twoWay: true,
      default() {
        return new Date().getTime();
      },
      required: false
    }
  },

  data() {
    let viewDate = this.selectedDate.valueOf();
    return {
      viewDate,
      show: 'date'
    };
  },

  computed: {
    dates() {
      let viewDateObj = new Date(this.viewDate), selectedDateObj = new Date(this.selectedDate);
      let viewYear = viewDateObj.getFullYear(), viewMonth = viewDateObj.getMonth(), viewDate = viewDateObj.getDate()
        , selectedYear = selectedDateObj.getFullYear(), selectedMonth = selectedDateObj.getMonth(), selectedDate = selectedDateObj.getDate();

      let dates = [], week = [];

      let thisMonthFirstDateObj = new Date(viewYear, viewMonth, 1);
      let thisMonthFirstDay = thisMonthFirstDateObj.getDay();

      if (thisMonthFirstDay > 0) {
        let prevMonthLastDateObj = new Date(viewYear, viewMonth, 0);
        let prevMonthLastDateYear = prevMonthLastDateObj.getFullYear();
        let prevMonthLastDateMonth = prevMonthLastDateObj.getMonth();
        let prevMonthLastDateDate = prevMonthLastDateObj.getDate();
        for (let i = 0; i < thisMonthFirstDay; ++i) {
          let showDate = prevMonthLastDateDate--;
          let date = {
            active: false, new: false, old: true,
            date: showDate,
            month: prevMonthLastDateMonth,
            year: prevMonthLastDateYear,
            show: showDate
          };
          if (selectedYear === prevMonthLastDateYear && selectedMonth === prevMonthLastDateMonth && selectedDate === showDate) {
            date.active = true;
          }
          week.unshift(date);
        }
      }

      let thisMonthLastDateObj = new Date(viewYear, viewMonth+1, 0);
      let thisMonthLastDateDate = thisMonthLastDateObj.getDate();
      let thisMonthLastDateDay = thisMonthLastDateObj.getDay();

      for (let i = 1; i <= thisMonthLastDateDate; ++i) {
        let date = {
          active: false, new: false, old: false,
          date: i,
          month: viewMonth,
          year: viewYear,
          show: i
        };
        if (selectedYear === viewYear && selectedMonth === viewMonth && selectedDate === i) {
          date.active = true;
        }
        week.push(date);
        if (week.length === 7) {
          dates.push(week);
          week = [];
        }
      }

      if (thisMonthLastDateDay !== 6) {
        let nextMonthFirstDateObj = new Date(viewYear, viewMonth+1, 1);
        let nextMonthFirstDateYear = nextMonthFirstDateObj.getFullYear();
        let nextMonthFirstDateMonth = nextMonthFirstDateObj.getMonth();
        for (let i = 1; i <= 6 - thisMonthLastDateDay; ++i) {
          let date = {
            active: false, new: true, old: false,
            date: i,
            month: nextMonthFirstDateMonth,
            year: nextMonthFirstDateYear,
            show: i
          };
          if (selectedYear === nextMonthFirstDateYear && selectedMonth === nextMonthFirstDateMonth && selectedDate === i) {
            date.active = true;
          }
          week.push(date);
          if (week.length === 7) {
            dates.push(week);
            week = [];
          }
        }
      }

      return dates;
    },

    months() {
      let viewDateObj = new Date(this.viewDate), selectedDateObj = new Date(this.selectedDate);
      let viewYear = viewDateObj.getFullYear(), viewMonth = viewDateObj.getMonth(), viewDate = viewDateObj.getDate()
        , selectedYear = selectedDateObj.getFullYear(), selectedMonth = selectedDateObj.getMonth(), selectedDate = selectedDateObj.getDate();

      let months = [], locales = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      for (let i = 0; i < locales.length; ++i) {
        months.push({
          active: (viewMonth === i),
          month: i,
          year: viewYear,
          show: locales[i]
        });
      }
      return months;
    },

    years() {
      let viewDateObj = new Date(this.viewDate), selectedDateObj = new Date(this.selectedDate);
      let viewYear = viewDateObj.getFullYear(), viewMonth = viewDateObj.getMonth(), viewDate = viewDateObj.getDate()
        , selectedYear = selectedDateObj.getFullYear(), selectedMonth = selectedDateObj.getMonth(), selectedDate = selectedDateObj.getDate();

      let years = [];
      let begin = viewYear - viewYear % 10;
      let end = begin + 10;
      for (let i = begin - 1; i <= end; ++i) {
        years.push({
          active: (viewYear === i),
          year: i,
          show: i
        });
      }
      return years;
    },

    showYear() {
      return `${new Date(this.viewDate).getFullYear()}年`;
    },

    showMonth() {
      const locales = ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'];
      return locales[new Date(this.viewDate).getMonth()];
    },

    showDecade() {
      let viewYear = new Date(this.viewDate).getFullYear();
      let begin = viewYear - viewYear % 10;
      return `${begin} ~ ${begin+10}`;
    }
  },

  methods: {
    switchView2Month() {
      this.show = 'month';
    },
    switchView2Year() {
      this.show = 'year';
    },
    switchView2Date() {
      this.show = 'date';
    },

    prevMonth() {
      let viewDate = new Date(this.viewDate);
      this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()-1, viewDate.getDate());
    },
    nextMonth() {
      let viewDate = new Date(this.viewDate);
      this.viewDate = new Date(viewDate.getFullYear(), viewDate.getMonth()+1, viewDate.getDate());
    },
    selectDate(date) {
      this.viewDate = new Date(date.year, date.month, date.date).getTime();
      this.selectedDate = new Date(date.year, date.month, date.date).getTime();
      this.$dispatch('date-change', new Date(this.selectedDate));
    },

    prevYear() {
      let viewDate = new Date(this.viewDate);
      viewDate.setFullYear(viewDate.getFullYear()-1);
      this.viewDate = viewDate.getTime();
    },
    nextYear() {
      let viewDate = new Date(this.viewDate);
      viewDate.setFullYear(viewDate.getFullYear()+1);
      this.viewDate = viewDate.getTime();
    },
    selectMonth(month) {
      let viewDate = new Date(this.viewDate);
      this.viewDate = new Date(month.year, month.month, viewDate.getDate()).getTime();
      this.switchView2Date();
    },

    prevDecade() {
      let viewDate = new Date(this.viewDate);
      viewDate.setFullYear(viewDate.getFullYear()-10);
      this.viewDate = viewDate.getTime();
    },
    nextDecade() {
      let viewDate = new Date(this.viewDate);
      viewDate.setFullYear(viewDate.getFullYear()+10);
      this.viewDate = viewDate.getTime();
    },
    selectYear(year) {
      let viewDate = new Date(this.viewDate);
      this.viewDate = new Date(year.year, viewDate.getMonth(), viewDate.getDate()).getTime();
      this.switchView2Month();
    }
  }

};

</script>
