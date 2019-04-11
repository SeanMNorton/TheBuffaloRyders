<template>
  <div class="footer">
    <div class="container">
      <BrandLink :url="urls.instagram" :name="'instagram'"/>
      <BrandLink :url="urls.facebook" :name="'facebook'"/>
      <!-- TODO: Make this a mail-to link or use postmark -->
      <h2>Book Now</h2>
      <BrandLink :url="urls.youtube" :name="'youtube'"/>
      <BrandLink :url="urls.bandcamp" :name="'bandcamp'"/>
    </div>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import BrandLink from '../UI/BrandLink/BrandLink.vue';

export default {
  name: 'Footer',
  components: {
    BrandLink,
  },
  computed: mapState({
    urls: state => state.socialUrls,
  }),
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
      max-width: 800px;
    }
</style>
