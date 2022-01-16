import { createStore } from 'vuex'
import { SET_COUPON_CODE } from './actions.type'
import products from './products'

export default createStore({
  state: {
    couponCode: '',
  },
  getters: {
    couponCode(state) {
      return state.couponCode
    },
  },
  mutations: {
    [SET_COUPON_CODE](state, data) {
      state.couponCode = data
    },
  },
  actions: {
  },
  modules: {
    products,

  }
})
