<template>
  <div class="home">
    <div id="welcome">
      <!-- ここを自動生成できるようにする -->
        <div class="bg-top" v-bind:style="{'background-image': 'url(' + img_src + ')'}" ></div>
        <!-- scrollアイコン！！ -->

    </div>
    <h1>お知らせ:現在工事中です。ご迷惑をおかけします。</h1>
    <!-- 記事をjsonから生成させる -->
    <TopArticle v-for="(a,i) of topArticle"
    v-bind:article = "a" v-bind:key="i.id"></TopArticle>

  </div>
</template>

<script>
// @ is an alias to /src
import TopArticle from '@/components/TopArticle.vue'
import axios from 'axios';

export default {
  name: 'home',

  data() {
    return {
      topArticle: []
    }
  },

  components: {
    TopArticle
  },

   mounted(){
        axios.get('../assets/top-article.json')
        .then(res => {
            this.topArticle = res.data
            console.log(res.data)
        })
    },
  
  computed: {

    img_src: {
      //なぜか動作しないのでデバッグ
       get() {
          //let num = Math.random() * (4 - 1) + 1
          //this.$store.commit('updateImage',require('../assets/img_top' + num + '.png'))
          //console.log('OK!')
          return this.$store.state.img_src
        }
      }
    },
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
#welcome img{
  width:100vw;
  height:auto;
  align-items: center;

}
</style>
