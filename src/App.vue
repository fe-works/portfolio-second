<template>
  <div id="app">
    <!-- Header -->
    <Header></Header>
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  components: {
    Header
  }
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
</style>
