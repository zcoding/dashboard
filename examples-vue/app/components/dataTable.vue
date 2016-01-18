<template lang="jade">

.data-table
  .data-table-header
    table.table.table-bordered
      thead
        tr
          th(v-for="c in columns") {{ c }}
  .data-table-body
    table.table.table-bordered
      tbody
        tr(v-for="item in items")
          td(v-for="i in item") {{ i }}
  .data-table-footer
    table.table.table-bordered
      tfoot
        tr
          td(v-for="c in columns") {{ c }}

</template>

<script>

const optionsDefault = {
  columns: [],
  items: []
};

export default {

  props: {
    options: {
      required: true
    }
  },

  data() {
    let options = $.extend(true, {}, optionsDefault, this.options);
    return {
      columns: options.columns,
      items: options.items
    };
  }

};

</script>
