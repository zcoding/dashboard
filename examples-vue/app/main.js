import Vue from 'vue';
import VueRouter from 'vue-router';
import routes from './routes';

// components
import sidebar from 'components/sidebar.vue';

Vue.use(VueRouter);

var router = new VueRouter();

let App = Vue.extend({

  components: { sidebar }

});

router.map(routes);

router.start(App, '#app-main');
