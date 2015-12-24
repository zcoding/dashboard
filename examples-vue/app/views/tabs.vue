<template>

<div class="grid">
  <div class="u-sm-16">
    <div class="margin-top">
      <tab>
        <template slot="menu">
          <li class="active"><a href="javascript:;">Home</a></li>
        </template>
        <template slot="content">
          <div class="tab-pane active">
            <p>content 1</p>
            <p>content 1</p>
            <p>content 1</p>
          </div>
        </template>
      </tab>
    </div>
  </div>
</div>

</template>

<script>

import tab from 'components/tab.vue';

export default {

  components: { tab },

  data() {
    return {
      tabs: []
    };
  }

};

</script>
