<template>
  <div class="list-container" v-if="realGigs.length > 0">
    <div class="gig-list">
      <h1>{{title}}</h1>
        <GigListItem
          :key="index" v-for="(gig, index) in realGigs"
          :gig="gig"
        />
        <h4 v-if="realGigs.length <= 0">- None Listed -</h4>
    </div>
  </div>
</template>


<script>
import GigListItem from './GigListItem.vue';
import { GET_GIGS } from '../../queries';

export default {
  name: 'gigList',
  components: {
    GigListItem,
  },
  props: {
    isNew: Boolean,
    limit: Number,
  },
  apollo: {
    $loadingKey: 'loading',
    gigs: {
      query: GET_GIGS,
      variables() {
        return {
          where: { AND: [{ [this.isNew ? 'date_gte' : 'date_lt']: new Date() }] },
          first: 25,
          orderBy: this.isNew ? 'date_ASC' : 'date_DESC',
        };
      },
    },
  },

  data() {
    return {
      title: this.isNew ? 'Future Gigs' : 'Past Gigs',
    };
  },
  computed: {
    realGigs() {
      return this.gigs ? this.gigs : [];
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
