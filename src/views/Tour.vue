<template>
  <div class="tour">
    <MetaData v-if="metaDatas" :data="metaDatas[0]" />
    <SongKick :key="componentKey" />
    <!-- <GigList :isNew="true" :limit='25'/>
    <GigList :isNew="false" :limit='25'/> -->
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
// import GigList from '@/components/Tour/GigList.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import useMetaDatas from '../composables/useMetaDatas';
import SongKick from '../components/Tour/SongKick.vue';

const metaDatas = useMetaDatas('gigs');
const componentKey = ref(0);

// re-render the SongKick widget so its injector script runs again
onMounted(() => {
  componentKey.value += 1;
});
</script>
