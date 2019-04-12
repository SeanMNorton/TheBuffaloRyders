<template>
  <div class="tour">
    <GigList :isNew="true" :limit='25'/>
    <GigList :isNew="false" :limit='25'/>
  </div>
</template>


<script>
import GigList from '@/components/Tour/GigList.vue';

export default {
  name: 'tour',
  components: {
    GigList,
  },
};
</script>
