<template>
<div>
  <!-- Future Gigs -->
  <div v-if="isNew">
    <h1>Future Gigs</h1>
    <div class="gig-list">
      <GigListItem
        :key="index" v-for="(gig, index) in newGigs"
        :date="gig.date" :city="gig.city"
        :state="gig.state"
      />
    </div>
  </div>
  <!-- Past Gigs -->
  <div v-if="!isNew">
    <h1>Past Gigs</h1>
    <div class="gig-list">
      <GigListItem
        :key="index" v-for="(gig, index) in oldGigs"
        :date="gig.date" :city="gig.city"
        :state="gig.state"
      />
    </div>
  </div>
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
  .gig-list {
    display: flex;
    justify-content: center;
  }
</style>
