<template lang="jade">

.tag-input(v-on:click="handleClick")
  span.label(v-for="tag in tags" track-by="$index" v-if="$index < holderIndex" v-bind:class="['label-' + labelStyle]") {{ tag }} <i class="fa fa-close close" v-on:click="deleteTag($index)"></i>
  span.holder(v-bind:style="holderStyle")
    input(type="text" v-model="newTag" v-el:input v-on:keydown.enter.prevent="addTag" v-on:keydown.left="moveLeft" v-on:keydown.right="moveRight" v-on:keydown.8="backDelete")
  span.label(v-for="tag in tags" track-by="$index" v-if="$index >= holderIndex" v-bind:class="['label-' + labelStyle]") {{ tag }} <i class="fa fa-close close" v-on:click="deleteTag($index)"></i>
  .calculate-holder(v-el:calculator) {{ calculateTag }}

</template>

<script>

export default {

  props: {
    tags: {
      type: Array,
      required: true,
      twoWay: true
    },
    labelStyle: {
      type: String,
      required: false,
      default: 'dark'
    }
  },

  data() {
    let holderIndex = this.tags.length;
    return {
      newTag: '',
      holderStyle: {
        width: '2px'
      },
      holderIndex
    };
  },

  computed: {
    calculateTag() {
      let _tag = this.newTag.replace(/\s/g, 'i');
      this.updateWidth();
      return _tag;
    }
  },

  methods: {
    handleClick(event) {
      if (event.target === event.currentTarget) {
        var offsetX = event.offsetX, offsetY = event.offsetY;
        var children = this.$el.querySelectorAll('.label');
        var isAtTheEnd = true;
        for (var i = 0; i < children.length; ++i) {
          let child = children[i];
          if (child.offsetLeft > offsetX && child.offsetTop < offsetY && child.offsetTop + child.offsetHeight > offsetY) {
            this.holderIndex = i;
            isAtTheEnd = false;
            break;
          }
        }
        if (isAtTheEnd) {
          this.holderIndex = this.tags.length;
        }
      }
      this.$els.input.focus();
    },

    updateWidth() {
      this.$nextTick(() => {
        var width = this.$els.calculator.offsetWidth;
        this.holderStyle.width = `${width+2}px`;
      });
    },

    addTag() {
      let newTag = this.newTag.trim();
      if (newTag !== '') {
        this.tags.splice(this.holderIndex, 0, newTag);
        this.newTag = '';
        this.holderIndex += 1;
      }
    },

    moveLeft() {
      if (this.newTag.trim() === '' && this.holderIndex > 0) {
        this.holderIndex -= 1;
      }
    },

    moveRight() {
      if (this.newTag.trim() === '' && this.holderIndex < this.tags.length) {
        this.holderIndex += 1;
      }
    },

    deleteTag(index) {
      if (index < this.holderIndex) {
        this.holderIndex -= 1;
      }
      this.tags.splice(index, 1);
      this.$els.input.focus();
    },

    backDelete() {
      if (this.newTag.trim() === '' && this.holderIndex > 0) {
        this.deleteTag(this.holderIndex - 1);
      }
    }

  }

};

</script>
