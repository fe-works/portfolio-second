<template>
  <div id="app">

    <Loading v-if="checkLoading"></Loading>
    <div v-else id="main">
    <!-- Header -->
    <transition>
      <!--- clear,default,smart --->
    <ScalHeader v-if="scrollHeader === 'clear'"></ScalHeader>
    <Header v-else-if="scrollHeader === 'default'"></Header>
    <SpHeader v-else></SpHeader>
    </transition>
    <router-view/>
  </div>
  </div>
</template>

<script>
import ScalHeader from '@/components/ScalHeader.vue'
import Header from '@/components/Header.vue'
import SpHeader from '@/components/SpHeader.vue'
import Loading from '@/components/Loading.vue'

import { mapGetters } from 'vuex'
import store from '@/store'

export default {
  components: {
    ScalHeader,
    Header,
    SpHeader,
    Loading
  },

  //img_srcを生成させるようにする

  computed: {
   ...mapGetters(['scrollHeader','checkLoading']),
  },
  
  methods: {
    handleResize: function() {
        //例外:Topの時
        
        if(window.innerWidth <= 750){
          store.dispatch('smartphoneHeader')      
        } else if(this.$route.name === 'home') {
          store.dispatch('clearlyHeader')

        } else {
          store.dispatch('reverseHeader')
        }
      }
  },

  

  mounted(){
    window.addEventListener('resize', this.handleResize)

    //初期値
    this.handleResize()
  },

  beforeDestroy(){
    window.removeEventListener('resize',this.handleResize)
  }
  
  //ここまで参考
}
</script>

<style>
#app {
  font-family: 'century-gothic',a-otf-ud-shin-go-pr6n, sans-serif;
  font-weight: normal;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #1A1A1A;
}

#nav {
  padding: 30px;
}

#nav a {
  font-family: century-gothic, sans-serif;
  color: #1A1A1A;
  margin-left: 20px;
  margin-right: 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.v-enter-active, .v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter, .v-leave-to {
  opacity: 0.0;
}

.v-leave, .v-enter-to {
  opacity:1.0;
}
</style>
