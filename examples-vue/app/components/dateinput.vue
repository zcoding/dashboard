<template>

<div class="form-control" style="position:relative;">
  <label><slot></slot></label>
  <input type="text" v-model="date" v-on:focus="triggerPicker" v-on:click.stop>
  <date-picker float v-show="show" transition="fade" v-bind:selected-date.sync="selectedDate" v-on:click.stop v-on:date-change="handleDateChange"></date-picker>
</div>

</template>

<style lang="sass">

.datepicker.float {
  &.fade-transition {
    display: block;
    opacity: 1;
    transform: translate3d(0, 0, 0);
    transition: transform .5s ease 0s, opacity .5s ease 0s;
  }
  &.fade-enter, &.fade-leave {
    opacity: 0;
    transform: translate3d(0, -10px, 0);
  }
}

</style>

<script>

import datePicker from './datepicker.vue';

export default {

  components: { datePicker },

  props: {
    date: {
      type: String,
      required: true,
      twoWay: true
    },
    format: {
      type: String,
      required: false
    }
  },

  data() {
    let selectedDate = new Date(this.date).getTime();
    if (selectedDate !== selectedDate) {
      selectedDate = new Date().getTime();
    }
    return {
      show: false
      , selectedDate
    };
  },

  methods: {
    triggerPicker() {
      this.show = true;
    },
    handleDateChange(date) {
      this.date = this.formatDate(date.getTime(), this.format);
      this.show = false;
    },
    formatDate(time, format = 'yyyy-MM-dd') {
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
    }
  },

  events: {
    "dismiss": function() {
      this.$nextTick(() => {
        this.show = false;
      });
    }
  }

};

</script>
