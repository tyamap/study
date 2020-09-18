import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3,
    message: "HELLO!",
  },
  getters: {
    getCount: state => state.count,
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
    getMessage: state => state.message,
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    },
    updateMessage(state, newMessage) {
      state.message = newMessage;
    },
  },
  actions: {
    // 非同期処理を行う
    increment(context, number) {
      context.commit("increment", number);
    },
    decrement(context, number) {
      context.commit("decrement", number);
    },
    updateMessage({ commit }, newMessage) {
      commit("updateMessage", newMessage);
    },
  }
});