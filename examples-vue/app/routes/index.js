export default {

  "/": {
    component: {
      template: '<home></home>',
      components: {
        "home": function(resolve) {
          require(['views/index.vue'], resolve);
        }
      }
    }
  },

  "/form": {
    component: {
      template: '<page-form></page-form>',
      components: {
        "pageForm": function(resolve) {
          require(['views/forms.vue'], resolve);
        }
      }
    }
  },

  "/datetimepicker": {
    component: {
      template: '<page-datetimepicker></page-datetimepicker>',
      components: {
        "pageDatetimepicker": function(resolve) {
          require(['views/datetimepicker.vue'], resolve);
        }
      }
    }
  },

  "/modal": {
    component: {
      template: '<page-modals></page-modals>',
      components: {
        "pageModals": function(resolve) {
          require(['views/modals.vue'], resolve);
        }
      }
    }
  },

  "/tab": {
    component: {
      template: '<page-tabs></page-tabs>',
      components: {
        "pageTabs": function(resolve) {
          require(['views/tabs.vue'], resolve);
        }
      }
    }
  },

  "/scrollbar": {
    component: {
      template: '<page-scrollbars></page-scrollbars>',
      components: {
        "pageScrollbars": function(resolve) {
          require(['views/scrollbars.vue'], resolve);
        }
      }
    }
  }

};
