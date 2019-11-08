<template>
  <div class="home">
    <div id="welcome">
      <!-- ここを自動生成できるようにする -->
        <div class="bg-top" v-bind:style="{'background-image': 'url(' + img_src + ')'}" ></div>
        <!-- scrollアイコン！！ -->

    </div>
    
    <!-- 記事をjsonから生成させる -->
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
//import { mapGetters } from 'vuex'

export default {
  name: 'home',
  
  components: {
    HelloWorld
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

    //components
  },
}
//  絶対違うので直す
</script>

<style scoped>
#welcome .bg-top {
  /* background-image:img_src */
  height: 100vh;
  width:auto;
  background-size:cover;
  background-position: center;
  background-repeat: no-repeat;
}
#welcome img{
  width:100vw;
  height:auto;
  align-items: center;

}
</style>
