import Vue from 'vue'
import Vuex from 'vuex'
//import createPersistedState from 'vuex-persistedstste'
import topArticleJson from '@/assets/top-article.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //BGチョイス画面
    img_src: require("../assets/img_top1.png"),
    /*topArticle: function(){
      return topArticle
    }*/
    topArticle: [
      {
        title :'Fe.photos',
        subtitle:'Logo, Web, CI Design / Coding',
        img:'@/assets/img_art-t1.png',
        id :1
      },
    ],
  },

  getters: {
    topArticle(state) {
      return state.topArticle
    }
  },

  mutations: {
    setImage(state, payload){
      state.img_src = payload
    },

    setTopArticle(state, payload) {
      state.topArticle = payload
    }
  },
  actions: {
    getTopArticle(context) {
      context.commit(topArticleJson)
    }
  },

})
