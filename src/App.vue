<template>
  <div v-if="!isDashboard">
    <div id="app">
        <Header/>
        <router-view/>
        <div class="push"></div>
    </div>
    <Footer/>
  </div>

  <div v-else>
    <router-view/>
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
  computed: {
    isDashboard() {
      return this.$route.name === 'dashboard';
    },
  },
};
</script>


<style lang="scss">
  @import './assets/variables.scss';
  #app {
    letter-spacing: 1.5px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    margin: 0 auto -50px;
  }
  html {
    font-family: $primary-font;
    text-transform: uppercase;
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
  p {
    margin: 0;
    padding: 0;
  }
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }
</style>
