import Vue       from 'vue';
import VueRouter from 'vue-router';
import routes    from './routes';

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
  },

  data() {
    return {
      contentScrollbar: null,
      isNarrow: false
    };
  },

  ready() {
    $('.dropdown').dropdown();
    $('.layout-aside .flex').scrollbar({
      style: 'light'
    });
    this.contentScrollbar = $('.layout-content').scrollbar({
      width: 10,
      fade: false,
      speed: 100
    }).data('scrollbar');
    $('.layout-aside .menu.parent').collapse();
  },

  events: {
    'content-change': function() {
      if (this.contentScrollbar != null) {
        this.contentScrollbar.repaint();
      }
    },
    'narrow': function(isNarrow) {
      this.isNarrow = isNarrow;
    }
  }

});

router.map(routes);

router.beforeEach(function (transition) {
  NProgress.start();
  transition.next();
});

router.start(App, '#app-main');
