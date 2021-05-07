<template>
  <div id="app">
    <CockTail/>
  </div>
</template>

<script>
import CockTail from './components/CockTail'
export default {
  name: 'App',
  components:{
    CockTail
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
