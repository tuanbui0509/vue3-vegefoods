import productService from '@/services/product.service'

import {
  ADD_PRODUCT_TO_CART,
  CHANGE_WISHLIST_SIZE,
  LOAD_PRODUCT_LIST,
  SET_PRODUCT_LIST,
} from './actions.type'

const state = {
  productList: null,
  wishlist: [
  ],
}

const actions = {
  async [LOAD_PRODUCT_LIST](context) {
    const { data } = await productService.getAll()
    context.commit(SET_PRODUCT_LIST, data)
  },
  
}

// in store
const getters = {
  productList(state) {
    return state.productList
  },
  wishlist(state) {
    return state.wishlist
  },
}

const mutations = {
  [SET_PRODUCT_LIST](state, data) {
    state.productList = data
  },
  [ADD_PRODUCT_TO_CART](state, product) {
    const found = state.wishlist.find(p => p.id === product.id)
    const wishProduct = { ...product, quantity: found ? found.quantity + 1 : 1 }
    const excluded = state.wishlist.filter(p => p.id !== product.id)
    const newWishlist = [ ...excluded, wishProduct]
    state.wishlist = newWishlist
  },
  
  // [CHANGE_WISHLIST_SIZE](state, { id, quantity}) {
  //   const found = state.wishlist.findIndex(p => p.id === id)
  //   const wishProduct = { ...state.wishlist[found], quantity: found !== -1 ? quantity : 1 }
  //   state.wishlist.splice(found, 1, wishProduct)
  //   const finalWishlist = state.wishlist.filter(p => p.quantity !== 0)
  //   state.wishlist = finalWishlist
  // },
}

export default {
  state,
  actions,
  mutations,
  getters
};
