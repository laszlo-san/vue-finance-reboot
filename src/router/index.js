import Vue from 'vue';
import Router from 'vue-router';

const Summary = () => import('../components/summary/Summary.vue');
const AddNew = () => import('../components/add-new/AddNew.vue');

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Summary',
      component: Summary,
    },
    {
      path: '/add',
      name: 'AddNew',
      component: AddNew,
    },
  ],
});
