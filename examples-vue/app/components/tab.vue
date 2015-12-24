<template>

<div class="tab">
  <ul class="nav">
    <li v-for="item in items"><a href="javascript:;">{{ item.menu }}</a></li>
    <div class="indicator"></div>
  </ul>
  <div class="tab-content">
    <slot></slot>
  </div>
</div>

</template>

<script>

export default {

  props: {},

  data() {
    return {
      items: []
    };
  }

};

</script>
