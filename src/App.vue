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
  @import './assets/variables.scss';
  @font-face {
    font-family: 'Suez One';
    font-style: normal;
    font-weight: 400;
    font-display: auto;
    src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v3/taiJGmd_EZ6rqscQgOFOmouC-50x.woff2) format('woff2');
  }
  #app {
    font-family: 'Suez One', monospace, sans-serif;
    letter-spacing: 1.5px;
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
