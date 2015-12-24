<template>

<div class="grid">
  <div class="u-sm-16">
    <div class="margin-top">
      <tab v-bind:active="2">
        <tab-item menu="Home">
          <p>content 1</p>
        </tab-item>
        <tab-item menu="Button">
          <p>content 2</p>
          <p>content 2</p>
        </tab-item>
        <tab-item menu="Form">
          <p>content 3</p>
          <p>content 3</p>
          <p>content 3</p>
        </tab-item>
        <tab-item menu="Tab">
          <p>content 4</p>
          <p>content 4</p>
          <p>content 4</p>
          <p>content 4</p>
        </tab-item>
        <tab-item menu="Panel">
          <p>content 5</p>
          <p>content 5</p>
          <p>content 5</p>
          <p>content 5</p>
          <p>content 5</p>
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
