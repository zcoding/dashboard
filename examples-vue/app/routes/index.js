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
  }

};
