/** @format */
import axios from 'axios';
import { createStore } from 'vuex';

const state = {
  count: 0,
  sempak: 'biru',
};

const mutations = {
  increment(state) {
    state.count++;
  },
  goSempak(state, e) {
    state.sempak = e;
  },
};

const actions = {
  increment: ({ commit }) => commit('increment'),
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      commit('increment');
      resolve();
    });
  },
  goset({ commit }) {
    axios
      .get('https://jorjoran-front.netlify.app/.netlify/functions/v1')
      .then((r) => commit('goSempak', r.data));
  },
};

// getters are functions.
const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? 'even' : 'odd'),
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
