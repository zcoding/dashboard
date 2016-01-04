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
  },

  data() {
    return {
      contentScrollbar: null,
      isNarrow: false
    };
  },

  ready() {
    $('[data-collapse]').collapse();
    $('.dropdown').dropdown();
    $('.layout-aside .flex').scrollbar({
      style: 'light'
    });
    this.contentScrollbar = $('.layout-content').scrollbar({
      width: 10,
      fade: false,
      speed: 100
    }).data('scrollbar');
    $('.layout-aside').on('click', '.nav-header', function() {
      $('.layout-aside, .layout-header, .layout-content').toggleClass('narrow');
      $(document).trigger('aside-change');
    });
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

router.start(App, '#app-main');
