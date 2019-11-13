<template>
  <div class="container">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <h1 class="header" style="text-align: center;">Merch</h1>
    <div id="my-store-17654854" style="max-width: 80vw; margin: auto;"></div>
  </div>
</template>

<script>
import { GET_METADATA } from '../queries';
import MetaData from '@/components/UI/MetaData/MetaData.vue';
  export default {
    name: 'store',
    components: {
      MetaData,
    },
    apollo: {
      $loadingKey: 'loading',
      metaDatas: {
        query: GET_METADATA,
        variables: { where: { page: 'store' } },
      },
    },
    beforeCreate() {
      this.$loadScript("https://app.ecwid.com/script.js?17654854&data_platform=code&data_date=2019-09-22")
      .then(() => {
        xProductBrowser("id=my-store-17654854");
      })
      .catch(() => {
       console.log('failed to load ecwid script')
      });
    },
  };
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

#my-store-17654854 {
  padding: 5vh 5vw 1vh 5vw;
  margin: 3vw !important;
  border-radius: $border-radius !important;
  background-color: $color-white !important;
}
</style>