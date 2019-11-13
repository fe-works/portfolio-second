<template>
<div id="works">
  <div id="fix"></div>
      <div id="top">
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
//import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      topArticle: [],
      subArticle: []
    }
  },

  components: {
    TopArticle,
    SubArticle
  },

   mounted(){
      this.topArticle = require('@/assets/top-article.json')
      this.subArticle = require('@/assets/sub-article.json')
    }
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

</style>