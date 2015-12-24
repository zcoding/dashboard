<template>

<div class="grid">
  <div class="u-sm-16">
    <div class="margin-top">
      <tab>
        <tab-item menu="Home">
          <p>content 1</p>
          <p>content 1</p>
          <p>content 1</p>
        </tab-item>
      </tab>
    </div>
  </div>
</div>

</template>

<script>

import tab from 'components/tab.vue';
import tabItem from 'components/tabitem.vue';

export default {

  components: { tab, tabItem },

  data() {
    return {
      tabs: []
    };
  }

};

</script>
