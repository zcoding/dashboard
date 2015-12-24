<template>

<div class="tab">
  <ul class="nav">
    <li v-for="item in items"
      v-bind:class="{'active': active === $index}"
      v-bind:style="{width: itemWidth}">
      <a href="javascript:;" v-on:click.prevent="selectItem($index, item)">{{ item.menu }}</a>
    </li>
    <div class="indicator" v-bind:style="{width: itemWidth, left: offsetLeft}"></div>
  </ul>
  <div class="tab-content">
    <slot></slot>
  </div>
</div>

</template>

<script>

export default {

  props: {
    active: {
      type: Number,
      default: 0
    }
  },

  data() {
    return {
      items: []
    };
  },

  computed: {
    itemWidth() {
      return this.items.length > 0 ? 100 / this.items.length + '%' : '';
    },
    offsetLeft() {
      if (this.items.length === 0) {
        return '';
      }
      return 100 / this.items.length * this.active + '%';
    }
  },

  methods: {
    selectItem(index, item) {
      this.active = index;
    }
  }

};

</script>
