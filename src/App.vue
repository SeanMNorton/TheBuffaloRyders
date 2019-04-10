<template>
  <div id="app">
    <Header/>
    <router-view/>
    <p>Footer Component</p>
  </div>
</template>


<script>
import Header from '@/components/Header/Header.vue';

export default {
  name: 'App',
  components: {
    Header,
  },
};
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Roboto|Suez+One');
  @import './assets/variables.scss';
  #app {
    font-family: 'Suez One', monospace, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  html {
    background-color: $color-black;
    color: $color-yellow;
    a {
      color: $color-yellow;
      text-decoration: none;
      &:hover{
        color: $color-orange
      }
    }
  }
</style>
