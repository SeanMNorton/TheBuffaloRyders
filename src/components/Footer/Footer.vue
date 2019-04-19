<template>
  <div class="footer">
    <div class="container">
        <router-link to="/"><h2>- The Buffalo Ryders -</h2></router-link>
      <div class="brands">
          <BrandLink
            :key="url.siteName"
            v-for="url in urls"
            :url="url.url"
            :name="url.siteName"
          />
      </div>
    </div>
  </div>
</template>


<script>
import { GET_URLS } from '../../queries';
import BrandLink from '../UI/BrandLink/BrandLink.vue';

export default {
  name: 'Footer',
  components: {
    BrandLink,
  },
  apollo: {
    urls: GET_URLS,
  },
};
</script>


<style scoped lang="scss">
    @import '@/assets/variables.scss';
    h2 {
      text-align: center;
      margin: 5px 0px;
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    }
    .footer {
      padding: 0px 20px;
      width: 100vw;
      min-height: 50px;
      background-color: $color-background-lighter;
      box-sizing: border-box;
    }
    .container {
      display: flex;
      margin: auto auto;
      min-height: 50px;
      justify-content: space-around;
      align-items: center;
      flex-wrap: wrap;
      padding: 2vh 0vh;
    }
    .brands {
      display: flex;
    }
    .brands > * {
      padding: 0 1vw;
    }
    @media (min-width: $break-point) {
      .container {
        justify-content: space-between;
      }
    }
</style>
