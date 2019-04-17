<template>
  <div class="album-container">
    <h1 class="title">{{album.title}}</h1>
    <img v-if="album.albumCover" :src="album.albumCover.url" :alt="album.albumCover.filename">
    <div class="brand-links">
      <BrandLink name="spotify" :url="album.spotify"/>
      <BrandLink name="itunes" :url="album.itunes"/>
      <BrandLink name="bandcamp" :url="album.bandcamp"/>
    </div>
    <!-- <h3>{{album.artist.name}}</h3> -->
    <!-- <div :key="i" v-for="(song, i) in album.songs">
      <p>{{song.trackNumber}}) {{song.title}}</p>
    </div> -->
  </div>
</template>


<script>
import BrandLink from '../UI/BrandLink/BrandLink.vue';

export default {
  name: 'album',
  components: {
    BrandLink,
  },
  props: ['album'],
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .album-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
  }
  .title {
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
      margin-bottom: 0;
  }
  .brand-links {
    margin: 10px 0;
  }
  img {
    margin: 0 auto;
    height: 280px;
    width: 280px;
  }
  a {
    padding-right: 20px;
  }

  @media (min-width: $break-point) {
    img {
      height: 350px;
      width: 350px;
    }
  }
</style>
