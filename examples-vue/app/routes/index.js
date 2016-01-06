export default {

  "/": {
    component: {
      template: '<page-home></page-home>',
      components: {
        "pageHome": function(resolve) {
          require(['views/pageHome.vue'], resolve);
        }
      }
    }
  },

  "/form": {
    component: {
      template: '<page-form></page-form>',
      components: {
        "pageForm": function(resolve) {
          require(['views/pageForm.vue'], resolve);
        }
      }
    }
  },

  "/datetimepicker": {
    component: {
      template: '<page-datetimepicker></page-datetimepicker>',
      components: {
        "pageDatetimepicker": function(resolve) {
          require(['views/pageDatetimepicker.vue'], resolve);
        }
      }
    }
  },

  "/modal": {
    component: {
      template: '<page-modal></page-modal>',
      components: {
        "pageModal": function(resolve) {
          require(['views/pageModal.vue'], resolve);
        }
      }
    }
  },

  "/tab": {
    component: {
      template: '<page-tab></page-tab>',
      components: {
        "pageTab": function(resolve) {
          require(['views/pageTab.vue'], resolve);
        }
      }
    }
  },

  "/scrollbar": {
    component: {
      template: '<page-scrollbar></page-scrollbar>',
      components: {
        "pageScrollbar": function(resolve) {
          require(['views/pageScrollbar.vue'], resolve);
        }
      }
    }
  },

  "/color": {
    component: {
      template: '<page-color></page-color>',
      components: {
        "pageColor": function(resolve) {
          require(['views/pageColor.vue'], resolve);
        }
      }
    }
  },

  "/panel": {
    component: {
      template: '<page-panel></page-panel>',
      components: {
        "pagePanel": function(resolve) {
          require(['views/pagePanel.vue'], resolve);
        }
      }
    }
  },

  "*": {
    component: {
      template: '<page-404></page-404>',
      components: {
        "page-404": function(resolve) {
          require(['views/page404.vue'], resolve);
        }
      },
      route: {
        canReuse: false // 必须指定为不可重用
      }
    }
  }

};
