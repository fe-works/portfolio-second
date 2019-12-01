/* transition 使おう... */
<template>

   <!-- Header -->
  <div id="header">
      
    
      <div v-if="headerMenuCheck === 'open'">

        <transition>
          <span v-on:click="onclick" id="background"></span>
        </transition>

        <transition name="panel">
          <div id="contents">
            <div id="nav">
              <router-link to="/">Home</router-link>
              <router-link to="/about">About</router-link>
              <router-link to="/works">Works</router-link>
              <router-link to="/contact">Contact</router-link>
            </div>

            <div id="logo-sns">
              <a href="https://twitter.com/_fechan/"><img src="@/assets/logo_sns/logo_tw.svg"></a>
             <a href="https://instagram.com/_fechan/"><img src="@/assets/logo_sns/logo_insta.svg"></a>
            </div>
          </div>
        </transition>
      </div>
    
      <!-- Logos for fe.photos -->
    <div id="menu-bar">

      <div id="sp_logo">
        <img src="@/assets//header_logo/logo_sp.svg">
      </div>
      
      <div v-on:click="onclick" id="menu_icon">
        <span v-bind:clsss="headerMenuCheck" class="menu_line menu_line-1">
        </span>
        <span v-bind:clsss="headerMenuCheck" class="menu_line menu_line-2">
        </span>
        <span v-bind:clsss="headerMenuCheck" class="menu_line menu_line-3">
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

  beforeDestroy() {
    store.dispatch('closeHeader')
  }

}
</script>

<style scoped>
#menu-bar {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: space-between;
  position: fixed;

  height: 40px;
  width:100vw;

  z-index: 300;
}

#menu-icon {
  position: absolute;
  right: 0;
  top: 0;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 350;
}

.menu_line {
  display: block;
  content: '';

  position: relative;

  width:35px;
  height:2px;

  background-color:#1A1A1A;

  transition: all .6s;

  border-radius:6px;

  right:20px;
  
}

#background {
  display:block;
  position:fixed;

  top:0;
  left:0;

  background-color:#1A1A1A;
  opacity:0.4;
  width:100vw;
  height:100vh;

}

.menu_line-1{
  top:25px;

} 

.menu_line-2{
  top:32px;

} 

.menu_line-3 {
  top:39px;
}

/*animation
.back-enter-active, .back-leave-active {
  transition: opacity 0.6s ease;
}

.back-enter, .back-leave-to {
  opacity:0.0;
}

.back-leave, .back-enter-to {
  opacity:1.0;
}

.menu_open .menu_line-1 {
  transform: rotate(45deg);
  top: 32px;
}
 
.menu_open .menu_line-2 {
  width: 0;
  left: 50%;
}

.menu_open .menu_line-3 {
  transform: rotate(-45deg);
  top: 32px;
}
*/

#contents{
  position: fixed;
  z-index:170;
  background-color:#FFFFFF;
  width:400px;
  height:400px;
  border-bottom-right-radius: 400px;
  filter: drop-shadow(0px 0px 20px rgba(0,0,0,0.2));
}

#nav{
  margin-top: 40px;
  display:flex;
  flex-direction:column;
}

#nav a{
  margin:10px 10px;
  text-decoration: none;
  font-weight: normal;
  font-size:25px;
  color: #1A1A1A;
}

#nav a.router-link-exact-active {
  color: #1A1A1A;
}

#logo-sns {
  padding:0px 30px;
}

#logo-sns img {
  margin-left:15px;
}

</style>
