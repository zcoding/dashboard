<template lang="jade">

.grid.margin-top
  .u-sm-16
    .box.padding
      h1 Hello, Dashboard!

</template>

<script>

export default {

  ready() {
    this.$dispatch('content-change');
    NProgress.done();
  }

};

</script>
