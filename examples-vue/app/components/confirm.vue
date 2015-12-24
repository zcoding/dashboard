<template>

<modal v-bind:show.sync="show">
  <div class="modal-header" slot="header">
    <div class="title">{{ question }}</div>
  </div>
  <div class="modal-body" slot="body">
    <slot></slot>
  </div>
  <div class="modal-footer cf" slot="footer">
    <div class="fr">
      <button class="btn radius" v-on:click="closeModal">取消</button>
      <button class="btn btn-dark radius" v-on:click="confirmOK">确定</button>
    </div>
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
    question: {
      type: String,
      default: 'Question:'
    }
  },

  methods: {
    closeModal() {
      this.show = false;
    },
    confirmOK() {
      this.$dispatch('modal-confrim-ok');
    }
  }

};

</script>
