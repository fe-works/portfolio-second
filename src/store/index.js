import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstste'
//import { UPDATE_HEADER } from '@/mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //img_srcを乱数にする
    img_src: 'img_1.png',
    topArticle: require('@/assets/json/top-article.json'),
    subArticle: require('@/assets/json/sub-article.json'),
    spArticle: require('@/assets/json/sp-article.json'),
    descriptionArticle: require('@/assets/json/description.json'),

    scrollHeader:'clear',
    headerMenuCheck:'none',
    checkLoading: false

  },

  //stateを参照する関数はここへ
  getters: {
    //Topにある記事
    topArticle(state) {
      return state.topArticle
    },

    //Sub記事
    subArticle(state) { 
      return state.subArticle
    },

    spArticle(state) {
      return state.spArticle
    },

    //現在のヘッダー情報
    scrollHeader(state) {
      return state.scrollHeader
    },

    img_src(state) {
      return state.img_src
    },

    headerMenuCheck(state) {
      return state.headerMenuCheck
    },

    //ページ詳細情報を入手
    getDescription(state) {
      return id => {
        return state.descriptionArticle.find(description => description.id === id)
      }
    },

    checkLoading(state) {
      return state.checkLoading
    }

  },

  //stateを更新するものはこちらへ
  mutations: {

    //情報を更新
    updateHeader (state,payload){
      state.scrollHeader = payload
    },

    updateHeaderMenu (state, payload) {
      state.headerMenuCheck = payload
    },

    setImage(state) {
      let pic = 3
      let num = Math.floor(Math.random()* pic)+1
      state.img_src = 'img_' + num + '.png'
    },

    updateLoading(state, payload) {
      state.checkLoading = payload
    }

  },
  actions: {
  setImage(context) {
    context.commit('setImage')
  },

  smartphoneHeader(context) {
    context.commit('updateHeader','smart')
  },

  reverseHeader(context) {
    context.commit('updateHeader','default')
  },

  clearlyHeader(context) {
    context.commit('updateHeader','clear')
  },

  closeHeader(context) {
    context.commit('updateHeaderMenu','close')
  },

  openHeader(context) {
    context.commit('updateHeaderMenu','open')
  },

  setLoading(context) {
    context.commit('updateLoading',true)
  },

  outLoading(context) {
    context.commit('updateLoading',false)
  }
}

})
