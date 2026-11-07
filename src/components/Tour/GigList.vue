<template>
  <div class="list-container">
    <div class="gig-list">
      <h1>{{title}}</h1>
      <GigListItem
        :key="index"
        v-for="(gig, index) in realGigs"
        :gig="gig"
      />
      <h4 v-if="realGigs.length <= 0">- None Listed -</h4>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import GigListItem from './GigListItem.vue';
import { GET_GIGS } from '../../queries';

const props = defineProps({
  isNew: Boolean,
  limit: Number,
});

const title = props.isNew ? 'Future Gigs' : 'Past Gigs';

const { result } = useQuery(GET_GIGS, () => ({
  // date greather than or equal || date less than that of today minus one day
  where: { [props.isNew ? 'date_gte' : 'date_lt']: new Date((new Date()).getTime() - (24 * 60 * 60 * 1000)) },
  first: 25,
  orderBy: props.isNew ? 'date_ASC' : 'date_DESC',
}));
const realGigs = computed(() => result.value?.gigs ?? []);
</script>

<style lang="scss" scoped>
  @use '@/assets/variables.scss' as *;
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
