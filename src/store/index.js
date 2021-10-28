import { createStore } from 'vuex'

export default createStore({
  state: {
    currencies: []
  },
  mutations: {
    setCurrency(state, payload) {
      // check if rate with existing currency exist
      if (state.currencies.find(el => el.currency === payload.currency)) {
        state.currencies = state.currencies.filter(item => item.currency !== payload.currency);
      }
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
