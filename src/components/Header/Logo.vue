<template>
  <div class="logo">
      <img :src="src" :alt="alt">
  </div>
</template>


<script>
import logo from '../../assets/logo.svg';

export default {
  name: 'Logo',
  data() {
    return {
      src: logo,
      alt: 'band logo',
    };
  },
};
</script>


<style scoped lang="scss">
    .logo {
        display: flex;
        justify-content: center;
        align-content: center;
        img {
            padding-top: 10px;
            padding-right: 20px;
            height: 30vw;
            max-height: 100px;
            box-sizing: border-box;
        }
    }
</style>
