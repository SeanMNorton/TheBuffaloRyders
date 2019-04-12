import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/music',
      name: 'music',
      component: () => import(/* webpackChunkName: "music" */ './views/Music.vue'),
    },
    {
      path: '/gigs',
      name: 'tour',
      component: () => import(/* webpackChunkName: "tour" */ './views/Tour.vue'),
    },
  ],
});
