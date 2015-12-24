<template>

<div class="grid margin-top">
  <div class="u-sm-8">
    <div class="box padding">
      <date-picker v-on:date-change="myDateChange"></date-picker>
    </div>
  </div>
</div>

</template>

<script>

import datePicker from 'components/datepicker.vue';

export default {

  components: { datePicker },

  methods: {
    myDateChange(date) {
      console.log(date);
    }
  }

};

</script>
