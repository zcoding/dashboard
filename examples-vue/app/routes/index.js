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
  }

};
