<template>
  <div class="home">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <Showcase />
    <GigList :isNew='true' :limit='5'/>
    <h3 v-if="showGigLink"><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3>
  </div>
</template>

<script>
import Showcase from '@/components/Showcase/Showcase.vue';
import GigList from '@/components/Tour/GigList.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import { GET_METADATA } from '../queries';

export default {
  name: 'home',
  components: {
    GigList,
    Showcase,
    MetaData,
  },
  data() {
    return {
      showGigLink: false,
    };
  },
  created() {
    setTimeout(() => {
      this.showGigLink = true;
    }, 1000);
  },
  apollo: {
    $loadingKey: 'loading',
    metaDatas: {
      query: GET_METADATA,
      variables: { where: { page: 'home' } },
    },
  },
};
</script>


<style lang="scss" scoped>
@import '@/assets/variables.scss';
  h3 {
    text-align: center;
    text-decoration: underline;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
  .tour-link {
    &:hover {
      color: $color-secondary;
    }
  }
</style>
