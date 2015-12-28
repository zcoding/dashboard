import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// components
import sidebar from 'components/sidebar.vue';

Vue.config.debug = true;

Vue.use(VueRouter);

var router = new VueRouter();

let App = Vue.extend({

  components: { sidebar },

  methods: {
    globalClickHandler(event) {
      this.$broadcast('dismiss', event);
    }
  }

});

router.map(routes);

router.start(App, '#app-main');
