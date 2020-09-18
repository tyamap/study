import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3
  },
  getters: {
    doubleCount: state => state.count * 2,
    tripleCount: state => state.count * 3,
  },
  mutations: {
    increment(state, number) {
      state.count += number;
    },
    decrement(state, number) {
      state.count -= number;
    }
  },
  actions: {
    // 非同期処理を行う
    increment(context, number) {
      context.commit("increment", number);
    },
    decrement(context, number) {
      context.commit("decrement", number);
    }
  }
});