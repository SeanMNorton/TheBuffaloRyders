<template>
  <div class="nav">
      <ul>
        <router-link to="/">Home</router-link> |
        <router-link to="/music">Music</router-link>
      </ul>
  </div>
</template>

<script>
    export default {
    name: 'Navigation',
    props: {
        links: Array,
    },
    };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
 
</style>
