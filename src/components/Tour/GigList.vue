<template>
  <div class="list-container">
    <div class="gig-list">
      <h1>{{title}}</h1>
        <GigListItem
          :key="index" v-for="(gig, index) in gigs"
          :gig="gig"
        />
        <h4 v-if="gigs.length <= 0">- None Listed -</h4>
    </div>
  </div>
</template>


<script>
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
  data() {
    return {
      title: this.isNew ? 'Future Gigs' : 'Past Gigs',
      gigsType: this.isNew ? 'newGigs' : 'oldGigs',
    };
  },
  computed: {
    gigs() {
      return this.$store.getters[this.gigsType].slice(0, this.limit);
    },
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
    align-items: center;
    flex-direction: column;
    margin-bottom: 3vh;
  }
  .list-container {
    margin-bottom: 3vh;
  }
</style>
