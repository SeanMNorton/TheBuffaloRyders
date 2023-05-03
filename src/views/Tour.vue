<template>
  <div class="tour">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <SongKick :key="componentKey"/>
    <!-- <GigList :isNew="true" :limit='25'/>
    <GigList :isNew="false" :limit='25'/> -->
  </div>
</template>


<script>
// import GigList from '@/components/Tour/GigList.vue';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import SongKick from '../components/Tour/SongKick.vue';
import { GET_METADATA } from '../queries';

export default {
  name: 'tour',
  components: {
    SongKick,
    MetaData,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    reRender() {
      this.componentKey += 1;
    },
  },
  mounted() {
    this.reRender();
    // const recaptchaScript = document.createElement('script');
    // recaptchaScript.setAttribute('src', '//widget-app.songkick.com/injector');
    // document.head.appendChild(recaptchaScript);
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
