<template>
  <div class="home">
    <Showcase
      :isVideo="true"
      :description="'Live From ARC'"
      :url="'https://www.youtube.com/watch?v=6Q4u_PBnNew'"
    />
  </div>
</template>

<script>
import Showcase from '@/components/Showcase/Showcase.vue';

export default {
  name: 'home',
  components: {
    Showcase,
  },
};
</script>
