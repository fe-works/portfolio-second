<template>
  <div class="home">
    <div id="welcome">

      <!-- ここを自動生成できるようにする -->
        <div class="bg-top" v-bind:style="{'background-image':'url(' + img_src + ')'}" ></div>
        
        <!-- scrollアイコン -->
        <img class="scroll-icon" src="@/assets/scroll.svg">

    </div>

    <!-- 記事をjsonから生成させる -->
    <div id="grid">

      <div v-if="scrollHeader === 'smart'" id="top">
          <SubArticle v-for="(a,i) of spArticle"
          v-bind:subarticle = "a" v-bind:key="i.id"></SubArticle>

      </div>

      <div v-else id="top">
      <TopArticle v-for="(a,i) of topArticle"
      v-bind:article = "a" v-bind:key="i.id"></TopArticle>
      </div>

      <div id="sub">
      <SubArticle v-for="(b,j) of subArticle"
      v-bind:subarticle = "b" v-bind:key="j.id"></SubArticle>
      </div>

    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import TopArticle from '@/components/TopArticle.vue'
import SubArticle from '@/components/SubArticle.vue'
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name: 'home',

  components: {
    TopArticle,
    SubArticle
  },

  //img_srcを生成させるようにする
  computed:mapGetters([ 'img_src', 'topArticle','subArticle','scrollHeader','spArticle']),

  /* Height */
  methods:{
    handleScroll() {
      if(window.innerHeight < window.scrollY && window.innerWidth >= 750){
        store.dispatch('reverseHeader')
      } else if(window.innerWidth >= 750){
        store.dispatch('clearlyHeader')
      } else {
        store.dispatch('smartphoneHeader')
      }
    }
  },

  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    if(window.innerWidth >= 750){
      store.dispatch('crearlyHeader')
    } else {
      store.dispatch('smartphoneHeader')
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll',this.handleScroll)
    if(window.innerWidth >= 750){
      store.dispatch('reverseHeader')
    } else {
      store.dispatch('smartphoneHeader')
    }
  }
  
}
//  絶対違うので直す
</script>

<style scoped>
#welcome .bg-top {
  /* background-image:img_src */
  height: 100vh;
  width:100vw;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

#welcome .scroll-icon {
  position:absolute;
  width:70px;
  height:auto;
  left:50%;
  margin-left:-35px;
  bottom:30px;
}

.warning h1{
  background-color:#EEF1F2;
  color:#1A1A1A;
  margin:0;
}

#top, #sub{
display:flex;
justify-content: space-around;
align-items: center;
flex-wrap: wrap;
}

@media screen and (min-width:1600px) {
  #sub{
    width:1600px;
    height: auto;
    margin: 0 auto;
  }

  #top{
    width: 1600px;
    height:auto;
    margin: 0 auto;
  }
}

/* 2行配置 */
@media screen and (max-width:1549px) {
  #top{
    width:750px;
    height: auto;
    margin: 0 auto;
  }
  #sub{
    width:750px;
    height: auto;
    margin: 0 auto;
    justify-content: space-between;
  }
}


@media screen and (max-width:750px) {
  #top, #sub {
    width:100%;
    height: auto;
    margin: 0 auto;
    justify-content: space-around;
  }
}

</style>
