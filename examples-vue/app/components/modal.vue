<template>

<div class="modal" v-show="show" transition="fade" v-on:click="tryToClose">
  <div class="modal-dialog" v-on:click.stop>
    <slot name="header"></slot>
    <slot name="body"></slot>
    <slot name="footer"></slot>
  </div>
</div>
<div class="modal-dimmer" v-show="show" transition="fade"></div>

</template>

<style lang="sass">

$transition-duration: 300ms;

.modal {
  &.fade-transition {
    display: block;
    opacity: 1;
    transition: opacity $transition-duration ease 0s;
    .modal-dialog {
      transform: translate3d(0, 0, 0);
      transition: transform $transition-duration ease 0s;
    }
  }
  &.fade-enter, &.fade-leave {
    opacity: 0;
    .modal-dialog {
      transform: translate3d(0, -50px, 0);
    }
  }
}

.modal-dimmer {
  &.fade-transition {
    background-color: rgba(0, 0, 0, .6);
    transition: background-color $transition-duration ease 0s;
  }
  &.fade-enter, &.fade-leave {
    background-color: rgba(0, 0, 0, 0);
  }
}

</style>

<script>

export default {

  props: {
    show: {
      type: Boolean,
      default: false
    },
    closeViaDimmer: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    tryToClose(event) {
      if (this.closeViaDimmer) {
        this.show = false;
      }
    }
  }

};

</script>
