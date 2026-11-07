import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram, faFacebook, faBandcamp, faYoutube, faSoundcloud, faSpotify, faItunes,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { createHead } from '@unhead/vue/client';
import { DefaultApolloClient } from '@vue/apollo-composable';
import App from './App.vue';
import router from './router';
import createApolloClient from './apolloSetup';

// Fontawesome Setup
library.add(faInstagram, faFacebook, faBandcamp, faYoutube, faSoundcloud, faSpotify, faItunes);

const app = createApp(App);

// Apollo (GraphQL) client, injected for useQuery()
app.provide(DefaultApolloClient, createApolloClient());

app.use(router);
// <head> management (replaces vue-meta)
app.use(createHead());
app.component('font-awesome-icon', FontAwesomeIcon);

app.mount('#app');
