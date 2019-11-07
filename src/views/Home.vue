<template>
  <div class="home">
    <div id="welcome">
      <!-- Background-img 要Store(乱数で返す)-->
       <img v-bind:src="img_src">

    </div>

    <!-- 記事をjsonから生成させる -->
    
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  
  components: {
    HelloWorld
  },

//  絶対違うので直す
  computed: mapState(['img_src'])

}
</script>

<style scoped>
#welcome img{
  height:100vh;
  width:auto;
  align-items: center;

}
</style>
