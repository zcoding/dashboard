<template>

<modal v-bind:show.sync="show">
  <div class="modal-header" slot="header">
    <div class="title">
      {{ title }}
      <span class="fa fa-close close" v-on:click="closeModal"></span>
    </div>
  </div>
  <div class="modal-body" slot="body">
    <slot></slot>
  </div>
</modal>

</template>

<script>

import modal from './modal.vue';

export default {

  components: { modal },

  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: 'Message:'
    }
  },

  methods: {
    closeModal() {
      this.show = false;
    }
  }

};

</script>
