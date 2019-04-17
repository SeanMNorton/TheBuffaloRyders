import Vue from 'vue';
import Vuex from 'vuex';
import tour from './modules/tourStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tour,
  },
  state: {
  },

  mutations: {},
});
