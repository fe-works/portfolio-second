<template>

   <!-- Header -->
  <div id="sp-header">

    <transition name="fadein">
      <span v-on:click="onclick" v-if="headerMenuCheck === 'open'" id="background"></span>
    </transition>

      <!-- OK -->
    <span id="logo_bg"/>
 
      
    <transition name="scale">
      <span id="menu-bg" v-if="headerMenuCheck === 'open'" />
    </transition>

    <transition name="slidein">
      <div id="wrap"  v-if="headerMenuCheck === 'open'">
        <div id="nav">
          <router-link to="/">Home</router-link>
          <router-link to="/about">About</router-link>
          <router-link to="/works">Works</router-link>
          <router-link to="/contact">Contact</router-link>
        </div>

        <div id="logo-sns">
          <a href="https://twitter.com/_fechan/" target="_blank" rel=”noopener”><img src="@/assets/logo_sns/logo_tw.svg" alt="twitter-logo"></a>
          <a href="https://instagram.com/_fechan/" target="_blank" rel=”noopener”><img src="@/assets/logo_sns/logo_insta.svg" alt="instagram-logo"></a>
        </div>
      </div>
    </transition>
    
    <div id="menu-bar">

      <div id="sp_logo">
        <img src="@/assets//header_logo/logo_black.svg" v-on:click="$router.push('/').catch(err => {})" alt="logo">
      </div>
      
      <!-- ここだけ！！ -->
      <div v-on:click="onclick" id="menu-icon">
        <span v-bind:class="headerMenuCheck" class="menu_line menu_1">
        </span>
        <span v-bind:class="headerMenuCheck" class="menu_line menu_2">
        </span>
        <span v-bind:class="headerMenuCheck" class="menu_line menu_3">
        </span>
      </div>
    </div>      

    </div>
</template>

<script>
import store from '@/store'
import { mapGetters } from 'vuex'

export default {
  name:'sp-header',

  computed:mapGetters(['headerMenuCheck']),

  methods: {
    onclick() {
      if(this.headerMenuCheck === 'open'){
        store.dispatch('closeHeader')
      } else {
        store.dispatch('openHeader')
      }
    }
  },

}
</script>

<style scoped>
/* header-size */
#menu-bar {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: space-between;
  position: fixed;

  height: 71px;
  width:100vw;

  z-index: 300;
  }

/* Logo(fe.photos) */
#sp_logo img{
  height:40px;
  width:auto;
  margin: 11px;
}

#logo_bg {
  height:64px;
  width:240px;
  background-color:#FFFFFF;
  border-bottom-right-radius:60px;

  display:block;
  position:fixed;

  top:0;
  left:0;
  
  z-index:170;
  background-color:#FFFFFF;

  border-bottom-right-radius: 400px;
  filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.2));

}

/* menu-background */
#background {
  display:block;
  position:fixed;

  top:0;
  left:0;

  background-color:#1A1A1A;
  opacity:0.4;

  cursor: pointer;
  width:100vw;
  height:100vh;

}

.fadein-enter-active {
  animation: fade-in 0.6s;
}

.fadein-leave-active {
  animation: fade-in 0.6s reverse;
}

@keyframes fade-in {
  0% {
    opacity:0.0;
  }
  100% {
    opacity:0.4;
  }
}

/* contents-background(radius) */
#menu-bg {
  display:block;
  position:fixed;

  top:0;
  left:0;
  
  z-index:170;
  background-color:#FFFFFF;

  width:400px;
  height:400px;
  border-bottom-right-radius: 400px;
  filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.2));

}

.scale-enter-active {
  animation: scale-in 0.6s;
}
.scale-leave-active {
  animation: scale-in 0.8s reverse;
}

@keyframes scale-in{
  0%{
    width:240px;
    height:64px;
  }
 100%{
    width:400px;
    height:400px;
  }
}


/* menu-icon */
#menu-icon {
  position: absolute;
  right: 0;
  top: 0;

  cursor: pointer;

  z-index: 350;

  height: 71px;
  width: 71px;
}

.menu_line {
  display: block;
  position: relative;

  width:35px;
  height:2px;

  background-color:#1A1A1A;

  transition: all .6s;
  border-radius:6px;

  right:20px;
  margin-left:36px;

  
}

.menu_1{
  top:25px;

} 

.menu_2{
  top:32px;

} 

.menu_3 {
  top:39px;
}

.open.menu_1 {
  transform: rotate(45deg);
  top: 38px;
}
 
.open.menu_2 {
  width: 0;
  left: 50%;
}

.open.menu_3 {
  transform: rotate(-45deg);
  top: 34px;
}

/* contents */
#wrap {
  position: fixed;

  z-index: 190;

  width:400px;
  height:400px;

}

#nav{
  margin-top: 40px;
  width:105px;
  display:flex;
  flex-direction:column;
}

#nav a{
  margin:8px 0px;
  text-decoration: none;
  font-weight: normal;
  font-size:25px;
  color: #1A1A1A;
}

#nav a.router-link-exact-active {
  color: #1A1A1A;
}

#logo-sns {
  padding:0px 10px;
}

#logo-sns img {
  margin-left:15px;
}

.slidein-enter-active {
  animation: slide-in 0.8s;
}

.slidein-leave-active {
  animation: slide-in 0.6s reverse;
}

@keyframes slide-in {
  0% {
    transform: translateX(-100%);
  }
  10% {
    transform: translateX(-60%);
  }
  100% {
    transform: translateX(0);
  }
}

</style>
