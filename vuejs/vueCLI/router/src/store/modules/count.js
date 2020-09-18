const state = {
  count: 3,
};
const getters = {
  getCount: state => state.count,
  doubleCount: state => state.count * 2,
  tripleCount: state => state.count * 3,
};
const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};
const actions = {
  // 非同期処理を行う
  increment(context, number) {
    context.commit("increment", number);
  },
  decrement(context, number) {
    context.commit("decrement", number);
  },
};
export default {
  state,
  getters,
  mutations,
  actions
};