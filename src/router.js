import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
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
    {
      path: '/insta',
      name: 'insta',
      component: () => import(/* webpackChunkName: "insta" */ './views/Instagram.vue'),
    },
    {
      path: '/store',
      name: 'store',
      beforeEnter() {
        window.location.replace('https://the-buffalo-ryders.square.site/');
      },
    },
    {
      path: '/merch',
      name: 'merch',
      beforeEnter() {
        window.location.replace('https://the-buffalo-ryders.square.site/');
      },
    },
    {
      path: '/*',
      component: () => import(/* webpackChunkName: "404" */ './views/FourOhFour.vue'),
    },
  ],
});
