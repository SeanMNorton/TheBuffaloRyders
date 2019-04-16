<template>
  <div class="footer">
    <div class="container">
      <h2>Book Now</h2>
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
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    }
    .footer {
      padding: 0px 20px;
      width: 100vw;
      min-height: 50px;
      background-color: $color-background-lighter;
      box-sizing: border-box;
      // margin-top: 200px;
    }
    .container {
      display: flex;
      margin: auto auto;
      min-height: 50px;
      justify-content: space-between;
      align-items: center;
      // max-width: 800px;
    }
    .brands > * {
      padding: 0 2vw;
    }
</style>
