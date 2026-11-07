<template>
  <div class="header">
      <NavigationComponent/>
      <LogoComponent />
  </div>
</template>

<script>
import NavigationComponent from '@/components/Header/Navigation.vue';
import LogoComponent from '@/components/Header/Logo.vue';

export default {
  name: 'HeaderComponent',
  components: {
    NavigationComponent,
    LogoComponent,
  },
};
</script>

<style scoped lang="scss">
    @import '../../assets/variables.scss';
    .header {
        min-height: 10vh;
        max-height: 150px;
        display: flex;
        flex-direction: row-reverse;
        padding: 10px;
        box-sizing: border-box;
    }

    @media(min-width: $break-point) {
        .header {
            // display: inline;
            display: flex;
            flex-direction: column-reverse;
            position: relative;
            max-height: unset;
        }

    }
</style>
