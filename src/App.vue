<template>
  <div>
    <div id="app">
        <Header/>
        <router-view/>
        <div class="push"></div>
    </div>
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
    font-display: swap;
    src: local('Suez One'), local('SuezOne-Regular'), url(https://fonts.gstatic.com/s/suezone/v3/taiJGmd_EZ6rqscQgOFOmouC-50x.woff2) format('woff2');
  }
  #app {
    letter-spacing: 1.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    margin: 0 auto -50px;
  }
  html {
    font-family: 'Suez One', Helvetica, monospace, sans-serif;
    background-color: $color-background;
    color: $color-primary;
    a {
      color: $color-primary;
      text-decoration: none;
      &:hover{
        color: $color-secondary
      }
    }
  }
  .push {
    height: 60px;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
