import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram, faFacebook, faBandcamp, faYoutube, faSoundcloud, faSpotify, faItunes,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Meta from 'vue-meta';

import VueApollo from 'vue-apollo';
import Vue from 'vue';
import LoadScript from 'vue-plugin-load-script';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import ApolloProvider from './apolloSetup';

// script loader for ecwid

Vue.use(LoadScript);

// Apollo Setup
const apolloProvider = ApolloProvider();
Vue.use(VueApollo);
Vue.use(Meta);


// Fontawesome Setup
library.add(faInstagram, faFacebook, faBandcamp, faYoutube, faSoundcloud, faSpotify, faItunes);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Vue app setup
Vue.config.productionTip = false;
new Vue({
  apolloProvider,
  router,
  // store,
  render: h => h(App),
}).$mount('#app');
