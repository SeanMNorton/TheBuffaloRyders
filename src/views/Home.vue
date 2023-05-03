<!-- eslint-disable max-len -->
<template>
  <div class="home">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <Showcase />
    <SongKick />

    <!-- OLD GIGS LIST -->
    <!-- <GigList :isNew='true' :limit='5'/> -->
    <!-- <h3 v-if="showGigLink"><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3> -->
  </div>
</template>

<script>
import Showcase from '@/components/Showcase/Showcase.vue';
// import GigList from '@/components/Tour/GigList.vue';
import SongKick from '@/components/Tour/SongKick.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import { GET_METADATA } from '../queries';

export default {
  name: 'home',
  components: {
    // GigList,
    SongKick,
    Showcase,
    MetaData,
  },
  apollo: {
    $loadingKey: 'loading',
    metaDatas: {
      query: GET_METADATA,
      variables: { where: { page: 'home' } },
    },
  },
  // data() {
  //   return {
  //     showGigLink: false,
  //   };
  // },
  // created() {
  //   setTimeout(() => {
  //     this.showGigLink = true;
  //   }, 1000);
  // },
};
</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';
  h3 {
    text-align: center;
    text-decoration: underline;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
</style>
