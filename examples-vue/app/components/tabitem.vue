<template>

<div class="tab-pane active">
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
  }
};

</script>
