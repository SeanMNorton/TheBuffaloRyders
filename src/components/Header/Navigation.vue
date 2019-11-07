<template>
  <div>
    <Slide class="mobile">
      <router-link to="/">Home</router-link>
      <router-link to="/gigs">Gigs</router-link>
      <router-link to="/music">Music</router-link>
      <router-link to="/insta">Feed</router-link>
      <a href="/store">Merch</a>
    </Slide>

    <div class="desktop">
      <!-- <router-link to="/">Home</router-link> -->
      <router-link to="/gigs">Gigs</router-link>
      <router-link to="/music">Music</router-link>
      <router-link to="/insta">Feed</router-link>
      <a href="/store">Merch</a>
    </div>
  </div>
</template>


<script>
import { Slide } from 'vue-burger-menu';
import { GET_URLS } from '../../queries';

export default {
  name: 'Navigation',
  components: {
    Slide,
  },
  apollo: {
    $loadingKey: 'loading',
    urls: {
      query: GET_URLS,
      variables: { where: { siteName: 'merch' } },
    },
  },
};
</script>


<style lang="scss">
  @import '../../assets/variables.scss';
    .desktop {
      display: none;
      justify-content: space-between;
      max-width: 950px;
      margin: 0 auto;
      padding: 0 10px;
      margin-top: 20px;
      @include fluid-type($min-width, $max-width, 26px, 50px );
    }
    .bm-burger-button {
      height: 20px;
      width: 26px;
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
      background: $color-primary !important;
    }
    .bm-menu {
      background-color: $color-background-lighter !important;
    }
    .bm-item-list {
      color: $color-primary;
      font-size: 1.5em;
    }

    @media(min-width: $break-point) {
      .mobile {
        display: none;
      }
      .desktop {
        display: flex;
      }
    }
    @media(min-width: $menu-break-point) {
        // .bm-burger-button {
        //   position: fixed;
        // }
    }
</style>
