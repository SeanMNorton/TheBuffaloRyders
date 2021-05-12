<template>
  <div class="container">
    <MetaData v-if="metaDatas" :data="metaDatas[0]"/>
    <!-- <h1 class="header" style="text-align: center;">Merch</h1> -->
    <!-- <div id="my-store-17654854" style="max-width: 80vw; margin: auto;"></div> -->
<div style="overflow: auto;">
  <p style="
    font-family: SQ Market;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  ">Professional Buffalo Ryder T-Shirt</p>
  <p style="
    font-family: SQ Market;
    font-size: 18px;
    line-height: 24px;
    font-weight: 500;
  ">$25.00</p>
  <a target="_blank" href="https://checkout.square.site/merchant/MLDCD0J5R9VWF/checkout/MADJXIFQX42ZTLZS3B52G6V5?src=embed" style="
    display: inline-block;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 18px;
    line-height: 48px;
    height: 48px;
    color: #ffffff;
    min-width: 165px;
    background-color: #000000;
    border-radius: 4px;
    text-align: center;
    box-shadow: 0 0 0 1px rgba(0,0,0,.1) inset;
  ">Buy now</a>
</div>  </div>
</template>

<script>
import MetaData from '@/components/UI/MetaData/MetaData.vue';
import { GET_METADATA } from '../queries';

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
  //   this.$loadScript('https://app.ecwid.com/script.js?17654854&data_platform=code&data_date=2019-09-22')
  //     .then(() => {
  //       // eslint-disable-next-line no-undef
  //       xProductBrowser('id=my-store-17654854');
  //     })
  //     .catch(() => {
  //       // eslint-disable-next-line no-console
  //       console.log('failed to load ecwid script');
  //     });
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
#store {
  width: 100%;
  height: 100vh;
}
.w-block-header {
  display: none!important;
}
</style>
