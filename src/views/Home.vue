<template>
  <div class="home">
    <Showcase
      :isVideo="true"
      :description="'Live From ARC'"
      :url="'https://www.youtube.com/watch?v=6Q4u_PBnNew'"
    />
    <GigList :isNew='true' :limit='5'/>
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
