import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstste'
//import { UPDATE_ARTICLE , UPDATE_BG } from '@/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    //BGチョイス画面
    img_src: require("../assets/img_top1.png")
  },

  getters: {
  },
  mutations: {
    updateImage(state, payload){
      state.img_src = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
