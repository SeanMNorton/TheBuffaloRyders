<template>
  <div class="tour">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <GigList :isNew="true" :limit='25'/>
    <GigList :isNew="false" :limit='25'/>
  </div>
</template>


<script>
import GigList from '@/components/Tour/GigList.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import { GET_METADATA } from '../queries';

export default {
  name: 'tour',
  components: {
    GigList,
    MetaData,
  },
  apollo: {
    $loadingKey: 'loading',
    metaDatas: {
      query: GET_METADATA,
      variables: { where: { page: 'gigs' } },
    },
  },
};
</script>
