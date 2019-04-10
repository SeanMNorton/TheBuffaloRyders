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
    .footer {
      padding: 0px 20px;
      width: 100vw;
      position: absolute;
      bottom: 0;
      min-height: 50px;
      background-color: lighten($color-black, 10%);
      box-sizing: border-box;
    }
    .container {
      display: flex;
      margin: 0 auto;
      justify-content: space-between;
      align-items: center;
      max-width: 800px;
    }
</style>
