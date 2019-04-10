<template>
  <div class="header">
      <Navigation/>
      <Logo/>
  </div>
</template>


<script>
import Navigation from '@/components/Header/Navigation.vue';
import Logo from '@/components/Header/Logo.vue';

export default {
  name: 'Header',
  components: {
    Navigation,
    Logo,
  },
};
</script>


<style scoped lang="scss">
    @import '../../assets/variables.scss';
    .header {
        min-height: 10vh;
        max-height: 150px;
        display: flex;
        // justify-content: space-between;
        flex-direction: row-reverse;
        padding: 10px;
        box-sizing: border-box;
    }

    @media(min-width: $break-point) {
        .header {
            display: inline;
        }
    }
</style>
