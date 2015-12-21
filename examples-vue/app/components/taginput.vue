<template lang="jade">

.tag-input(v-on:click="handleClick")
  span.label.label-dark(v-for="tag in tags") {{ tag }} <i class="fa fa-close close"></i>
  span.holder(v-bind:style="holderStyle")
    input(type="text" v-model="newTag" v-el:input)
  .calculate-holder(v-el:calculator) {{ newTag }}

</template>

<script>

export default {

  props: {
    tags: {
      type: Array,
      required: true,
      twoWay: true
    }
  },

  data() {
    return {
      newTag: '',
      holderStyle: {
        width: '2px'
      }
    };
  },

  methods: {
    handleClick(event) {
      // updateWidth();
      // var offsetX = event.offsetX, offsetY = event.offsetY;
      // var $children = $this.children('.label');
      // var before = false;
      // for (var i = 0; i < $children.length; ++i) {
      //   var position = $children.eq(i).position();
      //   if (position.left > offsetX && position.top < offsetY && position.top + 25 > offsetY) {
      //     before = true;
      //     $children.eq(i).before($holder);
      //     break;
      //   }
      // }
      // if (!before) {
      //   $children.eq($children.length - 1).after($holder);
      // }
      this.$els.input.focus();
    },

    updateWidth() {
      // var width = $calculator.width();
      // $holder.width(width + 2);
    }
  }

};

</script>
