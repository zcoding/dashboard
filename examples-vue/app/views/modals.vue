<template>

<div class="grid">
  <div class="u-sm-16">
    <div class="box margin-top padding">
      <button class="btn btn-dark float radius" type="button" v-on:click="openModal">open modal</button>
      <button class="btn btn-primary float radius" type="button" v-on:click="openAlert">open alert</button>
      <button class="btn btn-danger float radius" type="button" v-on:click="openConfirm">open confirm</button>
      <button class="btn btn-info float radius" type="button" v-on:click="openPrompt">open prompt</button>
    </div>
  </div>

  <modal v-bind:show.sync="showModal" close-via-dimmer>
    <div class="modal-header" slot="header">
      <div class="title">
        基础模态框
        <span class="fa fa-close close" v-on:click="closeModal"></span>
      </div>
    </div>
    <div class="modal-body" slot="body">
      <p>这是一个最基础的模态框，本身不包含header，body或者footer，而且默认不能通过点击dimmer关闭，除非传递一个属性close-via-dimmer</p>
    </div>
    <div class="modal-footer cf" slot="footer">
      <div class="fr">
        <button class="btn radius">取消</button>
        <button class="btn btn-dark radius">确定</button>
      </div>
    </div>
  </modal>

  <modal-alert v-bind:show.sync="showAlert" title="Alert modal">
    <p>This is message alert...</p>
  </modal-alert>

  <modal-confirm v-bind:show.sync="showConfirm" question="Are you sure to delete this item?" v-on:modal-confrim-ok="confirmOK">
    <p>Warning: Once you delete, you can never find it back.</p>
  </modal-confirm>

  <modal-prompt v-bind:show.sync="showPrompt" title="Input what you want:" v-on:modal-prompt-ok="promptOK"></modal-prompt>
</div>

</template>

<script>

import modal from 'components/modal.vue';
import modalAlert from 'components/alert.vue';
import modalConfirm from 'components/confirm.vue';
import modalPrompt from 'components/prompt.vue';

export default {

  components: { modal, modalAlert, modalConfirm, modalPrompt },

  data() {
    return {
      showModal: false,
      showAlert: false,
      showConfirm: false,
      showPrompt: false
    };
  },

  methods: {
    openModal() {
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
    },

    openAlert() {
      this.showAlert = true;
    },

    openConfirm() {
      this.showConfirm = true;
    },
    confirmOK() {
      console.log('year');
      this.showConfirm = false;
    },

    openPrompt() {
      this.showPrompt = true;
    },
    promptOK(output) {
      console.log(output);
      this.showPrompt = false;
    }
  }

};

</script>
