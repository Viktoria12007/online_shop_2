import Vue from 'vue';
import Vuex from 'vuex';
import apiActions from './actions/api-actions';
import commonActions from './actions/common-actions';
import getters from './getters/getters';
import mutations from './mutations/mutations';

const actions = { ...apiActions, ...commonActions };

Vue.use(Vuex);

const store = new Vuex.Store({
   state: {
      searchValue: '',
    //    isMobile: false,  Изменения состояния приложения, в зависимости от
    //    isDesktop: true,  ширины экрана
       products: [],
       cart: []
   },
   mutations,
   actions,
   getters
})


export default store;