export default {
  GET_SEARCH_VALUE_TO_VUEX({commit}, value) {
      commit('SET_SEARCH_VALUE_TO_VUEX', value)
  },
    // SET_MOBILE({commit}) {      Изменение состояния приложения в зависимости,
    //   commit('SWITCH_MOBILE')   от ширины экрана
    // },
    // SET_DESKTOP({commit}) {
    //   commit('SWITCH_DESKTOP')
    // },
    ADD_TO_CART({commit}, product) {
       commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
        commit('REMOVE_FROM_CART', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    }
}