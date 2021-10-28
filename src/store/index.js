import { createStore } from 'vuex'

export default createStore({
  state: {
    currencies: []
  },
  mutations: {
    setCurrency(state, payload) {
      state.currencies.push(payload);
    }
  },
  actions: {
    addToCurrencies(context, payload) {
      context.commit('setCurrency', payload);
    }
  },
  getters: {
    currencies(state) {
      return state.currencies
    }
  }
})
