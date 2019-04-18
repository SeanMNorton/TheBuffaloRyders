<template>
  <div class="modal-body">
    <div id="album-box" class="album-box">
       <img v-if="album.albumCover"
        :src="album.albumCover.url"
        :alt="album.title + ' Album art.'"
      >
    </div>
    <div class="album-info">
      <p class="album-title">{{album.title}}  ({{getYear(album.releaseDate)}})</p>
      <div class="song-list">
        <div :key="i" v-for="(song, i) in album.songs"> {{song.trackNumber}}. {{song.title}} </div>
      </div>

      <div class="text">
        <p>{{album.info}}</p>
      </div>

      <div class="brand-links">
        <BrandLink name="spotify" :url="album.spotify"/>
        <BrandLink name="itunes" :url="album.itunes"/>
        <BrandLink name="bandcamp" :url="album.bandcamp"/>
      </div>
    </div>

  </div>
</template>

<script>
import BrandLink from '../UI/BrandLink/BrandLink.vue';

export default {
  name: 'AlbumModalBody',
  components: {
    BrandLink,
  },
  props: ['album'],
  computed: {
    albumYear() {
      return this.album.relaseDate;
    },
  },
  methods: {
    getYear: date => `${new Date(date).getFullYear()}`,
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0px;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
  .album-box {
    width: 200px;
    height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 200px;
      height: 200px;
    }
  }
  .album-title {
    text-align: center;
    margin-bottom: 3vh;
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
  }
  .song-list {
    letter-spacing: 0.5px;
    font-size: 0.9em;
  }
  .song-list, .text {
    font-family: $secondary-font;
    padding: 0 10px;
  }
  .text {
    margin-top: 1.5vh;
    font-size: 0.6em;
  }
  .brand-links {
    margin-top: 10px;
    display: flex;
    justify-content: center;
    &>a {
      padding: 0 10px;
    }
  }
  @media( min-width: 650px) {
    .modal-body {
      flex-direction: row;
      justify-content: flex-start;
    }
    .album-info {
      display: flex;
      flex-direction: column;
      padding-left: 40px;
    }
    .album-title {
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    }

    .album-box {
      width: 280px;
      height: 280px;
      margin-left: 30px;
      img {
        width: 280px;
        height: 280px;
      }
    }
  }
</style>
