import { createRouter, createWebHistory } from 'vue-router';
import Home from './views/Home.vue';
import Press from './views/Press.vue';

// Vue Router 4 requires a component on every route; these routes only redirect off-site.
const ExternalRedirect = { render: () => null };
const redirectToStore = () => {
  window.location.replace('https://the-buffalo-ryders.square.site/');
  return false;
};

export default createRouter({
  history: createWebHistory(),
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
      name: 'StorePage',
      component: ExternalRedirect,
      beforeEnter: redirectToStore,
    },
    {
      path: '/merch',
      name: 'merch',
      component: ExternalRedirect,
      beforeEnter: redirectToStore,
    },
    {
      path: '/press',
      name: 'press',
      component: Press,
    },
    {
      path: '/:pathMatch(.*)*',
      component: () => import(/* webpackChunkName: "404" */ './views/FourOhFour.vue'),
    },
  ],
});
