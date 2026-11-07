<template>
  <div class="home">
    <MetaData v-if="metaDatas" :data="metaDatas[0]" />
    <ShowcaseComponent />
    <SongKick />

    <!-- OLD GIGS LIST -->
    <!-- <GigList :isNew='true' :limit='5'/> -->
    <!-- <h3 v-if="showGigLink"><router-link class="tour-link" to="/gigs">All Gigs</router-link></h3> -->
  </div>
</template>

<script setup>
import ShowcaseComponent from '@/components/Showcase/Showcase.vue';
// import GigList from '@/components/Tour/GigList.vue';
import SongKick from '@/components/Tour/SongKick.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import useMetaDatas from '../composables/useMetaDatas';

const metaDatas = useMetaDatas('home');
</script>

<style lang="scss" scoped>
@use '@/assets/variables.scss' as *;
  h3 {
    text-align: center;
    text-decoration: underline;
    @include fluid-type($min-width, $max-width, $min-sub-header-font, $max-sub-header-font );
  }
</style>
