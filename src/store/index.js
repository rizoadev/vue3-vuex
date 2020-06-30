/** @format */

import { createStore } from "vuex";

const state = {
  count: 0,
};

const mutations = {
  increment(state) {
    state.count++;
  },
  decrement(state) {
    state.count--;
  },
};

const actions = {
  increment: ({ commit }) => commit("increment"),
  decrement: ({ commit }) => commit("decrement"),
  incrementIfOdd({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit("increment");
    }
  },
  incrementAsync({ commit }) {
    return new Promise((resolve, reject) => {
      commit("increment");
      resolve();
    });
  },
};

// getters are functions.
const getters = {
  evenOrOdd: (state) => (state.count % 2 === 0 ? "even" : "odd"),
};

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  getters,
  actions,
  mutations,
});
