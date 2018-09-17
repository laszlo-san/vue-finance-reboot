// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import axios from 'axios';
import vuelidate from 'vuelidate';

import App from './App.vue';
import router from './router';
import store from './store/store';

import 'bootstrap/dist/css/bootstrap.min.css';

Vue.use(vuelidate);

const BASE_URL = 'https://vue-finance-e1b3d.firebaseio.com';

axios.defaults.baseURL = BASE_URL;

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>',
});
