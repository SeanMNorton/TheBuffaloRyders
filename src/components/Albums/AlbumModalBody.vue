<template>
  <div class="modal-body">

    <div class="main-info">
      <div id="album-box" class="album-box">
        <img v-if="album.albumCover"
          :src="'https://media.graphcms.com/resize=width:250/compress/'+album.albumCover.handle"
          :alt="album.title + ' Album art.'"
        >
      </div>

      <div class="album-info">
        <p class="album-title">{{album.title}}  ({{getYear(album.releaseDate)}})</p>
        <div class="song-list">
          <div :key="i" v-for="(song, i) in album.songs">
            {{song.trackNumber}}. {{song.title}}
          </div>
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

    <div v-if="album.spotify" class="spotify-embed">
      <Spinner/>
      <iframe :src="spotifyEmbededUrl"
        height="380"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media">
      </iframe>
    </div>

  </div>
</template>

<script>
import BrandLink from '../UI/BrandLink/BrandLink.vue';
import Spinner from '../UI/Spinner/Spinner.vue';

export default {
  name: 'AlbumModalBody',
  components: {
    BrandLink,
    Spinner,
  },
  props: ['album'],
  computed: {
    albumYear() {
      return this.album.relaseDate;
    },

    spotifyEmbededUrl() {
      const albumUrl = this.album.spotify.match(/\/album(.*)$/g)[0];
      return `https://open.spotify.com/embed${albumUrl}`;
    },
  },
  methods: {
    getYear: date => `${new Date(date).getFullYear()}`,
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .modal-body, .main-info {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
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
  .spotify-embed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 15px;
    .fulfilling-bouncing-circle-spinner {
      display: none;
      position: fixed;
      z-index: 0;
    }
    iframe {
      width: 70vw;
      min-width: 300px;
      z-index: 1;
    }
  }

  @media(min-width: 650px) {
    .modal-body, .main-info{
      flex-direction: row;
    }
    .album-info {
      display: flex;
      flex-direction: column;
      max-width: 450px;
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

   @media(min-width: 900px) {
    .modal-body, .main-info{
      justify-content: center;
    }
    .main-info {
      flex-wrap: nowrap
    }
  }

  @media(min-width: 1200px) {
    .spotify-embed {
      margin-left: 15px;
      iframe {
        width: 300px;
      }
      .fulfilling-bouncing-circle-spinner {
      display: unset;
      position: fixed;
    }
    }
  }
</style>
