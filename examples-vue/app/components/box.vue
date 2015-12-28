<template>

<div class="box padding scroll-y margin-top" v-on:mousewheel="scroll" v-bind:style="style" v-el:box>
  <slot></slot>
</div>
<div class="scrollbar dark" v-bind:style="scrollbarStyle" v-el:scrollbar></div>

</template>

<script>

import dom from '../dom';

export default {

  ready() {
    let $box = this.$els.box, $scrollbar = this.$els.scrollbar;
    let $parent = $box.parentElement;
    this.contentHeight = $box.scrollHeight;
    this.style.overflow = 'hidden';
    let boxStyles = dom.getStyles($box), parentStyles = dom.getStyles($parent);
    let paddingRight = parentStyles.getPropertyValue('padding-right') || parentStyles['padding-right'];
    this.scrollbarStyle = {
      top: $box.offsetTop + 'px',
      right: paddingRight,
      height: this.scrollbarHeight + 'px'
    };
    this.$nextTick(() => {
      $scrollbar.offsetWidth;
      $scrollbar.classList.add('active');
    });
  },

  props: {
    height: {
      type: Number,
      default: 1,
      required: true
    }
  },

  data() {
    let height = this.height + 'px';
    return {
      style: {
        overflow: 'auto',
        height
      },
      scrollbarStyle: {
        top: '0px',
        right: '0px',
        height: '0px'
      },
      contentHeight: 0
    };
  },

  computed: {
    maxMoveHeight() {
      return this.contentHeight - this.height;
    },
    scrollbarHeight() {
      return this.height / this.contentHeight * this.height;
    }
  },

  methods: {
    scroll(event) {
      var delta = event.wheelDeltaY < 0 ? -50 : 50;
      let $box = this.$els.box;
      let move = $box.scrollTop - delta;
      move = move < 0 ? 0 : (move > this.maxMoveHeight ? this.maxMoveHeight : move);
      $box.scrollTop = move;

      let scrollbarMove = move / this.contentHeight * this.height;
      this.$els.scrollbar.style.top = this.$els.box.offsetTop + scrollbarMove + 'px';

      if (move > 0 && move < this.maxMoveHeight) {
        event.preventDefault();
      }
    }
  }

};

</script>
