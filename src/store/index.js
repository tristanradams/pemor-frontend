import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    username: "",
    isAuthenticated: false,
  },
  mutations: {
    successfulLogin(state, username) {
      state.username = username;
    },
    setIsAuthenticated(state, boolean) {
      state.isAuthenticated = boolean;
    },
  },
  actions: {},
  modules: {},
  plugins: [createPersistedState({ storage: window.sessionStorage })],
});
