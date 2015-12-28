<template>

<div class="grid margin-top">
  <div class="u-sm-8">
    <div class="box padding">
      <h3>{{ myDate | format 'yyyy年 M月 d日' }}</h3>
      <date-picker v-on:date-change="myDateChange"></date-picker>
    </div>
  </div>
  <div class="u-sm-8">
    <div class="box padding">
      <date-input v-bind:date.sync="yourDate" format="yyyy-MM-dd">pick a date via date-input</date-input>
    </div>
  </div>
</div>

</template>

<script>

import datePicker from 'components/datepicker.vue';
import dateInput from 'components/dateinput.vue';

export default {

  components: { datePicker, dateInput },

  data() {
    return {
      myDate: '2015-12-12',
      yourDate: '2015-12-20'
    };
  },

  filters: {
    format(time, format) {
      return this.format(time, format);
    }
  },

  methods: {
    format(time, format = 'yyyy-MM-dd hh:mm:ss') {
      if (typeof time !== 'number' && typeof time !== 'string') {
        return time;
      }

      var _date = new Date(time);

      if (isNaN(_date.getTime())) {
        return time;
      }

      var map = {
          "M": _date.getMonth() + 1
        , "d": _date.getDate()
        , "h": _date.getHours()
        , "m": _date.getMinutes()
        , "s": _date.getSeconds()
      };

      format = format.replace(/([yMdDhms])+/g, function(all, t) {
        var v = map[t];
        if(v !== undefined){
          if(all.length > 1){
            v = '0' + v;
            v = v.substr(v.length - 2);
          }
          return v;
        } else if(t === 'y') {
          return (_date.getFullYear() + '').substr(4 - all.length);
        } else if (t === 'D') {
          return ['日', '一', '二', '三', '四', '五', '六'][_date.getDay()];
        }
        return all;
      });

      return format;
    },

    myDateChange(date) {
      this.myDate = date.getTime();
    }
  }

};

</script>
