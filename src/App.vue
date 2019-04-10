<template>
  <div id="app">
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>


<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
  },
};
</script>


<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Suez+One');
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

  html, body {
    margin: 0;
    padding: 0;
  }
</style>
