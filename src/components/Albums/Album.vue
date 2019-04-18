<template>
  <div>
    <Modal v-if="showModal" @close="close" :header="''">
      <AlbumModalBody :album="album" />
    </Modal>

    <div @click="openModal" class="album-container">
      <img v-if="album.albumCover"
        :src="'https://media.graphcms.com/resize=width:255/compress/'+album.albumCover.handle"
        :alt="album.title + ' Album Art'"
      >
      <h1 class="title">{{album.title}}</h1>
    </div>
  </div>
</template>


<script>
import Modal from '../UI/Modal/Modal.vue';
import AlbumModalBody from './AlbumModalBody.vue';

export default {
  name: 'album',
  components: {
    Modal,
    AlbumModalBody,
  },
  props: ['album'],
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
      document.getElementById('body').classList.add('no-scroll');
    },
    close() {
      this.showModal = false;
      document.getElementById('body').classList.remove('no-scroll');
    },
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .album-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    width: 45vw;
    min-width: 140px;
    max-width: 255px;
    padding: 1vw;
    &:hover {
      cursor: pointer;
      color: $color-secondary;
      img {
        opacity: 0.9;
        filter: alpha(opacity=90);
      }
    }
  }
  .title {
      @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
      margin-bottom: 0;
      margin-top: 2px;
      text-align: center;
  }
  .brand-links {
    margin: 10px 0;
  }
  img {
    margin: 0 auto;
    height: 45vw;
    width: 45vw;
    min-width: 140px;
    min-height: 140px;
    max-width: 255px;
    max-height: 255px;
  }
  a {
    padding-right: 20px;
  }
  @media (min-width: $break-point) {
    .album-container {
      padding: 0;
    }
  }
</style>
