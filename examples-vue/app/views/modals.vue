<template>

<div class="grid">
  <div class="u-sm-16">
    <div class="box margin-top padding">
      <button class="btn btn-primary float radius" type="button" v-on:click="openModal">open modal</button>
      <button class="btn btn-primary float radius" type="button" v-on:click="openAlert">open alert</button>
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
</div>

</template>

<script>

import modal from 'components/modal.vue';
import modalAlert from 'components/alert.vue';

export default {

  components: { modal, modalAlert },

  data() {
    return {
      showModal: false,
      showAlert: false
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
    }
  }

};

</script>
