<template>
  <div class="home">
    <Showcase />
    <GigList :isNew='true' :limit='5'/>
    <h3 v-if="showGigLink"><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3>
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
