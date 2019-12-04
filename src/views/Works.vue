<template>
<div id="works">
  <div id="fix"></div>
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
</template>

<script>
// @ is an alias to /src
import TopArticle from '@/components/TopArticle.vue'
import SubArticle from '@/components/SubArticle.vue'
import { mapGetters } from 'vuex'

export default {
  name: 'works',

  components: {
    TopArticle,
    SubArticle
  },

  //img_srcを生成させるようにする
  computed:mapGetters([ 'img_src', 'topArticle','subArticle','scrollHeader','spArticle']),
  
}

</script>

<style scoped>

/* 見切れ防止 */
#fix {
  width:100vw;
  height:60px;
  content:none;
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

  #fix{
    height:70px;
  }
}

</style>