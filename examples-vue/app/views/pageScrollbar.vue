<template lang="jade">

.grid.margin-top
  .u-sm-8
    .box.padding(style="height:300px;overflow-y:auto;" v-el:box)
      p 0
      p 1
      p 2
      p 3
      p 4
      p 5
      p 6
      p 7
      p 8
      p 9
      p 10
      p 11
      p 12
      p 13
      p 14
      p 15
      p 16
      p 17
      p 18
      p 19

</template>

<script>

export default {

  ready() {
    NProgress.done();
    this.$dispatch('content-change');
    $(this.$els.box).scrollbar();
  }

};

</script>
