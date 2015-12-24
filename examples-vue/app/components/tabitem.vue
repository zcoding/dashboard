<template>

<div class="tab-pane" v-bind:class="{'active': index === $parent.active}">
  <slot></slot>
</div>

</template>

<script>

export default {

  props: {
    menu: {
      type: String,
      required: true
    }
  },

  created() {
    this.$parent.items.push({
      menu: this.menu
    });
    this.index = this.$parent.items.length - 1;
  },

  data() {
    return {
      index: 0
    };
  }

};

</script>
