<template>
    <!-- Header -->
    <div id="header">
    <div id="global-nav">
    
     <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- Logos for fe.photos -->
      <div id="logo-header">
            <img src="@/assets/header_logo/logo_white.svg" alt="logo">
      </div>

      <div id="logo-sns">
        <a href="https://twitter.com/_fechan/"><img src="@/assets/logo_sns/white_tw.svg"></a>
        <a href="https://instagram.com/_fechan/"><img src="@/assets/logo_sns/white_insta.svg"></a>
      </div>
    </div>
    </div>
</template>

<script>
export default {

name:'clear-header'

}
</script>

<style scoped>
#global-nav {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
  display: flex;
  justify-content: space-between;
  position: fixed;

  height: 60px;
  width:100vw;
  background-color:none;
}

#nav {
    height: auto;
    padding: 0;
    margin-top: auto;
    margin-left:20px;
    margin-bottom: auto;
    width: 200px;
}

#nav a {
  font-weight: normal;
  border: 0;
  color: #FFFFFF;
  margin-left: 10px;
  margin-right: 10px;
  text-decoration: none;
}

#logo-header, #logo-sns {
    margin-bottom: auto;
    margin-top: auto;

}

#logo-header img{
    height: 30px;
    width: auto;
}

#logo-sns {
    width: 200px;
    margin-right: 20px;
    display:flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: flex-end;
}


#logo-sns img{
    margin:0px;
    padding:0px 15px;
    width:20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
