<template>

<modal v-bind:show.sync="show">
  <div class="modal-header" slot="header">
    <div class="title">{{ title }}</div>
  </div>
  <div class="modal-body" slot="body">
    <input type="text" v-model="output" v-on:keydown.enter="promptOK">
  </div>
  <div class="modal-footer cf" slot="footer">
    <div class="fr">
      <button class="btn radius" v-on:click="closeModal">取消</button>
      <button class="btn btn-dark radius" v-on:click="promptOK">确定</button>
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
    title: {
      type: String,
      default: '请输入:'
    }
  },

  data() {
    return {
      output: ''
    };
  },

  methods: {
    closeModal() {
      this.$dispatch('prompt-cancel');
      this.show = false;
    },
    promptOK() {
      this.$dispatch('prompt-ok', this.output);
      this.output = '';
    }
  }

};

</script>
