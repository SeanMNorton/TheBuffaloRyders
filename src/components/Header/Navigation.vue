<template>
  <div>
    <Slide class="mobile">
      <router-link to="/">Home</router-link>
      <router-link to="/music">Music</router-link>
    </Slide>
    <!-- <div class="desktop">
      <router-link to="/">Home</router-link>
      <router-link to="/music">Music</router-link>
    </div> -->
  </div>
</template>


<script>
import { Slide } from 'vue-burger-menu';
import menu from '../../assets/menu.svg';

export default {
  name: 'Navigation',
  components: {
    Slide,
  },
  data() {
    return {
      menuSvg: menu,
    };
  },
};
</script>


<style lang="scss">
  @import '../../assets/variables.scss';
    .bm-burger-button {
      &:hover {
        .bm-burger-bars {
          background-color: $color-secondary !important;
        }
      }
    }
    .bm-burger-bars {
      background-color: $color-primary !important;
      border-radius: 8px;
    }
    .bm-cross {
      background: $color-primary;
    }
    .bm-menu {
      background-color: $color-background-lighter;
    }
    .bm-item-list {
      color: $color-primary;
      font-size: 1.5em;
    }

    @media(min-width: $break-point) {
        .bm-burger-button {
          top: 70px;
          left: 70px;
        }
    }
</style>

<style scoped lang="scss">
  @import '../../assets/variables.scss';
  // .mobile-nav {
  //   display: flex;
  //   align-items: center;
  //   justify-content: space-between;
  // }
  // .menu-button {
  //   padding: 0 20px;
  //   height: 6vh;
  //   max-height: 100px;
  //   min-height: 40px;
  //   &:hover {
  //     path {
  //       fill: $color-secondary;
  //     }
  //     cursor: pointer;
  //   }
  //   path {
  //     fill: $color-primary;
  //   }
  // }
</style>
