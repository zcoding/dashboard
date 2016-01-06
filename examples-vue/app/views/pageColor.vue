<template lang="jade">

.grid.margin-top
  .u-sm-16
    .box.padding
      p.text-primary text color: primary
      p.text-secondary text color: secondary
      p.text-success text color: success
      p.text-danger text color: danger
      p.text-warning text color: warning
      p.text-tips text color: tips
      p.text-info text color: info
      p.text-dark text color: dark

</template>

<script>

export default {

  ready() {
    NProgress.done();
  }

};

</script>
