import Vue from 'vue';
import App from './App.vue';
// import './registerServiceWorker';
import router from './router';
import store from './store';

import 'bootstrap';

import './scss/vendor.scss';
import './scss/main.scss';

Vue.config.productionTip = false;
Vue.filter('currency', value => `$${value.toLocaleString()}`);

new Vue({
  router,
  store,
  created() {
    this.$store.dispatch('loadAppData');
  },
  render: h => h(App),
}).$mount('#app');
