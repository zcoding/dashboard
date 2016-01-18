<template lang="jade">

.data-table(v-bind:style="wrapperStyle")
  .data-table-header
    .data-table-header-box
      table.table.table-bordered.table-hover(v-bind:style="tableStyle")
        thead
          tr
            th
              input(type="checkbox")
            th #
            th(v-for="col in columns") {{ col }}
  .data-table-body(v-bind:style="bodyWrapperStyle")
    table.table.table-bordered.table-hover(v-bind:style="tableStyle")
      tbody
        tr(v-for="item in items")
          td
            input(type="checkbox")
          td {{ $index+1 }}
          td(v-for="col in columns") {{ item[col] }}

</template>

<script>

const optionsDefault = {
  columns: [],
  items: [],
  height: 500
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
      items: options.items,
      wrapperStyle: {
        "max-height": "1020px"
      },
      bodyWrapperStyle: {
        height: `${options.height}px`
      },
      tableStyle: {
        "height": "1000px"
      }
    };
  },

  ready() {}

};

</script>
