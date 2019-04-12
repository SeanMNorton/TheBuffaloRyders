<template>
  <div class="home">
    <Showcase
      :isVideo="true"
      :description="'Live From ARC'"
      :url="'https://www.youtube.com/watch?v=6Q4u_PBnNew'"
    />
    <GigList :isNew='true' :limit='5'/>
    <h3><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3>
  </div>
</template>

<script>
import Showcase from '@/components/Showcase/Showcase.vue';
import GigList from '@/components/Tour/GigList.vue';

export default {
  name: 'home',
  components: {
    GigList,
    Showcase,
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
