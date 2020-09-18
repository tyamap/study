import Vue from "vue";
import Vuex from "vuex";
import count from "./modules/count"

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    message: "HELLO!",
  },
  getters: {
    getMessage: state => state.message,
  },
  mutations: {
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    // 非同期処理を行う
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    },
  },
  modules: {
    count
  }
});