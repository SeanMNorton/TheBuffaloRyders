<template>
  <div class="album-container">
    <img v-if="album.albumCover" :src="album.albumCover.url" :alt="album.albumCover.filename">
    <h1>{{album.title}}</h1>
    <div class="brank-links">
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
