<template>
<div class="list-container">
  <!-- Future Gigs -->
  <div v-if="isNew && newGigs.length > 0">
    <h1>Future Gigs</h1>
    <div class="gig-list">
      <GigListItem
        :key="index" v-for="(gig, index) in newerGigs"
        :date="gig.date" :city="gig.city"
        :state="gig.state"
      />
    </div>
  </div>
  <!-- Past Gigs -->
  <div v-else>
    <h1>Past Gigs</h1>
    <div class="gig-list">
      <GigListItem
        :key="index" v-for="(gig, index) in oldGigs"
        :date="gig.date" :city="gig.city"
        :state="gig.state"
      />
    </div>
  </div>
    <h3><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3>
</div>
</template>


<script>
import { mapGetters } from 'vuex';
import GigListItem from './GigListItem.vue';

export default {
  name: 'gigList',
  components: {
    GigListItem,
  },
  props: {
    isNew: Boolean,
    limit: Number,
  },
  computed: {
    ...mapGetters(['newGigs', 'oldGigs']),
  },
};
</script>


<style lang="scss" scoped>
  @import '@/assets/variables.scss';
  h1 {
    margin-top: 40px;
    margin-bottom: 15px;
    @include fluid-type($min-width, $max-width, $min-header-font, $max-header-font );
    text-align: center;
  }
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
  .gig-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 3vh;
  }
  .list-container {
    margin-bottom: 3vh;
  }
</style>
