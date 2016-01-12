export default {

  "/": {
    component: function(resolve) {
      require(['views/pageHome.vue'], resolve);
    }
  },

  "/form": {
    component: function(resolve) {
      require(['views/pageForm.vue'], resolve);
    }
  },

  "/datetimepicker": {
    component: function(resolve) {
      require(['views/pageDatetimepicker.vue'], resolve);
    }
  },

  "/modal": {
    component: function(resolve) {
      require(['views/pageModal.vue'], resolve);
    }
  },

  "/tab": {
    component: function(resolve) {
      require(['views/pageTab.vue'], resolve);
    }
  },

  "/scrollbar": {
    component: function(resolve) {
      require(['views/pageScrollbar.vue'], resolve);
    }
  },

  "/table": {
    component: function(resolve) {
      require(['views/pageTable.vue'], resolve);
    }
  },

  "/color": {
    component: function(resolve) {
      require(['views/pageColor.vue'], resolve);
    }
  },

  "/panel": {
    component: function(resolve) {
      require(['views/pagePanel.vue'], resolve);
    }
  },

  "*": {
    component: function(resolve) {
      require(['views/page404.vue'], resolve);
    }
  }

};
