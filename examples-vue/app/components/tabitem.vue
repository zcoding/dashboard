<template>

<div class="tab-pane" v-show="index === $parent.active" transition="move">
  <slot></slot>
</div>

</template>

<style lang="sass">
.tab .nav+.tab-content .tab-pane {
  &.move-transition {
    display: block;
  }
}
</style>

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
  },

  transitions: {
    move: {
      css: false
    }
  }

};

</script>
