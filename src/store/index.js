import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstste'
//import { UPDATE_ARTICLE , UPDATE_BG } from '@/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({

  // Debag-option
  strict: true,

  state: {
    //記事情報
    articles: [],

    //詳細情報(引き渡し)
    details: [],

    //BGチョイス画面
    img_src: null
  },

  getters: {

    //記事の番号を探し当てる

  },
  mutations: {
    //img_srcにURL代入
    getImgSource(state) {
      const num = Math.random() * (4 - 1) + 1;
      console.log('debag')
      return state.img_src = '../assets/img_top' + num + '.png'
    },
  },
  actions: {
  },
  modules: {
  }
})
