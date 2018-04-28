// 由于用的modules模式，所以不同modules state命名可以一样，但是getters中的名称不能一样
const state = {
  test: '123',
};

const getters = {
  test: state => state.test,
};
// actions
const actions = {
  // checkout ({ commit, state }, products) {
  //  const savedCartItems = [...state.added]
  //  commit(types.CHECKOUT_REQUEST)
  //  shop.buyProducts(
  //    products,
  //    () => commit(types.CHECKOUT_SUCCESS),
  //    () => commit(types.CHECKOUT_FAILURE, { savedCartItems })
  //  )
  // }
};
// mutations
const mutations = {
  getTest(state, data) {
    state.test = data;
  },
};
export default {
  state,
  getters,
  actions,
  mutations,
};
