<template lang="jade">

.grid.margin-top
  .u-sm-8
    .panel.panel-primary
      .panel-header#collapse(data-collapse-target="#collapse-body") title
      .panel-body#collapse-body
        p content
        p content
        p content
      .panel-footer footer

</template>

<script>

export default {

  ready() {
    NProgress.done();
    $('#collapse').collapse({
      speed: 100
    });
  }

};

</script>
