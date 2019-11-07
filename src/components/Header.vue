// ヘッダー分離用,分離時は値を渡して一定以上で明るくなるヘッダーと別ける
<template>
    <!-- Header -->
    <div id="header">

      <!-- link -->
      <div id="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/works">Works</router-link>
        <router-link to="/contact">Contact</router-link>
      </div>

      <!-- Logos for fe.photos -->
      <div id="logo-header">

          <!-- 値を受け渡しできるようにしよう -->
          <div v-if="scrollHeader" key="white_logo">
            <img src="@/assets/logo_white.svg" alt="logo">
          </div>
          <div v-else key="black_logo">
            <img src="@/assets/logo_black.svg" alt="logo">
          </div>
      </div>

      <div id="logo-sns">
        <a href="https://twitter.com/_fechan/"><img src="@/assets/logo_tw.svg"></a>
        <a href="https://instagram.com/_fechan/"><img src="@/assets/logo_insta.svg"></a>
      </div>
    </div>
</template>

<script>

</script>

<style scoped>
#header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  display: flex;
  justify-content: space-between;
  
  height: 60px;
  width:100vw;

  border-bottom: solid 0.5px #EEF1F2;
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
  font-weight: bold;
  color: #1A1A1A;
  margin-left: 10px;
  margin-right: 10px;
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

}


#logo-sns img{
    margin:0px;
    padding:0px 15px;
    width:25px;
    /* padding:0px 20px 0px 20px; */
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
