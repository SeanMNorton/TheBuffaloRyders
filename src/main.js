import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faInstagram, faFacebook, faBandcamp, faYoutube, faSoundcloud, faSpotify, faItunes,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueApollo from 'vue-apollo';
import Vue from 'vue';
import App from './App.vue';
import router from './router';
// import store from './store/store';
import './registerServiceWorker';
import ApolloProvider from './apolloSetup';


// Apollo Setup
const apolloProvider = ApolloProvider();
Vue.use(VueApollo);


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
