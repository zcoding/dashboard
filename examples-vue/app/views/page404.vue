<template lang="jade">

.margin-top
  h1.text-center Page not found.

</template>

<script>

export default {

  route: {
    canReuse: false // 必须指定为不可重用
  },

  ready() {
    NProgress.done();
  }

};

</script>
