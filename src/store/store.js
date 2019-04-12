import Vue from 'vue';
import Vuex from 'vuex';
import tour from './modules/tourStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tour,
  },
  state: {

    socialUrls: {
      facebook: 'https://www.facebook.com/JoeRisdonandThe815/',
      instagram: 'https://www.instagram.com/JoeRisdonandThe815/',
      youtube: 'https://www.youtube.com/channel/UCkIsdG0MQnU8HkVqWLYPyWw',
      bandcamp: 'https://joerisdon.bandcamp.com/',
    },

    showcase: {
      isVideo: true,
      description: '"Live From ARC"',
      url: 'https://www.youtube.com/watch?v=6Q4u_PBnNew',
    },
  },

  mutations: {},
});
