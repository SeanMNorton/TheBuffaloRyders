<template>
  <div class="container">

    <Modal v-if="showModal" @close="close" header="Gig Info">
      <GigModalBody :gig="gig" />
    </Modal>

    <div @click="openModal" class="list-item">
      <p class="info">{{prettyDate(new Date(gig.date), gig)}}</p>
      <p class="dots">{{dots()}}</p>
      <p class="info">{{gig.city}}, {{gig.state}}</p>
    </div>
  </div>
</template>

<script>
import Modal from '../UI/Modal/Modal.vue';
import GigModalBody from './GigModalBody.vue';

export default {
  name: 'gigListItem',
  components: {
    Modal,
    GigModalBody,
  },
  props: {
    gig: Object,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    prettyDate(date) {
      return `${date.toLocaleString('en-us', { month: 'short' })} ${date.getUTCDate()}`;
    },
    openModal() {
      this.showModal = true;
      document.getElementById('body').classList.add('no-scroll');
    },
    close() {
      this.showModal = false;
      document.getElementById('body').classList.remove('no-scroll');
    },
    dots() { return Array(100).fill('.').join(''); },
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  .container {
    width: 100%;
    max-width: 850px;
  }
  p {
    margin: 0
  }
  .list-item {
    display: flex;
    align-items: baseline;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    &:hover {
      cursor: pointer;
      color: $color-secondary;
    }
  }
  .info {
    padding: 10px 10px;
    text-decoration: underline;
  }
  .dots {
    flex: 1;
    margin: 0px;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
    overflow: hidden;
  }
</style>
