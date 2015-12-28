<template>

<div class="tab" v-bind:class="[colorStyle]">
  <ul class="nav">
    <li v-for="item in items"
      v-bind:class="{'active': active === $index}"
      v-bind:style="{width: itemWidth}">
      <a href="javascript:;" v-on:click.prevent="selectItem($index, item)">{{ item.menu }}</a>
    </li>
    <div class="indicator" v-bind:style="{width: itemWidth, left: positionLeft}"></div>
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
    },
    color: {
      type: String,
      default: 'primary'
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
    positionLeft() {
      if (this.items.length === 0) {
        return '';
      }
      return 100 / this.items.length * this.active + '%';
    },
    colorStyle() {
      return `tab-${this.color}`;
    }
  },

  methods: {
    selectItem(index, item) {
      this.active = index;
    }
  }

};

</script>
