<template>

<div class="tab">
  <ul class="nav">
    <slot name="menu"></slot>
    <div class="indicator"></div>
  </ul>
  <div class="tab-content">
    <slot name="content"></slot>
  </div>
</div>

</template>

<script>

export default {

  props: {}

};

</script>
