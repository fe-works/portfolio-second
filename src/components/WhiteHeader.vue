<template>
    <!-- Header -->
    <div id="white-header">
    <div id="global-nav">

      <!-- link -->
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- Logos for fe.photos -->
      <div id="logo-header">
            <img src="@/assets//header_logo/logo_black.svg" alt="logo">
      </div>

      <div id="logo-sns">
        <a href="https://twitter.com/_fechan/"><img src="@/assets/logo_sns/logo_tw.svg" alt="twitter-logo"></a>
        <a href="https://instagram.com/_fechan/"><img src="@/assets/logo_sns/logo_insta.svg" alt="twitter-logo"></a>
      </div>
    </div>
    </div>
</template>

<script>

export default {
  name:'white-header'
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

  background-color: #ffffff;
  filter: drop-shadow(0px 0px 5px rgba(0,0,0,0.3));

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
  color: #1A1A1A;
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
