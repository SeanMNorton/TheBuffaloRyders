<template>
  <div class="container">
    <h1 class="header" style="text-align: center;">Merch</h1>
    <div id="my-store-17654854" style="max-width: 80vw; margin: auto;"></div>
  </div>
</template>

<script>
  export default {
    name: 'store',
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