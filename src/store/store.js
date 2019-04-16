import Vue from 'vue';
import Vuex from 'vuex';
import tour from './modules/tourStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tour,
  },
  state: {
    showcase: {
      isVideo: true,
      description: '"Live From ARC"',
      url: 'https://www.youtube.com/watch?v=6Q4u_PBnNew',
    },
  },

  mutations: {},
});
