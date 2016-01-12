<template lang="jade">

.grid.margin-top
  .u-sm-16
    table.table.table-border.table-hover
      thead
        tr
          th 1
          th 1
          th 1
          th 1
          th 1
      tbody
        tr
          td a
          td a
          td a
          td a
          td a
  .u-sm-16
    pagination(v-bind:page="page" v-bind:total="total", v-bind:link="link")

</template>

<script>

import pagination from 'components/pagination.vue';

export default {

  components: { pagination },

  data() {
    return {
      page: 2,
      total: 10
    };
  },

  methods: {
    link(page) {
      return `/table?page=${page}`;
    }
  },

  ready() {
    NProgress.done();
    this.$dispatch('content-change');
  }

};

</script>
