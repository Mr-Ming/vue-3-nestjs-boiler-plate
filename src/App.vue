<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Search msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Search from './components/pages/search.vue'

export default {
  name: 'App',
  components: {
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
