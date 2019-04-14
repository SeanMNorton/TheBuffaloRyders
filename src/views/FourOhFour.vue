<template>
  <div class="container">
    <h1>404</h1>
    <h2>Page not found</h2>
    <router-link to="/">
      <p>Head on back</p>
    </router-link>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  h1, h2 {
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
  }
  p {
    text-decoration: underline;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    &:hover {
      cursor: pointer;
      color: $color-secondary;
    }
  }
  h1 {
    margin-bottom: 0;
  }
  h2 {
    margin-top: 0;
  }
  .container {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>
