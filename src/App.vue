<template>
  <div id="app">
    <p>Logo Header Component</p>
    <Navigation/>
    <router-view/>
    <p>Footer Component</p>
  </div>
</template>

<script>
  import Navigation from '@/components/Navigation.vue';

  export default {
    name: 'App',
    components: {
      Navigation
    }
  };
</script>

<style lang="scss">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
